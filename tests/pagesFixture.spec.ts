import { expect } from '@playwright/test';
import { test } from '../fixtures/pom.fixtures';

// type MyFixtures = {
//     loginPage: LoginPage;
//     productsPage: ProductsPage;
// };

// const test = base.extend<MyFixtures>({
//     loginPage: async ({ page }, use) => {
//         await use(new LoginPage(page));
//     },
//     productsPage: async ({ page }, use) => {
//         await use(new ProductsPage(page));
//     },
// });

test('should login with valid credentials', async ({ page, loginPage, productsPage }) => {
    // const loginPage = new LoginPage(page);
    // const productsPage = new ProductsPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    const headerText = await loginPage.getHeaderText();
    expect(headerText).toBe('Products');
    const productsCount = await productsPage.getProductsCount();
    expect(productsCount).toBe(6);
});