import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
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
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('marker-default');
  });

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
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const visualMarker = await visualTestingSetup({ componentsPage });
    await test.step('matches screenshot of different variants', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-marker', { element: visualMarker });
    });
  });
};

test.describe.parallel('mdc-Marker', () => {
  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage);
  });
});
