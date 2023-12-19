import { test, expect } from "@playwright/test";

test('CT01: DataPicker enabled', async ({ page }) => {
    await page.goto('/Datepicker.html')
    // await page.click('#datepicker1')
    let date: string = '03/30/1988'
    let nameMonth: string = 'January 2023'
    await page.fill('#datepicker2', date)
        
});

test('CT02: DataPicker disabled', async ({ page }) => {
    await page.goto('/Datepicker.html')
    await page.locator('form').getByRole('img').click();
    let monthYear: string = 'January 2023'
    const monthYearField = await page.locator("//div[@class='ui-datepicker-title']").textContent()
    console.log(monthYearField)

    if (monthYearField != 'May 2023') {
        await page.getByTitle('Prev').click();
        await page.getByRole('link', { name: '18' }).click(); 
    } else {
        console.log('falta do que fazer')
    }
   
});