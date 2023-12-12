import { test, expect } from '@playwright/test';

test('Home Page with three Sliders only', async({ page }) => {
    await page.goto('https://practice.automationtesting.in/')
    const shopText = page.locator('#menu-item-40')
    await expect(shopText).toContainText('Shop')
    
    await page.waitForSelector('.n2-ss-slide-background-image', { state: 'visible' })

    const qtdSliders = await page.$$eval('.n2-ss-slide-background-image', sliders => sliders.length)
    expect(qtdSliders).toBe(3);
    await page.close()
        
});

test('Home Page with three Arrivals only', async({ page }) => {
    await page.goto('https://practice.automationtesting.in/')
    const shopText = page.locator('#menu-item-40')
    await expect(shopText).toContainText('Shop')
    await page.getByRole('heading', { name: 'new arrivals' }).scrollIntoViewIfNeeded()
    
    await page.waitForSelector('.attachment-shop_catalog', { state: 'visible' })

    const qtdArrivals = await page.$$eval('.attachment-shop_catalog', arrivals => arrivals.length)
    expect(qtdArrivals).toBe(3);
        
});