const mongoose = require("mongoose");
const { Schema } = mongoose;

const MoodSchema = new Schema({
  note: String,
  symptoms: [String],
  triggers: [String],
  value: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  }
});

module.exports = MoodSchema;
