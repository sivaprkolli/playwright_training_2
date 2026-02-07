import { Page, Locator } from "@playwright/test";

export default class BasePage {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickElement(locator: Locator) {
        await locator.click();
    }

    async enterText(locator: Locator, text: string) {
        await locator.fill(text);
    }
}