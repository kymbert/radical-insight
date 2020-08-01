/* eslint mocha/no-hooks-for-single-case: 0 */
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

let mongoServer;

before(done => {
  mongoServer = new MongoMemoryServer();
  mongoServer.getUri().then(mongoUri => {
    mongoose.connect(mongoUri, {}).then(() => {
      done();
    });
  });
});

after(done => {
  mongoose.disconnect().then(() => {
    mongoServer.stop();
    done();
  });
});
