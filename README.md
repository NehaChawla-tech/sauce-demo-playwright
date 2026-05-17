# Sauce Demo – Playwright Automation Framework

End-to-end UI automation framework built using Playwright and TypeScript for validating critical e-commerce user journeys on SauceDemo.

---

## Overview

This project demonstrates a scalable Playwright automation framework following modern QA engineering practices including:

* Page Object Model (POM)
* Cross-browser execution
* CI/CD integration with GitHub Actions
* Reusable utilities and test data management
* HTML reporting and failure diagnostics

The framework automates the complete purchase workflow from login to order confirmation.

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions
* HTML Reports

---

## Framework Features

* Cross-browser testing (Chromium, Firefox, WebKit)
* Page Object Model architecture
* Data-driven test support
* Reusable page components
* Parallel execution support
* Failure screenshots and traces
* CI/CD pipeline integration
* HTML execution reports

---

## Test Coverage

### Authentication

* Valid login
* Invalid login validation

### Cart & Checkout

* Add product to cart
* Cart validation
* Checkout process
* Order completion verification

### End-to-End Flow

* Complete purchase journey automation
* UI validations and URL assertions
* Cart badge validation
* Order success confirmation

---

## Project Structure

```plaintext id="qwbw6i"
pages/
  LoginPage.ts
  InventoryPage.ts
  CartPage.ts
  CheckoutPages.ts

tests/
  e2e.purchase.spec.ts

fixtures/
  test-data.ts

.github/workflows/
  playwright.yml

playwright.config.ts
package.json
README.md
```

---

## Running Tests

Install dependencies:

```bash id="kvp2o8"
npm install
```

Install Playwright browsers:

```bash id="n8rb2m"
npx playwright install
```

Run tests:

```bash id="kz1q5p"
npm test
```

Run tests in headed mode:

```bash id="sjm5ra"
npm run test:headed
```

Open HTML report:

```bash id="6s5yq5"
npm run report
```

---

## GitHub Actions CI/CD

This framework integrates with GitHub Actions for automated test execution on every push and pull request.

Pipeline includes:

* Dependency installation
* Browser setup
* Automated Playwright execution
* HTML report generation

---

## Reporting & Debugging

* HTML Reports
* Failure Screenshots
* Playwright Trace Viewer
* Video Recording on Failure

---

## Future Enhancements

* API + UI hybrid framework integration
* Accessibility testing
* Visual regression testing
* Data-driven parallel suites
* Environment-based execution
* Allure reporting integration

---

## Author

Neha Chawla
Senior QA Automation Engineer

Skills:

* Playwright
* Selenium
* API Testing
* Performance Testing
* CI/CD Automation
* Agile QA
* GitHub Actions
