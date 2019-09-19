const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  agreedToTerms: {
    type: String,
    required: true,
    default: Date.now()
  },
  authType: {
    type: String,
    enum: ["Email", "Google"],
    required: true,
    default: "Radical"
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  googleId: {
    type: String,
    required: function() {
      return this.authType === "Google";
    }
  },
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  password: {
    // TODO: password encryption.
    type: String,
    required: function() {
      return this.authType === "Email";
    }
  }
});

mongoose.model("users", userSchema);
