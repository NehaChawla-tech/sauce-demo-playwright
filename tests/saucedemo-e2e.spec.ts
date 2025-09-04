/**
 * Author: Neha
 * Description: End-to-end purchase flow - saucedemo.com
 * Flow: Login , Add to Cart , Checkout , Order Confirmation
 */

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage, CheckoutOverviewPage, OrderCompletePage } from '../pages/CheckoutPages';
import { productName } from '../fixtures/test-data';

test.describe('Sauce Demo - E2E purchase flow', () => {
  test('should successfully complete purchase flow for one product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutStepOne = new CheckoutInfoPage(page);
  const checkoutOverview = new CheckoutOverviewPage(page);
  const orderComplete = new OrderCompletePage(page);


 // Login with valid credentials
await loginPage.navigateToLogin();
await page.waitForTimeout(1000);

await loginPage.loginAsStandardUser();
await page.waitForTimeout(1000);

// Land on the products page
await productsPage.assertOnInventory();
await page.waitForTimeout(1000);

// Add a product to the cart
await productsPage.addProductByName(productName);
await page.waitForTimeout(1000);

// Go to cart and verify the item is listed
await cartPage.goToCart();
await page.waitForTimeout(1000);

//assert
await cartPage.assertItemPresent(productName);
await page.waitForTimeout(1000);

// Continue to checkout and fill details
await cartPage.checkout();
await checkoutStepOne.fillInfo('Neha', 'Q', '74200');
await page.waitForTimeout(1000);

// Review pricing and place the order
await checkoutOverview.assertPricingConsistency();
await page.waitForTimeout(1000);

await checkoutOverview.finish();
await page.waitForTimeout(1000);

// Check final confirmation screen
await orderComplete.assertComplete();
await page.waitForTimeout(1000);

// Sanity check: cart should be empty now
await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);

  });
});
