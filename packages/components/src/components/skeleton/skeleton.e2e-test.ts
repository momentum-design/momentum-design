/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { SKELETON_VARIANTS } from './skeleton.constants';
import type { SkeletonVariant } from './skeleton.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  variant?: SkeletonVariant;
  withContent?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  let html = `<mdc-skeleton ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}`;
  html += '>';

  if (restArgs.withContent) {
    html += '<div style="padding: 20px; width: 150px; height: 50px;">Content</div>';
  }

  html += '</mdc-skeleton>';

  await componentsPage.mount({
    html,
    clearDocument: true,
  });

  const skeleton = componentsPage.page.locator('mdc-skeleton');
  await skeleton.waitFor();
  return skeleton;
};

test('mdc-skeleton', async ({ componentsPage }) => {
  const skeletonStickerSheet = new StickerSheet(componentsPage, 'mdc-skeleton');
  await skeletonStickerSheet.createMarkupWithCombination({ variant: SKELETON_VARIANTS });
  await skeletonStickerSheet.mountStickerSheet();
  const container = skeletonStickerSheet.getWrapperContainer();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('skeleton-variants');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of skeleton variants stickersheet', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-skeleton-variants', { element: container });
    });

    await test.step('matches screenshot of skeleton variants stickersheet with content', async () => {
      const skeleton = await setup({
        componentsPage,
        variant: SKELETON_VARIANTS.RECTANGULAR,
        withContent: true,
      });
      await componentsPage.visualRegression.takeScreenshot('mdc-skeleton-with-content', { element: skeleton });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    // Test all variants
    for (const variant of Object.values(SKELETON_VARIANTS)) {
      await test.step(`attribute variant ${variant} should be present as expected`, async () => {
        const skeleton = await setup({ componentsPage, variant });
        await expect(skeleton).toHaveAttribute('variant', variant);
      });
    }
  });
});
