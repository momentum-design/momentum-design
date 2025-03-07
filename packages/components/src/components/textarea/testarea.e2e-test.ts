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
  requiredLabel?: string;
  readonly?: boolean;
  disabled?: boolean;
  maxlength?: number;
  minlength?: number;
  maxCharacterLimit?: number;
  clearButton?: boolean;
  label?: string;
  helpText?: string;
  helpTextType?: string;
  autocapitalize?: AutoCapitalizeType;
  autofocus?: boolean;
  autocomplete?: AutoCompleteType;
  dirname?: string;
  dataAriaLabel?: string;
  clearAriaLabel?: string;
};

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    ${isForm ? '<form>' : ''}
      <mdc-textarea
      id="${restArgs.id}"
      ${restArgs.value ? `value="${restArgs.value}"` : ''}
      ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
      ${restArgs.requiredLabel ? `required-label="${restArgs.requiredLabel}"` : ''}
      ${restArgs.readonly ? 'readonly' : ''}
      ${restArgs.disabled ? 'disabled' : ''}
      ${restArgs.maxlength ? `maxlength="${restArgs.maxlength}"` : ''}
      ${restArgs.minlength ? `minlength="${restArgs.minlength}"` : ''}
      ${restArgs.maxCharacterLimit ? `max-character-limit="${restArgs.maxCharacterLimit}"` : ''}
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
      ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
      ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
      ${restArgs.clearButton ? 'clear-button' : ''}
      ${restArgs.autocapitalize ? `autocapitalize="${restArgs.autocapitalize}"` : ''}
      ${restArgs.autofocus ? 'autofocus' : ''}
      ${restArgs.autocomplete ? `autocomplete="${restArgs.autocomplete}"` : ''}
      ${restArgs.dirname ? `dirname="${restArgs.dirname}"` : ''}
      ${restArgs.dataAriaLabel ? `data-aria-label="${restArgs.dataAriaLabel}"` : ''}
      ${restArgs.clearAriaLabel ? `data-aria-label="${restArgs.clearAriaLabel}"` : ''}
      ></mdc-textarea>
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

