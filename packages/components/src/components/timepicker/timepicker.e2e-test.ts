/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { ComponentsPage, test, expect } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  value?: string;
  label?: string;
  timeFormat?: string;
  interval?: number;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  helpText?: string;
  helpTextType?: string;
  min?: string;
  max?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-timepicker
        ${restArgs.id ? `id="${restArgs.id}"` : ''}
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.timeFormat ? `time-format="${restArgs.timeFormat}"` : ''}
        ${restArgs.interval ? `interval="${restArgs.interval}"` : ''}
        ${restArgs.required ? 'required' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.readonly ? 'readonly' : ''}
        ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
        ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
        ${restArgs.min ? `min="${restArgs.min}"` : ''}
        ${restArgs.max ? `max="${restArgs.max}"` : ''}
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    `,
    clearDocument: true,
  });

  const timepicker = restArgs.id
    ? componentsPage.page.locator(`mdc-timepicker#${restArgs.id}`)
    : componentsPage.page.locator('mdc-timepicker');

  await timepicker.waitFor();
  return timepicker;
};

test.describe('mdc-timepicker', () => {
  test.describe('rendering', () => {
    test('should render with default attributes', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        id: 'test-timepicker',
        label: 'Start time',
        value: '08:30',
      });

      await expect(timepicker).toBeVisible();
      await expect(timepicker).toHaveAttribute('label', 'Start time');
      await expect(timepicker).toHaveAttribute('value', '08:30');
    });

    test('should render label', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
      });

      const label = timepicker.locator('label');
      await expect(label).toContainText('Start time');
    });

    test('should render required indicator', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        required: true,
      });

      const requiredIndicator = timepicker.locator('[part="required-indicator"]');
      await expect(requiredIndicator).toBeVisible();
    });

    test('should render help text', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        helpText: 'Format: hh/mm',
      });

      const helpText = timepicker.locator('[part="help-text"]');
      await expect(helpText).toContainText('Format: hh/mm');
    });

    test('should render hours and minutes spinbuttons in 12h format', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      const minutesInput = timepicker.locator('#minutes-spinbutton');
      const periodInput = timepicker.locator('#period-spinbutton');

      await expect(hoursInput).toBeVisible();
      await expect(minutesInput).toBeVisible();
      await expect(periodInput).toBeVisible();
    });

    test('should not render period spinbutton in 24h format', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '20:30',
        timeFormat: '24h',
      });

      const periodInput = timepicker.locator('#period-spinbutton');
      await expect(periodInput).toHaveCount(0);
    });

    test('should display correct 12h values for PM time', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '14:30',
        timeFormat: '12h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      const minutesInput = timepicker.locator('#minutes-spinbutton');
      const periodInput = timepicker.locator('#period-spinbutton');

      await expect(hoursInput).toHaveValue('02');
      await expect(minutesInput).toHaveValue('30');
      await expect(periodInput).toHaveValue('PM');
    });

    test('should display correct 24h values', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '20:30',
        timeFormat: '24h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      const minutesInput = timepicker.locator('#minutes-spinbutton');

      await expect(hoursInput).toHaveValue('20');
      await expect(minutesInput).toHaveValue('30');
    });
  });

  test.describe('dropdown', () => {
    test('should open dropdown when arrow button is clicked', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click();

      const listbox = timepicker.locator('[part="listbox"]');
      await expect(listbox).toBeVisible();
    });

    test('should close dropdown when clicking outside', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click();

      // Click outside
      await componentsPage.page.click('body', { position: { x: 10, y: 10 } });

      const listbox = timepicker.locator('[part="listbox"]');
      await expect(listbox).not.toBeVisible();
    });

    test('should select a time from dropdown', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click();

      // Click on 9:00 AM option
      const option = timepicker.locator('mdc-option').filter({ hasText: '9:00 AM' });
      await option.click();

      await expect(timepicker).toHaveAttribute('value', '09:00');
    });

    test('should show checkmark on selected option', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click();

      const selectedOption = timepicker.locator('mdc-option[selected]');
      await expect(selectedOption).toContainText('8:30 AM');
    });

    test('should show 15-minute intervals when configured', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
        interval: 15,
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click();

      const options = timepicker.locator('mdc-option');
      // 24 * 4 = 96 options for 15-min intervals
      const count = await options.count();
      expect(count).toBe(96);
    });

    test('should show 24h format options in dropdown', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '20:30',
        timeFormat: '24h',
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click();

      const options = timepicker.locator('mdc-option');
      const firstOption = options.first();
      await expect(firstOption).toContainText('0:00');
    });

    test('should not show checkmark when value does not match interval', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:33',
        timeFormat: '12h',
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click();

      const selectedOption = timepicker.locator('mdc-option[selected]');
      await expect(selectedOption).toHaveCount(0);
    });
  });

  test.describe('spinbutton interaction', () => {
    test('should increment hours with arrow up', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      await hoursInput.focus();
      await componentsPage.page.keyboard.press('ArrowUp');

      await expect(hoursInput).toHaveValue('09');
    });

    test('should decrement hours with arrow down', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      await hoursInput.focus();
      await componentsPage.page.keyboard.press('ArrowDown');

      await expect(hoursInput).toHaveValue('07');
    });

    test('should wrap hours at max in 12h format', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '12:30',
        timeFormat: '12h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      await hoursInput.focus();
      await componentsPage.page.keyboard.press('ArrowUp');

      await expect(hoursInput).toHaveValue('01');
    });

    test('should wrap hours at min in 12h format', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '01:30',
        timeFormat: '12h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      await hoursInput.focus();
      await componentsPage.page.keyboard.press('ArrowDown');

      await expect(hoursInput).toHaveValue('12');
    });

    test('should increment minutes with arrow up', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const minutesInput = timepicker.locator('#minutes-spinbutton');
      await minutesInput.focus();
      await componentsPage.page.keyboard.press('ArrowUp');

      await expect(minutesInput).toHaveValue('31');
    });

    test('should wrap minutes at 59', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:59',
        timeFormat: '12h',
      });

      const minutesInput = timepicker.locator('#minutes-spinbutton');
      await minutesInput.focus();
      await componentsPage.page.keyboard.press('ArrowUp');

      await expect(minutesInput).toHaveValue('00');
    });

    test('should toggle period with arrow up', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const periodInput = timepicker.locator('#period-spinbutton');
      await periodInput.focus();
      await componentsPage.page.keyboard.press('ArrowUp');

      await expect(periodInput).toHaveValue('PM');
    });

    test('should set period to AM when pressing "a"', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '14:30',
        timeFormat: '12h',
      });

      const periodInput = timepicker.locator('#period-spinbutton');
      await periodInput.focus();
      await componentsPage.page.keyboard.press('a');

      await expect(periodInput).toHaveValue('AM');
    });

    test('should set period to PM when pressing "p"', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const periodInput = timepicker.locator('#period-spinbutton');
      await periodInput.focus();
      await componentsPage.page.keyboard.press('p');

      await expect(periodInput).toHaveValue('PM');
    });

    test('should navigate from hours to minutes with arrow right', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      const minutesInput = timepicker.locator('#minutes-spinbutton');

      await hoursInput.focus();
      await componentsPage.page.keyboard.press('ArrowRight');

      await expect(minutesInput).toBeFocused();
    });

    test('should navigate from minutes to hours with arrow left', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      const minutesInput = timepicker.locator('#minutes-spinbutton');

      await minutesInput.focus();
      await componentsPage.page.keyboard.press('ArrowLeft');

      await expect(hoursInput).toBeFocused();
    });
  });

  test.describe('disabled state', () => {
    test('should not open dropdown when disabled', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        disabled: true,
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click({ force: true });

      const listbox = timepicker.locator('[part="listbox"]');
      await expect(listbox).not.toBeVisible();
    });
  });

  test.describe('readonly state', () => {
    test('should not open dropdown when readonly', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        readonly: true,
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click({ force: true });

      const listbox = timepicker.locator('[part="listbox"]');
      await expect(listbox).not.toBeVisible();
    });
  });

  test.describe('accessibility', () => {
    test('spinbuttons should have correct ARIA attributes', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      await expect(hoursInput).toHaveAttribute('role', 'spinbutton');
      await expect(hoursInput).toHaveAttribute('aria-label', 'hours');
      await expect(hoursInput).toHaveAttribute(
        'aria-description',
        'To set value, use the up/down arrow keys or type a value',
      );
      await expect(hoursInput).toHaveAttribute('aria-valuemin', '1');
      await expect(hoursInput).toHaveAttribute('aria-valuemax', '12');

      const minutesInput = timepicker.locator('#minutes-spinbutton');
      await expect(minutesInput).toHaveAttribute('role', 'spinbutton');
      await expect(minutesInput).toHaveAttribute('aria-label', 'minutes');
      await expect(minutesInput).toHaveAttribute(
        'aria-description',
        'To set value, use the up/down arrow keys or type a value',
      );
      await expect(minutesInput).toHaveAttribute('aria-valuemin', '0');
      await expect(minutesInput).toHaveAttribute('aria-valuemax', '59');
    });

    test('dropdown button should have correct ARIA attributes', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await expect(dropdownButton).toHaveAttribute('aria-label', 'Show time picker');
      await expect(dropdownButton).toHaveAttribute('aria-haspopup', 'true');
      await expect(dropdownButton).toHaveAttribute('aria-expanded', 'false');
    });

    test('dropdown button aria-expanded should update when opened', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click();

      await expect(dropdownButton).toHaveAttribute('aria-expanded', 'true');
    });

    test('listbox options should have correct ARIA attributes', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const dropdownButton = timepicker.locator('mdc-button[part="icon-container"]');
      await dropdownButton.click();

      const options = timepicker.locator('mdc-option');
      const count = await options.count();
      expect(count).toBeGreaterThan(0);

      // Check that the selected option has aria-selected="true"
      const selectedOption = timepicker.locator('mdc-option[aria-selected="true"]');
      await expect(selectedOption).toHaveCount(1);
      await expect(selectedOption).toContainText('8:30 AM');
    });

    test('period spinbutton should have correct ARIA attributes', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
      });

      const periodInput = timepicker.locator('#period-spinbutton');
      await expect(periodInput).toHaveAttribute('role', 'spinbutton');
      await expect(periodInput).toHaveAttribute('aria-label', 'period');
      await expect(periodInput).toHaveAttribute('aria-valuetext', 'AM');
      await expect(periodInput).toHaveAttribute(
        'aria-description',
        'To set value, use the up/down arrow keys or type a value',
      );
    });

    test('24h format spinbuttons should have correct min/max', async ({ componentsPage }) => {
      const timepicker = await setup({
        componentsPage,
        label: 'Start time',
        value: '20:30',
        timeFormat: '24h',
      });

      const hoursInput = timepicker.locator('#hours-spinbutton');
      await expect(hoursInput).toHaveAttribute('aria-valuemin', '0');
      await expect(hoursInput).toHaveAttribute('aria-valuemax', '23');
    });
  });

  test.describe('visual regression', () => {
    test('should match screenshot in default state', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        timeFormat: '12h',
        required: true,
      });

      await test.step('default state', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-timepicker-default');
      });
    });

    test('should match screenshot in 24h format', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Start time',
        value: '20:30',
        timeFormat: '24h',
        required: true,
      });

      await test.step('24h format', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-timepicker-24h');
      });
    });

    test('should match screenshot in disabled state', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        disabled: true,
      });

      await test.step('disabled state', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-timepicker-disabled');
      });
    });

    test('should match screenshot with error help text', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Start time',
        value: '08:30',
        helpText: 'Please select a valid time',
        helpTextType: 'error',
      });

      await test.step('error state', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-timepicker-error');
      });
    });
  });
});
