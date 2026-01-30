import { test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    const heading = page.getByText('Swag Labs');
    console.log("Heading of the page :: " + await heading.textContent());

    expect(heading).toBeVisible();

    const unsernameInput = page.getByPlaceholder("Username");
    await unsernameInput.fill("standard_user");

    const passwordInput = page.getByPlaceholder("Password");
    await passwordInput.fill("secret_sauce");


    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");



});