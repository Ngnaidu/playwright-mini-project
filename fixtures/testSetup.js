const { test as base } = require('@playwright/test');

exports.test = base.extend({

  baseURL: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/');
    await use(page);
  }

});