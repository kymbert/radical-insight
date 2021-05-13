require("../../src/models/User");
require("../util/db.js");
const assert = require("assert");
const mongoose = require("mongoose");
const users = require("../util/User.factory");
const User = mongoose.model("users");

const DEFAULT_USER = users.min_required.bob;

describe("User", () => {
  beforeEach((done) => {
    User.create(DEFAULT_USER).then(() => {
      done();
    });
  });

  afterEach((done) => {
    User.collection.drop().then(() => {
      done();
    });
  });

  it("create: requires email", (done) => {
    const bob = new User({
      name: "Bob Belcher",
      password: "ilovelinda",
    });
    bob.validate((error) => {
      assert(error.errors.email !== undefined);
      assert(error.errors.name === undefined);
      assert(error.errors.password === undefined);
      done();
    });
  });

  it("create: requires name", (done) => {
    const bob = new User({
      email: "bob@bobsburgers.local",
      password: "ilovelinda",
    });
    bob.validate((error) => {
      assert(error.errors.email === undefined);
      assert(error.errors.name !== undefined);
      assert(error.errors.password === undefined);
      done();
    });
  });

  it("create: requires password", (done) => {
    const bob = new User({
      email: "bob@bobsburgers.local",
      name: "Bob Belcher",
    });
    bob.validate((error) => {
      assert(error.errors.email === undefined);
      assert(error.errors.name === undefined);
      assert(error.errors.password !== undefined);
      done();
    });
  });

  it("create: prevents duplicate email", (done) => {
    const params = {
      email: DEFAULT_USER.email,
      name: "Imposter Bob Belcher",
      password: "ilovegayle",
    };

    User.create(params)
      .then(() => {
        throw new Error("expecting error when saving with duplicate email");
      })
      .catch(() => {
        done();
      });
  });

  it("create: all inputs are saved", (done) => {
    const params = users.full_demographic.bob;
    new User(params).save().then((savedUser) => {
      const today = new Date();
      assert(savedUser.agreedToTerms.getDate() === today.getDate());
      assert(savedUser.email === params.email);
      assert(savedUser.name === params.name);
      assert(savedUser.lastLogin.getDate() === today.getDate());
      assert(savedUser.password === params.password);
      assert(savedUser.phone === params.phone);
      done();
    });
  });

  it("create: sets default `lastLogin` value to today", (done) => {
    new User(users.min_required.linda).save().then((savedUser) => {
      const today = new Date();
      assert(savedUser.lastLogin.getDate() === today.getDate());
      done();
    });
  });

  it("read: returns user as JSON with id and version", (done) => {
    User.findOne({ email: DEFAULT_USER.email }).then((foundUser) => {
      assert(typeof foundUser === "object");
      assert(typeof foundUser.__v === "number");
      assert(typeof (foundUser.id === "string"));
      done();
    });
  });

  it("read: returns all parameters with data", (done) => {
    const params = users.full_demographic.bob;
    new User(params).save().then(() => {
      User.findOne({ email: params.email }).then((foundUser) => {
        const today = new Date();
        assert(foundUser.agreedToTerms.getDate() === today.getDate());
        assert(foundUser.email === params.email);
        assert(foundUser.name === params.name);
        assert(foundUser.lastLogin.getDate() === today.getDate());
        assert(foundUser.password === params.password);
        assert(foundUser.phone === params.phone);
        done();
      });
    });
  });
});
