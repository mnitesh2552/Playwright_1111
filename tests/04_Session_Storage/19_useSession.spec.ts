import { test, expect } from '@playwright/test';

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Add product to cart using saved session', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/inventory.html');
    await page.locator('[data-test="add-to-cart-tta-bike-light"]').click(); await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/cart');

});