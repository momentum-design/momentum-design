import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { DEFAULTS, TOGGLE_SIZE } from './toggle.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name?: string;
  value?: string;
  label?: string;
  'help-text'?: string;
  disabled?: boolean;
  checked?: boolean;
  'data-aria-label'?: string;
  size?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-toggle
        ${restArgs.name ? `name="${restArgs.name}"` : ''}
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
        ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.checked ? 'checked' : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
      >
      </mdc-toggle>
    `,
    clearDocument: true,
  });
  const toggle = componentsPage.page.locator('mdc-toggle');
  await toggle.waitFor();
  return toggle;
};

const attributeTestCases = async (componentsPage: ComponentsPage) => {
  const toggle = await setup({ componentsPage });
  await test.step('default attributes for toggle', async () => {
    await expect(toggle).toHaveAttribute('size', DEFAULTS.SIZE);
    await expect(toggle).toHaveAttribute('name');
    await expect(toggle).toHaveAttribute('value');
    // test mdc-icon which is present inside mdc-toggle
    const icon = await componentsPage.page.locator('mdc-icon');
    await icon.waitFor();
    await expect(icon).toHaveAttribute('name', 'cancel-bold');
  });

  await test.step('should have label element when the label attribute is passed', async () => {
    await componentsPage.setAttributes(toggle, { label: 'Toggle label' });
    const label = await componentsPage.page.locator('label');
    await expect(label).toHaveText('Toggle label');
  });

  await test.step('should have icon element with check-bold icon name when checked attribute is true', async () => {
    await componentsPage.setAttributes(toggle, { checked: 'true' });
    const icon = await componentsPage.page.locator('mdc-icon');
    await icon.waitFor();
    await expect(icon).toHaveAttribute('name', 'check-bold');
  });

  await test.step('should have mdc-text element when the help-text attribute is passed', async () => {
    await componentsPage.setAttributes(toggle, { 'help-text': 'This is a help text' });
    const mdcText = await componentsPage.page.locator('mdc-text');
    const textContent = await mdcText.textContent();
    expect(textContent?.trim()).toBe('This is a help text');
  });

  await test.step('should have disabled attribute when the disabled attribute is true', async () => {
    await componentsPage.setAttributes(toggle, { disabled: 'true' });
    await expect(toggle).toHaveAttribute('disabled', 'true');
  });
};

const testToRun = async (componentsPage: ComponentsPage) => {
  /**
   * ATTRIBUTES
   */
  await test.step('Attributes for ToggleComponent', async () => {
    await test.step('attributes', async () => {
      await attributeTestCases(componentsPage);
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('input should be checked/unchecked when the toggle is toggled', async () => {
      const toggle = await setup({ componentsPage });
      const input = toggle.locator('input[type="checkbox"]');

      await input.click();
      await expect(input).toBeChecked();
      // untoggle
      await input.click();
      await expect(input).not.toBeChecked();
    });

    await test.step('toggle should be focused when tab key is pressed with keyboard', async () => {
      const toggle = await setup({ componentsPage, label: 'Toggle label' });
      // By default, it should not be focusable.
      await expect(toggle).not.toBeFocused();

      await componentsPage.actionability.pressTab();
      await expect(toggle).toBeFocused();
    });

    await test.step('toggle should be toggled when space key is pressed with keyboard', async () => {
      const toggle = await setup({ componentsPage, label: 'Toggle label' });

      await componentsPage.actionability.pressTab();
      await expect(toggle).toBeFocused();

      await componentsPage.page.keyboard.press('Space');
      await expect(toggle).toHaveAttribute('checked');

      await componentsPage.page.keyboard.press('Space');
      await expect(toggle).not.toHaveAttribute('checked');
    });

    await test.step('toggle should be toggled when clicked/pressed on hover', async () => {
      const toggle = await setup({ componentsPage });

      await toggle.hover();
      await toggle.click();
      await expect(toggle).toHaveAttribute('checked');

      await toggle.click();
      await expect(toggle).not.toHaveAttribute('checked');
    });

    await test.step('toggle should not be Focused or toggled when it is disabled', async () => {
      const toggle = await setup({ componentsPage, label: 'Toggle label', disabled: true });

      await componentsPage.actionability.pressTab();
      await expect(toggle).not.toBeFocused();

      await toggle.click();
      await expect(toggle).not.toHaveAttribute('checked');
    });
  });

  /**
   * VISUAL REGRESSION
   */
  const toggleStickerSheet = new StickerSheet(componentsPage, 'mdc-toggle');
  await test.step('visual-regression', async () => {
    await toggleStickerSheet.setAttributes({
      'data-aria-label': 'This is aria label text',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    await toggleStickerSheet.setAttributes({
      label: 'I agree to the terms',
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    await toggleStickerSheet.setAttributes({
      label: 'Selected toggle Label',
      checked: true,
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    await toggleStickerSheet.setAttributes({
      label: 'Selected toggle Label',
      'help-text': 'This is a help text',
      checked: true,
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    await toggleStickerSheet.setAttributes({
      label: 'Disabled toggle Label',
      'help-text': 'This is a help text',
      disabled: true,
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });
    await toggleStickerSheet.setAttributes({
      label: 'Disabled Selected toggle Label',
      'help-text': 'This is a help text',
      disabled: true,
      checked: true,
    });
    await toggleStickerSheet.createMarkupWithCombination({ size: TOGGLE_SIZE });

    await toggleStickerSheet.mountStickerSheet();
    const container = toggleStickerSheet.getWrapperContainer();
    await container.evaluate((wrapper) => {
      const rowWrappers = wrapper.querySelectorAll('.componentRowWrapper') as NodeListOf<HTMLElement>;
      Array.from(rowWrappers).forEach((rowWrapper) => {
        const modifiedRowWrapper = rowWrapper;
        modifiedRowWrapper.style.gap = '1.25rem';
      });
    });

    await test.step('matches screenshot of toggle element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-toggle', {
        element: container,
      });
    });

    /**
      * ACCESSIBILITY
      */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-toggle');
    });
  });
};

test('standalone', async ({ componentsPage }) => {
  await testToRun(componentsPage);
});
