/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { getHelperIcon } from '../formfieldwrapper/formfieldwrapper.utils';
import type { AutoCapitalizeType } from '../input/input.types';

import type { AutoCompleteType, WrapType } from './textarea.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  value?: string;
  name?: string;
  rows?: number;
  cols?: number;
  wrap?: WrapType;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  maxlength?: number;
  minlength?: number;
  maxCharacterLimit?: number;
  label?: string;
  helpText?: string;
  helpTextType?: string;
  autocapitalize?: AutoCapitalizeType;
  autofocus?: boolean;
  autocomplete?: AutoCompleteType;
  dirname?: string;
  dataAriaLabel?: string;
  secondButtonForFocus?: boolean;
};

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    ${isForm ? '<form>' : ''}
    ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
      <mdc-textarea
      id="${restArgs.id}"
      ${restArgs.value ? `value="${restArgs.value}"` : ''}
      ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
      ${restArgs.required ? 'required' : ''}
      ${restArgs.readonly ? 'readonly' : ''}
      ${restArgs.disabled ? 'disabled' : ''}
      ${restArgs.maxlength ? `maxlength="${restArgs.maxlength}"` : ''}
      ${restArgs.minlength ? `minlength="${restArgs.minlength}"` : ''}
      ${restArgs.rows ? `rows="${restArgs.rows}"` : ''}
      ${restArgs.cols ? `cols="${restArgs.cols}"` : ''}
      ${restArgs.wrap ? `wrap="${restArgs.wrap}"` : ''}
      ${restArgs.name ? `name="${restArgs.name}"` : ''}
      ${restArgs.maxCharacterLimit ? `max-character-limit="${restArgs.maxCharacterLimit}"` : ''}
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
      ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
      ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
      ${restArgs.autocapitalize ? `autocapitalize="${restArgs.autocapitalize}"` : ''}
      ${restArgs.autofocus ? 'autofocus' : ''}
      ${restArgs.autocomplete ? `autocomplete="${restArgs.autocomplete}"` : ''}
      ${restArgs.dirname ? `dirname="${restArgs.dirname}"` : ''}
      ${restArgs.dataAriaLabel ? `data-aria-label="${restArgs.dataAriaLabel}"` : ''}
      ></mdc-textarea>
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
  const textarea = componentsPage.page.locator('mdc-textarea');
  await textarea.waitFor();
  return textarea;
};

