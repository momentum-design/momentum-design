import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import CONSTANTS from '../../../config/playwright/setup/constants';
import type { ThemeClass } from '../../../config/playwright/setup/types';

test.beforeEach(async ({ componentsPage, theme }) => {
  await componentsPage.mount({
    html: `
    <mdc-themeprovider class="themeWrapper" id="local" themeclass="${theme}">
      <div>
        <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
        <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
        <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
      </div>
    </mdc-themeprovider>
      `,
  });
});

const testToRun = async (componentsPage: ComponentsPage, theme: ThemeClass, themeName: string) => {
  const themeprovider = componentsPage.page.locator('mdc-themeprovider#local');

  // initial check for the themeprovider be visible on the screen:
  await themeprovider.waitFor();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations(`theme-provider-${themeName}`);
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot(`mdc-themeprovider-${themeName}`, {
        element: themeprovider,
      });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute theme should be present on component by default', async () => {
      expect(await themeprovider.getAttribute('themeclass')).toBe(theme);
    });

    await test.step('corresponding theme class should be present on component by default', async () => {
      expect(await themeprovider.getAttribute('class')).toContain(theme);
    });
  });
};

test.describe.parallel('mdc-themeprovider', () => {
  [
    {
      theme: CONSTANTS.THEME_CLASSES.LIGHT_WEBEX,
      themeName: 'lightWebex',
    },
    {
      theme: CONSTANTS.THEME_CLASSES.DARK_WEBEX,
      themeName: 'darkWebex',
    },
  ].forEach(({ theme, themeName }) => {
    test.describe(`${themeName} tests`, () => {
      test.use({
        theme,
      });

      test(themeName, async ({ componentsPage }) => {
        await testToRun(componentsPage, theme, themeName);
      });
    });
  });
});
