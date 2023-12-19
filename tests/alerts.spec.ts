import { test, expect } from '@playwright/test';

test('CT01: Alert with OK', async ({ page }) => {
  await page.goto('/Alerts.html');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'click the button to display an alert box:' }).click()

});

test('CT02: Accepting an alert in a confirm box', async ({ page }) => {
  await page.goto('/Alerts.html');
  await page.getByRole('link', { name: 'Alert with OK & Cancel' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByRole('button', { name: 'click the button to display a confirm box' }).click() 
  
});

test('CT03: Pressing cancel button in a confirm box', async ({ page }) => {
  await page.goto('/Alerts.html');
  await page.getByRole('link', { name: 'Alert with OK & Cancel' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'click the button to display a confirm box' }).click() 
  
});