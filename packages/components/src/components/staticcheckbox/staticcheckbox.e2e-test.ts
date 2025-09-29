import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  'soft-disabled'?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-staticcheckbox
        ${restArgs.checked ? 'checked' : ''}
        ${restArgs.indeterminate ? 'indeterminate' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.readonly ? 'readonly' : ''}
        ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}></mdc-staticcheckbox>
    `,
    clearDocument: true,
  });
  const staticcheckbox = componentsPage.page.locator('mdc-staticcheckbox');
  await staticcheckbox.waitFor();
  return staticcheckbox;
};

test('mdc-staticcheckbox', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const staticcheckboxStickerSheet = new StickerSheet(componentsPage, 'mdc-staticcheckbox');
    await staticcheckboxStickerSheet.createMarkupWithCombination({});
    staticcheckboxStickerSheet.setAttributes({ checked: '' });
    await staticcheckboxStickerSheet.createMarkupWithCombination({});
    staticcheckboxStickerSheet.setAttributes({ indeterminate: '' });
    await staticcheckboxStickerSheet.createMarkupWithCombination({});
    staticcheckboxStickerSheet.setAttributes({ disabled: '' });
    await staticcheckboxStickerSheet.createMarkupWithCombination({});
    staticcheckboxStickerSheet.setAttributes({ checked: '', disabled: '' });
    await staticcheckboxStickerSheet.createMarkupWithCombination({});
    staticcheckboxStickerSheet.setAttributes({ indeterminate: '', disabled: '' });
    await staticcheckboxStickerSheet.createMarkupWithCombination({});
    staticcheckboxStickerSheet.setAttributes({ readonly: '' });
    await staticcheckboxStickerSheet.createMarkupWithCombination({});
    staticcheckboxStickerSheet.setAttributes({ checked: '', readonly: '' });
    await staticcheckboxStickerSheet.createMarkupWithCombination({});
    staticcheckboxStickerSheet.setAttributes({ indeterminate: '', readonly: '' });
    await staticcheckboxStickerSheet.createMarkupWithCombination({});
    await staticcheckboxStickerSheet.mountStickerSheet();
    const container = staticcheckboxStickerSheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-staticcheckbox', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('staticcheckbox-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const staticcheckbox = await setup({ componentsPage });
    await test.step('attribute checked should be present on component when set', async () => {
      await componentsPage.setAttributes(staticcheckbox, { checked: '' });
      await expect(staticcheckbox).toHaveAttribute('checked', '');
      await componentsPage.removeAttribute(staticcheckbox, 'checked');
    });
    await test.step('attribute indeterminate should be present on component when set', async () => {
      await componentsPage.setAttributes(staticcheckbox, { indeterminate: '' });
      await expect(staticcheckbox).toHaveAttribute('indeterminate', '');
      await componentsPage.removeAttribute(staticcheckbox, 'indeterminate');
    });
    await test.step('attribute disabled should be present on component when set', async () => {
      await componentsPage.setAttributes(staticcheckbox, { disabled: '' });
      await expect(staticcheckbox).toHaveAttribute('disabled', '');
      await componentsPage.removeAttribute(staticcheckbox, 'disabled');
    });
    await test.step('attribute readonly should be present on component when set', async () => {
      await componentsPage.setAttributes(staticcheckbox, { readonly: '' });
      await expect(staticcheckbox).toHaveAttribute('readonly', '');
      await componentsPage.removeAttribute(staticcheckbox, 'readonly');
    });
    await test.step('attribute soft-disabled should be present on component when set', async () => {
      await componentsPage.setAttributes(staticcheckbox, { 'soft-disabled': '' });
      await expect(staticcheckbox).toHaveAttribute('soft-disabled', '');
      await componentsPage.removeAttribute(staticcheckbox, 'soft-disabled');
    });
  });
});
