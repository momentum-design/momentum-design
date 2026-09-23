import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { KEYS } from '../../utils/keys';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number | 'any';
  clamp?: 'none' | 'auto';
  hideSpinnerButtons?: boolean;
  incrementAriaLabel?: string;
  decrementAriaLabel?: string;
  label?: string;
  helpText?: string;
  helpTextType?: string;
  validationMessage?: string;
  toggletipText?: string;
  secondButtonForFocus?: boolean;
};

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    ${isForm ? '<form>' : ''}
    ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
      <mdc-numberinput
      id="${restArgs.id}"
      ${restArgs.name ? `name="${restArgs.name}"` : ''}
      ${restArgs.value !== undefined ? `value="${restArgs.value}"` : ''}
      ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
      ${restArgs.required ? 'required' : ''}
      ${restArgs.readonly ? 'readonly' : ''}
      ${restArgs.disabled ? 'disabled' : ''}
      ${restArgs.min !== undefined ? `min="${restArgs.min}"` : ''}
      ${restArgs.max !== undefined ? `max="${restArgs.max}"` : ''}
      ${restArgs.step !== undefined ? `step="${restArgs.step}"` : ''}
      ${restArgs.clamp !== undefined ? `clamp="${restArgs.clamp}"` : ''}
      ${restArgs.hideSpinnerButtons ? 'hide-spinner-buttons' : ''}
      ${restArgs.incrementAriaLabel ? `increment-aria-label="${restArgs.incrementAriaLabel}"` : ''}
      ${restArgs.decrementAriaLabel ? `decrement-aria-label="${restArgs.decrementAriaLabel}"` : ''}
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
      ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
      ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
      ${restArgs.validationMessage ? `validation-message="${restArgs.validationMessage}"` : ''}
      ${restArgs.toggletipText ? `toggletip-text="${restArgs.toggletipText}"` : ''}
      ></mdc-numberinput>
      ${restArgs.secondButtonForFocus ? '<mdc-button>Second Button</mdc-button></div>' : ''}
    ${isForm ? '<mdc-button type="submit" size="24">Submit</mdc-button></form>' : ''}
    `,
    clearDocument: true,
  });
  if (isForm) {
    const form = componentsPage.page.locator('form');
    await form.waitFor();
    await form.locator('mdc-numberinput input').waitFor();
    return form;
  }
  const number = componentsPage.page.locator('mdc-numberinput');
  await number.waitFor();
  return number;
};

test.describe('mdc-numberinput', () => {
  test.use({ viewport: { width: 800, height: 1500 } });

  const defaultSetupOptions = {
    id: 'test-mdc-numberinput',
    placeholder: 'Placeholder',
    label: 'Label',
    helpText: 'Help Text',
    incrementAriaLabel: 'Increment',
    decrementAriaLabel: 'Decrement',
    secondButtonForFocus: true,
  };

  /**
   * ATTRIBUTES
   */
  test('attributes', async ({ componentsPage }) => {
    const number = await setup({ componentsPage, ...defaultSetupOptions });

    await test.step('should attributes be present in the component', async () => {
      await expect(number).toHaveAttribute('id', 'test-mdc-numberinput');
      await expect(number).toHaveAttribute('placeholder', 'Placeholder');
      await expect(number).toHaveAttribute('label', 'Label');
      const label = number.locator('label');
      await expect(label).toHaveText('Label');
      await expect(number).toHaveAttribute('help-text', 'Help Text');
      const helpText = number.locator('mdc-text[part="help-text"]');
      await expect(helpText).toHaveText('Help Text');
    });

    await test.step('should use number type and numeric input mode', async () => {
      const inputEl = number.locator('input');
      await expect(inputEl).toHaveAttribute('type', 'number');
      await expect(inputEl).toHaveAttribute('inputmode', 'numeric');

      await componentsPage.setAttributes(number, { inputmode: 'decimal' });
      await expect(inputEl).toHaveAttribute('inputmode', 'decimal');
      await componentsPage.removeAttribute(number, 'inputmode');
    });

    await test.step('should render spinner buttons by default, labeled by increment/decrement-aria-label', async () => {
      const incrementButton = number.locator('mdc-button[part="spinner-button"]').last();
      const decrementButton = number.locator('mdc-button[part="spinner-button"]').first();
      await expect(incrementButton).toBeVisible();
      await expect(decrementButton).toBeVisible();
      await expect(incrementButton).toHaveAttribute('aria-label', 'Increment');
      await expect(decrementButton).toHaveAttribute('aria-label', 'Decrement');
    });

    await test.step('should hide the spinner buttons when hide-spinner-buttons is set', async () => {
      await componentsPage.setAttributes(number, { 'hide-spinner-buttons': '' });
      await expect(number.locator('mdc-button[part="spinner-button"]')).toHaveCount(0);
      await componentsPage.removeAttribute(number, 'hide-spinner-buttons');
    });

    await test.step('should the min, max and step attributes be reflected on the native input', async () => {
      await componentsPage.setAttributes(number, { min: '0', max: '10', step: '2' });
      const inputEl = number.locator('input');
      await expect(inputEl).toHaveAttribute('min', '0');
      await expect(inputEl).toHaveAttribute('max', '10');
      await expect(inputEl).toHaveAttribute('step', '2');
    });

    await test.step('should the step attribute accept "any"', async () => {
      await componentsPage.setAttributes(number, { step: 'any' });
      const inputEl = number.locator('input');
      await expect(inputEl).toHaveAttribute('step', 'any');
    });

    await test.step('should the required attribute be present in the component when it sets', async () => {
      await componentsPage.setAttributes(number, { required: '' });
      await expect(number).toHaveAttribute('required', '');
    });

    await test.step('should the readonly attribute be present in the component when it sets', async () => {
      await componentsPage.setAttributes(number, { readonly: '' });
      await expect(number).toHaveAttribute('readonly');
      await componentsPage.removeAttribute(number, 'readonly');
    });

    await test.step('should the disabled attribute be present in the component when it sets', async () => {
      await componentsPage.setAttributes(number, { disabled: '' });
      await expect(number).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(number, 'disabled');
    });
  });

  /**
   * INTERACTIONS
   */
  test('interactions', async ({ componentsPage }) => {
    await test.step('should tab from the toggletip to the input, leaving the spinner buttons out of the tab order', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, toggletipText: 'More information' });
      const infoButton = number.locator('mdc-button[part="info-icon-btn"]');
      const inputEl = number.locator('input');
      const secondButton = componentsPage.page.locator('mdc-button:has-text("Second Button")');

      await componentsPage.actionability.pressTab();
      await expect(infoButton).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toBeFocused();
      // The spinner buttons have tabindex="-1", so focus skips them and leaves the component.
      await componentsPage.actionability.pressTab();
      await expect(secondButton).toBeFocused();
    });

    await test.step('should increment the value by step when clicking the increment spinner button', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '4', step: 2 });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="spinner-button"]').last();

      const waitForInput = await componentsPage.waitForEvent(number, 'input');
      const waitForChange = await componentsPage.waitForEvent(number, 'change');
      await incrementButton.click();
      await expect(inputEl).toHaveValue('6');
      await expect(waitForInput).toEventEmitted();
      await expect(waitForChange).toEventEmitted();
    });

    await test.step('should decrement the value by step when clicking the decrement spinner button', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '4', step: 2 });
      const inputEl = number.locator('input');
      const decrementButton = number.locator('mdc-button[part="spinner-button"]').first();

      await decrementButton.click();
      await expect(inputEl).toHaveValue('2');
    });

    await test.step('should clamp the increment spinner button to the maximum and stay there on further clicks', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '5', max: 10, step: 5 });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="spinner-button"]').last();

      await incrementButton.click();
      await expect(inputEl).toHaveValue('10');
      await incrementButton.click();
      await expect(inputEl).toHaveValue('10');
    });

    await test.step('should clamp the decrement spinner button to the minimum and stay there on further clicks', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '5', min: 0, step: 5 });
      const inputEl = number.locator('input');
      const decrementButton = number.locator('mdc-button[part="spinner-button"]').first();

      await decrementButton.click();
      await expect(inputEl).toHaveValue('0');
      await decrementButton.click();
      await expect(inputEl).toHaveValue('0');
    });

    await test.step('should hold a fractional boundary and never step past it with step="any"', async () => {
      const number = await setup({
        componentsPage,
        ...defaultSetupOptions,
        value: '0.5',
        min: 0.5,
        max: 9.5,
        step: 'any',
      });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="spinner-button"]').last();
      const decrementButton = number.locator('mdc-button[part="spinner-button"]').first();

      // Decrementing at the fractional min must clamp to the min, not round back up past it.
      await decrementButton.click();
      await expect(inputEl).toHaveValue('0.5');

      // Incrementing at the fractional max must clamp to the max, not round back down past it.
      await inputEl.fill('9.5');
      await incrementButton.click();
      await expect(inputEl).toHaveValue('9.5');
    });

    await test.step('should not emit input/change when a spinner button click is clamped at the boundary', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '10', max: 10, step: 5 });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="spinner-button"]').last();

      const waitForInput = await componentsPage.waitForEvent(number, 'input');
      const waitForChange = await componentsPage.waitForEvent(number, 'change');
      await incrementButton.click();
      await expect(inputEl).toHaveValue('10');
      await expect(waitForInput).not.toEventEmitted();
      await expect(waitForChange).not.toEventEmitted();
    });

    await test.step('should increment/decrement the value with the up/down arrow keys', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '4', step: 2 });
      const inputEl = number.locator('input');

      await inputEl.click();
      await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
      await expect(inputEl).toHaveValue('6');
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(inputEl).toHaveValue('4');
    });

    await test.step('should not step past the min/max with the up/down arrow keys', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '10', min: 0, max: 10, step: 5 });
      const inputEl = number.locator('input');

      await inputEl.click();
      await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
      await expect(inputEl).toHaveValue('10');
      await inputEl.fill('0');
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(inputEl).toHaveValue('0');
    });

    await test.step('should step by 1 via the spinner buttons when step is "any"', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '4', step: 'any' });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="spinner-button"]').last();
      const decrementButton = number.locator('mdc-button[part="spinner-button"]').first();

      await incrementButton.click();
      await expect(inputEl).toHaveValue('5');
      await decrementButton.click();
      await expect(inputEl).toHaveValue('4');
      // step="any" is preserved, so the value never suffers a step mismatch.
      await inputEl.fill('4.25');
      const stepMismatch = await inputEl.evaluate((el: HTMLInputElement) => el.validity.stepMismatch);
      expect(stepMismatch).toBe(false);
    });

    await test.step('should keep the decimal part when stepping with the spinner buttons and step is "any"', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '4.25', step: 'any' });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="spinner-button"]').last();
      const decrementButton = number.locator('mdc-button[part="spinner-button"]').first();

      // The whole part changes by 1 while the decimal part is preserved (not rounded away).
      await incrementButton.click();
      await expect(inputEl).toHaveValue('5.25');
      await decrementButton.click();
      await expect(inputEl).toHaveValue('4.25');
      await decrementButton.click();
      await expect(inputEl).toHaveValue('3.25');
    });

    await test.step('should keep the decimal part when stepping with the up/down arrow keys and step is "any"', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '4.25', step: 'any' });
      const inputEl = number.locator('input');

      await inputEl.click();
      // Native arrow-key stepping with step="any" adds/subtracts 1, keeping the decimal part intact.
      await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
      await expect(inputEl).toHaveValue('5.25');
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(inputEl).toHaveValue('4.25');
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(inputEl).toHaveValue('3.25');
    });

    await test.step('should keep a value above max on commit and report rangeOverflow (native behavior)', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, max: 10 });
      const inputEl = number.locator('input');

      await inputEl.fill('42');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toHaveValue('42');
      const rangeOverflow = await inputEl.evaluate((el: HTMLInputElement) => el.validity.rangeOverflow);
      expect(rangeOverflow).toBe(true);
    });

    await test.step('should keep a value below min on commit and report rangeUnderflow (native behavior)', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, min: 0 });
      const inputEl = number.locator('input');

      await inputEl.fill('-42');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toHaveValue('-42');
      const rangeUnderflow = await inputEl.evaluate((el: HTMLInputElement) => el.validity.rangeUnderflow);
      expect(rangeUnderflow).toBe(true);
    });

    await test.step('should not modify an out-of-range value while typing', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, max: 10 });
      const inputEl = number.locator('input');

      await inputEl.fill('42');
      await expect(inputEl).toHaveValue('42');
    });

    await test.step('should clamp a typed value above max to max on commit when clamp="auto"', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, max: 10, clamp: 'auto' });
      const inputEl = number.locator('input');

      await inputEl.fill('42');
      // Manual entry is left alone while typing; clamping only happens on commit.
      await expect(inputEl).toHaveValue('42');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toHaveValue('10');
      const rangeOverflow = await inputEl.evaluate((el: HTMLInputElement) => el.validity.rangeOverflow);
      expect(rangeOverflow).toBe(false);
    });

    await test.step('should clamp a typed value below min to min on commit when clamp="auto"', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, min: 0, clamp: 'auto' });
      const inputEl = number.locator('input');

      await inputEl.fill('-42');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toHaveValue('0');
      const rangeUnderflow = await inputEl.evaluate((el: HTMLInputElement) => el.validity.rangeUnderflow);
      expect(rangeUnderflow).toBe(false);
    });

    await test.step('should emit a change carrying the clamped value when clamp="auto"', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, max: 10, clamp: 'auto' });
      const inputEl = number.locator('input');

      // Capture the value reported by the event itself, not just the field value after the fact.
      await number.evaluate((element: HTMLElement) => {
        (window as unknown as { reportedChangeValue?: string }).reportedChangeValue = undefined;
        element.addEventListener('change', event => {
          (window as unknown as { reportedChangeValue?: string }).reportedChangeValue = (
            event.target as HTMLInputElement
          ).value;
        });
      });

      const waitForChange = await componentsPage.waitForEvent(number, 'change');
      await inputEl.fill('42');
      await componentsPage.actionability.pressTab();
      await expect(waitForChange).toEventEmitted();
      await expect(inputEl).toHaveValue('10');

      const reportedChangeValue = await componentsPage.page.evaluate(
        () => (window as unknown as { reportedChangeValue?: string }).reportedChangeValue,
      );
      expect(reportedChangeValue).toBe('10');
    });

    await test.step('should emit an input carrying the clamped value on commit when clamp="auto"', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, max: 10, clamp: 'auto' });
      const inputEl = number.locator('input');

      // Consumers collecting the value on input must observe the clamped value once the field commits.
      await number.evaluate((element: HTMLElement) => {
        (window as unknown as { inputValues?: string[] }).inputValues = [];
        element.addEventListener('input', event => {
          (window as unknown as { inputValues?: string[] }).inputValues?.push((event.target as HTMLInputElement).value);
        });
      });

      const waitForInput = await componentsPage.waitForEvent(number, 'input');
      await inputEl.fill('42');
      await expect(waitForInput).toEventEmitted();
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toHaveValue('10');

      // The last input reported on commit carries the clamped value, not the out-of-range entry.
      const inputValues = await componentsPage.page.evaluate(
        () => (window as unknown as { inputValues?: string[] }).inputValues ?? [],
      );
      expect(inputValues.at(-1)).toBe('10');
    });

    await test.step('should leave an in-range typed value unchanged when clamp="auto"', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, min: 0, max: 10, clamp: 'auto' });
      const inputEl = number.locator('input');

      await inputEl.fill('7');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toHaveValue('7');
    });

    await test.step('should leave a cleared field empty and not force it to min/max when clamp="auto"', async () => {
      const number = await setup({
        componentsPage,
        ...defaultSetupOptions,
        value: '5',
        min: 0,
        max: 10,
        clamp: 'auto',
      });
      const inputEl = number.locator('input');

      await inputEl.fill('');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toHaveValue('');
    });

    await test.step('should update form validity when numeric constraints change', async () => {
      const form = await setup({ componentsPage, ...defaultSetupOptions, value: '5', name: 'quantity' }, true);
      const number = form.locator('mdc-numberinput');

      await componentsPage.setAttributes(number, { max: '10' });
      await expect(form.evaluate((element: HTMLFormElement) => element.checkValidity())).resolves.toBe(true);

      await componentsPage.setAttributes(number, { max: '3' });
      await expect(form.evaluate((element: HTMLFormElement) => element.checkValidity())).resolves.toBe(false);
      await expect(
        number.evaluate((element: HTMLElement & { validity: ValidityState }) => element.validity.rangeOverflow),
      ).resolves.toBe(true);
    });

    await test.step('should reject non-numeric characters typed into the field', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions });
      const inputEl = number.locator('input');

      await inputEl.click();
      // Letters and the native-number extras e/E/+ are dropped; digits, the sign and the decimal point are kept.
      await inputEl.pressSequentially('-1a2E3e+4.5');
      await expect(inputEl).toHaveValue('-1234.5');
    });

    await test.step('should not step or focus the input when disabled, skipping the whole component', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '5', disabled: true });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="spinner-button"]').last();
      const secondButton = componentsPage.page.locator('mdc-button:has-text("Second Button")');

      await expect(incrementButton).toBeDisabled();
      await incrementButton.click({ force: true });
      await expect(inputEl).toHaveValue('5');
      await componentsPage.actionability.pressTab();
      await expect(secondButton).toBeFocused();
    });

    await test.step('should not step when readonly', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '5', readonly: true });
      const incrementButton = number.locator('mdc-button[part="spinner-button"]').last();
      const inputEl = number.locator('input');

      await expect(incrementButton).toBeDisabled();
      await incrementButton.click({ force: true });
      await expect(inputEl).toHaveValue('5');
    });

    await test.step('should submit the current value as part of a form', async () => {
      const form = await setup({ componentsPage, ...defaultSetupOptions, value: '4', step: 2, name: 'quantity' }, true);
      const mdcNumber = form.locator('mdc-numberinput');
      const incrementButton = mdcNumber.locator('mdc-button[part="spinner-button"]').last();
      const submitButton = form.locator('mdc-button[type="submit"]');

      await incrementButton.click();
      const waitForSubmit = await componentsPage.waitForEvent(form, 'submit');
      await form.evaluate((formEl: HTMLFormElement) => {
        formEl.addEventListener('submit', e => e.preventDefault());
      });
      await submitButton.click();
      await expect(waitForSubmit).toEventEmitted();

      const submittedValue = await form.evaluate((formEl: HTMLFormElement) => new FormData(formEl).get('quantity'));
      expect(submittedValue).toBe('6');
    });
  });

  /**
   * VISUAL REGRESSION
   */
  test('visual-regression', async ({ componentsPage }) => {
    // First-run baseline writes plus high-contrast/ltr/rtl capture across several stacked
    // variants legitimately exceed the default 30s test timeout, matching the pattern used
    // by other combinatorial visual-regression tests (e.g. sidenavigation.e2e-test.ts).
    test.setTimeout(60_000);

    const attributes = {
      id: 'test-mdc-numberinput',
      placeholder: 'Placeholder',
      label: 'Label',
      'help-text': 'Help Text',
      'increment-aria-label': 'Increment',
      'decrement-aria-label': 'Decrement',
    };
    const numberStickerSheet = new StickerSheet(componentsPage, 'mdc-numberinput');

    numberStickerSheet.setAttributes(attributes);
    await numberStickerSheet.createMarkupWithCombination({
      'help-text-type': VALIDATION,
    });

    numberStickerSheet.setAttributes({
      ...attributes,
      value: '5',
      min: '0',
      max: '10',
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      value: '5',
      'hide-spinner-buttons': true,
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      value: '42',
      disabled: true,
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      value: '7',
      readonly: true,
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      required: '',
      placeholder: 'Number is required',
    });
    await numberStickerSheet.createMarkupWithCombination({});

    await numberStickerSheet.mountStickerSheet();
    const container = numberStickerSheet.getWrapperContainer();
    await componentsPage.page.mouse.move(0, 0);
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-numberinput', { element: container });
    });

    await test.step('should keep native spin buttons hidden while the input is focused and hovered', async () => {
      const number = await setup({
        componentsPage,
        ...defaultSetupOptions,
        value: '5',
        min: 0,
        max: 10,
        secondButtonForFocus: false,
      });
      const inputEl = number.locator('input');
      await inputEl.click();
      await inputEl.hover();
      await componentsPage.visualRegression.takeScreenshot('mdc-numberinput-focused', {
        source: 'userflow',
        fileNameSuffix: 'native-spin-buttons-hidden',
        element: number,
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  test('accessibility', async ({ componentsPage }) => {
    await test.step('default', async () => {
      await setup({ componentsPage, ...defaultSetupOptions });
      await componentsPage.accessibility.checkForA11yViolations('numberinput-default');
    });

    await test.step('required', async () => {
      await setup({ componentsPage, ...defaultSetupOptions, required: true });
      await componentsPage.accessibility.checkForA11yViolations('numberinput-required');
    });

    await test.step('disabled', async () => {
      await setup({ componentsPage, ...defaultSetupOptions, value: '5', disabled: true });
      await componentsPage.accessibility.checkForA11yViolations('numberinput-disabled');
    });

    await test.step('error validation', async () => {
      await setup({ componentsPage, ...defaultSetupOptions, helpTextType: 'error', helpText: 'Error message' });
      await componentsPage.accessibility.checkForA11yViolations('numberinput-error');
    });
  });
});
