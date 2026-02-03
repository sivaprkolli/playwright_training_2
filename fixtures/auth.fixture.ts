import { test as base, expect, Page } from '@playwright/test';

type MyFixtures = {
    loginPage: Page;
};

export const authPage = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await page.goto("https://www.saucedemo.com/");
        await page.fill("#user-name", "standard_user");
        await page.fill("#password", "secret_sauce");
        await page.click("#login-button");
        // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await use(page);
    }
});
