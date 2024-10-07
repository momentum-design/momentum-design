import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import { DEFAULTS } from './iconprovider.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  url: string;
  fileExtension?: string;
  lengthUnit?: string;
  size?: number;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-iconprovider 
      url="${restArgs.url}" 
      id="local" 
      ${restArgs.fileExtension ? `file-extension="${restArgs.fileExtension}"` : ''}
      ${restArgs.lengthUnit ? `length-unit="${restArgs.lengthUnit}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
    >
      <mdc-icon name="accessibility-regular" size="2"></mdc-icon>
    </mdc-iconprovider>
      `,
  });
};

test.describe.parallel('mdc-IconProvider', () => {
  const url = '/dist/icons/svg';

  test.describe('accessibility', () => {
    test('should pass accessibility checks for default state', async ({ componentsPage }) => {
      await setup({ componentsPage, url });
      const iconprovider = componentsPage.page.locator('mdc-iconprovider#local');

      await iconprovider.waitFor();

      await componentsPage.accessibility.checkForA11yViolations('icon-provider-default');
    });
  });

  test.describe('visual regression', () => {
    test('should match screenshot with default values', async ({ componentsPage }) => {
      await setup({ componentsPage, url });
      const iconprovider = componentsPage.page.locator('mdc-iconprovider#local');

      await iconprovider.waitFor();

      await componentsPage.visualRegression.takeScreenshot('mdc-iconprovider', {
        element: iconprovider,
      });
    });
  });

  test.describe('defaults', () => {
    test('should have default attributes when no attributes are passed', async ({ componentsPage }) => {
      await setup({ componentsPage, url });
      const iconprovider = componentsPage.page.locator('mdc-iconprovider#local');

      await iconprovider.waitFor();

      await expect(iconprovider).toHaveAttribute('url', url);
      await expect(iconprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
      await expect(iconprovider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
      await expect(iconprovider).toHaveAttribute(
        'size',
        DEFAULTS.LENGTH_UNIT_SIZE[DEFAULTS.LENGTH_UNIT].toString(),
      );
    });
  });

  test.describe('edge cases', () => {
    test('should fallback to default values when invalid attributes are passed', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        url,
        fileExtension: 'exe',
        lengthUnit: 'mm',
        size: 9999,
      });

      const iconprovider = componentsPage.page.locator('mdc-iconprovider#local');

      await iconprovider.waitFor();

      await expect(iconprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
      await expect(iconprovider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
      await expect(iconprovider).toHaveAttribute(
        'size',
        DEFAULTS.LENGTH_UNIT_SIZE[DEFAULTS.LENGTH_UNIT].toString(),
      );
    });
  });

  test.describe('allowed list testing', () => {
    test('should only accept allowed file extensions and length units', async ({ componentsPage }) => {
      const validSetup = {
        componentsPage,
        url,
        fileExtension: 'svg',
        lengthUnit: 'rem',
      };
      await setup(validSetup);
      const iconprovider = componentsPage.page.locator('mdc-iconprovider#local');

      await iconprovider.waitFor();

      await expect(iconprovider).toHaveAttribute('file-extension', 'svg');
      await expect(iconprovider).toHaveAttribute('length-unit', 'rem');
      await expect(iconprovider).toHaveAttribute(
        'size',
        DEFAULTS.LENGTH_UNIT_SIZE[validSetup.lengthUnit].toString(),
      );
    });
  });
});
