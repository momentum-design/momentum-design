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
      url="${restArgs.url}" 
      id="local" 
      ${restArgs.fileExtension ? `file-extension="${restArgs.fileExtension}"` : ''}
      ${restArgs.lengthUnit ? `length-unit="${restArgs.lengthUnit}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
    >
      <mdc-subcomponent-icon id="sub-local" icon-label-prefix="IconProvider Length Unit: "></mdc-subcomponent-icon>
      <mdc-icon name="accessibility-regular" size="2"></mdc-icon>
      ${children}
    </mdc-iconprovider>
  `;

  if (restArgs.type === 'nested') {
    await componentsPage.mount({
      html: renderIconProvider(`
      <mdc-iconprovider 
        url="${restArgs.url}" 
        id="nested" 
        ${restArgs.fileExtension ? `file-extension="${restArgs.fileExtension}"` : ''}
        ${restArgs.lengthUnit ? `length-unit="${restArgs.lengthUnit}"` : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
      >
        <mdc-subcomponent-icon id="sub-nested" icon-label-prefix="Nested IconProvider Length Unit: ">
        </mdc-subcomponent-icon>
        <mdc-icon name="accessibility-regular" size="2"></mdc-icon>
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
  });

  await test.step('should fallback to default values when invalid attributes are passed', async () => {
    await componentsPage.setAttributes(iconprovider, {
      'file-extension': 'exe',
      'length-unit': 'mm',
      size: '9999',
    });

    await expect(iconprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
    await expect(iconprovider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
    await expect(iconprovider).toHaveAttribute(
      'size',
      '9999',
    );
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
      await expect(nestedIconProvider).toHaveAttribute(
        'size',
        '9999',
      );
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
};

test.describe.parallel('mdc-IconProvider', () => {
  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage, 'standalone');
  });

  test('nested', async ({ componentsPage }) => {
    await testToRun(componentsPage, 'nested');
  });
});
