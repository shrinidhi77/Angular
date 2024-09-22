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

<!--  -->
