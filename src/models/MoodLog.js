const mongoose = require("mongoose");
const { Schema } = mongoose;

const MoodLogSchema = new Schema({
  createdOn: {
    type: Date,
    required: true,
    default: new Date(),
  },
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
  modifiedOn: {
    type: Date,
    required: true,
    default: new Date(),
  },
  note: String,

  // mood
  anxiety: Number,
  energy: Number,
  mood: { type: Number, require: true },

  // behavior
  exercise: Boolean,
  selfHarm: Boolean,
  suicidalIdeation: Boolean,

  // environment
  alcohol: Boolean,
  drugUse: Boolean,
  medication: Boolean,
  sleep: Number,
  stressors: [String],
});

mongoose.model("moodLogs", MoodLogSchema);
module.exports = MoodLogSchema;
