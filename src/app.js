const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const express = require("express");
const createError = require("http-errors");
const logger = require("morgan");
const passport = require("passport");
const path = require("path");
const mongoose = require("mongoose");
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth")(app);
require("./routes/static")(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: `${err.status}: ${err.message}` });
});

module.exports = app;
