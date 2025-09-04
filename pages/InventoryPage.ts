import { Locator, Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async assertOnInventory() {
    await expect(this.title).toHaveText('Products');
    await expect(this.page).toHaveURL(/.*inventory.html/);
  }

  async addProductByName(name: string) {
    const card = this.page.locator('.inventory_item').filter({ hasText: name });
    await expect(card.locator('text='+name)).toBeVisible();
    await card.locator('button:has-text("Add to cart")').click();
    await expect(this.cartBadge).toHaveText(/\d+/);
  }
}
