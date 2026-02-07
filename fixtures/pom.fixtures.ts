import { test as base } from '@playwright/test';
import { ProductsPage } from '../pages/productsPage';
import LoginPage from '../pages/loginPage';

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
}

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    productsPage: async ({ loginPage }, use) => {
        await use(new ProductsPage(loginPage.page));
    }

});