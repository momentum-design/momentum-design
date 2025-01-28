/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

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
  form?: string;
  list?: string;
  size?: number;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
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
      ${restArgs.form ? `form="${restArgs.form}"` : ''}
      ${restArgs.list ? `list="${restArgs.list}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
      ></mdc-input>
    `,
    clearDocument: true,
  });
  const text = componentsPage.page.locator('mdc-input');
  await text.waitFor();
  return text;
};

test.use({ viewport: { width: 800, height: 1500 } });
test('mdc-input', async ({ componentsPage }) => {
  const input = await setup({
    componentsPage,
    id: 'test-mdc-input',
    placeholder: 'Placeholder',
    maxlength: 10,
    minlength: 5,
    prefixText: 'Prefix',
    leadingIcon: 'placeholder-bold',
    label: 'Label',
    helpText: 'Help Text',
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component', async () => {
      await expect(input).toHaveAttribute('id', 'test-mdc-input');
      await expect(input).toHaveAttribute('placeholder', 'Placeholder');
      await expect(input).toHaveAttribute('label', 'Label');
      await expect(input).toHaveAttribute('help-text', 'Help Text');
      await expect(input).toHaveAttribute('prefix-text', 'Prefix');
      await expect(input).toHaveAttribute('leading-icon', 'placeholder-bold');
    });

    await test.step('attributes required should be present on component', async () => {
      await componentsPage.setAttributes(input, { required: '' });
      await expect(input).toHaveAttribute('required');
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
      await componentsPage.setAttributes(input, { 'trailing-button': '' });
      await expect(input).toHaveAttribute('trailing-button');
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

    await test.step('attribute form should be present on component', async () => {
      await componentsPage.setAttributes(input, { form: 'form1' });
      await expect(input).toHaveAttribute('form', 'form1');
      await componentsPage.removeAttribute(input, 'form');
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

    await inputStickerSheet.setAttributes(attributes);
    await inputStickerSheet.createMarkupWithCombination({
      'help-text-type': VALIDATION,
    });

    // disabled input field with value
    await inputStickerSheet.setAttributes({ ...attributes,
      value: 'Disabled',
      disabled: true,
    });
    await inputStickerSheet.createMarkupWithCombination({});

    // input with value and leading icon
    await inputStickerSheet.setAttributes({ ...attributes,
      value: 'Leading Icon',
      'leading-icon': 'placeholder-bold',
    });
    await inputStickerSheet.createMarkupWithCombination({});

    // input with value and prefix text
    await inputStickerSheet.setAttributes({ ...attributes,
      value: 'Text Content',
      'prefix-text': 'Prefix',
    });
    await inputStickerSheet.createMarkupWithCombination({});

    // input with value and trailing button
    await inputStickerSheet.setAttributes({ ...attributes,
      value: 'Clear button',
      'trailing-button': true,
    });
    await inputStickerSheet.createMarkupWithCombination({});

    // readonly input field with value
    await inputStickerSheet.setAttributes({ ...attributes,
      value: 'Readonly value',
      readonly: true,
    });
    await inputStickerSheet.createMarkupWithCombination({});
    await inputStickerSheet.mountStickerSheet();
    const container = await inputStickerSheet.getWrapperContainer();

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

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('component should fire callback x when clicking on it', async () => {
        // TODO: add test here
      });
    });

    await test.step('focus', async () => {
      await test.step('component should be focusable with tab', async () => {
        // TODO: add test here
      });

      // add additional tests here, like tabbing through several parts of the component
    });

    await test.step('keyboard', async () => {
      await test.step('component should fire callback x when pressing y', async () => {
        // TODO: add test here
      });
    });
  });
});
