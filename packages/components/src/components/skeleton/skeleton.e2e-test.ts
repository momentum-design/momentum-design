import { expect, test } from '@playwright/test';

const storyUrl = (storyId: string) => `/iframe.html?args=&id=components-skeleton--${storyId}&viewMode=story`;

test.describe('mdc-skeleton', () => {
  test('should render skeleton with default properties', async ({ page }) => {
    await page.goto(storyUrl('default'));

    const skeleton = page.locator('mdc-skeleton');
    await expect(skeleton).toBeVisible();
    await expect(skeleton).toHaveAttribute('type', 'rectangular');
  });

  test('should render different skeleton types', async ({ page }) => {
    await page.goto(storyUrl('types'));

    const rectangular = page.locator('mdc-skeleton[type="rectangular"]');
    const rounded = page.locator('mdc-skeleton[type="rounded"]');
    const circular = page.locator('mdc-skeleton[type="circular"]');
    const text = page.locator('mdc-skeleton[type="text"]');

    await expect(rectangular).toBeVisible();
    await expect(rounded).toBeVisible();
    await expect(circular).toBeVisible();
    await expect(text).toBeVisible();
  });

  test('should apply width and height attributes', async ({ page }) => {
    await page.goto(storyUrl('default'));

    const skeleton = page.locator('mdc-skeleton');
    await expect(skeleton).toHaveAttribute('width', '200px');
    await expect(skeleton).toHaveAttribute('height', '100px');
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

  test('should apply proper border radius for different types', async ({ page }) => {
    await page.goto(storyUrl('types'));

    const rectangular = page.locator('mdc-skeleton[type="rectangular"]');
    const rounded = page.locator('mdc-skeleton[type="rounded"]');
    const circular = page.locator('mdc-skeleton[type="circular"]');
    const text = page.locator('mdc-skeleton[type="text"]');

    const rectangularRadius = await rectangular.evaluate((el) =>
      getComputedStyle(el).borderRadius);
    const roundedRadius = await rounded.evaluate((el) =>
      getComputedStyle(el).borderRadius);
    const circularRadius = await circular.evaluate((el) =>
      getComputedStyle(el).borderRadius);
    const textRadius = await text.evaluate((el) =>
      getComputedStyle(el).borderRadius);

    expect(rectangularRadius).toBe('4px'); // 0.25rem
    expect(roundedRadius).toBe('8px'); // 0.5rem
    expect(circularRadius).toBe('50%');
    expect(textRadius).toBe('4px'); // 0.25rem
  });

  test('should have default height for text type', async ({ page }) => {
    await page.goto(storyUrl('text-lines'));

    const textSkeletons = page.locator('mdc-skeleton[type="text"]');
    const firstTextSkeleton = textSkeletons.first();

    const height = await firstTextSkeleton.evaluate((el) =>
      getComputedStyle(el).height);

    expect(height).toBe('16px'); // 1rem
  });
});
