const data = require('../test-data/data.json');
const { test, expect } = require('@playwright/test');

test('Open page and validate title', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  const title = await page.title();

  expect(title).toContain('Internet');

});
test('Locator validation using text role and css', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  // TEXT LOCATOR
  const textLocator = page.getByText('Form Authentication');
  await expect(textLocator).toBeVisible();

  // ROLE LOCATOR
  const roleLocator = page.getByRole('link', { name: 'Form Authentication' });
  await expect(roleLocator).toBeVisible();

  // CSS LOCATOR
  const cssLocator = page.locator('a[href="/login"]');
  await expect(cssLocator).toBeVisible();

});
test('User action - enter text and click button', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter username
  await page.locator('#username').fill('tomsmith');

  // Enter password
  await page.locator('#password').fill('SuperSecretPassword!');

  // Click login button
  await page.locator('button[type="submit"]').click();

  // Validate successful login message
  await expect(page.locator('#flash')).toBeVisible();

});
test('User action - toggle checkbox', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox = page.locator('input[type="checkbox"]').first();

  await checkbox.check();

  await expect(checkbox).toBeChecked();

});
test('User action - select dropdown value', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const dropdown = page.locator('#dropdown');

  await dropdown.selectOption('1');

  await expect(dropdown).toHaveValue('1');

});
test('User action - keyboard input', async ({ page }) => {

  await page.goto('https://demo.playwright.dev/todomvc/');

  const input = page.locator('.new-todo');

  await input.fill('Learn Playwright');

  await input.press('Enter');

  await expect(page.getByText('Learn Playwright')).toBeVisible();

});
test('Assertion - element visibility', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  const heading = page.locator('h1');

  await expect(heading).toBeVisible();

});
test('Assertion - text validation', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  const heading = page.locator('h1');

  await expect(heading).toHaveText('Welcome to the-internet');

});
test('Assertion - URL validation', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByText('Form Authentication').click();

  await expect(page).toHaveURL(/login/);

});
test('Assertion - attribute validation', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  const usernameInput = page.locator('#username');

  await expect(usernameInput).toHaveAttribute('type', 'text');

});

test('Wait for dynamic content to load', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  await page.getByRole('button', { name: 'Start' }).click();

  const message = page.locator('#finish');

  await expect(message).toHaveText('Hello World!');

});


test('Valid login flow', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');

  await page.locator('#password').fill('secret_sauce');

  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory/);

});
test('Invalid login should show error message', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('wrong_user');

  await page.locator('#password').fill('wrong_password');

  await page.locator('#login-button').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();

//   await expect(page.locator('[data-test="error"]'))
// .toContainText('Username and password do not match');

});
test('Handle alert popup', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
    await dialog.accept();
  });

  await page.locator('button:has-text("Click for JS Alert")').click();

  await expect(page.locator('#result')).toContainText('You successfully clicked an alert');

});
test('Handle iframe interaction', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/iframe');

  const frame = page.frameLocator('#mce_0_ifr');

  const editor = frame.locator('#tinymce');

  await expect(editor).toContainText('Your content goes here.');

});
test('Handle new tab window', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Click Here' }).click()
  ]);

  await expect(newPage.locator('h3')).toHaveText('New Window');

});


test('Data driven UI test - Todo creation', async ({ page }) => {

  await page.goto('https://demo.playwright.dev/todomvc/');

  const input = page.locator('.new-todo');

  for (const item of data.todoInputs) {

    if (item.task !== "") {

      await input.fill(item.task);

      await input.press('Enter');

      await expect(page.getByText(item.task)).toBeVisible();

    }

  }

});
test('Network validation on login', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');

  await page.locator('#password').fill('secret_sauce');

  await Promise.all([
    page.waitForNavigation(),
    page.locator('#login-button').click()
  ]);

  await expect(page).toHaveURL(/inventory/);

});