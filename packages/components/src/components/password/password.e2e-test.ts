import { expect } from '@playwright/test';
import { test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

// Setup function for mounting the password component
const setup = async (args: any = {}, isForm = false) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      ${isForm ? '<form>' : ''}
        <mdc-password
          id="${restArgs.id || ''}"
          ${restArgs.value ? `value="${restArgs.value}"` : ''}
          ${restArgs.placeholder ? `placeholder="${restArgs.placeholder}"` : ''}
          ${restArgs.required ? 'required' : ''}
          ${restArgs.readonly ? 'readonly' : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.maxlength ? `maxlength="${restArgs.maxlength}"` : ''}
          ${restArgs.minlength ? `minlength="${restArgs.minlength}"` : ''}
          ${restArgs.label ? `label="${restArgs.label}"` : ''}
          ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
          ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
          ${restArgs.autofocus ? 'autofocus' : ''}
          ${restArgs.autocomplete ? `autocomplete="${restArgs.autocomplete}"` : ''}
          ${restArgs.showHideButtonAriaLabel ? `show-hide-button-aria-label="${restArgs.showHideButtonAriaLabel}"` : ''}
        ></mdc-password>
      ${isForm ? '<mdc-button type="submit" size="24">Submit</mdc-button></form>' : ''}
    `,
    clearDocument: true,
  });
  if (isForm) {
    const form = componentsPage.page.locator('form');
    await form.waitFor();
    return form;
  }
  const password = componentsPage.page.locator('mdc-password');
  await password.waitFor();
  return password;
};

test.use({ viewport: { width: 800, height: 1500 } });
test('mdc-password', async ({ componentsPage }) => {
  const password = await setup({
    componentsPage,
    id: 'test-mdc-password',
    placeholder: 'Password',
    label: 'Password',
    helpText: 'Help Text', // FIXED: use kebab-case
    showHideButtonAriaLabel: 'Show/Hide Password', // FIXED: use kebab-case
  });
  const inputEl = password.locator('input');
  const trailingButton = password.locator('mdc-button[part="trailing-button"]');

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await expect(password).toHaveAttribute('id', 'test-mdc-password');
    await expect(password).toHaveAttribute('placeholder', 'Password');
    await expect(password).toHaveAttribute('label', 'Password');
    await expect(password).toHaveAttribute('help-text', 'Help Text');
    // Set trailing-button attribute to true before checking for the trailing button
    await password.evaluate((el: Element) => el.setAttribute('trailing-button', ''));
    await inputEl.fill('test');
    await expect(trailingButton).toBeVisible();
    await expect(trailingButton).toHaveAttribute('aria-label', 'Show/Hide Password');
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('component should be focusable with tab', async () => {
      await componentsPage.actionability.pressTab();
      await expect(password).toBeFocused();
      await inputEl.fill('test');
      await expect(inputEl).toHaveValue('test');
      await componentsPage.actionability.pressTab();
      await expect(trailingButton).toBeFocused();
    });

    await test.step('show/hide button toggles password visibility', async () => {
      await inputEl.fill('secret');
      await expect(inputEl).toHaveAttribute('type', 'password');
      await trailingButton.click();
      await expect(inputEl).toHaveAttribute('type', 'text');
      await trailingButton.click();
      await expect(inputEl).toHaveAttribute('type', 'password');
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-password');
    stickerSheet.setAttributes({
      id: 'test-mdc-password',
      placeholder: 'Password',
      label: 'Password',
      'help-text': 'Help Text',
    });
    await stickerSheet.createMarkupWithCombination({});
    await stickerSheet.mountStickerSheet();
    const container = stickerSheet.getWrapperContainer();
    await componentsPage.page.mouse.move(0, 0);
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-password', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('password-default');
  });
});
test('mdc-password helper text types', async ({ componentsPage }) => {
  const iconSelector = 'mdc-icon[part="helper-icon"]';

  // Default: no icon
  let password = await setup({
    componentsPage,
    label: 'Password',
    helpText: 'Default helper text',
    helpTextType: 'default',
  });
  await expect(password.locator(iconSelector)).toHaveCount(0);

  // Error: error-legacy-badge-filled icon
  password = await setup({
    componentsPage,
    label: 'Password',
    helpText: 'Error helper text',
    helpTextType: 'error',
  });
  const errorIcon = password.locator(iconSelector);
  await expect(errorIcon).toHaveAttribute('name', 'error-legacy-badge-filled');

  // Success: check-circle-badge-filled icon
  password = await setup({
    componentsPage,
    label: 'Password',
    helpText: 'Success helper text',
    helpTextType: 'success',
  });
  const successIcon = password.locator(iconSelector);
  await expect(successIcon).toHaveAttribute('name', 'check-circle-badge-filled');
});
