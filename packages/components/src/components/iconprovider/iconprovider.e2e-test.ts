import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import steps from '../../../config/playwright/setup/steps/accessibility';
import { DEFAULTS } from './iconprovider.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  url: string;
  fileExtension?: string;
  lengthUnit?: string;
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
    >
      <mdc-icon name="accessibility-regular" scale="2"></mdc-icon>
    </mdc-iconprovider>
      `,
  });
};

test('mdc-iconprovider', async ({ componentsPage }) => {
  const url = '/dist/icons/svg';
  await setup({ componentsPage, url });
  const iconprovider = componentsPage.page.locator('mdc-iconprovider#local');

  // initial check for the iconprovider be visible on the screen:
  await iconprovider.waitFor();

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
    await test.step('matches screenshot of element with default values', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-iconprovider', {
        element: iconprovider,
      });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute X should be present on component by default', async () => {
      await expect(iconprovider).toHaveAttribute('url', url);
      await expect(iconprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
      await expect(iconprovider).toHaveAttribute('length-unit', DEFAULTS.LENGTH_UNIT);
    });
  });
});
