import { test, expect } from '../../../config/playwright/setup';
import type { ComponentsPage } from '../../../config/playwright/setup';

const setup = async (componentsPage: ComponentsPage, html: string) => {
  await componentsPage.mount({ html, clearDocument: true });
};

const textFields = [
  { name: 'input', value: 'Sample', key: 'x', extra: 'trailing-button clear-aria-label="Clear"' },
  { name: 'password', value: 'Sample', key: 'x', extra: 'show-button-aria-label="Show" hide-button-aria-label="Hide"' },
  {
    name: 'numberinput',
    value: '3',
    key: '9',
    extra: 'step="any" increment-aria-label="Increase" decrement-aria-label="Decrease"',
  },
  { name: 'searchfield', value: 'Sample', key: 'x', extra: 'clear-aria-label="Clear"' },
  { name: 'textarea', value: 'Sample', key: 'x', extra: 'resizable resize-button-aria-label="Resize"' },
];

test.describe('soft-disabled form fields', () => {
  textFields.forEach(({ name, value, key, extra }) => {
    test(`should prevent edits and restore interaction when ${name} is soft-disabled`, async ({ componentsPage }) => {
      await setup(componentsPage, `<mdc-${name} label="Field" value="${value}" ${extra} soft-disabled></mdc-${name}>`);
      const field = componentsPage.page.locator(`mdc-${name}`);
      const input = field.locator('input, textarea').first();

      await expect(input).toHaveAttribute('aria-disabled', 'true');
      await componentsPage.actionability.pressTab();
      await expect(input).toBeFocused();
      await input.press('ControlOrMeta+A');
      await input.press(key);
      await expect(input).toHaveValue(value);
      await expect(field).toHaveAttribute('value', value);
      if (name === 'numberinput') {
        await input.press('ArrowUp');
        await expect(input).toHaveValue(value);
      }
      await field.getByRole('button').first().click({ force: true });
      await expect(input).toHaveValue(value);
      if (name === 'password') await expect(input).toHaveAttribute('type', 'password');
      if (name === 'textarea') {
        const rows = await input.evaluate((element: HTMLTextAreaElement) => element.rows);
        await field.getByRole('button', { name: 'Resize' }).press('ArrowDown');
        await expect(input).toHaveJSProperty('rows', rows);
      }

      await componentsPage.removeAttribute(field, 'soft-disabled');
      await expect(input).toHaveAttribute('aria-disabled', 'false');
      await input.press('ControlOrMeta+A');
      await input.press(key);
      await expect(input).toHaveValue(key);
      await expect(field).toHaveAttribute('value', key);

      await componentsPage.setAttributes(field, { 'soft-disabled': '' });
      await expect(input).toHaveAttribute('aria-disabled', 'true');
      await input.press('Backspace');
      await expect(input).toHaveValue(key);
    });
  });

  ['input', 'textarea', 'numberinput'].forEach(name => {
    test(`should restore uncancelable edits without emitting changes when ${name} is soft-disabled`, async ({
      componentsPage,
    }) => {
      await setup(componentsPage, `<mdc-${name} label="Field" value="12" soft-disabled></mdc-${name}>`);
      const field = componentsPage.page.locator(`mdc-${name}`);
      const input = field.locator('input, textarea').first();
      await expect(input).toHaveValue('12');
      await field.evaluate(element => {
        element.setAttribute('data-input-events', '0');
        element.addEventListener('input', () => element.setAttribute('data-input-events', '1'));
        element.addEventListener('change', () => element.setAttribute('data-input-events', '1'));
      });
      await input.evaluate((element: HTMLInputElement) => {
        element.dispatchEvent(
          new InputEvent('beforeinput', {
            inputType: 'insertCompositionText',
            cancelable: false,
            bubbles: true,
            composed: true,
          }),
        );
        const inputElement = element;
        inputElement.value = '123';
        element.dispatchEvent(
          new InputEvent('input', { inputType: 'insertCompositionText', bubbles: true, composed: true }),
        );
        element.dispatchEvent(new Event('change', { bubbles: true }));
      });
      await expect(input).toHaveValue('12');
      await expect(field).toHaveAttribute('value', '12');
      await expect(field).toHaveAttribute('data-input-events', '0');
    });
  });

  ['input', 'textarea', 'numberinput'].forEach(name => {
    test(`should preserve required validation and form data when ${name} is soft-disabled`, async ({
      componentsPage,
    }) => {
      await setup(
        componentsPage,
        `<form><mdc-${name} label="Field" name="field" required soft-disabled></mdc-${name}></form>`,
      );
      const field = componentsPage.page.locator(`mdc-${name}`);
      await expect(field.locator('input, textarea').first()).toHaveAttribute('aria-disabled', 'true');
      expect(await field.evaluate((element: HTMLInputElement) => element.checkValidity())).toBe(false);
      await field.evaluate((element: HTMLInputElement) => {
        element.setAttribute('value', '12');
      });
      await expect(field.locator('input, textarea').first()).toHaveValue('12');
      await componentsPage.removeAttribute(field, 'soft-disabled');
      await field.locator('input, textarea').first().press('ControlOrMeta+A');
      await field.locator('input, textarea').first().pressSequentially('123');
      await expect(field.locator('input, textarea').first()).toHaveValue('123');
      await componentsPage.setAttributes(field, { 'soft-disabled': '' });
      expect(
        await componentsPage.page.locator('form').evaluate((form: HTMLFormElement) => new FormData(form).get('field')),
      ).toBe('123');
    });
  });

  (['checkbox', 'radio', 'toggle'] as const).forEach(name => {
    test(`should announce unavailability and prevent selection when ${name} is soft-disabled`, async ({
      componentsPage,
    }) => {
      await setup(componentsPage, `<mdc-${name} label="Field" name="field" soft-disabled></mdc-${name}>`);
      const field = componentsPage.page.locator(`mdc-${name}`);
      const control = componentsPage.page.getByRole(name === 'toggle' ? 'switch' : name, { name: 'Field' });
      await expect(control).toHaveAttribute('aria-disabled', 'true');
      await componentsPage.actionability.pressTab();
      await expect(control).toBeFocused();
      await componentsPage.page.keyboard.press('Space');
      await field.click({ force: true });
      await expect(field).not.toHaveAttribute('checked');
      await componentsPage.removeAttribute(field, 'soft-disabled');
      await expect(control).toHaveAttribute('aria-disabled', 'false');
      await control.focus();
      await componentsPage.page.keyboard.press('Space');
      await expect(field).toHaveAttribute('checked');
    });
  });

  (['input', 'checkbox', 'radio', 'toggle'] as const).forEach(name => {
    test(`should prevent form submission from soft-disabled ${name}`, async ({ componentsPage }) => {
      await setup(
        componentsPage,
        `<form><mdc-${name} label="Field" soft-disabled></mdc-${name}><button type="submit">Submit</button></form>`,
      );
      const form = componentsPage.page.locator('form');
      await form.evaluate(element => {
        element.setAttribute('data-submit-count', '0');
        element.addEventListener('submit', event => {
          event.preventDefault();
          element.setAttribute('data-submit-count', String(Number(element.getAttribute('data-submit-count')) + 1));
        });
      });
      const roles = { input: 'textbox', checkbox: 'checkbox', radio: 'radio', toggle: 'switch' } as const;
      const control = componentsPage.page.getByRole(roles[name], { name: 'Field' });
      await control.press('Enter');
      await expect(form).toHaveAttribute('data-submit-count', '0');
      await componentsPage.removeAttribute(componentsPage.page.locator(`mdc-${name}`), 'soft-disabled');
      await control.press('Enter');
      await expect(form).toHaveAttribute('data-submit-count', '1');
    });
  });

  test('should preserve search chips and clear actions when soft-disabled', async ({ componentsPage }) => {
    await setup(
      componentsPage,
      '<mdc-searchfield label="Field" clear-aria-label="Clear" soft-disabled><mdc-chip slot="filters" label="Selected"></mdc-chip></mdc-searchfield>',
    );
    const field = componentsPage.page.locator('mdc-searchfield');
    const input = field.locator('input');
    await input.focus();
    await input.press('Backspace');
    await input.press('Escape');
    await field.getByRole('button', { name: 'Clear' }).click({ force: true });
    await expect(field.locator('mdc-chip')).toHaveCount(1);
    await componentsPage.removeAttribute(field, 'soft-disabled');
    await input.press('Backspace');
    await expect(field.locator('mdc-chip')).toHaveCount(0);
  });

  ['select', 'combobox'].forEach(name => {
    test(`should prevent opening and selection when ${name} is soft-disabled`, async ({ componentsPage }) => {
      await setup(
        componentsPage,
        `<mdc-${name} label="Field" value="alpha" soft-disabled><mdc-option value="alpha" label="Alpha" selected></mdc-option><mdc-option value="beta" label="Beta"></mdc-option></mdc-${name}>`,
      );
      const field = componentsPage.page.locator(`mdc-${name}`);
      const control = field.getByRole('combobox');
      await expect(control).toHaveAttribute('aria-disabled', 'true');
      await componentsPage.actionability.pressTab();
      await expect(control).toBeFocused();
      await control.press('ArrowDown');
      await control.click({ force: true });
      await expect(control).toHaveAttribute('aria-expanded', 'false');
      if (name === 'combobox') {
        await control.press('ControlOrMeta+A');
        await control.press('x');
        await expect(control).toHaveValue('Alpha');
      }
      await componentsPage.removeAttribute(field, 'soft-disabled');
      await control.press('ArrowDown');
      await expect(control).toHaveAttribute('aria-expanded', 'true');
      await componentsPage.setAttributes(field, { 'soft-disabled': '' });
      await expect(control).toHaveAttribute('aria-expanded', 'false');
      await expect(field).toHaveAttribute('value', 'alpha');
    });
  });

  const pickers = [
    {
      name: 'datepicker',
      value: '2026-10-08',
      nextValue: '2026-11-08',
      extra:
        'variant="input" locale="en-US" locale-month-label="Month" locale-day-label="Day" locale-year-label="Year" locale-calendar-label="Calendar"',
    },
    {
      name: 'timepicker',
      value: '09:30',
      nextValue: '10:30',
      extra:
        'time-format="12h" locale-hours-label="Hours" locale-minutes-label="Minutes" locale-period-label="Period" locale-am-label="AM" locale-pm-label="PM" locale-show-time-picker-label="Times"',
    },
  ];
  pickers.forEach(({ name, value, nextValue, extra }) => {
    test(`should prevent visible controls from changing values when ${name} is soft-disabled`, async ({
      componentsPage,
    }) => {
      await setup(componentsPage, `<mdc-${name} label="Field" value="${value}" ${extra} soft-disabled></mdc-${name}>`);
      const field = componentsPage.page.locator(`mdc-${name}`);
      const controls = field.getByRole('spinbutton');
      const first = controls.first();
      await expect(controls).toHaveCount(3);
      await expect(controls.nth(0)).toHaveAttribute('aria-disabled', 'true');
      await expect(controls.nth(1)).toHaveAttribute('aria-disabled', 'true');
      await expect(controls.nth(2)).toHaveAttribute('aria-disabled', 'true');
      await componentsPage.actionability.pressTab();
      await expect(first).toBeFocused();
      await first.press('ArrowUp');
      await first.press('1');
      await controls.last().press('ArrowUp');
      await field.getByRole('button').first().click({ force: true });
      await expect(field).toHaveAttribute('value', value);
      await expect(field.locator('mdc-popover')).not.toHaveAttribute('visible');
      await componentsPage.removeAttribute(field, 'soft-disabled');
      await expect(first).toHaveAttribute('aria-disabled', 'false');
      await first.press('ArrowUp');
      await expect(field).toHaveAttribute('value', nextValue);
      await field.getByRole('button').first().click();
      await expect(field.locator('mdc-popover')).toHaveAttribute('visible');
      await componentsPage.setAttributes(field, { 'soft-disabled': '' });
      await expect(field.locator('mdc-popover')).not.toHaveAttribute('visible');
    });
  });

  test('should announce and block the default datepicker trigger when soft-disabled', async ({ componentsPage }) => {
    await setup(
      componentsPage,
      '<mdc-datepicker label="Field" variant="default" locale-calendar-label="Calendar" soft-disabled></mdc-datepicker>',
    );
    const field = componentsPage.page.locator('mdc-datepicker');
    const trigger = field.getByRole('combobox');
    await expect(trigger).toHaveAttribute('aria-disabled', 'true');
    await componentsPage.actionability.pressTab();
    await expect(trigger).toBeFocused();
    await trigger.press('Enter');
    await trigger.click({ force: true });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await componentsPage.removeAttribute(field, 'soft-disabled');
    await trigger.press('Enter');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  [false, true].forEach(spatial => {
    test(`should prevent slider changes and preserve ARIA after switching to range mode${spatial ? ' in spatial navigation' : ''}`, async ({
      componentsPage,
    }) => {
      await setup(
        componentsPage,
        '<mdc-slider label="Field" value="50" min="0" max="100" start-aria-label="Start" end-aria-label="End" soft-disabled></mdc-slider>',
      );
      if (spatial) await componentsPage.wrapElement({ wrapperTagName: 'mdc-spatialnavigationprovider' });
      const field = componentsPage.page.locator('mdc-slider');
      const single = field.getByRole('slider');
      await expect(single).toHaveAttribute('aria-disabled', 'true');
      await single.focus();
      await single.press('ArrowRight');
      await expect(single).toHaveValue('50');
      await componentsPage.setAttributes(field, { range: '', 'value-start': '20', 'value-end': '80' });
      const start = field.getByRole('slider', { name: 'Start' });
      const end = field.getByRole('slider', { name: 'End' });
      await expect(start).toHaveAttribute('aria-disabled', 'true');
      await expect(end).toHaveAttribute('aria-disabled', 'true');
      await start.focus();
      await start.press('ArrowRight');
      await expect(start).toHaveValue('20');
      await componentsPage.removeAttribute(field, 'soft-disabled');
      await expect(start).toHaveAttribute('aria-disabled', 'false');
      if (spatial) await start.press('Enter');
      await start.press('ArrowRight');
      await expect(start).toHaveValue('21');
    });
  });
});
