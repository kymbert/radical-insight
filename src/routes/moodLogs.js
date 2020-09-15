const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const { logger } = require("../logger");

const router = express.Router();
const User = mongoose.model("users");
const MoodLog = mongoose.model("moodLogs");

function compareDateAscending(a, b) {
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
  "/user/:userId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.params.userId).then((user) => {
      const limit = req.query.limit || 5;
      const orderBy = req.query.orderBy || "desc";
      let logs = user.moodLogs;
      if (logs.length > 0) {
        switch (orderBy) {
          case "asc":
            logs = logs.sort(compareDateAscending);
            break;
          case "desc":
            logs = logs.sort(compareDateDescending);
            break;
          default:
            logs = logs.sort(compareDateDescending);
        }
        logs = logs.slice(0, limit);
      }
      return res.json({ logs: logs });
    });
  }
);

router.post("/", (req, res) => {
  if ("userId" in req.body) {
    User.findById(req.body.userId).then((user) => {
      const moodLog = new MoodLog(req.body.data);
      user.moodLogs.push(moodLog);
      user
        .save()
        .then(() => {
          res.status(201).send("Entry saved.");
        })
        .catch((err) => {
          logger.error(err);
          res.status(500).send(err);
        });
    });
  } else {
    res.status(400).send("No user found.");
  }
});

router.get("/user/:userId/moodLog/:logId", (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      logger.error(err.message);
      res.status(500).send(err.message);
    } else {
      const userLog = user.moodLogs.id(req.params.logId);
      res.status(200).json(userLog);
    }
  });
});

router.put("/user/:userId/moodLog/:logId", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userId, "moodLogs._id": req.params.logId },
    {
      $set: {
        "moodLogs.$.date": req.body.date,
        "moodLogs.$.mood": req.body.mood,
        "moodLogs.$.note": req.body.note,
        "moodLogs.$.stressors": req.body.stressors,
        "moodLogs.$.modifiedOn": new Date(),
      },
    },
    (err, updatedLog) => {
      if (err) {
        logger.error(err.message);
        res.status(500).send(err.message);
      } else {
        res.send(updatedLog);
      }
    }
  );
});

router.delete("/user/:userId/moodLog/:logId", (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      logger.error(err.message);
      res.status(500).send(err.message);
    }
    user.moodLogs.id(req.params.logId).remove();
    user.save((err, updatedUser) => {
      if (err) {
        logger.error(err);
        res.status(500).send("Unable to delete log.");
      } else {
        const logs = updatedUser.moodLogs.sort(compareDateDescending) || [];
        res.status(200).send({ logs: logs });
      }
    });
  });
});

module.exports = router;
