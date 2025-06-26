// AI-Assisted
import { expect, Locator } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

type MenuItemConfig = {
  id: string;
  label: string;
  hasSubmenu?: boolean;
  disabled?: boolean;
  submenuPopoverId?: string;
  submenuItems?: { id: string; label: string }[];
};

type SetupOptions = {
  componentsPage: any;
  rtl?: boolean;
  menuItems?: MenuItemConfig[];
};

const defaultMenuItems: MenuItemConfig[] = [
  { id: 'file', label: 'File' },
  {
    id: 'edit',
    label: 'Edit',
    hasSubmenu: true,
    submenuPopoverId: 'edit-popover',
    submenuItems: [
      { id: 'edit-undo', label: 'Undo' },
      { id: 'edit-redo', label: 'Redo' },
    ],
  },
  {
    id: 'view',
    label: 'View',
    hasSubmenu: true,
    submenuPopoverId: 'view-popover',
    submenuItems: [
      { id: 'view-zoom', label: 'Zoom' },
      { id: 'view-fullscreen', label: 'Fullscreen' },
    ],
  },
  { id: 'window', label: 'Window' },
  { id: 'preferences', label: 'Preferences', disabled: true },
  { id: 'help', label: 'Help' },
];

const setup = async (options: SetupOptions): Promise<{ menubar: Locator } & Record<string, Locator>> => {
  const { componentsPage, rtl = false, menuItems = defaultMenuItems } = options;
  const dir = rtl ? 'dir="rtl"' : '';
  const menuHtml = menuItems
    .map(item => {
      const disabled = item.disabled ? 'disabled' : '';
      let html = `<mdc-menuitem id="${item.id}" ${disabled}>${item.label}</mdc-menuitem>`;
      if (item.hasSubmenu && item.submenuItems && item.submenuPopoverId) {
        html += `
          <mdc-menupopover id="${item.submenuPopoverId}" triggerid="${item.id}" role="menu">
            ${item.submenuItems
              .map(sub => `<mdc-menuitem id="${sub.id}" role="menuitem">${sub.label}</mdc-menuitem>`)
              .join('')}
          </mdc-menupopover>
        `;
      }
      return html;
    })
    .join('');
  await componentsPage.mount({
    html: `
      <div id="test-root" ${dir}>
        <mdc-menubar orientation="vertical">
          ${menuHtml}
        </mdc-menubar>
        <button id="outside">Outside</button>
      </div>
    `,
    clearDocument: true,
  });
  const menubar = componentsPage.page.locator('mdc-menubar');
  const menuLocators: Record<string, Locator> = {};
  menuItems.forEach(item => {
    menuLocators[item.id] = componentsPage.page.locator(`#${item.id}`);
    if (item.hasSubmenu && item.submenuItems && item.submenuPopoverId) {
      menuLocators[item.submenuPopoverId] = componentsPage.page.locator(`#${item.submenuPopoverId}`);
      item.submenuItems.forEach(sub => {
        menuLocators[sub.id] = componentsPage.page.locator(`#${sub.id}`);
      });
    }
  });
  return { menubar, ...menuLocators };
};

