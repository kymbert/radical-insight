const JournalSchema = require("./Journal");
const ReminderSchema = require("./Reminder");
const MoodLogSchema = require("./MoodLog");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  agreedToTerms: Date,
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  journals: [JournalSchema],
  moodLogs: [MoodLogSchema],
  reminders: [ReminderSchema],
});

/**
 * toJSON transform
 */
UserSchema.options.toJSON = {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.password;
    delete ret.journals;
    delete ret.logs;
    delete ret.reminders;
    return ret;
  },
};

mongoose.model("users", UserSchema);
