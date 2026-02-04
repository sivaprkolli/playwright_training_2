import { expect } from '@playwright/test';
import { testData as test } from '../fixtures/data.fixture';

test('login with valid credentials using fixture', async ({ page, user }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.fill("#user-name", user.username);
    await page.fill("#password", user.password);
    await page.waitForTimeout(2000);
    await page.click("#login-button");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

});