const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");

const keys = require("../config/keys");
const router = express.Router();
const User = mongoose.model("users");

const {
  validateLoginInput,
  validateRegisterInput
} = require("../services/authService");

router.get(
  "/current_user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

router.post("/login", (req, res) => {
  console.log(req.body);
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found." });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        user.lastLogin = Date.now();
        user
          .save()
          .then(savedUser => {
            const payload = {
              id: savedUser.id,
              name: savedUser.name
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 31556926
              },
              (err, token) => {
                return res.json({
                  success: true,
                  token: "Bearer " + token,
                  user: savedUser
                });
              }
            );
          })
          .catch(err => console.log(err));
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Incorrect password." });
      }
    });
  });
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json({
      ...errors,
      success: false
    });
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({
        success: false,
        email: "Email already exists."
      });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      lastLogin: Date.now(),
      password: req.body.password
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

module.exports = router;
