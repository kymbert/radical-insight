const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");

const router = express.Router();
const User = mongoose.model("users");

const { logger } = require("../logger");
const {
  validateLoginInput,
  validateRegisterInput,
} = require("../services/authService");

router.get(
  "/current_user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      status: "success",
      data: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
      },
    });
  }
);

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    logger.warn("Invalid login credentials.");
    return res.status(400).json({
      status: "fail",
      data: errors,
    });
  }
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user) {
      logger.warn(
        "Attempted log in with email ${email}, but user does not exist."
      );
      return res.status(404).json({
        status: "fail",
        data: errors,
      });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        user.lastLogin = new Date();
        user
          .save()
          .then((savedUser) => {
            jwt.sign(
              { id: savedUser.id, name: savedUser.name },
              process.env.JWT_SECRET,
              { expiresIn: 31556926 },
              (err, token) => {
                if (err) {
                  logger.error(err.message);
                  return res.status(500).json({
                    status: "error",
                    message: err.message,
                  });
                } else {
                  return res.json({
                    status: "success",
                    data: {
                      token: "Bearer " + token,
                      user: savedUser.toJSON(),
                    },
                  });
                }
              }
            );
          })
          .catch((err) => {
            logger.error(`Error for user with id ${user.id}: ${err.message}`);
          });
      } else {
        logger.warn(
          `Attempted login with email "${email}" failed with incorrect password.`
        );
        return res.status(400).json({
          status: "fail",
          data: {
            message: "Incorrect email or password.",
          },
        });
      }
    });
  });
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json({
      status: "fail",
      data: errors,
    });
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({
        status: "fail",
        data: {
          email: "An account with that email already exists.",
        },
      });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      lastLogin: Date.now(),
      password: req.body.password,
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err.message,
          });
        }
        newUser.password = hash;
        newUser
          .save()
          .then((user) =>
            res.json({
              status: "success",
              data: user.toJSON,
            })
          )
          .catch((err) =>
            res.status(500).json({
              status: "error",
              message: err.message,
            })
          );
      });
    });
  });
});

module.exports = router;
