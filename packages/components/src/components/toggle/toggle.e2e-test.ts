import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { KEYS } from '../../utils/keys';

import { DEFAULTS, TOGGLE_SIZE } from './toggle.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name?: string;
  value?: string;
  label?: string;
  'help-text'?: string;
  readonly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  'data-aria-label'?: string;
  size?: string;
  'soft-disabled'?: boolean;
  'control-type'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-toggle
        ${restArgs.name ? `name="${restArgs.name}"` : ''}
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
        ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : ''}
        ${restArgs['control-type'] ? `control-type="${restArgs['control-type']}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.checked ? 'checked' : ''}
        ${restArgs.readonly ? 'readonly' : ''}
        ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
      >
      </mdc-toggle>
    `,
    clearDocument: true,
  });
  const toggle = componentsPage.page.locator('mdc-toggle');
  await toggle.waitFor();
  return toggle;
};

const attributeTestCases = async (componentsPage: ComponentsPage) => {
  const toggle = await setup({ componentsPage });
  await test.step('default attributes for toggle', async () => {
    await expect(toggle).toHaveAttribute('size', DEFAULTS.SIZE);
    await expect(toggle).toHaveAttribute('name');
    await expect(toggle).toHaveAttribute('value');
    // test mdc-icon which is present inside mdc-toggle
    const icon = componentsPage.page.locator('mdc-icon');
    await icon.waitFor();
    await expect(icon).toHaveAttribute('name', 'cancel-bold');
  });

  await test.step('should have label element when the label attribute is passed', async () => {
    await componentsPage.setAttributes(toggle, { label: 'Toggle label' });
    const label = componentsPage.page.locator('label');
    await expect(label).toHaveText('Toggle label');
  });

  await test.step('should have icon element with check-bold icon name when checked attribute is true', async () => {
    await componentsPage.setAttributes(toggle, { checked: 'true' });
    const icon = componentsPage.page.locator('mdc-icon');
    await icon.waitFor();
    await expect(icon).toHaveAttribute('name', 'check-bold');
  });

  await test.step('should have mdc-text element when the help-text attribute is passed', async () => {
    await componentsPage.setAttributes(toggle, { 'help-text': 'This is a help text' });
    const mdcText = componentsPage.page.locator('mdc-text');
    const textContent = await mdcText.textContent();
    expect(textContent?.trim()).toBe('This is a help text');
  });

  await test.step('should have disabled attribute when the disabled attribute is true', async () => {
    await componentsPage.setAttributes(toggle, { disabled: 'true' });
    await expect(toggle).toHaveAttribute('disabled', 'true');
  });

  await test.step('should have readonly attribute when the readonly attribute is passed', async () => {
    await componentsPage.setAttributes(toggle, { readonly: '' });
    await expect(toggle).toHaveAttribute('readonly', '');
    await componentsPage.removeAttribute(toggle, 'readonly');
  });

  await test.step('should have soft-disabled attribute when the soft-disabled attribute is passed', async () => {
    await componentsPage.setAttributes(toggle, { 'soft-disabled': '' });
    await expect(toggle).toHaveAttribute('soft-disabled', '');
    await componentsPage.removeAttribute(toggle, 'soft-disabled');
  });
};

