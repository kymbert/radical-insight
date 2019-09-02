const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  googleId: String,
  firstName: String,
  lastName: String
});

mongoose.model("users", userSchema);
