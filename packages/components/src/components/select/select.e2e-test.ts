import { expect } from '@playwright/test';

import { KEYS } from '../../utils/keys';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  children: string;
  placeholder?: string;
  height?: string;
  value?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  helpText?: string;
  helpTextType?: string;
  validationMessage?: string;
  name?: string;
};

const label = 'Select an option';
const defaultPlaceholder = 'Select placeholder';
const defaultChildren = (selected?: boolean) => `
  <mdc-selectlistbox>
    <mdc-option value="option1">Option Label 1</mdc-option>
    <mdc-option value="option2" ${selected ? 'selected' : ''}>Option Label 2</mdc-option>
    <mdc-option value="option3">Option Label 3</mdc-option>
  </mdc-selectlistbox>
`;

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      ${isForm ? '<form>' : ''}
      <mdc-select
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
        ${restArgs.height ? `height="${restArgs.height}"` : ''}
        ${restArgs.required ? 'required' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.readonly ? 'readonly' : ''}
        ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
        ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
        ${restArgs.validationMessage ? `validation-message="${restArgs.validationMessage}"` : ''}
        ${restArgs.name ? `name="${restArgs.name}"` : ''}
      >
        ${restArgs.children}
      </mdc-select>
      ${isForm ? '<mdc-button type="submit" size="24">Submit</mdc-button></form>' : ''}
    `,
    clearDocument: true,
  });

  if (isForm) {
    const form = componentsPage.page.locator('form');
    await form.waitFor();
    return form;
  }

  const select = componentsPage.page.locator('mdc-select');
  await select.waitFor();
  return select;
};

test('mdc-select', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const markUpOptions = { createNewRow: true };
    const selectSheet = new StickerSheet(componentsPage, 'mdc-select', 'margin: 0.25rem');
    selectSheet.setAttributes({ label, placeholder: 'Select an headquarters from the list' });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({ label, placeholder: defaultPlaceholder });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      'help-text-type': 'success',
      'help-text': 'This is a success message',
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      'help-text-type': 'warning',
      'help-text': 'This is a warning message',
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      'help-text-type': 'error',
      'help-text': 'This is an error message',
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      disabled: true,
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      readonly: true,
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);

    // select component with an option selected
    selectSheet.setAttributes({
      label: 'You are in a meeting',
      placeholder: 'Select an option',
    });
    selectSheet.setChildren(`
      <mdc-selectlistbox>
        <mdc-option prefix-icon="alert-bold">Mute notifications</mdc-option>
        <mdc-option prefix-icon="apps-bold" selected>Add apps</mdc-option>
        <mdc-option prefix-icon="stored-info-bold">View direct message policy</mdc-option>
        <mdc-option prefix-icon="calendar-day-bold">Meeting capabilities</mdc-option>
        <mdc-option prefix-icon="exit-room-bold">Leave</mdc-option>
      </mdc-selectlistbox>
      `);
    await selectSheet.createMarkupWithCombination({}, markUpOptions);

    await selectSheet.mountStickerSheet();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-select', {
        element: selectSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('select-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('should have default attributes', async () => {
      const select = await setup({ componentsPage, children: defaultChildren() });
      await expect(select).toHaveAttribute('help-text-type', 'default');
      await expect(select).toHaveAttribute('value', 'option1');
      const mdcTextElement = select.locator('mdc-text[part="base-text selected"]');
      const textContent = await mdcTextElement.textContent();
      // The first option should be visible by default when no option is selected and placeholder is not defined.
      expect(textContent?.trim()).toBe('Option Label 1');
      const arrowIcon = select.locator('mdc-icon[name="arrow-down-bold"]');
      await arrowIcon.waitFor();
      expect(arrowIcon).toBeDefined();
    });

    await test.step('should set the height of the select dropdown to be fixed', async () => {
      const select = await setup({ componentsPage, children: defaultChildren(), height: '2rem' });
      await select.locator('div[part=container]').click();
      const dropdown = select.locator('mdc-popover');
      await dropdown.waitFor();
      await expect(dropdown).toHaveCSS('--mdc-popover-max-height', '2rem');
    });

    await test.step('should have placeholder attribute when no option is selected', async () => {
      const select = await setup({ componentsPage, placeholder: defaultPlaceholder, children: defaultChildren() });
      const mdcTextElement = select.locator('mdc-text[part="base-text "]');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe(defaultPlaceholder);
    });

    await test.step('should not have placeholder attribute when an option is selected', async () => {
      const select = await setup({
        componentsPage,
        placeholder: defaultPlaceholder,
        children: defaultChildren(true),
      });
      const mdcTextElement = select.locator('mdc-text[part="base-text selected"]');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe('Option Label 2');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('component should open and close dropdown when clicked', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await select.locator('div[id="select-base-triggerid"]').click();
        await expect(select.locator('mdc-popover')).toBeVisible();

        await select.locator('div[id="select-base-triggerid"]').click();
        await expect(select.locator('mdc-popover')).not.toBeVisible();
      });

      await test.step('component should open dropdown and select 2nd option', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await select.locator('div[id="select-base-triggerid"]').click();
        await expect(select.locator('mdc-popover')).toBeVisible();

        await select.locator('mdc-option').nth(1).click();
        await expect(select.locator('mdc-text[part="base-text selected"]')).toHaveText('Option Label 2');
      });
    });

    await test.step('component should reflect selected value in querySelector and value attribute', async () => {
      const select = await setup({ componentsPage, children: defaultChildren(true) });
      const selectedValue = await componentsPage.page.evaluate(
        () => (document.querySelector('mdc-select') as HTMLSelectElement)?.value || '',
      );

      expect(selectedValue).toBe('option2');
      await expect(select).toHaveAttribute('value', 'option2');
      await expect(select.locator('mdc-option').nth(1)).toHaveAttribute('selected');
    });

    await test.step('select in form should be validated when required and form is submitted', async () => {
      const form = await setup(
        {
          componentsPage,
          children: defaultChildren(),
          label: 'Select a headquarters location',
          placeholder: 'Please select an option',
          required: true,
          name: 'headquarters',
        },
        true,
      );

      // Add event listener to prevent actual form submission
      await form.evaluate((formEl: HTMLFormElement) => {
        formEl.addEventListener('submit', e => e.preventDefault());
      });

      const mdcSelect = form.locator('mdc-select');
      const submitButton = form.locator('mdc-button[type="submit"]');
      const selectEl = mdcSelect.locator('select');

      // Try to submit the form without selecting an option
      await submitButton.click();

      // Check if validation message is shown
      const validationMessage = await selectEl.evaluate(element => {
        const select = element as HTMLSelectElement;
        return select.validationMessage;
      });

      expect(validationMessage).not.toBe('');

      // Now select an option and verify form can be submitted
      await mdcSelect.locator('div[id="select-base-triggerid"]').click();
      await mdcSelect.locator('mdc-option').nth(1).click();

      // Verify the selected value
      await expect(mdcSelect).toHaveAttribute('value', 'option2');

      // Try to submit the form again
      await submitButton.click();

      // Now form should be valid
      const isFormValid = await form.evaluate((formEl: HTMLFormElement) => formEl.checkValidity());

      expect(isFormValid).toBe(true);
    });

    await test.step('select should maintain validation state after form reset', async () => {
      const customMessage = 'Please select your headquarters location';
      const form = await setup(
        {
          componentsPage,
          children: defaultChildren(),
          label: 'Select a headquarters location',
          placeholder: 'Please select an option',
          required: true,
          name: 'headquarters',
          validationMessage: customMessage,
        },
        true,
      );

      // Add reset button to the form
      await componentsPage.page.evaluate(() => {
        const resetButton = document.createElement('mdc-button');
        resetButton.setAttribute('type', 'reset');
        resetButton.setAttribute('size', '24');
        resetButton.setAttribute('variant', 'secondary');
        resetButton.textContent = 'Reset';
        document.querySelector('form')?.appendChild(resetButton);
      });

      const mdcSelect = form.locator('mdc-select');
      const submitButton = form.locator('mdc-button[type="submit"]');
      const resetButton = form.locator('mdc-button[type="reset"]');

      // First select an option
      await mdcSelect.locator('div[id="select-base-triggerid"]').click();
      await mdcSelect.locator('mdc-option').nth(1).click();

      // Verify the selected value
      await expect(mdcSelect).toHaveAttribute('value', 'option2');

      // Reset the form
      await resetButton.click();

      // Verify the selection has been cleared
      const selectTextContent = await mdcSelect.locator('mdc-text[part="base-text "]').textContent();
      expect(selectTextContent?.trim()).toBe('Please select an option');

      // Try to submit the form and check that it requires a selection
      await submitButton.click();

      // Check that the form is still invalid
      const isFormValid = await form.evaluate((formEl: HTMLFormElement) => formEl.checkValidity());
      expect(isFormValid).toBe(false);

      // Check if custom validation message is still displayed after reset
      const selectEl = mdcSelect.locator('select');
      const validationMessage = await selectEl.evaluate(element => {
        const select = element as HTMLSelectElement;
        return select.validationMessage;
      });

      expect(validationMessage).toBe(customMessage);
    });

    await test.step('keyboard', async () => {
      await test.step('component should open dropdown when space/enter is pressed', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-popover')).toBeVisible();

        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-popover')).not.toBeVisible();

        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expect(select.locator('mdc-popover')).toBeVisible();

        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expect(select.locator('mdc-popover')).not.toBeVisible();
      });

      await test.step('component should open dropdown select an option and then close the dropdown', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-popover')).toBeVisible();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-text[part="base-text selected"]')).toHaveText('Option Label 2');
        await expect(select.locator('mdc-popover')).not.toBeVisible();
      });

      await test.step('component should navigate in between options list', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 1' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 2' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 3' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 2' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 1' })).toBeFocused();
      });
    });
  });
});
