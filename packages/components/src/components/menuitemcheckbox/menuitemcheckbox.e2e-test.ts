import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';

import { INDICATOR } from './menuitemcheckbox.constants';
import type { Indicator } from './menuitemcheckbox.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  indicator?: Indicator;
  label?: string;
  secondaryLabel?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <div role="${ROLE.MENU}">
        <mdc-menuitemcheckbox
          ${restArgs.name ? `name="${restArgs.name}"` : 'test-checkbox'}
          ${restArgs.value ? `value="${restArgs.value}"` : 'test-value'}
          ${restArgs.checked ? 'checked' : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.indicator ? `indicator="${restArgs.indicator}"` : ''}
          ${restArgs.label ? `label="${restArgs.label}"` : 'Checkbox Label'}
          ${restArgs.secondaryLabel ? `secondary-label="${restArgs.secondaryLabel}"` : ''}
        >
        </mdc-menuitemcheckbox>
      </div>
    `,
    clearDocument: true,
  });

  const menuitemcheckbox = componentsPage.page.locator('mdc-menuitemcheckbox');
  await menuitemcheckbox.waitFor();
  return menuitemcheckbox;
};

test.use({ viewport: { width: 1200, height: 1000 } });
test('mdc-menuitemcheckbox', async ({ componentsPage }) => {
  /**
   * BASIC FUNCTIONALITY
   */
  await test.step('basic functionality', async () => {
    // Default state
    await test.step('default state', async () => {
      const checkbox = await setup({ componentsPage });
      await expect(checkbox).toHaveAttribute('role', ROLE.MENUITEMCHECKBOX);
      await expect(checkbox).toHaveAttribute('aria-checked', 'false');
      await expect(checkbox).not.toHaveAttribute('checked', '');
    });

    // Checked state
    await test.step('checked state', async () => {
      const checkbox = await setup({ componentsPage, checked: true });
      await expect(checkbox).toHaveAttribute('aria-checked', 'true');
      await expect(checkbox).toHaveAttribute('checked', '');
    });

    // Disabled state
    await test.step('disabled state', async () => {
      const checkbox = await setup({ componentsPage, disabled: true });
      await expect(checkbox).toHaveAttribute('aria-disabled', 'true');
      await expect(checkbox).toHaveAttribute('disabled', '');

      // Click should not change state when disabled
      await checkbox.click({ force: true });
      await expect(checkbox).toHaveAttribute('aria-checked', 'false');
      await expect(checkbox).not.toHaveAttribute('checked', '');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    // Toggle using mouse
    await test.step('toggle using mouse', async () => {
      const checkbox = await setup({ componentsPage });

      // Toggle on
      await checkbox.click();
      await expect(checkbox).toHaveAttribute('checked', '');
      await expect(checkbox).toHaveAttribute('aria-checked', 'true');

      // Toggle off
      await checkbox.click();
      await expect(checkbox).not.toHaveAttribute('checked', '');
      await expect(checkbox).toHaveAttribute('aria-checked', 'false');
    });

    // Toggle using keyboard
    await test.step('toggle using keyboard', async () => {
      const checkbox = await setup({ componentsPage });
      await checkbox.focus();

      // Toggle on with Space
      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(checkbox).toHaveAttribute('checked', '');

      // Toggle off with Space
      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(checkbox).not.toHaveAttribute('checked', '');

      // Toggle on with Enter
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(checkbox).toHaveAttribute('checked', '');

      // Toggle off with Enter
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(checkbox).not.toHaveAttribute('checked', '');
    });
  });

  /**
   * INDICATOR TYPES
   */
  await test.step('indicator types', async () => {
    // Checkbox indicator
    await test.step('checkbox indicator', async () => {
      const checkbox = await setup({ componentsPage, indicator: INDICATOR.CHECKBOX });
      await expect(checkbox.locator('mdc-staticcheckbox')).toBeVisible();
      await expect(checkbox.locator('mdc-staticcheckbox')).not.toHaveAttribute('checked', '');

      // Check the state
      await checkbox.click();
      await expect(checkbox.locator('mdc-staticcheckbox')).toHaveAttribute('checked', '');
    });

    // Checkmark indicator
    await test.step('checkmark indicator', async () => {
      const checkbox = await setup({ componentsPage, indicator: INDICATOR.CHECKMARK });

      // Initially hidden when unchecked
      await expect(checkbox.locator('mdc-icon[name="check-bold"]')).not.toBeVisible();

      // Visible when checked
      await checkbox.click();
      await expect(checkbox.locator('mdc-icon[name="check-bold"]')).toBeVisible();
    });

    // Toggle indicator
    await test.step('toggle indicator', async () => {
      const checkbox = await setup({ componentsPage, indicator: INDICATOR.TOGGLE });
      await expect(checkbox.locator('mdc-statictoggle')).toBeVisible();
      await expect(checkbox.locator('mdc-statictoggle')).not.toHaveAttribute('checked', '');

      // Toggle on
      await checkbox.click();
      await expect(checkbox.locator('mdc-statictoggle')).toHaveAttribute('checked', '');
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const menuitemcheckboxSheet = new StickerSheet(componentsPage, 'mdc-menuitemcheckbox', 'margin: 0.25rem 0;');
    const options = { createNewRow: true };
    const label = 'Menu Item Checkbox';
    menuitemcheckboxSheet.setAttributes({ label });
    await menuitemcheckboxSheet.createMarkupWithCombination({}, options);
    menuitemcheckboxSheet.setAttributes({ label, checked: true });
    await menuitemcheckboxSheet.createMarkupWithCombination({}, options);
    menuitemcheckboxSheet.setAttributes({ label, disabled: true });
    await menuitemcheckboxSheet.createMarkupWithCombination({}, options);
    menuitemcheckboxSheet.setAttributes({ label, checked: true, disabled: true });
    await menuitemcheckboxSheet.createMarkupWithCombination({}, options);
    menuitemcheckboxSheet.setAttributes({ label, checked: true });
    await menuitemcheckboxSheet.createMarkupWithCombination({ indicator: INDICATOR }, options);
    menuitemcheckboxSheet.setAttributes({
      label: 'Selected Checkbox With Secondary Label',
      checked: true,
      'secondary-label': 'Secondary Label',
    });
    await menuitemcheckboxSheet.createMarkupWithCombination({ indicator: INDICATOR }, options);
    menuitemcheckboxSheet.setAttributes({
      label: 'Unselected Checkbox With Secondary Label',
      'secondary-label': 'Secondary Label',
    });
    await menuitemcheckboxSheet.createMarkupWithCombination({ indicator: INDICATOR }, options);

    await menuitemcheckboxSheet.mountStickerSheet({
      role: ROLE.MENU,
      wrapperStyle: 'display: flex; flex-direction: column; gap: 0.5rem',
    });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-menuitemcheckbox', {
        element: menuitemcheckboxSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('menuitemcheckbox-default');
  });
});
