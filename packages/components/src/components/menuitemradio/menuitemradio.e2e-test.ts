import { expect, JSHandle, Locator } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';
import { ControlType } from '../controltypeprovider/controltypeprovider.types';

import { INDICATOR } from './menuitemradio.constants';
import type { Indicator } from './menuitemradio.types';

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
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <div role="${ROLE.MENU}">
        <mdc-menuitemradio
          ${restArgs.name ? `name="${restArgs.name}"` : 'test-radio'}
          ${restArgs.value ? `value="${restArgs.value}"` : 'test-radio'}
          ${restArgs.checked ? 'checked' : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.softDisabled ? 'soft-disabled' : ''}
          ${restArgs.indicator ? `indicator="${restArgs.indicator}"` : ''}
          ${restArgs.label ? `label="${restArgs.label}"` : ''}
          ${restArgs.secondaryLabel ? `secondary-label="${restArgs.secondaryLabel}"` : ''}
          ${restArgs.controlType ? `control-type="${restArgs.controlType}"` : ''}
        >
        </mdc-menuitemradio>
      </div>
    `,
    clearDocument: true,
  });

  const menuitemradio = componentsPage.page.locator('mdc-menuitemradio');
  await menuitemradio.waitFor();
  return menuitemradio;
};

const setupGroup = async (componentsPage: ComponentsPage, controlType?: ControlType) => {
  const controlTypeString = controlType ? `control-type="${controlType}"` : '';
  await componentsPage.mount({
    html: `
      <div role="${ROLE.MENU}">
        <mdc-menusection>
          <mdc-menuitemradio name="theme" ${controlTypeString} value="light" label="Light"></mdc-menuitemradio>
          <mdc-menuitemradio name="theme" ${controlTypeString} value="dark" checked label="Dark"></mdc-menuitemradio>
          <mdc-menuitemradio name="view" ${controlTypeString} value="grid" indicator="checkmark" label="Grid"></mdc-menuitemradio>
          <mdc-menuitemradio name="view" ${controlTypeString} value="list" indicator="checkmark" checked label="List"></mdc-menuitemradio>
        </mdc-menusection>
      </div>
    `,
    clearDocument: true,
  });

  const radios = componentsPage.page.locator('mdc-menuitemradio');
  await radios.first().waitFor();
  return {
    lightRadio: radios.nth(0),
    darkRadio: radios.nth(1),
    gridRadio: radios.nth(2),
    listRadio: radios.nth(3),
  };
};

test('mdc-menuitemradio', async ({ componentsPage }) => {
  const expectChecked = async (radio: Locator) => {
    await expect(radio).toHaveAttribute('aria-checked', 'true');
    await expect(radio).toHaveAttribute('checked', '');
    await expect(radio.locator('mdc-staticradio')).toHaveAttribute('checked', '');
  };

  const expectUnchecked = async (radio: Locator) => {
    await expect(radio).toHaveAttribute('aria-checked', 'false');
    await expect(radio).not.toHaveAttribute('checked', '');
    await expect(radio.locator('mdc-staticradio')).toBeVisible();
    await expect(radio.locator('mdc-staticradio')).not.toHaveAttribute('checked');
  };

  const expectDisabled = async (radio: Locator) => {
    await expect(radio).toHaveAttribute('aria-disabled', 'true');
    await expect(radio).toHaveAttribute('disabled', '');
    await expect(radio.locator('mdc-staticradio')).toHaveAttribute('disabled', '');
  };

  const expectSoftDisabled = async (radio: Locator) => {
    await expect(radio).toHaveAttribute('aria-disabled', 'true');
    await expect(radio).toHaveAttribute('soft-disabled');
    await expect(radio.locator('mdc-staticradio')).not.toHaveAttribute('disabled');
  };

  const getChangeEventFiredPromiseFunction = async (componentsPage: ComponentsPage, radio: Locator) =>
    componentsPage.waitForEvent(radio, 'change', { timeout: 100 });

  const expectChangeEventNotFired = async (changeEventFiredPromiseFunction: () => Promise<JSHandle<boolean>>) => {
    await expect(changeEventFiredPromiseFunction).rejects.toBeDefined();
  };

  const expectChangeEventFired = async (changeEventFiredPromiseFunction: () => Promise<JSHandle<boolean>>) =>
    changeEventFiredPromiseFunction();

  /**
   * BASIC FUNCTIONALITY
   */
  await test.step('basic functionality', async () => {
    // Default state
    await test.step('default state', async () => {
      const radio = await setup({ componentsPage });
      await expect(radio).toHaveAttribute('role', ROLE.MENUITEMRADIO);
      await expect(radio).toHaveAttribute('control-type', 'uncontrolled');
      await expectUnchecked(radio);

      // Click should change state when unchecked
      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, radio);
      await radio.click();
      await expectChangeEventFired(changeEventFiredPromiseFunction);
      await expectChecked(radio);
    });

    // Checked state
    await test.step('checked state', async () => {
      const radio = await setup({ componentsPage, checked: true });
      await expectChecked(radio);

      // Click should not change state when checked
      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, radio);
      await radio.click();
      await expectChangeEventNotFired(changeEventFiredPromiseFunction);
      await expectChecked(radio);
    });

    // Disabled state
    await test.step('disabled state', async () => {
      const radio = await setup({ componentsPage, disabled: true });
      await expectDisabled(radio);
      await expectUnchecked(radio);

      // Click should not change state when disabled
      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, radio);
      await radio.click({ force: true });
      await expectChangeEventNotFired(changeEventFiredPromiseFunction);
      await expectUnchecked(radio);
    });

    // Soft disabled state
    await test.step('soft disabled state', async () => {
      const radio = await setup({ componentsPage, softDisabled: true });
      await expectSoftDisabled(radio);

      // Click should change state when soft disabled
      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, radio);
      await radio.click({ force: true });
      await expectChangeEventFired(changeEventFiredPromiseFunction);
      await expectChecked(radio);
    });
  });

  /**
   * SELECTION BEHAVIOR
   */
  await test.step('selection behavior', async () => {
    // Mouse selection
    await test.step('mouse selection - uncontrolled', async () => {
      const { lightRadio, darkRadio } = await setupGroup(componentsPage);

      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, lightRadio);
      await lightRadio.click();
      await expectChangeEventFired(changeEventFiredPromiseFunction);
      await expectChecked(lightRadio);
      await expectUnchecked(darkRadio);
    });

    await test.step('mouse selection - controlled', async () => {
      const { lightRadio, darkRadio } = await setupGroup(componentsPage, 'controlled');

      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, lightRadio);
      await lightRadio.click();
      await expectChangeEventFired(changeEventFiredPromiseFunction);
      await expectUnchecked(lightRadio);
      await expectChecked(darkRadio);
    });

    // Keyboard selection with Enter
    await test.step('keyboard selection with Enter - uncontrolled', async () => {
      const { lightRadio, darkRadio } = await setupGroup(componentsPage);

      await componentsPage.actionability.pressTab();
      await expect(lightRadio).toBeFocused();
      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, lightRadio);
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expectChangeEventFired(changeEventFiredPromiseFunction);
      await expectChecked(lightRadio);
      await expectUnchecked(darkRadio);
    });

    await test.step('keyboard selection with Enter - controlled', async () => {
      const { lightRadio, darkRadio } = await setupGroup(componentsPage, 'controlled');

      await componentsPage.actionability.pressTab();
      await expect(lightRadio).toBeFocused();
      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, lightRadio);
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expectChangeEventFired(changeEventFiredPromiseFunction);
      await expectUnchecked(lightRadio);
      await expectChecked(darkRadio);
    });

    // Keyboard selection with Space
    await test.step('keyboard selection with Space - uncontrolled', async () => {
      const { lightRadio, darkRadio } = await setupGroup(componentsPage);

      await componentsPage.actionability.pressTab();
      await expect(lightRadio).toBeFocused();
      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, lightRadio);
      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expectChangeEventFired(changeEventFiredPromiseFunction);
      await expectChecked(lightRadio);
      await expectUnchecked(darkRadio);
    });

    await test.step('keyboard selection with Space - controlled', async () => {
      const { lightRadio, darkRadio } = await setupGroup(componentsPage, 'controlled');

      await componentsPage.actionability.pressTab();
      await expect(lightRadio).toBeFocused();
      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, lightRadio);
      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expectChangeEventFired(changeEventFiredPromiseFunction);
      await expectUnchecked(lightRadio);
      await expectChecked(darkRadio);
    });

    // Selection by external control
    await test.step('selection by external control - uncontrolled', async () => {
      const { lightRadio, darkRadio } = await setupGroup(componentsPage);

      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, lightRadio);
      await lightRadio.evaluate(element => element.setAttribute('checked', ''));
      await expectChangeEventNotFired(changeEventFiredPromiseFunction);
      await expectChecked(lightRadio);
      await expectUnchecked(darkRadio);
    });

    await test.step('selection by external control - controlled', async () => {
      const { lightRadio, darkRadio } = await setupGroup(componentsPage, 'controlled');

      const changeEventFiredPromiseFunction = await getChangeEventFiredPromiseFunction(componentsPage, lightRadio);
      await lightRadio.evaluate(element => element.setAttribute('checked', ''));
      await expectChangeEventNotFired(changeEventFiredPromiseFunction);
      await expectChecked(lightRadio);
      await expectUnchecked(darkRadio);
    });
  });

  /**
   * GROUPING AND NAMING
   */
  await test.step('grouping and naming', async () => {
    const { lightRadio, darkRadio, gridRadio, listRadio } = await setupGroup(componentsPage);

    // Initial state
    await expect(lightRadio).not.toHaveAttribute('checked', '');
    await expect(darkRadio).toHaveAttribute('checked', '');
    await expect(gridRadio).not.toHaveAttribute('checked', '');
    await expect(listRadio).toHaveAttribute('checked', '');

    // Select in theme group
    await lightRadio.click();
    await expect(lightRadio).toHaveAttribute('checked', '');
    await expect(darkRadio).not.toHaveAttribute('checked', '');

    // View group should be unaffected
    await expect(listRadio).toHaveAttribute('checked', '');
    await expect(gridRadio).not.toHaveAttribute('checked', '');
  });

  /**
   * INDICATOR TYPES
   */
  const testIndicatorTypes = async (controlType: string | undefined) => {
    await test.step(`indicator types, controlType=${controlType}`, async () => {
      // Radio indicator (default)
      await test.step('radio indicator', async () => {
        const radio = await setup({ componentsPage, controlType, checked: true });
        await expect(radio.locator('mdc-staticradio[checked]')).toBeVisible();
      });

      // Checkmark indicator
      await test.step('checkmark indicator', async () => {
        const radio = await setup({
          componentsPage,
          controlType,
          checked: true,
          indicator: INDICATOR.CHECKMARK,
        });
        await expect(radio.locator('mdc-icon[name="check-bold"]')).toBeVisible();
      });
    });
  };
  await testIndicatorTypes('controlled');
  await testIndicatorTypes('uncontrolled');
  await testIndicatorTypes(undefined);

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual regression', async () => {
    await componentsPage.page.setViewportSize({ width: 600, height: 1000 });
    const radioMenuItemSheet = new StickerSheet(componentsPage, 'mdc-menuitemradio', 'margin: 0.25rem 0;');
    const options = { createNewRow: true };
    const label = 'Default Menu Item Radio';
    radioMenuItemSheet.setAttributes({ label });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({ label: 'Checked Menu Item Radio', checked: true });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({ label: 'Disabled Menu Item Radio', disabled: true });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({ label: 'Soft Disabled Menu Item Radio', 'soft-disabled': true });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({ label: 'Checked Disabled Menu Item Radio', checked: true, disabled: true });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Checked Soft Disabled Menu Item Radio',
      checked: true,
      'soft-disabled': true,
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Checked Checkmark Indicator',
      checked: true,
      indicator: INDICATOR.CHECKMARK,
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Disabled Checkmark Indicator',
      disabled: true,
      indicator: INDICATOR.CHECKMARK,
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Soft Disabled Checkmark Indicator',
      'soft-disabled': true,
      indicator: INDICATOR.CHECKMARK,
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Checked Disabled Checkmark Indicator',
      checked: true,
      disabled: true,
      indicator: INDICATOR.CHECKMARK,
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Checked Soft Disabled Checkmark Indicator',
      checked: true,
      'soft-disabled': true,
      indicator: INDICATOR.CHECKMARK,
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({ label: 'Checked None Indicator', checked: true, indicator: INDICATOR.NONE });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({ label: 'Disabled None Indicator', disabled: true, indicator: INDICATOR.NONE });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Soft Disabled None Indicator',
      'soft-disabled': true,
      indicator: INDICATOR.NONE,
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Checked Disabled None Indicator',
      checked: true,
      disabled: true,
      indicator: INDICATOR.NONE,
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Selected Radio With Secondary Label',
      checked: true,
      'secondary-label': 'Secondary Label',
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Unselected Radio With Secondary Label',
      'secondary-label': 'Secondary Label',
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Selected Checkmark With Secondary Label',
      checked: true,
      indicator: INDICATOR.CHECKMARK,
      'secondary-label': 'Secondary Label',
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);
    radioMenuItemSheet.setAttributes({
      label: 'Unselected Checkmark With Secondary Label',
      indicator: INDICATOR.CHECKMARK,
      'secondary-label': 'Secondary Label',
    });
    await radioMenuItemSheet.createMarkupWithCombination({}, options);

    await radioMenuItemSheet.mountStickerSheet({ role: ROLE.MENU });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-menuitemradio', {
        element: radioMenuItemSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('menuitemradio-default');
  });
});
