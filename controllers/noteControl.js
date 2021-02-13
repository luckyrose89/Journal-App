"use strict";
require("dotenv").config();
const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

const toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  authenticator: new IamAuthenticator({
    apikey: process.env.TONE_ANALYZER_API_KEY,
  }),
  serviceUrl:
    "https://api.eu-gb.tone-analyzer.watson.cloud.ibm.com/instances/747ee2d7-6fa9-4692-a232-38d9c559eb4c",
});

const Note = require("../models/schema");

// Note control functions
// Get all notes
const getAll = async (req, res, next) => {
  try {
    const notes = await Note.find({ user: req.user._id });
    return res.status(200).json(notes);
  } catch (err) {
    return next(err);
  }
};

// Create a note
const addNote = async (req, res, next) => {
  const note = new Note({
    title: req.body.title,
    body: req.body.body,
  });
  const toneParams = {
    toneInput: { text: req.body.body },
    content_type: "application/json",
  };
  const toneAnalysis = await toneAnalyzer.tone(toneParams);
  note.tones = toneAnalysis.result.document_tone.tones;
  note.user = req.user._id;
  try {
    const newNote = await note.save();
    return res.status(200).json(newNote);
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// Get a note
const getNote = async (req, res, next) => {
  try {
    const note = await Note.findOne({
      _id: req.params.noteId,
      user: req.user._id,
    });
    return res.status(200).json(note);
  } catch (err) {
    res.status(404);
    return next(new Error("Entry not found!!"));
  }
};

// Update a note
const updateNote = async (req, res, next) => {
  try {
    const note = await Note.findOne({
      _id: req.params.noteId,
      user: req.user._id,
    });

    note.title = req.body.title;
    note.body = req.body.body;
    const toneParams = {
      toneInput: { text: req.body.body },
      content_type: "application/json",
    };
    const toneAnalysis = await toneAnalyzer.tone(toneParams);
    note.tones = toneAnalysis.result.document_tone.tones;
    const updatedNote = await note.save();
    return res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// Delete a note
const deleteNote = async (req, res, next) => {
  try {
    const noteToDelete = await Note.findOneAndDelete({
      _id: req.params.noteId,
      user: req.user._id,
    });
    return res.status(200).json(noteToDelete);
  } catch (err) {
    res.status(404);
    return next(err);
  }
};

exports = module.exports = {
  getAll,
  addNote,
  getNote,
  updateNote,
  deleteNote,
};
