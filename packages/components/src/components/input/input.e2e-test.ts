/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { getHelperIcon } from '../formfieldwrapper/formfieldwrapper.utils';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  maxlength?: number;
  minlength?: number;
  prefixText?: string;
  leadingIcon?: string;
  trailingButton?: boolean;
  label?: string;
  helpText?: string;
  helpTextType?: string;
  autocapitalize?: string;
  autofocus?: boolean;
  autocomplete?: string;
  dirname?: string;
  pattern?: string;
  list?: string;
  size?: number;
  dataAriaLabel?: string;
  clearAriaLabel?: string;
  secondButtonForFocus?: boolean;
};

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    ${isForm ? '<form>' : ''}
    ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
      <mdc-input
      id="${restArgs.id}"
      ${restArgs.value ? `value="${restArgs.value}"` : ''}
      ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
      ${restArgs.required ? 'required' : ''}
      ${restArgs.readonly ? 'readonly' : ''}
      ${restArgs.disabled ? 'disabled' : ''}
      ${restArgs.maxlength ? `maxlength="${restArgs.maxlength}"` : ''}
      ${restArgs.minlength ? `minlength="${restArgs.minlength}"` : ''}
      ${restArgs.prefixText ? `prefix-text="${restArgs.prefixText}"` : ''}
      ${restArgs.leadingIcon ? `leading-icon="${restArgs.leadingIcon}"` : ''}
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
      ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
      ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
      ${restArgs.trailingButton ? 'trailing-button' : ''}
      ${restArgs.autocapitalize ? `autocapitalize="${restArgs.autocapitalize}"` : ''}
      ${restArgs.autofocus ? 'autofocus' : ''}
      ${restArgs.autocomplete ? `autocomplete="${restArgs.autocomplete}"` : ''}
      ${restArgs.dirname ? `dirname="${restArgs.dirname}"` : ''}
      ${restArgs.pattern ? `pattern="${restArgs.pattern}"` : ''}
      ${restArgs.list ? `list="${restArgs.list}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
      ${restArgs.dataAriaLabel ? `data-aria-label="${restArgs.dataAriaLabel}"` : ''}
      ${restArgs.clearAriaLabel ? `data-aria-label="${restArgs.clearAriaLabel}"` : ''}
      ></mdc-input>
      ${restArgs.secondButtonForFocus ? '<mdc-button>Second Button</mdc-button></div>' : ''}
    ${isForm ? '<mdc-button type="submit" size="24">Submit</mdc-button></form>' : ''}
    `,
    clearDocument: true,
  });
  if (isForm) {
    const form = componentsPage.page.locator('form');
    await form.waitFor();
    return form;
  }
  const text = componentsPage.page.locator('mdc-input');
  await text.waitFor();
  return text;
};

