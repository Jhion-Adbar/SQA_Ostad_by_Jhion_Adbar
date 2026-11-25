const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  // Directory containing our test files
  testDir: './tests',

  // Maximum time allowed for each test
  timeout: 30000,

  // Playwright HTML and Allure reporters
  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['allure-playwright', {
      outputFolder: 'allure-results'
    }]
  ],

  // Browser and execution settings
  use: {
    baseURL: 'https://www.saucedemo.com',
    browserName: 'chromium',
    headless: false
  }

});
