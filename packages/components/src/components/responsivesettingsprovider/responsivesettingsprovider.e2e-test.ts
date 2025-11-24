import { kebabCase } from 'lodash';
import { expect, Locator } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

import type { ResponsiveSettings } from './responsivesettingsprovider.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  type: 'standalone' | 'nested';
  responsiveSettings: Partial<ResponsiveSettings>;
  nestedResponsiveSettings?: Partial<ResponsiveSettings>;
};

type TestOptions = SetupOptions & {
  expectedResponsiveSettings: ResponsiveSettings;
  expectedNestedResponsiveSettings?: ResponsiveSettings;
};

const toHaveAllAttributes = async (locator: Locator, attributes: Record<string, string | boolean>) => {
  for await (const [key, value] of Object.entries(attributes)) {
    if (value === true) {
      await expect(locator).toHaveAttribute(kebabCase(key));
    } else if (value === false) {
      await expect(locator).not.toHaveAttribute(kebabCase(key));
    } else {
      await expect(locator).toHaveAttribute(kebabCase(key), value as string);
    }
  }
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, responsiveSettings, nestedResponsiveSettings, type } = args;

  const renderResponsiveSettingsProvider = (children: string = '') => `
    <mdc-responsivesettingsprovider
      id="local"
      ${responsiveSettings.forceFullscreenDialog ? `force-fullscreen-dialog` : ''}
      ${responsiveSettings.popoverPositioning ? `popover-positioning="${responsiveSettings.popoverPositioning}"` : ''}
      ${responsiveSettings.media ? `media="${responsiveSettings.media}"` : ''}
    >
      <mdc-subcomponent-responsive-settings
        id="sub-local"
        label-prefix="ResponsiveSettingsProvider settings: "
      ></mdc-subcomponent-responsive-settings>
      ${children}
    </mdc-responsivesettingsprovider>
  `;

  if (type === 'nested') {
    await componentsPage.mount({
      html: renderResponsiveSettingsProvider(`
        <mdc-responsivesettingsprovider
          id="nested"
          ${nestedResponsiveSettings?.forceFullscreenDialog ? `force-fullscreen-dialog` : ''}
          ${nestedResponsiveSettings?.popoverPositioning ? `popover-positioning="${nestedResponsiveSettings?.popoverPositioning}"` : ''}
          ${nestedResponsiveSettings?.media ? `media="${nestedResponsiveSettings?.media}"` : ''}
        >
          <mdc-subcomponent-responsive-settings
            id="sub-nested"
            label-prefix="Nested ResponsiveSettingsProvider settings: "
          >
          </mdc-subcomponent-responsive-settings>
        </mdc-responsivesettingsprovider>
      `),
    });
  } else {
    await componentsPage.mount({
      html: renderResponsiveSettingsProvider(),
    });
  }
  await componentsPage.page.pause();
};

const testToRun = async ({
  componentsPage,
  type,
  responsiveSettings,
  nestedResponsiveSettings,
  expectedResponsiveSettings,
  expectedNestedResponsiveSettings,
}: TestOptions) => {
  await setup({ componentsPage, responsiveSettings, type, nestedResponsiveSettings });
  const responsiveSettingsProvider = componentsPage.page.locator('mdc-responsivesettingsprovider#local');
  const subComponentLocator = componentsPage.page.locator('mdc-subcomponent-responsive-settings#sub-local');

  let nestedResponsiveSettingsProvider: any;
  let nestedSubComponentLocator: any;
  if (type === 'nested') {
    nestedResponsiveSettingsProvider = componentsPage.page.locator('mdc-responsivesettingsprovider#nested');
    nestedSubComponentLocator = componentsPage.page.locator('mdc-subcomponent-responsive-settings#sub-nested');
    await nestedResponsiveSettingsProvider.waitFor();
  }

  await responsiveSettingsProvider.waitFor();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    let testResultName;
    if (nestedResponsiveSettings) {
      testResultName = `responsive-settings-provider-${type}-${nestedResponsiveSettings.media}-in-${responsiveSettings.media}`;
    } else {
      testResultName = `responsive-settings-provider-${type}-${responsiveSettings.media}`;
    }
    await componentsPage.accessibility.checkForA11yViolations(testResultName, true);
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    // SUBCOMPONENT
    await expect(subComponentLocator).toBeVisible();
    await expect(subComponentLocator).toContainText(
      `ResponsiveSettingsProvider settings: ${JSON.stringify(expectedResponsiveSettings)}`,
    );

    await toHaveAllAttributes(responsiveSettingsProvider, expectedResponsiveSettings);

    if (type === 'nested') {
      await expect(nestedSubComponentLocator).toBeVisible();
      await expect(nestedSubComponentLocator).toContainText(
        `ResponsiveSettingsProvider settings: ${JSON.stringify(expectedNestedResponsiveSettings)}`,
      );

      await toHaveAllAttributes(nestedResponsiveSettingsProvider, expectedNestedResponsiveSettings!);
    }
  });
};

test.describe.parallel('mdc-responsivesettingsprovider', () => {
  test('standalone default', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'standalone',
      responsiveSettings: {},
      expectedResponsiveSettings: {
        id: 'local',
        media: 'unknown',
        forceFullscreenDialog: false,
        popoverPositioning: 'float',
      },
    });
  });
  test('standalone mobile', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'standalone',
      responsiveSettings: {
        id: 'local',
        media: 'mobile',
        forceFullscreenDialog: true,
        popoverPositioning: 'dialog',
      },
      expectedResponsiveSettings: {
        id: 'local',
        media: 'mobile',
        forceFullscreenDialog: true,
        popoverPositioning: 'dialog',
      },
    });
  });
  test('nested default in mobile', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'nested',
      responsiveSettings: {
        media: 'mobile',
        forceFullscreenDialog: true,
        popoverPositioning: 'dialog',
      },
      expectedResponsiveSettings: {
        id: 'local',
        media: 'mobile',
        forceFullscreenDialog: true,
        popoverPositioning: 'dialog',
      },
      nestedResponsiveSettings: {},
      expectedNestedResponsiveSettings: {
        id: 'nested',
        media: 'unknown',
        forceFullscreenDialog: false,
        popoverPositioning: 'float',
      },
    });
  });
  test('nested mobile in default', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'nested',
      responsiveSettings: {},
      expectedResponsiveSettings: {
        id: 'local',
        media: 'unknown',
        forceFullscreenDialog: false,
        popoverPositioning: 'float',
      },
      nestedResponsiveSettings: {
        id: 'local',
        media: 'mobile',
        forceFullscreenDialog: true,
        popoverPositioning: 'dialog',
      },
      expectedNestedResponsiveSettings: {
        id: 'nested',
        media: 'mobile',
        forceFullscreenDialog: true,
        popoverPositioning: 'dialog',
      },
    });
  });
  test('nested mobile in desktop', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'nested',
      responsiveSettings: {
        media: 'desktop',
        forceFullscreenDialog: false,
        popoverPositioning: 'dialog',
      },
      expectedResponsiveSettings: {
        id: 'local',
        media: 'desktop',
        forceFullscreenDialog: false,
        popoverPositioning: 'dialog',
      },
      nestedResponsiveSettings: {
        id: 'local',
        media: 'mobile',
        forceFullscreenDialog: true,
        popoverPositioning: 'dialog',
      },
      expectedNestedResponsiveSettings: {
        id: 'nested',
        media: 'mobile',
        forceFullscreenDialog: true,
        popoverPositioning: 'dialog',
      },
    });
  });
});
