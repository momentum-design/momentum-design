import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  checked?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  'soft-disabled'?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
        <mdc-staticradio 
        ${restArgs.checked ? 'checked' : ''}
        ${restArgs.readonly ? 'readonly' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}></mdc-staticradio>
      `,
    clearDocument: true,
  });
  const staticradio = componentsPage.page.locator('mdc-staticradio');
  await staticradio.waitFor();
  return staticradio;
};

test('mdc-staticradio', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const staticradioStickerSheet = new StickerSheet(componentsPage, 'mdc-staticradio');
    await staticradioStickerSheet.createMarkupWithCombination({});
    staticradioStickerSheet.setAttributes({ checked: '' });
    await staticradioStickerSheet.createMarkupWithCombination({});
    staticradioStickerSheet.setAttributes({ readonly: '' });
    await staticradioStickerSheet.createMarkupWithCombination({});
    staticradioStickerSheet.setAttributes({ disabled: '' });
    await staticradioStickerSheet.createMarkupWithCombination({});
    staticradioStickerSheet.setAttributes({ checked: '', readonly: '' });
    await staticradioStickerSheet.createMarkupWithCombination({});
    staticradioStickerSheet.setAttributes({ checked: '', disabled: '' });
    await staticradioStickerSheet.createMarkupWithCombination({});
    staticradioStickerSheet.setAttributes({ checked: '', readonly: '', disabled: '' });
    await staticradioStickerSheet.createMarkupWithCombination({});

    await staticradioStickerSheet.mountStickerSheet();
    const container = staticradioStickerSheet.getWrapperContainer();

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-staticradio', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('staticradio-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const staticradio = await setup({ componentsPage });
    await test.step('attribute checked should be present on component when set', async () => {
      await componentsPage.setAttributes(staticradio, { checked: '' });
      await expect(staticradio).toHaveAttribute('checked', '');
      await componentsPage.removeAttribute(staticradio, 'checked');
    });
    await test.step('attribute disabled should be present on component when set', async () => {
      await componentsPage.setAttributes(staticradio, { disabled: '' });
      await expect(staticradio).toHaveAttribute('disabled', '');
      await componentsPage.removeAttribute(staticradio, 'disabled');
    });
    await test.step('attribute soft-disabled should be present on component when set', async () => {
      await componentsPage.setAttributes(staticradio, { 'soft-disabled': '' });
      await expect(staticradio).toHaveAttribute('soft-disabled', '');
      await componentsPage.removeAttribute(staticradio, 'soft-disabled');
    });
    await test.step('attribute readonly should be present on component when set', async () => {
      await componentsPage.setAttributes(staticradio, { readonly: '' });
      await expect(staticradio).toHaveAttribute('readonly', '');
      await componentsPage.removeAttribute(staticradio, 'readonly');
    });
  });
});