test.use({ viewport: { width: 800, height: 1600 } });
const testToRun = async (componentsPage: ComponentsPage) => {
  /**
   * ATTRIBUTES
   */
  await test.step('Attributes for ToggleComponent', async () => {
    await test.step('attributes', async () => {
      await attributeTestCases(componentsPage);
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('input should be checked/unchecked when the toggle is toggled', async () => {
      const toggle = await setup({ componentsPage });
      const input = toggle.locator('input[type="checkbox"]');

      await input.click();
      await expect(input).toBeChecked();
      // untoggle
      await input.click();
      await expect(input).not.toBeChecked();
    });

    await test.step('toggle should be focused when tab key is pressed with keyboard', async () => {
      const toggle = await setup({ componentsPage, label: 'Toggle label' });
      // By default, it should not be focusable.
      await expect(toggle).not.toBeFocused();

      await componentsPage.actionability.pressTab();
      await expect(toggle).toBeFocused();
    });

    await test.step('toggle should be toggled when space key is pressed with keyboard', async () => {
      const toggle = await setup({ componentsPage, label: 'Toggle label' });

      await componentsPage.actionability.pressTab();
      await expect(toggle).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(toggle).toHaveAttribute('checked');

      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(toggle).not.toHaveAttribute('checked');
    });

    await test.step('toggle should be toggled when clicked/pressed on hover', async () => {
      const toggle = await setup({ componentsPage });

      await toggle.hover();
      await toggle.click();
      await expect(toggle).toHaveAttribute('checked');

      await toggle.click();
      await expect(toggle).not.toHaveAttribute('checked');
    });

    await test.step('toggle should be focused but not change state when readonly', async () => {
      const toggle = await setup({ componentsPage, label: 'Toggle label', readonly: true });

      await componentsPage.actionability.pressTab();
      await expect(toggle).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(toggle).not.toHaveAttribute('checked');

      await toggle.click({ force: true });
      await expect(toggle).not.toHaveAttribute('checked');
    });

    await test.step('toggle should be focused but not change state when soft-disabled', async () => {
      const toggle = await setup({ componentsPage, label: 'Toggle label', 'soft-disabled': true });

      await componentsPage.actionability.pressTab();
      await expect(toggle).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(toggle).not.toHaveAttribute('checked');

      await toggle.click({ force: true });
      await expect(toggle).not.toHaveAttribute('checked');
    });

    await test.step('toggle should not be Focused or toggled when it is disabled', async () => {
      const toggle = await setup({ componentsPage, label: 'Toggle label', disabled: true });

      await componentsPage.actionability.pressTab();
      await expect(toggle).not.toBeFocused();

      await toggle.click({ force: true });
      await expect(toggle).not.toHaveAttribute('checked');
    });

    await test.step('should update help-text and help-text-type dynamically based on toggle validity (ToggleInsideFormWithHelpTextValidation)', async () => {
      await componentsPage.mount({
        html: `
          <form id="test-form" novalidate>
            <fieldset>
              <legend>Form Example With Dynamic Help Text</legend>
              <mdc-toggle
                id="test-mdc-toggle"
                label="Accept Terms"
                help-text="Please accept the terms"
                help-text-type="default"
                required
                data-aria-label="Accept terms"
              ></mdc-toggle>
              <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
                <mdc-button type="submit" size="24">Submit</mdc-button>
                <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
              </div>
            </fieldset>
          </form>
        `,
        clearDocument: true,
      });
      const form = componentsPage.page.locator('#test-form');
      const mdcToggle = componentsPage.page.locator('mdc-toggle');
      const submitButton = form.locator('mdc-button[type="submit"]');
      const resetButton = form.locator('mdc-button[type="reset"]');
      const helpText = mdcToggle.locator('mdc-text');

      // Add dynamic help-text handler to the form
      await form.evaluate(formEl => {
        formEl.addEventListener('submit', event => {
          event.preventDefault();
          const toggle = formEl.querySelector('mdc-toggle');
          if (toggle) {
            const helpTextEl = toggle.querySelector('mdc-text');
            if (!toggle.hasAttribute('checked')) {
              toggle.setAttribute('help-text', 'You must accept the terms');
              toggle.setAttribute('help-text-type', 'error');
              if (helpTextEl) helpTextEl.textContent = 'You must accept the terms';
            } else {
              toggle.setAttribute('help-text', 'Thank you for accepting!');
              toggle.setAttribute('help-text-type', 'success');
              if (helpTextEl) helpTextEl.textContent = 'Thank you for accepting!';
            }
          }
        });
        formEl.addEventListener('reset', () => {
          const toggle = formEl.querySelector('mdc-toggle');
          if (toggle) {
            const helpTextEl = toggle.querySelector('mdc-text');
            toggle.setAttribute('help-text', 'Please accept the terms');
            toggle.setAttribute('help-text-type', 'default');
            if (helpTextEl) helpTextEl.textContent = 'Please accept the terms';
          }
        });
      });

      // Helper to check help-text and help-text-type
      async function expectHelpText(text: string, type: string) {
        await expect(helpText).toHaveText(text);
        await expect(mdcToggle).toHaveAttribute('help-text-type', type);
      }

      // 1. Submit with toggle unchecked
      await submitButton.click();
      await expectHelpText('You must accept the terms', 'error');

      // 2. Toggle on and submit
      const input = mdcToggle.locator('input[type="checkbox"]');
      await input.click();
      await expect(mdcToggle).toHaveAttribute('checked');
      await submitButton.click();
      await expectHelpText('Thank you for accepting!', 'success');

      // 3. Reset form and check help-text resets
      await resetButton.click();
      await expectHelpText('Please accept the terms', 'default');
    });

    await test.step('controlled toggle should not change state when clicked', async () => {
      const toggle = await setup({ componentsPage, 'control-type': 'controlled', label: 'Controlled Toggle' });

      await expect(toggle).not.toHaveAttribute('checked');

      await toggle.click();
      await expect(toggle).not.toHaveAttribute('checked');

      // Manually set checked attribute (simulating parent component)
      await toggle.evaluate(el => el.setAttribute('checked', ''));
      await expect(toggle).toHaveAttribute('checked');

      await toggle.click();
      await expect(toggle).toHaveAttribute('checked');

      await toggle.evaluate(el => el.removeAttribute('checked'));
      await expect(toggle).not.toHaveAttribute('checked');
    });

    await test.step('controlled toggle should not change state when space key is pressed', async () => {
      const toggle = await setup({ componentsPage, 'control-type': 'controlled', label: 'Controlled Toggle' });

      await componentsPage.actionability.pressTab();
      await expect(toggle).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(toggle).not.toHaveAttribute('checked');
    });
  });

  /**
   * VISUAL REGRESSION
   */
  const toggleStickerSheet = new StickerSheet(componentsPage, 'mdc-toggle');
  await test.step('visual-regression', async () => {
    toggleStickerSheet.setAttributes({
      'data-aria-label': 'This is aria label text',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });
    toggleStickerSheet.setAttributes({
      label: 'I agree to the terms',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });
    toggleStickerSheet.setAttributes({
      label: 'Selected toggle Label',
      checked: true,
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });
    toggleStickerSheet.setAttributes({
      label: 'Selected toggle Label',
      'help-text': 'This is a help text',
      checked: true,
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });
    toggleStickerSheet.setAttributes({
      label: 'Disabled toggle Label',
      'help-text': 'This is a help text',
      disabled: true,
      'toggletip-text': 'This is a toggletip that provides additional context',
      'info-icon-aria-label': 'Additional information',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });
    toggleStickerSheet.setAttributes({
      label: 'Disabled Selected toggle Label',
      'help-text': 'This is a help text',
      disabled: true,
      checked: true,
      'toggletip-text': 'This is a toggletip that provides additional context',
      'info-icon-aria-label': 'Additional information',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });

    toggleStickerSheet.setAttributes({
      label: 'Read Only Toggle Label',
      'help-text': 'This is a help text',
      readonly: true,
      'toggletip-text': 'This is a toggletip that provides additional context',
      'info-icon-aria-label': 'Additional information',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });
    toggleStickerSheet.setAttributes({
      label: 'Read Only Checked Toggle Label',
      'help-text': 'This is a help text',
      readonly: true,
      checked: true,
      'toggletip-text': 'This is a toggletip that provides additional context',
      'info-icon-aria-label': 'Additional information',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });

    toggleStickerSheet.setAttributes({
      label: 'Soft Disabled Toggle Label',
      'help-text': 'This is a help text',
      'soft-disabled': true,
      'toggletip-text': 'This is a toggletip that provides additional context',
      'info-icon-aria-label': 'Additional information',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });
    toggleStickerSheet.setAttributes({
      label: 'Soft Disabled Selected Toggle Label',
      'help-text': 'This is a help text',
      'soft-disabled': true,
      checked: true,
      'toggletip-text': 'This is a toggletip that provides additional context',
      'info-icon-aria-label': 'Additional information',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });

    // Short width test for word wrapping
    toggleStickerSheet.setAttributes({
      label: 'This is a very long label that should wrap to multiple lines when constrained to a short width',
      'help-text': 'This is also a very long help text that should wrap properly',
      style: 'width: 7.5rem;',
      'toggletip-text': 'This is additional toggletip text that provides more context',
      'info-icon-aria-label': 'Additional information',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE }, { rowWrapperStyle: 'gap: 1.25rem' });

    await toggleStickerSheet.mountStickerSheet();
    const container = toggleStickerSheet.getWrapperContainer();

    await test.step('matches screenshot of toggle element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-toggle', {
        element: container,
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-toggle');
    });
  });
};

test('standalone', async ({ componentsPage }) => {
  await testToRun(componentsPage);
});
