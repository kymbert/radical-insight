const mongoose = require("mongoose");
const UserLogSchema = require("./UserLog");
const { Schema } = mongoose;

const ReminderSchema = new Schema({
  isActive: {
    type: Boolean,
    required: true
  },
  reminderType: {
    type: String,
    enum: ["MEDICATION", "MOOD"],
    required: true
  },
  reminderMethod: {
    type: String,
    enum: ["EMAIL", "PHONE"],
    required: true
  },
  schedule: {
    type: String,
    required: true
  }
});

module.exports = ReminderSchema;
