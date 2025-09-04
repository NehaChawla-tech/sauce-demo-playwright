import { Locator, Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = page.locator('[data-test="checkout"]');
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
    await expect(this.page).toHaveURL(/.*cart.html/);
  }

  async assertItemPresent(name: string) {
    await expect(this.page.locator('.cart_item').filter({ hasText: name })).toBeVisible();
  }

  async checkout() {
    await this.checkoutBtn.click();
  }
}
