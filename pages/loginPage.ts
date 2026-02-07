import { Page } from "@playwright/test";

export class LoginPage {

    constructor(public page: Page) {

    }

    async enterUserName(username: string) {
        await this.page.locator("#user-name").fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator("#password").fill(password);
    }

    async clickLoginButton() {
        await this.page.locator("#login-button").click();
    }

    async login(username: string, password: string) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }


}