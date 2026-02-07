import { Page } from "@playwright/test";

export default class LoginPage {


    constructor(public page: Page) {

    }

    async enterUsername(username: string) {
        return await this.page.locator('#user-name').fill(username);
    }

    async enterPassword(password: string) {
        return await this.page.locator('#password').fill(password);
    }

    async clickLogin() {
        return await this.page.locator('#login-button').click();
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getHeaderText() {
        return await this.page.locator('.title').textContent();
    }
}