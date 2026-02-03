import { test as base, expect, Page } from '@playwright/test';

type UserData = {
    username: string;
    password: string;
};

type MyFixtures = {
    userData: UserData;
    authenticatedPage: Page;
};

export const testData = base.extend<MyFixtures>({
    userData: async ({ }, use) => {
        const data = {
            username: "standard_user",
            password: "secret_sauce"
        };
        await use(data);
    },

    authenticatedPage: async ({ page, userData }, use) => {
        await page.goto("https://www.saucedemo.com/");
        await page.fill("#user-name", userData.username);
        await page.fill("#password", userData.password);
        await page.click("#login-button");
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await use(page);
    }
});
