import { expect, type Locator } from '@playwright/test';

import { test, type ComponentsPage } from '../../../config/playwright/setup';
import type Popover from '../popover/popover.component';

import type Dialog from './dialog.component';

type SetupOptions = {
  componentsPage: ComponentsPage;
  dialogZIndex?: number;
  popoverZIndex?: number;
  dialogBeforePopover?: boolean;
};

const setup = async ({ componentsPage, dialogZIndex = 1, popoverZIndex, dialogBeforePopover }: SetupOptions) => {
  const dialogHTML = `
    <mdc-dialog id="lower-dialog" hide-backdrop z-index="${dialogZIndex}" close-button-aria-label="Close dialog">
      <div slot="dialog-body"><button id="dialog-action">Dialog action</button></div>
    </mdc-dialog>`;
  const popoverHTML = `
    <mdc-popover id="controls" triggerid="controls-trigger" trigger="manual"
      ${popoverZIndex === undefined ? '' : `z-index="${popoverZIndex}"`}
      interactive focus-trap backdrop hide-on-outside-click hide-on-escape focus-back-to-trigger>
      <button id="first-control">First control</button>
      <button id="last-control">Last control</button>
    </mdc-popover>`;
  await componentsPage.mount({
    html: `<div id="overlay-root">
      <button id="controls-trigger" style="margin: 40px">Controls</button>
      ${dialogBeforePopover ? dialogHTML + popoverHTML : popoverHTML + dialogHTML}
    </div>`,
    clearDocument: true,
  });
  const { page } = componentsPage;
  const popover = page.locator('#controls');
  const dialog = page.locator('#lower-dialog');
  const first = page.locator('#first-control');
  const last = page.locator('#last-control');
  const dialogClose = dialog.getByRole('button', { name: 'Close dialog', exact: true });
  await page.evaluate(() => {
    ['controls', 'lower-dialog'].forEach(id => {
      const overlay = document.getElementById(id)!;
      ['hidden', 'close', 'closebyescape'].forEach(name => {
        overlay.setAttribute(`data-${name}-count`, '0');
        overlay.addEventListener(name, () => {
          const attribute = `data-${name}-count`;
          overlay.setAttribute(attribute, `${Number(overlay.getAttribute(attribute)) + 1}`);
        });
      });
    });
  });
  return { page, popover, dialog, first, last, dialogClose, trigger: page.locator('#controls-trigger') };
};

const open = async (componentsPage: ComponentsPage, overlay: Locator) => {
  await componentsPage.setAttributes(overlay, { visible: '' });
  await expect(overlay).toBeVisible();
};

