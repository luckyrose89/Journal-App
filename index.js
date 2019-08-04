require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { noteRouter } = require("./routers/index");
const PORT = 5000 || process.env.PORT;

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
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/note", noteRouter);
app.use((err, req, res, next) => {
  console.error(err);
  return res.send({ error: err.message });
});

app.get("/", (req, res) => {
  res.send("Welcome to Journal API");
});
app.get("*", function(req, res) {
  res.status(404);
  res.send("Sorry the page you're looking for does not exist!");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
