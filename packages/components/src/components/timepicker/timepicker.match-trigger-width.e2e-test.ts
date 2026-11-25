import type { Locator } from '@playwright/test';

import { type ComponentsPage, expect, test } from '../../../config/playwright/setup';

import type TimePicker from './timepicker.component';

type SetupOptions = {
  strategy?: 'absolute' | 'fixed';
  matchTriggerWidth?: boolean;
  dir?: 'ltr' | 'rtl';
  style?: string;
  wrapperStyle?: string;
};

const VIEWPORT = { width: 1000, height: 760 };

const setup = async (
  componentsPage: ComponentsPage,
  {
    strategy = 'fixed',
    matchTriggerWidth = true,
    dir = 'ltr',
    style = '--mdc-timepicker-width: 100%;',
    wrapperStyle = '',
  }: SetupOptions = {},
) => {
  await componentsPage.page.setViewportSize(VIEWPORT);
  await componentsPage.mount({
    html: `
      <div style="padding: 4rem;">
        <div id="wrapper" dir="${dir}" style="width: 16rem; ${wrapperStyle}">
          <mdc-timepicker
            label="Choose a time"
            strategy="${strategy}"
            ${matchTriggerWidth ? 'match-trigger-width' : ''}
            style="${style}"
            locale-show-time-picker-label="Show time picker"
            locale-time-options-label="Time options"
          ></mdc-timepicker>
        </div>
      </div>`,
    clearDocument: true,
  });

  await componentsPage.page.evaluate(async () => {
    await document.fonts.ready;
  });
  const timepicker = componentsPage.page.locator('mdc-timepicker');
  await timepicker.getByRole('button', { name: 'Show time picker' }).click();
  await expect(timepicker.getByRole('listbox', { name: 'Time options' })).toBeVisible();

  return {
    timepicker,
    trigger: timepicker.locator('[part="base-container"]'),
    dropdown: timepicker.locator('mdc-popover'),
    wrapper: componentsPage.page.locator('#wrapper'),
  };
};

const box = async (locator: Locator) => {
  const result = await locator.boundingBox();
  expect(result).not.toBeNull();
  return result!;
};
const width = async (locator: Locator) => (await box(locator)).width;

const expectWidth = async (dropdown: Locator, expected: number) => {
  await expect.poll(() => width(dropdown)).toBeCloseTo(expected, 1);
};