test.use({ viewport: { width: 800, height: 1500 } });
test('mdc-input', async ({ componentsPage, browserName }) => {
  const input = await setup({
    componentsPage,
    id: 'test-mdc-input',
    placeholder: 'Placeholder',
    maxlength: 10,
    minlength: 5,
    prefixText: 'Prefix',
    dataAriaLabel: 'prefix', // aria-label for prefix text to be read by screen reader
    leadingIcon: 'placeholder-bold',
    label: 'Label',
    helpText: 'Help Text',
    secondButtonForFocus: true,
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component', async () => {
      await expect(input).toHaveAttribute('id', 'test-mdc-input');
      await expect(input).toHaveAttribute('placeholder', 'Placeholder');
      await expect(input).toHaveAttribute('label', 'Label');
      const label = input.locator('label');
      await expect(label).toHaveText('Label');
      await expect(input).toHaveAttribute('help-text', 'Help Text');
      const helpText = input.locator('mdc-text[part="help-text"]');
      await expect(helpText).toHaveText('Help Text');
      await expect(input).toHaveAttribute('prefix-text', 'Prefix');
      await expect(input).toHaveAttribute('data-aria-label', 'prefix');
      const inputEl = input.locator('input');
      await expect(inputEl).toHaveAttribute('aria-label', 'prefix');
      await expect(input).toHaveAttribute('leading-icon', 'placeholder-bold');
      const icon = input.locator('mdc-icon');
      await expect(icon).toHaveAttribute('name', 'placeholder-bold');
    });

    await test.step('attributes required should be present on component', async () => {
      await componentsPage.setAttributes(input, { required: '' });
      await expect(input).toHaveAttribute('required', '');
      await componentsPage.removeAttribute(input, 'required');
    });

    await test.step('attributes readonly should be present on component', async () => {
      await componentsPage.setAttributes(input, { readonly: '' });
      await expect(input).toHaveAttribute('readonly');
      await componentsPage.removeAttribute(input, 'readonly');
    });

    await test.step('attributes disabled should be present on component', async () => {
      await componentsPage.setAttributes(input, { disabled: '' });
      await expect(input).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(input, 'disabled');
    });

    await test.step('attributes help-text-type should be present on component', async () => {
      for (const type of Object.values(VALIDATION)) {
        await componentsPage.setAttributes(input, { 'help-text-type': type });
        await expect(input).toHaveAttribute('help-text-type', type);
        const iconEl = input.locator('mdc-icon[part="helper-icon"]');
        const icon = getHelperIcon(type);
        if (icon) {
          await expect(iconEl).toHaveAttribute('name', icon);
        }
      }
      await componentsPage.removeAttribute(input, 'help-text-type');
    });

    await test.step('attributes size, minlength and maxlength should be present on component', async () => {
      await componentsPage.setAttributes(input, { maxlength: '10', minlength: '5', size: '10' });
      await expect(input).toHaveAttribute('maxlength', '10');
      await expect(input).toHaveAttribute('minlength', '5');
      await expect(input).toHaveAttribute('size', '10');
      await componentsPage.removeAttribute(input, 'maxlength');
      await componentsPage.removeAttribute(input, 'minlength');
      await componentsPage.removeAttribute(input, 'size');
    });

    await test.step('attribute trailing-button should be present on component', async () => {
      await componentsPage.setAttributes(input, { 'trailing-button': '', 'clear-aria-label': 'clear', value: 'test' });
      await expect(input).toHaveAttribute('trailing-button');
      const trailingButton = input.locator('mdc-button[part="trailing-button"]');
      await expect(trailingButton).toHaveAttribute('aria-label', 'clear');
      await componentsPage.removeAttribute(input, 'trailing-button');
    });

    await test.step('attribute autofocus should be present on component', async () => {
      await componentsPage.setAttributes(input, { autofocus: '' });
      await expect(input).toHaveAttribute('autofocus');
      await componentsPage.removeAttribute(input, 'autofocus');
    });

    await test.step('attribute autocapitalize should be present on component', async () => {
      await componentsPage.setAttributes(input, { autocapitalize: 'sentences' });
      await expect(input).toHaveAttribute('autocapitalize', 'sentences');
      await componentsPage.removeAttribute(input, 'autocapitalize');
    });

    await test.step('attribute autocomplete should be present on component', async () => {
      await componentsPage.setAttributes(input, { autocomplete: 'on' });
      await expect(input).toHaveAttribute('autocomplete', 'on');
      await componentsPage.removeAttribute(input, 'autocomplete');
    });

    await test.step('attribute direname should be present on component', async () => {
      await componentsPage.setAttributes(input, { direname: 'ltr' });
      await expect(input).toHaveAttribute('direname', 'ltr');
      await componentsPage.removeAttribute(input, 'direname');
    });

    await test.step('attribute direname should be present on component', async () => {
      await componentsPage.setAttributes(input, { direname: 'ltr' });
      await expect(input).toHaveAttribute('direname', 'ltr');
      await componentsPage.removeAttribute(input, 'direname');
    });

    await test.step('attribute pattern should be present on component', async () => {
      await componentsPage.setAttributes(input, { pattern: '[A-Za-z]{3}' });
      await expect(input).toHaveAttribute('pattern', '[A-Za-z]{3}');
      await componentsPage.removeAttribute(input, 'pattern');
    });

    await test.step('attribute list should be present on component', async () => {
      await componentsPage.setAttributes(input, { list: 'browsers' });
      await expect(input).toHaveAttribute('list', 'browsers');
      await componentsPage.removeAttribute(input, 'list');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const inputEl = input.locator('input');
    await test.step('component should be focusable with tab', async () => {
      await componentsPage.actionability.pressTab();
      await expect(input).toBeFocused();
      await inputEl.fill('test');
      await expect(inputEl).toHaveValue('test');
      await componentsPage.actionability.pressTab();
      await expect(input).not.toBeFocused();
    });

    await test.step('readonly component should be focusable with tab', async () => {
      await setup({
        componentsPage,
        readonly: true,
        value: 'Readonly',
        trailingButton: true,
        clearAriaLabel: 'clear',
        secondButtonForFocus: true,
      });
      const trailingButton = input.locator('mdc-button').first();
      await componentsPage.actionability.pressTab();
      await expect(input).toBeFocused();
      await expect(inputEl).toHaveValue('Readonly');
      await componentsPage.actionability.pressTab();
      await expect(input).not.toBeFocused();
      await expect(trailingButton).not.toBeFocused();
      await componentsPage.removeAttribute(input, 'readonly');
    });

    await test.step('focus on input and trailing button when value is present during interactions', async () => {
      await setup({ componentsPage, trailingButton: true, clearAriaLabel: 'clear', secondButtonForFocus: true });
      const trailingButton = input.locator('mdc-button[part="trailing-button"]');
      await componentsPage.actionability.pressTab();
      await expect(input).toBeFocused();
      await expect(trailingButton).not.toBeVisible();
      await inputEl.fill('test');
      await expect(inputEl).toHaveValue('test');
      await expect(trailingButton).toBeVisible();
      await componentsPage.actionability.pressTab();
      await expect(inputEl).not.toBeFocused();
      await expect(trailingButton).toBeFocused();
      await trailingButton.click();
      await expect(input).toBeFocused();
      await expect(inputEl).toHaveValue('');
    });

    await test.step('trailing button will not be focusable in readonly state', async () => {
      await setup({
        componentsPage,
        value: 'this is readonly data',
        readonly: true,
        trailingButton: true,
        clearAriaLabel: 'clear',
        secondButtonForFocus: true,
      });
      const trailingButton = input.locator('mdc-button[part="trailing-button"]');
      await expect(inputEl).toHaveValue('this is readonly data');
      await expect(trailingButton).not.toHaveClass('hidden');
      await componentsPage.actionability.pressTab();
      await expect(input).toBeFocused();
      await componentsPage.actionability.pressTab();
      // disabled when input is in readonly state
      await expect(trailingButton).not.toBeFocused();
      await componentsPage.removeAttribute(input, 'readonly');
      await componentsPage.removeAttribute(input, 'trailing-buton');
    });

    await test.step('component should not be focusable when disabled', async () => {
      await componentsPage.setAttributes(input, { disabled: '', value: 'Disabled' });
      await componentsPage.actionability.pressTab();
      await expect(input).not.toBeFocused();
      await expect(inputEl).toHaveValue('Disabled');
      await componentsPage.removeAttribute(input, 'disabled');
    });

    await test.step('component in form should be validated for required and maxlength when submitted', async () => {
      const form = await setup(
        {
          componentsPage,
          id: 'test-mdc-input',
          placeholder: 'Placeholder',
          required: true,
          maxlength: 10,
        },
        true,
      );

      const mdcInput = form.locator('mdc-input');
      const submitButton = form.locator('mdc-button');
      const inputEl = mdcInput.locator('input');
      await componentsPage.actionability.pressTab();
      await expect(mdcInput).toBeFocused();
      await componentsPage.page.keyboard.down('Enter');
      const validationMessage = await inputEl.evaluate(element => {
        const input = element as HTMLInputElement;
        return input.validationMessage;
      });
      if (browserName === 'webkit') {
        expect(validationMessage).toContain('Fill out this field');
      } else {
        expect(validationMessage).toContain('Please fill out this field.');
      }
      await inputEl.fill('This is a long text');
      await expect(inputEl).toHaveValue('This is a '); // maxlength is 10; truncates rest of the value.
      await submitButton.click();
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const attributes = {
      id: 'test-mdc-input',
      placeholder: 'Placeholder',
      label: 'Label',
      'help-text': 'Help Text',
    };
    const inputStickerSheet = new StickerSheet(componentsPage, 'mdc-input');

    inputStickerSheet.setAttributes(attributes);
    await inputStickerSheet.createMarkupWithCombination({
      'help-text-type': VALIDATION,
    });

    // disabled input field with value
    inputStickerSheet.setAttributes({ ...attributes, value: 'Disabled', disabled: true });
    await inputStickerSheet.createMarkupWithCombination({});

    // input with value and leading icon
    inputStickerSheet.setAttributes({ ...attributes, value: 'Leading Icon', 'leading-icon': 'placeholder-bold' });
    await inputStickerSheet.createMarkupWithCombination({});

    // input with value and prefix text
    inputStickerSheet.setAttributes({ ...attributes, value: 'Text Content', 'prefix-text': 'Prefix' });
    await inputStickerSheet.createMarkupWithCombination({});

    // input with value and trailing button
    inputStickerSheet.setAttributes({
      ...attributes,
      value: 'Clear button',
      'trailing-button': true,
      'clear-aria-label': 'clear',
    });
    await inputStickerSheet.createMarkupWithCombination({});

    // readonly input field with value
    inputStickerSheet.setAttributes({ ...attributes, value: 'Readonly value', readonly: true });
    await inputStickerSheet.createMarkupWithCombination({});

    // input that is marked required
    inputStickerSheet.setAttributes({ ...attributes, required: '', placeholder: 'Input is required' });
    await inputStickerSheet.createMarkupWithCombination({});

    // Long text label that is truncated in a small container
    inputStickerSheet.setAttributes({
      label: 'This is a large label text',
      required: '',
      placeholder: 'placeholder',
      style: 'width: 200px',
    });
    await inputStickerSheet.createMarkupWithCombination({});

    await inputStickerSheet.mountStickerSheet();
    const container = inputStickerSheet.getWrapperContainer();
    // Fix for not capturing snapshot while hovering on the input container.
    await componentsPage.page.mouse.move(0, 0);
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-input', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('input-default');
  });
});
