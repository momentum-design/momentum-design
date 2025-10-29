import { expect, JSHandle, Locator } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';
import { ControlType } from '../controltypeprovider/controltypeprovider.types';

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
  controlType?: string;
  providedControlType?: ControlType;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      ${restArgs.providedControlType ? `<mdc-controltypeprovider control-type="${restArgs.providedControlType}">` : ''}
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
            ${restArgs.controlType ? `control-type="${restArgs.controlType}"` : ''}
          >
          </mdc-menuitemcheckbox>
        </div>
      ${restArgs.providedControlType ? `</mdc-controltypeprovider>` : ''}
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

  type TestFunctionalityOptions = {
    controlType: string | undefined;
    expectedControlType: ControlType;
    providedControlType?: ControlType;
    testAllFunctionality?: Boolean;
  };

  const testFunctionality = async ({
    controlType,
    expectedControlType,
    providedControlType,
    testAllFunctionality = false,
  }: TestFunctionalityOptions) => {
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

    await test.step(`functionality, controlType=${controlType}${providedControlType ? ` providedControlType=${providedControlType}` : ''}`, async () => {
      // Default (unchecked) state
      await test.step('default state (unchecked) attributes and mouse nav', async () => {
        const checkbox = await setup({ componentsPage, controlType, providedControlType });
        await expect(checkbox).toHaveAttribute('role', ROLE.MENUITEMCHECKBOX);
        await expect(checkbox).toHaveAttribute('control-type', expectedControlType);
        await expectUnchecked(checkbox);

        const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
        await checkbox.click();
        await expectChangeEventFired(changeEventFiredPromiseFunction);
        if (expectedControlType === 'controlled') {
          await expectUnchecked(checkbox);
        } else {
          await expectChecked(checkbox);
        }
      });

      if (testAllFunctionality) {
        await test.step('default state (unchecked) keyboard nav', async () => {
          const checkbox = await setup({ componentsPage, controlType, providedControlType });
          await expectUnchecked(checkbox);
          let changeEventFiredPromiseFunction: () => Promise<JSHandle<boolean>>;

          await componentsPage.actionability.pressTab();
          await expect(checkbox).toBeFocused();

          changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
          await componentsPage.page.keyboard.press(KEYS.SPACE);
          await expectChangeEventFired(changeEventFiredPromiseFunction);
          if (expectedControlType === 'controlled') {
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
          const checkbox = await setup({ componentsPage, controlType, providedControlType });
          await expectUnchecked(checkbox);

          const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
          await checkbox.evaluate(element => element.setAttribute('checked', ''));
          await expectChangeEventNotFired(changeEventFiredPromiseFunction);
          await expectChecked(checkbox);
        });

        // Checked state
        await test.step('checked state mouse nav', async () => {
          const checkbox = await setup({ componentsPage, controlType, providedControlType, checked: true });
          await expectChecked(checkbox);

          const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
          await checkbox.click();
          await expectChangeEventFired(changeEventFiredPromiseFunction);
          if (expectedControlType === 'controlled') {
            await expectChecked(checkbox);
          } else {
            await expectUnchecked(checkbox);
          }
        });

        await test.step('checked state keyboard nav', async () => {
          const checkbox = await setup({ componentsPage, controlType, providedControlType, checked: true });
          await expectChecked(checkbox);
          let changeEventFiredPromiseFunction: () => Promise<JSHandle<boolean>>;

          await componentsPage.actionability.pressTab();
          await expect(checkbox).toBeFocused();

          changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
          await componentsPage.page.keyboard.press(KEYS.SPACE);
          await expectChangeEventFired(changeEventFiredPromiseFunction);
          if (expectedControlType === 'controlled') {
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
          const checkbox = await setup({ componentsPage, controlType, providedControlType, checked: true });
          await expectChecked(checkbox);

          const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
          await checkbox.evaluate(element => element.removeAttribute('checked'));
          await expectChangeEventNotFired(changeEventFiredPromiseFunction);
          await expectUnchecked(checkbox);
        });

        // Disabled state
        await test.step('disabled state mouse nav', async () => {
          const checkbox = await setup({ componentsPage, controlType, providedControlType, disabled: true });
          await expectDisabled(checkbox);
          await expectUnchecked(checkbox);

          // Click should not emit change event when disabled
          const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
          await checkbox.click({ force: true });
          await expectChangeEventNotFired(changeEventFiredPromiseFunction);
          await expectUnchecked(checkbox);
        });

        await test.step('disabled state keyboard nav', async () => {
          const checkbox = await setup({ componentsPage, controlType, providedControlType, disabled: true });
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
          const checkbox = await setup({ componentsPage, controlType, providedControlType, disabled: true });
          await expectDisabled(checkbox);
          await expectUnchecked(checkbox);

          const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
          await checkbox.evaluate(element => element.setAttribute('checked', ''));
          await expectChangeEventNotFired(changeEventFiredPromiseFunction);
          await expectChecked(checkbox);
        });

        // Soft Disabled state
        await test.step('soft disabled state mouse nav', async () => {
          const checkbox = await setup({ componentsPage, controlType, providedControlType, softDisabled: true });
          await expectSoftDisabled(checkbox);
          await expectUnchecked(checkbox);

          // Click does not emit change event and visually toggles when soft disabled
          const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
          await checkbox.click({ force: true });
          await expectChangeEventNotFired(changeEventFiredPromiseFunction);
          await expectUnchecked(checkbox);
        });

        await test.step('soft disabled state keyboard nav', async () => {
          const checkbox = await setup({ componentsPage, controlType, providedControlType, softDisabled: true });
          await expectSoftDisabled(checkbox);
          await expectUnchecked(checkbox);
          let changeEventFiredPromiseFunction;

          // Soft disabled checkbox can be focussed by keyboard
          await componentsPage.actionability.pressTab();
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

        await test.step('soft disabled state external control', async () => {
          const checkbox = await setup({ componentsPage, controlType, providedControlType, softDisabled: true });
          await expectSoftDisabled(checkbox);
          await expectUnchecked(checkbox);

          const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, checkbox);
          await checkbox.evaluate(element => element.setAttribute('checked', ''));
          await expectChangeEventNotFired(changeEventFiredPromiseFunction);
          await expectChecked(checkbox);
        });
      }
    });
  };
  await testFunctionality({ controlType: 'controlled', expectedControlType: 'controlled', testAllFunctionality: true });
  await testFunctionality({
    controlType: 'uncontrolled',
    expectedControlType: 'uncontrolled',
    testAllFunctionality: true,
  });

  /**
   * ControlTypeMixin FUNCTIONALITY - NB THIS IS THE ONLY PLACE THIS IS TESTED
   */

  await testFunctionality({ controlType: undefined, expectedControlType: 'uncontrolled' });
  await testFunctionality({ controlType: 'invalid', expectedControlType: 'uncontrolled' });
  await testFunctionality({
    controlType: 'controlled',
    providedControlType: 'uncontrolled',
    expectedControlType: 'controlled',
  });
  await testFunctionality({
    controlType: 'uncontrolled',
    providedControlType: 'controlled',
    expectedControlType: 'uncontrolled',
  });
  await testFunctionality({
    controlType: undefined,
    providedControlType: 'uncontrolled',
    expectedControlType: 'uncontrolled',
  });
  await testFunctionality({
    controlType: undefined,
    providedControlType: 'controlled',
    expectedControlType: 'controlled',
  });
  await testFunctionality({
    controlType: 'invalid',
    providedControlType: 'uncontrolled',
    expectedControlType: 'uncontrolled',
  });
  await testFunctionality({
    controlType: 'invalid',
    providedControlType: 'controlled',
    expectedControlType: 'controlled',
  });

  /**
   * INDICATOR TYPES
   */
  const testIndicatorTypes = async (controlType: string | undefined) => {
    await test.step(`indicator types, controlType=${controlType}`, async () => {
      // Checkbox indicator
      await test.step('checkbox indicator, unchecked', async () => {
        const checkbox = await setup({ componentsPage, controlType, indicator: INDICATOR.CHECKBOX });
        await expect(checkbox.locator('mdc-staticcheckbox')).toBeVisible();
        await expect(checkbox.locator('mdc-staticcheckbox')).not.toHaveAttribute('checked', '');
      });

      await test.step('checkbox indicator, checked', async () => {
        const checkbox = await setup({ componentsPage, controlType, indicator: INDICATOR.CHECKBOX, checked: true });
        await expect(checkbox.locator('mdc-staticcheckbox')).toHaveAttribute('checked', '');
      });

      // Checkmark indicator
      await test.step('checkmark indicator, unchecked', async () => {
        const checkbox = await setup({ componentsPage, controlType, indicator: INDICATOR.CHECKMARK });
        await expect(checkbox.locator('mdc-icon[name="check-bold"]')).not.toBeVisible();
      });

      await test.step('checkmark indicator, checked', async () => {
        const checkbox = await setup({ componentsPage, controlType, indicator: INDICATOR.CHECKMARK, checked: true });
        await expect(checkbox.locator('mdc-icon[name="check-bold"]')).toBeVisible();
      });

      // Toggle indicator
      await test.step('toggle indicator, unchecked', async () => {
        const checkbox = await setup({ componentsPage, controlType, indicator: INDICATOR.TOGGLE });
        await expect(checkbox.locator('mdc-statictoggle')).toBeVisible();
        await expect(checkbox.locator('mdc-statictoggle')).not.toHaveAttribute('checked', '');
      });

      await test.step('toggle indicator, checked', async () => {
        const checkbox = await setup({ componentsPage, controlType, indicator: INDICATOR.TOGGLE, checked: true });
        await expect(checkbox.locator('mdc-statictoggle')).toHaveAttribute('checked', '');
      });
    });
  };
  await testIndicatorTypes('controlled');
  await testIndicatorTypes('uncontrolled');
  await testIndicatorTypes(undefined);

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await componentsPage.mount({
      html: `
        <div role="${ROLE.MENU}" style="display: flex; flex-direction: column; gap: 0.5rem">
          <mdc-menuitemcheckbox label="Default Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox checked label="Checked Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled label="Disabled Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox soft-disabled label="Soft Disabled Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox checked disabled label="Checked Disabled Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox checked soft-disabled label="Checked Soft Disabled Menu Item Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" label="Default Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" checked label="Checked Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" disabled label="Disabled Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" soft-disabled label="Soft Disabled Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" checked disabled label="Checked Disabled Toggle Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.TOGGLE}" checked soft-disabled label="Checked Soft Disabled Toggle Indicator"></mdc-menuitemcheckbox>
        </div>
      `,
      clearDocument: true,
    });
    await componentsPage.visualRegression.takeScreenshot('mdc-menuitemcheckbox-default-and-toggle');
    await componentsPage.mount({
      html: `
        <div role="${ROLE.MENU}" style="display: flex; flex-direction: column; gap: 0.25rem">
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" label="Default None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" checked label="Checked None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" disabled label="Disabled None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" soft-disabled label="Soft Disabled None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" checked disabled label="Checked Disabled None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.NONE}" checked soft-disabled label="Checked Soft Disabled None Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" label="Default Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" checked label="Checked Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" disabled label="Disabled Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" soft-disabled label="Soft Disabled Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" checked disabled label="Checked Disabled Checkmark Indicator"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="${INDICATOR.CHECKMARK}" checked soft-disabled label="Checked Soft Disabled Checkmark Indicator"></mdc-menuitemcheckbox>
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
