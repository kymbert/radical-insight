class BasePage {
  constructor() {
    this.string = "home";
    this.title = "Home";
    this.url = "/";
  }

  get mobileMenu() {
    return $("#menu-icon");
  }
  get navLinks() {
    return $$("#nav-menu a");
  }

  // top navigation
  clickHomeLink() {
    this.navLinks[0].click();
  }
  clickAboutLink() {
    this.navLinks[1].click();
  }
  clickHowItWorksLink() {
    this.navLinks[2].click();
  }
  clickResourcesLink() {
    this.navLinks[3].click();
  }

  mobileClickTo(page) {
    this.mobileMenu.click();
    browser.pause(2000);
    this.navLinks[3].waitForDisplayed();

    switch (page) {
      case "home":
        this.clickHomeLink();
        break;
      case "about":
        this.clickAboutLink();
        break;
      case "howItWorks":
        this.clickHowItWorksLink();
        break;
      case "resources":
        this.clickResourcesLink();
        break;
      default:
        this.clickHomeLink();
    }
  }

  open() {
    browser.url(this.url);
  }

  isOpen() {
    return browser.getTitle() === this.title;
  }
}

module.exports = BasePage;
