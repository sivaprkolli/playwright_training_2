import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage";

export default class LoginPage extends BasePage {

    readonly usernameLocator: Locator;
    readonly passwordLocator: Locator;
    readonly loginButtonLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameLocator = this.page.locator('#user-name');
        this.passwordLocator = this.page.locator('#password');
        this.loginButtonLocator = this.page.locator('#login-button');
    }



    async login(username: string, password: string) {
        await this.enterText(this.usernameLocator, username);
        await this.enterText(this.passwordLocator, password);
        await this.clickElement(this.loginButtonLocator);
    }
}