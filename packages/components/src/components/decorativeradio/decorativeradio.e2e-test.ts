import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  checked?: boolean;
  disabled?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
        <mdc-decorative-radio 
        ${restArgs.checked ? 'checked' : ''}
        ${restArgs.disabled ? 'disabled' : ''}></mdc-decorative-radio>
      `,
    clearDocument: true,
  });
  const decorativeradio = componentsPage.page.locator('mdc-decorative-radio');
  await decorativeradio.waitFor();
  return decorativeradio;
};

test('mdc-decorative-radio', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const decorativeradioStickerSheet = new StickerSheet(componentsPage, 'mdc-decorative-radio');
    await decorativeradioStickerSheet.createMarkupWithCombination({});
    decorativeradioStickerSheet.setAttributes({ checked: '' });
    await decorativeradioStickerSheet.createMarkupWithCombination({});
    decorativeradioStickerSheet.setAttributes({ disabled: '' });
    await decorativeradioStickerSheet.createMarkupWithCombination({});
    decorativeradioStickerSheet.setAttributes({ checked: '', disabled: '' });
    await decorativeradioStickerSheet.createMarkupWithCombination({});

    await decorativeradioStickerSheet.mountStickerSheet();
    const container = decorativeradioStickerSheet.getWrapperContainer();

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-decorative-radio', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('decorative-radio-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const decorativeradio = await setup({ componentsPage });
    await test.step('attribute checked should be present on component when set', async () => {
      await componentsPage.setAttributes(decorativeradio, { checked: 'true' });
      await expect(decorativeradio).toHaveAttribute('checked', 'true');
      await componentsPage.removeAttribute(decorativeradio, 'checked');
    });
    await test.step('attribute disabled should be present on component when set', async () => {
      await componentsPage.setAttributes(decorativeradio, { disabled: 'true' });
      await expect(decorativeradio).toHaveAttribute('disabled', 'true');
      await componentsPage.removeAttribute(decorativeradio, 'disabled');
    });
  });
});
