import { expect, test } from '@playwright/test';

test('home page loads as expected', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('title')).toBeVisible();
});
