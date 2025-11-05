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
  secondChipForFocus?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  await componentsPage.mount({
    html: `
    ${restArgs.secondChipForFocus ? '<div id="wrapper">' : ''}
      <mdc-chip
        label="${restArgs.label}"
        ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
        ${restArgs.color ? `color="${restArgs.color}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
      ></mdc-chip>
      ${restArgs.secondChipForFocus ? '<mdc-chip label="Chip"></mdc-chip></div>' : ''}
    `,
    clearDocument: true,
  });

  const element = restArgs.secondChipForFocus
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-chip');
  await element.waitFor();

  const firstChip = componentsPage.page.locator('mdc-chip').first();
  return firstChip;
};

test('mdc-chip', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const chipStickerSheet = new StickerSheet(componentsPage, 'mdc-chip');

    chipStickerSheet.setAttributes({ label: 'Chip' });
    await chipStickerSheet.createMarkupWithCombination({ color: COLOR });

    chipStickerSheet.setAttributes({ 'icon-name': 'placeholder-bold', 'aria-label': 'Icon Only' });
    await chipStickerSheet.createMarkupWithCombination({ color: COLOR });

    chipStickerSheet.setAttributes({ label: 'Chip', 'icon-name': 'placeholder-bold' });
    await chipStickerSheet.createMarkupWithCombination({ color: COLOR });

    chipStickerSheet.setAttributes({ label: 'Long label', 'icon-name': 'placeholder-bold', style: 'width: 6.5rem' });
    await chipStickerSheet.createMarkupWithCombination({ color: COLOR });

    chipStickerSheet.setAttributes({ label: 'Disabled', disabled: '' });
    await chipStickerSheet.createMarkupWithCombination({});

    chipStickerSheet.setAttributes({ label: 'Disabled', 'icon-name': 'placeholder-bold', disabled: '' });
    await chipStickerSheet.createMarkupWithCombination({});

    await chipStickerSheet.mountStickerSheet({
      wrapperStyle: 'display: flex; flex-direction: column; gap: 0.5rem',
    });
    const container = chipStickerSheet.getWrapperContainer();
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
    const chip = await setup({ componentsPage, label: 'Label', secondChipForFocus: true });

    await componentsPage.page.evaluate(() => {
      const chip = document.getElementsByTagName('mdc-chip')[0];
      chip.addEventListener('click', () => {
        chip.classList.toggle('chip-listener');
      });
      (chip as HTMLElement).onclick = () => {
        chip.classList.toggle('chip-onclick');
      };
    });

    await test.step('focus', async () => {
      await test.step('component should be focusable with tab', async () => {
        await componentsPage.actionability.pressTab();
        await expect(chip).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(chip).not.toBeFocused();
      });
    });

    await test.step('mouse/pointer', async () => {
      await test.step('component should fire onclick when clicking chip', async () => {
        await chip.click();
        await expect(chip).toHaveClass('chip-listener chip-onclick');
      });
    });

    await test.step('keyboard', async () => {
      await test.step('component should fire onclick when pressing enter', async () => {
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('Enter');
        await expect(chip).toHaveClass('chip-listener chip-onclick');
      });
    });
  });
});
