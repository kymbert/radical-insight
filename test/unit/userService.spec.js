const { expect } = require("chai");
const express = require("express");
const mongoose = require("mongoose");

require("../../src/app");
const userService = require("../../src/services/userService");
const User = mongoose.model("users");

describe("userService", () => {
  let testUserId;

  before(done => {
    new User({
      authType: "Email",
      email: "bob.belcher@aol.com",
      name: {
        first: "Bob",
        last: "Belcher"
      },
      password: "burgertime"
    })
      .save()
      .then(user => {
        testUserId = user.id;
        console.log(`Test user created with id ${testUserId}.`);
        done();
      })
      .catch(err => {
        console.log(`Error creating test user: ${err.message}.`);
        done();
      });
  });

  after(done => {
    User.findByIdAndDelete(testUserId)
      .then(() => {
        console.log(`Test user deleted.`);
        done();
      })
      .catch(err => {
        console.log(`Unable to delete test user: ${err.message}.`);
        done();
      });
  });

  it("findUserIdBy() - find user with valid email", done => {
    new Promise((resolve, reject) => {
      userService
        .findUserIdBy({ email: "bob.belcher@aol.com" })
        .then(response => {
          expect(response.status).to.equal(200);
        })
        .then(done, done);
    });
  });

  it("findUserIdBy() - return 400 when email is invalid", done => {
    new Promise((resolve, reject) => {
      userService
        .findUserIdBy({ email: "bob.belcher#aol.com" })
        .then(response => {
          expect(response.status, `status failed`).to.equal(400);
        })
        .then(done, done);
    });
  });

  it("findUserIdBy() - return 404 when email is not found", done => {
    new Promise((resolve, reject) => {
      userService
        .findUserIdBy({ email: "linda.belcher@aol.com" })
        .then(response => {
          expect(response.status).to.equal(404);
        })
        .then(done, done);
    });
  });

  // TODO: return 400 when trying to get user.id by any other property
  // TODO: return error when more than one record was found

  it("saveUser() - save new user", done => {
    new Promise((resolve, reject) => {
      userService
        .saveUser({
          authType: "Email",
          email: "jimmy@pestos.biz",
          name: {
            first: "Jimmy",
            last: "Pesto"
          },
          password: "bobsucks"
        })
        .then(response => {
          console.log(`Error saving new user: ${response.body.message}`);
          expect(response.status).to.equal(200);
          expect(response.body.email).to.equal("jimmy@pestos.biz");
          User.findByIdAndDelete(response.body.id);
        })
        .then(done, done);
    });
  });
});

it("saveUser() - reject user with duplicate email", done => {
  new Promise(function(resolve, reject) {
    userService
      .saveUser({
        authType: "Email",
        email: "bob.belcher@aol.com",
        name: {
          first: "Imposter Bob",
          last: "Belcher"
        },
        password: "notbob"
      })
      .then(response => {
        // TODO: should this return a different error code?
        expect(response.status).to.equal(500);
      })
      .then(done, done);
  });
});
