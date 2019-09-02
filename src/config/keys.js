if (process.env.NODE_ENVIRONMENT === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
