import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { MARKER_VARIANTS } from './marker.constants';
import type { MarkerVariants } from './marker.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  variant?: MarkerVariants;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage } = args;
  await componentsPage.mount({
    html: `
      <mdc-marker></mdc-marker>
    `,
    clearDocument: true,
  });
  const marker = componentsPage.page.locator('mdc-marker');
  await marker.waitFor();
  return marker;
};

const visualTestingSetup = async (args: SetupOptions) => {
  const { componentsPage } = args;

  await componentsPage.mount({
    html: `
      <div class="componentWrapper componentRowWrapper">
        <mdc-marker variant="${MARKER_VARIANTS.SOLID}"></mdc-marker>
        <mdc-marker variant="${MARKER_VARIANTS.STRIPED}"></mdc-marker>
      </div>
    `,
    clearDocument: true,
  });

  const markersContainer = componentsPage.page.locator('.componentRowWrapper');
  await markersContainer.waitFor();
  return markersContainer;
};

const testToRun = async (componentsPage: ComponentsPage) => {
  const marker = await setup({ componentsPage });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('default variant should be solid', async () => {
      await expect(marker).toHaveAttribute('variant', MARKER_VARIANTS.SOLID);
    });

    await test.step('should apply striped variant when set', async () => {
      await componentsPage.setAttributes(marker, { variant: MARKER_VARIANTS.STRIPED });
      await expect(marker).toHaveAttribute('variant', MARKER_VARIANTS.STRIPED);
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('marker-default');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-marker');
    await stickerSheet.mountComponents({ variants: MARKER_VARIANTS });
    const container = stickerSheet.getWrapperContainer();
    await test.step('matches screenshot of different variants', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-marker-variants', { element: container });
    });
  });
};

test.describe.parallel('mdc-Marker', () => {
  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage);
  });
});
