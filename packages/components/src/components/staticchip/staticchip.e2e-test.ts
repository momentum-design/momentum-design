/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { IconNames } from '../icon/icon.types';

import { COLOR } from './staticchip.constants';
import type { ColorType } from './staticchip.types';

// Setup function for mounting static chip
const setup = async (args: {
  componentsPage: ComponentsPage;
  label: string;
  iconName?: IconNames;
  color?: ColorType;
}) => {
  const { componentsPage, ...restArgs } = args;

  await componentsPage.mount({
    html: `
      <mdc-staticchip
        label="${restArgs.label}"
        ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
        ${restArgs.color ? `color="${restArgs.color}"` : ''}
      ></mdc-staticchip>
    `,
    clearDocument: true,
  });

  const element = componentsPage.page.locator('mdc-staticchip');
  await element.waitFor();
  return element;
};

test('mdc-staticchip', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const chipStickerSheet = new StickerSheet(componentsPage, 'mdc-staticchip');

    chipStickerSheet.setAttributes({ label: 'Chip' });
    await chipStickerSheet.createMarkupWithCombination({ color: COLOR });

    chipStickerSheet.setAttributes({ 'icon-name': 'placeholder-bold' });
    await chipStickerSheet.createMarkupWithCombination({ color: COLOR });

    chipStickerSheet.setAttributes({ label: 'Chip', 'icon-name': 'placeholder-bold' });
    await chipStickerSheet.createMarkupWithCombination({ color: COLOR });

    await chipStickerSheet.mountStickerSheet({
      wrapperStyle: 'display: flex; flex-direction: column; gap: 0.5rem',
    });
    const container = chipStickerSheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-staticchip', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('staticchip-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const chip = await setup({ componentsPage, label: 'Chip', iconName: 'placeholder-bold' });
    await test.step('attribute color should be present on component by default', async () => {
      await expect(chip).toHaveAttribute('color', COLOR.DEFAULT);
    });

    await test.step('attribute label should be present on component by default', async () => {
      await expect(chip).toHaveAttribute('label', 'Chip');
    });

    await test.step('attribute icon-name should be present on component by default', async () => {
      await expect(chip).toHaveAttribute('icon-name', 'placeholder-bold');
    });

    for (const color of Object.values(COLOR)) {
      await test.step(`attribute color should be set to ${color}`, async () => {
        await componentsPage.setAttributes(chip, { color });
        await expect(chip).toHaveAttribute('color', color);
        await componentsPage.removeAttribute(chip, 'color');
      });
    }
  });
});
