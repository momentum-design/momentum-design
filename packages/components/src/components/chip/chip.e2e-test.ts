/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { IconNames } from '../icon/icon.types';
import { COLOR } from './chip.constants';
import type { ColorType } from './chip.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label: string;
  iconName?: IconNames;
  color?: ColorType;
  disabled?: boolean;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, label, iconName, color, disabled } = args;

  await componentsPage.mount({
    html: `
      <mdc-chip
        label="${label}"
        icon-name="${iconName}"
        color="${color}"
        ?disabled="${disabled}"
      />
    `,
    clearDocument: true,
  });

  const chip = componentsPage.page.locator('mdc-chip');
  await chip.waitFor();
  return chip;
};

test('mdc-chip', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const chipStickerSheet = new StickerSheet(componentsPage, 'mdc-chip');

    chipStickerSheet.setAttributes({ label: 'Chip' });
    await chipStickerSheet.createMarkupWithCombination({ color: COLOR });

    chipStickerSheet.setAttributes({ label: 'Chip', 'icon-name': 'placeholder-bold' });
    await chipStickerSheet.createMarkupWithCombination({ color: COLOR });

    chipStickerSheet.setAttributes({ label: 'Disabled', disabled: '' });
    await chipStickerSheet.createMarkupWithCombination({});

    chipStickerSheet.setAttributes({ label: 'Disabled', 'icon-name': 'placeholder-bold', disabled: '' });
    await chipStickerSheet.createMarkupWithCombination({});

    await chipStickerSheet.mountStickerSheet();
    const container = await chipStickerSheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-chip', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('chip-default');
  });

  const chip = await setup({ componentsPage, label: 'Chip', iconName: 'placeholder-bold' });
  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute color should be present on component by default', async () => {
      await expect(chip).toHaveAttribute('color', COLOR.DEFAULT);
    });

    await test.step('attribute label should be present on component by default', async () => {
      await expect(chip).toHaveAttribute('label', 'Chip');
    });

    await test.step('attribute icon-name should be present on component by default', async () => {
      await expect(chip).toHaveAttribute('icon-name', 'placeholder-bold');
    });

    await test.step('attribute disabled should be set on component', async () => {
      await componentsPage.setAttributes(chip, { disabled: '' });
      await expect(chip).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(chip, 'disabled');
    });

    for (const color of Object.values(COLOR)) {
      await test.step(`attribute color should be set to ${color}`, async () => {
        await componentsPage.setAttributes(chip, { color });
        await expect(chip).toHaveAttribute('color', color);
        await componentsPage.removeAttribute(chip, 'color');
      });
    }
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('component should fire callback x when clicking on it', async () => {
        // TODO: add test here
      });
    });

    await test.step('focus', async () => {
      await test.step('component should be focusable with tab', async () => {
        // TODO: add test here
      });

      // add additional tests here, like tabbing through several parts of the component
    });

    await test.step('keyboard', async () => {
      await test.step('component should fire callback x when pressing y', async () => {
        // TODO: add test here
      });
    });
  });
});
