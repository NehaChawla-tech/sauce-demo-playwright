# Sauce Demo – Playwright E2E (TypeScript)

A small, tidy Playwright project that automates the end‑to‑end purchase flow on [saucedemo.com](https://www.saucedemo.com/).  
The test logs in as a standard user, adds a product to the cart, checks out, and verifies the order completion screen.

## Key Highlights
- Scalable Playwright automation framework using Page Object Model (POM)
- End-to-end test coverage for user purchase journey
- Multi-browser testing support (Chromium, Firefox, WebKit)
- Clean and maintainable test structure

## Why this structure?
- **Page Object Model** keeps the test readable and easy to extend.
- **Typed selectors** and **clear assertions** reduce flakiness.
- **Configurable baseURL** + multi‑browser projects (Chromium/Firefox/WebKit) via `playwright.config.ts`.

## Test Coverage
- Login with valid credentials
- Login with invalid credentials
- Add product to cart
- Checkout flow validation
- Order confirmation verification

## Setup

**Prereqs**: Node.js 18+

```bash
npm ci || npm install
npm run install:pw
```

## Run tests

Headless (default):
```bash
npm test
```

Headed (useful for demoing):
```bash
npm run test:headed
```

View HTML report:
```bash
npm run report
```

## Project layout

```text
pages/
  LoginPage.ts            # login helpers + expectations
  InventoryPage.ts        # add to cart + inventory assertions
  CartPage.ts             # cart checks + go to checkout
  CheckoutPages.ts        # step one, overview, and complete page objects
tests/
  e2e.purchase.spec.ts    # one clean end‑to‑end happy path
fixtures/
  test-data.ts            # small sample data
playwright.config.ts      # baseURL, timeouts, browser projects, trace/screenshot
```

## What the test asserts

- Landing on **Products** after login, with URL check (`/inventory.html`).
- Adding the chosen item increases the cart badge.
- The cart contains the expected product name.
- Checkout step‑one fields accept input and navigate forward.
- Overview shows **item total**, **tax**, and **total** labels with currency.
- Completion page URL (`/checkout-complete.html`) and **Thank you for your order!** header are visible.
- Cart badge is cleared at the end (sanity that the session reflects an empty cart).

## Notes

- Selectors use `data-test` where available and semantic fallbacks where they aren't.
- Trace is collected **on first retry**; screenshots/videos are kept for failures.

## To Do (if I had more time)

- **Negative paths**: locked_out_user, wrong password, and inventory access without login.
- **Visual checks**: lightweight snapshot tests for critical screens.
- **Data‑driven cases**: run the same flow against multiple SKUs and user profiles.
- **Cross‑device**: add mobile viewport projects; validate responsive layout.
- **Parallel smoke vs. regression**: tag tests (e.g., `@smoke`, `@regression`) and wire GitHub Actions matrix.
- **Accessibility**: basic axe scans for important screens.
- **Reporting**: Allure integration and CI artifacts upload.
- **Env handling**: dotenv for creds/URLs; support staging/prod profiles.
- **Flake defense**: add network‑idle waits on critical transitions if the AUT changes its timing.

---

## CI (optional)

A minimal GitHub Actions workflow can run tests on pull requests. Enable if desired by committing `.github/workflows/ci.yml`:

```yaml
name: e2e
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci || npm install
      - run: npx playwright install --with-deps
      - run: npm test
      - run: npm run report
```

---

## How to share

1. Create a new public repo on GitHub.
2. Push this folder.
3. Paste the repo link in your submission.

## Note
This project is a simplified and publicly shareable version of automation frameworks I have worked on in production environments.
