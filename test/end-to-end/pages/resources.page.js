const BasePage = require("./base.page");
const util = require("util");

class ResourcesPage extends BasePage {
  constructor() {
    super();
    this.string = "resources";
    this.title = "Resources";
    this.url = "/resources";
  }
}

module.exports = ResourcesPage;