test.describe('mdc-timepicker match-trigger-width', () => {
  test('should keep the existing fixed dropdown width when match-trigger-width is not set', async ({
    componentsPage,
  }) => {
    const { timepicker, trigger, dropdown } = await setup(componentsPage, { matchTriggerWidth: false });
    const setMatchTriggerWidth = (value: boolean) =>
      componentsPage.page.evaluate(v => {
        const element = document.querySelector('mdc-timepicker') as TimePicker;
        element.matchTriggerWidth = v;
      }, value);

    await expect(timepicker).toHaveJSProperty('matchTriggerWidth', false);
    await expect(timepicker).not.toHaveAttribute('match-trigger-width');
    await expectWidth(dropdown, VIEWPORT.width);

    await setMatchTriggerWidth(true);
    await expect(timepicker).toHaveAttribute('match-trigger-width');
    await expectWidth(dropdown, await width(trigger));

    await setMatchTriggerWidth(false);
    await expectWidth(dropdown, VIEWPORT.width);
  });

  test('should match the trigger width when strategy is fixed', async ({ componentsPage }) => {
    const { trigger, dropdown } = await setup(componentsPage);
    const triggerBox = await box(trigger);

    await expectWidth(dropdown, triggerBox.width);
    await expect.poll(async () => (await box(dropdown)).x).toBeCloseTo(triggerBox.x, 1);
  });

  test('should match the trigger width and align to the right edge in RTL', async ({ componentsPage }) => {
    const { trigger, dropdown } = await setup(componentsPage, { dir: 'rtl' });
    const triggerBox = await box(trigger);

    await expectWidth(dropdown, triggerBox.width);
    await expect
      .poll(async () => {
        const dropdownBox = await box(dropdown);
        return dropdownBox.x + dropdownBox.width;
      })
      .toBeCloseTo(triggerBox.x + triggerBox.width, 1);
  });

  test('should follow the trigger when it is resized while open', async ({ componentsPage }) => {
    const { trigger, dropdown, wrapper } = await setup(componentsPage);
    const resizeWrapper = (value: string) =>
      wrapper.evaluate((element, v) => {
        element.style.setProperty('width', v);
      }, value);

    await resizeWrapper('20rem');
    await expectWidth(dropdown, await width(trigger));
    await resizeWrapper('12rem');
    await expectWidth(dropdown, await width(trigger));
  });

  test('should not become narrower than its options', async ({ componentsPage }) => {
    const { timepicker, trigger, dropdown } = await setup(componentsPage, {
      style: '--mdc-timepicker-width: 5rem; --mdc-timepicker-listbox-width: 0px;',
    });
    // An explicit 0px listbox width shows the dropdown at its minimum (content) width.
    const minimumWidth = await width(dropdown);
    expect(minimumWidth).toBeGreaterThan(await width(trigger));

    await timepicker.evaluate(element => element.style.removeProperty('--mdc-timepicker-listbox-width'));
    await expectWidth(dropdown, minimumWidth);
  });

  test.describe('explicit listbox width', () => {
    test('should use a direct listbox width, including live edits while open', async ({ componentsPage }) => {
      const { timepicker, trigger, dropdown } = await setup(componentsPage);
      const setListboxWidth = (value: string) =>
        timepicker.evaluate((element, v) => {
          element.style.setProperty('--mdc-timepicker-listbox-width', v);
        }, value);

      await setListboxWidth('50%');
      await expectWidth(dropdown, VIEWPORT.width * 0.5);
      await setListboxWidth('75%');
      await expectWidth(dropdown, VIEWPORT.width * 0.75);
      await setListboxWidth('');
      await expectWidth(dropdown, await width(trigger));
    });

    test('should use an aliased listbox width, including live edits while open', async ({ componentsPage }) => {
      const { timepicker, trigger, dropdown } = await setup(componentsPage, {
        style:
          '--mdc-timepicker-width: 100%; --consumer-width: 50%; --mdc-timepicker-listbox-width: var(--consumer-width);',
      });

      await expectWidth(dropdown, VIEWPORT.width * 0.5);
      await timepicker.evaluate(element => element.style.setProperty('--consumer-width', '30%'));
      await expectWidth(dropdown, VIEWPORT.width * 0.3);
      await timepicker.evaluate(element => element.style.removeProperty('--mdc-timepicker-listbox-width'));
      await expectWidth(dropdown, await width(trigger));
    });

    test('should use a listbox width from a stylesheet, including live edits while open', async ({
      componentsPage,
    }) => {
      const { trigger, dropdown } = await setup(componentsPage);
      const setSheet = (rule: string | null) =>
        componentsPage.page.evaluate(r => {
          const sheet = document.getElementById('listbox-width-sheet') ?? document.createElement('style');
          sheet.id = 'listbox-width-sheet';
          if (r === null) {
            sheet.remove();
          } else {
            sheet.textContent = r;
            document.head.append(sheet);
          }
        }, rule);

      await setSheet('mdc-timepicker { --mdc-timepicker-listbox-width: 40%; }');
      await expectWidth(dropdown, VIEWPORT.width * 0.4);
      await setSheet('mdc-timepicker { --mdc-timepicker-listbox-width: 25%; }');
      await expectWidth(dropdown, VIEWPORT.width * 0.25);
      await setSheet(null);
      await expectWidth(dropdown, await width(trigger));
    });
  });

  test('should use an inherited --mdc-popover-width over the trigger width', async ({ componentsPage }) => {
    const inheritedWidth = 192;
    const { trigger, dropdown } = await setup(componentsPage, {
      wrapperStyle: `--mdc-popover-width: ${inheritedWidth}px;`,
    });

    expect(await width(trigger)).not.toBeCloseTo(inheritedWidth, 1);
    await expectWidth(dropdown, inheritedWidth);
  });
});
