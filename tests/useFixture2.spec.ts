import { expect } from '@playwright/test';
import { testData as test } from '../fixtures/testdata.fixture';


test('login with valid credentials', async ({ page, authenticatedPage }) => {

    await expect(authenticatedPage).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.waitForTimeout(3000);
    await page.click("#react-burger-menu-btn");
    await expect(page.locator("#logout_sidebar_link")).toBeVisible();

})