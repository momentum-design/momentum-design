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
  readonly?: boolean;
  disabled?: boolean;
  maxlength?: number;
  minlength?: number;
  prefixText?: string;
  leadingIcon?: string;
  label?: string;
  autocapitalize?: string;
  autofocus?: boolean;
  autocomplete?: string;
  dirname?: string;
  pattern?: string;
  list?: string;
  size?: number;
  dataAriaLabel?: string;
  clearAriaLabel?: string;
  filters?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
<div id="wrapper">
      <mdc-searchfield
      id="${restArgs.id}"
      ${restArgs.value ? `value="${restArgs.value}"` : ''}
      ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
      ${restArgs.readonly ? 'readonly' : ''}
      ${restArgs.disabled ? 'disabled' : ''}
      ${restArgs.maxlength ? `maxlength="${restArgs.maxlength}"` : ''}
      ${restArgs.minlength ? `minlength="${restArgs.minlength}"` : ''}
      ${restArgs.prefixText ? `prefix-text="${restArgs.prefixText}"` : ''}
      ${restArgs.leadingIcon ? `leading-icon="${restArgs.leadingIcon}"` : ''}
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
    ${restArgs.autocapitalize ? `autocapitalize="${restArgs.autocapitalize}"` : ''}
      ${restArgs.autofocus ? 'auto-focus-on-mount' : ''}
      ${restArgs.autocomplete ? `autocomplete="${restArgs.autocomplete}"` : ''}
      ${restArgs.dirname ? `dirname="${restArgs.dirname}"` : ''}
      ${restArgs.pattern ? `pattern="${restArgs.pattern}"` : ''}
      ${restArgs.list ? `list="${restArgs.list}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
      ${restArgs.dataAriaLabel ? `data-aria-label="${restArgs.dataAriaLabel}"` : ''}
      ${restArgs.clearAriaLabel ? `clear-aria-label="${restArgs.clearAriaLabel}"` : ''}
      ${
        restArgs.filters
          ? `><mdc-inputchip 
        label="Selected" 
        slot="filters" 
        ></mdc-inputchip>`
          : '>'
      }</mdc-searchfield>
      <mdc-button>Second Button</mdc-button></div>
    `,
    clearDocument: true,
  });
  const element = componentsPage.page.locator('mdc-searchfield');
  await element.waitFor();
  return element;
};

