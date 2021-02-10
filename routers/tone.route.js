const express = require("express");
const toneRouter = express.Router();

const { toneCtrl } = require("../controllers/index");

toneRouter.post("/", toneCtrl.postTone);

module.exports = toneRouter;
