require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const PORT = 4000 || process.env.PORT;

const app = express();

mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.MLAB_URI, {
        useNewUrlParser: true
    })
    .then(
        () => {
            console.log("Database is now connected");
        },
        err => {
            console.log("Cannot connect to database + ", err);
        }
    );

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})