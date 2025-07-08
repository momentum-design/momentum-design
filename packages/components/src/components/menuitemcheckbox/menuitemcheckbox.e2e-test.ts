import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
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
  softDisabled?: boolean;
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
          ${restArgs.softDisabled ? 'soft-disabled' : ''}
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

    // Soft Disabled state
    await test.step('soft disabled state', async () => {
      const checkbox = await setup({ componentsPage, softDisabled: true });
      await expect(checkbox).toHaveAttribute('soft-disabled');
      await checkbox.focus();
      await expect(checkbox).toBeFocused();
      await expect(checkbox).toHaveAttribute('aria-disabled', 'true');
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

      await componentsPage.actionability.pressTab();
      await expect(checkbox).toBeFocused();

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
    await componentsPage.mount({
      html: `
        <div role="${ROLE.MENU}" style="display: flex; flex-direction: column; gap: 0.5rem">
          <mdc-menuitemcheckbox label="Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox checked label="Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled label="Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox soft-disabled label="Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox checked disabled label="Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox checked soft-disabled label="Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" label="Menu Item Checkbox Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" checked label="Menu Item Checkbox Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" disabled label="Menu Item Checkbox Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" soft-disabled label="Menu Item Checkbox Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" checked disabled label="Menu Item Checkbox Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" checked soft-disabled label="Menu Item Checkbox Toggle Indicator"></mdc-menuitemcheckbox>
        </div>
      `,
      clearDocument: true,
    });
    await componentsPage.visualRegression.takeScreenshot('mdc-menuitemcheckbox-default-and-toggle');
    await componentsPage.mount({
      html: `
        <div role="${ROLE.MENU}" style="display: flex; flex-direction: column; gap: 0.25rem">
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" label="Menu Item Checkbox None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" checked label="Menu Item Checkbox None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" disabled label="Menu Item Checkbox None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" soft-disabled label="Menu Item Checkbox None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" checked disabled label="Menu Item Checkbox None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" checked soft-disabled label="Menu Item Checkbox None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" label="Menu Item Checkbox Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" checked label="Menu Item Checkbox Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" disabled label="Menu Item Checkbox Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" soft-disabled label="Menu Item Checkbox Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" checked disabled label="Menu Item Checkbox Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" checked soft-disabled label="Menu Item Checkbox Checkmark Indicator"></mdc-menuitemcheckbox>
        </div>
      `,
      clearDocument: true,
    });
    await componentsPage.visualRegression.takeScreenshot('mdc-menuitemcheckbox-none-and-checkmark');
    await componentsPage.mount({
      html: `
        <div role="${ROLE.MENU}" style="display: flex; flex-direction: column; gap: 0.25rem">
          <mdc-menuitemcheckbox label="Selected Checkbox With Default Indicator" secondary-label="Optional secondary label for more info" checked></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Unselected Checkbox With Default Indicator" secondary-label="Optional secondary label for more info"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" label="Selected Checkbox With Toggle Indicator" secondary-label="Optional secondary label for more info" checked></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" label="Unselected Checkbox With Toggle Indicator" secondary-label="Optional secondary label for more info"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" label="Selected Checkbox With Checkmark Indicator" secondary-label="Optional secondary label for more info" checked></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" label="Unselected Checkbox With Checkmark Indicator" secondary-label="Optional secondary label for more info"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" label="Selected Checkbox With No Indicator" secondary-label="Optional secondary label for more info" checked></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" label="Unselected Checkbox With No Indicator" secondary-label="Optional secondary label for more info"></mdc-menuitemcheckbox>
        </div>
      `,
      clearDocument: true,
    });
    await componentsPage.visualRegression.takeScreenshot('mdc-menuitemcheckbox-secondary-label');
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('menuitemcheckbox-default');
  });
});
