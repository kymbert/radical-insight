const keys = require("./config/keys");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const express = require("express");
const createError = require("http-errors");
const mongoose = require("mongoose");
const logger = require("morgan");
const passport = require("passport");
const path = require("path");

require("./models/Entry");
require("./models/User");

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connection successful."))
  .catch(err => {
    console.log(`Error connecting to MongoDB:\n${err.message}`);
  });

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

require("./config/passport")(passport);
require("./routes/users")(app);

module.exports = app;
