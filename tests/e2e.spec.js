const { test, expect } = require('@playwright/test');
const { AppPage } = require('../pages/appPages');
const data = require('../test-data/data.json');

test('Complete user flow', async ({ page }) => {

  const app = new AppPage(page);

  await app.navigateToSauceDemo();

  await app.login(data.validUser.username, data.validUser.password);

  await expect(page.locator('.title')).toHaveText('Products');

});
test('Negative login flow', async ({ page }) => {

  const app = new AppPage(page);

  await page.goto('https://www.saucedemo.com/');

  await app.login(data.invalidUser.username, data.invalidUser.password);

  await expect(page.locator('[data-test="error"]')).toBeVisible();

});