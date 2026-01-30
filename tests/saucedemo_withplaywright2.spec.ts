import { test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {

    await page.goto("https://www.salesforce.com/in/form/signup/sales-ee/?d=70130000000Enyk");

    const firstNameInput = page.getByLabel('First Name');
    console.log("First Name Input Placeholder :: " + await firstNameInput.textContent());

    const logo = page.getByAltText('Salesforce logo');
    expect(logo).toBeVisible();


    const firstName = page.getByTestId('UserFirstName');
    await firstName.fill("Siva");

    const lastName = page.getByTestId('UserLastName');
    await lastName.fill("Reddy");

    const jobTitle = page.getByTestId('UserTitle');
    await jobTitle.fill("QA");

    await page.waitForTimeout(5000);




});