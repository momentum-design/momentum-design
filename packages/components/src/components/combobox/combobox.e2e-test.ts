import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';

import type Combobox from './combobox.component';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  label?: string;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  'control-type'?: string;
  'data-aria-label'?: string;
  'validation-message'?: string;
  'help-text'?: string;
  'help-text-type'?: string;
  readonly?: boolean;
  value?: string;
  'no-result-text'?: string;
  'info-icon-aria-label'?: string;
  placement?: string;
  'popover-z-index'?: number;
  strategy?: string;
  boundary?: string;
  'backdrop-append-to'?: string;
  'auto-focus-on-mount'?: boolean;
  'toggletip-text'?: string;
  'toggletip-placement'?: string;
  'toggletip-strategy'?: string;
  'invalid-custom-value-text'?: string;
};

const defaultLabel = 'Top Countries list';
const defaultPlaceholder = 'Start typing to search';
const defaultOptions = [
  { value: 'argentina', label: 'Argentina' },
  { value: 'austria', label: 'Austria' },
  { value: 'australia', label: 'Australia' },
  { value: 'bangladesh', label: 'Bangladesh' },
  { value: 'brazil', label: 'Brazil' },
  { value: 'canada', label: 'Canada' },
];

const createOptionsMarkup = (options: Array<{ value: string; label: string; disabled?: boolean }>) => `
    <mdc-selectlistbox>${options
      .map(
        option =>
          `<mdc-option value="${option.value}" label="${option.label}" ${option.disabled ? 'disabled' : ''}></mdc-option>`,
      )
      .join('\n')}</mdc-selectlistbox>
  `;

const setup = async (args: SetupOptions, isForm = false) => {
  const { componentsPage, ...restArgs } = args;

  await componentsPage.mount({
    html: `
      <div>
        ${isForm ? '<form>' : ''}
        <mdc-combobox
          ${restArgs.id ? `id="${restArgs.id}"` : ''}
          ${restArgs.label ? `label="${restArgs.label}"` : ''}
          ${restArgs.name ? `name="${restArgs.name}"` : ''}
          ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.required ? 'required' : ''}
          ${restArgs.readonly ? 'readonly' : ''}
          ${restArgs.value ? `value="${restArgs.value}"` : ''}
          ${restArgs['control-type'] ? `control-type="${restArgs['control-type']}"` : ''}
          ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : 'data-aria-label="Combobox label"'}
          ${restArgs['validation-message'] ? `validation-message="${restArgs['validation-message']}"` : ''}
          ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
          ${restArgs['help-text-type'] ? `help-text-type="${restArgs['help-text-type']}"` : ''}
          ${restArgs['no-result-text'] ? `no-result-text="${restArgs['no-result-text']}"` : ''}
          ${restArgs['info-icon-aria-label'] ? `info-icon-aria-label="${restArgs['info-icon-aria-label']}"` : ''}
          ${restArgs.placement ? `placement="${restArgs.placement}"` : ''}
          ${restArgs['popover-z-index'] !== undefined ? `popover-z-index="${restArgs['popover-z-index']}"` : ''}
          ${restArgs.strategy ? `strategy="${restArgs.strategy}"` : ''}
          ${restArgs.boundary ? `boundary="${restArgs.boundary}"` : ''}
          ${restArgs['backdrop-append-to'] ? `backdrop-append-to="${restArgs['backdrop-append-to']}"` : ''}
          ${restArgs['auto-focus-on-mount'] ? 'auto-focus-on-mount' : ''}
          ${restArgs['toggletip-text'] ? `toggletip-text="${restArgs['toggletip-text']}"` : ''}
          ${restArgs['toggletip-placement'] ? `toggletip-placement="${restArgs['toggletip-placement']}"` : ''}
          ${restArgs['toggletip-strategy'] ? `toggletip-strategy="${restArgs['toggletip-strategy']}"` : ''}
          ${restArgs['invalid-custom-value-text'] ? `invalid-custom-value-text="${restArgs['invalid-custom-value-text']}"` : ''}
        >
          ${restArgs.options ? createOptionsMarkup(restArgs.options) : ''}
        </mdc-combobox>
        ${isForm ? '<mdc-button type="submit">Submit</mdc-button></form>' : ''}
        <mdc-button>Test</mdc-button>
      </div>
    `,
    clearDocument: true,
  });

  const combobox = componentsPage.page.locator('mdc-combobox');
  const input = combobox.locator(`[role="${ROLE.COMBOBOX}"]`);
  const dropdown = combobox.locator(`mdc-popover`);
  const options = combobox.locator(`[role="${ROLE.OPTION}"]`);
  const form = componentsPage.page.locator('form');

  if (isForm) {
    await form.waitFor();
  } else {
    await combobox.waitFor();
  }

  return {
    combobox,
    input,
    dropdown,
    options,
    getOptionByText: (text: string) => options.filter({ hasText: text }),
    form,
  };
};

