import { expect, Locator } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';

type MenuItemConfig = {
  id: string;
  label: string;
  hasSubmenu?: boolean;
  softDisabled?: boolean;
  disabled?: boolean;
  submenuPopoverId?: string;
  submenuItems?: MenuItemConfig[];
};

type SetupOptions = {
  componentsPage: ComponentsPage;
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
      {
        id: 'edit-undo',
        label: 'Undo',
        hasSubmenu: true,
        submenuPopoverId: 'edit-undo-popover',
        submenuItems: [
          { id: 'edit-undo-typing', label: 'Undo Typing' },
          { id: 'edit-undo-formatting', label: 'Undo Formatting' },
        ],
      },
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
      { id: 'view-minimize', label: 'Minimize', disabled: true },
    ],
  },
  { id: 'window', label: 'Window' },
  { id: 'preferences', label: 'Preferences', softDisabled: true },
  { id: 'help', label: 'Help' },
];

const renderMenuItems = (items: MenuItemConfig[]): string =>
  items
    .map((item) => {
      const disabled = item.disabled ? 'disabled' : '';
      const softDisabled = item.softDisabled ? 'soft-disabled' : '';
      let html = `<mdc-menuitem id="${item.id}" ${disabled} ${softDisabled} label="${item.label}"></mdc-menuitem>`;
      if (item.hasSubmenu && item.submenuItems && item.submenuPopoverId) {
        html += `
          <mdc-menupopover id="${item.submenuPopoverId}" triggerid="${item.id}">
            ${renderMenuItems(item.submenuItems)}
          </mdc-menupopover>
        `;
      }
      return html;
    })
    .join('');

const setup = async (
  options: SetupOptions,
): Promise<{ menubar: Locator } & Record<string, Locator>> => {
  const { componentsPage, rtl = false, menuItems = defaultMenuItems } = options;
  const dir = rtl ? 'dir="rtl"' : '';
  const menuHtml = renderMenuItems(menuItems);
  await componentsPage.mount({
    html: `
      <div id="test-root" style="width: 100px" ${dir}>
        <mdc-menubar aria-orientation="vertical">
          ${menuHtml}
        </mdc-menubar>
        <button id="outside">Outside</button>
      </div>
    `,
    clearDocument: true,
  });
  const menubar = componentsPage.page.locator('mdc-menubar');
  const menuLocators: Record<string, Locator> = {};
  menuItems.forEach((item) => {
    menuLocators[item.id] = componentsPage.page.locator(`#${item.id}`);
    if (item.hasSubmenu && item.submenuItems && item.submenuPopoverId) {
      menuLocators[item.submenuPopoverId] = componentsPage.page.locator(`#${item.submenuPopoverId}`);
      item.submenuItems.forEach((sub) => {
        menuLocators[sub.id] = componentsPage.page.locator(`#${sub.id}`);
        if (sub.hasSubmenu && sub.submenuItems && sub.submenuPopoverId) {
          menuLocators[sub.submenuPopoverId] = componentsPage.page.locator(`#${sub.submenuPopoverId}`);
          sub.submenuItems.forEach((nested) => {
            menuLocators[nested.id] = componentsPage.page.locator(`#${nested.id}`);
          });
        }
      });
    }
  });
  return { menubar, ...menuLocators };
};

