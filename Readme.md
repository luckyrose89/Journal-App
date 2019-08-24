# Welcome to Thoughts & more

Thoughts & more is a note taking application. It can also be used as a personal journal by users to document their daily experiences with their personal accounts.

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

If you switch back to the command prompt where you ran the server and start it again this time, the localhost:5000 address on your browser would look like this:
![enter image description here](https://photos.app.goo.gl/zoBgyTQEMBwiDALv7)
