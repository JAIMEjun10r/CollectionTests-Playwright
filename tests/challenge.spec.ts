import { test, expect } from '@playwright/test';
test('Teste', async ({ page }) => {
    await page.goto('https://phptravels.com/demo');
    await page.getByPlaceholder('Last Name').fill('Neto');
    await page.getByPlaceholder('First Name').fill('Campos');
    await page.getByPlaceholder('Business Name').fill('Company');
    await page.getByPlaceholder('Email', { exact: true }).fill('a@gmail.com');

    const num1Txt = await page.$eval('#numb1', (element) => element.textContent) 
    const num2Txt = await page.$eval('#numb2', (element) => element.textContent) 
    const resultado = parseInt(num1Txt) + parseInt(num2Txt)

    await page.getByPlaceholder('Result ?').fill(resultado.toString())
            
})
    



