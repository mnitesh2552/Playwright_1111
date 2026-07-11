import { test, expect } from '@playwright/test';

test("find the relative xpath", async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await page.locator('//*[@id="btn-make-appointment"]').click();
    await page.locator('//*[@id="txt-username"]').fill('John Doe');
    await page.locator('//*[@id="txt-password"]').fill('ThisIsNotAPassword');
});