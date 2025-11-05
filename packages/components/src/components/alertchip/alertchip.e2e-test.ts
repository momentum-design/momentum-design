/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { VARIANTS } from './alertchip.constants';
import type { VariantType } from './alertchip.types';
import { getAlertIcon } from './alertchip.utils';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label: string;
  variant?: VariantType;
  iconName?: string;
  secondChipForFocus?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  await componentsPage.mount({
    html: `
      ${restArgs.secondChipForFocus ? '<div id="wrapper">' : ''}
      <mdc-alertchip
        label="${restArgs.label}"
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
        ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
      ></mdc-alertchip>
      ${restArgs.secondChipForFocus ? '<mdc-alertchip label="Chip"></mdc-alertchip></div>' : ''}
    `,
    clearDocument: true,
  });

  const element = restArgs.secondChipForFocus
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-alertchip');
  await element.waitFor();

  const firstChip = componentsPage.page.locator('mdc-alertchip').first();
  return firstChip;
};

test('mdc-alertchip', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const alertchipStickerSheet = new StickerSheet(componentsPage, 'mdc-alertchip');

    alertchipStickerSheet.setAttributes({ label: 'Alert' });
    await alertchipStickerSheet.createMarkupWithCombination({ variant: VARIANTS });

    alertchipStickerSheet.setAttributes({ label: 'Custom Icon', 'icon-name': 'placeholder-bold' });
    await alertchipStickerSheet.createMarkupWithCombination({ variant: VARIANTS });

    alertchipStickerSheet.setAttributes({ label: 'Long label', style: 'width: 6.5rem' });
    await alertchipStickerSheet.createMarkupWithCombination({ variant: VARIANTS });

    alertchipStickerSheet.setAttributes({ 'aria-label': 'Icon Only' });
    await alertchipStickerSheet.createMarkupWithCombination({ variant: VARIANTS });

    await alertchipStickerSheet.mountStickerSheet();
    const container = alertchipStickerSheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-alertchip', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('alertchip-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const alertchip = await setup({ componentsPage, label: 'Alertchip' });

    await test.step('attribute label should be present on component by default', async () => {
      await expect(alertchip).toHaveAttribute('label', 'Alertchip');
    });

    for (const variant of Object.values(VARIANTS)) {
      await test.step(`attribute variant should be set to ${variant}`, async () => {
        await componentsPage.setAttributes(alertchip, { variant });
        await expect(alertchip).toHaveAttribute('variant', variant);
        const iconEl = alertchip.locator('mdc-icon[part="icon"]');
        const icon = getAlertIcon(variant);
        if (icon) {
          await expect(iconEl).toHaveAttribute('name', icon);
        }
        await componentsPage.removeAttribute(alertchip, 'variant');
      });
    }
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const alertchip = await setup({ componentsPage, label: 'Label', secondChipForFocus: true });

    await componentsPage.page.evaluate(() => {
      const alertchip = document.getElementsByTagName('mdc-alertchip')[0];
      alertchip.addEventListener('click', () => {
        alertchip.classList.toggle('alertchip-listener');
      });
      (alertchip as HTMLElement).onclick = () => {
        alertchip.classList.toggle('alertchip-onclick');
      };
    });

    await test.step('focus', async () => {
      await test.step('component should be focusable with tab', async () => {
        await componentsPage.actionability.pressTab();
        await expect(alertchip).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(alertchip).not.toBeFocused();
      });
    });

    await test.step('mouse/pointer', async () => {
      await test.step('component should fire onclick when clicking chip', async () => {
        await alertchip.click();
        await expect(alertchip).toHaveClass('alertchip-listener alertchip-onclick');
      });
    });

    await test.step('keyboard', async () => {
      await test.step('component should fire onclick when pressing enter', async () => {
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('Enter');
        await expect(alertchip).toHaveClass('alertchip-listener alertchip-onclick');
      });
    });
  });
});
