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
  trailingButton?: boolean;
  label?: string;
  helpText?: string;
  helpTextType?: string;
  validationMessage?: string;
  autofocus?: boolean;
  dirname?: string;
  pattern?: string;
  list?: string;
  size?: number;
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
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
      ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
      ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
      ${restArgs.validationMessage ? `validation-message="${restArgs.validationMessage}"` : ''}
      ${restArgs.trailingButton ? 'trailing-button' : true}
      ${restArgs.autofocus ? 'auto-focus-on-mount' : ''}
      ${restArgs.dirname ? `dirname="${restArgs.dirname}"` : ''}
      ${restArgs.pattern ? `pattern="${restArgs.pattern}"` : ''}
      ${restArgs.list ? `list="${restArgs.list}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
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
  const defaultSetupOptions = {
    componentsPage,
    id: 'test-mdc-password',
    placeholder: 'Placeholder',
    maxlength: 10,
    minlength: 5,
    showHideButtonAriaLabel: 'show-hide button aria-label',
    label: 'Label',
    helpText: 'Help Text',
    secondButtonForFocus: true,
  };

  let password: any;

  // Initial setup
  password = await setup(defaultSetupOptions);

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('should attributes be present in the component', async () => {
      await expect(password).toHaveAttribute('id', 'test-mdc-password');
      await expect(password).toHaveAttribute('placeholder', 'Placeholder');
      await expect(password).toHaveAttribute('label', 'Label');
      const label = password.locator('label');
      await expect(label).toHaveText('Label');
      await expect(password).toHaveAttribute('help-text', 'Help Text');
      const helpText = password.locator('mdc-text[part="help-text"]');
      await expect(helpText).toHaveText('Help Text');
      await expect(password).toHaveAttribute('show-hide-button-aria-label', 'show-hide button aria-label');
    });

    await test.step('should the required attribute be present in the component when it sets', async () => {
      await setup(defaultSetupOptions);
      await componentsPage.setAttributes(password, { required: '' });
      await expect(password).toHaveAttribute('required', '');
    });

    await test.step('should the readonly attribute be present in the component when it sets', async () => {
      await setup(defaultSetupOptions);
      await componentsPage.setAttributes(password, { readonly: '' });
      await expect(password).toHaveAttribute('readonly');
    });

    await test.step('should the disabled attribute be present in the component when it sets', async () => {
      await setup(defaultSetupOptions);
      await componentsPage.setAttributes(password, { disabled: '' });
      await expect(password).toHaveAttribute('disabled');
    });

    await test.step('should the help-text-type attribute be present in the component when it sets', async () => {
      await setup(defaultSetupOptions);
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

    await test.step('should the attributes size, minlength and maxlength be present in the component when it sets', async () => {
      await setup(defaultSetupOptions);
      await componentsPage.setAttributes(password, { maxlength: '10', minlength: '5', size: '10' });
      await expect(password).toHaveAttribute('maxlength', '10');
      await expect(password).toHaveAttribute('minlength', '5');
      await expect(password).toHaveAttribute('size', '10');
    });

    await test.step('should the show-hide-button-aria-label attribute be present in the component when it sets', async () => {
      await setup(defaultSetupOptions);
      await componentsPage.setAttributes(password, {
        'show-hide-button-aria-label': 'show/hide password',
        value: 'test',
      });
      const trailingButton = password.locator('mdc-button[part="trailing-button"]');
      await expect(trailingButton).toBeVisible();
      await expect(trailingButton).toHaveAttribute('aria-label', 'show/hide password');
    });

    await test.step('should the autofocus attribute be present in the component when it sets', async () => {
      await setup(defaultSetupOptions);
      await componentsPage.setAttributes(password, { 'auto-focus-on-mount': '' });
      await expect(password).toHaveAttribute('auto-focus-on-mount');
    });

    await test.step('should the dirname attribute be present in the component when it sets', async () => {
      await setup(defaultSetupOptions);
      await componentsPage.setAttributes(password, { dirname: 'ltr' });
      await expect(password).toHaveAttribute('dirname', 'ltr');
    });

    await test.step('should the pattern attribute be present in the component when it sets', async () => {
      await setup(defaultSetupOptions);
      await componentsPage.setAttributes(password, { pattern: '[A-Za-z]{3}' });
      await expect(password).toHaveAttribute('pattern', '[A-Za-z]{3}');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('should the component be focusable with tab', async () => {
      await setup({
        componentsPage,
        trailingButton: true,
        showHideButtonAriaLabel: 'show/hide button',
        secondButtonForFocus: true,
      });
      const showHideButton = password.locator('mdc-button[part="trailing-button"]');
      await setup(defaultSetupOptions);
      const passwordEl = password.locator('input');
      await componentsPage.actionability.pressTab();
      await expect(password).toBeFocused();
      await expect(showHideButton).not.toBeVisible();
      await passwordEl.fill('test');
      await expect(passwordEl).toHaveValue('test');
      await expect(showHideButton).toBeVisible();
      await componentsPage.actionability.pressTab();
      await expect(passwordEl).not.toBeFocused();
      await expect(showHideButton).toBeFocused();
      await showHideButton.click();
      await expect(password).toBeFocused();
    });

    await test.step('should a readonly component be focusable with tab', async () => {
      password = await setup({
        componentsPage,
        readonly: true,
        value: 'Readonly',
        showHideButtonAriaLabel: 'show/hide password',
        secondButtonForFocus: true,
      });
      const trailingButton = password.locator('mdc-button[part="trailing-button"]');
      const passwordEl = password.locator('input');
      await componentsPage.actionability.pressTab();
      await expect(password).toBeFocused();
      await expect(passwordEl).toHaveValue('Readonly');
      await componentsPage.actionability.pressTab();
      await expect(password).not.toBeFocused();
      await expect(trailingButton).not.toBeFocused();
    });

    await test.step('should the password element type toggle between text and password when the trailingbutton is clicked', async () => {
      password = await setup({
        componentsPage,
        showHideButtonAriaLabel: 'show/hide password',
        secondButtonForFocus: true,
      });
      const trailingButton = password.locator('mdc-button[part="trailing-button"]');
      const passwordEl = password.locator('input');
      await componentsPage.actionability.pressTab();
      await expect(password).toBeFocused();
      await expect(trailingButton).not.toBeVisible();
      await passwordEl.fill('test');
      await expect(passwordEl).toHaveValue('test');
      await expect(trailingButton).toBeVisible();
      await componentsPage.actionability.pressTab();
      await expect(passwordEl).not.toBeFocused();
      await expect(trailingButton).toBeFocused();
      await componentsPage.page.keyboard.press('Space');
      await expect(passwordEl).toHaveAttribute('type', 'text');
      await componentsPage.page.keyboard.press('Enter');
      await expect(passwordEl).toHaveAttribute('type', 'password');
      await componentsPage.actionability.pressTab();
      await expect(trailingButton).not.toBeFocused();
    });

    await test.step('should the trailingbutton not be focusable when it is readonly', async () => {
      password = await setup({
        componentsPage,
        value: 'this is readonly data',
        readonly: true,
        showHideButtonAriaLabel: 'show/hide password',
        secondButtonForFocus: true,
      });
      const trailingButton = password.locator('mdc-button[part="trailing-button"]');
      const passwordEl = password.locator('input');
      await expect(passwordEl).toHaveValue('this is readonly data');
      await expect(trailingButton).not.toHaveClass('hidden');
      await componentsPage.actionability.pressTab();
      await expect(password).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(trailingButton).not.toBeFocused();
    });

    await test.step('should the password element not be focusable when it is disabled', async () => {
      await setup(defaultSetupOptions);
      const passwordEl = password.locator('input');
      await componentsPage.setAttributes(password, { disabled: '', value: 'Disabled' });
      await componentsPage.actionability.pressTab();
      await expect(password).not.toBeFocused();
      await expect(passwordEl).toHaveValue('Disabled');
    });

    await test.step('should validate the form with an appropriate error message when the password exceeds the maxlength requirement', async () => {
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
        expect(validationMessage).toMatch(/Please fill (out|in) this field\./);
      }
      await passwordEl.fill('This is a long text');
      await expect(passwordEl).toHaveValue('This is a ');
      await submitButton.click();
    });

    await test.step('should validate the form with an appropriate error message when the password fails to meet the pattern requirement', async () => {
      const form = await setup(
        {
          componentsPage,
          id: 'test-mdc-password',
          placeholder: 'Enter the password',
          required: true,
          pattern: '^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$',
        },
        true,
      );
      const mdcPassword = form.locator('mdc-password');
      const submitButton = form.locator('mdc-button[type="submit"]');
      const passwordEl = mdcPassword.locator('input');

      await componentsPage.actionability.pressTab();
      await expect(passwordEl).toBeFocused();
      await passwordEl.fill('AaBB');
      await expect(passwordEl).toHaveValue('AaBB');
      await form.evaluate((formEl: HTMLFormElement) => {
        formEl.addEventListener('submit', e => e.preventDefault());
      });
      await submitButton.click();

      const validationMessage = await passwordEl.evaluate(element => (element as HTMLInputElement).validationMessage);
      expect([
        'Please match the format requested.',
        'Match the requested format',
        'Please match the requested format.',
      ]).toContain(validationMessage);
      await passwordEl.fill('AaBB11');
      await expect(passwordEl).toHaveValue('AaBB11');
      await submitButton.click();
      const validationMessage2 = await passwordEl.evaluate(element => (element as HTMLInputElement).validationMessage);
      expect(validationMessage2).toBeFalsy();
    });

    await test.step('should validate the form with a custom message when minlength is not met and validationMessage is provided', async () => {
      const form = await setup(
        {
          componentsPage,
          id: 'test-mdc-password',
          placeholder: 'Enter the password',
          required: true,
          minlength: 5,
          maxlength: 10,
          validationMessage: 'Please enter a valid password',
        },
        true,
      );
      const mdcPassword = form.locator('mdc-password');
      const submitButton = form.locator('mdc-button[type="submit"]');
      const passwordEl = mdcPassword.locator('input');

      await componentsPage.actionability.pressTab();
      await expect(passwordEl).toBeFocused();
      await passwordEl.fill('Hell');
      await expect(passwordEl).toHaveValue('Hell');
      await form.evaluate((formEl: HTMLFormElement) => {
        formEl.addEventListener('submit', e => e.preventDefault());
      });
      await submitButton.click();

      const validationMessage = await passwordEl.evaluate(element => (element as HTMLInputElement).validationMessage);
      expect(validationMessage).toContain('Please enter a valid password');
    });

    await test.step('should validate the form with a browser native message when minlength is not met and validationMessage is not provided', async () => {
      const form = await setup(
        {
          componentsPage,
          id: 'test-mdc-password',
          placeholder: 'Enter the password',
          required: true,
          minlength: 5,
          maxlength: 10,
        },
        true,
      );
      const mdcPassword = form.locator('mdc-password');
      const passwordEl = mdcPassword.locator('input');

      await componentsPage.actionability.pressTab();
      await expect(passwordEl).toBeFocused();
      await passwordEl.fill('T3$t');
      await expect(passwordEl).toHaveValue('T3$t');
      await form.evaluate((formEl: HTMLFormElement) => {
        formEl.addEventListener('submit', e => e.preventDefault());
      });
      await componentsPage.page.keyboard.press('Enter');

      const validationMessage = await passwordEl.evaluate(element => (element as HTMLInputElement).validationMessage);
      expect([
        'Please lengthen this text to 5 characters or more (you are currently using 4 characters).',
        'Please use at least 5 characters (you are currently using 4 characters).',
        'Use at least 5 characters',
      ]).toContain(validationMessage);

      await passwordEl.fill('T3$t@123');
      await expect(passwordEl).toHaveValue('T3$t@123');
      await componentsPage.page.keyboard.press('Enter');
      const validationMessage2 = await passwordEl.evaluate(element => (element as HTMLInputElement).validationMessage);
      expect(validationMessage2).toBeFalsy();
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

    await inputStickerSheet.createMarkupWithCombination({});

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
