import type { Locator } from '@playwright/test';

import { type ComponentsPage, expect, test } from '../../../config/playwright/setup';

import type Combobox from './combobox.component';

type SetupOptions = {
  strategy?: 'absolute' | 'fixed';
  matchTriggerWidth?: boolean;
  /** Renders the combobox inside an elevated popover, which is the containing block of fixed descendants. */
  nested?: boolean;
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
    nested = false,
    dir = 'ltr',
    style = '',
    wrapperStyle = '',
  }: SetupOptions = {},
) => {
  await componentsPage.page.setViewportSize(VIEWPORT);
  const control = `
    <div id="wrapper" dir="${dir}" style="width: ${nested ? '100%' : '16rem'}; ${wrapperStyle}">
      <mdc-combobox label="Choose a fruit" strategy="${strategy}" ${matchTriggerWidth ? 'match-trigger-width' : ''} style="${style}">
        <mdc-selectlistbox>
          <mdc-option value="apple" label="Apple"></mdc-option>
          <mdc-option value="banana" label="Banana"></mdc-option>
          <mdc-option value="cherry" label="Cherry"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    </div>`;
  await componentsPage.mount({
    html: nested
      ? `<div class="mds-elevation">
          <div style="padding: 1rem;"><button id="outer-trigger">Outer</button></div>
          <mdc-popover triggerid="outer-trigger" visible placement="bottom-start" style="width: 16rem; max-width: none;">
            ${control}
          </mdc-popover>
        </div>`
      : `<div style="padding: 4rem;">${control}</div>`,
    clearDocument: true,
  });

  await componentsPage.page.evaluate(async () => {
    await document.fonts.ready;
  });
  const combobox = componentsPage.page.locator('mdc-combobox');
  await combobox.getByRole('combobox').click();
  await expect(combobox.getByRole('listbox')).toBeVisible();

  return {
    combobox,
    trigger: combobox.locator('[part="combobox-base"]'),
    dropdown: combobox.locator('mdc-popover'),
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

test.describe('mdc-combobox match-trigger-width', () => {
  test('should keep the existing fixed dropdown width when match-trigger-width is not set', async ({
    componentsPage,
  }) => {
    const { combobox, trigger, dropdown } = await setup(componentsPage, { matchTriggerWidth: false });
    const setMatchTriggerWidth = (value: boolean) =>
      componentsPage.page.evaluate(v => {
        const element = document.querySelector('mdc-combobox') as Combobox;
        element.matchTriggerWidth = v;
      }, value);

    await expect(combobox).toHaveJSProperty('matchTriggerWidth', false);
    await expect(combobox).not.toHaveAttribute('match-trigger-width');
    await expectWidth(dropdown, VIEWPORT.width);

    await setMatchTriggerWidth(true);
    await expect(combobox).toHaveAttribute('match-trigger-width');
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

  test.describe('in a nested elevated popover with a 75% combobox width', () => {
    const style = '--mdc-combobox-width: 75%;';

    test('should match the trigger width when strategy is fixed', async ({ componentsPage }) => {
      const { trigger, dropdown } = await setup(componentsPage, { nested: true, style });

      await expectWidth(dropdown, await width(trigger));
    });

    test('should not change the dropdown width when strategy is absolute', async ({ componentsPage }) => {
      const { combobox, trigger, dropdown } = await setup(componentsPage, {
        nested: true,
        style,
        strategy: 'absolute',
      });
      const expected = (await width(trigger)) * 0.75;

      await expectWidth(dropdown, expected);
      await combobox.evaluate(element => element.removeAttribute('match-trigger-width'));
      await expectWidth(dropdown, expected);
    });
  });

  test.describe('explicit listbox width', () => {
    test('should use a direct listbox width, including live edits while open', async ({ componentsPage }) => {
      const { combobox, trigger, dropdown } = await setup(componentsPage);
      const setListboxWidth = (value: string) =>
        combobox.evaluate((element, v) => {
          element.style.setProperty('--mdc-combobox-listbox-width', v);
        }, value);

      await setListboxWidth('50%');
      await expectWidth(dropdown, VIEWPORT.width * 0.5);
      await setListboxWidth('75%');
      await expectWidth(dropdown, VIEWPORT.width * 0.75);
      await setListboxWidth('');
      await expectWidth(dropdown, await width(trigger));
    });

    test('should use an aliased listbox width, including live edits while open', async ({ componentsPage }) => {
      const { combobox, trigger, dropdown } = await setup(componentsPage, {
        style: '--consumer-width: 50%; --mdc-combobox-listbox-width: var(--consumer-width);',
      });

      await expectWidth(dropdown, VIEWPORT.width * 0.5);
      await combobox.evaluate(element => element.style.setProperty('--consumer-width', '30%'));
      await expectWidth(dropdown, VIEWPORT.width * 0.3);
      await combobox.evaluate(element => element.style.removeProperty('--mdc-combobox-listbox-width'));
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

      await setSheet('mdc-combobox { --mdc-combobox-listbox-width: 40%; }');
      await expectWidth(dropdown, VIEWPORT.width * 0.4);
      await setSheet('mdc-combobox { --mdc-combobox-listbox-width: 25%; }');
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
