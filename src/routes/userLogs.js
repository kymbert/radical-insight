const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const { logger } = require("../logger");

const router = express.Router();
const Mood = mongoose.model("moods");
const User = mongoose.model("users");
const UserLog = mongoose.model("userLogs");

function compareDateDescending(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  let comparison = 0;
  if (dateA < dateB) {
    comparison = 1;
  } else {
    comparison = -1;
  }
  return comparison;
}

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.params.id).then((user) => {
      let logs = user.logs;
      if (logs.length > 0) {
        logs = logs.sort(compareDateDescending);
      }
      return res.json({ logs: logs });
    });
  }
);

router.post("/", (req, res) => {
  if ("userId" in req.body) {
    User.findById(req.body.userId).then((user) => {
      const mood = new Mood({
        note: req.body.data.note || "",
        symptoms: req.body.data.symptoms || "",
        triggers: req.body.data.triggers || "",
        value: req.body.data.value,
      });
      const userLog = new UserLog({
        mood: mood,
      });
      user.logs.push(userLog);
      user
        .save()
        .then(() => {
          res.send({ status: 200, message: "Entry saved." });
        })
        .catch((err) => logger.error(err));
    });
  }
});

module.exports = router;
