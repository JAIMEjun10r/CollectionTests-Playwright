import { test, expect } from "@playwright/test";

test('Single Frame', async ({ page }) => {
    await page.goto('/Frames.html')   
    await page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox').click();
    await page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox').fill('teste');        

});