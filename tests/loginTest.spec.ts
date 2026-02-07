import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await page.goto("https://www.saucedemo.com/");
    await loginPage.login("standard_user", "secret_sauce");
    expect(await productsPage.getTitle()).toBe("Products");
    expect(await page.locator(".inventory_item").count()).toBe(6);
});