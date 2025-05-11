import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  'prefix-icon'?: string;
  disabled?: boolean;
  label?: string;
  selected?: boolean;
}

const label = 'Primary Label';
const icon = 'placeholder-bold';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-option
        ${restArgs['prefix-icon'] ? `prefix-icon="${restArgs['prefix-icon']}"` : ''}
        ${restArgs.disabled ? `disabled="${restArgs.disabled}"` : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.selected ? `selected="${restArgs.selected}"` : ''}
      ></mdc-option>
    `,
    clearDocument: true,
  });
  const option = componentsPage.page.locator('mdc-option');
  await option.waitFor();
  return option;
};

test('mdc-option', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const markUpOptions = { createNewRow: true };
    const optionSheet = new StickerSheet(componentsPage, 'mdc-option', 'margin: 0.25rem');
    optionSheet.setAttributes({ label });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setChildren('Option with children');
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'prefix-icon': icon });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'prefix-icon': icon, selected: '' });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'prefix-icon': icon, selected: '', disabled: '' });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({
      'prefix-icon': icon,
      label: 'A long text which should be truncated',
      style: 'width: 15rem',
    });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);

    await optionSheet.mountStickerSheet({ role: 'listbox' });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-option', {
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
    const option = await setup({ componentsPage });

    await test.step('attribute role, tabindex and variant should be present on component by default', async () => {
      await expect(option).toHaveAttribute('role', 'option');
      await expect(option).toHaveAttribute('aria-selected', 'false');
      await expect(option).toHaveAttribute('aria-disabled', 'false');
    });

    await test.step('should have label text when the attribute is passed', async () => {
      await componentsPage.setAttributes(option, { label });
      const mdcTextElement = option.locator('mdc-text');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe(label);
    });

    await test.step('should have icon on the left when the prefix-icon attribute is passed', async () => {
      await componentsPage.setAttributes(option, { 'prefix-icon': 'placeholder-bold' });
      await expect(option.locator('mdc-icon[slot=\'leading-controls\']')).toHaveAttribute('name', 'placeholder-bold');
    });

    await test.step('should have icon on the right when the selected attribute is passed', async () => {
      await componentsPage.setAttributes(option, { selected: '' });
      await expect(option.locator('mdc-icon[slot=\'trailing-controls\']')).toHaveAttribute('name', 'check-bold');
    });

    await test.step('should be disabled when the disabled attribute is passed', async () => {
      await componentsPage.setAttributes(option, { disabled: '' });
      await expect(option).toHaveAttribute('disabled');
    });
  });
});
