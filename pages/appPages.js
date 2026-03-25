class AppPage {

  constructor(page) {
    this.page = page;

    // locators
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.productTitle = page.locator('.title');
    this.todoInput = page.locator('.new-todo');
  }

  async navigateToSauceDemo() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async addTodo(task) {
    await this.todoInput.fill(task);
    await this.todoInput.press('Enter');
  }

}

module.exports = { AppPage };