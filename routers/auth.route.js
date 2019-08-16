const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authRouter = express.Router();

// Registering a new user to db
authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, existingUser) => {
    if (err) {
      res.status(500);
      return next(err);
    }

    if (existingUser != null) {
      res.status(400);
      return next(new Error("That username already exists!"));
    }

    //create new user
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      const token = jwt.sign(user.toObject(), process.env.SECRET);
      return res
        .status(201)
        .send({ success: true, user: user.toObject(), token });
    });
  });
});

//  Login existing users to the app
authRouter.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user || user.password != req.body.password) {
      res.status(500);
      return next(new Error("username or password is incorrect"));
    }

    // login user
    const token = jwt.sign(user.toObject(), process.env.SECRET);
    return res.send({ success: true, user: User.toObject(), token });
  });
});

module.exports = authRouter;
