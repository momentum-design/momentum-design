import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  disabled?: boolean;
  'data-aria-label'?: string;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-optgroup
        ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : ''}
        ${restArgs.disabled ? `disabled="${restArgs.disabled}"` : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
      >
        <mdc-option>Option label</mdc-option>
      </mdc-optgroup>
    `,
    clearDocument: true,
  });
  const option = componentsPage.page.locator('mdc-optgroup');
  await option.waitFor();
  return option;
};

test('mdc-optgroup', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const markUpOptions = { createNewRow: true };
    const optionGroupChildren = `
      <mdc-option>Boston</mdc-option>
      <mdc-option selected>Mexico</mdc-option>
      <mdc-option>Toronto</mdc-option>
      <mdc-option disabled="true">Canada</mdc-option>
    `;
    const optionSheet = new StickerSheet(componentsPage, 'mdc-optgroup', 'margin: 0.25rem');
    optionSheet.setAttributes({ label: 'List options' });
    optionSheet.setChildren(optionGroupChildren);
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ disabled: 'true' });
    optionSheet.setChildren(optionGroupChildren);
    await optionSheet.createMarkupWithCombination({}, markUpOptions);

    await optionSheet.mountStickerSheet({ role: 'listbox' });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-optgroup', {
        element: optionSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('option-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const optgroup = await setup({ componentsPage });

    await test.step('should have header text label when the label attribute is passed', async () => {
      await componentsPage.setAttributes(optgroup, { label: 'Primary Label' });
      const textContent = await componentsPage.page.locator('mdc-text[part="header-text"]').textContent();
      expect(textContent?.trim()).toBe('Primary Label');
    });

    await test.step('should be disabled when the disabled attribute is passed', async () => {
      await componentsPage.setAttributes(optgroup, { disabled: 'true' });
      await expect(optgroup).toHaveAttribute('disabled');
    });
  });
});
