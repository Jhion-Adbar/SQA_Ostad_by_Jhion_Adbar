
class LoginPage {

    // Constructor receives the Playwright page object
    constructor(page) {
        this.page = page;

        // Login page locators
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    // Login method
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // Get login error message
    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}

// Export LoginPage class
module.exports = LoginPage;
