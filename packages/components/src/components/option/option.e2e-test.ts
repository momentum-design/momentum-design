import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  'prefix-icon'?: string;
  disabled?: boolean;
  'soft-disabled'?: boolean;
  'aria-label'?: string;
  label?: string;
  secondaryLabel?: string;
  selected?: boolean;
  style?: string;
};

const label = 'Primary Label';
const secondaryLabel = 'Secondary Label';
const icon = 'placeholder-bold';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-option
        ${restArgs['prefix-icon'] ? `prefix-icon="${restArgs['prefix-icon']}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.secondaryLabel ? `secondary-label="${restArgs.secondaryLabel}"` : ''}
        ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
        ${restArgs.selected ? `selected="${restArgs.selected}"` : ''}
        ${restArgs.style ? `style="${restArgs.style}"` : ''}
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
    optionSheet.setAttributes({ label, 'prefix-icon': icon });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'secondary-label': secondaryLabel, 'prefix-icon': icon });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'prefix-icon': icon, selected: '' });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'prefix-icon': icon, selected: '', disabled: '' });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({
      'prefix-icon': icon,
      label: 'A long text which should be truncated',
      style: 'width: 15rem;',
    });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({
      label: 'A long text which should be truncated',
      'secondary-label': secondaryLabel,
      'prefix-icon': icon,
      selected: '',
      style: 'width: 15rem;',
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
      const mdcTextElement = option.locator('mdc-text[part="leading-text-primary-label"]');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe(label);
    });

    await test.step('should have secondary label text when the label and secondary-label attribute are passed', async () => {
      await componentsPage.setAttributes(option, { label, 'secondary-label': secondaryLabel });
      const mdcTextElement = option.locator('mdc-text[part="leading-text-secondary-label"]');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe(secondaryLabel);
    });

    await test.step('should have icon on the left when the prefix-icon attribute is passed', async () => {
      await componentsPage.setAttributes(option, { 'prefix-icon': 'placeholder-bold' });
      await expect(option.locator("mdc-icon[slot='leading-controls']")).toHaveAttribute('name', 'placeholder-bold');
    });

    await test.step('should have icon on the right when the selected attribute is passed', async () => {
      await componentsPage.setAttributes(option, { selected: '' });
      await expect(option.locator("mdc-icon[slot='trailing-controls']")).toHaveAttribute('name', 'check-bold');
    });

    await test.step('should be disabled when the disabled attribute is passed', async () => {
      await componentsPage.setAttributes(option, { disabled: '' });
      await expect(option).toHaveAttribute('disabled');
      await expect(option).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('should have soft-disabled attribute when set', async () => {
      await componentsPage.setAttributes(option, { 'soft-disabled': '' });
      await expect(option).toHaveAttribute('soft-disabled');
      await expect(option).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('should set aria-label attribute when provided', async () => {
      const option = await setup({ componentsPage, 'aria-label': 'Custom Aria Label' });
      await expect(option).toHaveAttribute('aria-label', 'Custom Aria Label');
    });
  });
  await test.step('interactions', async () => {
    await test.step('should dispatch click event when clicked', async () => {
      const option = await setup({ componentsPage, label: 'Clickable Option' });
      const clickPromise = componentsPage.waitForEvent(option, 'click');
      await option.click();
      await clickPromise;
    });

    await test.step('should dispatch keydown and keyup events when keys are pressed', async () => {
      const option = await setup({ componentsPage, label: 'Key Option' });
      const keydownPromise = componentsPage.waitForEvent(option, 'keydown');
      const keyupPromise = componentsPage.waitForEvent(option, 'keyup');
      await option.focus();
      await option.press('Space');
      await keydownPromise;
      await keyupPromise;
    });

    await test.step('should be focusable and have aria-disabled when soft-disabled is set', async () => {
      const option = await setup({ componentsPage, label: 'Soft Disabled Option', 'soft-disabled': true });
      await option.focus();
      await expect(option).toBeFocused();
      await expect(option).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('should display tooltip for truncated/long label text', async () => {
      await componentsPage.mount({
        html: `<div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option id='option-1'
        label="This is a very long text and it should be truncated."
      ></mdc-option>
      <mdc-tooltip triggerID="option-1" show-arrow>
        This is a very long text and it should be truncated.
      </mdc-tooltip>
    </div>`,
        clearDocument: true,
      });
      const option = await componentsPage.page.locator('mdc-option');
      await option.waitFor();
      await componentsPage.actionability.pressTab();
      await expect(option).toBeFocused();
      const tooltip = componentsPage.page.locator('mdc-tooltip');
      await expect(tooltip).toBeVisible();
    });
  });
});
