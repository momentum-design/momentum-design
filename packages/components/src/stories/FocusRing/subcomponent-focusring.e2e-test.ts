import { expect, Locator } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
};

// Sets up the subcomponent with the button shape and returns its locator
const setup = async (args: SetupOptions) => {
  const { componentsPage } = args;
  await componentsPage.mount({
    /* eslint-disable max-len */
    html: `
    <div class="componentWrapper componentRowWrapper">
      <mdc-button id='firstComponent' class="focus-ring">Button 1</mdc-button>
      <mdc-button id='secondComponent' class="focus-ring">Button 2</mdc-button>
    <div>`,
  });
  const subComponent = componentsPage.page.locator('#firstComponent');
  await subComponent.waitFor();
  return subComponent;
};

// Checks if the focus ring on the component matches the expected style
const checkFocusRing = async (subComponent: Locator, expectedBoxShadow: string) => {
  const boxShadow = await subComponent.evaluate((el: Element) => getComputedStyle(el).boxShadow);
  expect(boxShadow).toBe(expectedBoxShadow);
};

// Expected focus ring style for verification
/* eslint-disable max-len */
const focusRingStyle =
  'rgb(0, 0, 0) 0px 0px 0px 2px, rgb(100, 180, 250) 0px 0px 0px 4px, rgba(100, 180, 250, 0.35) 0px 0px 0px 5px';

// Tests focus ring interactions such as appearance, disappearance, and rapid focus/blur cycles
const testFocusRingInteractions = async (componentsPage: ComponentsPage, subComponent: Locator) => {
  await test.step('focus', async () => {
    // Test focus ring appearance
    await componentsPage.actionability.pressTab();
    await expect(subComponent).toBeFocused();
    await checkFocusRing(subComponent, focusRingStyle);
    await componentsPage.visualRegression.takeScreenshot('focus-ring-appearance-button');

    // Test focus ring disappearance
    await componentsPage.actionability.releaseFocus(subComponent);
    await expect(subComponent).not.toBeFocused();
    await checkFocusRing(subComponent, 'none');
    await componentsPage.visualRegression.takeScreenshot('focus-ring-disappearance-button', {
      element: subComponent,
    });

    // Test rapid focus/blur interactions
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i <= 5; i += 1) {
      await componentsPage.actionability.pressTab();
      await componentsPage.actionability.releaseFocus(subComponent);
    }
    await checkFocusRing(subComponent, 'none');
    await componentsPage.visualRegression.takeScreenshot('focus-ring-rapid-interaction-button', {
      element: subComponent,
    });
  });
};

test.describe('SubComponentFocusRing', () => {
  test('Button as SubComponent', async ({ componentsPage }) => {
    const subComponent = await setup({ componentsPage });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      await testFocusRingInteractions(componentsPage, subComponent);
    });
  });
});
