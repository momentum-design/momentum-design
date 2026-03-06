import { test, expect } from '../../../config/playwright/setup';

test.beforeEach(async ({ componentsPage }) => {
  await componentsPage.mount({
    html: `
        <mdc-animation autoplay name="celebrate" loop="1" style="width: 100px; height: 100px;"/>
      `,
  });
});

test('mdc-animation', async ({ componentsPage }) => {
  const animation = componentsPage.page.locator('mdc-animation');

  // initial check for the animation be visible on the screen:
  await animation.waitFor();

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      const animation = componentsPage.page.locator('mdc-animation');

      const waitForAnimationComplete = await componentsPage.waitForEvent(animation, 'complete', { timeout: 5000 });
      await expect(waitForAnimationComplete).toEventEmitted();

      await componentsPage.visualRegression.takeScreenshot('mdc-animation', { element: animation });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('default attributes should be present on component', async () => {
      await expect(animation).toHaveAttribute('loop', '1');
      await expect(animation).toHaveAttribute('autoplay');
    });
  });
});
