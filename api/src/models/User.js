const mongoose = require("mongoose");
const EntrySchema = require("./Entry");
const { Schema } = mongoose;

const UserSchema = new Schema({
  agreedToTerms: Date,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  lastLogin: {
    type: Date,
    required: true,
    default: Date.now()
  },
  password: {
    // TODO: password encryption.
    type: String,
    required: true
  },
  entries: [EntrySchema]
});

mongoose.model("users", UserSchema);
