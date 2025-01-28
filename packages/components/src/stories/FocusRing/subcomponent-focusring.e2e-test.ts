import { expect, Locator } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  shape: string;
};

// Sets up the subcomponent with the given shape and returns its locator
const setup = async (args: SetupOptions) => {
  const { componentsPage, shape } = args;
  await componentsPage.mount({
    /* eslint-disable max-len */
    html: `
    <div class="componentWrapper componentRowWrapper">
      <mdc-subcomponent-focusring shape="${shape}" id='firstComponent' class="focus-ring"></mdc-subcomponent-focusring>
      <mdc-subcomponent-focusring shape="${shape}" id='secondComponent' class="focus-ring"></mdc-subcomponent-focusring>
    <div>`,
  });
  const subComponent = componentsPage.page.locator('#firstComponent');
  await subComponent.waitFor();
  return subComponent;
};

// Checks if the focus ring on the component matches the expected style
const checkFocusRing = async (subComponent: Locator, expectedBoxShadow: string) => {
  const boxShadow = await subComponent.evaluate((el: Element) => getComputedStyle(el).boxShadow);
  await expect(boxShadow).toBe(expectedBoxShadow);
};

// Expected focus ring style for verification
/* eslint-disable max-len */
const focusRingStyle = 'rgb(0, 0, 0) 0px 0px 0px 2px, rgb(100, 180, 250) 0px 0px 0px 4px, rgba(100, 180, 250, 0.35) 0px 0px 0px 5px';

const releaseFocus = async (componentsPage: ComponentsPage, subComponent: Locator) => {
  if (componentsPage.actionability.browserName() === 'webkit') {
    // Explicitly blur to remove focus in WebKit
    await subComponent.evaluate((el) => el.blur());
  } else {
    await componentsPage.actionability.pressTab();
  }
};

// Tests focus ring interactions such as appearance, disappearance, and rapid focus/blur cycles
const testFocusRingInteractions = async (
  componentsPage: ComponentsPage,
  subComponent: Locator,
  shape: string,
) => {
  await test.step('focus', async () => {
    // Test focus ring appearance
    await componentsPage.actionability.pressTab();
    await expect(subComponent).toBeFocused();
    await checkFocusRing(subComponent, focusRingStyle);
    await componentsPage.visualRegression.takeScreenshot(`focus-ring-appearance-${shape}`);

    // Test focus ring disappearance
    await releaseFocus(componentsPage, subComponent);
    await expect(subComponent).not.toBeFocused();
    await checkFocusRing(subComponent, 'none');
    await componentsPage.visualRegression.takeScreenshot(`focus-ring-disappearance-${shape}`, {
      element: subComponent,
    });

    // Test rapid focus/blur interactions
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i <= 5; i += 1) {
      await componentsPage.actionability.pressTab();
      await releaseFocus(componentsPage, subComponent);
    }
    await checkFocusRing(subComponent, 'none');
    await componentsPage.visualRegression.takeScreenshot(`focus-ring-rapid-interaction-${shape}`, {
      element: subComponent,
    });
  });
};

// Main test suite for SubComponentFocusRing with dynamic shapes (button, radio, checkbox)
test.describe('SubComponentFocusRing', () => {
  ['button', 'radio', 'checkbox'].forEach((shape) => {
    test(`${shape} as SubComponent`, async ({ componentsPage }) => {
      const subComponent = await setup({ componentsPage, shape });

      /**
       * INTERACTIONS
       */
      await test.step('interactions', async () => {
        await testFocusRingInteractions(componentsPage, subComponent, shape);
      });
    });
  });
});
