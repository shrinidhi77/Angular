const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middleware
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:4200", // Angular frontend URL
    credentials: true,
  })
);
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // In production, set to true with HTTPS
      maxAge: 24 * 60 * 60 * 1000, // Session lasts 1 day
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Passport Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "xxxxxxxxxx",
      clientSecret: "xxxxxxxxxxxxxxx",
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true, // to get the req object
      accessType: "offline", // request offline access to get a refresh token
      prompt: "consent",
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
    },
    async (req, accessToken, refreshToken, profile, done) => {
      // Store user information in session
      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);
      const user = {
        profile,
        accessToken,
        refreshToken, // Ensure refresh token is captured here
      };
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("Serializing User:", user); // Log user session data
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("Deserializing User:", user); // Log user session data
  done(null, user);
});

// Route to start Google login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email", "openid"] })
);

// Google callback route
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:4200/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:4200/dashboard"); // Redirect to Angular app after login
  }
);

// Protected route to get user information
app.get("/api/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// Refresh the Access Token using the Refresh Token
app.get("/api/refresh-token", async (req, res) => {
  console.log("Authenticated:", req.isAuthenticated());
  console.log("Refresh Token:", req.user?.refreshToken);
  if (req.isAuthenticated() && req.user?.refreshToken) {
    try {
      const refreshToken = req.user.refreshToken;
      const response = await axios.post("https://oauth2.googleapis.com/token", {
        clientID:
          "xxxxxxx",
        clientSecret: "xxxxxxx",
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      });
      const newAccessToken = response.data.access_token;

      // Update the access token in the session
      req.user.accessToken = newAccessToken;
      res.json({ accessToken: newAccessToken });
    } catch (error) {
      res.status(500).json({
        message: "Failed to refresh access token",
        error: error.message,
      });
    }
  } else {
    res
      .status(401)
      .json({ message: "Unauthorized or no refresh token available" });
  }
});

// Logout route to clean session
app.get("/auth/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.clearCookie("connect.sid", { path: "/" });
      res.redirect("http://localhost:4200"); // Redirect to Angular app after logout
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
