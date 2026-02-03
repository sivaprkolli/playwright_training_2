import { expect } from '@playwright/test';
import { testData as test } from '../fixtures/testdata.fixture';


test('login with valid credentials', async ({ page, userData }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name", userData.username);
    await page.fill("#password", userData.password);

    await page.click("#login-button");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


})