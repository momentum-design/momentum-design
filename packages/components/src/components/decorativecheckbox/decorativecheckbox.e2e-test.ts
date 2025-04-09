import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-decorative-checkbox
        ${restArgs.checked ? 'checked' : ''}
        ${restArgs.indeterminate ? 'indeterminate' : ''}
        ${restArgs.disabled ? 'disabled' : ''}></mdc-decorative-checkbox>
    `,
    clearDocument: true,
  });
  const decorativecheckbox = componentsPage.page.locator('mdc-decorative-checkbox');
  await decorativecheckbox.waitFor();
  return decorativecheckbox;
};

test('mdc-decorative-checkbox', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const decorativecheckboxStickerSheet = new StickerSheet(componentsPage, 'mdc-decorative-checkbox');
    await decorativecheckboxStickerSheet.createMarkupWithCombination({});
    decorativecheckboxStickerSheet.setAttributes({ checked: '' });
    await decorativecheckboxStickerSheet.createMarkupWithCombination({});
    decorativecheckboxStickerSheet.setAttributes({ indeterminate: '' });
    await decorativecheckboxStickerSheet.createMarkupWithCombination({});
    decorativecheckboxStickerSheet.setAttributes({ disabled: '' });
    await decorativecheckboxStickerSheet.createMarkupWithCombination({});
    decorativecheckboxStickerSheet.setAttributes({ checked: '', disabled: '' });
    await decorativecheckboxStickerSheet.createMarkupWithCombination({});
    decorativecheckboxStickerSheet.setAttributes({ indeterminate: '', disabled: '' });
    await decorativecheckboxStickerSheet.createMarkupWithCombination({});
    await decorativecheckboxStickerSheet.mountStickerSheet();
    const container = decorativecheckboxStickerSheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-decorativecheckbox', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('decorative-checkbox-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const decorativecheckbox = await setup({ componentsPage });
    await test.step('attribute checked should be present on component when set', async () => {
      await componentsPage.setAttributes(decorativecheckbox, { checked: '' });
      await expect(decorativecheckbox).toHaveAttribute('checked', '');
      await componentsPage.removeAttribute(decorativecheckbox, 'checked');
    });
    await test.step('attribute indeterminate should be present on component when set', async () => {
      await componentsPage.setAttributes(decorativecheckbox, { indeterminate: '' });
      await expect(decorativecheckbox).toHaveAttribute('indeterminate', '');
      await componentsPage.removeAttribute(decorativecheckbox, 'indeterminate');
    });
    await test.step('attribute disabled should be present on component when set', async () => {
      await componentsPage.setAttributes(decorativecheckbox, { disabled: '' });
      await expect(decorativecheckbox).toHaveAttribute('disabled', '');
      await componentsPage.removeAttribute(decorativecheckbox, 'disabled');
    });
  });
});
