const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");
require("dotenv").config();
require("./models/User");

const { logger } = require("./logger");

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const moodLogsRouter = require("./routes/moodLogs");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("MongoDB connection successful."))
  .catch((err) => {
    logger.error(`Error connecting to MongoDB:\n${err.message}`);
  });

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs/access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/moodLogs", moodLogsRouter);
app.get("/api/health", (req, res) => {
  res.json({
    status: "200",
    message: "All good",
  });
});

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "dev") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

module.exports = app;
