import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { ToggleSize } from './statictoggle.types';
import { TOGGLE_SIZE } from './statictoggle.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  'soft-disabled'?: boolean;
  size?: ToggleSize;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-statictoggle
        ${restArgs.checked ? 'checked' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.readonly ? 'readonly' : ''}
        ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
      ></mdc-statictoggle>
    `,
    clearDocument: true,
  });
  const statictoggle = componentsPage.page.locator('mdc-statictoggle');
  await statictoggle.waitFor();
  return statictoggle;
};

test('mdc-statictoggle', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-statictoggle');
    stickerSheet.setAttributes({ checked: '' });
    await stickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    stickerSheet.setAttributes({});
    await stickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    stickerSheet.setAttributes({ disabled: '' });
    await stickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    stickerSheet.setAttributes({ readonly: '' });
    await stickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    stickerSheet.setAttributes({ checked: '', readonly: '' });
    await stickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    stickerSheet.setAttributes({ 'soft-disabled': '' });
    await stickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    stickerSheet.setAttributes({ checked: '', 'soft-disabled': '' });
    await stickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    
    await stickerSheet.mountStickerSheet();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-statictoggle', {
        element: stickerSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('statictoggle-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const statictoggle = await setup({ componentsPage });
    await test.step('attribute size should be present on component by default', async () => {
      await expect(statictoggle).toHaveAttribute('size', 'default');
    });
    await test.step('attribute checked should be present on component when set', async () => {
      await componentsPage.setAttributes(statictoggle, { checked: '' });
      await expect(statictoggle).toHaveAttribute('checked', '');
      await componentsPage.removeAttribute(statictoggle, 'checked');
    });
    await test.step('attribute disabled should be present on component when set', async () => {
      await componentsPage.setAttributes(statictoggle, { disabled: '' });
      await expect(statictoggle).toHaveAttribute('disabled', '');
      await componentsPage.removeAttribute(statictoggle, 'disabled');
    });
    await test.step('attribute readonly should be present on component when set', async () => {
      await componentsPage.setAttributes(statictoggle, { readonly: '' });
      await expect(statictoggle).toHaveAttribute('readonly', '');
      await componentsPage.removeAttribute(statictoggle, 'readonly');
    });
    await test.step('attribute soft-disabled should be present on component when set', async () => {
      await componentsPage.setAttributes(statictoggle, { 'soft-disabled': '' });
      await expect(statictoggle).toHaveAttribute('soft-disabled', '');
      await componentsPage.removeAttribute(statictoggle, 'soft-disabled');
    });
  });
});
