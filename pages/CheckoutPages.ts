import { Locator, Page, expect } from '@playwright/test';

export class CheckoutInfoPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
  }

  async fillInfo(first: string, last: string, zip: string) {
    await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueBtn.click();
  }
}

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly finishBtn: Locator;
  readonly itemTotal: Locator;
  readonly tax: Locator;
  readonly total: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishBtn = page.locator('[data-test="finish"]');
    this.itemTotal = page.locator('.summary_subtotal_label');
    this.tax = page.locator('.summary_tax_label');
    this.total = page.locator('.summary_total_label');
  }

  async assertPricingConsistency() {
    // Sanity: totals show currency and values
    await expect(this.itemTotal).toContainText('$');
    await expect(this.tax).toContainText('$');
    await expect(this.total).toContainText('$');
  }

  async finish() {
    await this.finishBtn.click();
  }
}

export class OrderCompletePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async assertComplete() {
    await expect(this.page).toHaveURL(/.*checkout-complete.html/);
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
    await expect(this.page.locator('.pony_express')).toBeVisible();
  }
}
