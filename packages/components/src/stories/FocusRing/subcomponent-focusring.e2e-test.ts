import { expect, Locator } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  shape: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, shape } = args;
  await componentsPage.mount({
    html: `<mdc-subcomponent-focusring shape="${shape}" class="focus-ring"></mdc-subcomponent-focusring>`,
    clearDocument: true,
  });
  const subComponent = componentsPage.page.locator('mdc-subcomponent-focusring');
  await subComponent.waitFor();
  return subComponent;
};

const applyFocus = async (componentsPage: ComponentsPage, browserName: string) => {
  if (browserName === 'webkit') {
    await componentsPage.page.keyboard.down('Alt');
    await componentsPage.page.keyboard.press('Tab');
  } else {
    await componentsPage.page.keyboard.press('Tab');
  }
};

const checkFocusRing = async (subComponent: Locator, expectedBoxShadow: string) => {
  const boxShadow = await subComponent.evaluate((el: Element) => getComputedStyle(el).boxShadow);
  expect(boxShadow).toBe(expectedBoxShadow);
};

const focusRingStyle =
  'rgb(0, 0, 0) 0px 0px 0px 2px, rgb(100, 180, 250) 0px 0px 0px 4px, rgba(100, 180, 250, 0.35) 0px 0px 0px 5px';

const checkFocusState = async (subComponent: Locator, expectedState: boolean) => {
  const isFocused = await subComponent.evaluate(el => document.activeElement === el);
  expect(isFocused).toBe(expectedState);
};

const applyBlur = async (componentsPage: ComponentsPage, subComponent: Locator, browserName: string) => {
  if (browserName === 'webkit') {
    await subComponent.evaluate(el => el.blur());
  } else if (browserName === 'firefox') {
    await componentsPage.page.click('body'); // workaround for now
  } else {
    await componentsPage.page.keyboard.press('Tab');
  }
};

test.describe('SubComponentFocusRing', () => {
  test('Button as SubComponent', async ({ componentsPage, browserName }) => {
    const subComponent = await setup({ componentsPage, shape: 'button' });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('aria-label-button');
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      await test.step('focus', async () => {
        // Test focus ring appearance
        await applyFocus(componentsPage, browserName);
        await checkFocusRing(subComponent, focusRingStyle);
        await componentsPage.visualRegression.takeScreenshot('focus-ring-appearance-button');

        // Test focus ring disappearance
        await applyBlur(componentsPage, subComponent, browserName);
        await checkFocusState(subComponent, false);
        await checkFocusRing(subComponent, 'none');
        await componentsPage.visualRegression.takeScreenshot('focus-ring-disappearance-button', {
          element: subComponent,
        });

        // Test rapid focus/blur
        for (let i = 0; i < 5; i++) {
          await applyFocus(componentsPage, browserName);
          await applyBlur(componentsPage, subComponent, browserName);
        }
        await checkFocusRing(subComponent, 'none');
        await componentsPage.visualRegression.takeScreenshot('focus-ring-rapid-interaction-button', {
          element: subComponent,
        });
      });

      await test.step('event propagation', async () => {
        // Test focus ring with parent-child event listener interference
        await componentsPage.mount({
          html: `<button id="parent"><mdc-subcomponent-focusring shape="button"></mdc-subcomponent-focusring></button>`,
          clearDocument: true,
        });
        const parent = componentsPage.page.locator('#parent');
        await applyFocus(componentsPage, browserName);
        const isFocused = await parent.evaluate(el => document.activeElement === el);
        expect(isFocused).toBe(true);
        await componentsPage.visualRegression.takeScreenshot('focus-ring-parent-child-button', { element: parent });
      });
    });
  });

  test('Radio as SubComponent', async ({ componentsPage, browserName }) => {
    const subComponent = await setup({ componentsPage, shape: 'radio' });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('aria-label-radio');
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      await test.step('focus', async () => {
        // Test focus ring appearance
        await applyFocus(componentsPage, browserName);
        await checkFocusRing(subComponent, focusRingStyle);
        await componentsPage.visualRegression.takeScreenshot('focus-ring-appearance-radio');

        // Test focus ring disappearance
        await applyBlur(componentsPage, subComponent, browserName);
        await checkFocusState(subComponent, false);
        await checkFocusRing(subComponent, 'none');
        await componentsPage.visualRegression.takeScreenshot('focus-ring-disappearance-radio', {
          element: subComponent,
        });

        // Test rapid focus/blur
        for (let i = 0; i < 5; i++) {
          await applyFocus(componentsPage, browserName);
          await applyBlur(componentsPage, subComponent, browserName);
        }
        await checkFocusRing(subComponent, 'none');
        await componentsPage.visualRegression.takeScreenshot('focus-ring-rapid-interaction-radio', {
          element: subComponent,
        });
      });

      await test.step('event propagation', async () => {
        // Test focus ring with parent-child event listener interference
        await componentsPage.mount({
          html: `<button id="parent"><mdc-subcomponent-focusring shape="radio"></mdc-subcomponent-focusring></button>`,
          clearDocument: true,
        });
        const parent = componentsPage.page.locator('#parent');
        await applyFocus(componentsPage, browserName);
        const isFocused = await parent.evaluate(el => document.activeElement === el);
        expect(isFocused).toBe(true);
        await componentsPage.visualRegression.takeScreenshot('focus-ring-parent-child-radio', { element: parent });
      });
    });
  });

  test('Checkbox as SubComponent', async ({ componentsPage, browserName }) => {
    const subComponent = await setup({ componentsPage, shape: 'checkbox' });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('aria-label-checkbox');
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      await test.step('focus', async () => {
        // Test focus ring appearance
        await applyFocus(componentsPage, browserName);
        await checkFocusRing(subComponent, focusRingStyle);
        await componentsPage.visualRegression.takeScreenshot('focus-ring-appearance-checkbox');

        // Test focus ring disappearance
        await applyBlur(componentsPage, subComponent, browserName);
        await checkFocusState(subComponent, false);
        await checkFocusRing(subComponent, 'none');
        await componentsPage.visualRegression.takeScreenshot('focus-ring-disappearance-checkbox', {
          element: subComponent,
        });

        // Test rapid focus/blur
        for (let i = 0; i < 5; i++) {
          await applyFocus(componentsPage, browserName);
          await applyBlur(componentsPage, subComponent, browserName);
        }
        await checkFocusRing(subComponent, 'none');
        await componentsPage.visualRegression.takeScreenshot('focus-ring-rapid-interaction-checkbox', {
          element: subComponent,
        });
      });

      await test.step('event propagation', async () => {
        // Test focus ring with parent-child event listener interference
        await componentsPage.mount({
          html: `<button id="parent"><mdc-subcomponent-focusring shape="checkbox"></mdc-subcomponent-focusring></button>`,
          clearDocument: true,
        });
        const parent = componentsPage.page.locator('#parent');
        await applyFocus(componentsPage, browserName);
        const isFocused = await parent.evaluate(el => document.activeElement === el);
        expect(isFocused).toBe(true);
        await componentsPage.visualRegression.takeScreenshot('focus-ring-parent-child-checkbox', { element: parent });
      });
    });
  });
});
