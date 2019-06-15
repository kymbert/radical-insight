const assert = require('assert');

describe('site navigation', () => {
  it('should navigate through all top links', () => {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Home');

    browser.$$('a')[1].click();
    assert.equal(browser.getTitle(), 'About');
    assert.equal(browser.getUrl(), `${driver.config.baseUrl}/about`);
    assert.equal($('h2.subheading').getText(), 'About');

    browser.$$('a')[2].click();
    assert.equal(browser.getTitle(), 'How it (will) Work');
    assert.equal(browser.getUrl(), `${driver.config.baseUrl}/how-it-works`);
    assert.equal($('h2.subheading').getText(), 'How it (will) Work');

    browser.$$('a')[3].click();
    assert.equal(browser.getTitle(), 'Resources');
    assert.equal(browser.getUrl(), `${driver.config.baseUrl}/resources`);
    assert.equal($('h2.subheading').getText(), 'Resources');

    browser.$$('a')[0].click();
    assert.equal(browser.getTitle(), 'Home');
    assert.equal(browser.getUrl(), `${driver.config.baseUrl}/`);
  });

  it('should navigate through all footer links', () => {
    browser.url('/');

    $$('div.nav-lower a')[0].click();
    assert.equal(browser.getTitle(), 'Privacy Policy');
    assert.equal($('h2.subheading').getText(), 'Privacy Policy');

    $$('div.nav-lower a')[1].click();
    assert.equal(browser.getTitle(), 'Terms & Conditions');
    assert.equal($('h2.subheading').getText(), 'Terms & Conditions');

    $$('div.nav-lower a')[2].click();
    assert.equal(browser.getTitle(), 'Get Involved');
    assert.equal($('h2.subheading').getText(), 'Get Involved');
  });

  it('should display 404 when page not found', () => {
    browser.url('not-found');
    assert.equal($('h2.subheading').getText(), '404: Not Found');
  });
});
