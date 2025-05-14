import { expect } from '@playwright/test';
import { test } from '../../../config/playwright/setup';
import type Animation from './animation.component';

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

      await animation.evaluate(
        (element: Animation) =>
          new Promise((resolve: Function) => {
            element.addEventListener('complete', (event: Event) => {
              resolve(event.type);
            });
          }),
      );
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
