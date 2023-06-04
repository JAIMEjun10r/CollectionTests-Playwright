import { test, expect } from "@playwright/test";

test('Open New tabbed Windows', async ({ page }) => {
    await page.goto('/Windows.html')
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'click' }).click();
    const page1 = await page1Promise;
    const confirmNewtab = page1.getByRole('link', { name: 'Selenium logo green' })
    await expect(confirmNewtab).toBeVisible()
});

test('Open New Separate Window', async ({ page }) => {
    await page.goto('/Windows.html') 
    await page.getByRole('link', { name: 'Open New Seperate Windows' }).click();
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'click' }).click();
    const page3 = await page3Promise;
    const confirmNewWindow = page3.getByRole('link', { name: 'Selenium logo green' })
    await expect(confirmNewWindow).toBeVisible()
});

test('teste', async ({ page }) => {
    await page.goto('http://the-internet.herokuapp.com/windows')
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Click Here' }).click();
    const page1 = await page1Promise;
    const newPage = page1.getByRole('heading', { name: 'New Window' })
    await expect(newPage).toBeVisible()
});