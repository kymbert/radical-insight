const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const userService = require("../services/userService");

module.exports = app => {
  /**
   * Locate user by arbitrary query.
   *
   * @todo        Parse and sanitize `res.query` to prevent
   *              bad stuff.
   * @returns     User.
   */
  app.get("/api/user", async (req, res) => {
    let response = await userService.findUserBy(req.query);
    res.status(response.status).json(response.body);
  });

  app.use(express.json());

  /**
   * Save new user if email is unique.
   */
  app.post("/api/user", async (req, res) => {
    let response = await userService.saveUser(req.body);
    res.status(response.status).json(response.body);
  });

  /**
   * Delete a user by id.
   */
  app.delete("/api/user", (req, res) => {
    let name = {};
    User.findById(req.query.id, "name", (first, last) => {
      name = name;
    });
    User.findByIdAndDelete(req.query.id).then(() => {
      res.send(`Deleted user ${name.first} ${name.last}.`);
    });
  });
};
