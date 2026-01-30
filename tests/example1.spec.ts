import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test';

test('example test', async () => {
    // await page.goto('https://www.saucedemo.com/');
    // const title = await page.title();
    // expect(title).toBe('Swag Labs');


    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(title).toBe('Swag Labs');

    const heading = await page.getByText('Swag Labs').textContent();
    console.log(heading);
    expect(heading).toBe('Swag Labs');

    const username_input: Locator = page.getByPlaceholder('Username');
    await username_input.fill('standard_user');

    const password_input: Locator = page.getByTestId('password');
    await password_input.fill('secret_sauce');

    const login_button: Locator = page.getByRole('button', { name: 'Login' });
    await login_button.click();



    await browser.close();
});