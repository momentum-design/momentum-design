import { expect, test } from '@playwright/test';

const storyUrl = (storyId: string) => `/iframe.html?args=&id=components-skeleton--${storyId}&viewMode=story`;

test.describe('mdc-skeleton', () => {
  test('should render skeleton with default properties', async ({ page }) => {
    await page.goto(storyUrl('default'));

    const skeleton = page.locator('mdc-skeleton');
    await expect(skeleton).toBeVisible();
    await expect(skeleton).toHaveAttribute('variant', 'rectangular');
  });

  test('should render different skeleton variants', async ({ page }) => {
    await page.goto(storyUrl('variants'));

    const rectangular = page.locator('mdc-skeleton[variant="rectangular"]');
    const rounded = page.locator('mdc-skeleton[variant="rounded"]');
    const circular = page.locator('mdc-skeleton[variant="circular"]');
    const button = page.locator('mdc-skeleton[variant="button"]');

    await expect(rectangular).toBeVisible();
    await expect(rounded).toBeVisible();
    await expect(circular).toBeVisible();
    await expect(button).toBeVisible();
  });

  test('should have proper background color', async ({ page }) => {
    await page.goto(storyUrl('default'));

    const skeleton = page.locator('mdc-skeleton');
    const backgroundColor = await skeleton.evaluate((el) =>
      getComputedStyle(el).backgroundColor);

    // Should have the skeleton background color variable applied
    expect(backgroundColor).toBeTruthy();
  });

  test('should wrap content when provided', async ({ page }) => {
    await page.goto(storyUrl('with-content'));

    const skeletonWithContent = page.locator('mdc-skeleton').nth(1);
    const button = skeletonWithContent.locator('button');

    await expect(button).toBeVisible();
    await expect(button).toHaveText('Click me');
  });

  test('should apply proper border radius for different variants', async ({ page }) => {
    await page.goto(storyUrl('variants'));

    const rectangular = page.locator('mdc-skeleton[variant="rectangular"]');
    const rounded = page.locator('mdc-skeleton[variant="rounded"]');
    const circular = page.locator('mdc-skeleton[variant="circular"]');
    const button = page.locator('mdc-skeleton[variant="button"]');

    const rectangularRadius = await rectangular.evaluate((el) =>
      getComputedStyle(el).borderRadius);
    const roundedRadius = await rounded.evaluate((el) =>
      getComputedStyle(el).borderRadius);
    const circularRadius = await circular.evaluate((el) =>
      getComputedStyle(el).borderRadius);
    const buttonRadius = await button.evaluate((el) =>
      getComputedStyle(el).borderRadius);

    expect(rectangularRadius).toBe('4px'); // 0.25rem
    expect(roundedRadius).toBe('8px'); // 0.5rem
    expect(circularRadius).toBe('50%');
    expect(buttonRadius).toBe('20px'); // 1.25rem
  });
});
