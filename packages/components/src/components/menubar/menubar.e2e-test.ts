import type { Locator } from '@playwright/test';

import { ComponentsPage, test, expect } from '../../../config/playwright/setup';

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
  {
    id: 'preferences',
    label: 'Preferences',
    softDisabled: true,
    hasSubmenu: true,
    submenuPopoverId: 'preferences-popover',
    submenuItems: [
      { id: 'preferences-theme', label: 'Theme' },
      { id: 'preferences-language', label: 'Language' },
    ],
  },
  { id: 'help', label: 'Help' },
];

const renderMenuItems = (items: MenuItemConfig[]): string =>
  items
    .map(item => {
      const disabled = item.disabled ? 'disabled' : '';
      const softDisabled = item.softDisabled ? 'soft-disabled' : '';
      let html = `<mdc-menuitem id="${item.id}" ${disabled} ${softDisabled} label="${item.label}" ${item.hasSubmenu ? 'arrow-position="trailing"' : ''}></mdc-menuitem>`;
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

const setup = async (options: SetupOptions): Promise<{ menubar: Locator } & Record<string, Locator>> => {
  const { componentsPage, rtl = false, menuItems = defaultMenuItems } = options;
  const dir = rtl ? 'dir="rtl"' : '';
  const menuHtml = renderMenuItems(menuItems);
  await componentsPage.mount({
    html: `
      <div id="test-root" style="width: 150px; margin: 0 1rem;" ${dir}>
        <mdc-menubar>
          ${menuHtml}
        </mdc-menubar>
        <mdc-button id="outside">Outside</mdc-button>
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
        if (sub.hasSubmenu && sub.submenuItems && sub.submenuPopoverId) {
          menuLocators[sub.submenuPopoverId] = componentsPage.page.locator(`#${sub.submenuPopoverId}`);
          sub.submenuItems.forEach(nested => {
            menuLocators[nested.id] = componentsPage.page.locator(`#${nested.id}`);
          });
        }
      });
    }
  });
  return { menubar, ...menuLocators };
};

