import { expect } from '@playwright/test';

import { KEYS } from '../../utils/keys';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  children: string;
  placeholder?: string;
  height?: string;
  value?: string;
};

const label = 'Select an option';
const defaultPlaceholder = 'Select placeholder';
const defaultChildren = (selected?: boolean) => `
  <mdc-option value="option1">Option Label 1</mdc-option>
  <mdc-option value="option2" ${selected ? 'selected' : ''}>Option Label 2</mdc-option>
  <mdc-option value="option3">Option Label 3</mdc-option>
`;

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-select
        ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
        ${restArgs.height ? `height="${restArgs.height}"` : ''}
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
      >
        ${restArgs.children}
      </mdc-select>
    `,
    clearDocument: true,
  });
  const select = componentsPage.page.locator('mdc-select');
  await select.waitFor();
  return select;
};

test('mdc-select', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const markUpOptions = { createNewRow: true };
    const selectSheet = new StickerSheet(componentsPage, 'mdc-select', 'margin: 0.25rem');
    selectSheet.setAttributes({ label, placeholder: 'Select an headquarters from the list' });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({ label, placeholder: defaultPlaceholder });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      'help-text-type': 'success',
      'help-text': 'This is a success message',
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      'help-text-type': 'warning',
      'help-text': 'This is a warning message',
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      'help-text-type': 'error',
      'help-text': 'This is an error message',
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      disabled: true,
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);
    selectSheet.setAttributes({
      label,
      placeholder: defaultPlaceholder,
      readonly: true,
    });
    await selectSheet.createMarkupWithCombination({}, markUpOptions);

    // select component with an option selected
    selectSheet.setAttributes({
      label: 'You are in a meeting',
      placeholder: 'Select an option',
    });
    selectSheet.setChildren(`<mdc-option prefix-icon="alert-bold">Mute notifications</mdc-option>
      <mdc-option prefix-icon="apps-bold" selected>Add apps</mdc-option>
      <mdc-option prefix-icon="stored-info-bold">View direct message policy</mdc-option>
      <mdc-option prefix-icon="calendar-day-bold">Meeting capabilities</mdc-option>
      <mdc-option prefix-icon="exit-room-bold">Leave</mdc-option>`);
    await selectSheet.createMarkupWithCombination({}, markUpOptions);

    await selectSheet.mountStickerSheet();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-select', {
        element: selectSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('select-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('should have default attributes', async () => {
      const select = await setup({ componentsPage, children: defaultChildren() });
      await expect(select).toHaveAttribute('help-text-type', 'default');
      await expect(select).toHaveAttribute('value', 'option1');
      const mdcTextElement = select.locator('mdc-text[part="base-text selected"]');
      const textContent = await mdcTextElement.textContent();
      // The first option should be visible by default when no option is selected and placeholder is not defined.
      expect(textContent?.trim()).toBe('Option Label 1');
      const arrowIcon = select.locator('mdc-icon[name="arrow-down-bold"]');
      await arrowIcon.waitFor();
      expect(arrowIcon).toBeDefined();
    });

    await test.step('set default/initial value', async () => {
      const select = await setup({
        componentsPage,
        children: defaultChildren(),
        placeholder: defaultPlaceholder,
        value: 'option2',
      });
      await expect(select).toHaveAttribute('value', 'option2');

      const mdcTextElement = select.locator('mdc-text[part="base-text selected"]');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe('Option Label 2');
    });

    await test.step('should set the height of the select dropdown to be fixed', async () => {
      const select = await setup({ componentsPage, children: defaultChildren(), height: '2rem' });
      await select.locator('div[part=container]').click();
      const dropdown = select.locator('mdc-popover');
      await dropdown.waitFor();
      await expect(dropdown).toHaveCSS('--mdc-popover-max-height', '2rem');
    });

    await test.step('should have placeholder attribute when no option is selected', async () => {
      const select = await setup({ componentsPage, placeholder: defaultPlaceholder, children: defaultChildren() });
      const mdcTextElement = select.locator('mdc-text[part="base-text "]');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe(defaultPlaceholder);
    });

    await test.step('should not have placeholder attribute when an option is selected', async () => {
      const select = await setup({
        componentsPage,
        placeholder: defaultPlaceholder,
        children: defaultChildren(true),
      });
      const mdcTextElement = select.locator('mdc-text[part="base-text selected"]');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe('Option Label 2');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('component should open and close dropdown when clicked', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await select.locator('div[id="select-base-triggerid"]').click();
        await expect(select.locator('mdc-popover[id="options-popover"]')).toBeVisible();

        await select.locator('div[id="select-base-triggerid"]').click();
        await expect(select.locator('mdc-popover[id="options-popover"]')).not.toBeVisible();
      });

      await test.step('component should open dropdown and select 2nd option', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await select.locator('div[id="select-base-triggerid"]').click();
        await expect(select.locator('mdc-popover[id="options-popover"]')).toBeVisible();

        await select.locator('mdc-option').nth(1).click();
        await expect(select.locator('mdc-text[part="base-text selected"]')).toHaveText('Option Label 2');
      });
    });

    await test.step('component should reflect selected value in querySelector and value attribute', async () => {
      const select = await setup({ componentsPage, children: defaultChildren(true) });
      const selectedValue = await componentsPage.page.evaluate(() => document.querySelector('mdc-select')?.value || '');

      await expect(selectedValue).toBe('option2');
      await expect(select).toHaveAttribute('value', 'option2');
      await expect(select.locator('mdc-option').nth(1)).toHaveAttribute('selected');
    });

    await test.step('keyboard', async () => {
      await test.step('component should open dropdown when space/enter is pressed', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-popover[id="options-popover"]')).toBeVisible();

        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-popover[id="options-popover"]')).not.toBeVisible();

        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expect(select.locator('mdc-popover[id="options-popover"]')).toBeVisible();

        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expect(select.locator('mdc-popover[id="options-popover"]')).not.toBeVisible();
      });

      await test.step('component should open dropdown select an option and then close the dropdown', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-popover[id="options-popover"]')).toBeVisible();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-text[part="base-text selected"]')).toHaveText('Option Label 2');
        await expect(select.locator('mdc-popover[id="options-popover"]')).not.toBeVisible();
      });

      await test.step('component should navigate in between options list', async () => {
        const select = await setup({ componentsPage, children: defaultChildren() });
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 1' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 2' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 3' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 2' })).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
        await expect(select.locator('mdc-option').filter({ hasText: 'Option Label 1' })).toBeFocused();
      });
    });
  });
});
