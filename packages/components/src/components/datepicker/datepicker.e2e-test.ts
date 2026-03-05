import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

interface SetupOptions {
  componentsPage: ComponentsPage;
  label?: string;
  value?: string;
  endValue?: string;
  variant?: string;
  selectionMode?: string;
  locale?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  helpText?: string;
  helpTextType?: string;
  min?: string;
  max?: string;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-datepicker
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
        ${restArgs.endValue ? `end-value="${restArgs.endValue}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
        ${restArgs.selectionMode ? `selection-mode="${restArgs.selectionMode}"` : ''}
        ${restArgs.locale ? `locale="${restArgs.locale}"` : 'locale="en-US"'}
        ${restArgs.required ? 'required' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.readonly ? 'readonly' : ''}
        ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
        ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
        ${restArgs.min ? `min="${restArgs.min}"` : ''}
        ${restArgs.max ? `max="${restArgs.max}"` : ''}
        locale-month-label="Month"
        locale-day-label="Day"
        locale-year-label="Year"
        locale-calendar-label="Open calendar"
        locale-today-label="Today"
      ></mdc-datepicker>
    `,
    clearDocument: true,
  });

  const datepicker = componentsPage.page.locator('mdc-datepicker');
  await datepicker.waitFor();
  return datepicker;
};

