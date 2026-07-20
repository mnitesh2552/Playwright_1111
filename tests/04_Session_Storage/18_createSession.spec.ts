import { test, expect } from '@playwright/test';

test('Store session state of TTA card', async ({ page }) => {
    // Step 1 - Open Website
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

    // Step 2 - Enter Username
    await page.locator('[data-test="username"]').fill('standard_user');

    // Step 3 - Enter Password
    await page.locator('[data-test="password"]').fill('tta_secret');

    // Step 4 - Click Login
    await page.locator('[data-test="login-button"]').click();

    // Step 5 - Verify Login
    // This is a regular expression (RegExp). In Playwright, toHaveURL() accepts either a full string or a regular expression. /inventory/
    await expect(page).toHaveURL(/inventory/);

    // Step 6 - Save Session State
    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });

});