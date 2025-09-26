import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

import { DEFAULTS } from './illustrationprovider.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  url: string;
  fileExtension?: string;
  lengthUnit?: string;
  size?: number;
  type?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  const renderIllustrationProvider = (children: string = '') => `
    <mdc-illustrationprovider 
      illustration-set="custom-illustrations"
      url="${restArgs.url}" 
      id="local" 
      ${restArgs.fileExtension ? `file-extension="${restArgs.fileExtension}"` : ''}
    >
      <mdc-subcomponent-illustration id="sub-local" illustration-label-prefix="IllustrationProvider Set: "></mdc-subcomponent-illustration>
      <mdc-illustration length-unit="rem" id="illustration-local" name="astronaut-avatar-onetwozero-empty-primary" size="2"></mdc-illustration>
      ${children}
    </mdc-illustrationprovider>
  `;

  if (restArgs.type === 'nested') {
    await componentsPage.mount({
      html: renderIllustrationProvider(`
      <mdc-illustrationprovider 
        illustration-set="custom-illustrations"
        url="${restArgs.url}" 
        id="nested" 
        ${restArgs.fileExtension ? `file-extension="${restArgs.fileExtension}"` : ''}
      >
        <mdc-subcomponent-illustration id="sub-nested" illustration-label-prefix="Nested IllustrationProvider Set: ">
        </mdc-subcomponent-illustration>
        <mdc-illustration id="illustration-local" name="astronaut-avatar-onetwozero-empty-primary"></mdc-illustration>
      </mdc-illustrationprovider>
        `),
    });
  } else {
    await componentsPage.mount({
      html: renderIllustrationProvider(),
    });
  }
};

