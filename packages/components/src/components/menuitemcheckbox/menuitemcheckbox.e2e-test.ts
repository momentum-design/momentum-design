import { expect, JSHandle, Locator } from '@playwright/test';

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
  controlled?: boolean;
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
          ${restArgs.controlled ? 'controlled' : ''}
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
   * FUNCTIONALITY
   */
  const testFunctionality = async (controlled: boolean) => {
    const expectChecked = async (checkbox: Locator) => {
      await expect(checkbox).toHaveAttribute('aria-checked', 'true');
      await expect(checkbox).toHaveAttribute('checked', '');
      await expect(checkbox.locator('mdc-staticcheckbox')).toHaveAttribute('checked', '');
    };

    const expectUnchecked = async (checkbox: Locator) => {
      await expect(checkbox).toHaveAttribute('aria-checked', 'false');
      await expect(checkbox).not.toHaveAttribute('checked', '');
      await expect(checkbox.locator('mdc-staticcheckbox')).toBeVisible();
      await expect(checkbox.locator('mdc-staticcheckbox')).not.toHaveAttribute('checked');
    };

    const expectDisabled = async (checkbox: Locator) => {
      await expect(checkbox).toHaveAttribute('aria-disabled', 'true');
      await expect(checkbox).toHaveAttribute('disabled', '');
      await expect(checkbox.locator('mdc-staticcheckbox')).toHaveAttribute('disabled', '');
    };

    const expectSoftDisabled = async (checkbox: Locator) => {
      await expect(checkbox).toHaveAttribute('aria-disabled', 'true');
      await expect(checkbox).toHaveAttribute('soft-disabled');
      await expect(checkbox.locator('mdc-staticcheckbox')).not.toHaveAttribute('disabled');
    };

    const getChangeEventFiredPromiseFunction = async (componentsPage: ComponentsPage, checkbox: Locator) =>
      componentsPage.waitForEvent(checkbox, 'change', { timeout: 100 });

    const expectChangeEventNotFired = async (changeEventFiredPromiseFunction: () => Promise<JSHandle<boolean>>) => {
      await expect(changeEventFiredPromiseFunction).rejects.toBeDefined();
    };

    const expectChangeEventFired = async (changeEventFiredPromiseFunction: () => Promise<JSHandle<boolean>>) =>
      changeEventFiredPromiseFunction();

    await test.step(`functionality, controlled=${controlled}`, async () => {
      // Default (unchecked) state
      await test.step('default state (unchecked) mouse nav', async () => {
        const checkbox = await setup({ componentsPage, controlled });
        await expect(checkbox).toHaveAttribute('role', ROLE.MENUITEMCHECKBOX);
        await expectUnchecked(checkbox);

        const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await checkbox.click();
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        if (controlled) {
          await expectUnchecked(checkbox);
        } else {
          await expectChecked(checkbox);
        }
      });

      await test.step('default state (unchecked) keyboard nav', async () => {
        const checkbox = await setup({ componentsPage, controlled });
        await expect(checkbox).toHaveAttribute('role', ROLE.MENUITEMCHECKBOX);
        await expectUnchecked(checkbox);
        let changeEventFiredPromiseFunction: () => Promise<JSHandle<boolean>>;

        await componentsPage.actionability.pressTab();
        await expect(checkbox).toBeFocused();

        changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        if (controlled) {
          await expectUnchecked(checkbox);
        } else {
          await expectChecked(checkbox);
        }

        changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        await expectUnchecked(checkbox);
      });

      await test.step('default state (unchecked) external control', async () => {
        const checkbox = await setup({ componentsPage, controlled });
        await expect(checkbox).toHaveAttribute('role', ROLE.MENUITEMCHECKBOX);
        await expectUnchecked(checkbox);

        const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await checkbox.evaluate(element => element.setAttribute('checked', ''));
        await expectChangeEventNotFired(changeEventFiredPromiseFunction);
        await expectChecked(checkbox);
      });

      // Checked state
      await test.step('checked state mouse nav', async () => {
        const checkbox = await setup({ componentsPage, controlled, checked: true });
        await expectChecked(checkbox);

        const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await checkbox.click();
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        if (controlled) {
          await expectChecked(checkbox);
        } else {
          await expectUnchecked(checkbox);
        }
      });

      await test.step('checked state keyboard nav', async () => {
        const checkbox = await setup({ componentsPage, controlled, checked: true });
        await expectChecked(checkbox);
        let changeEventFiredPromiseFunction: () => Promise<JSHandle<boolean>>;

        await componentsPage.actionability.pressTab();
        await expect(checkbox).toBeFocused();

        changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        if (controlled) {
          await expectChecked(checkbox);
        } else {
          await expectUnchecked(checkbox);
        }

        changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        await expectChecked(checkbox);
      });

      await test.step('checked state external control', async () => {
        const checkbox = await setup({ componentsPage, controlled, checked: true });
        await expectChecked(checkbox);

        const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await checkbox.evaluate(element => element.removeAttribute('checked'));
        await expectChangeEventNotFired(changeEventFiredPromiseFunction);
        await expectUnchecked(checkbox);
      });

      // Disabled state
      await test.step('disabled state mouse nav', async () => {
        const checkbox = await setup({ componentsPage, controlled, disabled: true });
        await expectDisabled(checkbox);
        await expectUnchecked(checkbox);

        // Click should not emit change event when disabled
        const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await checkbox.click({ force: true });
        await expectChangeEventNotFired(changeEventFiredPromiseFunction);
        await expectUnchecked(checkbox);
      });

      await test.step('disabled state keyboard nav', async () => {
        const checkbox = await setup({ componentsPage, controlled, disabled: true });
        await expectDisabled(checkbox);
        await expectUnchecked(checkbox);
        let changeEventFiredPromiseFunction: () => Promise<JSHandle<boolean>>;

        // Disabled checkbox cannot be focussed by keyboard, but can be focussed programatically
        await componentsPage.actionability.pressTab();
        await expect(checkbox).not.toBeFocused();

        await checkbox.focus();
        await expect(checkbox).toBeFocused();

        changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expectChangeEventNotFired(changeEventFiredPromiseFunction);
        await expectUnchecked(checkbox);

        changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expectChangeEventNotFired(changeEventFiredPromiseFunction);
        await expectUnchecked(checkbox);
      });

      await test.step('disabled state external control', async () => {
        const checkbox = await setup({ componentsPage, controlled, disabled: true });
        await expectDisabled(checkbox);
        await expectUnchecked(checkbox);

        const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await checkbox.evaluate(element => element.setAttribute('checked', ''));
        await expectChangeEventNotFired(changeEventFiredPromiseFunction);
        await expectChecked(checkbox);
      });

      // Soft Disabled state
      await test.step('soft disabled state mouse nav', async () => {
        const checkbox = await setup({ componentsPage, controlled, softDisabled: true });
        await expectSoftDisabled(checkbox);
        await expectUnchecked(checkbox);

        // Click still emits change event and visually toggles when soft disabled
        const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await checkbox.click({ force: true });
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        if (controlled) {
          await expectUnchecked(checkbox);
        } else {
          await expectChecked(checkbox);
        }
      });

      await test.step('soft disabled state keyboard nav', async () => {
        const checkbox = await setup({ componentsPage, controlled, softDisabled: true });
        await expectSoftDisabled(checkbox);
        await expectUnchecked(checkbox);
        let changeEventFiredPromiseFunction;

        // Soft disabled checkbox can be focussed by keyboard
        await componentsPage.actionability.pressTab();
        await expect(checkbox).toBeFocused();

        changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        if (controlled) {
          await expectUnchecked(checkbox);
        } else {
          await expectChecked(checkbox);
        }

        changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        await expectUnchecked(checkbox);
      });

      await test.step('soft disabled state external control', async () => {
        const checkbox = await setup({ componentsPage, controlled, softDisabled: true });
        await expectSoftDisabled(checkbox);
        await expectUnchecked(checkbox);

        const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await checkbox.evaluate(element => element.setAttribute('checked', ''));
        await expectChangeEventNotFired(changeEventFiredPromiseFunction);
        await expectChecked(checkbox);
      });
    });
  };
  await testFunctionality(true);
  await testFunctionality(false);

  /**
   * INDICATOR TYPES
   */
  const testIndicatorTypes = async (controlled: boolean) => {
    await test.step(`indicator types, controlled=${controlled}`, async () => {
      // Checkbox indicator
      await test.step('checkbox indicator, unchecked', async () => {
        const checkbox = await setup({ componentsPage, controlled, indicator: INDICATOR.CHECKBOX });
        await expect(checkbox.locator('mdc-staticcheckbox')).toBeVisible();
        await expect(checkbox.locator('mdc-staticcheckbox')).not.toHaveAttribute('checked', '');
      });

      await test.step('checkbox indicator, checked', async () => {
        const checkbox = await setup({ componentsPage, controlled, indicator: INDICATOR.CHECKBOX, checked: true });
        await expect(checkbox.locator('mdc-staticcheckbox')).toHaveAttribute('checked', '');
      });

      // Checkmark indicator
      await test.step('checkmark indicator, unchecked', async () => {
        const checkbox = await setup({ componentsPage, controlled, indicator: INDICATOR.CHECKMARK });
        await expect(checkbox.locator('mdc-icon[name="check-bold"]')).not.toBeVisible();
      });

      await test.step('checkmark indicator, checked', async () => {
        const checkbox = await setup({ componentsPage, controlled, indicator: INDICATOR.CHECKMARK, checked: true });
        await expect(checkbox.locator('mdc-icon[name="check-bold"]')).toBeVisible();
      });

      // Toggle indicator
      await test.step('toggle indicator, unchecked', async () => {
        const checkbox = await setup({ componentsPage, controlled, indicator: INDICATOR.TOGGLE });
        await expect(checkbox.locator('mdc-statictoggle')).toBeVisible();
        await expect(checkbox.locator('mdc-statictoggle')).not.toHaveAttribute('checked', '');
      });

      await test.step('toggle indicator, checked', async () => {
        const checkbox = await setup({ componentsPage, controlled, indicator: INDICATOR.TOGGLE, checked: true });
        await expect(checkbox.locator('mdc-statictoggle')).toHaveAttribute('checked', '');
      });
    });
  };
  await testIndicatorTypes(true);
  await testIndicatorTypes(false);

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
