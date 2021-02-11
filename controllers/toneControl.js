"use strict";
require("dotenv").config();
const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

const postTone = async (req, res, next) => {
  // tone analyzer setup
  const toneAnalyzer = new ToneAnalyzerV3({
    version: "2017-09-21",
    authenticator: new IamAuthenticator({
      apikey: process.env.TONE_ANALYZER_API_KEY,
    }),
    serviceUrl:
      "https://api.eu-gb.tone-analyzer.watson.cloud.ibm.com/instances/747ee2d7-6fa9-4692-a232-38d9c559eb4c",
  });
  try {
    const text = req.body.text;
    const toneParams = {
      toneInput: { text: text },
      content_type: "application/json",
    };
    const toneAnalysis = await toneAnalyzer.tone(toneParams);
    return res.status(200).json(toneAnalysis.result.document_tone.tones);
  } catch (err) {
    res.status(401);
    return next(err);
  }
};

exports = module.exports = {
  postTone,
};
