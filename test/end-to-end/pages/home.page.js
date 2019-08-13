const BasePage = require("./base.page");
const util = require("util");

class HomePage extends BasePage {
  constructor() {
    super();
    this.string = "home";
    this.title = "Home";
    this.url = "/";
  }
}

module.exports = HomePage;
