const mongoose = require("mongoose");
const { Schema } = mongoose;

const JournalSchema = new Schema({
  date: Date,
  entry: String,
  isPinned: Boolean,
  tags: [String],
  title: String
});

module.exports = JournalSchema;