test.describe('Menubar Feature Scenarios', () => {
  test.skip('mdc-menubar scenarios', async ({ componentsPage }) => {
    await test.step('renders menubar with correct roles and orientation', async () => {
      const { menubar } = await setup({ componentsPage });
      await test.expect(menubar).toHaveAttribute('role', 'menubar');
      await test.expect(menubar).toHaveAttribute('aria-orientation', 'vertical');
    });

    // Mouse Interactions
    await test.step(`Click on menubar menuitem that does not have submenu 
    triggers action and no submenu opens`, async () => {
      const { file } = await setup({ componentsPage });
      const waitForClick = componentsPage.waitForEvent(file, 'click');
      await file.click();
      await waitForClick;
      await expect(file).toBeFocused(); // Focus remains on the clicked item, no submenu
    });

    await test.step('Click on menubar menuitem that has submenu opens submenu and sets aria-expanded', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.click();
      const editPopover = componentsPage.page.locator('#edit-popover');
      await test.expect(editPopover).toBeVisible();
      await test.expect(edit).toHaveAttribute('aria-expanded', 'true');
    });

    await test.step('Clicking disabled menubar menuitem does nothing', async () => {
      const { preferences } = await setup({ componentsPage });
      const waitForClick = componentsPage.waitForEvent(preferences, 'click');
      await preferences.click();
      await componentsPage.expectPromiseTimesOut(waitForClick, true);
      await test.expect(preferences).toHaveAttribute('disabled');
    });

    await test.step('Switch submenu by clicking another menubar menuitem that has a submenu', async () => {
      const { edit, view } = await setup({ componentsPage });
      await view.click();
      const viewPopover = componentsPage.page.locator('#view-popover');
      await test.expect(viewPopover).toBeVisible();
      await test.expect(view).toHaveAttribute('aria-expanded', 'true');
      await test.expect(edit).toHaveAttribute('aria-expanded', 'false');
      await edit.click();
      const editPopover = componentsPage.page.locator('#edit-popover');
      await test.expect(editPopover).toBeVisible();
      await test.expect(viewPopover).not.toBeVisible();
      await test.expect(edit).toHaveAttribute('aria-expanded', 'true');
      await test.expect(view).toHaveAttribute('aria-expanded', 'false');
    });

    await test.step('Close submenu by clicking another menubar menuitem that does not have a submenu', async () => {
      const { edit, help } = await setup({ componentsPage });
      await edit.click();
      const editPopover = componentsPage.page.locator('#edit-popover');
      await test.expect(editPopover).toBeVisible();
      await test.expect(edit).toHaveAttribute('aria-expanded', 'true');
      const waitForClick = componentsPage.waitForEvent(help, 'click');
      await help.click();
      await test.expect(editPopover).not.toBeVisible();
      await test.expect(edit).toHaveAttribute('aria-expanded', 'false');
      await waitForClick;
      await expect(help).toBeFocused();
    });

    // Keyboard Interactions
    await test.step('Navigate vertical menubar menuitems with Up/Down Arrow and wrap to first/last', async () => {
      const { file, edit, view, preferences, help, window } = await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await test.expect(file).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [edit, view, window, preferences, help, file]);
      await componentsPage.actionability.pressAndCheckFocus('ArrowUp', [
        help,
        preferences,
        window,
        view,
        edit,
        file,
        help,
      ]);
    });

    await test.step('Activate menubar menuitem without submenu with Enter/Space', async () => {
      const { file } = await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await test.expect(file).toBeFocused();
      const waitForClickOnEnter = componentsPage.waitForEvent(file, 'click');
      await componentsPage.page.keyboard.press('Enter');
      await waitForClickOnEnter; // Ensure click event was triggered
      await test.expect(file).toBeFocused(); // Focus remains on the clicked item
      const waitForClickOnSpace = componentsPage.waitForEvent(file, 'click');
      await componentsPage.page.keyboard.press('Space');
      await waitForClickOnSpace; // Ensure click event was triggered
      await test.expect(file).toBeFocused(); // Focus remains on the clicked item
    });

    await test.step('Open submenu using ArrowRight (LTR) or ArrowLeft (RTL)', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await componentsPage.page.keyboard.press('ArrowRight');
      const editPopover = componentsPage.page.locator('#edit-popover');
      await test.expect(editPopover).toBeVisible();
      const undo = editPopover.locator('#edit-undo');
      await test.expect(undo).toBeFocused();
      // RTL
      const { view } = await setup({ componentsPage, rtl: true });
      await view.focus();
      await componentsPage.page.keyboard.press('ArrowLeft');
      const viewPopover = componentsPage.page.locator('#view-popover');
      await test.expect(viewPopover).toBeVisible();
      const zoom = viewPopover.locator('#view-zoom');
      await test.expect(zoom).toBeFocused();
    });

    await test.step('Navigate disabled menubar menuitems', async () => {
      const { view, preferences } = await setup({ componentsPage });
      await view.focus();
      await componentsPage.page.keyboard.press('ArrowDown');
      await test.expect(preferences).toBeFocused();
      const waitForClick = componentsPage.waitForEvent(preferences, 'click');
      await componentsPage.page.keyboard.press('Enter');
      await componentsPage.expectPromiseTimesOut(waitForClick, true); // Expect click to not trigger
      await test.expect(preferences).toHaveAttribute('disabled');
      await test.expect(preferences).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('Home and End keys navigate vertical menubar', async () => {
      const { edit, file, help } = await setup({ componentsPage });
      await edit.focus();
      await componentsPage.page.keyboard.press('Home');
      await test.expect(file).toBeFocused();
      await componentsPage.page.keyboard.press('End');
      await test.expect(help).toBeFocused();
    });

    await test.step('Tab exits Menubar and returns focus on Shift+Tab', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await componentsPage.page.keyboard.press('Enter'); // Open submenu
      await componentsPage.actionability.pressTab();
      // Focus should move outside
      await test.expect(componentsPage.page.locator('#outside')).toBeFocused();
      // All submenus close
      const submenu = componentsPage.page.locator('#edit-popover');
      await test.expect(submenu).not.toBeVisible();
      // Shift+Tab returns focus
      await componentsPage.actionability.pressShiftTab();
      await test.expect(edit).toBeFocused();
      await test.expect(submenu).not.toBeVisible();
    });

    // Submenu Keyboard Interactions
    await test.step('Navigate submenu menuitems vertically', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#edit-popover');
      const undo = submenu.locator('#edit-undo');
      const redo = submenu.locator('#edit-redo');
      await expect(undo).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [undo, redo, undo]);
      await componentsPage.actionability.pressAndCheckFocus('ArrowUp', [redo, undo, redo]);
    });

    await test.step('Close nested submenu using ArrowLeft (LTR)/ArrowRight (RTL)', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#edit-popover');
      const undo = submenu.locator('#edit-undo');
      await expect(undo).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowLeft');
      await test.expect(submenu).not.toBeVisible();
      await test.expect(edit).toBeFocused();
      // RTL
      const { view } = await setup({ componentsPage, rtl: true });
      await view.focus();
      await componentsPage.page.keyboard.press('ArrowLeft'); // Open submenu
      const submenuRTL = componentsPage.page.locator('#view-popover');
      const zoom = submenuRTL.locator('#view-zoom');
      await expect(zoom).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight');
      await test.expect(submenuRTL).not.toBeVisible();
      await test.expect(view).toBeFocused();
    });

    await test.step('Close submenu using Escape', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#edit-popover');
      const undo = submenu.locator('#edit-undo');
      await expect(undo).toBeFocused();
      await componentsPage.page.keyboard.press('Escape');
      await test.expect(submenu).not.toBeVisible();
      await test.expect(edit).toBeFocused();
    });

    // Cross-Menubar Navigation from Submenu in LTR direction
    await test.step(`Move to next menubar menuitem from submenu using ArrowRight
    (target menuitem has no submenu)`, async () => {
      const { view, window } = await setup({ componentsPage });
      await view.focus();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#view-popover');
      const zoom = submenu.locator('#view-zoom');
      await expect(zoom).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight');
      await test.expect(submenu).not.toBeVisible();
      await test.expect(window).toBeFocused(); // has no submenu
    });

    await test.step(`Move to next menubar menuitem from submenu using ArrowRight 
    (target menuitem has submenu)`, async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#edit-popover');
      const undo = submenu.locator('#edit-undo');
      await expect(undo).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight');
      await test.expect(submenu).not.toBeVisible();
      const viewSubmenu = componentsPage.page.locator('#view-popover');
      await test.expect(viewSubmenu).toBeVisible();
      const zoom = viewSubmenu.locator('#view-zoom');
      await test.expect(zoom).toBeFocused();
    });

    await test.step(`Move to previous menubar menuitem from submenu using ArrowLeft 
    (target menuitem has no submenu)`, async () => {
      const { view, file } = await setup({ componentsPage });
      await view.focus();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#view-popover');
      const zoom = submenu.locator('#view-zoom');
      await zoom.focus();
      await componentsPage.page.keyboard.press('ArrowLeft');
      await test.expect(submenu).not.toBeVisible();
      await test.expect(file).toBeFocused(); // has no submenu
    });

    await test.step(`Move to previous menubar menuitem from submenu using ArrowLeft 
    (target menuitem has submenu)`, async () => {
      const { view } = await setup({ componentsPage });
      await view.focus();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const viewSubmenu = componentsPage.page.locator('#view-popover');
      const zoom = viewSubmenu.locator('#view-zoom');
      await test.expect(zoom).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowLeft');
      await test.expect(viewSubmenu).not.toBeVisible();
      const submenu = componentsPage.page.locator('#edit-popover');
      await test.expect(submenu).toBeVisible();
      const undo = submenu.locator('#edit-undo');
      await expect(undo).toBeFocused();
    });
  });
});
// End AI-Assisted