test.use({ viewport: { width: 800, height: 300 } });
test('mdc-searchfield', async ({ componentsPage }) => {
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
    const searchfieldStickerSheet = new StickerSheet(componentsPage, 'mdc-searchfield');

    searchfieldStickerSheet.setAttributes(attributes);
    await searchfieldStickerSheet.createMarkupWithCombination({});

    // disabled searchField field with value
    searchfieldStickerSheet.setAttributes({ ...attributes, value: 'Disabled', disabled: true });
    await searchfieldStickerSheet.createMarkupWithCombination({});

    // searchField without label
    searchfieldStickerSheet.setAttributes({
      'data-aria-label': 'Search',
      value: 'Clear button',
      'clear-aria-label': 'clear',
    });
    await searchfieldStickerSheet.createMarkupWithCombination({});

    searchfieldStickerSheet.setChildren(`<mdc-inputchip 
        slot='filters' 
        label='Query: value' 
        clear-aria-label='clear'
      ></mdc-inputchip>`);
    searchfieldStickerSheet.setAttributes({
      value: '',
      placeholder: 'Search for value',
      'data-aria-label': 'Search',
      'clear-aria-label': 'clear',
    });
    await searchfieldStickerSheet.createMarkupWithCombination({});

    await searchfieldStickerSheet.mountStickerSheet({
      wrapperStyle: 'display: flex; flex-direction: column; gap: 0.5rem;',
    });
    const container = searchfieldStickerSheet.getWrapperContainer();

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-searchfield', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('searchField-default');
  });

  const searchField = await setup({
    componentsPage,
    placeholder: 'Placeholder',
    label: 'Label',
    clearAriaLabel: 'clear',
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component', async () => {
      await expect(searchField).toHaveAttribute('placeholder', 'Placeholder');
      await expect(searchField).toHaveAttribute('label', 'Label');
      const label = searchField.locator('label');
      await expect(label).toHaveText('Label');
      await componentsPage.setAttributes(searchField, { value: 'text' });
      const clearBtn = searchField.locator('mdc-button[part="trailing-button"]');
      await expect(clearBtn).toHaveAttribute('aria-label', 'clear');
    });

    await test.step('attributes readonly should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { readonly: '' });
      await expect(searchField).toHaveAttribute('readonly');
      await componentsPage.removeAttribute(searchField, 'readonly');
    });

    await test.step('attributes disabled should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { disabled: '' });
      await expect(searchField).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(searchField, 'disabled');
    });

    await test.step('attributes size, minlength and maxlength should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { maxlength: '10', minlength: '5', size: '10' });
      await expect(searchField).toHaveAttribute('maxlength', '10');
      await expect(searchField).toHaveAttribute('minlength', '5');
      await expect(searchField).toHaveAttribute('size', '10');
      await componentsPage.removeAttribute(searchField, 'maxlength');
      await componentsPage.removeAttribute(searchField, 'minlength');
      await componentsPage.removeAttribute(searchField, 'size');
    });

    await test.step('attribute clear-aria-label should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { value: 'text' });
      const trailingButton = searchField.locator('mdc-button[part="trailing-button"]');
      await expect(trailingButton).toHaveAttribute('aria-label', 'clear');
    });

    await test.step('attribute autofocus should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { 'auto-focus-on-mount': '' });
      await expect(searchField).toHaveAttribute('auto-focus-on-mount');
      await componentsPage.removeAttribute(searchField, 'auto-focus-on-mount');
    });

    await test.step('attribute autocapitalize should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { autocapitalize: 'sentences' });
      await expect(searchField).toHaveAttribute('autocapitalize', 'sentences');
      await componentsPage.removeAttribute(searchField, 'autocapitalize');
    });

    await test.step('attribute autocomplete should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { autocomplete: 'on' });
      await expect(searchField).toHaveAttribute('autocomplete', 'on');
      await componentsPage.removeAttribute(searchField, 'autocomplete');
    });

    await test.step('attribute direname should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { direname: 'ltr' });
      await expect(searchField).toHaveAttribute('direname', 'ltr');
      await componentsPage.removeAttribute(searchField, 'direname');
    });

    await test.step('attribute direname should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { direname: 'ltr' });
      await expect(searchField).toHaveAttribute('direname', 'ltr');
      await componentsPage.removeAttribute(searchField, 'direname');
    });

    await test.step('attribute pattern should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { pattern: '[A-Za-z]{3}' });
      await expect(searchField).toHaveAttribute('pattern', '[A-Za-z]{3}');
      await componentsPage.removeAttribute(searchField, 'pattern');
    });

    await test.step('attribute list should be present on component', async () => {
      await componentsPage.setAttributes(searchField, { list: 'browsers' });
      await expect(searchField).toHaveAttribute('list', 'browsers');
      await componentsPage.removeAttribute(searchField, 'list');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const inputEl = searchField.locator('input');
    await test.step('component should be focusable with tab', async () => {
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toBeFocused();
      await inputEl.fill('test');
      await expect(inputEl).toHaveValue('test');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).not.toBeFocused();
    });

    await test.step('readonly component should be focusable with tab', async () => {
      await setup({ componentsPage, readonly: true, value: 'Readonly', clearAriaLabel: 'clear' });
      const trailingButton = searchField.locator('mdc-button[part="trailing-button"]');
      await componentsPage.actionability.pressTab();
      await expect(searchField).toBeFocused();
      await expect(inputEl).toHaveValue('Readonly');
      await componentsPage.actionability.pressTab();
      await expect(searchField).not.toBeFocused();
      await expect(trailingButton).not.toBeFocused();
      await componentsPage.removeAttribute(searchField, 'readonly');
    });

    await test.step('focus on searchField and clear button when value is present during interactions', async () => {
      await setup({ componentsPage, value: '', clearAriaLabel: 'clear' });
      const trailingButton = searchField.locator('mdc-button[part="trailing-button"]');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toBeFocused();
      await expect(trailingButton).not.toBeVisible();
      await inputEl.fill('test');
      await expect(inputEl).toHaveValue('test');
      await expect(trailingButton).toBeVisible();
      await componentsPage.actionability.pressTab();
      await expect(inputEl).not.toBeFocused();
      await expect(trailingButton).toBeFocused();
      await trailingButton.click();
      await expect(inputEl).toBeFocused();
      await expect(inputEl).toHaveValue('');
    });

    await test.step('component should not be focusable when disabled', async () => {
      await setup({ componentsPage, disabled: true, value: 'Disabled' });
      await componentsPage.actionability.pressTab();
      await expect(searchField).not.toBeFocused();
      await expect(inputEl).toHaveValue('Disabled');
      await componentsPage.removeAttribute(searchField, 'disabled');
    });

    await test.step('filter chip should be focusable and interactable when present', async () => {
      await setup({ componentsPage, value: '', clearAriaLabel: 'clear', filters: true });
      const inputChipBtn = searchField.locator('mdc-button[part="close-icon"]');
      await inputChipBtn.evaluate(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('remove-filter');
        });
      });
      const filterChip = searchField.locator('mdc-inputchip');
      await expect(filterChip).toBeVisible();
      await expect(inputChipBtn).toHaveClass('');
      await componentsPage.actionability.pressTab();
      await expect(inputChipBtn).toBeFocused();
      await inputChipBtn.click();
      await expect(inputChipBtn).toHaveClass('remove-filter');
    });
  });
});
