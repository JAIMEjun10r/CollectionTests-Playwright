import { test, expect } from "@playwright/test";

test('CT01: Writing the word Argentina inside the searchbox', async({ page }) => {
    await page.goto('/AutoComplete.html')
    await page.locator('.ui-autocomplete-multiselect').click();
    await page.locator('#searchbox').fill('Arg');
    await page.waitForSelector("//a[contains(.,'Argentina')]")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    const txt = await page.locator('.ui-autocomplete-multiselect-item').textContent()
    expect(txt).toContain('Argentina')
});