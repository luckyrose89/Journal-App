require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressjwt = require("express-jwt");
const { noteRouter } = require("./routers/index");
const { authRouter } = require("./routers/index");
const PORT = 5000 || process.env.PORT;

const app = express();

// connect to db
mongoose.set("useCreateIndex", true);
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
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/api", expressjwt({ secret: process.env.SECRET }));

// Add routes
app.use("/api/note", noteRouter);
app.use("/auth", authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ message: err.message });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("*", function(req, res) {
  res.status(404);
  res.send("Sorry the page you're looking for does not exist!");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
