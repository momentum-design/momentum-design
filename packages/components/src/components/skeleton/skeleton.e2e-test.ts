/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { SKELETON_VARIANTS } from './skeleton.constants';
import type { SkeletonVariant } from './skeleton.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  motion?: boolean;
  variant?: SkeletonVariant;
  withContent?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  let html = `<mdc-skeleton ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}`;
  html += `${restArgs.motion ? ' motion' : ''}`;
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
  await skeletonStickerSheet.createMarkupWithCombination(
    { variant: SKELETON_VARIANTS },
    { rowWrapperStyle: 'height: 50px' },
  );
  await skeletonStickerSheet.mountStickerSheet();

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
      await componentsPage.visualRegression.takeScreenshot('mdc-skeleton-variants');
    });

    await test.step('matches screenshot of skeleton variants stickersheet with content', async () => {
      await setup({
        componentsPage,
        variant: SKELETON_VARIANTS.RECTANGULAR,
        withContent: true,
      });
      await componentsPage.visualRegression.takeScreenshot('mdc-skeleton-with-content');
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute motion should not be present by default', async () => {
      const skeleton = await setup({ componentsPage });

      await expect(skeleton).not.toHaveAttribute('motion');
    });

    await test.step('attribute motion should be present when enabled', async () => {
      const skeleton = await setup({ componentsPage, motion: true });

      await expect(skeleton).toHaveAttribute('motion', '');
    });

    // Test all variants
    for (const variant of Object.values(SKELETON_VARIANTS)) {
      await test.step(`attribute variant ${variant} should be present as expected`, async () => {
        const skeleton = await setup({ componentsPage, variant });
        await expect(skeleton).toHaveAttribute('variant', variant);
      });
    }
  });
});

test('mdc-skeleton reduced motion', async ({ componentsPage }) => {
  await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
  const skeleton = await setup({ componentsPage, motion: true });

  await expect(skeleton).toHaveCSS('animation-name', 'skeleton-shimmer');

  await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(skeleton).toHaveCSS('animation-name', 'none');
  await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
});
