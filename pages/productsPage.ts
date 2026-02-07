import { Page } from "@playwright/test";

export class ProductsPage {

    constructor(public page: Page) {

    }

    async getTitle() {
        return await this.page.locator(".title").textContent();
    }

}