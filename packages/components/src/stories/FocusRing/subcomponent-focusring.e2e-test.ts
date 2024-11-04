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
    html: `<mdc-subcomponent-focusring shape="${shape}" id='firstComponent' class="focus-ring"></mdc-subcomponent-focusring>`,
  });
  await componentsPage.mount({
    /* eslint-disable max-len */
    html: `<mdc-subcomponent-focusring shape="${shape}" id='secondComponent' class="focus-ring"></mdc-subcomponent-focusring>`,
  });
  const subComponent = componentsPage.page.locator('#firstComponent');
  await subComponent.waitFor();
  return subComponent;
};

// Applies focus to the component, handling WebKit-specific focus quirks
const applyFocus = async (componentsPage: ComponentsPage, browserName: string) => {
  if (browserName === 'webkit') {
    await componentsPage.page.keyboard.down('Alt');
    await componentsPage.page.keyboard.press('Tab');
  } else {
    await componentsPage.page.keyboard.press('Tab');
  }
};

// Checks if the focus ring on the component matches the expected style
const checkFocusRing = async (subComponent: Locator, expectedBoxShadow: string) => {
  const boxShadow = await subComponent.evaluate((el: Element) => getComputedStyle(el).boxShadow);
  await expect(boxShadow).toBe(expectedBoxShadow);
};

// Expected focus ring style for verification
/* eslint-disable max-len */
const focusRingStyle = 'rgb(0, 0, 0) 0px 0px 0px 2px, rgb(100, 180, 250) 0px 0px 0px 4px, rgba(100, 180, 250, 0.35) 0px 0px 0px 5px';

// Checks if the component has the expected focus state (focused or not)
const checkFocusState = async (subComponent: Locator, expectedState: boolean) => {
  const isFocused = await subComponent.evaluate((el) => document.activeElement === el);
  expect(isFocused).toBe(expectedState);
};

// Applies blur to the component, with WebKit-specific handling for focus issues
const applyBlur = async (componentsPage: ComponentsPage, subComponent: Locator, browserName: string) => {
  if (browserName === 'webkit') {
    await subComponent.evaluate((el) => el.blur());
  } else {
    await componentsPage.page.keyboard.press('Tab');
  }
};

// Tests focus ring interactions such as appearance, disappearance, and rapid focus/blur cycles
const testFocusRingInteractions = async (
  componentsPage: ComponentsPage,
  subComponent: Locator,
  browserName: string,
  shape: string,
) => {
  await test.step('focus', async () => {
    // Test focus ring appearance
    await applyFocus(componentsPage, browserName);
    await checkFocusRing(subComponent, focusRingStyle);
    await componentsPage.visualRegression.takeScreenshot(`focus-ring-appearance-${shape}`);

    // Test focus ring disappearance
    await applyBlur(componentsPage, subComponent, browserName);
    await checkFocusState(subComponent, false);
    await checkFocusRing(subComponent, 'none');
    await componentsPage.visualRegression.takeScreenshot(`focus-ring-disappearance-${shape}`, {
      element: subComponent,
    });

    // Test rapid focus/blur interactions
    await Promise.all(
      Array.from({ length: 5 }).map(async () => {
        await applyFocus(componentsPage, browserName);
        await applyBlur(componentsPage, subComponent, browserName);
      }),
    );
    await checkFocusRing(subComponent, 'none');
    await componentsPage.visualRegression.takeScreenshot(`focus-ring-rapid-interaction-${shape}`, {
      element: subComponent,
    });
  });
};

// Tests event propagation for focus ring within a parent-child structure to check interference
const testEventPropagation = async (componentsPage: ComponentsPage, browserName: string, shape: string) => {
  await test.step('event propagation', async () => {
    await componentsPage.mount({
      html: `<button id='parent'><mdc-subcomponent-focusring shape='${shape}'></mdc-subcomponent-focusring></button>`,
      clearDocument: true,
    });
    const parent = componentsPage.page.locator('#parent');
    await applyFocus(componentsPage, browserName);
    const isFocused = await parent.evaluate((el) => document.activeElement === el);
    expect(isFocused).toBe(true);
    await componentsPage.visualRegression.takeScreenshot(`focus-ring-parent-child-${shape}`, { element: parent });
  });
};

// Runs accessibility check on the subcomponent based on aria-label
const testAccessibility = async (componentsPage: ComponentsPage, shape: string) => {
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations(`aria-label-${shape}`);
  });
};

// Main test suite for SubComponentFocusRing with dynamic shapes (button, radio, checkbox)
test.describe('SubComponentFocusRing', () => {
  ['button', 'radio', 'checkbox'].forEach((shape) => {
    test(`${shape} as SubComponent`, async ({ componentsPage, browserName }) => {
      const subComponent = await setup({ componentsPage, shape });

      /**
       * ACCESSIBILITY
       */
      //await testAccessibility(componentsPage, shape);

      /**
       * INTERACTIONS
       */
      await test.step('interactions', async () => {
        await testFocusRingInteractions(componentsPage, subComponent, browserName, shape);
        await testEventPropagation(componentsPage, browserName, shape);
      });
    });
  });
});
