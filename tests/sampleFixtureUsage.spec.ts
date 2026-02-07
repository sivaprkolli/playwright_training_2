import { sampleTest } from '../fixtures/userDetails.fixture';
import { test } from '@playwright/test';

// test('login with valid credentials using fixture', async ({ page }) => {

//     await page.goto("https://www.saucedemo.com/");
// });

sampleTest('login with valid credentials using sampleTest fixture',
    async ({ username, password, email, phone }) => {

        console.log("Username: " + username);
        console.log("Password: " + password);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
    });