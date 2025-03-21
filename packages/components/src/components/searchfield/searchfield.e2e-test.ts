/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  value?: string;
  placeholder?: string;
  requiredLabel?: string;
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
};

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    ${isForm ? '<form>' : ''}
      <mdc-searchfield
      id="${restArgs.id}"
      ${restArgs.value ? `value="${restArgs.value}"` : ''}
      ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
      ${restArgs.requiredLabel ? `required-label="${restArgs.requiredLabel}"` : ''}
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
      ></mdc-searchfield>
    ${isForm ? '<mdc-button type="submit" size="24">Submit</mdc-button></form>' : ''}
    `,
    clearDocument: true,
  });
  if (isForm) {
    const form = componentsPage.page.locator('form');
    await form.waitFor();
    return form;
  }
  const text = componentsPage.page.locator('mdc-searchfield');
  await text.waitFor();
  return text;
};

test.use({ viewport: { width: 800, height: 1500 } });
test('mdc-searchfield', async ({ componentsPage, browserName }) => {
  const serachfield = await setup({
    componentsPage,
    id: 'test-mdc-searchfield',
    placeholder: 'Placeholder',
    label: 'Label',
    clearAriaLabel: 'clear',
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component', async () => {
      await expect(serachfield).toHaveAttribute('id', 'test-mdc-searchfield');
      await expect(serachfield).toHaveAttribute('placeholder', 'Placeholder');
      await expect(serachfield).toHaveAttribute('label', 'Label');
      const label = await serachfield.locator('label');
      await expect(label).toHaveText('Label');
    });

    await test.step('attributes readonly should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { readonly: '' });
      await expect(serachfield).toHaveAttribute('readonly');
      await componentsPage.removeAttribute(serachfield, 'readonly');
    });

    await test.step('attributes disabled should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { disabled: '' });
      await expect(serachfield).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(serachfield, 'disabled');
    });

    await test.step('attributes size, minlength and maxlength should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { maxlength: '10', minlength: '5', size: '10' });
      await expect(serachfield).toHaveAttribute('maxlength', '10');
      await expect(serachfield).toHaveAttribute('minlength', '5');
      await expect(serachfield).toHaveAttribute('size', '10');
      await componentsPage.removeAttribute(serachfield, 'maxlength');
      await componentsPage.removeAttribute(serachfield, 'minlength');
      await componentsPage.removeAttribute(serachfield, 'size');
    });

    // await test.step('attribute trailing-button should be present on component', async () => {
    //   await componentsPage.setAttributes(serachfield, { value: 'text' });
    //   const trailingButton = serachfield.locator('mdc-button[part="trailing-button"]');
    //   await expect(trailingButton).toHaveAttribute('aria-label', 'clear');
    // });

    await test.step('attribute autofocus should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { autofocus: '' });
      await expect(serachfield).toHaveAttribute('autofocus');
      await componentsPage.removeAttribute(serachfield, 'autofocus');
    });

    await test.step('attribute autocapitalize should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { autocapitalize: 'sentences' });
      await expect(serachfield).toHaveAttribute('autocapitalize', 'sentences');
      await componentsPage.removeAttribute(serachfield, 'autocapitalize');
    });

    await test.step('attribute autocomplete should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { autocomplete: 'on' });
      await expect(serachfield).toHaveAttribute('autocomplete', 'on');
      await componentsPage.removeAttribute(serachfield, 'autocomplete');
    });

    await test.step('attribute direname should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { direname: 'ltr' });
      await expect(serachfield).toHaveAttribute('direname', 'ltr');
      await componentsPage.removeAttribute(serachfield, 'direname');
    });

    await test.step('attribute direname should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { direname: 'ltr' });
      await expect(serachfield).toHaveAttribute('direname', 'ltr');
      await componentsPage.removeAttribute(serachfield, 'direname');
    });

    await test.step('attribute pattern should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { pattern: '[A-Za-z]{3}' });
      await expect(serachfield).toHaveAttribute('pattern', '[A-Za-z]{3}');
      await componentsPage.removeAttribute(serachfield, 'pattern');
    });

    await test.step('attribute list should be present on component', async () => {
      await componentsPage.setAttributes(serachfield, { list: 'browsers' });
      await expect(serachfield).toHaveAttribute('list', 'browsers');
      await componentsPage.removeAttribute(serachfield, 'list');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const inputEl = await serachfield.locator('input');
    await test.step('component should be focusable with tab', async () => {
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toBeFocused();
      await inputEl.fill('test');
      await expect(inputEl).toHaveValue('test');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).not.toBeFocused();
    });

    // await test.step('readonly component should be focusable with tab', async () => {
    //   await componentsPage.setAttributes(serachfield, {
    //     readonly: '',
    //     value: 'Readonly',
    //     'clear-aria-label': 'clear',
    //   });
    //   const trailingButton = serachfield.locator('mdc-button[part="trailing-button"]');
    //   await componentsPage.actionability.pressTab();
    //   await expect(inputEl).toBeFocused();
    //   await expect(inputEl).toHaveValue('Readonly');
    //   await componentsPage.actionability.pressTab();
    //   await expect(inputEl).not.toBeFocused();
    //   await expect(trailingButton).not.toBeFocused();
    //   await componentsPage.removeAttribute(serachfield, 'readonly');
    // });

    // await test.step('focus on serachfield and clear button when value is present during interactions', async () => {
    //   await componentsPage.setAttributes(serachfield, { value: '', 'clear-aria-label': 'clear' });
    //   const trailingButton = serachfield.locator('mdc-button[part="trailing-button"]');
    //   await componentsPage.actionability.pressTab();
    //   await expect(inputEl).toBeFocused();
    //   await expect(trailingButton).toHaveClass('own-focus-ring hidden');
    //   await inputEl.fill('test');
    //   await expect(inputEl).toHaveValue('test');
    //   await expect(trailingButton).toHaveClass('own-focus-ring ');
    //   await componentsPage.actionability.pressTab();
    //   await expect(inputEl).not.toBeFocused();
    //   await expect(trailingButton).toBeFocused();
    //   await trailingButton.click();
    //   await expect(inputEl).toBeFocused();
    //   await expect(inputEl).toHaveValue('');
    // });

    await test.step('component should not be focusable when disabled', async () => {
      await componentsPage.setAttributes(serachfield, { disabled: '', value: 'Disabled' });
      await componentsPage.actionability.pressTab();
      await expect(serachfield).not.toBeFocused();
      await expect(inputEl).toHaveValue('Disabled');
      await componentsPage.removeAttribute(serachfield, 'disabled');
    });

    // await test.step('component in form should be validated for required and maxlength when submitted', async () => {
    //   const form = await setup({
    //     componentsPage,
    //     id: 'test-mdc-searchfield',
    //     placeholder: 'Placeholder',
    //     requiredLabel: 'required',
    //     maxlength: 10,
    //   }, true);

    //   const mdcserachfield = await form.locator('mdc-searchfield');
    //   const submitButton = await form.locator('mdc-button');
    //   const searchField = mdcserachfield.locator('serachfield');
    //   await componentsPage.actionability.pressTab();
    //   await expect(mdcserachfield).toBeFocused();
    //   await componentsPage.page.keyboard.down('Enter');
    //   const validationMessage = await searchField.evaluate((element) => {
    //     const serachfield = element as HTMLInputElement;
    //     return serachfield.validationMessage;
    //   });
    //   if (browserName === 'webkit') {
    //     expect(validationMessage).toContain('Fill out this field');
    //   } else {
    //     expect(validationMessage).toContain('Please fill out this field.');
    //   }
    //   await searchField.fill('This is a long text');
    //   await expect(searchField).toHaveValue('This is a '); // maxlength is 10; truncates rest of the value.
    //   await submitButton.click();
    // });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const attributes = {
      id: 'test-mdc-searchfield',
      placeholder: 'Placeholder',
      'clear-aria-label': 'clear',
      label: 'Label',
    };
    const serachfieldStickerSheet = new StickerSheet(componentsPage, 'mdc-searchfield');

    serachfieldStickerSheet.setAttributes(attributes);
    await serachfieldStickerSheet.createMarkupWithCombination({});

    // disabled serachfield field with value
    serachfieldStickerSheet.setAttributes({ ...attributes,
      value: 'Disabled',
      disabled: true,
    });
    await serachfieldStickerSheet.createMarkupWithCombination({});

    // serachfield without label
    serachfieldStickerSheet.setAttributes({ 'data-aria-label': 'Search',
      value: 'Clear button',
      'clear-aria-label': 'clear',
    });
    await serachfieldStickerSheet.createMarkupWithCombination({});

    serachfieldStickerSheet
      .setChildren(`<mdc-inputchip 
        slot='filters' 
        label='Query: value' 
        clear-aria-label='clear'
      ></mdc-inputchip>`);
    serachfieldStickerSheet.setAttributes({ value: '', placeholder: 'Search for value', 'clear-aria-label': 'clear' });
    await serachfieldStickerSheet.createMarkupWithCombination({});

    await serachfieldStickerSheet.mountStickerSheet({
      wrapperStyle: 'display: flex; flex-direction: column; gap: 0.5rem;',
    });
    const container = await serachfieldStickerSheet.getWrapperContainer();

    // Fix for not capturing snapshot while hovering on the serachfield container.
    // await componentsPage.page.mouse.move(0, 0);
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-searchfield', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('serachfield-default');
  });
});
