/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { SIZE } from './bullet.constants';
import type { Size } from './bullet.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  size?: Size;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `<mdc-bullet ${restArgs.size ? `size="${restArgs.size}"` : ''}></mdc-bullet>`,
    clearDocument: true,
  });
  const bullet = componentsPage.page.locator('mdc-bullet');
  await bullet.waitFor();
  return bullet;
};

test('mdc-bullet', async ({ componentsPage }) => {
  const bulletStickerSheet = new StickerSheet(componentsPage, 'mdc-bullet');
  await bulletStickerSheet.createMarkupWithCombination({ size: SIZE });
  await bulletStickerSheet.mountStickerSheet();
  const container = bulletStickerSheet.getWrapperContainer();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('bullet-sizes');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of bullet sizes stickersheet', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-bullet-sizes', { element: container });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    for (const size of Object.values(SIZE)) {
      await test.step(`attribute size ${size} should be present as expected`, async () => {
        const bullet = await setup({ componentsPage, size });

        await expect(bullet).toHaveAttribute('size', size);
      });
    }
  });
});
