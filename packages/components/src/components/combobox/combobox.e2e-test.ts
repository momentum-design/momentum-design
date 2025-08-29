import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  disabled?: boolean;
  'data-aria-label'?: string;
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

const createOptionsMarkup = (options: Array<{ value: string; label: string }>) => `
    <mdc-selectlistbox>${options
      .map(option => `<mdc-option value="${option.value}" label="${option.label}"></mdc-option>`)
      .join('\n')}</mdc-selectlistbox>
  `;

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  await componentsPage.mount({
    html: `
      <mdc-combobox
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : 'data-aria-label="Combobox label"'}
      >
        ${restArgs.options ? createOptionsMarkup(restArgs.options) : ''}
      </mdc-combobox>
    `,
    clearDocument: true,
  });

  const combobox = componentsPage.page.locator('mdc-combobox');
  const input = combobox.locator(`[role="${ROLE.COMBOBOX}"]`);
  const dropdown = combobox.locator(`[role="${ROLE.LISTBOX}"]`);
  const options = dropdown.locator(`[role="${ROLE.OPTION}"]`);

  return {
    combobox,
    input,
    dropdown,
    options,
    getOptionByText: (text: string) => options.filter({ hasText: text }),
  };
};

test.describe('Combobox Feature Scenarios', () => {
  test('mdc-combobox', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const comboboxSheet = new StickerSheet(componentsPage, 'mdc-combobox', 'margin: 0.25rem');

      // Default state
      comboboxSheet.setAttributes({
        label: defaultLabel,
        placeholder: defaultPlaceholder,
      });
      await comboboxSheet.createMarkupWithCombination({});

      // With value
      await comboboxSheet.createMarkupWithCombination({
        attributes: { value: 'aus' },
      });

      // Disabled state
      await comboboxSheet.createMarkupWithCombination({
        attributes: { disabled: true },
      });

      await comboboxSheet.mountStickerSheet();
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-combobox', {
          element: comboboxSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility attributes', async () => {
      await test.step('should have proper ARIA attributes', async () => {
        const { input, dropdown } = await setup({
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
        await expect(dropdown).toHaveAttribute('role', ROLE.LISTBOX);
        await expect(input).toHaveAttribute('aria-expanded', 'true');
      });
    });

    /**
     * MOUSE INTERACTIONS
     */
    await test.step('mouse interactions', async () => {
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
    });

    /**
     * KEYBOARD INTERACTIONS
     */
    await test.step('keyboard interactions', async () => {
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
        await input.press(KEYS.TAB); // Tab away

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
        await expect(input).not.toBeFocused();
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
        await input.click();
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
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('combobox-default');
    });
  });
});
