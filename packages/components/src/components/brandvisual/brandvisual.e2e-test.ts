import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

import type { BrandVisualNames } from './brandvisual.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name: BrandVisualNames;
};

// TODO: since esbuild does not support dynamic imports yet, we override the import of the svgs in a custom esbuild plugin,
// but that means for now we can only test svgs, not pngs in here. needs to be fixed
const setup = async (args: SetupOptions) => {
  const { componentsPage, name } = args;

  await componentsPage.mount({
    html: `<mdc-brandvisual name="${name}"></mdc-brandvisual>`,
    clearDocument: true,
  });
  const brandVisualLogo = componentsPage.page.locator('mdc-brandvisual');
  await brandVisualLogo.waitFor();

  return brandVisualLogo;
};

const visualTestingSetup = async (args: SetupOptions) => {
  const { componentsPage, name } = args;
  await componentsPage.mount({
    html: `
    <div class="componentWrapper componentRowWrapper">
      <mdc-brandvisual name="${name}"></mdc-brandvisual>
    </div>
      `,
    clearDocument: true,
  });
  const brandvisual = componentsPage.page.locator('.componentRowWrapper');
  await brandvisual.waitFor();
  return brandvisual;
};

test('mdc-brandvisual', async ({ componentsPage }) => {
  const name = 'zoom-color';

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const logo = await setup({ componentsPage, name });

    await test.step('attributes should be present on component by default', async () => {
      await expect(logo).toHaveAttribute('name', name);
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const brandVisual = await visualTestingSetup({ componentsPage, name });

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-brandvisual', { element: brandVisual });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('brandvisual-default');
  });
});