const testToRun = async (componentsPage: ComponentsPage, type: string) => {
  const url = '/dist/illustrations/svg';

  await setup({ componentsPage, url, type });
  const illustrationprovider = componentsPage.page.locator('mdc-illustrationprovider#local');
  const subComponentLocator = componentsPage.page.locator('mdc-subcomponent-illustration#sub-local');

  let nestedIllustrationProvider: any;
  let nestedSubComponentLocator: any;
  if (type === 'nested') {
    nestedIllustrationProvider = componentsPage.page.locator('mdc-illustrationprovider#nested');
    nestedSubComponentLocator = componentsPage.page.locator('mdc-subcomponent-illustration#sub-nested');
    await nestedIllustrationProvider.waitFor();
  }

  await illustrationprovider.waitFor();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations(`illustration-provider-${type}`, true);
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      const screenshotName = `mdc-illustrationprovider-${type}`;

      await componentsPage.visualRegression.takeScreenshot(screenshotName);
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('should have default attributes when no attributes are passed', async () => {
      await expect(illustrationprovider).toHaveAttribute('illustration-set', 'custom-illustrations');
      await expect(illustrationprovider).toHaveAttribute('url', url);
      await expect(illustrationprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
      // SUBCOMPONENT
      await expect(subComponentLocator).toBeVisible();
      await expect(subComponentLocator).toContainText('IllustrationProvider Set: custom-illustrations');

      if (type === 'nested') {
        await expect(nestedIllustrationProvider).toHaveAttribute('url', url);
        await expect(nestedIllustrationProvider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
        await expect(nestedSubComponentLocator).toBeVisible();
        await expect(nestedSubComponentLocator).toContainText('Nested IllustrationProvider Set: custom-illustrations');
      }
    });

    await test.step('should fallback to default values when invalid attributes are passed', async () => {
      await componentsPage.setAttributes(illustrationprovider, {
        'file-extension': 'exe',
      });

      await expect(illustrationprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);

      if (type === 'nested') {
        await componentsPage.setAttributes(nestedIllustrationProvider, {
          'file-extension': 'exe',
        });

        await expect(nestedIllustrationProvider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
        await expect(nestedSubComponentLocator).toContainText('Nested IllustrationProvider Set: custom-illustrations');
      }
    });

    await test.step('should only accept allowed file extensions', async () => {
      await componentsPage.setAttributes(illustrationprovider, {
        'file-extension': 'svg',
      });

      await expect(illustrationprovider).toHaveAttribute('file-extension', 'svg');

      if (type === 'nested') {
        await componentsPage.setAttributes(nestedIllustrationProvider, {
          'file-extension': 'svg',
        });

        await expect(nestedIllustrationProvider).toHaveAttribute('file-extension', 'svg');
      }
    });
  });

  // note: we are only able to test the caching feature with the custom illustrations,
  // as the momentum-illustrations are not available in the test environment (would need separate build tooling for that)
  await test.step('caching', async () => {
    await test.step('caching turned off (custom illustrations fetch)', async () => {
      if (type === 'standalone') {
        await componentsPage.setAttributes(illustrationprovider, {
          'file-extension': 'svg',
        });
        const illustrationLocator = componentsPage.page.locator('mdc-illustration#illustration-local');

        const responseEmptySecondaryFirstTime = componentsPage.page.waitForResponse(
          '**/astronaut-avatar-onetwozero-empty-secondary.svg',
        );
        await componentsPage.setAttributes(illustrationLocator, {
          name: 'astronaut-avatar-onetwozero-empty-secondary',
        });
        await componentsPage.expectPromiseTimesOut(responseEmptySecondaryFirstTime, false);

        const responseEmptyPrimaryRegular = componentsPage.page.waitForResponse(
          '**/astronaut-avatar-onetwozero-empty-primary.svg',
        );
        await componentsPage.setAttributes(illustrationLocator, {
          name: 'astronaut-avatar-onetwozero-empty-primary',
        });
        await componentsPage.expectPromiseTimesOut(responseEmptyPrimaryRegular, false);

        const responseEmptySecondarySecondTime = componentsPage.page.waitForResponse(
          '**/astronaut-avatar-onetwozero-empty-secondary.svg',
        );
        await componentsPage.setAttributes(illustrationLocator, {
          name: 'astronaut-avatar-onetwozero-empty-secondary',
        });
        // this should not timeout, so the network request is still made, cause caching is not turned on:
        await componentsPage.expectPromiseTimesOut(responseEmptySecondarySecondTime, false);
      }
    });
    await test.step('caching (in-memory-cache) turned on', async () => {
      if (type === 'standalone') {
        await componentsPage.setAttributes(illustrationprovider, {
          'file-extension': 'svg',
          'cache-strategy': 'in-memory-cache',
          'cache-name': 'momentum',
        });
        const illustrationLocator = componentsPage.page.locator('mdc-illustration#illustration-local');

        const responseEmptySecondaryFirstTime = componentsPage.page.waitForResponse(
          '**/box-open-onetwozero-empty-secondary.svg',
        );
        await componentsPage.setAttributes(illustrationLocator, {
          name: 'box-open-onetwozero-empty-secondary',
        });
        await componentsPage.expectPromiseTimesOut(responseEmptySecondaryFirstTime, false);

        const responseEmptyPrimaryRegular = componentsPage.page.waitForResponse(
          '**/box-open-onetwozero-empty-primary.svg',
        );
        await componentsPage.setAttributes(illustrationLocator, {
          name: 'box-open-onetwozero-empty-primary',
        });
        await componentsPage.expectPromiseTimesOut(responseEmptyPrimaryRegular, false);

        const responseEmptySecondarySecondTime = componentsPage.page.waitForResponse(
          '**/box-open-onetwozero-empty-secondary.svg',
        );
        await componentsPage.setAttributes(illustrationLocator, {
          name: 'box-open-onetwozero-empty-secondary',
        });
        // this should timeout, so the network request is not made, cause caching is turned on:
        await componentsPage.expectPromiseTimesOut(responseEmptySecondarySecondTime, true);
      }
    });
  });
};

test.describe.parallel('mdc-IllustrationProvider', () => {
  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage, 'standalone');
  });

  test('nested', async ({ componentsPage }) => {
    await testToRun(componentsPage, 'nested');
  });
});
