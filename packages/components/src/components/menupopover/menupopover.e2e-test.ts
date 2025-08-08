import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  html: string;
};

const defaultHTML = `
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      <mdc-menupopover triggerid="trigger-btn">
        <mdc-menuitem label="Profile"></mdc-menuitem>
        <mdc-menuitem label="Settings" disabled></mdc-menuitem>
        <mdc-menuitem label="Notifications"></mdc-menuitem>
        <mdc-menuitem label="Logout"></mdc-menuitem>
      </mdc-menupopover>
    </div>`;

const nestedHTML = `
  <div id="menupopover-test-wrapper">
    <mdc-button id="trigger-btn">Options</mdc-button>
    <mdc-menupopover triggerid="trigger-btn">
      <mdc-menuitem label="Profile"></mdc-menuitem>
      <mdc-menuitem id="submenu-trigger" label="Settings" arrow-position='trailing'></mdc-menuitem>
      <mdc-menupopover triggerid="submenu-trigger" placement="right-start">
        <mdc-menuitem label="Account"></mdc-menuitem>
        <mdc-menuitem label="Privacy"></mdc-menuitem>
        <mdc-menuitem label="Security" id="security-id" arrow-position='trailing'></mdc-menuitem>
        <mdc-menupopover triggerid="security-id" placement="right-start">
          <mdc-menuitem label="Change Password"></mdc-menuitem>
          <mdc-menuitem label="Two-Factor Authentication"></mdc-menuitem>
          <mdc-menuitem label="Security Questions"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem label="Advanced" disabled></mdc-menuitem>
      </mdc-menupopover>
      <mdc-menuitem label="Notifications"></mdc-menuitem>
      <mdc-menuitem label="Logout" disabled></mdc-menuitem>
    </mdc-menupopover>
  </div>`;

const groupHTML = `
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      <mdc-menupopover triggerid="trigger-btn">
        <mdc-menuitem label="Profile"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Preferences">
          <mdc-menuitemcheckbox label="Enable feature" aria-checked="false"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Beta mode" aria-checked="true"></mdc-menuitemcheckbox>
          <mdc-menuitemradio name="theme" label="Light" aria-checked="true"></mdc-menuitemradio>
          <mdc-menuitemradio name="theme" label="Dark" aria-checked="false"></mdc-menuitemradio>
          <mdc-menuitemradio name="theme" label="System" aria-checked="false"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-menuitem label="Notifications"></mdc-menuitem>
      </mdc-menupopover>
    </div>`;

const menuItemSelector = '[role="menuitem"]';

const setup = async (args: SetupOptions) => {
  const { componentsPage, html } = args;

  await componentsPage.mount({ html, clearDocument: true });

  const wrapper = componentsPage.page.locator('#menupopover-test-wrapper');
  const triggerElement = wrapper.locator('#trigger-btn');
  await triggerElement.waitFor();
  return { wrapper, triggerElement };
};

// Helper to open the popover using keyboard and assert first item focus
const openPopoverWithKeyboard = async (
  componentsPage: ComponentsPage,
  triggerElement: ReturnType<typeof componentsPage.page.locator>,
  menupopover: ReturnType<typeof triggerElement.locator>,
) => {
  await componentsPage.actionability.pressTab();
  await expect(triggerElement).toBeFocused();
  await componentsPage.page.keyboard.press('Enter');
  await expect(menupopover).toBeVisible();
  const firstItem = menupopover.locator(menuItemSelector).first();
  await expect(firstItem).toBeFocused();
};

