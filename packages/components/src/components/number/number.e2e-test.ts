import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { KEYS } from '../../utils/keys';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number | 'any';
  hideSteppers?: boolean;
  incrementAriaLabel?: string;
  decrementAriaLabel?: string;
  label?: string;
  helpText?: string;
  helpTextType?: string;
  validationMessage?: string;
  secondButtonForFocus?: boolean;
};

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    ${isForm ? '<form>' : ''}
    ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
      <mdc-number
      id="${restArgs.id}"
      ${restArgs.value !== undefined ? `value="${restArgs.value}"` : ''}
      ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
      ${restArgs.required ? 'required' : ''}
      ${restArgs.readonly ? 'readonly' : ''}
      ${restArgs.disabled ? 'disabled' : ''}
      ${restArgs.min !== undefined ? `min="${restArgs.min}"` : ''}
      ${restArgs.max !== undefined ? `max="${restArgs.max}"` : ''}
      ${restArgs.step !== undefined ? `step="${restArgs.step}"` : ''}
      ${restArgs.hideSteppers ? 'hide-steppers' : ''}
      ${restArgs.incrementAriaLabel ? `increment-aria-label="${restArgs.incrementAriaLabel}"` : ''}
      ${restArgs.decrementAriaLabel ? `decrement-aria-label="${restArgs.decrementAriaLabel}"` : ''}
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
      ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
      ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
      ${restArgs.validationMessage ? `validation-message="${restArgs.validationMessage}"` : ''}
      ></mdc-number>
      ${restArgs.secondButtonForFocus ? '<mdc-button>Second Button</mdc-button></div>' : ''}
    ${isForm ? '<mdc-button type="submit" size="24">Submit</mdc-button></form>' : ''}
    `,
    clearDocument: true,
  });
  if (isForm) {
    const form = componentsPage.page.locator('form');
    await form.waitFor();
    await form.locator('mdc-number input').waitFor();
    return form;
  }
  const number = componentsPage.page.locator('mdc-number');
  await number.waitFor();
  return number;
};

test.describe('mdc-number', () => {
  test.use({ viewport: { width: 800, height: 1500 } });

  const defaultSetupOptions = {
    id: 'test-mdc-number',
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
      await expect(number).toHaveAttribute('id', 'test-mdc-number');
      await expect(number).toHaveAttribute('placeholder', 'Placeholder');
      await expect(number).toHaveAttribute('label', 'Label');
      const label = number.locator('label');
      await expect(label).toHaveText('Label');
      await expect(number).toHaveAttribute('help-text', 'Help Text');
      const helpText = number.locator('mdc-text[part="help-text"]');
      await expect(helpText).toHaveText('Help Text');
    });

    await test.step('should the input be of type number', async () => {
      const inputEl = number.locator('input');
      await expect(inputEl).toHaveAttribute('type', 'number');
    });

    await test.step('should render steppers by default, labeled by increment/decrement-aria-label', async () => {
      const incrementButton = number.locator('mdc-button[part="stepper-button"]').last();
      const decrementButton = number.locator('mdc-button[part="stepper-button"]').first();
      await expect(incrementButton).toBeVisible();
      await expect(decrementButton).toBeVisible();
      await expect(incrementButton).toHaveAttribute('aria-label', 'Increment');
      await expect(decrementButton).toHaveAttribute('aria-label', 'Decrement');
    });

    await test.step('should hide the steppers when hide-steppers is set', async () => {
      await componentsPage.setAttributes(number, { 'hide-steppers': '' });
      await expect(number.locator('mdc-button[part="stepper-button"]')).toHaveCount(0);
      await componentsPage.removeAttribute(number, 'hide-steppers');
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
    await test.step('should the component be focusable with tab, then the steppers', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions });
      const inputEl = number.locator('input');
      const decrementButton = number.locator('mdc-button[part="stepper-button"]').first();
      const incrementButton = number.locator('mdc-button[part="stepper-button"]').last();

      await componentsPage.actionability.pressTab();
      await expect(inputEl).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(decrementButton).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(incrementButton).toBeFocused();
    });

    await test.step('should increment the value by step when clicking the increment stepper', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '4', step: 2 });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="stepper-button"]').last();

      const waitForInput = await componentsPage.waitForEvent(number, 'input');
      const waitForChange = await componentsPage.waitForEvent(number, 'change');
      await incrementButton.click();
      await expect(inputEl).toHaveValue('6');
      await expect(waitForInput).toEventEmitted();
      await expect(waitForChange).toEventEmitted();
    });

    await test.step('should decrement the value by step when clicking the decrement stepper', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '4', step: 2 });
      const inputEl = number.locator('input');
      const decrementButton = number.locator('mdc-button[part="stepper-button"]').first();

      await decrementButton.click();
      await expect(inputEl).toHaveValue('2');
    });

    await test.step('should clamp the increment stepper to the maximum and stay there on further clicks', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '5', max: 10, step: 5 });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="stepper-button"]').last();

      await incrementButton.click();
      await expect(inputEl).toHaveValue('10');
      await incrementButton.click();
      await expect(inputEl).toHaveValue('10');
    });

    await test.step('should clamp the decrement stepper to the minimum and stay there on further clicks', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '5', min: 0, step: 5 });
      const inputEl = number.locator('input');
      const decrementButton = number.locator('mdc-button[part="stepper-button"]').first();

      await decrementButton.click();
      await expect(inputEl).toHaveValue('0');
      await decrementButton.click();
      await expect(inputEl).toHaveValue('0');
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

    await test.step('should clamp the value to the maximum once the change is committed', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, max: 10, secondButtonForFocus: true });
      const inputEl = number.locator('input');

      await inputEl.fill('42');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toHaveValue('10');
    });

    await test.step('should clamp the value to the minimum once the change is committed', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, min: 0, secondButtonForFocus: true });
      const inputEl = number.locator('input');

      await inputEl.fill('-42');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toHaveValue('0');
    });

    await test.step('should not clamp while typing, only once the change is committed', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, max: 10, secondButtonForFocus: true });
      const inputEl = number.locator('input');

      await inputEl.fill('42');
      await expect(inputEl).toHaveValue('42');
    });

    await test.step('should the steppers not be focusable or clickable when disabled', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '5', disabled: true });
      const inputEl = number.locator('input');
      const incrementButton = number.locator('mdc-button[part="stepper-button"]').last();

      await expect(incrementButton).toBeDisabled();
      await componentsPage.actionability.pressTab();
      await expect(inputEl).not.toBeFocused();
    });

    await test.step('should the steppers not be focusable or clickable when readonly', async () => {
      const number = await setup({ componentsPage, ...defaultSetupOptions, value: '5', readonly: true });
      const incrementButton = number.locator('mdc-button[part="stepper-button"]').last();
      const inputEl = number.locator('input');

      await expect(incrementButton).toBeDisabled();
      await expect(inputEl).toHaveValue('5');
    });

    await test.step('should submit the current value as part of a form', async () => {
      const form = await setup({ componentsPage, ...defaultSetupOptions, value: '4', step: 2 }, true);
      const mdcNumber = form.locator('mdc-number');
      const incrementButton = mdcNumber.locator('mdc-button[part="stepper-button"]').last();
      const submitButton = form.locator('mdc-button[type="submit"]');

      await incrementButton.click();
      const waitForSubmit = await componentsPage.waitForEvent(form, 'submit');
      await form.evaluate((formEl: HTMLFormElement) => {
        formEl.addEventListener('submit', e => e.preventDefault());
      });
      await submitButton.click();
      await expect(waitForSubmit).toEventEmitted();
    });
  });

  /**
   * VISUAL REGRESSION
   */
  test('visual-regression', async ({ componentsPage }) => {
    const attributes = {
      id: 'test-mdc-number',
      placeholder: 'Placeholder',
      label: 'Label',
      'help-text': 'Help Text',
      'increment-aria-label': 'Increment',
      'decrement-aria-label': 'Decrement',
    };
    const numberStickerSheet = new StickerSheet(componentsPage, 'mdc-number');

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
      'hide-steppers': true,
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      value: 'Disabled',
      disabled: true,
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      value: 'Readonly value',
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
      await componentsPage.visualRegression.takeScreenshot('mdc-number', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  test('accessibility', async ({ componentsPage }) => {
    await setup({ componentsPage, ...defaultSetupOptions });
    await componentsPage.accessibility.checkForA11yViolations('number-default');
  });
});
