import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import CONSTANTS from '../../../config/playwright/setup/constants';

type TestToRunArgs = {
  componentsPage: ComponentsPage;
  theme?: string;
  themeName: string;
  type: string;
  expectedNestedTheme: string;
};

const testToRun = async ({ componentsPage, theme, themeName, type, expectedNestedTheme }: TestToRunArgs) => {
  const themeprovider = componentsPage.page.locator('mdc-themeprovider#local');

  // initial check for the themeprovider be visible on the screen:
  await themeprovider.waitFor();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations(`mdc-themeprovider-${themeName}-${type}`, true);
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      let screenshotName = `mdc-themeprovider-${themeName}-${type}`;

      // if theme is undefined, we expect the default theme to be darkWebex
      if (theme === undefined) {
        screenshotName = 'mdc-themeprovider-darkWebex-standalone';
      }
      await componentsPage.visualRegression.takeScreenshot(screenshotName);
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute themeclass should be present on component by default', async () => {
      expect(await themeprovider.getAttribute('themeclass')).toBe(theme || 'mds-theme-stable-darkWebex');
    });

    await test.step('corresponding class should be present on component by default', async () => {
      expect(await themeprovider.getAttribute('class')).toContain(theme || 'mds-theme-stable-darkWebex');
    });

    if (type === 'nested') {
      const nestedThemeProvider = componentsPage.page.locator('mdc-themeprovider#nested');
      await test.step('attribute themeclass should be set to the expected nested theme', async () => {
        expect(await nestedThemeProvider.getAttribute('themeclass')).toBe(expectedNestedTheme);
      });

      await test.step('corresponding class should be set to the expected nested theme class', async () => {
        expect(await nestedThemeProvider.getAttribute('class')).toContain(expectedNestedTheme);
      });
    }
  });
};

test.describe.parallel('mdc-themeprovider', () => {
  [
    {
      theme: CONSTANTS.THEME_CLASSES.LIGHT_WEBEX,
      themeName: 'lightWebex',
      type: 'standalone',
    },
    {
      theme: CONSTANTS.THEME_CLASSES.DARK_WEBEX,
      themeName: 'darkWebex',
      type: 'standalone',
    },
    {
      theme: CONSTANTS.THEME_CLASSES.LIGHT_WEBEX,
      themeName: 'lightWebex',
      type: 'nested',
    },
    {
      theme: CONSTANTS.THEME_CLASSES.DARK_WEBEX,
      themeName: 'darkWebex',
      type: 'nested',
    },
    {
      theme: undefined,
      themeName: 'undefined',
      type: 'error case',
    },
    {
      theme: 'a-other-theme-which-does-not-exist',
      themeName: 'a-other-theme-which-does-not-exist',
      type: 'error case',
    },
  ].forEach(({ theme, themeName, type }) => {
    test.describe(`${type} tests`, () => {
      const oppositeTheme =
        theme === 'mds-theme-stable-darkWebex' ? 'mds-theme-stable-lightWebex' : 'mds-theme-stable-darkWebex';

      test.use({
        theme: theme as any,
      });

      test.beforeEach(async ({ componentsPage, theme }) => {
        const renderThemeProvider = (children: string = '') => `
            <mdc-themeprovider class="themeWrapper" id="local" themeclass="${theme}">
              <mdc-subcomponent theme-label-prefix="Theme: "></mdc-subcomponent>
              <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
              <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
              <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
              ${children}
            </mdc-themeprovider>
            `;

        if (type === 'nested') {
          await componentsPage.mount({
            html: renderThemeProvider(`
              <mdc-themeprovider class="nestedThemeWrapper" id="nested" themeclass="${oppositeTheme}">
                <mdc-subcomponent theme-label-prefix="Nested Theme: "></mdc-subcomponent>
                <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
                <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
                <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
              </mdc-themeprovider>
              `),
          });
        } else {
          await componentsPage.mount({
            html: renderThemeProvider(),
          });
        }
      });

      test(themeName, async ({ componentsPage }) => {
        await testToRun({
          componentsPage,
          theme,
          themeName,
          type,
          expectedNestedTheme: oppositeTheme,
        });
      });
    });
  });
});