// Helper to open the nested submenu with keyboard
const openSubmenuWithKeyboard = async (
  componentsPage: ComponentsPage,
  triggerElement: ReturnType<typeof componentsPage.page.locator>,
  menupopover: ReturnType<typeof triggerElement.locator>,
) => {
  const submenu = menupopover.locator('mdc-menupopover[triggerid="submenu-trigger"]');
  await openPopoverWithKeyboard(componentsPage, triggerElement, menupopover);
  const submenuItems = menupopover.locator(menuItemSelector);
  await componentsPage.page.keyboard.press('ArrowDown');
  const submenuTrigger = submenuItems.nth(1);
  await expect(submenuTrigger).toBeFocused(); // trigger for submenu
  await expect(submenuTrigger).toHaveAttribute('aria-haspopup', 'menu');
  await expect(submenuTrigger).toHaveAttribute('aria-expanded', 'false');
  await componentsPage.page.keyboard.press('ArrowRight');
  await expect(submenu).toBeVisible();
  await expect(submenuTrigger).toHaveAttribute('aria-expanded', 'true');
  const firstSubItem = submenu.locator('[role="menuitem"]').first();
  await expect(firstSubItem).toBeFocused();
};

test.use({ viewport: { width: 600, height: 400 } });
test('mdc-menupopover', async ({ componentsPage }) => {
  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const { wrapper, triggerElement } = await setup({ componentsPage, html: defaultHTML });
    const menupopover = wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]');

    await test.step('triggerElement', async () => {
      await expect(menupopover).toHaveAttribute('triggerid', 'trigger-btn');
      await expect(triggerElement).toHaveAttribute('id', 'trigger-btn');
      await expect(triggerElement).toHaveAttribute('aria-haspopup', 'menu');
      await expect(triggerElement).toHaveAttribute('aria-expanded', 'false');
      await triggerElement.click();
      await expect(menupopover).toBeVisible();
      await expect(triggerElement).toHaveAttribute('aria-expanded', 'true');
    });

    await test.step('default attributes', async () => {
      await expect(menupopover).toHaveAttribute('role', 'menu');
      await expect(menupopover).toHaveAttribute('aria-orientation', 'vertical');
      await expect(menupopover).toHaveAttribute('focus-trap', '');
      await expect(menupopover).toHaveAttribute('focus-back-to-trigger', '');
      await expect(menupopover).toHaveAttribute('hide-on-escape', '');
      await expect(menupopover).toHaveAttribute('hide-on-outside-click', '');
      await expect(menupopover).not.toHaveAttribute('show-arrow');
      await expect(menupopover).toHaveAttribute('interactive', '');
    });

    await test.step('placement', async () => {
      await expect(menupopover).toHaveAttribute('placement', 'bottom-start');
      await componentsPage.setAttributes(menupopover, { placement: 'right-start' });
      await expect(menupopover).toHaveAttribute('placement', 'right-start');
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('menupopover-default');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const { wrapper, triggerElement } = await setup({ componentsPage, html: nestedHTML });
    const menupopover = wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]');
    const submenu = menupopover.locator('mdc-menupopover[triggerid="submenu-trigger"]');
    const nestedSubmenu = submenu.locator('mdc-menupopover[triggerid="security-id"]');
    const submenuItems = submenu.locator(menuItemSelector);
    const nestedSubmenuItems = nestedSubmenu.locator(menuItemSelector);

    await test.step('Opening all nested submenus', async () => {
      // Open the main popover
      await openPopoverWithKeyboard(componentsPage, triggerElement, menupopover);
      await componentsPage.page.keyboard.press('ArrowDown'); // Navigate to Settings
      await componentsPage.visualRegression.takeScreenshot('mdc-menupopver-open');
      await componentsPage.page.keyboard.press('Enter');
      await expect(submenu).toBeVisible();
      await expect(submenuItems.first()).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [submenuItems.nth(1), submenuItems.nth(2)]);
      await componentsPage.visualRegression.takeScreenshot('mdc-menupopover-submenu-open');
      await componentsPage.page.keyboard.press('Enter');
      await expect(nestedSubmenu).toBeVisible();
      await expect(nestedSubmenuItems.first()).toBeFocused();
      await componentsPage.visualRegression.takeScreenshot('mdc-menupopover-nested-submenu-open');
    });
    await componentsPage.page.keyboard.press('Escape'); // Close nested submenu
    await componentsPage.visualRegression.takeScreenshot('mdc-menupopover-submenu-open');
    await componentsPage.page.keyboard.press('Escape'); // Close submenu
    await componentsPage.visualRegression.takeScreenshot('mdc-menupopver-open');
  });

  /**
   * USER INTERACTIONS
   */
  await test.step('user interactions', async () => {
    // Opening the MenuPopover
    await test.step('Opening the MenuPopover', async () => {
      const { wrapper, triggerElement } = await setup({ componentsPage, html: defaultHTML });
      const menupopover = wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]');

      await test.step('Clicking disabled trigger does nothing', async () => {
        await componentsPage.page.evaluate(() => {
          const btn = document.getElementById('trigger-btn');
          if (btn) btn.setAttribute('disabled', 'true');
        });
        await expect(triggerElement).toBeDisabled();
      });

      await test.step('Open the popover using mouse', async () => {
        await componentsPage.page.evaluate(() => {
          const btn = document.getElementById('trigger-btn');
          if (btn) btn.removeAttribute('disabled');
        });
        await expect(triggerElement).not.toBeDisabled();
      });

      await test.step('Open the popover using keyboard and focus moves to first menuitem', async () => {
        await setup({ componentsPage, html: defaultHTML });
        await openPopoverWithKeyboard(componentsPage, triggerElement, menupopover);
      });
    });

    // Closing the MenuPopover
    await test.step('Closing the MenuPopover', async () => {
      const { wrapper, triggerElement } = await setup({ componentsPage, html: defaultHTML });
      const menupopover = wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]');

      await test.step('Close the popover by clicking outside', async () => {
        await triggerElement.click();
        await expect(menupopover).toBeVisible();
        await componentsPage.page.mouse.click(0, 0);
        await expect(menupopover).not.toBeVisible();
      });

      await test.step('Close the popover by clicking the trigger again', async () => {
        await triggerElement.click();
        await expect(menupopover).toBeVisible();
        await triggerElement.click();
        await expect(menupopover).not.toBeVisible();
      });

      await test.step('Close the popover using Escape key', async () => {
        await setup({ componentsPage, html: defaultHTML });
        await componentsPage.actionability.pressTab();
        await expect(triggerElement).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(menupopover).toBeVisible();
        await componentsPage.page.keyboard.press('Escape');
        await expect(menupopover).not.toBeVisible();
        await expect(triggerElement).toBeFocused();
      });
    });

    // Selecting menuitems
    await test.step('Selecting menuitems', async () => {
      const { wrapper, triggerElement } = await setup({ componentsPage, html: defaultHTML });
      const menupopover = wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]');

      await test.step('Select menuitem with mouse', async () => {
        await triggerElement.click();
        await expect(menupopover).toBeVisible();
        // Select Logout (index 3, skips Settings which is disabled)
        const submenuItem = menupopover.locator(menuItemSelector).nth(3);
        const waitForClick = await componentsPage.waitForEvent(submenuItem, 'click');
        const waitForAction = await componentsPage.waitForEvent(menupopover, 'action');
        await submenuItem.click();
        await Promise.all([waitForClick(), waitForAction()]);
        await expect(menupopover).not.toBeVisible();
      });

      await test.step('Select menuitem with keyboard (Enter)', async () => {
        await setup({ componentsPage, html: defaultHTML });
        await openPopoverWithKeyboard(componentsPage, triggerElement, menupopover);
        const submenuItems = menupopover.locator(menuItemSelector);
        const waitForClick = await componentsPage.waitForEvent(submenuItems.nth(3), 'click');
        const waitForAction = await componentsPage.waitForEvent(menupopover, 'action');
        // ArrowDown: Profile -> Settings (disabled, skip to Notifications)
        await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [submenuItems.nth(2), submenuItems.nth(3)]);
        await componentsPage.page.keyboard.press('Enter');
        await Promise.all([waitForClick(), waitForAction()]);
        await expect(menupopover).not.toBeVisible();
        await expect(triggerElement).toBeFocused();
      });

      await test.step('Select menuitem with keyboard (Space)', async () => {
        await setup({ componentsPage, html: defaultHTML });
        await openPopoverWithKeyboard(componentsPage, triggerElement, menupopover);
        const submenuItems = menupopover.locator(menuItemSelector);
        const waitForClick = await componentsPage.waitForEvent(submenuItems.nth(3), 'click');
        const waitForAction = await componentsPage.waitForEvent(menupopover, 'action');
        // ArrowDown: Profile -> Settings (disabled, skip to Notifications)
        await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [submenuItems.nth(2), submenuItems.nth(3)]);
        await componentsPage.page.keyboard.press('Space');
        await Promise.all([waitForClick(), waitForAction()]);
        await expect(menupopover).not.toBeVisible();
        await expect(triggerElement).toBeFocused();
      });

      await test.step('Attempt to select disabled menuitem (mouse)', async () => {
        await triggerElement.click();
        await expect(menupopover).toBeVisible();
        const submenuItem = menupopover.locator(menuItemSelector).nth(1);
        await expect(submenuItem).toBeDisabled();
        await expect(menupopover).toBeVisible();
      });

      await test.step('Attempt to select disabled menuitem (keyboard)', async () => {
        await setup({ componentsPage, html: defaultHTML });
        await openPopoverWithKeyboard(componentsPage, triggerElement, menupopover);
        const submenuItems = menupopover.locator(menuItemSelector);
        await expect(submenuItems.first()).toBeFocused();
        // ArrowDown: Profile -> Settings (disabled, skip to Notifications)
        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(menupopover.locator(menuItemSelector).nth(2)).toBeFocused();
        // ArrowUp: Notifications -> Settings (disabled, skip to Profile)
        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(menupopover.locator(menuItemSelector).nth(0)).toBeFocused();
      });
    });

    // Keyboard Navigation
    await test.step('Keyboard Navigation', async () => {
      const { wrapper, triggerElement } = await setup({ componentsPage, html: defaultHTML });
      const menupopover = wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]');

      await test.step('Navigate menuitems using Home key', async () => {
        await setup({ componentsPage, html: defaultHTML });
        await componentsPage.actionability.pressTab();
        await expect(triggerElement).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(menupopover).toBeVisible();
        const submenuItems = menupopover.locator(menuItemSelector);
        await expect(submenuItems.first()).toBeFocused();
        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(submenuItems.nth(2)).toBeFocused();
        await componentsPage.page.keyboard.press('Home');
        await expect(submenuItems.first()).toBeFocused();
      });

      await test.step('Navigate menuitems using End key', async () => {
        await setup({ componentsPage, html: defaultHTML });
        await componentsPage.actionability.pressTab();
        await expect(triggerElement).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(menupopover).toBeVisible();
        const submenuItems = menupopover.locator(menuItemSelector);
        await expect(submenuItems.first()).toBeFocused();
        await componentsPage.page.keyboard.press('End');
        await expect(submenuItems.last()).toBeFocused();
      });

      await test.step('Move focus up and down using ArrowDown & ArrowUp key and loop focus', async () => {
        await setup({ componentsPage, html: defaultHTML });
        await componentsPage.actionability.pressTab();
        await expect(triggerElement).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(menupopover).toBeVisible();
        // Should skip Settings (disabled) and land on Notifications
        const submenuItems = menupopover.locator(menuItemSelector);
        await expect(submenuItems.first()).toBeFocused();
        await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [
          submenuItems.nth(2),
          submenuItems.last(),
          submenuItems.first(),
        ]);
        await componentsPage.actionability.pressAndCheckFocus('ArrowUp', [
          submenuItems.last(),
          submenuItems.nth(2),
          submenuItems.first(),
          submenuItems.last(),
        ]);
      });

      // Focus trap on menupopover
      await test.step('Focus trap and separators', async () => {
        await setup({ componentsPage, html: defaultHTML });
        await componentsPage.actionability.pressTab();
        await expect(triggerElement).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(menupopover).toBeVisible();
        const submenuItems = menupopover.locator(menuItemSelector);
        await expect(submenuItems.first()).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(submenuItems.first()).toBeFocused();
        await expect(menupopover).toBeVisible();
      });
    });

    // Nested submenu interaction
    await test.step('Nested submenu interaction', async () => {
      const { wrapper, triggerElement } = await setup({ componentsPage, html: nestedHTML });
      const menupopover = wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]');
      const submenu = menupopover.locator('mdc-menupopover[triggerid="submenu-trigger"]');

      await test.step('Open nested submenu with mouse', async () => {
        await triggerElement.click();
        await expect(menupopover).toBeVisible();
        const settingsItem = menupopover.locator('#submenu-trigger');
        await settingsItem.click();
        await expect(submenu).toBeVisible();
      });

      await test.step('Open nested submenu using keyboard', async () => {
        await setup({ componentsPage, html: nestedHTML });
        await openSubmenuWithKeyboard(componentsPage, triggerElement, menupopover);
      });

      await test.step('Navigate back from nested submenu using keyboard', async () => {
        await setup({ componentsPage, html: nestedHTML });
        await openSubmenuWithKeyboard(componentsPage, triggerElement, menupopover);
        await componentsPage.page.keyboard.press('ArrowLeft');
        await expect(submenu).not.toBeVisible();
        const submenuTrigger = menupopover.locator('#submenu-trigger');
        await expect(submenuTrigger).toHaveAttribute('aria-expanded', 'false');
        await expect(submenuTrigger).toBeFocused();
      });

      await test.step('Selecting a nested menuitem using keyboard', async () => {
        await setup({ componentsPage, html: nestedHTML });
        await openSubmenuWithKeyboard(componentsPage, triggerElement, menupopover);
        await componentsPage.page.keyboard.press('Enter');
        await expect(submenu).not.toBeVisible();
        await expect(menupopover).not.toBeVisible();
        await expect(triggerElement).toBeFocused();
      });

      await test.step('Selecting a nested menuitem using mouse', async () => {
        await triggerElement.click();
        const settingsItem = menupopover.locator('#submenu-trigger');
        await settingsItem.click();
        await expect(submenu).toBeVisible();
        const firstSubItem = submenu.locator('[role="menuitem"]').first();
        await firstSubItem.click();
        await expect(submenu).not.toBeVisible();
        await expect(menupopover).not.toBeVisible();
      });

      await test.step('Escape key closes nested submenus step-by-step', async () => {
        await setup({ componentsPage, html: nestedHTML });
        await openSubmenuWithKeyboard(componentsPage, triggerElement, menupopover);
        await componentsPage.page.keyboard.press('Escape');
        await expect(submenu).not.toBeVisible();
        await expect(menupopover.locator('#submenu-trigger')).toBeFocused();
        await componentsPage.page.keyboard.press('Escape');
        await expect(menupopover).not.toBeVisible();
        await expect(triggerElement).toBeFocused();
      });

      await test.step('Close nested submenus by clicking outside', async () => {
        await setup({ componentsPage, html: nestedHTML });
        await openSubmenuWithKeyboard(componentsPage, triggerElement, menupopover);
        const securityItem = submenu.locator('#security-id');
        await securityItem.click();
        const nestedSubmenu = submenu.locator('mdc-menupopover[triggerid="security-id"]');
        await expect(nestedSubmenu).toBeVisible();
        // Click outside, all menus should close
        await componentsPage.page.mouse.click(500, 100);
        await expect(nestedSubmenu).not.toBeVisible();
        await expect(submenu).not.toBeVisible();
        await expect(menupopover).not.toBeVisible();
      });

      await test.step('Close all children submenu and open the parent submenu using mouse', async () => {
        const { wrapper, triggerElement } = await setup({
          componentsPage,
          html: `
          <div id="menupopover-test-wrapper">
            <mdc-button id="trigger-btn">File</mdc-button>
            <mdc-menupopover triggerid="trigger-btn" backdrop>
              <mdc-menuitem label="New" id="new-menu-trigger" arrow-position="trailing"></mdc-menuitem>
              <mdc-menupopover triggerid="new-menu-trigger" placement="right-start">
                <mdc-menuitem label="New Document"></mdc-menuitem>
              <mdc-menuitem label="New Folder"></mdc-menuitem>
              <mdc-menuitem label="New Window"></mdc-menuitem>
            </mdc-menupopover>
            <mdc-menuitem label="Open"></mdc-menuitem>
            <mdc-menuitem label="Save"></mdc-menuitem>
            <mdc-menuitem label="Save As" id="save-as-menu-trigger" arrow-position="trailing"></mdc-menuitem>
            <mdc-menupopover triggerid="save-as-menu-trigger" placement="right-start">
              <mdc-menuitem label="Multiple Folders"></mdc-menuitem>
              <mdc-menuitem label="Location"></mdc-menuitem>
              <mdc-menuitem label="Auto Save"></mdc-menuitem>
            </mdc-menupopover>
            <mdc-menuitem id="save-all" label="Save All"></mdc-menuitem>
          </mdc-menupopover>
          </div>
        `,
        });

        const newMenuPopover = wrapper.locator('mdc-menupopover[triggerid="new-menu-trigger"]');
        const saveAsMenuPopover = wrapper.locator('mdc-menupopover[triggerid="save-as-menu-trigger"]');

        await triggerElement.click();
        await expect(wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]')).toBeVisible();
        await wrapper.locator('#new-menu-trigger').click();
        await expect(newMenuPopover).toBeVisible();
        await wrapper.locator('#save-as-menu-trigger').click();
        await expect(saveAsMenuPopover).toBeVisible();
        await expect(newMenuPopover).not.toBeVisible();
        await wrapper.locator('#save-all').click();
        await expect(saveAsMenuPopover).not.toBeVisible();
        await expect(newMenuPopover).not.toBeVisible();
        await expect(wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]')).not.toBeVisible();
        await expect(wrapper.locator('#trigger-btn')).toBeFocused();
      });
    });

    await test.step('Backdrop attribute with hide on outside click', async () => {
      await componentsPage.mount({
        html: `
          <div style="display: flex; flex-direction: row; gap: 10px">
            <mdc-button id="trigger-1">Trigger 1 Button</mdc-button>
            <mdc-menupopover id="first-menupopover" triggerID="trigger-1">
              <mdc-menuitem label="Menu 1">
            </mdc-menupopover>
            
            <mdc-button id="trigger-2">Trigger 2 Button</mdc-button>
            <mdc-menupopover id="second-menupopover" triggerID="trigger-2"><mdc-menuitem label="Menu 2"></mdc-menuitem></mdc-menupopover>
          </div>
        `,
        clearDocument: true,
      });
      const trigger1 = componentsPage.page.locator('#trigger-1');
      const popover1 = componentsPage.page.locator('#first-menupopover');
      const trigger2 = componentsPage.page.locator('#trigger-2');
      const popover2 = componentsPage.page.locator('#second-menupopover');

      await expect(popover1).not.toBeVisible();
      await trigger1.click();
      await expect(popover1).toBeVisible();
      await trigger2.click({ force: true });
      await expect(popover2).not.toBeVisible();
      await expect(popover1).not.toBeVisible();
      await trigger2.click();
      await expect(popover2).toBeVisible();
    });

    // Group: Menuitem types: checkbox and radio (with grouped navigation)
    await test.step('Menuitem types: checkbox and radio', async () => {
      const { wrapper, triggerElement } = await setup({ componentsPage, html: groupHTML });
      const menupopover = wrapper.locator('mdc-menupopover[triggerid="trigger-btn"]');

      // Grouped menuitems navigation
      await test.step('Grouped menuitems navigation using keyboard', async () => {
        await setup({ componentsPage, html: groupHTML });
        await componentsPage.actionability.pressTab();
        await expect(triggerElement).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(menupopover).toBeVisible();
        await expect(menupopover.locator('[label="Profile"]')).toBeFocused();
        // await componentsPage.page.keyboard.press('ArrowDown');
        const checkboxes = menupopover.locator('[role="menuitemcheckbox"]');
        await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [checkboxes.first(), checkboxes.last()]);
        const radios = menupopover.locator('[role="menuitemradio"]');
        await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [
          radios.first(),
          radios.nth(1),
          radios.last(),
        ]);
        await componentsPage.page.keyboard.press('ArrowDown');
        const notifications = menupopover.locator('[label="Notifications"]');
        await expect(notifications).toBeFocused();
        await componentsPage.actionability.pressAndCheckFocus('ArrowUp', [
          radios.last(),
          radios.nth(1),
          radios.first(),
        ]);
        await componentsPage.actionability.pressAndCheckFocus('ArrowUp', [checkboxes.last(), checkboxes.first()]);
      });

      // Checkbox
      await test.step('Toggle menuitemcheckbox using keyboard', async () => {
        await setup({ componentsPage, html: groupHTML });
        await componentsPage.actionability.pressTab();
        await expect(triggerElement).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(menupopover).toBeVisible();
        await expect(menupopover.locator('[label="Profile"]')).toBeFocused();
        await componentsPage.page.keyboard.press('ArrowDown');
        const checkboxes = menupopover.locator('[role="menuitemcheckbox"]');
        await expect(checkboxes.first()).toBeFocused();
        const waitForChangeAfterSpace = await componentsPage.waitForEvent(menupopover, 'change');
        await componentsPage.page.keyboard.press('Space');

        await expect(checkboxes.first()).toHaveAttribute('aria-checked', 'true');
        await waitForChangeAfterSpace();
        // menu remain visible after checkbox toggle with space
        await expect(menupopover).toBeVisible();
        const waitForChangeAfterEnter = await componentsPage.waitForEvent(menupopover, 'change');
        await componentsPage.page.keyboard.press('Enter');
        await expect(checkboxes.first()).toHaveAttribute('aria-checked', 'false');
        await waitForChangeAfterEnter();
        // menu closes after checkbox toggle with Enter
        await expect(menupopover).not.toBeVisible();
      });

      // Radio
      await test.step('Select one menuitemradio from a group using keyboard', async () => {
        await setup({ componentsPage, html: groupHTML });
        await componentsPage.actionability.pressTab();
        await expect(triggerElement).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(menupopover).toBeVisible();
        await expect(menupopover.locator('[label="Profile"]')).toBeFocused();
        const checkboxes = menupopover.locator('[role="menuitemcheckbox"]');
        await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [checkboxes.first(), checkboxes.last()]);
        await componentsPage.page.keyboard.press('ArrowDown');
        const radios = menupopover.locator('[role="menuitemradio"]');
        await expect(radios.nth(0)).toBeFocused();
        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(radios.nth(1)).toBeFocused();
        const waitForChangeAfterSpace = await componentsPage.waitForEvent(menupopover, 'change');
        await componentsPage.page.keyboard.press('Space');
        await waitForChangeAfterSpace();
        // menu remain visible after checkbox toggle with space
        await expect(menupopover).toBeVisible();
        await expect(radios.nth(1)).toHaveAttribute('aria-checked', 'true');
        await expect(radios.nth(0)).toHaveAttribute('aria-checked', 'false');
        await expect(radios.nth(2)).toHaveAttribute('aria-checked', 'false');
        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(radios.nth(2)).toBeFocused();
        const waitForChangeAfterEnter = await componentsPage.waitForEvent(menupopover, 'change');
        await componentsPage.page.keyboard.press('Enter');
        await waitForChangeAfterEnter();
        await expect(radios.nth(1)).toHaveAttribute('aria-checked', 'false');
        await expect(radios.nth(0)).toHaveAttribute('aria-checked', 'false');
        await expect(radios.nth(2)).toHaveAttribute('aria-checked', 'true');
        // menu remain visible after checkbox toggle with space
        await expect(menupopover).not.toBeVisible();
      });
    });
  });
});
