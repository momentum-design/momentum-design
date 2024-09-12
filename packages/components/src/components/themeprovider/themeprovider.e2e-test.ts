import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import steps from '../../../config/playwright/setup/steps/accessibility';
import { THEME_NAMES } from './themeprovider.constants';
import type { ThemeName } from './themeprovider.types';
import utils from './themeprovider.utils';

test.beforeEach(async ({ componentsPage, theme }) => {
  const themeClass = utils.getFullQualifiedTheme(theme);
  await componentsPage.mount({
    html: `
    <mdc-themeprovider class="themeWrapper" id="local" theme="${themeClass}">
      <p>Current theme: ${themeClass}</p>
      <div>
        <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
        <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
        <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
      </div>
    </mdc-themeprovider>
      `,
  });
});

const testToRun = async (componentsPage: ComponentsPage, theme: ThemeName) => {
  const themeprovider = componentsPage.page.locator('mdc-themeprovider#local');

  // get fully qualified theme
  const themeClass = utils.getFullQualifiedTheme(theme);
  const oppositeThemeClass = themeClass.includes('darkWebex')
    ? utils.getFullQualifiedTheme('lightWebex')
    : utils.getFullQualifiedTheme('darkWebex');

  // initial check for the themeprovider be visible on the screen:
  await themeprovider.waitFor();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await steps.automaticA11yCheckStep(componentsPage);
  });

  /**
   * VISUAL REGRESSION
   */
  // TODO: fix visual regression test on CI
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot(`mdc-themeprovider-${theme}`, {
        element: themeprovider,
      });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute theme should be present on component by default', async () => {
      expect(await themeprovider.getAttribute('theme')).toBe(themeClass);
    });

    await test.step('corresponding theme class should be present on component by default', async () => {
      expect(await themeprovider.getAttribute('class')).toContain(themeClass);
      expect(await themeprovider.getAttribute('class')).not.toContain(oppositeThemeClass);
    });
  });
};

// test.describe('mdc-themeprovider', () => {
//   test.use({
//     theme: THEME_NAMES.DARK_WEBEX,
//   });

//   test('dark', async ({ componentsPage, theme }) => {
//     await testToRun(componentsPage, theme);
//   });
// });

test.describe('mdc-themeprovider', () => {
  test.use({
    theme: THEME_NAMES.LIGHT_WEBEX,
  });

  // TODO: fix e2e test
  test.fixme('light', async ({ componentsPage, theme }) => {
    await testToRun(componentsPage, theme);
  });
});
