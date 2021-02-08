require("dotenv").config();

const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

export const toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  authenticator: new IamAuthenticator({
    apikey: process.env.iam_apikey,
  }),
  serviceUrl: "https://api.eu-gb.tone-analyzer.watson.cloud.ibm.com",
});

const text =
  "Team, I know that times are tough! Product " +
  "sales have been disappointing for the past three " +
  "quarters. We have a competitive product, but we " +
  "need to do a better job of selling it!";

const toneParams = {
  tone_input: { text: text },
  content_type: "application/json",
};

toneAnalyzer
  .tone(toneParams)
  .then((toneAnalysis) => {
    console.log(JSON.stringify(toneAnalysis, null, 2));
  })
  .catch((err) => {
    console.log("error:", err);
  });

// toneAnalyzer
//   .tone(toneParams)
//   .then((toneAnalysis) => {
//     console.log(JSON.stringify(toneAnalysis, null, 2));
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });
