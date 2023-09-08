import { test, expect } from '@playwright/test';

test('has iframe title', async ({ page }) => {
  await page.goto('http://127.0.0.1:8081');

  const iframe = page.frameLocator('#test-frame');
  await expect(iframe.getByText('Simple iframe')).toBeVisible();
});
