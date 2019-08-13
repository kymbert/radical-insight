const BasePage = require("./base.page");
const util = require("util");

class AboutPage extends BasePage {
  constructor() {
    super();
    this.string = "about";
    this.title = "About";
    this.url = "/about";
  }
}

module.exports = AboutPage;
