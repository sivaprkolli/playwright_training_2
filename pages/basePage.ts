import { Page, Locator } from "@playwright/test";

export default class BasePage {

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnElement(webElement: Locator) {
        await webElement.click();
    }

    async typeValue(webElement: Locator, data: string) {
        await webElement.fill(data);
    }

}