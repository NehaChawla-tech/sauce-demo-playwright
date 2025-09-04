import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.error = page.locator('[data-test="error"]');
  }

  async navigateToLogin() {
    await this.page.goto('/');
    await expect(this.username).toBeVisible();
  }

  async loginAsStandardUser() {
    await this.username.fill('standard_user');  //username
    await this.password.fill('secret_sauce');  //password
    await this.loginButton.click();            //submit
  }
}
