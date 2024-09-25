# Sso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

<!-- structure -->
sso-angular-frontend/
├── src/
│   ├── app/
│   │   ├── auth.service.ts        <-- Authentication service
│   │   ├── login/                 <-- Login component
│   │   │   ├── login.component.ts <-- Login component TypeScript
│   │   │   ├── login.component.html <-- Login component template
│   │   ├── dashboard/             <-- Dashboard component
│   │   │   ├── dashboard.component.ts <-- Dashboard component TypeScript
│   │   │   ├── dashboard.component.html <-- Dashboard component template
│   │   ├── app.component.ts       <-- Root component
│   │   ├── app.component.html     <-- Root component template
│   │   ├── app-routing.module.ts  <-- Angular routing module
│   │   ├── app.module.ts          <-- Angular root module
│   └── main.ts                    <-- Application entry point


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- creating a OAuth2.0 ffrom the google developer console-->
Step 1: Register Your Application with Google
Go to Google Developer Console.
Create a new project.
Under API & Services > Credentials, click Create Credentials > OAuth 2.0 Client IDs.
Application Type: Web Application.
Add the following redirect URIs:
http://localhost:3000/auth/google/callback (for backend Node.js).
http://localhost:4200 (for Angular frontend).
Once the credentials are created, save the Client ID and Client Secret.

https://www.youtube.com/watch?v=wwy8-BSJVcg
https://www.youtube.com/watch?v=OKMgyF5ezFs

<!-- backend -->
mkdir sso-node-backend
cd sso-node-backend
npm init -y

<!-- install required packages -->
npm install express passport passport-google-oauth20 express-session cookie-parser cors

passport-google-oauth20: OAuth 2.0 strategy for Passport.js.
express-session: For session management.
cookie-parser: To handle cookies.
cors: To allow communication between Angular (frontend) and Node.js (backend).

<!-- Add client secreat key and etc -->
passport.use(new GoogleStrategy({
  clientID: 'xxxxxxxxxxxxxxxxxxx',
  clientSecret: 'xxxxxxxxxxxxxx',
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));


<!-- Start the Node.js Backend: -->
node app.js

<!-- Start the Angular Frontend: -->
ng serve

<!-- project explaination how SSO works -->
Roles in the OAuth Process
Your Application (Client):

This is the application you developed that requires user authentication to provide services or access resources. You register this application in the Google Developer Console to obtain the clientID and clientSecret.
Google (Authorization Server):

Google acts as the authorization server that provides the authentication service. It verifies the user's identity and grants permission for your application to access user information (like their profile and email).
User (End-User):

The user is the individual who will use your application. They need to log in using their Google account to authenticate themselves. When the user chooses to log in with Google, they will be redirected to Google's login page to enter their credentials and grant permission for your application to access their information.

<!-- initialization of the google IP -->
passport.use(new GoogleStrategy({
  clientID: 'xxxxxxxxxxxxx',
  clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));


Flow Explanation
1.	User Interaction: The user initiates the login by clicking the "Login with Google" button in your application.
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

2.	Redirect to Google: Your application redirects the user to Google’s authentication page using the clientID to identify your application.

3.	User Login: The user enters their credentials on the Google login page.

4.	Permission Grant: After successful login, the user is prompted to allow your application access to their profile and email.

5.	Callback with Authorization Code: If the user grants permission, Google redirects the user back to your application's specified callback URL, including an authorization code.
Once the user successfully logs in and grants permission to your application, Google redirects the user back to the callbackURL specified in your strategy (i.e., http://localhost:3000/auth/google/callback).

6.	Exchange for Access Token: Your application uses this authorization code to request an access token from Google.
Exchange for Access Token:
  The GoogleStrategy internally handles the exchange of the authorization code for an access token.
  This exchange is done using the code received as part of the redirect from Google. Passport.js manages this process, so you don't have to manually implement it.
Callback Function:
  If the authentication is successful, the user’s profile information is passed to the done callback function in your strategy, allowing you to handle the authenticated user (e.g., by saving their information to the session).
Redirect on Success:
  The user is then redirected to the specified dashboard or application page upon successful authentication.

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:4200' }),
  (req, res) => {
    // Successful authentication
    res.redirect('http://localhost:4200/dashboard');
  }
);

7.	Google Responds: Google validates the authorization code and responds with an access token (and potentially a refresh token).

8.	Access User Data: With the access token, your application can make authorized requests to Google’s API to access the user's profile and other data.

9.	Return User Profile: Your application retrieves the user’s profile information and returns it to the user, completing the login process.

Session Management:

The session is stored in cookies. Passport handles serializing the user and maintaining the session.
Once authenticated, the frontend can make requests to the backend to get the user’s data (/api/user), and if authenticated, the backend returns the user’s profile.


+---------------------+                        +------------------+
|                     |                        |                  |
|    Your Application |                        |      Google      |
|       (Client)     |                        | (Authorization   |
|                     |                        |      Server)     |
+---------------------+                        +------------------+
           |                                              |
           | 1. User clicks "Login with Google"           |
           | 2. Redirects user to Google login page       |
           |--------------------------------------------> |
           |                                              |
           |                                              |
           | <------------------------------------------  |
           |                                              |
           | 3. User enters credentials and logs in       |
           | 4. User grants permission to access profile  |
           |                                              |
           |                                              |
           | 5. Google redirects to callback URL          |
           |    (with authorization code)                 |
           |--------------------------------------------> |
           |                                              |
           | 6. Your app exchanges authorization code     |
           |    for access token                          |
           |--------------------------------------------> |
           |                                              |
           | 7. Google responds with access token         |
           |                                              |
           | 8. Your app can now access user data         |
           |    (using access token)                      |
           |--------------------------------------------> |
           |                                              |
           | 9. Return user profile information to user   |
