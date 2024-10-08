import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import { DEFAULTS } from './iconprovider.constants';

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

const updateAttributes = async (componentsPage: ComponentsPage, type, attributes: Record<string, string>) => {
  await componentsPage.page.evaluate(({ type, attrs }) => {
    const element = document.querySelector('mdc-iconprovider#local');
    let nestedElement;
    if (type === 'nested') {
      nestedElement = document.querySelector('mdc-iconprovider#nested');
    }
    if (element) {
      Object.keys(attrs).forEach((key) => {
        element.setAttribute(key, attrs[key]);
        if (type === 'nested') {
          nestedElement.setAttribute(key, attrs[key]);
        }
      });
    }
  }, { type, attrs: attributes });
};

const testToRun = async ({ componentsPage, type }) => {
  const url = '/dist/icons/svg';

  await setup({ componentsPage, url, type });
  const iconprovider = componentsPage.page.locator('mdc-iconprovider#local');
  let nestedIconProvider;
  if (type === 'nested') {
    nestedIconProvider = componentsPage.page.locator('mdc-iconprovider#nested');

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

      await componentsPage.visualRegression.takeScreenshot(screenshotName, {
        element: iconprovider,
      });
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
        DEFAULTS.LENGTH_UNIT_SIZE[DEFAULTS.LENGTH_UNIT].toString(),
      );

      if (type === 'nested') {
        await expect(nestedIconProvider).toHaveAttribute('url', url);
        await expect(nestedIconProvider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
        await expect(nestedIconProvider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
        await expect(nestedIconProvider).toHaveAttribute(
          'size',
          DEFAULTS.LENGTH_UNIT_SIZE[DEFAULTS.LENGTH_UNIT].toString(),
        );
      }
    });
  });

  await test.step('should fallback to default values when invalid attributes are passed', async () => {
    await updateAttributes(componentsPage, type, {
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

    if (type === 'nested') {
      await expect(nestedIconProvider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
      await expect(nestedIconProvider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
      await expect(nestedIconProvider).toHaveAttribute(
        'size',
        '9999',
      );
    }
  });

  await test.step('should only accept allowed file extensions and length units', async () => {
    await updateAttributes(componentsPage, type, {
      'file-extension': 'svg',
      'length-unit': 'rem',
    });

    await expect(iconprovider).toHaveAttribute('file-extension', 'svg');
    await expect(iconprovider).toHaveAttribute('length-unit', 'rem');

    if (type === 'nested') {
      await expect(nestedIconProvider).toHaveAttribute('file-extension', 'svg');
      await expect(nestedIconProvider).toHaveAttribute('length-unit', 'rem');
    }
  });
};

test.describe.parallel('mdc-IconProvider', () => {
  test('standalone', async ({ componentsPage }) => {
    await testToRun({ componentsPage, type: 'standalone' });
  });

  test('nested', async ({ componentsPage }) => {
    await testToRun({ componentsPage, type: 'nested' });
  });
});
