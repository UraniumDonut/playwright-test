import { test, expect } from '@playwright/test';

test('basic test', async ({ page, baseURL}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Test Title/);
});
