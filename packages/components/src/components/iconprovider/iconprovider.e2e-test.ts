import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

import { DEFAULTS, LENGTH_UNIT_SIZE } from './iconprovider.constants';

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
  const renderIconProvider = (children: string = '') => `
    <mdc-iconprovider 
      icon-set="custom-icons"
      url="${restArgs.url}" 
      id="local" 
      ${restArgs.fileExtension ? `file-extension="${restArgs.fileExtension}"` : ''}
      ${restArgs.lengthUnit ? `length-unit="${restArgs.lengthUnit}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
    >
      <mdc-subcomponent-icon id="sub-local" icon-label-prefix="IconProvider Length Unit: "></mdc-subcomponent-icon>
      <mdc-icon length-unit="rem" id="icon-local" name="accessibility-regular" size="2"></mdc-icon>
      ${children}
    </mdc-iconprovider>
  `;

  if (restArgs.type === 'nested') {
    await componentsPage.mount({
      html: renderIconProvider(`
      <mdc-iconprovider 
        icon-set="custom-icons"
        url="${restArgs.url}" 
        id="nested" 
        ${restArgs.fileExtension ? `file-extension="${restArgs.fileExtension}"` : ''}
        ${restArgs.lengthUnit ? `length-unit="${restArgs.lengthUnit}"` : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
      >
        <mdc-subcomponent-icon id="sub-nested" icon-label-prefix="Nested IconProvider Length Unit: ">
        </mdc-subcomponent-icon>
        <mdc-icon length-unit="rem" id="icon-local" name="accessibility-regular" size="2"></mdc-icon>
      </mdc-iconprovider>
        `),
    });
  } else {
    await componentsPage.mount({
      html: renderIconProvider(),
    });
  }
};

const testToRun = async (componentsPage: ComponentsPage, type: string) => {
  const url = '/dist/icons/svg';

  await setup({ componentsPage, url, type });
  const iconprovider = componentsPage.page.locator('mdc-iconprovider#local');
  const subComponentLocator = componentsPage.page.locator('mdc-subcomponent-icon#sub-local');

  let nestedIconProvider: any;
  let nestedSubComponentLocator: any;
  if (type === 'nested') {
    nestedIconProvider = componentsPage.page.locator('mdc-iconprovider#nested');
    nestedSubComponentLocator = componentsPage.page.locator('mdc-subcomponent-icon#sub-nested');
    await nestedIconProvider.waitFor();
  }

  await iconprovider.waitFor();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations(`icon-provider-${type}`, true);
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      const screenshotName = `mdc-iconprovider-${type}`;

      await componentsPage.visualRegression.takeScreenshot(screenshotName);
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('should have default attributes when no attributes are passed', async () => {
      await expect(iconprovider).toHaveAttribute('icon-set', 'custom-icons');
      await expect(iconprovider).toHaveAttribute('url', url);
      await expect(iconprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
      await expect(iconprovider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
      await expect(iconprovider).toHaveAttribute(
        'size',
        LENGTH_UNIT_SIZE[DEFAULTS.LENGTH_UNIT as keyof typeof LENGTH_UNIT_SIZE].toString(),
      );
      // SUBCOMPONENT
      await expect(subComponentLocator).toBeVisible();
      await expect(subComponentLocator).toContainText(`IconProvider Length Unit: ${DEFAULTS.LENGTH_UNIT}`);

      if (type === 'nested') {
        await expect(nestedIconProvider).toHaveAttribute('url', url);
        await expect(nestedIconProvider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
        await expect(nestedIconProvider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
        await expect(nestedIconProvider).toHaveAttribute(
          'size',
          LENGTH_UNIT_SIZE[DEFAULTS.LENGTH_UNIT as keyof typeof LENGTH_UNIT_SIZE].toString(),
        );
        await expect(nestedSubComponentLocator).toBeVisible();
        await expect(nestedSubComponentLocator).toContainText(`IconProvider Length Unit: ${DEFAULTS.LENGTH_UNIT}`);
      }
    });

    await test.step('should fallback to default values when invalid attributes are passed', async () => {
      await componentsPage.setAttributes(iconprovider, {
        'file-extension': 'exe',
        'length-unit': 'mm',
        size: '9999',
      });

      await expect(iconprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
      await expect(iconprovider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
      await expect(iconprovider).toHaveAttribute('size', '9999');
      // SUBCOMPONENT
      await expect(subComponentLocator).toContainText(`IconProvider Length Unit: ${DEFAULTS.LENGTH_UNIT}`);

      if (type === 'nested') {
        await componentsPage.setAttributes(nestedIconProvider, {
          'file-extension': 'exe',
          'length-unit': 'mm',
          size: '9999',
        });

        await expect(nestedIconProvider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
        await expect(nestedIconProvider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
        await expect(nestedIconProvider).toHaveAttribute('size', '9999');
        await expect(nestedSubComponentLocator).toContainText(`IconProvider Length Unit: ${DEFAULTS.LENGTH_UNIT}`);
      }
    });

    await test.step('should only accept allowed file extensions and length units', async () => {
      await componentsPage.setAttributes(iconprovider, {
        'file-extension': 'svg',
        'length-unit': 'rem',
      });

      await expect(iconprovider).toHaveAttribute('file-extension', 'svg');
      await expect(iconprovider).toHaveAttribute('length-unit', 'rem');
      // SUBCOMPONENT
      await expect(subComponentLocator).toContainText('IconProvider Length Unit: rem');

      if (type === 'nested') {
        await componentsPage.setAttributes(nestedIconProvider, {
          'file-extension': 'svg',
          'length-unit': 'rem',
        });

        await expect(nestedIconProvider).toHaveAttribute('file-extension', 'svg');
        await expect(nestedIconProvider).toHaveAttribute('length-unit', 'rem');
        await expect(nestedSubComponentLocator).toContainText('IconProvider Length Unit: rem');
      }
    });
  });

  // note: we are only able to test the caching feature with the custom icons,
  // as the momentum-icons are not available in the test environment (would need separate build tooling for that)
  await test.step('caching', async () => {
    await test.step('caching turned off (custom icons fetch)', async () => {
      if (type === 'standalone') {
        await componentsPage.setAttributes(iconprovider, {
          'file-extension': 'svg',
          'length-unit': 'rem',
        });
        const iconLocator = componentsPage.page.locator('mdc-icon#icon-local');

        const responseAccessibilityBoldFirstTime = componentsPage.page.waitForResponse('**/accessibility-bold.svg');
        await componentsPage.setAttributes(iconLocator, {
          name: 'accessibility-bold',
        });
        await componentsPage.expectPromiseTimesOut(responseAccessibilityBoldFirstTime, false);

        const responsePlaceholderRegular = componentsPage.page.waitForResponse('**/placeholder-regular.svg');
        await componentsPage.setAttributes(iconLocator, {
          name: 'placeholder-regular',
        });
        await componentsPage.expectPromiseTimesOut(responsePlaceholderRegular, false);

        const responseAccessibilityBoldSecondTime = componentsPage.page.waitForResponse('**/accessibility-bold.svg');
        await componentsPage.setAttributes(iconLocator, {
          name: 'accessibility-bold',
        });
        // this should not timeout, so the network request is still made, cause caching is not turned on:
        await componentsPage.expectPromiseTimesOut(responseAccessibilityBoldSecondTime, false);
      }
    });
    await test.step('caching (in-memory-cache) turned on', async () => {
      if (type === 'standalone') {
        await componentsPage.setAttributes(iconprovider, {
          'file-extension': 'svg',
          'length-unit': 'rem',
          'cache-strategy': 'in-memory-cache',
          'cache-name': 'momentum',
        });
        const iconLocator = componentsPage.page.locator('mdc-icon#icon-local');

        const responseAccessoriesBoldFirstTime = componentsPage.page.waitForResponse('**/accessories-bold.svg');
        await componentsPage.setAttributes(iconLocator, {
          name: 'accessories-bold',
        });
        await componentsPage.expectPromiseTimesOut(responseAccessoriesBoldFirstTime, false);

        const responseAccessoriesRegular = componentsPage.page.waitForResponse('**/accessories-regular.svg');
        await componentsPage.setAttributes(iconLocator, {
          name: 'accessories-regular',
        });
        await componentsPage.expectPromiseTimesOut(responseAccessoriesRegular, false);

        const responseAccessoriesBoldSecondTime = componentsPage.page.waitForResponse('**/accessories-bold.svg');
        await componentsPage.setAttributes(iconLocator, {
          name: 'accessories-bold',
        });
        // this should timeout, so the network request is not made, cause caching is turned on:
        await componentsPage.expectPromiseTimesOut(responseAccessoriesBoldSecondTime, true);
      }
    });

    // TODO: currently Playwright does disable the cache, so this test will fail - investigate how to test Web API Cache
    // await test.step('caching (web-api-cache) turned on', async () => {
    //   if (type === 'standalone') {
    //     await componentsPage.setAttributes(iconprovider, {
    //       'file-extension': 'svg',
    //       'length-unit': 'rem',
    //       'cache-strategy': 'web-api-cache',
    //       'cache-name': 'momentum',
    //     });
    //     const iconLocator = componentsPage.page.locator('mdc-icon#icon-local');

    //     const responseAccordianBoldFirstTime = componentsPage.page.waitForResponse('**/accordian-bold.svg');
    //     await componentsPage.setAttributes(iconLocator, {
    //       name: 'accordian-bold',
    //     });
    //     await componentsPage.expectPromiseTimesOut(responseAccordianBoldFirstTime, false);

    //     const responseAccordianRegular = componentsPage.page.waitForResponse('**/accordian-regular.svg');
    //     await componentsPage.setAttributes(iconLocator, {
    //       name: 'accordian-regular',
    //     });
    //     await componentsPage.expectPromiseTimesOut(responseAccordianRegular, false);

    //     const responseAccordianBoldSecondTime = componentsPage.page.waitForResponse('**/accordian-bold.svg');
    //     await componentsPage.setAttributes(iconLocator, {
    //       name: 'accordian-bold',
    //     });
    //     // this should timeout, so the network request is not made, cause caching is turned on:
    //     await componentsPage.expectPromiseTimesOut(responseAccordianBoldSecondTime, true);
    //   }
    // });
  });
};

test.describe.parallel('mdc-IconProvider', () => {
  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage, 'standalone');
  });

  test('nested', async ({ componentsPage }) => {
    await testToRun(componentsPage, 'nested');
  });
});
