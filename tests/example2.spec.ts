import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    await page.goto('https://www.salesforce.com/in/form/signup/sales-ee/?d=70130000000Enyk');
    const title = await page.title();
    expect(title).toBe('Free Trial: Salesforce 30-Days Trial - Salesforce IN');

    const logo_text = await page.getByAltText('Salesforce logo');
    console.log(await logo_text.isVisible());

    await page.getByTestId('UserFirstName').fill('Siva');
    await page.getByTestId('UserLastName').fill('Reddy');
    await page.getByTestId('UserTitle').fill('Developer');
});