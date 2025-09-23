import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

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
  secondRadioBtn?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <form id="radio-form">
        <mdc-radio
          ${restArgs.name ? `name="${restArgs.name}"` : ''}
          ${restArgs.value ? `value="${restArgs.value}"` : ''}
          ${restArgs.label ? `label="${restArgs.label}"` : ''}
          ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.checked ? 'checked' : ''}
          ${restArgs.readonly ? 'readonly' : ''}
          ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : ''}
        >
        </mdc-radio>
        ${
          restArgs.secondRadioBtn
            ? `
          <mdc-radio ${restArgs.name ? `name="${restArgs.name}"` : ''}
          label="Second Radio Button"
          value="Default plan"
          ></mdc-radio>
          `
            : ''
        }
      </form>
      `,
    clearDocument: true,
  });

  const element = restArgs.secondRadioBtn
    ? componentsPage.page.locator('form#radio-form')
    : componentsPage.page.locator('mdc-radio');
  await element.waitFor();

  const radio = componentsPage.page.locator('mdc-radio').first();
  await radio.waitFor();
  return radio;
};

test('mdc-radio', async ({ componentsPage }) => {
  await test.step('attributes and interactions', async () => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const radioStickerSheet = new StickerSheet(componentsPage, 'mdc-radio');

      // Radio btn without label
      radioStickerSheet.setAttributes({
        'data-aria-label': 'Standard Plan',
      });

      // Radio btn with label
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Standard Plan',
      });

      // Checked radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Selected Radio Label',
        checked: true,
      });

      // Checked radio btn with help text
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Selected Radio Label',
        'help-text': 'This is a help text',
        checked: true,
      });

      // Readonly radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Read Only Radio Label',
        'help-text': 'This is a help text',
        readonly: true,
      });

      // Readonly but checked radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Read Only Radio Label',
        'help-text': 'This is a help text',
        readonly: true,
        checked: true,
      });

      // Disabled radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Disabled Radio Label',
        'help-text': 'This is a help text',
        disabled: true,
        'toggletip-text': 'This is a toggletip that provides additional context',
        'info-icon-aria-label': 'Additional information',
      });

      // Disabled but checked radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Disabled Selected Radio Label',
        'help-text': 'This is a help text',
        disabled: true,
        checked: true,
        'toggletip-text': 'This is a toggletip that provides additional context',
        'info-icon-aria-label': 'Additional information',
      });
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      
      // Short width test for word wrapping
      radioStickerSheet.setAttributes({
        label: 'This is a very long label that should wrap to multiple lines when constrained to a short width',
        'help-text': 'This is also a very long help text that should wrap properly',
        style: 'margin: 0.25rem; width: 7.5rem; outline: 2px solid red;',
        'toggletip-text': 'This is additional toggletip text that provides more context',
        'info-icon-aria-label': 'Additional information',
      });
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      
      await radioStickerSheet.mountStickerSheet();

      await test.step('matches screenshot of radio stickersheet', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-radio', {
          element: radioStickerSheet.getWrapperContainer(),
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('radio-default');
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      await test.step('radio focus using tab', async () => {
        const radio = await setup({ componentsPage, label: 'Standard Plan for student' });

        await componentsPage.actionability.pressTab();
        await expect(radio).toBeFocused();
      });
      await test.step('select radio by pressing space', async () => {
        await setup({ componentsPage, label: 'Standard Plan for student' });
        const radio = componentsPage.page.locator('mdc-radio').locator('input[type="radio"]');

        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('Space');
        await expect(radio).toBeChecked();
      });

      await test.step('radio clicked', async () => {
        await setup({ componentsPage, label: 'Standard Plan for student' });
        const radio = componentsPage.page.locator('mdc-radio').locator('input[type="radio"]');

        await radio.click();
        await expect(radio).toBeChecked();
      });

      await test.step('radio focus and click on disabled radio', async () => {
        await setup({ componentsPage, label: 'Standard Plan for student', disabled: true });
        const radio = componentsPage.page.locator('mdc-radio').locator('input[type="radio"]');

        await componentsPage.actionability.pressTab();
        await expect(radio).not.toBeFocused();
        await expect(radio).toHaveAttribute('disabled');
      });

      await test.step('radio focus but should not be checked if have readonly', async () => {
        await setup({
          componentsPage,
          label: 'Standard Plan for student',
          name: 'student-plan',
          value: 'standard',
          readonly: true,
        });
        const radio = componentsPage.page.locator('mdc-radio').locator('input[name="student-plan"]');
        await componentsPage.actionability.pressTab();
        await expect(radio).toBeFocused();
        await expect(radio).not.toBeChecked();

        await radio.click();
        await expect(radio).not.toHaveAttribute('checked');
      });

      await test.step('navigate and select between radio buttons using arrow keys.', async () => {
        await setup({
          componentsPage,
          label: 'Standard Plan for student',
          name: 'student-plan',
          value: 'standard',
          secondRadioBtn: true,
        });

        const radios = componentsPage.page.locator('mdc-radio').locator('input[name="student-plan"]');
        const changeEvents: Array<{ value: string; method: string }> = [];

        // Expose function to capture change events
        await componentsPage.page.exposeFunction('captureChangeEvent', (value: string) => {
          changeEvents.push({ value, method: 'change' });
        });

        // Set up change event listeners
        await componentsPage.page.evaluate(() => {
          const radioInputs = document.querySelectorAll('mdc-radio[name="student-plan"]');

          radioInputs.forEach(radio => {
            radio.addEventListener('change', event => {
              const target = event.target as HTMLInputElement;
              (window as any).captureChangeEvent(target.value);
            });
          });
        });

        await componentsPage.actionability.pressTab();
        await expect(radios.nth(0)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(radios.nth(1)).toBeFocused();
        await expect(radios.nth(1)).toBeChecked();

        // Check that change event was fired for keyboard navigation
        expect(changeEvents).toHaveLength(1);
        expect(changeEvents[0].value).toBe('Default plan');

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(radios.nth(0)).toBeFocused();
        await expect(radios.nth(0)).toBeChecked();

        // Check that second change event was fired
        expect(changeEvents).toHaveLength(2);
        expect(changeEvents[1].value).toBe('standard');
      });

      await test.step('radio btn inside form', async () => {
        await setup({
          componentsPage,
          label: 'Standard Plan for student',
          name: 'student-plan',
          value: 'standard',
          secondRadioBtn: true,
        });
        const radios = componentsPage.page.locator('mdc-radio').locator('input[name="student-plan"]');
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(radios.nth(1)).toBeChecked();

        const submittedValue = await componentsPage.page.evaluate(() => {
          const form = document.getElementById('radio-form') as HTMLFormElement;
          const formData = new FormData(form);
          return formData.get('student-plan');
        });
        expect(submittedValue).toBe('Default plan');
      });
    });

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      const radio = await setup({ componentsPage });
      // For label
      await test.step('should have label element when the label attribute is passed', async () => {
        await componentsPage.setAttributes(radio, { label: 'Radio label' });
        const label = componentsPage.page.locator('label');
        await expect(label).toHaveText('Radio label');
      });

      // For help text
      await test.step('should have mdc-text element when the help-text attribute is passed', async () => {
        await componentsPage.setAttributes(radio, { 'help-text': 'Help text for additional info' });
        const mdcText = componentsPage.page.locator('mdc-text');
        const textContent = await mdcText.textContent();
        expect(textContent?.trim()).toBe('Help text for additional info');
      });

      // Disabled
      await test.step('attribute disabled should be present on radio', async () => {
        await componentsPage.setAttributes(radio, {
          disabled: '',
        });
        await expect(radio).toHaveAttribute('disabled');
        await componentsPage.removeAttribute(radio, 'disabled');
      });

      // checked
      await test.step('attribute disabled should be present on radio', async () => {
        await componentsPage.setAttributes(radio, {
          checked: '',
        });
        await expect(radio).toHaveAttribute('checked');
        await componentsPage.removeAttribute(radio, 'checked');
      });

      // readonly
      await test.step('attribute disabled should be present on radio', async () => {
        await componentsPage.setAttributes(radio, {
          readonly: '',
        });
        await expect(radio).toHaveAttribute('readonly');
        await componentsPage.removeAttribute(radio, 'readonly');
      });
    });
  });
});
