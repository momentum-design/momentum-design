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
  displayPopover?: boolean;
  children?: string;
  popoverAriaLabel?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="wrapper">
      <mdc-searchpopover
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
        ${restArgs.displayPopover ? 'display-popover' : ''}
        ${restArgs.popoverAriaLabel ? `popover-aria-label="${restArgs.popoverAriaLabel}"` : ''}
      >
        ${restArgs.children}
      </mdc-searchpopover>
    </div>
    `,
    clearDocument: true,
  });
  const element = componentsPage.page.locator('mdc-searchpopover');
  await element.waitFor();
  return element;
};

test.use({ viewport: { width: 800, height: 300 } });
test('mdc-searchpopover', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const attributes = {
      id: 'test-mdc-searchpopover',
      placeholder: 'Placeholder',
      'clear-aria-label': 'clear',
      label: 'Label',
      value: 'Result',
      'display-popover': true,
      'popover-aria-label': 'Search results',
    };
    const searchpopoverStickerSheet = new StickerSheet(componentsPage, 'mdc-searchpopover');

    searchpopoverStickerSheet.setAttributes(attributes);
    searchpopoverStickerSheet.setChildren(
      '<mdc-list><mdc-listitem label="Result 1"></mdc-listitem><mdc-listitem label="Result 2"></mdc-listitem></mdc-list>',
    );
    await searchpopoverStickerSheet.createMarkupWithCombination({});

    await searchpopoverStickerSheet.mountStickerSheet({
      wrapperStyle: 'display: flex; flex-direction: column; gap: 0.5rem;',
    });

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-searchpopover');
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('searchpopover-default');
  });

  const searchpopover = await setup({
    componentsPage,
    placeholder: 'Placeholder',
    label: 'Label',
    clearAriaLabel: 'clear',
    value: 'Result',
    displayPopover: true,
    children:
      '<mdc-list><mdc-listitem label="Result 1"></mdc-listitem><mdc-listitem label="Result 2"></mdc-listitem></mdc-list>',
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component', async () => {
      await expect(searchpopover).toHaveAttribute('placeholder', 'Placeholder');
      await expect(searchpopover).toHaveAttribute('label', 'Label');
      const label = searchpopover.locator('label');
      await expect(label).toHaveText('Label');
      await componentsPage.setAttributes(searchpopover, { value: 'text' });
      const clearBtn = searchpopover.locator('mdc-button[part="trailing-button"]');
      await expect(clearBtn).toHaveAttribute('aria-label', 'clear');
    });

    await test.step('attributes readonly should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { readonly: '' });
      await expect(searchpopover).toHaveAttribute('readonly');
      await componentsPage.removeAttribute(searchpopover, 'readonly');
    });

    await test.step('attributes disabled should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { disabled: '' });
      await expect(searchpopover).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(searchpopover, 'disabled');
    });

    await test.step('attributes size, minlength and maxlength should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { maxlength: '10', minlength: '5', size: '10' });
      await expect(searchpopover).toHaveAttribute('maxlength', '10');
      await expect(searchpopover).toHaveAttribute('minlength', '5');
      await expect(searchpopover).toHaveAttribute('size', '10');
      await componentsPage.removeAttribute(searchpopover, 'maxlength');
      await componentsPage.removeAttribute(searchpopover, 'minlength');
      await componentsPage.removeAttribute(searchpopover, 'size');
    });

    await test.step('attribute clear-aria-label should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { value: 'text' });
      const trailingButton = searchpopover.locator('mdc-button[part="trailing-button"]');
      await expect(trailingButton).toHaveAttribute('aria-label', 'clear');
    });

    await test.step('attribute autofocus should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { 'auto-focus-on-mount': '' });
      await expect(searchpopover).toHaveAttribute('auto-focus-on-mount');
      await componentsPage.removeAttribute(searchpopover, 'auto-focus-on-mount');
    });

    await test.step('attribute autocapitalize should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { autocapitalize: 'sentences' });
      await expect(searchpopover).toHaveAttribute('autocapitalize', 'sentences');
      await componentsPage.removeAttribute(searchpopover, 'autocapitalize');
    });

    await test.step('attribute autocomplete should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { autocomplete: 'on' });
      await expect(searchpopover).toHaveAttribute('autocomplete', 'on');
      await componentsPage.removeAttribute(searchpopover, 'autocomplete');
    });

    await test.step('attribute dirname should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { dirname: 'ltr' });
      await expect(searchpopover).toHaveAttribute('dirname', 'ltr');
      await componentsPage.removeAttribute(searchpopover, 'dirname');
    });

    await test.step('attribute pattern should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { pattern: '[A-Za-z]{3}' });
      await expect(searchpopover).toHaveAttribute('pattern', '[A-Za-z]{3}');
      await componentsPage.removeAttribute(searchpopover, 'pattern');
    });

    await test.step('attribute list should be present on component', async () => {
      await componentsPage.setAttributes(searchpopover, { list: 'browsers' });
      await expect(searchpopover).toHaveAttribute('list', 'browsers');
      await componentsPage.removeAttribute(searchpopover, 'list');
    });

    await test.step('aria attributes set on input & popover', async () => {
      await componentsPage.setAttributes(searchpopover, { 'popover-aria-label': 'Search results' });
      const inputEl = searchpopover.locator('input');
      const popoverEl = searchpopover.locator('mdc-popover');
      const popoverId = await popoverEl.getAttribute('id');

      await expect(inputEl).toHaveAttribute('aria-controls', popoverId!);
      await expect(inputEl).toHaveAttribute('aria-owns', popoverId!);
      await expect(inputEl).toHaveAttribute('aria-expanded', 'true');
      await expect(inputEl).toHaveAttribute('aria-haspopup', 'dialog');
      await expect(popoverEl).toHaveAttribute('aria-label', 'Search results');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const inputEl = searchpopover.locator('input');
    const clearBtn = searchpopover.locator('mdc-button[part="trailing-button"]');
    const firstListItemInPopover = searchpopover.locator('mdc-listitem').first();

    await test.step('component should be focusable', async () => {
      await componentsPage.actionability.pressTab();
      await expect(inputEl).toBeFocused();
      await inputEl.fill('test');
      await expect(inputEl).toHaveValue('test');
      await componentsPage.actionability.pressTab();
      await expect(inputEl).not.toBeFocused();
      await expect(clearBtn).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(clearBtn).not.toBeFocused();
      await expect(firstListItemInPopover).toBeFocused();
    });
  });
});
