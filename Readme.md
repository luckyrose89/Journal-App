# Welcome to Thoughts & more

Thoughts & more is a note taking application. It can also be used as a personal journal by users to document their daily experiences with their personal accounts. A running instance of this application is deployed at[enter link description here](https://tranquil-tor-91514.herokuapp.com/login)

## Technologies

This application is developed with **MERN** (Mongo DB, Express JS, React & Node JS) stack technologies. It uses JWT based local authentication to login and register users to the app interface.

## Getting Started

To install and run this application start with cloning this repository to your machine with the command:

    git clone https://github.com/luckyrose89/Journal-App.git

After this, install the dependencies required for the server with command:

    npm install

Since this a test project, the mlab credentials and JWT secret are available in the .env file which is excluded from .gitignore. This is for **testing only**. Production version will not contain the .env file. Next run the command:

    node index.js or nodemon index.js

The console will output:

    Listening on 5000
    Database is now connected

The server for the application is now running on your system. However the browser will display nothing. To get the index.html to work, open another command prompt and cd into the project. Then, type the following commands to your console:

    cd client
    yarn install
    yarn build

The above stated commands will add frontend dependencies and create a public folder with an index.html file that can be rendered on the server.

If you switch back to the command prompt where you ran the server and start it again this time, the localhost:5000 will display a sign in page.

To start the frontend application switch again to the command prompt where you installed and build the client app with frontend dependencies. To run the app in developer mode run:

    yarn start

The address localhost:3000 will automatically open in your browser.

## API

Thoughts & more API has the following endpoints:

- (POST) => "/auth/signup"
  This route allows users to register to the application with a username and password.
- (POST) => "/auth/login"
  -This route lets registered users login to the application with their username and passwords.

**The following endpoints can be accessed only by authorized users**

- (GET) => "/api/note"
  This request will return all the notes created by a user

- (POST) => "/api/note"
  This request adds a new note to the user's note collection.

- (GET) => "/api/note/:noteId"
  This request return a specific note selected by the user

- (PUT) => "/api/note/:noteId"
  This request allows users to edit and update a note

- (DELETE) => "/api/note/:noteId"
  The user can select a specific note and delete it

### License

This project is licensed under the terms of the MIT license.
