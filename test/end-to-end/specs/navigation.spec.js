const assert = require('assert');

describe('top navigation', () => {
  it('should navigate through all top links', () => {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Home');

    browser.$$('a')[1].click();
    assert.equal(browser.getTitle(), 'About');
    assert.equal(browser.getUrl(), `${driver.config.baseUrl}/about`);

    browser.$$('a')[2].click();
    assert.equal(browser.getTitle(), 'How it (will) Work');
    assert.equal(browser.getUrl(), `${driver.config.baseUrl}/how-it-works`);

    browser.$$('a')[3].click();
    assert.equal(browser.getTitle(), 'Resources');
    assert.equal(browser.getUrl(), `${driver.config.baseUrl}/resources`);

    browser.$$('a')[0].click();
    assert.equal(browser.getTitle(), 'Home');
    assert.equal(browser.getUrl(), `${driver.config.baseUrl}/`);
  });
});