test.describe('Menubar Feature Scenarios', () => {
  test.use({ viewport: { width: 800, height: 600 } });
  test('mdc-menubar scenarios', async ({ componentsPage }) => {
    await test.step('renders menubar with correct roles and orientation', async () => {
      const { menubar } = await setup({ componentsPage });
      await expect(menubar).toHaveAttribute('role', 'menubar');
      await expect(menubar).toHaveAttribute('aria-orientation', 'vertical');
      // ACCESSIBILITY
      await componentsPage.accessibility.checkForA11yViolations('menuitem-default');
    });

    // Mouse Interactions
    await test.step(`Click on menubar menuitem that does not have submenu 
    triggers action and no submenu opens`, async () => {
      const { file } = await setup({ componentsPage });
      const waitForClick = await componentsPage.waitForEvent(file, 'click');
      await file.click();
      await expect(waitForClick).toEventEmitted();
    });

    await test.step('Click on menubar menuitem that has submenu opens submenu and sets aria-expanded', async () => {
      const { edit } = await setup({ componentsPage });
      await edit.click();
      const editPopover = componentsPage.page.locator('#edit-popover');
      await expect(editPopover).toBeVisible();
      await expect(edit).toHaveAttribute('aria-expanded', 'true');
    });

    await test.step('Clicking soft-disabled menubar menuitem does not open submenu', async () => {
      const { preferences } = await setup({ componentsPage });
      await expect(preferences).toHaveAttribute('soft-disabled');
      await expect(preferences).toHaveAttribute('aria-disabled', 'true');
      await preferences.focus();
      await expect(preferences).toBeFocused();
      await componentsPage.page.keyboard.press('Enter');
      const subMenu = componentsPage.page.locator('#preferences-popover');
      await expect(subMenu).not.toBeVisible();
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
      const waitForClick = await componentsPage.waitForEvent(help, 'click');
      await help.click();
      await expect(waitForClick).toEventEmitted();
      await expect(editPopover).not.toBeVisible();
      await expect(edit).toHaveAttribute('aria-expanded', 'false');
    });

    // Keyboard Interactions
    await test.step('Navigate vertical menubar menuitems with Up/Down Arrow and wrap to first/last', async () => {
      const { file, edit, view, preferences, help, window } = await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await expect(file).toBeFocused();
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
      const waitForClickOnEnter = await componentsPage.waitForEvent(file, 'click');
      const waitForClickOnSpace = await componentsPage.waitForEvent(file, 'click');
      await componentsPage.actionability.pressTab();
      await expect(file).toBeFocused();
      await componentsPage.page.keyboard.press('Enter');
      await expect(waitForClickOnEnter).toEventEmitted(); // Ensure click event was triggered
      await expect(file).toBeFocused(); // Focus remains on the clicked item
      await componentsPage.page.keyboard.press('Space');
      await expect(waitForClickOnSpace).toEventEmitted(); // Ensure click event was triggered
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
      await componentsPage.page.keyboard.press('Enter');
      const subMenu = componentsPage.page.locator('#preferences-popover');
      await expect(subMenu).not.toBeVisible();
      await componentsPage.page.keyboard.press('Space');
      await expect(subMenu).not.toBeVisible();
      await componentsPage.page.keyboard.press('ArrowRight');
      await expect(subMenu).not.toBeVisible();
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
      await componentsPage.page.mouse.move(0, 400);
      const { edit } = await setup({ componentsPage });
      await edit.focus();
      await expect(edit).toBeFocused();
      await componentsPage.visualRegression.takeScreenshot('mdc-menubar');
      await componentsPage.page.keyboard.press('ArrowRight');
      const submenu = componentsPage.page.locator('#edit-popover');
      const undo = submenu.locator('#edit-undo');
      await expect(undo).toBeFocused();
      await componentsPage.visualRegression.takeScreenshot('mdc-menubar-edit-popover');
      await componentsPage.page.keyboard.press('ArrowRight');
      const undoSubmenu = componentsPage.page.locator('#edit-undo-popover');
      await expect(undoSubmenu).toBeVisible();
      await componentsPage.visualRegression.takeScreenshot('mdc-menubar-undo-popover');
      await componentsPage.page.keyboard.press('ArrowRight');
      await expect(undoSubmenu).not.toBeVisible();
      await expect(submenu).not.toBeVisible();
      const viewSubmenu = componentsPage.page.locator('#view-popover');
      await expect(viewSubmenu).toBeVisible();
      const zoom = viewSubmenu.locator('#view-zoom');
      await expect(zoom).toBeFocused();
      await componentsPage.visualRegression.takeScreenshot('mdc-menubar-view-popover');
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
      await componentsPage.visualRegression.takeScreenshot('mdc-menubar-view-popover');
      await componentsPage.page.keyboard.press('ArrowLeft');
      await expect(viewSubmenu).not.toBeVisible();
      const submenu = componentsPage.page.locator('#edit-popover');
      await expect(submenu).toBeVisible();
      const undo = submenu.locator('#edit-undo');
      await expect(undo).toBeFocused();
      await componentsPage.visualRegression.takeScreenshot('mdc-menubar-edit-popover');
    });

    // Menubar with menusection and divider
    await test.step('menubar with menusection groups and dividers', async () => {
      await componentsPage.mount({
        html: `
          <mdc-menubar style="width: 8rem; margin: 1rem 0;">
            <mdc-menusection>
              <mdc-menuitem id="temp-id1" label="Style1"></mdc-menuitem>
              <mdc-menuitem id="temp-id2" label="Style2"></mdc-menuitem>
              <mdc-menuitem id="temp-id3" label="Style3"></mdc-menuitem>
              <mdc-menuitem id="temp-id4" label="Style4" arrow-position="trailing"></mdc-menuitem>
              <mdc-menupopover triggerid="temp-id4">
                <mdc-menusection>
                  <mdc-menuitem id="submenu-small" label="Small"></mdc-menuitem>
                  <mdc-menuitem label="Medium"></mdc-menuitem>
                  <mdc-menuitem label="Large"></mdc-menuitem>
                </mdc-menusection>
              </mdc-menupopover>
            </mdc-menusection>
            <mdc-divider></mdc-divider>
            <mdc-menusection>
              <mdc-menuitem id="align-id1" label="Align1" arrow-position="trailing"></mdc-menuitem>
              <mdc-menuitem id="align-id2" label="Align2"></mdc-menuitem>
              <mdc-menuitem id="align-id3" label="Align3"></mdc-menuitem>
              <mdc-menuitem id="align-id4" label="Align4"></mdc-menuitem>
              <mdc-menupopover triggerid="align-id1">
                <mdc-menusection>
                  <mdc-menuitem id="submenu-left" label="Left"></mdc-menuitem>
                  <mdc-menuitem label="Center"></mdc-menuitem>
                  <mdc-menuitem label="Right"></mdc-menuitem>
                </mdc-menusection>
              </mdc-menupopover>
            </mdc-menusection>
          </mdc-menubar>
        `,
        clearDocument: true,
      });
      const style1 = componentsPage.page.locator('#temp-id1');
      const style2 = componentsPage.page.locator('#temp-id2');
      const style3 = componentsPage.page.locator('#temp-id3');
      const style4 = componentsPage.page.locator('#temp-id4');
      const align1 = componentsPage.page.locator('#align-id1');
      const styleSubmenu = componentsPage.page.locator('mdc-menupopover[triggerid="temp-id4"]');
      const alignSubmenu = componentsPage.page.locator('mdc-menupopover[triggerid="align-id1"]');

      await test.step('Keyboard navigation through menubar with menusection', async () => {
        await componentsPage.actionability.pressTab();
        await expect(style1).toBeFocused();
        // Down Arrow moves to next
        await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [style2, style3, style4, align1]);
        // Up Arrow moves back
        await componentsPage.actionability.pressAndCheckFocus('ArrowUp', [style4, style3, style2, style1]);
      });

      await test.step('Open submenu from menuitem inside menusection', async () => {
        await style4.focus();
        await componentsPage.page.keyboard.press('ArrowRight');
        await expect(styleSubmenu).toBeVisible();
        const submenuSmall = componentsPage.page.locator('#submenu-small');
        await expect(submenuSmall).toBeFocused();
        await componentsPage.page.keyboard.press('ArrowRight');
        await expect(styleSubmenu).not.toBeVisible();
        await expect(alignSubmenu).toBeVisible();
        const submenuLeft = componentsPage.page.locator('#submenu-left');
        await expect(submenuLeft).toBeFocused();
        await componentsPage.page.keyboard.press('ArrowLeft');
        await expect(alignSubmenu).not.toBeVisible();
        await expect(styleSubmenu).toBeVisible();
        await expect(submenuSmall).toBeFocused();
      });
    });
  });
});
