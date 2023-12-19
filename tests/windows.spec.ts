import { test, expect } from "@playwright/test";

test('CT01: Open New tabbed Windows', async ({ page }) => {
    await page.goto('/Windows.html')
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'click' }).click();
    const page1 = await page1Promise;
    const confirmNewtab = page1.getByRole('link', { name: 'Selenium logo green' })
    await expect(confirmNewtab).toBeVisible()
    // aqui serve para trazer o foco
    await page.bringToFront()
    // aqui serve para fechar a guia
    await page1.close()

});

test('CT02: Open New Separate Window', async ({ page }) => {
    await page.goto('/Windows.html') 
    await page.getByRole('link', { name: 'Open New Seperate Windows' }).click();
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'click' }).click();
    const page3 = await page3Promise;
    const confirmNewWindow = page3.getByRole('link', { name: 'Selenium logo green' })
    await expect(confirmNewWindow).toBeVisible()
});