test.describe('Combobox Feature Scenarios', () => {
  test('mdc-combobox', async ({ componentsPage }) => {
    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      await test.step('should show toggletip text if provided', async () => {
        const { combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'toggletip-text': 'This is a toggletip',
        });
        await expect(combobox).toHaveAttribute('toggletip-text', 'This is a toggletip');
      });

      await test.step('should set popover z-index if provided', async () => {
        const { combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'popover-z-index': 9999,
        });
        await expect(combobox).toHaveAttribute('popover-z-index', '9999');
      });

      await test.step('should set info icon aria label if provided', async () => {
        const { combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'info-icon-aria-label': 'Info label',
        });
        await expect(combobox).toHaveAttribute('info-icon-aria-label', 'Info label');
      });

      await test.step('should set toggletip placement if provided', async () => {
        const { combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'toggletip-placement': 'top-start',
        });
        await expect(combobox).toHaveAttribute('toggletip-placement', 'top-start');
      });

      await test.step('should set invalid custom value text if provided', async () => {
        const { combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'invalid-custom-value-text': 'Custom not allowed',
        });
        await expect(combobox).toHaveAttribute('invalid-custom-value-text', 'Custom not allowed');
      });

      await test.step('should render component when an option is removed from dom', async () => {
        const { combobox, options } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions, // default length is 6.
        });

        await componentsPage.page.evaluate(async () => {
          const combobox = document.getElementsByTagName('mdc-combobox')[0];
          combobox.getElementsByTagName('mdc-option')[0].remove();
        });

        await test.step('should render the component and options length get updated', async () => {
          await expect(combobox).toBeVisible();
          await expect(options).toHaveCount(5);
        });
      });
    });

    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const markUpOptions = { createNewRow: true };
      const label = 'Type headquarters name';
      const comboboxSheet = new StickerSheet(componentsPage, 'mdc-combobox', 'padding: 0.25rem');
      comboboxSheet.setAttributes({ label, placeholder: 'Type and select an headquarters from the list' });
      await comboboxSheet.createMarkupWithCombination({}, markUpOptions);
      comboboxSheet.setAttributes({ label, placeholder: defaultPlaceholder });
      await comboboxSheet.createMarkupWithCombination({}, markUpOptions);
      comboboxSheet.setAttributes({
        label,
        placeholder: defaultPlaceholder,
        'help-text-type': 'success',
        'help-text': 'This is a success message',
      });
      await comboboxSheet.createMarkupWithCombination({}, markUpOptions);
      comboboxSheet.setAttributes({
        label,
        placeholder: defaultPlaceholder,
        'help-text-type': 'warning',
        'help-text': 'This is a warning message',
      });
      await comboboxSheet.createMarkupWithCombination({}, markUpOptions);
      comboboxSheet.setAttributes({
        label,
        placeholder: defaultPlaceholder,
        'help-text-type': 'error',
        'help-text': 'This is an error message',
      });
      await comboboxSheet.createMarkupWithCombination({}, markUpOptions);
      comboboxSheet.setAttributes({
        label,
        placeholder: defaultPlaceholder,
        disabled: true,
      });
      await comboboxSheet.createMarkupWithCombination({}, markUpOptions);
      comboboxSheet.setAttributes({
        label,
        placeholder: defaultPlaceholder,
        readonly: true,
      });
      await comboboxSheet.createMarkupWithCombination({}, markUpOptions);

      comboboxSheet.setAttributes({
        label: 'You are in a meeting',
        placeholder: 'Select an option',
      });
      comboboxSheet.setChildren(`
      <mdc-selectlistbox>
        <mdc-option prefix-icon="apps-bold" value="add-apps" selected label="Add apps"></mdc-option>
      </mdc-selectlistbox>
      `);
      await comboboxSheet.createMarkupWithCombination({}, markUpOptions);

      await comboboxSheet.mountStickerSheet();
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-combobox', {
          element: comboboxSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility attributes', async () => {
      await test.step('should have proper ARIA attributes', async () => {
        const { input } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        // Check input attributes
        await expect(input).toHaveAttribute('role', ROLE.COMBOBOX);
        await expect(input).toHaveAttribute('aria-haspopup', ROLE.LISTBOX);
        await expect(input).toHaveAttribute('aria-autocomplete', ROLE.LIST);
        await expect(input).toHaveAttribute('aria-expanded', 'false');

        // Check dropdown attributes when opened
        await input.click();
        await expect(input).toHaveAttribute('aria-expanded', 'true');
      });
    });

    /**
     * MOUSE INTERACTIONS
     */
    await test.step('mouse interactions', async () => {
      await test.step('should dispatch click event when clicked on combobox', async () => {
        const { combobox } = await setup({ componentsPage });
        const waitForClick = await componentsPage.waitForEvent(combobox, 'click');
        await combobox.click();
        await expect(waitForClick).toEventEmitted();
      });

      await test.step('should dispatch click and focus events when clicked on combobox input', async () => {
        const { input } = await setup({ componentsPage });
        const waitForClick = await componentsPage.waitForEvent(input, 'click');
        const waitForFocus = await componentsPage.waitForEvent(input, 'focus');
        await input.click();
        await expect(waitForClick).toEventEmitted();
        await expect(waitForFocus).toEventEmitted();
      });

      await test.step('should dispatch input and change events when clicked on an combobox option', async () => {
        const { combobox, options } = await setup({
          componentsPage,
          options: defaultOptions,
        });
        await combobox.click();
        const waitForInput = await componentsPage.waitForEvent(combobox, 'input');
        const waitForChange = await componentsPage.waitForEvent(combobox, 'change');
        await options.first().click();
        await expect(waitForInput).toEventEmitted();
        await expect(waitForChange).toEventEmitted();
      });

      await test.step('should open dropdown when input is clicked', async () => {
        const { input, dropdown, options } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await input.click();
        await expect(dropdown).toBeVisible();
        await expect(options).toHaveCount(6);
      });

      await test.step('should close dropdown when clicking outside', async () => {
        const { input, dropdown } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await input.click();
        await expect(dropdown).toBeVisible();

        // Click outside the combobox
        await componentsPage.page.mouse.click(0, 0);
        await expect(dropdown).not.toBeVisible();
      });

      await test.step('should select an option when clicked', async () => {
        const { input, dropdown, getOptionByText } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await input.click();
        const option = getOptionByText('Australia');
        await option.click();

        await expect(input).toHaveValue('Australia');
        await expect(dropdown).not.toBeVisible();
      });

      await test.step('should not show disabled options when an option is selected', async () => {
        const disabledOptionsList = defaultOptions.map(option =>
          option.value === 'austria' ? { ...option, disabled: true } : option,
        );
        const { input, dropdown, getOptionByText } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: disabledOptionsList,
        });
        await input.click();
        await expect(dropdown).toBeVisible();
        const australiaOption = getOptionByText('Australia');
        await australiaOption.click(); // select Australia
        await expect(dropdown).not.toBeVisible();
        await expect(input).toHaveValue('Australia');
        await input.click();
        await expect(dropdown).toBeVisible();
        const austriaOption = getOptionByText('Austria');
        await expect(austriaOption).not.toBeVisible();
      });
    });

    /**
     * KEYBOARD INTERACTIONS
     */
    await test.step('keyboard interactions', async () => {
      await test.step('should dispatch focus event when focus moves to combobox', async () => {
        const { input } = await setup({ componentsPage });
        const waitForFocus = await componentsPage.waitForEvent(input, 'focus');
        await componentsPage.actionability.pressTab();
        await expect(waitForFocus).toEventEmitted();
      });

      await test.step('should dispatch input and keydown events when characters are typed', async () => {
        const { input } = await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        const waitForInput = await componentsPage.waitForEvent(input, 'input');
        const waitForKeyDown = await componentsPage.waitForEvent(input, 'keydown');
        await input.press('a');
        await expect(waitForInput).toEventEmitted();
        await expect(waitForKeyDown).toEventEmitted();
        await input.press('b');
        await expect(waitForInput).toEventEmitted();
        await expect(waitForKeyDown).toEventEmitted();
      });

      await test.step('should open dropdown with ArrowDown key', async () => {
        const { input, dropdown, options } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.press(KEYS.ARROW_DOWN);

        await expect(dropdown).toBeVisible();
        await expect(options.first()).toHaveAttribute('aria-selected', 'true');
      });

      await test.step('should navigate options with arrow keys', async () => {
        const { input, getOptionByText } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.press(KEYS.ARROW_DOWN); // Open dropdown

        // Navigate down twice
        await input.press(KEYS.ARROW_DOWN);
        await expect(getOptionByText('Austria')).toHaveAttribute('aria-selected', 'true');

        await input.press(KEYS.ARROW_DOWN);
        await expect(getOptionByText('Australia')).toHaveAttribute('aria-selected', 'true');
        await expect(getOptionByText('Austria')).not.toHaveAttribute('aria-selected', 'true');

        // Navigate back up
        await input.press(KEYS.ARROW_UP);
        await expect(getOptionByText('Austria')).toHaveAttribute('aria-selected', 'true');
      });

      await test.step('should filter options when typing', async () => {
        const { input, options } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.fill('aus');

        const visibleOptions = options.filter({ visible: true });
        await expect(visibleOptions).toHaveCount(2);
        await expect(visibleOptions.first()).toContainText('Austria');
        await expect(visibleOptions.last()).toContainText('Australia');
      });

      await test.step('should select an option with Enter key', async () => {
        const { input, dropdown } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.press(KEYS.ARROW_DOWN); // Open dropdown
        await input.press(KEYS.ARROW_DOWN); // Move to first option
        await input.press(KEYS.ENTER); // Select option

        await expect(input).toHaveValue('Austria');
        await expect(dropdown).not.toBeVisible();
      });

      await test.step('should close dropdown with Escape key', async () => {
        const { input, dropdown } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.press(KEYS.ARROW_DOWN); // Open dropdown
        await input.press(KEYS.ESCAPE); // Close dropdown

        await expect(dropdown).not.toBeVisible();
      });

      await test.step('should clear input text with Escape key', async () => {
        const { input, dropdown } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.fill('aus');
        await input.press(KEYS.ARROW_DOWN); // Open dropdown
        await input.press(KEYS.ESCAPE); // Close dropdown

        await expect(dropdown).not.toBeVisible();
        await input.press(KEYS.ESCAPE); // Clear input text
        await expect(input).toHaveValue('');
      });

      await test.step('should leave the combobox with valid input text using the keyboard', async () => {
        const { input, dropdown } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.fill('aus');
        await expect(dropdown).toBeVisible();
        await componentsPage.actionability.pressTab();

        await expect(input).toHaveValue('aus');
        await expect(dropdown).not.toBeVisible();
      });

      await test.step('should update to current selected option when navigating and tabbing with valid input', async () => {
        const { input, dropdown } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.fill('aus');
        await input.press(KEYS.ARROW_DOWN); // Select the first option
        await input.press(KEYS.TAB); // Then tab away

        await expect(input).toHaveValue('Austria');
        await expect(dropdown).not.toBeVisible();
      });

      await test.step('should keep invalid input when tabbing away', async () => {
        const { input, dropdown } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.fill('as');
        await expect(dropdown).not.toBeVisible();

        await input.press(KEYS.TAB);

        await expect(input).toHaveValue('as');
        await expect(dropdown).not.toBeVisible();
      });

      await test.step('should select focused option when tabbing away', async () => {
        const { input, dropdown, options } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        await componentsPage.actionability.pressTab();
        await input.press(KEYS.ARROW_DOWN); // Open dropdown and focus first option

        // Verify first option is focused
        const firstOption = options.first();
        await expect(firstOption).toHaveAttribute('aria-selected', 'true');
        await input.press(KEYS.TAB);

        await expect(input).toHaveValue('Argentina');
        await expect(dropdown).not.toBeVisible();
      });
    });

    /**
     * KEYBOARD NAVIGATION WITH INPUT
     */
    await test.step('keyboard navigation with input', async () => {
      await test.step('should handle typing while navigating options', async () => {
        const { input, dropdown, getOptionByText } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
        });

        // Initial setup - open dropdown and type 'b'
        await input.focus();
        await input.press('b');

        // Verify dropdown shows 'Bangladesh' and 'Brazil'
        const brazilOption = getOptionByText('Brazil');
        const bangladeshOption = getOptionByText('Bangladesh');

        await expect(dropdown).toBeVisible();
        await expect(brazilOption).toBeVisible();
        await expect(bangladeshOption).toBeVisible();

        // First arrow down - focus should move to 'Bangladesh'
        await input.press(KEYS.ARROW_DOWN);
        await expect(bangladeshOption).toHaveAttribute('aria-selected', 'true');

        // Second arrow down - focus should move to 'Brazil'
        await input.press(KEYS.ARROW_DOWN);
        await expect(brazilOption).toHaveAttribute('aria-selected', 'true');

        // Type 'a' - should update input to 'ba' and filter options
        await input.press('a');
        await expect(input).toHaveValue('ba');

        // Verify only 'Bangladesh' is shown
        await expect(brazilOption).not.toBeVisible();
        await expect(bangladeshOption).toBeVisible();

        // Arrow down should focus 'Bangladesh'
        await input.press(KEYS.ARROW_DOWN);
        await expect(bangladeshOption).toHaveAttribute('aria-selected', 'true');

        // Press Enter to select
        await input.press(KEYS.ENTER);

        // Verify selection and dropdown state
        await expect(input).toHaveValue('Bangladesh');
        await expect(dropdown).not.toBeVisible();
        await expect(input).toBeFocused();
      });

      await test.step('should show no-result-text when no options match', async () => {
        const { input, options, combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'no-result-text': 'No results found',
        });

        await componentsPage.actionability.pressTab();
        await input.fill('xyz');

        const visibleOptions = options.filter({ visible: true });
        await expect(visibleOptions).toHaveCount(0);
        // Should show no-result-text
        await expect(combobox.locator('[part="no-result-text"]')).toContainText('No results found');
      });

      await test.step('should type and select an option using keyboard when uncontrolled', async () => {
        const { combobox, input, dropdown, getOptionByText } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'control-type': 'uncontrolled',
        });
        const inputPromise = componentsPage.waitForEvent(input, 'input');

        await input.focus();
        await input.fill('bangla');
        await inputPromise;
        await expect(dropdown).toBeVisible();
        await expect(getOptionByText('Bangladesh')).toBeVisible();
        await input.press(KEYS.ARROW_DOWN); // Focus the first option
        await input.press(KEYS.ENTER); // Select option

        await expect(combobox).toHaveAttribute('value', 'bangladesh');
        await expect(input).toHaveValue('Bangladesh');
        await expect(dropdown).not.toBeVisible();
      });

      await test.step('should type and not select an option using keyboard when controlled', async () => {
        const { combobox, input } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'control-type': 'controlled',
        });
        const inputPromise = componentsPage.waitForEvent(input, 'input');
        await input.focus();
        await input.press('b');
        await inputPromise;
        await input.press('r');
        await inputPromise;
        await input.press('a');
        await inputPromise;

        await expect(input).not.toHaveValue('Bangladesh');
        await expect(combobox).not.toHaveAttribute('value', 'bangladesh');
      });

      await test.step('should select an option when the control type is uncontrolled', async () => {
        const { input, combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'control-type': 'uncontrolled',
        });
        const inputPromise = componentsPage.waitForEvent(combobox, 'input');
        const changePromise = componentsPage.waitForEvent(combobox, 'change');
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN); // Open dropdown
        await componentsPage.page.keyboard.press(KEYS.ENTER); // Select first option
        await expect(combobox).toHaveAttribute('value', 'argentina');
        await expect(input).toHaveValue('Argentina');
        await inputPromise;
        await changePromise;
      });

      await test.step('should not select an option when the control type is controlled', async () => {
        const { input, combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'control-type': 'controlled',
          value: 'canada',
        });
        const changePromise = componentsPage.waitForEvent(combobox, 'change');
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN); // Open dropdown
        await componentsPage.page.keyboard.press(KEYS.ENTER); // Select first option
        await expect(combobox).not.toHaveAttribute('value', 'argentina');
        await expect(input).not.toHaveValue('Argentina');
        // The previously set value should remain
        await expect(combobox).toHaveAttribute('value', 'canada');
        await expect(input).toHaveValue('Canada');
        await changePromise;
      });

      await test.step('should not select an option when the control type is controlled', async () => {
        const { input, combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'control-type': 'controlled',
          value: 'canada',
        });
        const changePromise = componentsPage.waitForEvent(combobox, 'change');
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN); // Open dropdown
        await componentsPage.page.keyboard.press(KEYS.ENTER); // Select first option
        await expect(combobox).not.toHaveAttribute('value', 'argentina');
        await expect(input).not.toHaveValue('Argentina');
        // The previously set value should remain
        await expect(combobox).toHaveAttribute('value', 'canada');
        await expect(input).toHaveValue('Canada');
        await changePromise;
      });

      await test.step('should reflect parent value changes in controlled mode', async () => {
        const { input, combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          'control-type': 'controlled',
          value: 'canada',
        });

        // Change the value programmatically
        await componentsPage.page.evaluate(() => {
          const combobox = document.querySelector('mdc-combobox') as Combobox;
          combobox.value = 'brazil';
        });

        await expect(combobox).toHaveAttribute('value', 'brazil');
        await expect(input).toHaveValue('Brazil');
      });
    });

    /**
     * FORM HANDLING
     */
    await test.step('form handling', async () => {
      await test.step('combobox in form should be validated when required and form is submitted', async () => {
        const { form, combobox, dropdown } = await setup(
          {
            componentsPage,
            label: defaultLabel,
            placeholder: defaultPlaceholder,
            options: defaultOptions,
            required: true,
          },
          true,
        );

        await form.evaluate((formElement: HTMLFormElement) => {
          formElement.addEventListener('submit', event => event.preventDefault());
        });

        const formSubmitButton = form.locator('mdc-button[type="submit"]');
        // Try to submit the form without making any selection
        await formSubmitButton.click();

        // Check if validation message is shown
        const validationMessage = await combobox.evaluate(element => {
          const combobox = element as HTMLInputElement;
          return combobox.validationMessage;
        });

        expect(validationMessage).not.toBe('');

        // click outside to make sure the validation message is not shown anymore before proceeding
        await componentsPage.page.mouse.click(0, 0);

        // Now select an option and verify form can be submitted
        await combobox.click();
        await combobox.locator('mdc-option').nth(1).click();

        // Verify the selected value and popover is closed
        await expect(dropdown).not.toBeVisible();
        await expect(combobox).toHaveAttribute('value', 'austria');

        // Try to submit the form again
        await formSubmitButton.click();

        // Now form should be valid
        const isFormValid = await form.evaluate((formEl: HTMLFormElement) => formEl.checkValidity());

        expect(isFormValid).toBe(true);
      });

      await test.step('should maintain validation state after form reset', async () => {
        const customMessage = 'Please select your headquarters location';

        const { form, combobox, input, dropdown } = await setup(
          {
            componentsPage,
            label: defaultLabel,
            placeholder: defaultPlaceholder,
            options: defaultOptions,
            required: true,
            name: 'headquarters',
            'validation-message': customMessage,
          },
          true,
        );

        // Add reset button to the form
        await componentsPage.page.evaluate(() => {
          const resetButton = document.createElement('mdc-button');
          resetButton.setAttribute('type', 'reset');
          resetButton.setAttribute('size', '24');
          resetButton.setAttribute('variant', 'secondary');
          resetButton.textContent = 'Reset';
          document.querySelector('form')?.appendChild(resetButton);
        });

        const submitButton = form.locator('mdc-button[type="submit"]');
        const resetButton = form.locator('mdc-button[type="reset"]');

        // First select an option
        await input.click();
        await input.fill('aus');
        await expect(dropdown).toBeVisible();
        await combobox.locator('mdc-option').nth(1).click();

        // Verify the selected value
        await expect(combobox).toHaveAttribute('value', 'austria');

        // Reset the form
        await resetButton.click();

        // Verify the selection has been cleared
        const comboboxTextContent = await input.getAttribute('placeholder');
        expect(comboboxTextContent?.trim()).toBe(defaultPlaceholder);

        // Try to submit the form and check that it requires a selection
        await submitButton.click();

        // Check that the form is still invalid
        const isFormValid = await form.evaluate((formEl: HTMLFormElement) => formEl.checkValidity());
        expect(isFormValid).toBe(false);

        // Check if custom validation message is still displayed after reset
        const inputEl = combobox.locator('input[part="internal-native-input"]');
        const validationMessage = await inputEl.evaluate(element => {
          const input = element as HTMLInputElement;
          return input.validationMessage;
        });

        expect(validationMessage).toBe(customMessage);
      });
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      await test.step('selected option should be updated when changing the value attribute programmatically', async () => {
        const { input, combobox, options } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          value: 'austria',
          id: 'combobox-value-change',
        });

        await test.step('should update selected option when value attribute is changed from austria to australia', async () => {
          await componentsPage.page.evaluate(() => {
            const combobox = document.querySelector('mdc-combobox[id="combobox-value-change"]') as Combobox;
            if (combobox) {
              combobox.value = 'australia';
            }
          });

          await expect(combobox).toHaveAttribute('value', 'australia');
          await expect(combobox.locator('mdc-option').nth(2)).toHaveAttribute('selected');
        });

        await test.step('should fallback to placeholder when an invalid value is passed', async () => {
          await componentsPage.page.evaluate(() => {
            const combobox = document.querySelector('mdc-combobox[id="combobox-value-change"]') as Combobox;
            if (combobox) {
              combobox.value = 'invalid-option';
            }
          });

          await expect(combobox).toHaveAttribute('value', '');
          expect(await options.locator('[selected]').count()).toBe(0);
          await expect(input).toHaveAttribute('placeholder', defaultPlaceholder);
        });
      });

      await test.step('should update the value attribute when an option is selected programattically', async () => {
        const { combobox } = await setup({
          componentsPage,
          label: defaultLabel,
          placeholder: defaultPlaceholder,
          options: defaultOptions,
          id: 'combobox-value-select',
        });
        await expect(combobox).toHaveAttribute('value', '');
        await componentsPage.page.evaluate(() => {
          const option = document.querySelector('mdc-option[value="brazil"]');
          if (option) {
            option.setAttribute('selected', 'true');
          }
        });
        await expect(combobox).toHaveAttribute('value', 'brazil');
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('combobox-default');
    });
  });
});
