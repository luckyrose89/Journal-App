require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressjwt = require("express-jwt");

const { noteRouter, authRouter, toneRouter } = require("./routers/index");
const PORT = process.env.PORT || 5000;

const app = express();

// const text =
//   "Good morning everyone. I see that our quarter four metrics are lower than expected. I know we have had a tough year and moral is down. Can we think of ways to increase our performance next year";
// const toneParams = {
//   toneInput: { text: text },
//   content_type: "application/json",
// };

// toneAnalyzer
//   .tone(toneParams)
//   .then((toneAnalysis) => {
//     console.log(JSON.stringify(toneAnalysis, null, 2));
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

// connect to db
mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is now connected");
  },
  (err) => {
    console.log("Cannot connect to database + ", err);
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Serve static files from React build
app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

// Add routes
app.use("/api/note", noteRouter);
app.use("/tone", toneRouter);
app.use("/auth", authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ message: err.message });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on ${PORT}`);
});
