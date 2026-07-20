import { test, expect } from '@playwright/test';


test("verify vwo signup page - Negative", async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");

    await page.locator("#page-v1-step1-email").fill("abcd");

    await page.locator('[data-qa="page-free-trial-step1-gdpr-consent-checkbox"]').click();

    await page.locator('[data-qa="page-su-submit"]').first().click();

    const errorMessage = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();

    expect(errorMessage).toContain("The email address you entered is incorrect.");
});