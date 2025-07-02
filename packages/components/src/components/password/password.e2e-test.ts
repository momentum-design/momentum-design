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
  autofocus?: boolean;
  dirname?: string;
  pattern?: string;
  list?: string;
  size?: number;
  dataAriaLabel?: string;
  showHideButtonAriaLabel?: string;
  secondButtonForFocus?: boolean;
};

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    ${isForm ? '<form>' : ''}
    ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
      <mdc-password
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
      ${restArgs.autofocus ? 'autofocus' : ''}
      ${restArgs.dirname ? `dirname="${restArgs.dirname}"` : ''}
      ${restArgs.pattern ? `pattern="${restArgs.pattern}"` : ''}
      ${restArgs.list ? `list="${restArgs.list}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
      ${restArgs.dataAriaLabel ? `data-aria-label="${restArgs.dataAriaLabel}"` : ''}
      ${restArgs.showHideButtonAriaLabel ? `show-hide-button-aria-label="${restArgs.showHideButtonAriaLabel}"` : ''}
      ></mdc-password>
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
  const text = componentsPage.page.locator('mdc-password');
  await text.waitFor();
  return text;
};

test.use({ viewport: { width: 800, height: 1500 } });
test('mdc-password', async ({ componentsPage, browserName }) => {
  const password = await setup({
    componentsPage,
    id: 'test-mdc-password',
    placeholder: 'Placeholder',
    maxlength: 10,
    minlength: 5,
    prefixText: 'Prefix',
    dataAriaLabel: 'prefix',
    showHideButtonAriaLabel: 'show-hide button aria-label',
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
      await expect(password).toHaveAttribute('id', 'test-mdc-password');
      await expect(password).toHaveAttribute('placeholder', 'Placeholder');
      await expect(password).toHaveAttribute('label', 'Label');
      const label = password.locator('label');
      await expect(label).toHaveText('Label');
      await expect(password).toHaveAttribute('help-text', 'Help Text');
      const helpText = password.locator('mdc-text[part="help-text"]');
      await expect(helpText).toHaveText('Help Text');
      await expect(password).toHaveAttribute('prefix-text', 'Prefix');
      await expect(password).toHaveAttribute('data-aria-label', 'prefix');
      await expect(password).toHaveAttribute('show-hide-button-aria-label', 'show-hide button aria-label');
      const passwordEl = password.locator('input');
      await expect(passwordEl).toHaveAttribute('aria-label', 'prefix');
      await expect(password).toHaveAttribute('leading-icon', 'placeholder-bold');
      const icon = password.locator('mdc-icon');
      await expect(icon).toHaveAttribute('name', 'placeholder-bold');
    });

    await test.step('attributes required should be present on component', async () => {
      await componentsPage.setAttributes(password, { required: '' });
      await expect(password).toHaveAttribute('required', '');
      await componentsPage.removeAttribute(password, 'required');
    });

    await test.step('attributes readonly should be present on component', async () => {
      await componentsPage.setAttributes(password, { readonly: '' });
      await expect(password).toHaveAttribute('readonly');
      await componentsPage.removeAttribute(password, 'readonly');
    });

    await test.step('attributes disabled should be present on component', async () => {
      await componentsPage.setAttributes(password, { disabled: '' });
      await expect(password).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(password, 'disabled');
    });

    await test.step('attributes help-text-type should be present on component', async () => {
      for (const type of Object.values(VALIDATION)) {
        await componentsPage.setAttributes(password, { 'help-text-type': type });
        await expect(password).toHaveAttribute('help-text-type', type);
        const iconEl = password.locator('mdc-icon[part="helper-icon"]');
        const icon = getHelperIcon(type);
        if (icon) {
          await expect(iconEl).toHaveAttribute('name', icon);
        }
      }
      await componentsPage.removeAttribute(password, 'help-text-type');
    });

    await test.step('attributes size, minlength and maxlength should be present on component', async () => {
      await componentsPage.setAttributes(password, { maxlength: '10', minlength: '5', size: '10' });
      await expect(password).toHaveAttribute('maxlength', '10');
      await expect(password).toHaveAttribute('minlength', '5');
      await expect(password).toHaveAttribute('size', '10');
      await componentsPage.removeAttribute(password, 'maxlength');
      await componentsPage.removeAttribute(password, 'minlength');
      await componentsPage.removeAttribute(password, 'size');
    });

    await test.step('attribute trailing-button should be present on component', async () => {
      await componentsPage.setAttributes(password, {
        'trailing-button': '',
        'show-hide-button-aria-label': 'show/hide password',
        value: 'test',
      });
      await expect(password).toHaveAttribute('trailing-button');
      const trailingButton = password.locator('mdc-button[part="trailing-button"]');
      await expect(trailingButton).toHaveAttribute('aria-label', 'show/hide password');
      await componentsPage.removeAttribute(password, 'trailing-button');
    });

    await test.step('attribute autofocus should be present on component', async () => {
      await componentsPage.setAttributes(password, { autofocus: '' });
      await expect(password).toHaveAttribute('autofocus');
      await componentsPage.removeAttribute(password, 'autofocus');
    });

    await test.step('attribute autocapitalize should be present on component', async () => {
      await componentsPage.setAttributes(password, { autocapitalize: 'sentences' });
      await expect(password).toHaveAttribute('autocapitalize', 'sentences');
      await componentsPage.removeAttribute(password, 'autocapitalize');
    });

    await test.step('attribute autocomplete should be present on component', async () => {
      await componentsPage.setAttributes(password, { autocomplete: 'on' });
      await expect(password).toHaveAttribute('autocomplete', 'on');
      await componentsPage.removeAttribute(password, 'autocomplete');
    });

    await test.step('attribute direname should be present on component', async () => {
      await componentsPage.setAttributes(password, { direname: 'ltr' });
      await expect(password).toHaveAttribute('direname', 'ltr');
      await componentsPage.removeAttribute(password, 'direname');
    });

    await test.step('attribute direname should be present on component', async () => {
      await componentsPage.setAttributes(password, { direname: 'ltr' });
      await expect(password).toHaveAttribute('direname', 'ltr');
      await componentsPage.removeAttribute(password, 'direname');
    });

    await test.step('attribute pattern should be present on component', async () => {
      await componentsPage.setAttributes(password, { pattern: '[A-Za-z]{3}' });
      await expect(password).toHaveAttribute('pattern', '[A-Za-z]{3}');
      await componentsPage.removeAttribute(password, 'pattern');
    });

    await test.step('attribute list should be present on component', async () => {
      await componentsPage.setAttributes(password, { list: 'browsers' });
      await expect(password).toHaveAttribute('list', 'browsers');
      await componentsPage.removeAttribute(password, 'list');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const passwordEl = password.locator('input');
    await test.step('component should be focusable with tab', async () => {
      await componentsPage.actionability.pressTab();
      await expect(password).toBeFocused();
      await passwordEl.fill('test');
      await expect(passwordEl).toHaveValue('test');
      const showHideButton = password.locator('mdc-button[part="trailing-button"]');
      const isShowHideButtonVisible = await showHideButton.isVisible();      
      await componentsPage.actionability.pressTab();
      if (isShowHideButtonVisible) {
        await expect(showHideButton).toBeFocused();
        await componentsPage.actionability.pressTab();
      }
      await expect(password).not.toBeFocused();
    });

    await test.step('readonly component should be focusable with tab', async () => {
      await setup({
        componentsPage,
        readonly: true,
        value: 'Readonly',
        trailingButton: true,
        showHideButtonAriaLabel: 'show/hide password',
        secondButtonForFocus: true,
      });
      const trailingButton = password.locator('mdc-button').first();
      await componentsPage.actionability.pressTab();
      await expect(password).toBeFocused();
      await expect(passwordEl).toHaveValue('Readonly');
      await componentsPage.actionability.pressTab();
      await expect(password).not.toBeFocused();
      await expect(trailingButton).not.toBeFocused();
      await componentsPage.removeAttribute(password, 'readonly');
    });

    await test.step('focus on input and trailing button when value is present during interactions', async () => {
      await setup({
        componentsPage,
        trailingButton: true,
        showHideButtonAriaLabel: 'show/hide password',
        secondButtonForFocus: true,
      });
      const trailingButton = password.locator('mdc-button[part="trailing-button"]');
      await componentsPage.actionability.pressTab();
      await expect(password).toBeFocused();
      await expect(trailingButton).not.toBeVisible();
      await passwordEl.fill('test');
      await expect(passwordEl).toHaveValue('test');
      await expect(trailingButton).toBeVisible();
      await componentsPage.actionability.pressTab();
      await expect(passwordEl).not.toBeFocused();
      await expect(trailingButton).toBeFocused();
      await trailingButton.click();
      await expect(passwordEl).toHaveAttribute('type', 'text');
      await trailingButton.click();
      await expect(passwordEl).toHaveAttribute('type', 'password');
      await componentsPage.actionability.pressTab();
      await expect(trailingButton).not.toBeFocused();
      await componentsPage.removeAttribute(password, 'trailing-button');
    });

    await test.step('trailing button will not be focusable in readonly state', async () => {
      await setup({
        componentsPage,
        value: 'this is readonly data',
        readonly: true,
        trailingButton: true,
        showHideButtonAriaLabel: 'show/hide password',
        secondButtonForFocus: true,
      });
      const trailingButton = password.locator('mdc-button[part="trailing-button"]');
      await expect(passwordEl).toHaveValue('this is readonly data');
      await expect(trailingButton).not.toHaveClass('hidden');
      await componentsPage.actionability.pressTab();
      await expect(password).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(trailingButton).not.toBeFocused();
      await componentsPage.removeAttribute(password, 'readonly');
      await componentsPage.removeAttribute(password, 'trailing-buton');
    });

    await test.step('component should not be focusable when disabled', async () => {
      await componentsPage.setAttributes(password, { disabled: '', value: 'Disabled' });
      await componentsPage.actionability.pressTab();
      await expect(password).not.toBeFocused();
      await expect(passwordEl).toHaveValue('Disabled');
      await componentsPage.removeAttribute(password, 'disabled');
    });

    await test.step('component in form should be validated for required and maxlength when submitted', async () => {
      const form = await setup(
        {
          componentsPage,
          id: 'test-mdc-password',
          placeholder: 'Placeholder',
          required: true,
          maxlength: 10,
        },
        true,
      );

      const mdcpassword = form.locator('mdc-password');
      const submitButton = form.locator('mdc-button[type="submit"]');
      const passwordEl = mdcpassword.locator('input');
      await componentsPage.actionability.pressTab();
      await expect(mdcpassword).toBeFocused();
      await componentsPage.page.keyboard.down('Enter');
      const validationMessage = await passwordEl.evaluate(element => {
        const password = element as HTMLInputElement;
        return password.validationMessage;
      });
      if (browserName === 'webkit') {
        expect(validationMessage).toContain('Fill out this field');
      } else {
        expect(
          validationMessage === 'Please fill out this field.' || validationMessage === 'Please fill in this field.',
        ).toBeTruthy();
      }
      await passwordEl.fill('This is a long text');
      await expect(passwordEl).toHaveValue('This is a ');
      await submitButton.click();
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const attributes = {
      id: 'test-mdc-password',
      placeholder: 'Placeholder',
      label: 'Label',
      'help-text': 'Help Text',
      'show-hide-button-aria-label': 'show/hide password',
    };
    const inputStickerSheet = new StickerSheet(componentsPage, 'mdc-password');

    inputStickerSheet.setAttributes(attributes);
    await inputStickerSheet.createMarkupWithCombination({
      'help-text-type': VALIDATION,
    });

    inputStickerSheet.setAttributes({ ...attributes, value: 'Disabled', disabled: true });
    await inputStickerSheet.createMarkupWithCombination({});

    inputStickerSheet.setAttributes({ ...attributes, value: 'Leading Icon', 'leading-icon': 'placeholder-bold' });
    await inputStickerSheet.createMarkupWithCombination({});

    inputStickerSheet.setAttributes({ ...attributes, value: 'Text Content', 'prefix-text': 'Prefix' });
    await inputStickerSheet.createMarkupWithCombination({});

    inputStickerSheet.setAttributes({
      ...attributes,
      value: 'Show/Hide button',
    });
    await inputStickerSheet.createMarkupWithCombination({});

    inputStickerSheet.setAttributes({ 
      ...attributes, 
      value: 'Readonly value', 
      readonly: true,
    });
    await inputStickerSheet.createMarkupWithCombination({});

    inputStickerSheet.setAttributes({ 
      ...attributes, 
      required: '', 
      placeholder: 'Password is required',
    });
    await inputStickerSheet.createMarkupWithCombination({});

    inputStickerSheet.setAttributes({
      ...attributes,
      label: 'This is a large label text',
      required: '',
      placeholder: 'placeholder',
      style: 'width: 200px',
    });
    await inputStickerSheet.createMarkupWithCombination({});

    await inputStickerSheet.mountStickerSheet();
    const container = inputStickerSheet.getWrapperContainer();
    await componentsPage.page.mouse.move(0, 0);
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-password', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('password-default');
  });
});
