import { expect, Locator } from '@playwright/test';

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
const mockFruits = ['Apple', 'Banana', 'Blackberry', 'Blueberry', 'Cherry', 'Mango', 'Orange'];

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <div style="width: 300px;">
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
    </div>`,
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
  await test.step('tooltip for long text option', async () => {
    await componentsPage.mount({
      html: `<div><mdc-select placeholder="Select a color" label="Select one color">
        <mdc-selectlistbox>
          <mdc-option label="Red"></mdc-option>
          <mdc-option label="Yellow" id="trigger-option"></mdc-option>
          <mdc-option
            id="option-1"
            label="White and Black are the biggest colors on the spectrum"
          ></mdc-option>
          <mdc-option label="Green"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-tooltip triggerid="option-1" show-arrow>
        White and Black are the biggest colors on the spectrum
      </mdc-tooltip></div>`,
      clearDocument: true,
    });
    const select = componentsPage.page.locator('mdc-select');
    await select.waitFor();

    // Open the dropdown
    await select.click();
    await expect(select.locator('mdc-popover')).toBeVisible();

    // Hover over the long text option
    const longOption = select.locator('mdc-option#option-1');
    await longOption.hover();

    // Wait for the tooltip to appear
    const triggerID = await longOption.getAttribute('id');
    const tooltip = componentsPage.page.locator(`mdc-tooltip[triggerid="${triggerID}"]`);
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('White and Black are the biggest colors on the spectrum');

    // Visual regression snapshot of the tooltip
    await componentsPage.visualRegression.takeScreenshot('mdc-select', {
      source: 'userflow',
      fileNameSuffix: 'long-option-tooltip',
    });
  });

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
      'toggletip-text': 'This is additional toggletip text that provides more context',
      'info-icon-aria-label': 'Additional information',
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      readonly: true,
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);

    // Short width test for word wrapping
    selectSheet.setAttributes({
      label: 'This is a very long label text that should wrap when constrained to a narrow width',
      placeholder: defaultPlaceholder,
      style: 'width: 7.5rem;',
      'toggletip-text': 'This is additional toggletip text that provides more context',
      'info-icon-aria-label': 'Additional information',
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
      await expect(select).toHaveAttribute('value', 'option1');
      await expect(select.locator('[part="base-container"]')).toHaveAttribute('aria-expanded', 'false');
      await expect(select.locator('[part="base-container"]')).toHaveAttribute('aria-haspopup', 'listbox');

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

    await test.step('should truncate option text when overflowing', async () => {
      const customSelectWidth = '400px';
      const customListBoxWidth = '120px';
      const select = await setup({ componentsPage, children: defaultChildren() });

      // Override CSS variables for the listbox
      await componentsPage.page.evaluate(
        ({ width, listboxWidth }) => {
          const selectEl = document.querySelector('mdc-select') as Select;
          if (selectEl) {
            selectEl.style.setProperty('--mdc-select-width', width);
            selectEl.style.setProperty('--mdc-select-listbox-width', listboxWidth);
          }
        },
        { width: customSelectWidth, listboxWidth: customListBoxWidth },
      );

      // Open the dropdown to show the listbox
      await select.click();
      await select.locator('mdc-selectlistbox').waitFor({ state: 'visible' });

      await componentsPage.page.waitForTimeout(100); // Wait for the trigger up-down arrow icon to be updated

      // take screenshot to verify the overridden dimensions
      await componentsPage.visualRegression.takeScreenshot('mdc-select-truncate-overflowing-text');
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
        await select.click();
        await expect(select.locator('mdc-popover')).toBeVisible();

        await select.click();
        await expect(select.locator('mdc-popover')).not.toBeVisible();
      });

      await test.step('component should open dropdown and select 2nd option and close popover', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await select.click();
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
      await mdcSelect.click();
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
      await mdcSelect.click();
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
          }
        });

        await expect(select).toHaveAttribute('value', 'option2');
        await expect(select.locator('mdc-option').nth(1)).toHaveAttribute('selected');
      });

      await test.step('selected option should be updated when changing the value attribute programmatically', async () => {
        const select = await setup({
          componentsPage,
          label: 'Select an option',
          placeholder: 'Select an option',
          value: 'option2',
          children: `
          <mdc-selectlistbox>
            <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
            <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
            <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
            <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
          </mdc-selectlistbox>
        `,
        });

        await test.step('should update selected option when value attribute is changed from option2 to option3', async () => {
          await componentsPage.page.evaluate(() => {
            const select = document.querySelector('mdc-select[label="Select an option"]') as Select;
            if (select) {
              select.value = 'option3';
            }
          });

          await expect(select).toHaveAttribute('value', 'option3');
          await expect(select.locator('mdc-option').nth(2)).toHaveAttribute('selected');
        });

        await test.step('should fallback to placeholder when an invalid value is passed', async () => {
          await componentsPage.page.evaluate(() => {
            const select = document.querySelector('mdc-select[label="Select an option"]') as Select;
            if (select) {
              select.value = 'invalid-option';
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
    });

    await test.step('should update selected option when the value is changed progrmatically', async () => {
      const select = await setup({
        componentsPage,
        label: 'Select an option',
        value: 'option2',
        children: `
          <mdc-selectlistbox>
            <mdc-option label="Option 1" value="option1"></mdc-option>
            <mdc-option label="Option 2" value="option2" selected></mdc-option>
            <mdc-option label="Option 3" value="option3"></mdc-option>
            <mdc-option label="Option 4" value="option4"></mdc-option>
          </mdc-selectlistbox>
        `,
      });

      const optionsList = select.locator('mdc-option');
      await expect(optionsList.nth(1)).toHaveAttribute('selected');
      await componentsPage.page.evaluate(() => {
        const selectDOM = document.querySelector('mdc-select[label="Select an option"]');
        if (selectDOM) {
          selectDOM.setAttribute('value', 'option4');
        }
      });
      await expect(optionsList.nth(1)).not.toHaveAttribute('selected');
      await expect(optionsList.nth(3)).toHaveAttribute('selected');
    });

    await test.step('should update help-text and help-text-type dynamically based on select validity (FormFieldSelectWithHelpTextValidation)', async () => {
      await componentsPage.mount({
        html: `
          <form id="test-form" novalidate>
            <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
              <legend>Select your Avengers and Infinity Stones (with validation)</legend>
              <mdc-select label="Who is your favorite Avenger?" placeholder="Select the avenger" name="avengers-name" required></mdc-select>
              <mdc-select label="How many Infinity Stones exist?" placeholder="Select the count" name="stone-count" required></mdc-select>
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
      const avengerSelect = form.locator('mdc-select[name="avengers-name"]');
      const stoneSelect = form.locator('mdc-select[name="stone-count"]');
      const submitButton = form.locator('mdc-button[type="submit"]');
      const resetButton = form.locator('mdc-button[type="reset"]');
      const avengerHelpText = avengerSelect.locator('mdc-text[part="help-text"]');
      const stoneHelpText = stoneSelect.locator('mdc-text[part="help-text"]');

      // Add options to selects
      await avengerSelect.evaluate(select => {
        const el = select as HTMLElement;
        el.innerHTML = `
          <mdc-selectlistbox>
            <mdc-option value="ironman" label="Iron Man"></mdc-option>
            <mdc-option value="captainamerica" label="Captain America"></mdc-option>
            <mdc-option value="thor" label="Thor"></mdc-option>
            <mdc-option value="hulk" selected label="Hulk"></mdc-option>
            <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
            <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
          </mdc-selectlistbox>
        `;
      });
      await stoneSelect.evaluate(select => {
        const el = select as HTMLElement;
        el.innerHTML = `
          <mdc-selectlistbox>
            <mdc-option value="two" label="Two"></mdc-option>
            <mdc-option value="three" label="Three"></mdc-option>
            <mdc-option value="four" label="Four"></mdc-option>
            <mdc-option value="five" label="Five"></mdc-option>
            <mdc-option value="six" label="Six"></mdc-option>
          </mdc-selectlistbox>
        `;
      });
      // Add dynamic help-text handler to the form
      await form.evaluate(formEl => {
        formEl.addEventListener('submit', event => {
          event.preventDefault();
          const avengerSelect = formEl.querySelector('mdc-select[name="avengers-name"]');
          const stoneSelect = formEl.querySelector('mdc-select[name="stone-count"]');
          const avengerValue = avengerSelect?.getAttribute('value');
          const stoneValue = stoneSelect?.getAttribute('value');
          if (avengerSelect) {
            if (!avengerValue) {
              avengerSelect.setAttribute('help-text', 'Please select your favorite Avenger');
              avengerSelect.setAttribute('help-text-type', 'error');
            } else {
              avengerSelect.setAttribute('help-text', 'Looks good!');
              avengerSelect.setAttribute('help-text-type', 'success');
            }
          }
          if (stoneSelect) {
            if (!stoneValue) {
              stoneSelect.setAttribute('help-text', 'Please select the number of Infinity Stones');
              stoneSelect.setAttribute('help-text-type', 'error');
            } else {
              stoneSelect.setAttribute('help-text', 'Looks good!');
              stoneSelect.setAttribute('help-text-type', 'success');
            }
          }
        });
        formEl.addEventListener('reset', () => {
          const avengerSelect = formEl.querySelector('mdc-select[name="avengers-name"]');
          const stoneSelect = formEl.querySelector('mdc-select[name="stone-count"]');
          if (avengerSelect) {
            avengerSelect.setAttribute('help-text', '');
            avengerSelect.setAttribute('help-text-type', 'default');
          }
          if (stoneSelect) {
            stoneSelect.setAttribute('help-text', '');
            stoneSelect.setAttribute('help-text-type', 'default');
          }
        });
      });

      // Helper to check help-text and help-text-type
      async function expectHelpText(selectLocator: Locator, helpTextLocator: Locator, text: string, type: string) {
        if (text === '') {
          await expect(helpTextLocator).toHaveCount(0); // no help-text rendered
        } else {
          await expect(helpTextLocator).toHaveText(text);
        }
        await expect(selectLocator).toHaveAttribute('help-text-type', type);
      }

      // 1. Submit with both required selects empty
      await submitButton.click();
      await expectHelpText(avengerSelect, avengerHelpText, 'Looks good!', 'success');
      await expectHelpText(stoneSelect, stoneHelpText, 'Please select the number of Infinity Stones', 'error');

      // 2. Select valid options and submit
      await avengerSelect.locator('div[id="select-base-triggerid"]').click();
      await avengerSelect.locator('mdc-option').nth(2).click(); // Select Thor
      await stoneSelect.locator('div[id="select-base-triggerid"]').click();
      await stoneSelect.locator('mdc-option').nth(4).click(); // Select Six
      await submitButton.click();
      await expectHelpText(avengerSelect, avengerHelpText, 'Looks good!', 'success');
      await expectHelpText(stoneSelect, stoneHelpText, 'Looks good!', 'success');

      // 3. Reset form and check help-text resets
      await resetButton.click();
      await expectHelpText(avengerSelect, avengerHelpText, '', 'default');
      await expectHelpText(stoneSelect, stoneHelpText, '', 'default');
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

      await test.step('component should navigate in between options list with disabled list items within', async () => {
        const select = await setup({
          componentsPage,
          children: `
          <mdc-selectlistbox>
            <mdc-option label="Option 1" value="option1"></mdc-option>
            <mdc-option label="Option 2" value="option2"></mdc-option>
            <mdc-option label="Option 3" value="option3"></mdc-option>
            <mdc-option label="Option 4" value="option4" disabled></mdc-option>
            <mdc-option label="Option 5" value="option5"></mdc-option>
          </mdc-selectlistbox>
        `,
        });

        // update the Option with label "Option 2" to be disabled after mount
        await componentsPage.page.evaluate(() => {
          const selectListbox = document.querySelector('mdc-select mdc-selectlistbox');
          if (selectListbox) {
            const options = selectListbox.querySelectorAll('mdc-option');
            options.forEach((option, idx) => {
              if (idx === 1) {
                option.toggleAttribute('disabled');
              }
            });
          }
        });

        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option 1' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        // Option 2 is disabled, so focus should move to Option 3
        await expect(select.locator('mdc-option').filter({ hasText: 'Option 3' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        // Option 4 is disabled, so focus should move to Option 5
        await expect(select.locator('mdc-option').filter({ hasText: 'Option 5' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
        // Option 4 is disabled, so focus should move to Option 3
        await expect(select.locator('mdc-option').filter({ hasText: 'Option 3' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
        // Option 2 is disabled, so focus should move to Option 1
        await expect(select.locator('mdc-option').filter({ hasText: 'Option 1' })).toBeFocused();

        // press escape to close the popover
        await componentsPage.page.keyboard.press(KEYS.ESCAPE);
        await expect(select.locator('mdc-popover')).not.toBeVisible();
      });

      const setupArguments = {
        componentsPage,
        children: `
        <mdc-selectlistbox>
          ${mockFruits.map(fruit => `<mdc-option label="${fruit}"></mdc-option>`).join('\n')}
        </mdc-selectlistbox>
      `,
      };

      await test.step('component should select an option by typing a letter', async () => {
        const select = await setup(setupArguments);
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('b');
        await expect(select.locator('mdc-option').filter({ hasText: 'Banana' })).toHaveAttribute('selected');
      });

      await test.step('component should type multiple characters and filters selection', async () => {
        const select = await setup(setupArguments);
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('b');
        await componentsPage.page.keyboard.press('l');
        await expect(select.locator('mdc-option').filter({ hasText: 'Banana' })).not.toHaveAttribute('selected');
        await expect(select.locator('mdc-option').filter({ hasText: 'Blackberry' })).toHaveAttribute('selected');
      });

      await test.step('component search resets after 500ms of inactivity', async () => {
        const select = await setup(setupArguments);
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('b');
        await componentsPage.page.keyboard.press('l');
        await componentsPage.page.waitForTimeout(500);
        await componentsPage.page.keyboard.press('a');
        await expect(select.locator('mdc-option').filter({ hasText: 'Banana' })).not.toHaveAttribute('selected');
        await expect(select.locator('mdc-option').filter({ hasText: 'Blackberry' })).not.toHaveAttribute('selected');
        await expect(select.locator('mdc-option').filter({ hasText: 'Apple' })).toHaveAttribute('selected');
      });

      await test.step('component options should circle letter selection', async () => {
        const select = await setup(setupArguments);
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('b');
        await expect(select.locator('mdc-option').filter({ hasText: 'Banana' })).toHaveAttribute('selected');
        await componentsPage.page.keyboard.press('b');
        await expect(select.locator('mdc-option').filter({ hasText: 'Blackberry' })).toHaveAttribute('selected');
        await componentsPage.page.keyboard.press('b');
        await expect(select.locator('mdc-option').filter({ hasText: 'Blueberry' })).toHaveAttribute('selected');
        await componentsPage.page.keyboard.press('b');
        await expect(select.locator('mdc-option').filter({ hasText: 'Banana' })).toHaveAttribute('selected');
      });

      await test.step('component should select first option if the letter doesn`t match any option', async () => {
        const select = await setup(setupArguments);
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('z');
        await expect(select.locator('mdc-option').filter({ hasText: 'Apple' })).toHaveAttribute('selected');
      });
    });

    await test.step('should handle option removal', async () => {
      await test.step('when a selected option is removed then placeholder should be set', async () => {
        const select = await setup({
          componentsPage,
          children: defaultChildren(true),
          placeholder: defaultPlaceholder,
        });
        await componentsPage.page.evaluate(() => {
          const selectListbox = document.querySelector('mdc-select mdc-selectlistbox');
          if (selectListbox) {
            const options = selectListbox.querySelectorAll('mdc-option');
            options[1].remove(); // Remove selected option
          }
        });
        const mdcTextElement = select.locator('mdc-text[part="base-text "]');
        const textContent = await mdcTextElement.textContent();
        expect(textContent?.trim()).toBe(defaultPlaceholder);
      });

      await test.step('when a selected option is removed then first option should be selected', async () => {
        const select = await setup({ componentsPage, children: defaultChildren(true) });
        await componentsPage.page.evaluate(() => {
          const selectListbox = document.querySelector('mdc-select mdc-selectlistbox');
          if (selectListbox) {
            const options = selectListbox?.querySelectorAll('mdc-option');
            options[1].remove(); // Remove selected option
          }
        });
        await expect(select.locator('mdc-option').first()).toHaveAttribute('selected');
        await expect(select).toHaveAttribute('value', 'option1');
      });

      await test.step('when a focused option is removed then the next option should be focused via tabindex', async () => {
        const select = await setup({ componentsPage, children: defaultChildren(false) });
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN); // Focus 1st option
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN); // Focus 2nd option
        await expect(select.locator('mdc-option').nth(1)).toBeFocused();
        await expect(select.locator('mdc-option').nth(1)).toHaveAttribute('tabindex', '0');
        await expect(select.locator('mdc-option').nth(1)).toHaveAttribute('value', 'option2');
        await componentsPage.page.evaluate(() => {
          const selectListbox = document.querySelector('mdc-select mdc-selectlistbox');
          if (selectListbox) {
            const options = selectListbox.querySelectorAll('mdc-option');
            options[1].remove(); // Remove second option.
          }
        });
        // After removing 2nd option, the 3rd option will be second.
        await expect(select.locator('mdc-option').nth(1)).toHaveAttribute('tabindex', '0');
        await expect(select.locator('mdc-option').nth(1)).toHaveAttribute('value', 'option3');
      });
    });
  });
});
