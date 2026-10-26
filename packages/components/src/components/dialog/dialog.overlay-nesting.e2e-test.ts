import { expect, type Locator } from '@playwright/test';

import { test, type ComponentsPage } from '../../../config/playwright/setup';
import type Popover from '../popover/popover.component';

type SetupOptions = {
  componentsPage: ComponentsPage;
  portaled?: boolean;
  childZIndex?: number;
};

const open = async (componentsPage: ComponentsPage, overlay: Locator) => {
  await componentsPage.setAttributes(overlay, { visible: '' });
  await expect(overlay).toBeVisible();
};

const setup = async ({ componentsPage, portaled = false, childZIndex = 1000 }: SetupOptions) => {
  const appendTo = portaled ? 'append-to="nested-root"' : '';
  await componentsPage.mount({
    html: `<div id="nested-root">
      <button id="parking-trigger">Background trigger</button>
      <mdc-popover id="parking" triggerid="parking-trigger" trigger="manual">Background overlay</mdc-popover>
      <mdc-dialog id="dialog" hide-backdrop close-button-aria-label="Close outer dialog">
        <div slot="dialog-body">
          <button id="child-trigger">Child trigger</button>
          <mdc-popover id="child" triggerid="child-trigger" trigger="manual" z-index="${childZIndex}"
            ${appendTo} interactive focus-trap focus-back-to-trigger backdrop hide-on-escape hide-on-outside-click>
            <button id="child-first">First child action</button>
            <button id="child-last">Last child action</button>
          </mdc-popover>
          <mdc-select id="select" label="Choose an action" popover-z-index="1000">
            <mdc-selectlistbox>
              <mdc-option value="first" label="First option"></mdc-option>
              <mdc-option value="second" label="Second option"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <button id="menu-trigger">Menu trigger</button>
          <mdc-menupopover id="menu" triggerid="menu-trigger" ${appendTo}>
            <mdc-menuitem id="submenu-trigger" label="More actions" arrow-position="trailing"></mdc-menuitem>
            <mdc-menupopover id="submenu" triggerid="submenu-trigger" ${appendTo}>
              <mdc-menuitem label="Choose entry"></mdc-menuitem>
            </mdc-menupopover>
          </mdc-menupopover>
        </div>
      </mdc-dialog>
    </div>`,
    clearDocument: true,
  });
  const { page } = componentsPage;
  const dialog = page.locator('#dialog');
  // Opening another managed layer first gives the outer Dialog an automatic 1003.
  await open(componentsPage, page.locator('#parking'));
  await open(componentsPage, dialog);
  await expect(dialog.getByRole('button', { name: 'Close outer dialog', exact: true })).toBeFocused();
  return {
    page,
    dialog,
    child: page.locator('#child'),
    first: page.locator('#child-first'),
    last: page.locator('#child-last'),
    trigger: page.locator('#child-trigger'),
    select: page.locator('#select'),
    menu: page.locator('#menu'),
    submenu: page.locator('#submenu'),
    menuTrigger: page.locator('#menu-trigger'),
  };
};