test.use({ viewport: { width: 800, height: 1200 } });
test('mdc-textarea', async ({ componentsPage }) => {
  const mdcTextarea = await setup({
    componentsPage,
    id: 'test-mdc-textarea',
    placeholder: 'Placeholder',
    label: 'Label',
    helpText: 'Help Text',
    secondButtonForFocus: true,
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const textareaElement = mdcTextarea.locator('textarea');
    await test.step('component should be focusable with tab', async () => {
      await componentsPage.actionability.pressTab();
      await expect(mdcTextarea).toBeFocused();
      await textareaElement.fill('test');
      await expect(textareaElement).toHaveValue('test');
      await componentsPage.actionability.pressTab();
      await expect(mdcTextarea).not.toBeFocused();
    });

    await test.step('readonly component should be focusable with tab but not editable', async () => {
      await setup({ componentsPage, value: 'Readonly', readonly: true, secondButtonForFocus: true });
      await componentsPage.actionability.pressTab();
      await expect(mdcTextarea).toBeFocused();
      await expect(textareaElement).toHaveValue('Readonly');
      await textareaElement.press('A');
      await expect(textareaElement).toHaveValue('Readonly');
      await componentsPage.actionability.pressTab();
      await expect(mdcTextarea).not.toBeFocused();
      await componentsPage.removeAttribute(mdcTextarea, 'readonly');
    });

    await test.step('component should not be focusable when disabled', async () => {
      await setup({ componentsPage, disabled: true, value: 'Disabled' });
      await componentsPage.actionability.pressTab();
      await expect(mdcTextarea).not.toBeFocused();
      await expect(textareaElement).toHaveValue('Disabled');
      await componentsPage.removeAttribute(mdcTextarea, 'disabled');
    });

    await test.step('component should have character counter when max-character-limit is set', async () => {
      await componentsPage.setAttributes(mdcTextarea, { 'max-character-limit': '10', value: '' });
      const characterCounter = mdcTextarea.locator('mdc-text[part="character-counter"]');
      await expect(characterCounter).toHaveText('00/10');
      await textareaElement.fill('This is a long text');
      await expect(textareaElement).toHaveValue('This is a long text');
      await expect(characterCounter).toHaveText('19/10');
      await componentsPage.removeAttribute(mdcTextarea, 'max-character-limit');
    });

    await test.step('component in form should be validated for required and maxlength when submitted', async () => {
      const form = await setup(
        {
          componentsPage,
          id: 'test-mdc-textarea',
          placeholder: 'Placeholder',
          required: true,
          maxlength: 10,
        },
        true,
      );

      const submitButton = form.locator('mdc-button[type="submit"]');
      await submitButton.click();
      const validationMessage = await textareaElement.evaluate(element => {
        const textarea = element as HTMLTextAreaElement;
        return textarea.validationMessage;
      });
      expect(validationMessage).toMatch(/fill (out|in) this field/i);
      await textareaElement.fill('This is a long text');
      await expect(textareaElement).toHaveValue('This is a ');
      await submitButton.click();
    });

    await test.step('component in form should be validated for max character limit', async () => {
      const form = await setup(
        {
          componentsPage,
          id: 'test-mdc-textarea',
          placeholder: 'Placeholder',
          required: true,
          maxCharacterLimit: 11,
          helpText: 'Input must not exceed 11 characters',
          helpTextType: 'error',
          value: 'This is a long text',
        },
        true,
      );

      const submitButton = form.locator('mdc-button[type="submit"]');
      await submitButton.click();
      const validationMessage = await textareaElement.evaluate(element => {
        const textarea = element as HTMLTextAreaElement;
        return textarea.validationMessage;
      });

      expect(validationMessage).toContain('Input must not exceed 11 characters');

      await textareaElement.fill('short text');
      await componentsPage.removeAttribute(mdcTextarea, 'help-text-type');
      await componentsPage.removeAttribute(mdcTextarea, 'help-text');
      await expect(textareaElement).toHaveValue('short text');
      expect(validationMessage).toContain('');
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const mdcTextarea = await setup({
      componentsPage,
      id: 'test-mdc-textarea',
      placeholder: 'Placeholder',
      label: 'Label',
      helpText: 'Help Text',
    });

    await test.step('attributes should be present on component', async () => {
      await expect(mdcTextarea).toHaveAttribute('placeholder', 'Placeholder');
      await expect(mdcTextarea).toHaveAttribute('label', 'Label');
      const label = mdcTextarea.locator('label');
      await expect(label).toHaveText('Label');
      await expect(mdcTextarea).toHaveAttribute('help-text', 'Help Text');
      const helpText = mdcTextarea.locator('mdc-text[part="help-text"]');
      await expect(helpText).toHaveText('Help Text');
    });

    await test.step('attributes rows should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { rows: '5' });
      await expect(mdcTextarea).toHaveAttribute('rows', '5');
      await componentsPage.removeAttribute(mdcTextarea, 'rows');
    });

    await test.step('attributes cols should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { cols: '5' });
      await expect(mdcTextarea).toHaveAttribute('cols', '5');
      await componentsPage.removeAttribute(mdcTextarea, 'cols');
    });

    await test.step('attributes max-character-limit should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { 'max-character-limit': '100' });
      await expect(mdcTextarea).toHaveAttribute('max-character-limit', '100');
      const characterCounter = mdcTextarea.locator('mdc-text[part="character-counter"]');
      await expect(characterCounter).toHaveText('00/100');
      await componentsPage.removeAttribute(mdcTextarea, 'max-character-counter');
    });

    await test.step('attributes wrap should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { wrap: 'hard' });
      await expect(mdcTextarea).toHaveAttribute('wrap', 'hard');
      await componentsPage.removeAttribute(mdcTextarea, 'wrap');
    });

    await test.step('attributes required should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { required: '' });
      await expect(mdcTextarea).toHaveAttribute('required', '');
      await componentsPage.removeAttribute(mdcTextarea, 'required');
    });

    await test.step('attributes readonly should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { readonly: '' });
      await expect(mdcTextarea).toHaveAttribute('readonly');
      await componentsPage.removeAttribute(mdcTextarea, 'readonly');
    });

    await test.step('attributes disabled should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { disabled: '' });
      await expect(mdcTextarea).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(mdcTextarea, 'disabled');
    });

    await test.step('attributes help-text-type should be present on component', async () => {
      for (const type of Object.values(VALIDATION)) {
        await componentsPage.setAttributes(mdcTextarea, { 'help-text-type': type });
        await expect(mdcTextarea).toHaveAttribute('help-text-type', type);
        const iconEl = mdcTextarea.locator('mdc-icon[part="helper-icon"]');
        const icon = getHelperIcon(type);
        if (icon) {
          await expect(iconEl).toHaveAttribute('name', icon);
        }
      }
      await componentsPage.removeAttribute(mdcTextarea, 'help-text-type');
    });

    await test.step('minlength and maxlength should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { maxlength: '10', minlength: '5' });
      await expect(mdcTextarea).toHaveAttribute('maxlength', '10');
      await expect(mdcTextarea).toHaveAttribute('minlength', '5');
      await componentsPage.removeAttribute(mdcTextarea, 'maxlength');
      await componentsPage.removeAttribute(mdcTextarea, 'minlength');
    });

    await test.step('attribute autofocus should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { autofocus: '' });
      await expect(mdcTextarea).toHaveAttribute('autofocus');
      await componentsPage.removeAttribute(mdcTextarea, 'autofocus');
    });

    await test.step('attribute autocapitalize should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { autocapitalize: 'sentences' });
      await expect(mdcTextarea).toHaveAttribute('autocapitalize', 'sentences');
      await componentsPage.removeAttribute(mdcTextarea, 'autocapitalize');
    });

    await test.step('attribute autocomplete should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { autocomplete: 'on' });
      await expect(mdcTextarea).toHaveAttribute('autocomplete', 'on');
      await componentsPage.removeAttribute(mdcTextarea, 'autocomplete');
    });

    await test.step('attribute dirname should be present on component', async () => {
      await componentsPage.setAttributes(mdcTextarea, { dirname: 'ltr' });
      await expect(mdcTextarea).toHaveAttribute('dirname', 'ltr');
      await componentsPage.removeAttribute(mdcTextarea, 'dirname');
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const attributes = {
      id: 'test-mdc-textarea',
      placeholder: 'Placeholder',
      label: 'Label',
      'help-text': 'Help Text',
      rows: 3,
      cols: 12,
    };
    const textareaStickerSheet = new StickerSheet(componentsPage, 'mdc-textarea');

    textareaStickerSheet.setAttributes(attributes);
    await textareaStickerSheet.createMarkupWithCombination({
      'help-text-type': VALIDATION,
    });

    // textarea field with rows set to 7 & cols to 30
    textareaStickerSheet.setAttributes({ ...attributes, rows: 5, cols: 30 });
    await textareaStickerSheet.createMarkupWithCombination({});

    // textarea field with max-character-limit set to 100
    textareaStickerSheet.setAttributes({ ...attributes, 'max-character-limit': 100, value: 'Example Text', cols: 30 });
    await textareaStickerSheet.createMarkupWithCombination({});

    // textarea field with max-character-limit set to 10 & value exceeding the limit
    textareaStickerSheet.setAttributes({
      ...attributes,
      'max-character-limit': 10,
      value: 'This is a long text',
      'help-text': 'Input must not exceed 10 characters',
      'help-text-type': 'error',
      cols: 30,
    });
    await textareaStickerSheet.createMarkupWithCombination({});

    // disabled textarea field with value
    textareaStickerSheet.setAttributes({ ...attributes, value: 'Disabled', disabled: '', cols: 30 });
    await textareaStickerSheet.createMarkupWithCombination({});

    // readonly textarea field with value
    textareaStickerSheet.setAttributes({ ...attributes, value: 'Readonly value', readonly: '', cols: 30 });
    await textareaStickerSheet.createMarkupWithCombination({});

    // textarea that is marked required
    textareaStickerSheet.setAttributes({
      ...attributes,
      required: 'required',
      placeholder: 'Textarea is required',
      cols: 30,
    });
    await textareaStickerSheet.createMarkupWithCombination({});

    await textareaStickerSheet.mountStickerSheet();
    const container = textareaStickerSheet.getWrapperContainer();

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-textarea', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('textarea-default');
  });
});
