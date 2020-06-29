if (process.env.NODE_ENVIRONMENT === "production") {
  module.exports = require("./prod");
} else if (process.env.NODE_ENVIRONMENT === "qa") {
  module.exports = require("./qa");
} else {
  module.exports = require("./dev");
}
