import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name?: string;
  value?: string;
  label?: string;
  'help-text'?: string;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  'data-aria-label'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-checkbox
        ${restArgs.name ? `name="${restArgs.name}"` : ''}
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
        ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.checked ? 'checked' : ''}
        ${restArgs.indeterminate ? 'indeterminate' : ''}
      >
      </mdc-checkbox>
    `,
    clearDocument: true,
  });
  const checkbox = componentsPage.page.locator('mdc-checkbox');
  await checkbox.waitFor();
  return checkbox;
};

test('mdc-checkbox', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const checkboxStickerSheet = new StickerSheet(componentsPage, 'mdc-checkbox', 'margin: 0.25rem');
    checkboxStickerSheet.setAttributes({
      'data-aria-label': 'This is aria label text',
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    checkboxStickerSheet.setAttributes({
      label: 'I agree to the terms',
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    checkboxStickerSheet.setAttributes({
      label: 'Selected Checkbox Label',
      checked: true,
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    checkboxStickerSheet.setAttributes({
      label: 'Indeterminate Checkbox Label',
      indeterminate: true,
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    checkboxStickerSheet.setAttributes({
      label: 'Selected Checkbox Label',
      'help-text': 'This is a help text',
      checked: true,
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    checkboxStickerSheet.setAttributes({
      label: 'Indeterminate Checkbox Label',
      'help-text': 'This is a help text',
      indeterminate: true,
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    checkboxStickerSheet.setAttributes({
      label: 'Disabled Checkbox Label',
      'help-text': 'This is a help text',
      disabled: true,
      'toggletip-text': 'This is a toggletip that provides additional context',
      'info-icon-aria-label': 'Additional information',
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    checkboxStickerSheet.setAttributes({
      label: 'Disabled Selected Checkbox Label',
      'help-text': 'This is a help text',
      disabled: true,
      checked: true,
      'toggletip-text': 'This is a toggletip that provides additional context',
      'info-icon-aria-label': 'Additional information',
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    checkboxStickerSheet.setAttributes({
      label: 'Disabled Indeterminate Checkbox Label',
      'help-text': 'This is a help text',
      disabled: true,
      indeterminate: true,
      'toggletip-text': 'This is a toggletip that provides additional context',
      'info-icon-aria-label': 'Additional information',
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    
    // Short width test for word wrapping
    checkboxStickerSheet.setAttributes({
      label: 'This is a very long label that should wrap to multiple lines when constrained to a short width',
      'help-text': 'This is also a very long help text that should wrap properly',
      style: 'margin: 0.25rem; width: 7.5rem; gap: 0.5rem;',
      'toggletip-text': 'This is additional toggletip text that provides more context',
      'info-icon-aria-label': 'Additional information',
    });
    await checkboxStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    
    await checkboxStickerSheet.mountStickerSheet();

    await test.step('matches screenshot of checkbox sizes stickersheet', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-checkbox', {
        element: checkboxStickerSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('checkbox-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const checkbox = await setup({ componentsPage });

    await test.step('should have name and value attributes as default no attributes are passed', async () => {
      await expect(checkbox).toHaveAttribute('name');
      await expect(checkbox).toHaveAttribute('value');
    });

    await test.step('should have label element when the label attribute is passed', async () => {
      await componentsPage.setAttributes(checkbox, { label: 'Checkbox label' });
      const label = componentsPage.page.locator('label');
      await expect(label).toHaveText('Checkbox label');
    });

    await test.step('should have mdc-text element when the help-text attribute is passed', async () => {
      await componentsPage.setAttributes(checkbox, { 'help-text': 'This is a help text' });
      const mdcText = componentsPage.page.locator('mdc-text');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe('This is a help text');
    });

    await test.step(`should have icon element with minus-bold icon name,
      when the indeterminate attribute is passed`, async () => {
      await componentsPage.removeAttribute(checkbox, 'checked');
      await componentsPage.setAttributes(checkbox, { indeterminate: '' });
      const icon = componentsPage.page.locator('mdc-icon');
      await icon.waitFor();
      await expect(icon).toHaveAttribute('name', 'minus-bold');
    });

    await test.step(`should have icon element with check-bold icon name,
      when the checked attribute is passed`, async () => {
      await componentsPage.removeAttribute(checkbox, 'indeterminate');
      await componentsPage.setAttributes(checkbox, { checked: '' });
      const icon = componentsPage.page.locator('mdc-icon');
      await icon.waitFor();
      await expect(icon).toHaveAttribute('name', 'check-bold');
    });

    await test.step('should have disabled attribute when the disabled attribute is passed', async () => {
      await componentsPage.setAttributes(checkbox, { disabled: '' });
      await expect(checkbox.locator('input[type="checkbox"]')).toBeDisabled();
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('checkbox should be focused when tab key is pressed with keyboard', async () => {
      const checkbox = await setup({ componentsPage, label: 'Checkbox label' });
      // By default, it should not be focusable.
      await expect(checkbox).not.toBeFocused();

      await componentsPage.actionability.pressTab();
      await expect(checkbox).toBeFocused();
    });

    await test.step('checkbox should be checked when space key is pressed with keyboard', async () => {
      const checkbox = await setup({ componentsPage, label: 'Checkbox label' });

      await componentsPage.actionability.pressTab();
      await expect(checkbox).toBeFocused();

      await componentsPage.page.keyboard.press('Space');
      await expect(checkbox.locator('input[type="checkbox"]')).toBeChecked();

      await componentsPage.page.keyboard.press('Space');
      await expect(checkbox.locator('input[type="checkbox"]')).not.toBeChecked();
    });

    await test.step('checkbox should be checked when clicked', async () => {
      const checkbox = await setup({ componentsPage });

      await checkbox.click();
      await expect(checkbox.locator('input[type="checkbox"]')).toBeChecked();

      await checkbox.click();
      await expect(checkbox.locator('input[type="checkbox"]')).not.toBeChecked();
    });

    await test.step('checkbox should not be Focused or checked when its disabled', async () => {
      const checkbox = await setup({ componentsPage, label: 'Checkbox label', disabled: true });

      await componentsPage.actionability.pressTab();
      await expect(checkbox).not.toBeFocused();

      await checkbox.click();
      await expect(checkbox.locator('input[type="checkbox"]')).not.toBeChecked();
    });

    await test.step('should update help-text and help-text-type dynamically based on checkbox validity (FormFieldCheckboxWithHelpTextValidation)', async () => {
      await componentsPage.mount({
        html: `
          <form id="test-form" novalidate>
            <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
              <legend>Select your super hero power (with validation)</legend>
              <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
              <mdc-checkbox label="Mind Control" value="mind-control" name="super-power" required></mdc-checkbox>
              <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
              <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
              <div style="display: flex; gap: 0.25rem;">
                <mdc-button type="submit" size="24">Submit</mdc-button>
                <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
              </div>
            </fieldset>
          </form>
        `,
        clearDocument: true,
      });
      const form = componentsPage.page.locator('#test-form');
      await form.waitFor();
      const requiredCheckbox = form.locator('mdc-checkbox[name="super-power"][required]');
      const requiredInput = requiredCheckbox.locator('input[type="checkbox"]');
      await requiredInput.waitFor();
      const submitButton = form.locator('mdc-button[type="submit"]');
      const resetButton = form.locator('mdc-button[type="reset"]');
      const helpText = requiredCheckbox.locator('mdc-text');

      // Add dynamic help-text handler to the form
      await form.evaluate(formEl => {
        formEl.addEventListener('submit', event => {
          event.preventDefault();
          const requiredBox = formEl.querySelector('mdc-checkbox[name="super-power"][required]');
          const helpTextEl = requiredBox?.querySelector('mdc-text');
          const input = requiredBox?.shadowRoot?.querySelector('input[type="checkbox"]');
          if (requiredBox && input) {
            if (!(input as HTMLInputElement).checked) {
              requiredBox.setAttribute('help-text', 'Please select this required option');
              requiredBox.setAttribute('help-text-type', 'error');
              if (helpTextEl) helpTextEl.textContent = 'Please select this required option';
            } else {
              requiredBox.setAttribute('help-text', 'Looks good!');
              requiredBox.setAttribute('help-text-type', 'success');
              if (helpTextEl) helpTextEl.textContent = 'Looks good!';
            }
          }
        });
        formEl.addEventListener('reset', () => {
          const requiredBox = formEl.querySelector('mdc-checkbox[name="super-power"][required]');
          const helpTextEl = requiredBox?.querySelector('mdc-text');
          if (requiredBox) {
            requiredBox.setAttribute('help-text', '');
            requiredBox.setAttribute('help-text-type', 'default');
            if (helpTextEl) helpTextEl.textContent = '';
          }
        });
      });

      // Helper to check help-text and help-text-type
      async function expectHelpText(text: string, type: string) {
        if (text === '') {
          await expect(helpText).toHaveCount(0); // no help-text rendered
        } else {
          await expect(helpText).toHaveText(text);
        }
        await expect(requiredCheckbox).toHaveAttribute('help-text-type', type);
      }

      // 1. Submit with required unchecked
      await expect(requiredInput).not.toHaveAttribute('checked');
      await submitButton.click();
      await expectHelpText('Please select this required option', 'error');

      // 2. Check required and submit
      await requiredInput.click();
      await expect(requiredInput).toBeChecked();
      await submitButton.click();
      await expectHelpText('Looks good!', 'success');

      // 3. Reset form and check help-text resets
      await resetButton.click();
      await expectHelpText('', 'default');
    });
  });
});
