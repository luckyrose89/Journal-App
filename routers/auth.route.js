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
authRouter.post("/login", (req, res) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) {
      return res
        .status(403)
        .send({ success: false, err: "Username or password are incorrect" });
    }
    user.checkPassword(req.body.password, (err, match) => {
      if (err) return res.status(500).send(err);
      if (!match)
        return res.status(401).send({
          success: false,
          message: "Username or password are incorrect"
        });
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.send({
        token: token,
        user: user.withoutPassword(),
        success: true
      });
    });
  });
});

module.exports = authRouter;
