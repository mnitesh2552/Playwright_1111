const products = page.locator(".product-card");   // Collect all elements

const total = await products.count();             // Count elements

for (let i = 0; i < total; i++) {                 // Visit each element

    const text = await products.nth(i).innerText(); // Read text

    if (text === "Watch") {                       // Compare

        await products.nth(i).click();           // Action
        break;
    }
}