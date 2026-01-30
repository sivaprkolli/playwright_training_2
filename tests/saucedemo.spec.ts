import { test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    // WebElement element = driver.findElement(By.id("user-name"));

    const heading = page.locator('css=div.login_logo');
    console.log("Heading of the page :: " + await heading.textContent());

    const usernameInput = page.locator('xpath=//input[@data-test="username"]');
    await usernameInput.fill("standard_user");

    const passwordInput = page.locator('css=input#password');
    await passwordInput.fill("secret_sauce");

    const loginButton = page.locator('css=input#login-button');
    await loginButton.click();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    const productsTitle = page.locator('css=.title');
    console.log("Products Page Title :: " + await productsTitle.textContent());

    expect(productsTitle).toHaveText("Products");

});