test.describe('managed overlay nesting', () => {
  for (const dismissal of ['Escape', 'outside click']) {
    test(`should dismiss a nested popover with a lower explicit z-index by ${dismissal}`, async ({
      componentsPage,
    }) => {
      const { page, dialog, child, first, last, trigger } = await setup({ componentsPage });
      await open(componentsPage, child);
      await expect(first).toBeFocused();
      await last.focus();
      await page.keyboard.press('Tab');
      await expect(first).toBeFocused();
      if (dismissal === 'Escape') await page.keyboard.press('Escape');
      else {
        const bounds = await dialog.boundingBox();
        expect(bounds).not.toBeNull();
        await page.mouse.click(bounds!.x + bounds!.width - 5, bounds!.y + 5);
      }
      await expect(child).not.toBeVisible();
      await expect(dialog).toBeVisible();
      await expect(trigger).toBeFocused();
    });
  }

  test('should keep a nested select with a lower explicit z-index usable and dismissible', async ({
    componentsPage,
  }) => {
    const { page, dialog, select } = await setup({ componentsPage });
    const combobox = select.getByRole('combobox');
    await combobox.click();
    await expect(select.locator('mdc-popover')).toBeVisible();
    await expect(select.getByRole('option', { name: 'First option', exact: true })).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(select.getByRole('option', { name: 'Second option', exact: true })).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(select.locator('mdc-popover')).not.toBeVisible();
    await expect(dialog).toBeVisible();
    await expect(combobox).toBeFocused();
  });

  for (const { childZIndex, foregroundZIndex, foregroundOnTop } of [
    { childZIndex: 1000, foregroundZIndex: 1002, foregroundOnTop: false },
    { childZIndex: 3000, foregroundZIndex: 2000, foregroundOnTop: true },
  ]) {
    test(`should order an entire nested branch ${foregroundOnTop ? 'below' : 'above'} an unrelated overlay`, async ({
      componentsPage,
    }) => {
      const { page, dialog, child, first } = await setup({ componentsPage, childZIndex });
      await open(componentsPage, child);
      await expect(first).toBeFocused();
      await page.locator('#nested-root').evaluate((root, zIndex) => {
        root.insertAdjacentHTML(
          'beforeend',
          `<button id="foreground-trigger">Foreground trigger</button>
          <mdc-popover id="foreground" triggerid="foreground-trigger" trigger="manual" z-index="${zIndex}"
            interactive focus-trap focus-back-to-trigger hide-on-escape>
            <button id="foreground-action">Foreground action</button>
          </mdc-popover>`,
        );
      }, foregroundZIndex);
      const foreground = page.locator('#foreground');
      await open(componentsPage, foreground);
      await expect(foregroundOnTop ? page.locator('#foreground-action') : first).toBeFocused();
      await page.keyboard.press('Escape');
      await expect(foregroundOnTop ? foreground : child).not.toBeVisible();
      await expect(foregroundOnTop ? child : foreground).toBeVisible();
      await expect(dialog).toBeVisible();
    });
  }

  test('should compare a portaled lower child numerically in its actual placement', async ({ componentsPage }) => {
    const { page, dialog, child } = await setup({ componentsPage, portaled: true });
    const close = dialog.getByRole('button', { name: 'Close outer dialog', exact: true });
    await open(componentsPage, child);
    await expect(close).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect(child).not.toBeVisible();
  });

  for (const portaled of [false, true]) {
    for (const selection of ['Enter', 'click', 'hide']) {
      test(`should restore the root trigger after a ${portaled ? 'portaled' : 'DOM-nested'} menu chain closes by ${selection}`, async ({
        componentsPage,
      }) => {
        const { page, dialog, menu, submenu, menuTrigger } = await setup({ componentsPage, portaled });
        await open(componentsPage, menu);
        await open(componentsPage, submenu);
        const entry = submenu.getByRole('menuitem', { name: 'Choose entry', exact: true });
        await expect(entry).toBeFocused();
        if (selection === 'Enter') await page.keyboard.press('Enter');
        else if (selection === 'click') await entry.click();
        else await componentsPage.removeAttribute(menu, 'visible');
        await expect(submenu).not.toBeVisible();
        await expect(menu).not.toBeVisible();
        await expect(dialog).toBeVisible();
        await expect(menuTrigger).toBeFocused();
        await page.keyboard.press('Tab');
        await expect(dialog.getByRole('button', { name: 'Close outer dialog', exact: true })).toBeFocused();
      });
    }

    test(`should restore a non-trapping ${portaled ? 'portaled' : 'DOM-nested'} popover inside an active dialog trap`, async ({
      componentsPage,
    }) => {
      const { dialog, child, first, trigger } = await setup({ componentsPage, portaled, childZIndex: 2000 });
      await child.evaluate(element => {
        const host = element as Popover;
        host.focusTrap = false;
      });
      await open(componentsPage, child);
      await first.focus();
      await componentsPage.removeAttribute(child, 'visible');
      await expect(child).not.toBeVisible();
      await expect(dialog).toBeVisible();
      await expect(trigger).toBeFocused();
    });
  }
});
