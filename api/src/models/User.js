const mongoose = require("mongoose");
const EntrySchema = require("./Entry");
const UserLogSchema = require("./UserLog");
const { Schema } = mongoose;

const UserSchema = new Schema({
  agreedToTerms: Date,
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  name: {
    type: String,
    required: true
  },
  lastLogin: {
    type: Date,
    required: true,
    default: Date.now()
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  journals: [],
  logs: [UserLogSchema],
  reminders: []
});

/**
 * toJSON transform
 */
UserSchema.options.toJSON = {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.password;
    delete ret.journals;
    delete ret.logs;
    delete ret.reminders;
    return ret;
  }
};

mongoose.model("users", UserSchema);
