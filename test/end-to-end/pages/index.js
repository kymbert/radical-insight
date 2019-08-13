const AboutPage = require("./about.page");
const HomePage = require("./home.page");
const HowItWorksPage = require("./how-it-works.page");
const ResourcesPage = require("./resources.page");

let aboutPage = new AboutPage();
let homePage = new HomePage();
let howItWorksPage = new HowItWorksPage();
let resourcesPage = new ResourcesPage();

module.exports = {
  about: aboutPage,
  home: homePage,
  howItWorks: howItWorksPage,
  resources: resourcesPage
};
