import { expect } from '@playwright/test';
import { authPage as test } from '../fixtures/auth.fixture';



test('login with valid credentials', async ({ page, loginPage }) => {

    await expect(loginPage).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.waitForTimeout(3000);
    await page.click("#react-burger-menu-btn");
    await expect(page.locator("#logout_sidebar_link")).toBeVisible();

})