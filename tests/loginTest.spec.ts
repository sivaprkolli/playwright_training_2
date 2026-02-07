import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

// test.describe('Login Tests', () => {
//     
// });


test('should login with valid credentials', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    const headerText = await loginPage.getHeaderText();
    expect(headerText).toBe('Products');
});