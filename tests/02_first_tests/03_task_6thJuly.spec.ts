// We will create:
// Browser
// ├── Context 1
// │   └── Page → TTACart → Login
// │
// └── Context 2
//     └── Page → TTA Bank → Login
import { test, expect } from '@playwright/test';
test('Login into two applications', async ({ browser }) => {
    // ==========================
    // Context 1 - TTACart
    // ==========================

    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await page1.locator("#user-name").fill("standard_user");
    await page1.locator("#password").fill("tta_secret");
    await page1.locator("#login-button").click();

    await expect(page1).toHaveURL("https://app.thetestingacademy.com/playwright/ttacart/inventory");
    // ==========================
    // Context 2 - TTA Bank
    // ==========================

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page2.getByPlaceholder("you@example.com").fill("jfr46@iinboxes.com");
    await page2.getByPlaceholder("••••••••").fill("test@123");
    await page2.getByRole("button", { name: "Sign In" }).click();

});