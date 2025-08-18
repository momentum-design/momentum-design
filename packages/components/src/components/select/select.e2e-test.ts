import { expect } from '@playwright/test';

import { KEYS } from '../../utils/keys';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import type Select from './select.component';

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
    <mdc-option value="option1" label="Option Label 1"></mdc-option>
    <mdc-option value="option2" ${selected ? 'selected' : ''} label="Option Label 2"></mdc-option>
    <mdc-option value="option3" label="Option Label 3"></mdc-option>
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
    const selectSheet = new StickerSheet(componentsPage, 'mdc-select', 'padding: 0.25rem');
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
        <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
        <mdc-option prefix-icon="apps-bold" selected label="Add apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
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

    await test.step('should respect select width, listbox width and height overrides via CSS variables', async () => {
      const customSelectWidth = '300px';
      const customListBoxWidth = '400px';
      const customListBoxHeight = '100px';
      const select = await setup({ componentsPage, children: defaultChildren() });

      // Override CSS variables for the listbox
      await componentsPage.page.evaluate(
        ({ width, listboxWidth, listBoxHeight }) => {
          const selectEl = document.querySelector('mdc-select') as Select;
          if (selectEl) {
            selectEl.style.setProperty('--mdc-select-width', width);
            selectEl.style.setProperty('--mdc-select-listbox-width', listboxWidth);
            selectEl.style.setProperty('--mdc-select-listbox-height', listBoxHeight);
          }
        },
        { width: customSelectWidth, listboxWidth: customListBoxWidth, listBoxHeight: customListBoxHeight },
      );

      // Open the dropdown to show the listbox
      await select.click();
      await select.locator('mdc-selectlistbox').waitFor({ state: 'visible' });

      await componentsPage.page.waitForTimeout(100); // Wait for the trigger up-down arrow icon to be updated

      // take screenshot to verify the overridden dimensions
      await componentsPage.visualRegression.takeScreenshot('mdc-select-custom-styling-overrides');
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

      await test.step('component should open dropdown and select 2nd option and close popover', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await select.locator('div[id="select-base-triggerid"]').click();
        await expect(select.locator('mdc-popover')).toBeVisible();

        await select.locator('mdc-option').nth(1).click();
        await expect(select.locator('mdc-text[part="base-text selected"]')).toHaveText('Option Label 2');
        await expect(select.locator('mdc-popover')).not.toBeVisible();
      });
    });

    await test.step('component should reflect selected value in querySelector and value attribute', async () => {
      const select = await setup({ componentsPage, children: defaultChildren(true) });
      const selectedValue = await componentsPage.page.evaluate(() => {
        const selectElement = document.querySelector('mdc-select');
        // Access the value property safely
        return selectElement ? selectElement.getAttribute('value') || '' : '';
      });

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
      const inputEl = mdcSelect.locator('input');

      // Try to submit the form without selecting an option
      await submitButton.click();

      // Check if validation message is shown
      const validationMessage = await inputEl.evaluate(element => {
        const select = element as HTMLInputElement;
        return select.validationMessage;
      });

      expect(validationMessage).not.toBe('');
      // if validation message is shown, the select should be focused
      await expect(mdcSelect).toBeFocused();

      // click outside to make sure the validation message is not shown anymore before proceeding
      await componentsPage.page.mouse.click(0, 0);

      // Now select an option and verify form can be submitted
      await mdcSelect.locator('div[id="select-base-triggerid"]').click();
      await mdcSelect.locator('mdc-option').nth(1).click();

      // Verify the selected value and popover is closed
      await expect(mdcSelect.locator('mdc-popover')).not.toBeVisible();
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
      const inputEl = mdcSelect.locator('input');
      const validationMessage = await inputEl.evaluate(element => {
        const input = element as HTMLInputElement;
        return input.validationMessage;
      });

      expect(validationMessage).toBe(customMessage);
    });

    await test.step('selected value should be updated when changing the selected option programmatically', async () => {
      const select = await setup({
        componentsPage,
        label: 'Select an option',
        placeholder: 'Select an option',
        children: `
          <mdc-selectlistbox>
            <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
            <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
            <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
            <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
          </mdc-selectlistbox>
        `,
      });

      await test.step('should update selected option when selected attribute is changed from option1 to option2', async () => {
        await componentsPage.page.evaluate(() => {
          const select = document.querySelector('mdc-select[label="Select an option"]');
          const selectListbox = document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');
          if (selectListbox) {
            const options = selectListbox.querySelectorAll('mdc-option');
            options.forEach((option, idx) => {
              if (idx === 0) {
                option.removeAttribute('selected');
              }
              if (idx === 1) {
                option.setAttribute('selected', '');
              }
            });
            // @ts-ignore
            select.updateState();
          }
        });

        await expect(select).toHaveAttribute('value', 'option2');
        await expect(select.locator('mdc-option').nth(1)).toHaveAttribute('selected');
      });

      await test.step('should fallback to placeholder when selected attribute get removed', async () => {
        await componentsPage.page.evaluate(() => {
          const select = document.querySelector('mdc-select[label="Select an option"]');
          const selectListbox = document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');
          if (selectListbox) {
            const options = selectListbox.querySelectorAll('mdc-option');
            options.forEach(option => {
              option.removeAttribute('selected');
            });
            // @ts-ignore
            select.updateState();
          }
        });

        await expect(select).toHaveAttribute('value', '');
        const selectedOptions = await select.locator('mdc-option[selected]').count();
        expect(selectedOptions).toBe(0);

        const mdcTextElement = select.locator('mdc-text[part="base-text "]');
        const textContent = await mdcTextElement.textContent();
        expect(textContent?.trim()).toBe('Select an option');
      });
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
