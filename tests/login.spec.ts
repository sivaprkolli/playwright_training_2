import { Locator, test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");

    const loginButton: Locator = page.locator("#login-button");
    await loginButton.click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


})