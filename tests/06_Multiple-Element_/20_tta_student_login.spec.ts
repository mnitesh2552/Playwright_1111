//Verify the URL is changed with your username and password
import { test, expect } from '@playwright/test';

test('Verify URL changes with username and password', async ({ page }) => {
    await page.goto('https://https://app.thetestingacademy.com/playwright/multiple_element_filter');
    const inputs = page.locator("//input");
    const total = await inputs.count();

    for (let i = 0; i < total; i++) {

        const id = await inputs.nth(i).getAttribute("id");

        if (id === "email") {

            await inputs.nth(i).fill("nitesh@thetestingacademy.com");
            break;
        }
    }
    const inputs = page.locator("//input");

    const total = await inputs.count();

    for (let i = 0; i < total; i++) {

        const id = await inputs.nth(i).getAttribute("id");

        if (id === "password") {

            await inputs.nth(i).fill("admin123");
            break;
        }
    }
    const inputs = page.locator("//input");

    const total = await inputs.count();

    for (let i = 0; i < total; i++) {

        const type = await inputs.nth(i).getAttribute("type");

        if (type === "checkbox") {

            await inputs.nth(i).check();
            break;
        }
    }
    const buttons = page.locator("//button");

    const total = await buttons.count();

    for (let i = 0; i < total; i++) {

        const text = await buttons.nth(i).innerText();

        if (text === "Login to Practice Account") {

            await buttons.nth(i).click();
            break;
        }
    }
    const expectedURL = "https://app.thetestingacademy.com/playwright/multiple_element_filter?email=nitesh%40thetestingacademy.com&password=admin123&remember=yes#login-success";

    await expect(page).toHaveURL(expectedURL);