test.describe('managed overlay layer order', () => {
  for (const dialogFirst of [false, true]) {
    for (const dismissal of ['Escape', 'backdrop']) {
      test(`should dismiss only the higher popover by ${dismissal} when ${dialogFirst ? 'dialog' : 'popover'} opens first`, async ({
        componentsPage,
      }) => {
        const { page, popover, dialog, first, last, dialogClose } = await setup({ componentsPage });
        if (dialogFirst) await open(componentsPage, dialog);
        await open(componentsPage, popover);
        await expect(first).toBeFocused();
        await last.focus();
        if (!dialogFirst) await open(componentsPage, dialog);
        await expect(last).toBeFocused();
        await page.keyboard.press('Tab');
        await expect(first).toBeFocused();
        await page.keyboard.press('Shift+Tab');
        await expect(last).toBeFocused();

        if (dismissal === 'Escape') await page.keyboard.press('Escape');
        else await page.mouse.click(5, 5);

        await expect(popover).not.toBeVisible();
        await expect(dialog).toBeVisible();
        await expect(popover).toHaveAttribute('data-hidden-count', '1');
        await expect(dialog).toHaveAttribute('data-hidden-count', '0');
        await expect(dialog).toHaveAttribute('data-close-count', '0');
        await expect(dialogClose).toBeFocused();
      });
    }

    test(`should keep the independent popover and its focus when the ${dialogFirst ? 'earlier' : 'later'} lower dialog hides or disconnects`, async ({
      componentsPage,
    }) => {
      const { page, popover, dialog, first, last } = await setup({ componentsPage });
      if (dialogFirst) await open(componentsPage, dialog);
      await open(componentsPage, popover);
      await expect(first).toBeFocused();
      if (!dialogFirst) await open(componentsPage, dialog);
      await last.focus();
      await componentsPage.removeAttribute(dialog, 'visible');
      await expect(dialog).not.toBeVisible();
      await expect(popover).toBeVisible();
      await expect(last).toBeFocused();
      await open(componentsPage, dialog);
      await expect(last).toBeFocused();
      await dialog.evaluate(element => element.remove());
      await expect(popover).toBeVisible();
      await expect(last).toBeFocused();
      await page.keyboard.press('Tab');
      await expect(first).toBeFocused();
      await page.keyboard.press('Escape');
      await expect(popover).not.toBeVisible();
      await expect(page.locator('#controls-trigger')).toBeFocused();
    });

    test(`should preserve automatic ordering when ${dialogFirst ? 'dialog' : 'popover'} opens first`, async ({
      componentsPage,
    }) => {
      const { page, popover, dialog, first, dialogClose } = await setup({ componentsPage });
      await componentsPage.removeAttribute(dialog, 'z-index');
      const earlier = dialogFirst ? dialog : popover;
      const later = dialogFirst ? popover : dialog;
      await open(componentsPage, earlier);
      await open(componentsPage, later);
      await expect(dialogFirst ? first : dialogClose).toBeFocused();
      await page.keyboard.press('Escape');
      await expect(later).not.toBeVisible();
      await expect(earlier).toBeVisible();
    });
  }

  for (const dialogBeforePopover of [false, true]) {
    test(`should break equal explicit values by DOM order with dialog ${dialogBeforePopover ? 'before' : 'after'} popover`, async ({
      componentsPage,
    }) => {
      const { page, popover, dialog, first, dialogClose } = await setup({
        componentsPage,
        dialogZIndex: 2000,
        popoverZIndex: 2000,
        dialogBeforePopover,
      });
      const top = dialogBeforePopover ? popover : dialog;
      const bottom = dialogBeforePopover ? dialog : popover;
      // Deliberately open the visually lower layer last.
      await open(componentsPage, top);
      await open(componentsPage, bottom);
      await expect(dialogBeforePopover ? first : dialogClose).toBeFocused();
      await page.keyboard.press('Escape');
      await expect(top).not.toBeVisible();
      await expect(bottom).toBeVisible();
    });
  }

  test('should transfer focus and dismissal when zIndex changes while open or returns to automatic', async ({
    componentsPage,
  }) => {
    const { page, popover, dialog, first, last, dialogClose } = await setup({ componentsPage });
    await open(componentsPage, popover);
    await expect(first).toBeFocused();
    await open(componentsPage, dialog);
    await last.focus();
    await dialog.evaluate(element => {
      const host = element as Dialog;
      host.zIndex = 2000;
    });
    await expect(dialogClose).toBeFocused();
    await dialog.evaluate(element => {
      const host = element as Dialog;
      host.zIndex = 1;
    });
    await expect(first).toBeFocused();
    await componentsPage.removeAttribute(dialog, 'z-index');
    await expect(dialogClose).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect(popover).toBeVisible();
    await expect(first).toBeFocused();
    await expect(dialog).toHaveAttribute('data-close-count', '1');
  });

  test('should not let a lower popover steal focus from an earlier higher dialog', async ({ componentsPage }) => {
    const { page, popover, dialog, dialogClose } = await setup({ componentsPage, dialogZIndex: 2000 });
    await open(componentsPage, dialog);
    await expect(dialogClose).toBeFocused();
    await open(componentsPage, popover);
    await expect(dialogClose).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('#dialog-action')).toBeFocused();
    await popover.evaluate(element => {
      const host = element as Popover;
      host.zIndex = 3000;
    });
    await expect(page.locator('#first-control')).toBeFocused();
    await page.mouse.click(5, 5);
    await expect(popover).not.toBeVisible();
    await expect(dialog).toBeVisible();
    await expect(dialogClose).toBeFocused();
  });

  test('should reevaluate eligibility when focus trapping or interactivity changes while open', async ({
    componentsPage,
  }) => {
    const { popover, dialog, first, dialogClose } = await setup({ componentsPage });
    await open(componentsPage, popover);
    await expect(first).toBeFocused();
    await open(componentsPage, dialog);
    await componentsPage.removeAttribute(popover, 'interactive');
    await expect(dialogClose).toBeFocused();
    await componentsPage.setAttributes(popover, { interactive: '' });
    await expect(first).toBeFocused();
    await dialog.evaluate(element => {
      const host = element as Dialog;
      host.focusTrap = false;
    });
    await expect(first).toBeFocused();
    await dialog.evaluate(element => {
      const host = element as Dialog;
      host.focusTrap = true;
    });
    await expect(first).toBeFocused();
  });

  test('should cancel deferred focus when a popover hides before its focus timer runs', async ({ componentsPage }) => {
    const { popover, dialog, dialogClose } = await setup({ componentsPage, dialogZIndex: 2000 });
    await open(componentsPage, dialog);
    await expect(dialogClose).toBeFocused();
    await popover.evaluate(async element => {
      const host = element as Popover;
      host.visible = true;
      await host.updateComplete;
      host.visible = false;
      await host.updateComplete;
    });
    await expect(popover).not.toBeVisible();
    await expect(dialogClose).toBeFocused();
  });

  test('should handle a propagating Escape only once with delayed dismissal', async ({ componentsPage }) => {
    const { page, popover, dialog, first } = await setup({ componentsPage });
    await componentsPage.setAttributes(popover, { 'propagate-event-on-escape': '', delay: '0,20' });
    await open(componentsPage, popover);
    await expect(first).toBeFocused();
    await open(componentsPage, dialog);
    await page.keyboard.press('Escape');
    await expect(popover).not.toBeVisible();
    await expect(popover).toHaveAttribute('data-closebyescape-count', '1');
    await expect(popover).toHaveAttribute('data-hidden-count', '1');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('data-close-count', '0');
  });

  test('should not let a lower menu steal focus during initialization or opening', async ({ componentsPage }) => {
    const { page, popover, first, last } = await setup({ componentsPage });
    await open(componentsPage, popover);
    await expect(first).toBeFocused();
    await last.focus();
    await page.locator('#overlay-root').evaluate(root => {
      root.insertAdjacentHTML(
        'beforeend',
        `<button id="menu-trigger">Menu</button>
        <mdc-menupopover id="lower-menu" triggerid="menu-trigger" trigger="manual" z-index="500">
          <mdc-menuitem label="Menu action"></mdc-menuitem>
        </mdc-menupopover>`,
      );
    });
    await open(componentsPage, page.locator('#lower-menu'));
    await expect(last).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(first).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(popover).not.toBeVisible();
    await expect(page.locator('#lower-menu')).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Menu action' })).toBeFocused();
  });

  test('should not sweep an independent menu when another menu dismisses', async ({ componentsPage }) => {
    const { page, dialog } = await setup({ componentsPage });
    await page.locator('#overlay-root').evaluate(root => {
      root.insertAdjacentHTML(
        'beforeend',
        `<button id="menu-one-trigger">First menu</button>
        <mdc-menupopover id="menu-one" triggerid="menu-one-trigger" trigger="manual" z-index="1500">
          <mdc-menuitem label="First action"></mdc-menuitem>
        </mdc-menupopover>
        <button id="menu-two-trigger">Second menu</button>
        <mdc-menupopover id="menu-two" triggerid="menu-two-trigger" trigger="manual" z-index="2000">
          <mdc-menuitem label="Second action"></mdc-menuitem>
        </mdc-menupopover>`,
      );
    });
    const firstMenu = page.locator('#menu-one');
    const secondMenu = page.locator('#menu-two');
    await open(componentsPage, firstMenu);
    await open(componentsPage, secondMenu);
    await expect(page.getByRole('menuitem', { name: 'Second action' })).toBeFocused();
    await open(componentsPage, dialog);
    await page.mouse.click(5, 5);
    await expect(secondMenu).not.toBeVisible();
    await expect(firstMenu).toBeVisible();
    await expect(dialog).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'First action' })).toBeFocused();
  });

  test('should keep a nested standalone trap in the higher overlay active', async ({ componentsPage }) => {
    const { page, popover, dialog, first, last } = await setup({ componentsPage });
    await open(componentsPage, popover);
    await expect(first).toBeFocused();
    await last.focus();
    await popover.evaluate(host => {
      host.insertAdjacentHTML(
        'beforeend',
        `<mdc-focustrap id="nested-trap" auto-focus>
        <button id="nested-first">Nested first</button><button id="nested-last">Nested last</button>
      </mdc-focustrap>`,
      );
    });
    const nestedFirst = page.locator('#nested-first');
    const nestedLast = page.locator('#nested-last');
    await expect(nestedFirst).toBeFocused();
    await open(componentsPage, dialog);
    await expect(nestedFirst).toBeFocused();
    await nestedLast.focus();
    await page.keyboard.press('Tab');
    await expect(nestedFirst).toBeFocused();
    await componentsPage.removeAttribute(dialog, 'visible');
    await expect(nestedFirst).toBeFocused();
    await page.locator('#nested-trap').evaluate(host => host.remove());
    await expect(last).toBeFocused();
  });

  test('should keep a higher tooltip from taking focus ownership', async ({ componentsPage }) => {
    const { page, popover, first, last } = await setup({ componentsPage });
    await open(componentsPage, popover);
    await expect(first).toBeFocused();
    await last.focus();
    await page.locator('#overlay-root').evaluate(root => {
      root.insertAdjacentHTML(
        'beforeend',
        `<button id="hint-trigger">Hint</button>
        <mdc-tooltip id="hint" triggerid="hint-trigger" trigger="manual" z-index="3000" visible>Hint text</mdc-tooltip>`,
      );
    });
    await expect(page.locator('#hint')).toBeVisible();
    await expect(last).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(first).toBeFocused();
  });

  test('should not restore focus from a lower dialog after the popover has already restored its trigger', async ({
    componentsPage,
  }) => {
    const { page, popover, dialog, first, trigger } = await setup({ componentsPage });
    await open(componentsPage, popover);
    await expect(first).toBeFocused();
    await open(componentsPage, dialog);
    await componentsPage.removeAttribute(dialog, 'visible');
    await page.keyboard.press('Escape');
    await expect(popover).not.toBeVisible();
    await expect(trigger).toBeFocused();
    await dialog.evaluate(element => element.remove());
    await expect(trigger).toBeFocused();
  });

  test('should dismiss a same-trigger sibling without closing the other overlay', async ({ componentsPage }) => {
    const { page, popover, first } = await setup({ componentsPage });
    await open(componentsPage, popover);
    await expect(first).toBeFocused();
    await page.locator('#overlay-root').evaluate(root => {
      root.insertAdjacentHTML(
        'beforeend',
        `<mdc-popover id="sibling" triggerid="controls-trigger" trigger="manual"
        z-index="500" visible>Sibling content</mdc-popover>`,
      );
    });
    await expect(page.locator('#sibling')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(popover).not.toBeVisible();
    await expect(page.locator('#sibling')).toBeVisible();
  });

  for (const separateGroup of [false, true]) {
    test(`should ${separateGroup ? 'preserve a different-group descendant' : 'close actual portaled descendants'} when a parent hides`, async ({
      componentsPage,
    }) => {
      await componentsPage.mount({
        html: `<div id="portal-root">
          <button id="parent-trigger">Parent trigger</button>
          <mdc-popover id="parent" triggerid="parent-trigger" trigger="manual" interactive focus-trap>
            <button id="child-trigger">Child trigger</button>
            <mdc-popover id="child" triggerid="child-trigger" trigger="manual" append-to="portal-root"
              ${separateGroup ? 'stack-group-name="independent"' : ''} interactive focus-trap>
              <button id="grandchild-trigger">Grandchild trigger</button>
              <mdc-popover id="grandchild" triggerid="grandchild-trigger" trigger="manual" append-to="portal-root"
                ${separateGroup ? 'stack-group-name="independent"' : ''} interactive focus-trap>
                <button>Grandchild action</button>
              </mdc-popover>
            </mdc-popover>
          </mdc-popover>
          <mdc-dialog id="independent" hide-backdrop z-index="1" close-button-aria-label="Close independent">
            <div slot="dialog-body">Independent text</div>
          </mdc-dialog>
        </div>`,
        clearDocument: true,
      });
      const { page } = componentsPage;
      const parent = page.locator('#parent');
      const child = page.locator('#child');
      const grandchild = page.locator('#grandchild');
      const independent = page.locator('#independent');
      await open(componentsPage, parent);
      await open(componentsPage, child);
      await open(componentsPage, grandchild);
      await expect(grandchild.getByRole('button')).toBeFocused();
      await open(componentsPage, independent);
      await componentsPage.removeAttribute(parent, 'visible');
      await expect(parent).not.toBeVisible();
      if (separateGroup) {
        await expect(child).toBeVisible();
        await expect(grandchild).toBeVisible();
        await expect(grandchild.getByRole('button')).toBeFocused();
      } else {
        await expect(child).not.toBeVisible();
        await expect(grandchild).not.toBeVisible();
        await expect(independent.getByRole('button', { name: 'Close independent', exact: true })).toBeFocused();
      }
      await expect(independent).toBeVisible();
    });
  }
});
