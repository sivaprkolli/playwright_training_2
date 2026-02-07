import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage";

export default class SignInPage extends BasePage {

    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.userNameInput = this.page.locator("#user-name");
        this.passwordInput = this.page.locator("#password");
        this.loginButton = this.page.locator("#login-button");
    }

    // async login(username:string, password:string){
    //     await this.userNameInput.fill(username);
    //     await this.passwordInput.fill(password);
    //     await this.loginButton.click(); 
    // }

    async login(username: string, password: string) {
        // await this.userNameInput.clear();
        await this.typeValue(this.userNameInput, username);
        await this.typeValue(this.passwordInput, password);
        await this.clickOnElement(this.loginButton);
    }



}