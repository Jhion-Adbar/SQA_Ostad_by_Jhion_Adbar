
const { test, expect } = require('@playwright/test');

// Import Page Object classes
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

// Import test data from JSON
const users = require('../data/users.json');

// Generate tests from JSON data
users.forEach((user) => {

    test(`Login test: ${user.username} - Expected ${user.expected}`, async ({ page }) => {

        // Open SauceDemo website
        await page.goto('/');

        // Create LoginPage object
        const loginPage = new LoginPage(page);

        // Perform login using JSON credentials
        await loginPage.login(user.username, user.password);

        // Check expected result
        if (user.expected === 'success') {

            // Create InventoryPage object
            const inventoryPage = new InventoryPage(page);

            // Verify successful login
            await expect(inventoryPage.pageTitle).toHaveText('Products');
            expect(await inventoryPage.isLoaded()).toBe(true);

        } else if (user.expected === 'error') {

            // Verify failed login
            await expect(loginPage.errorMessage).toBeVisible();

            const errorMessage = await loginPage.getErrorMessage();

            expect(errorMessage).toBeTruthy();
            expect(errorMessage.trim()).not.toBe('');

        }

    });

});