test.describe('mdc-datepicker', () => {
  test.describe('input variant', () => {
    test.describe('rendering', () => {
      test('should render with input variant by default', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Start date',
        });
        await expect(datepicker).toBeVisible();

        const monthSpinbutton = datepicker.locator('#month-spinbutton');
        await expect(monthSpinbutton).toBeVisible();

        const daySpinbutton = datepicker.locator('#day-spinbutton');
        await expect(daySpinbutton).toBeVisible();

        const yearSpinbutton = datepicker.locator('#year-spinbutton');
        await expect(yearSpinbutton).toBeVisible();
      });

      test('should render with a pre-set value', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Start date',
          value: '2025-07-15',
        });

        const monthSpinbutton = datepicker.locator('#month-spinbutton');
        await expect(monthSpinbutton).toHaveValue('07');

        const daySpinbutton = datepicker.locator('#day-spinbutton');
        await expect(daySpinbutton).toHaveValue('15');

        const yearSpinbutton = datepicker.locator('#year-spinbutton');
        await expect(yearSpinbutton).toHaveValue('2025');
      });

      test('should render label and helper text', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Start date',
          helpText: 'Format: mm/dd/yyyy',
        });

        await expect(datepicker).toContainText('Start date');
        await expect(datepicker).toContainText('Format: mm/dd/yyyy');
      });
    });

    test.describe('spinbutton interaction', () => {
      test('should increment month with ArrowUp', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Date',
          value: '2025-07-15',
        });

        const monthSpinbutton = datepicker.locator('#month-spinbutton');
        await monthSpinbutton.focus();
        await monthSpinbutton.press('ArrowUp');
        await expect(monthSpinbutton).toHaveValue('08');
      });

      test('should decrement day with ArrowDown', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Date',
          value: '2025-07-15',
        });

        const daySpinbutton = datepicker.locator('#day-spinbutton');
        await daySpinbutton.focus();
        await daySpinbutton.press('ArrowDown');
        await expect(daySpinbutton).toHaveValue('14');
      });

      test('should navigate between fields with ArrowLeft/Right', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Date',
          value: '2025-07-15',
          locale: 'en-US',
        });

        const monthSpinbutton = datepicker.locator('#month-spinbutton');
        await monthSpinbutton.focus();
        await monthSpinbutton.press('ArrowRight');

        const daySpinbutton = datepicker.locator('#day-spinbutton');
        await expect(daySpinbutton).toBeFocused();
      });
    });

    test.describe('calendar popover', () => {
      test('should open calendar on button click', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Date',
          value: '2025-07-15',
        });

        const calendarButton = datepicker.locator('mdc-button[part="icon-container"]');
        await calendarButton.click();

        const calendar = datepicker.locator('mdc-calendar');
        await expect(calendar).toBeVisible();
      });

      test('should close calendar on escape', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Date',
          value: '2025-07-15',
        });

        const calendarButton = datepicker.locator('mdc-button[part="icon-container"]');
        await calendarButton.click();

        await componentsPage.page.keyboard.press('Escape');

        const popover = datepicker.locator('mdc-popover');
        await expect(popover).not.toHaveAttribute('visible');
      });
    });

    test.describe('disabled state', () => {
      test('should not allow interaction when disabled', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Date',
          value: '2025-07-15',
          disabled: true,
        });

        const monthSpinbutton = datepicker.locator('#month-spinbutton');
        await expect(monthSpinbutton).toBeDisabled();
      });
    });

    test.describe('readonly state', () => {
      test('should not allow editing when readonly', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Date',
          value: '2025-07-15',
          readonly: true,
        });

        const monthSpinbutton = datepicker.locator('#month-spinbutton');
        await expect(monthSpinbutton).toHaveAttribute('readonly');
      });
    });
  });

  test.describe('default variant', () => {
    test.describe('rendering', () => {
      test('should render with select trigger', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Week',
          variant: 'default',
        });
        await expect(datepicker).toBeVisible();

        const trigger = datepicker.locator('[role="combobox"]');
        await expect(trigger).toBeVisible();
      });

      test('should display selected date range', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Week',
          variant: 'default',
          value: '2025-07-14',
          endValue: '2025-07-20',
        });

        const selectText = datepicker.locator('[part~="select-text"]');
        const text = await selectText.textContent();
        expect(text).toContain('Jul');
      });
    });

    test.describe('interaction', () => {
      test('should open calendar on trigger click', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Week',
          variant: 'default',
        });

        const trigger = datepicker.locator('[role="combobox"]');
        await trigger.click();

        const calendar = datepicker.locator('mdc-calendar');
        await expect(calendar).toBeVisible();
      });

      test('should open calendar with Enter key', async ({ componentsPage }) => {
        const datepicker = await setup({
          componentsPage,
          label: 'Week',
          variant: 'default',
        });

        const trigger = datepicker.locator('[role="combobox"]');
        await trigger.focus();
        await trigger.press('Enter');

        const calendar = datepicker.locator('mdc-calendar');
        await expect(calendar).toBeVisible();
      });
    });
  });

  test.describe('end-value behavior', () => {
    test('should reflect end-value attribute on the element', async ({ componentsPage }) => {
      const datepicker = await setup({
        componentsPage,
        label: 'Range',
        variant: 'default',
        value: '2025-07-14',
        endValue: '2025-07-20',
      });

      await expect(datepicker).toHaveAttribute('end-value', '2025-07-20');
    });

    test('should clear end-value when single date is selected', async ({ componentsPage }) => {
      const datepicker = await setup({
        componentsPage,
        label: 'Date',
        value: '2025-07-15',
        endValue: '2025-07-20',
        selectionMode: 'single',
      });

      const calendarButton = datepicker.locator('mdc-button[part="icon-container"]');
      await calendarButton.click();

      const calendar = datepicker.locator('mdc-calendar');
      await expect(calendar).toBeVisible();

      const day18 = calendar.locator('[data-date="2025-07-18"]');
      await day18.click();

      await expect(datepicker).toHaveAttribute('end-value', '');
    });

    test('should include endValue in change event detail', async ({ componentsPage }) => {
      const datepicker = await setup({
        componentsPage,
        label: 'Range',
        variant: 'default',
        value: '2025-07-14',
        endValue: '2025-07-20',
      });

      const endValue = await datepicker.evaluate(
        (el: any) =>
          new Promise<string>(resolve => {
            el.addEventListener('change', (e: CustomEvent) => resolve(e.detail.endValue), { once: true });
            const calendar = el.shadowRoot?.querySelector('mdc-calendar');
            if (calendar) {
              calendar.dispatchEvent(
                new CustomEvent('date-selected', {
                  detail: { startDate: '2025-07-14', endDate: '2025-07-18' },
                  bubbles: true,
                  composed: true,
                }),
              );
            }
          }),
      );

      expect(endValue).toBe('2025-07-18');
    });
  });

  test.describe('error state', () => {
    test('should show error styling', async ({ componentsPage }) => {
      const datepicker = await setup({
        componentsPage,
        label: 'End date',
        value: '2025-07-14',
        helpText: 'End date must occur after start date',
        helpTextType: 'error',
      });

      await expect(datepicker).toContainText('End date must occur after start date');
    });
  });

  test.describe('accessibility', () => {
    test('should have spinbutton roles on inputs', async ({ componentsPage }) => {
      const datepicker = await setup({
        componentsPage,
        label: 'Date',
        value: '2025-07-15',
      });

      const spinbuttons = datepicker.locator('[role="spinbutton"]');
      await expect(spinbuttons).toHaveCount(3);
    });

    test('should have aria-labels on spinbuttons', async ({ componentsPage }) => {
      const datepicker = await setup({
        componentsPage,
        label: 'Date',
      });

      const monthSpinbutton = datepicker.locator('#month-spinbutton');
      await expect(monthSpinbutton).toHaveAttribute('aria-label', 'Month');

      const daySpinbutton = datepicker.locator('#day-spinbutton');
      await expect(daySpinbutton).toHaveAttribute('aria-label', 'Day');

      const yearSpinbutton = datepicker.locator('#year-spinbutton');
      await expect(yearSpinbutton).toHaveAttribute('aria-label', 'Year');
    });

    test('should have combobox role on default variant trigger', async ({ componentsPage }) => {
      const datepicker = await setup({
        componentsPage,
        label: 'Week',
        variant: 'default',
      });

      const trigger = datepicker.locator('[role="combobox"]');
      await expect(trigger).toBeVisible();
      await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    });
  });

  test.describe('visual regression', () => {
    test('should match screenshot in default state', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Start date',
        variant: 'input',
        locale: 'en-US',
        required: true,
      });

      await test.step('default state', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-datepicker-default');
      });
    });

    test('should match screenshot with value', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Start date',
        value: '2025-07-15',
        variant: 'input',
        locale: 'en-US',
        required: true,
      });

      await test.step('with value', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-datepicker-with-value');
      });
    });

    test('should match screenshot in disabled state', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Start date',
        value: '2025-07-15',
        variant: 'input',
        disabled: true,
      });

      await test.step('disabled state', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-datepicker-disabled');
      });
    });

    test('should match screenshot in readonly state', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Start date',
        value: '2025-07-15',
        variant: 'input',
        readonly: true,
      });

      await test.step('readonly state', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-datepicker-readonly');
      });
    });

    test('should match screenshot with error help text', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'End date',
        value: '2025-07-14',
        variant: 'input',
        helpText: 'End date must occur after start date',
        helpTextType: 'error',
      });

      await test.step('error state', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-datepicker-error');
      });
    });

    test('should match screenshot of default variant', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Date range',
        variant: 'default',
        locale: 'en-US',
        required: true,
      });

      await test.step('default variant', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-datepicker-default-variant');
      });
    });

    test('should match screenshot of default variant with value', async ({ componentsPage }) => {
      await setup({
        componentsPage,
        label: 'Date range',
        value: '2025-07-15',
        variant: 'default',
        locale: 'en-US',
        required: true,
      });

      await test.step('default variant with value', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-datepicker-default-variant-value');
      });
    });
  });
});