test.describe('Menubar Feature Scenarios', () => {
  test('mdc-menubar scenarios', async ({ componentsPage }) => {
    await test.step('renders menubar with correct roles and orientation', async () => {
      const { menubar } = await setup({ componentsPage });
      await expect(menubar).toHaveAttribute('role', 'menubar');
      await expect(menubar).toHaveAttribute('aria-orientation', 'vertical');
    });

    // Mouse Interactions
    await test.step(`Click on menubar menuitem that does not have submenu 
    triggers action and no submenu opens`, async () => {
      const { file } = await setup({ componentsPage });
      const waitForClick = componentsPage.waitForEvent(file, 'click');
      await file.click();
      await waitForClick;
    });

    await test.step('Click on menubar menuitem that has submenu opens submenu and sets aria-expanded', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.click();
      const editPopover = componentsPage.page.locator('#edit-popover');
      await expect(editPopover).toBeVisible();
      await expect(edit).toHaveAttribute('aria-expanded', 'true');
    });

    await test.step('Clicking soft-disabled menubar menuitem does nothing', async () => {
      const { preferences } = await setup({ componentsPage });
      await expect(preferences).toHaveAttribute('soft-disabled');
      const waitForClick = componentsPage.waitForEvent(preferences, 'click');
      await preferences.click();
      await componentsPage.expectPromiseTimesOut(waitForClick, true);
      await expect(preferences).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('Switch submenu by clicking another menubar menuitem that has a submenu', async () => {
      const { edit, view } = await setup({ componentsPage });
      await view.click();
      const viewPopover = componentsPage.page.locator('#view-popover');
      await expect(viewPopover).toBeVisible();
      await expect(view).toHaveAttribute('aria-expanded', 'true');
      await expect(edit).toHaveAttribute('aria-expanded', 'false');
      await edit.click();
      const editPopover = componentsPage.page.locator('#edit-popover');
      await expect(editPopover).toBeVisible();
      await expect(viewPopover).not.toBeVisible();
      await expect(edit).toHaveAttribute('aria-expanded', 'true');
      await expect(view).toHaveAttribute('aria-expanded', 'false');
    });

    await test.step('Close submenu by clicking another menubar menuitem that does not have a submenu', async () => {
      const { edit, help } = await setup({ componentsPage });
      await edit.click();
      const editPopover = componentsPage.page.locator('#edit-popover');
      await expect(editPopover).toBeVisible();
      await expect(edit).toHaveAttribute('aria-expanded', 'true');
      const waitForClick = componentsPage.waitForEvent(help, 'click');
      await help.click();
      await waitForClick;
      await expect(editPopover).not.toBeVisible();
      await expect(edit).toHaveAttribute('aria-expanded', 'false');
    });

    // Keyboard Interactions
    await test.step('Navigate vertical menubar menuitems with Up/Down Arrow and wrap to first/last', async () => {
      const { file, edit, view, preferences, help, window } = await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await expect(file).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus(
        'ArrowDown',
        [edit, view, window, preferences, help, file],
      );
      await componentsPage.actionability.pressAndCheckFocus(
        'ArrowUp',
        [help, preferences, window, view, edit, file, help],
      );
    });

    await test.step('Activate menubar menuitem without submenu with Enter/Space', async () => {
      const { file } = await setup({ componentsPage });
      const waitForClickOnEnter = componentsPage.waitForEvent(file, 'click');
      const waitForClickOnSpace = componentsPage.waitForEvent(file, 'click');
      await componentsPage.actionability.pressTab();
      await expect(file).toBeFocused();
      await componentsPage.page.keyboard.press('Enter');
      await waitForClickOnEnter; // Ensure click event was triggered
      await expect(file).toBeFocused(); // Focus remains on the clicked item
      await componentsPage.page.keyboard.press('Space');
      await waitForClickOnSpace; // Ensure click event was triggered
      await expect(file).toBeFocused(); // Focus remains on the clicked item
    });

    await test.step('Open submenu using ArrowRight (LTR) or ArrowLeft (RTL)', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await expect(edit).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight');
      const editPopover = componentsPage.page.locator('#edit-popover');
      await expect(editPopover).toBeVisible();
      const undo = editPopover.locator('#edit-undo');
      await expect(undo).toBeFocused();
      // RTL
      const { view } = await setup({ componentsPage, rtl: true });
      await view.focus();
      await expect(view).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowLeft');
      const viewPopover = componentsPage.page.locator('#view-popover');
      await expect(viewPopover).toBeVisible();
      const zoom = viewPopover.locator('#view-zoom');
      await expect(zoom).toBeFocused();
    });

    await test.step('Navigate soft-disabled menubar menuitems', async () => {
      const { window, preferences } = await setup({ componentsPage });
      await window.focus();
      await expect(window).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(preferences).toBeFocused();
      const waitForClick = componentsPage.waitForEvent(preferences, 'click');
      await componentsPage.page.keyboard.press('Enter');
      await componentsPage.expectPromiseTimesOut(waitForClick, true); // Expect click to not trigger
      await expect(preferences).toHaveAttribute('soft-disabled');
      await expect(preferences).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('Home and End keys navigate vertical menubar', async () => {
      const { edit, file, help } = await setup({ componentsPage });
      await edit.focus();
      await expect(edit).toBeFocused();
      await componentsPage.page.keyboard.press('Home');
      await expect(file).toBeFocused();
      await componentsPage.page.keyboard.press('End');
      await expect(help).toBeFocused();
    });

    await test.step('Tab exits Menubar and returns focus on Shift+Tab', async () => {
      const { file, edit } = await setup({ componentsPage });
      await componentsPage.page.pause();
      await componentsPage.actionability.pressTab();
      await expect(file).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(edit).toBeFocused();
      await componentsPage.actionability.pressTab();
      // Focus should move outside
      await expect(componentsPage.page.locator('#outside')).toBeFocused();
      // Shift+Tab returns focus
      await componentsPage.actionability.pressShiftTab();
      await expect(edit).toBeFocused();
    });

    // Submenu Keyboard Interactions
    await test.step('Navigate submenu menuitems vertically', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await expect(edit).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#edit-popover');
      const undo = submenu.locator('#edit-undo');
      const redo = submenu.locator('#edit-redo');
      await expect(undo).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [redo, undo]);
      await componentsPage.actionability.pressAndCheckFocus('ArrowUp', [redo, undo]);
    });

    await test.step('Close submenu using Escape', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await expect(edit).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#edit-popover');
      const undo = submenu.locator('#edit-undo');
      await expect(undo).toBeFocused();
      await componentsPage.page.keyboard.press('Escape');
      await expect(submenu).not.toBeVisible();
      await expect(edit).toBeFocused();
    });

    // Cross-Menubar Navigation from Submenu in LTR direction
    await test.step(`Move to next menubar menuitem from submenu using ArrowRight
    (target menuitem has no submenu)`, async () => {
      const { view, window } = await setup({ componentsPage });
      await view.focus();
      await expect(view).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#view-popover');
      const zoom = submenu.locator('#view-zoom');
      await expect(zoom).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight');
      await expect(submenu).not.toBeVisible();
      await expect(window).toBeFocused(); // has no submenu
    });

    await test.step(`Move to next menubar menuitem from submenu using ArrowRight 
    (target menuitem has submenu)`, async () => {
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await expect(edit).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight');
      const submenu = componentsPage.page.locator('#edit-popover');
      const undo = submenu.locator('#edit-undo');
      await expect(undo).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight');
      const undoSubmenu = componentsPage.page.locator('#edit-undo-popover');
      await expect(undoSubmenu).toBeVisible();
      await componentsPage.page.keyboard.press('ArrowRight');
      await expect(undoSubmenu).not.toBeVisible();
      await expect(submenu).not.toBeVisible();
      const viewSubmenu = componentsPage.page.locator('#view-popover');
      await expect(viewSubmenu).toBeVisible();
      const zoom = viewSubmenu.locator('#view-zoom');
      await expect(zoom).toBeFocused();
    });

    await test.step(`Move to previous menubar menuitem from submenu using ArrowLeft 
    (target menuitem has no submenu)`, async () => {
      const { edit, file } = await setup({ componentsPage });
      await edit.focus();
      await expect(edit).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const submenu = componentsPage.page.locator('#edit-popover');
      const undo = submenu.locator('#edit-undo');
      await undo.focus();
      await expect(undo).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowLeft');
      await expect(submenu).not.toBeVisible();
      await expect(file).toBeFocused(); // has no submenu
    });

    await test.step(`Move to previous menubar menuitem from submenu using ArrowLeft 
    (target menuitem has submenu)`, async () => {
      const { view } = await setup({ componentsPage });
      await view.focus();
      await expect(view).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight'); // Open submenu
      const viewSubmenu = componentsPage.page.locator('#view-popover');
      const zoom = viewSubmenu.locator('#view-zoom');
      await expect(zoom).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowLeft');
      await expect(viewSubmenu).not.toBeVisible();
      const submenu = componentsPage.page.locator('#edit-popover');
      await expect(submenu).toBeVisible();
      const undo = submenu.locator('#edit-undo');
      await expect(undo).toBeFocused();
    });
  });
});
