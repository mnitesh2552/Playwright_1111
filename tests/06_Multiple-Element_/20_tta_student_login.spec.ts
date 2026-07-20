// Verify the URL is changed with your username and password

import { test, expect } from '@playwright/test';

test('Verify URL changes with username and password', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    // Collect all input elements
    const inputs = page.locator("//input");
    const totalInputs = await inputs.count();

    // Fill Email
    for (let i = 0; i < totalInputs; i++) {

        const id = await inputs.nth(i).getAttribute("id");

        if (id === "email") {
            await inputs.nth(i).fill("nitesh@thetestingacademy.com");
            break;
        }
    }

    // Fill Password
    for (let i = 0; i < totalInputs; i++) {

        const id = await inputs.nth(i).getAttribute("id");

        if (id === "password") {
            await inputs.nth(i).fill("admin123");
            break;
        }
    }

    // Check Remember Me
    for (let i = 0; i < totalInputs; i++) {

        const type = await inputs.nth(i).getAttribute("type");

        if (type === "checkbox") {
            await inputs.nth(i).check();
            break;
        }
    }

    // Collect all buttons
    const buttons = page.locator("//button");
    const totalButtons = await buttons.count();

    // Click Login Button
    for (let i = 0; i < totalButtons; i++) {

        const text = await buttons.nth(i).innerText();

        if (text === "Login to Practice Account") {
            await buttons.nth(i).click();
            break;
        }
    }

    // Verify URL
    const expectedURL = "https://app.thetestingacademy.com/playwright/multiple_element_filter?email=nitesh%40thetestingacademy.com&password=admin123&remember=yes#login-success";

    await expect(page).toHaveURL(expectedURL);

    await page.pause();

});