test.use({ viewport: { width: 800, height: 1500 } });
test('mdc-textarea', async ({ componentsPage, browserName }) => {
  const textarea = await setup({
    componentsPage,
    id: 'test-mdc-textarea',
    placeholder: 'Placeholder',
    label: 'Label',
    helpText: 'Help Text',
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const textareaElement = await textarea.locator('textarea');
    await test.step('component should be focusable with tab', async () => {
      await componentsPage.actionability.pressTab();
      await expect(textarea).toBeFocused();
      await componentsPage.actionability.pressTab();
      await componentsPage.actionability.pressTab();
      await expect(textarea).not.toBeFocused();
    });

    await test.step('readonly component should be focusable with tab but not editable', async () => {
      await componentsPage.setAttributes(textarea, {
        readonly: '',
        value: 'Readonly',
        'clear-button': '',
        'clear-aria-label': 'clear',
      });
      const trailingButton = textarea.locator('mdc-button').first();
      await componentsPage.actionability.pressTab();
      await expect(textarea).toBeFocused();
      await expect(textareaElement).toHaveValue('Readonly');
      await textareaElement.fill('test');
      await expect(textareaElement).toHaveValue('Readonly');
      if (browserName !== 'firefox') {
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressTab();
        await expect(textarea).not.toBeFocused();
        await expect(trailingButton).not.toBeFocused();
      }
      await componentsPage.removeAttribute(textarea, 'readonly');
    });

    await test.step('focus on textarea and clear button when value is present during interactions', async () => {
      await componentsPage.setAttributes(textarea, { 'clear-button': '', value: '', 'clear-aria-label': 'clear' });
      const clearButton = textarea.locator('mdc-button[part="clear-button"]');
      await componentsPage.actionability.pressTab();
      await expect(textarea).toBeFocused();
      await expect(clearButton).toHaveClass('hidden');
      await textareaElement.fill('test');
      await expect(textareaElement).toHaveValue('test');
      await expect(clearButton).not.toHaveClass('hidden');
      await componentsPage.actionability.pressTab();
      await componentsPage.actionability.pressTab();
      await expect(textareaElement).not.toBeFocused();
      await expect(clearButton).toBeFocused();
      await clearButton.click();
      await expect(textarea).toBeFocused();
      await expect(textareaElement).toHaveValue('');
    });

    await test.step('clear button will not be focusable in readonly state', async () => {
      await componentsPage.setAttributes(textarea, {
        value: 'this is readonly data',
        readonly: '',
      });
      await componentsPage.actionability.releaseFocus(textarea);
      const clearButton = textarea.locator('mdc-button[part="clear-button"]');
      await expect(textareaElement).toHaveValue('this is readonly data');
      await expect(clearButton).not.toHaveClass('hidden');
      await componentsPage.actionability.pressTab();
      await expect(textarea).toBeFocused();
      await componentsPage.actionability.pressTab();
      await componentsPage.actionability.pressTab();
      // disabled when textarea is in readonly state
      await expect(clearButton).not.toBeFocused();
      await componentsPage.removeAttribute(textarea, 'readonly');
      await componentsPage.removeAttribute(textarea, 'clear-buton');
    });

    await test.step('component should not be focusable when disabled', async () => {
      await componentsPage.setAttributes(textarea, { disabled: '', value: 'Disabled' });
      await componentsPage.actionability.pressTab();
      await expect(textarea).not.toBeFocused();
      await expect(textareaElement).toHaveValue('Disabled');
      await componentsPage.removeAttribute(textarea, 'disabled');
    });

    await test.step('component in form should be validated for required and maxlength when submitted', async () => {
      const form = await setup({
        componentsPage,
        id: 'test-mdc-textarea',
        placeholder: 'Placeholder',
        requiredLabel: 'required',
        maxlength: 10,
      }, true);

      const submitButton = await form.locator('mdc-button');
      await submitButton.click();
      const validationMessage = await textareaElement.evaluate((element) => {
        const textarea = element as HTMLTextAreaElement;
        return textarea.validationMessage;
      });
      if (browserName === 'webkit') {
        expect(validationMessage).toContain('Fill out this field');
      } else {
        expect(validationMessage).toContain('Please fill out this field.');
      }
      await textareaElement.fill('This is a long text');
      await expect(textareaElement).toHaveValue('This is a '); // maxlength is 10; truncates rest of the value.
      await submitButton.click();
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component', async () => {
      await expect(textarea).toHaveAttribute('placeholder', 'Placeholder');
      await expect(textarea).toHaveAttribute('label', 'Label');
      const label = await textarea.locator('label');
      await expect(label).toHaveText('Label');
      await expect(textarea).toHaveAttribute('help-text', 'Help Text');
      const helpText = await textarea.locator('mdc-text[part="help-text"]');
      await expect(helpText).toHaveText('Help Text');
    });

    await test.step('attributes rows should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { rows: '5' });
      await expect(textarea).toHaveAttribute('rows', '5');
      await componentsPage.removeAttribute(textarea, 'rows');
    });

    await test.step('attributes cols should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { cols: '5' });
      await expect(textarea).toHaveAttribute('cols', '5');
      await componentsPage.removeAttribute(textarea, 'cols');
    });

    await test.step('attributes max-character-limit should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { 'max-character-limit': '100' });
      await expect(textarea).toHaveAttribute('max-character-limit', '100');
      const characterCounter = textarea.locator('mdc-text[part="character-counter"]');
      await expect(characterCounter).toHaveText('00/100');
      await componentsPage.removeAttribute(textarea, 'max-character-counter');
    });

    await test.step('attributes wrap should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { wrap: 'hard' });
      await expect(textarea).toHaveAttribute('wrap', 'hard');
      await componentsPage.removeAttribute(textarea, 'wrap');
    });

    await test.step('attributes required should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { 'required-label': 'required' });
      await expect(textarea).toHaveAttribute('required-label', 'required');
      await componentsPage.removeAttribute(textarea, 'required-label');
    });

    await test.step('attributes readonly should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { readonly: '' });
      await expect(textarea).toHaveAttribute('readonly');
      await componentsPage.removeAttribute(textarea, 'readonly');
    });

    await test.step('attributes disabled should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { disabled: '' });
      await expect(textarea).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(textarea, 'disabled');
    });

    await test.step('attributes help-text-type should be present on component', async () => {
      for (const type of Object.values(VALIDATION)) {
        await componentsPage.setAttributes(textarea, { 'help-text-type': type });
        await expect(textarea).toHaveAttribute('help-text-type', type);
        const iconEl = await textarea.locator('mdc-icon[part="helper-icon"]');
        const icon = getHelperIcon(type);
        if (icon) {
          await expect(iconEl).toHaveAttribute('name', icon);
        }
      }
      await componentsPage.removeAttribute(textarea, 'help-text-type');
    });

    await test.step('minlength and maxlength should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { maxlength: '10', minlength: '5' });
      await expect(textarea).toHaveAttribute('maxlength', '10');
      await expect(textarea).toHaveAttribute('minlength', '5');
      await componentsPage.removeAttribute(textarea, 'maxlength');
      await componentsPage.removeAttribute(textarea, 'minlength');
    });

    await test.step('attribute autofocus should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { autofocus: '' });
      await expect(textarea).toHaveAttribute('autofocus');
      await componentsPage.removeAttribute(textarea, 'autofocus');
    });

    await test.step('attribute autocapitalize should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { autocapitalize: 'sentences' });
      await expect(textarea).toHaveAttribute('autocapitalize', 'sentences');
      await componentsPage.removeAttribute(textarea, 'autocapitalize');
    });

    await test.step('attribute autocomplete should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { autocomplete: 'on' });
      await expect(textarea).toHaveAttribute('autocomplete', 'on');
      await componentsPage.removeAttribute(textarea, 'autocomplete');
    });

    await test.step('attribute dirname should be present on component', async () => {
      await componentsPage.setAttributes(textarea, { dirname: 'ltr' });
      await expect(textarea).toHaveAttribute('dirname', 'ltr');
      await componentsPage.removeAttribute(textarea, 'dirname');
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
    };
    const textareaStickerSheet = new StickerSheet(componentsPage, 'mdc-textarea');

    await textareaStickerSheet.setAttributes(attributes);
    await textareaStickerSheet.createMarkupWithCombination({
      'help-text-type': VALIDATION,
    });

    // disabled textarea field with value
    await textareaStickerSheet.setAttributes({ ...attributes,
      value: 'Disabled',
      disabled: true,
    });
    await textareaStickerSheet.createMarkupWithCombination({});

    // textarea with value and clear button
    await textareaStickerSheet.setAttributes({ ...attributes,
      value: 'Clear button',
      'clear-button': true,
      'clear-aria-label': 'clear',
    });
    await textareaStickerSheet.createMarkupWithCombination({});

    // readonly textarea field with value
    await textareaStickerSheet.setAttributes({ ...attributes,
      value: 'Readonly value',
      readonly: true,
    });
    await textareaStickerSheet.createMarkupWithCombination({});

    // textarea that is marked required
    await textareaStickerSheet.setAttributes({ ...attributes,
      'required-label': 'required',
      placeholder: 'Textarea is required',
    });
    await textareaStickerSheet.createMarkupWithCombination({});

    // Long text label that is truncated in a small container
    await textareaStickerSheet.setAttributes({
      label: 'This is a large label text',
      'required-label': 'required',
      placeholder: 'placeholder',
      style: 'width: 200px',
    });
    await textareaStickerSheet.createMarkupWithCombination({});

    await textareaStickerSheet.mountStickerSheet();
    const container = await textareaStickerSheet.getWrapperContainer();

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-textarea', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  // await test.step('accessibility', async () => {
  //   await componentsPage.accessibility.checkForA11yViolations('textarea-default');
  // });
});
