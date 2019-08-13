const assert = require("assert");
const pages = require("../pages");
const CONSTANTS = require("../support/constants");

describe("site navigation", () => {
  before(function() {
    browser.setWindowSize(CONSTANTS.width.mobile, CONSTANTS.height.mobile);
  });

  after(function() {
    browser.setWindowSize(CONSTANTS.width.desktop, CONSTANTS.height.desktop);
  });

  let testPages = [
    [pages.home, pages.about],
    [pages.about, pages.howItWorks],
    [pages.howItWorks, pages.resources],
    [pages.resources, pages.home]
  ];

  testPages.forEach(page => {
    it(`should navigate from '${page[0].title}' to '${page[1].title}'`, () => {
      page[0].open();
      page[0].mobileClickTo(page[1].string);

      browser.waitUntil(() => {
        return page[1].isOpen();
      });
      assert.equal(browser.getUrl(), `${driver.config.baseUrl}${page[1].url}`);
      assert.equal($("h2.subheading").getText(), page[1].title);
    });
  });

  it("should navigate through all footer links", () => {
    browser.url("/");

    $$("div.nav-lower a")[0].click();
    assert.equal(browser.getTitle(), "Privacy Policy");
    assert.equal($("h2.subheading").getText(), "Privacy Policy");

    $$("div.nav-lower a")[1].click();
    assert.equal(browser.getTitle(), "Terms & Conditions");
    assert.equal($("h2.subheading").getText(), "Terms & Conditions");

    $$("div.nav-lower a")[2].click();
    assert.equal(browser.getTitle(), "Get Involved");
    assert.equal($("h2.subheading").getText(), "Get Involved");
  });

  it("should display 404 when page not found", () => {
    browser.url("not-found");
    assert.equal($("h2.subheading").getText(), "404: Not Found");
  });
});
