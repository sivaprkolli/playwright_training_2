import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';

test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    const headerText = await loginPage.getHeaderText();
    expect(headerText).toBe('Products');
    const productsCount = await productsPage.getProductsCount();
    expect(productsCount).toBe(6);
});