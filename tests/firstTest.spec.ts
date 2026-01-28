import { test, chromium, expect } from '@playwright/test';

test.describe('Login Tests', async () => {

    test("verify login page title", async () => {

        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://www.saucedemo.com/");

        await page.waitForTimeout(3000);

        await page.fill("#user-name", "standard_user");
        await page.locator("#password").fill("secret_sauce");

        await page.click("#login-button");
       // await page.locator("#login-button").click();

        await page.waitForTimeout(3000);
        

       

    });
});