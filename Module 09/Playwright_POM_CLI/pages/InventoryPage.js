
class InventoryPage {

    // Constructor receives the Playwright page object
    constructor(page) {
        this.page = page;

        // Inventory page locators
        this.pageTitle = page.locator('.title');
        this.productList = page.locator('.inventory_list');
    }

    // Verify that the inventory page is loaded
    async isLoaded() {
        const titleVisible = await this.pageTitle.isVisible();
        const titleText = await this.pageTitle.textContent();
        const productsVisible = await this.productList.isVisible();

        return titleVisible &&
               titleText.trim() === 'Products' &&
               productsVisible;
    }
}

// Export InventoryPage class
module.exports = InventoryPage;
