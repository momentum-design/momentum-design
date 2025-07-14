import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  secondChipForFocus?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  await componentsPage.mount({
    html: `
    ${restArgs.secondChipForFocus ? '<div id="wrapper">' : ''}
      <mdc-filterchip
        label="${restArgs.label}"
        ${restArgs.selected ? 'selected' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
      ></mdc-filterchip>
      ${restArgs.secondChipForFocus ? '<mdc-filterchip label="Chip"></mdc-filterchip></div>' : ''}
    `,
    clearDocument: true,
  });

  const element = restArgs.secondChipForFocus
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-filterchip');
  await element.waitFor();

  const firstChip = await componentsPage.page.locator('mdc-filterchip').first();
  return firstChip;
};

test('mdc-filterchip', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const filterChipStickerSheet = new StickerSheet(componentsPage, 'mdc-filterchip');
    filterChipStickerSheet.setAttributes({ label: 'Label' });
    await filterChipStickerSheet.createMarkupWithCombination({});
    filterChipStickerSheet.setAttributes({ label: 'Label', selected: '' });
    await filterChipStickerSheet.createMarkupWithCombination({});
    filterChipStickerSheet.setAttributes({ label: 'Label', disabled: '' });
    await filterChipStickerSheet.createMarkupWithCombination({});
    filterChipStickerSheet.setAttributes({ label: 'Label', disabled: '', selected: '' });
    await filterChipStickerSheet.createMarkupWithCombination({});
    await filterChipStickerSheet.mountStickerSheet({
      wrapperStyle: 'display: flex; flex-direction: column; gap: 0.5rem',
    });
    const container = filterChipStickerSheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-filterchip', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('filterchip-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const filterchip = await setup({ componentsPage, label: 'Label' });

    await test.step('attribute label should be present on component by default', async () => {
      await expect(filterchip).toHaveAttribute('label', 'Label');
    });

    await test.step('attribute selected should be set on component', async () => {
      await componentsPage.setAttributes(filterchip, { selected: '' });
      await expect(filterchip).toHaveAttribute('selected');
      await componentsPage.removeAttribute(filterchip, 'selected');
    });

    await test.step('attribute disabled should be set on component', async () => {
      await componentsPage.setAttributes(filterchip, { disabled: '' });
      await expect(filterchip).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(filterchip, 'disabled');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const filterchip = await setup({ componentsPage, label: 'Label', secondChipForFocus: true });

    await test.step('focus', async () => {
      await test.step('component should be focusable with tab', async () => {
        await componentsPage.actionability.pressTab();
        await expect(filterchip).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(filterchip).not.toBeFocused();
      });
    });

    await test.step('mouse/pointer', async () => {
      await test.step('component should fire onclick when clicking chip', async () => {
        await filterchip.click();
        await expect(filterchip).toHaveAttribute('selected');
        await filterchip.click();
        await expect(filterchip).not.toHaveAttribute('selected');
      });
    });

    await test.step('keyboard', async () => {
      await test.step('component should fire onclick when pressing enter', async () => {
        await componentsPage.page.keyboard.press('Enter');
        await expect(filterchip).toHaveAttribute('selected');
        await componentsPage.page.keyboard.press('Space');
        await expect(filterchip).not.toHaveAttribute('selected');
      });
    });
  });
});
