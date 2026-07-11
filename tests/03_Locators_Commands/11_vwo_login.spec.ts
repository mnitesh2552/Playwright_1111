import { test, expect } from '@playwright/test';
test('invalid Login into VWO application', async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");
    // Default locators - id, Name, class, name
    // id => #id
    // cassName => .className
    // nmae => [name = "name"]
    // Tag => {}tag
    let userNameField = page.locator("#login-username");
    let passwordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    await userNameField.fill("admin");
    await passwordField.fill("invalid_password");
    await loginButton.click();
    console.log("Login button clicked");

    let error_Message = page.locator("#js-notification-box-msg");
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});