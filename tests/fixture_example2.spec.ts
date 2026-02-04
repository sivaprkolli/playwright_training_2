import { expect } from '@playwright/test';
import { authPage as test } from '../fixtures/auth.fixture';

test('login using auth fixture', async ({ page, loginPage }) => {

    await expect(loginPage).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.waitForTimeout(3000);
    await page.click("#react-burger-menu-btn");
    await page.click("#logout_sidebar_link");
});

