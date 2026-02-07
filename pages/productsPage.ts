import { Page } from "@playwright/test";

export class ProductsPage {

    constructor(public page: Page) {

    }

    async getProductsCount() {
        return await this.page.locator('.inventory_item').count();
    }
}