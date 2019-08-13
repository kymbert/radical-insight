const BasePage = require("./base.page");
const util = require("util");

class HowItWorksPage extends BasePage {
  constructor() {
    super();
    this.string = "howItWorks";
    this.title = "How it (will) Work";
    this.url = "/how-it-works";
  }
}

module.exports = HowItWorksPage;
