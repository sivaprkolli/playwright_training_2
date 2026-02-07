import { test, expect } from "@playwright/test";
import SignInPage from "../pages/signInPage";
import { ProductsPage } from "../pages/productsPage";

test("Login with valid credentials", async ({ page }) => {
    const signInPage = new SignInPage(page);
    const productsPage = new ProductsPage(page);

    await page.goto("https://www.saucedemo.com/");
    await signInPage.login("standard_user", "secret_sauce");

});

