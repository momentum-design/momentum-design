import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

// Local snapshot wrapper to restrict snapshots for desktop only
const takeSnapshot = async (
  componentsPage: ComponentsPage,
  name: string,
  options?: Parameters<typeof componentsPage.visualRegression.takeScreenshot>[1],
) => {
  const deviceName = test.info().project.name;
  if (['chrome', 'firefox', 'msedge', 'webkit', 'tablet chrome', 'tablet safari'].includes(deviceName)) {
    await componentsPage.visualRegression.takeScreenshot(name, options);
  }
};

// Setup function to mount sidenavigation and return locators
const setup = async (componentsPage: ComponentsPage, variant: string) => {
  const expanded = variant !== 'fixed-collapsed';
  const html = `
    <div style="height: 90vh; margin: 1rem">
      <mdc-sidenavigation
        variant="${variant}"
        expanded="${expanded}"
        footer-text="%Customer Name%"
        grabber-btn-aria-label="Toggle Side navigation"
        parent-nav-tooltip-text="Contains active navmenuitem"
      >
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="verify1" label="Meetings" slot="scrollable-menubar"></mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="verify2" label="Calling" slot="scrollable-menubar" id="temp"></mdc-navmenuitem>
        <mdc-menupopover triggerid="temp" slot="scrollable-menubar">
          <mdc-navmenuitem label="Webex App Hub" nav-id="verify3" badge-type="dot" icon-name="placeholder-bold"></mdc-navmenuitem>
          <mdc-navmenuitem label="Team Insights" nav-id="verify4" icon-name="placeholder-bold"></mdc-navmenuitem>
          <mdc-navmenuitem label="Release Notes" nav-id="verify5" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"></mdc-navmenuitem>
          <mdc-navmenuitem label="Cisco Spaces" nav-id="verify6" icon-name="placeholder-bold"></mdc-navmenuitem>
        </mdc-menupopover>
        <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section1">
          <mdc-navmenuitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="1" label="Messaging"></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="2" label="Meetings" soft-disabled></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="counter" counter="2" max-counter="66" icon-name="audio-call-bold" nav-id="3" label="Callings"></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="more-circle-bold" nav-id="4" label="More" id="menu-button-trigger"></mdc-navmenuitem>
          <mdc-menupopover triggerid="menu-button-trigger">
            <mdc-navmenuitem label="App Hub" nav-id="5" badge-type="dot" icon-name="placeholder-bold"></mdc-navmenuitem>
            <mdc-navmenuitem label="Personal Insights" nav-id="6" icon-name="placeholder-bold"></mdc-navmenuitem>
            <mdc-navmenuitem label="What's new?" nav-id="7" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"></mdc-navmenuitem>
            <mdc-navmenuitem label="Collaboration Tools" nav-id="8" icon-name="placeholder-bold" id="share-id"></mdc-navmenuitem>
            <mdc-menupopover triggerid="share-id">
              <mdc-navmenuitem label="Webex App Hub" nav-id="temp1" badge-type="dot" icon-name="placeholder-bold"></mdc-navmenuitem>
              <mdc-navmenuitem label="Team Insights" nav-id="temp2" icon-name="placeholder-bold"></mdc-navmenuitem>
              <mdc-navmenuitem label="Release Notes" nav-id="temp3" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"></mdc-navmenuitem>
              <mdc-navmenuitem label="Cisco Spaces" nav-id="temp4" icon-name="placeholder-bold"></mdc-navmenuitem>
            </mdc-menupopover>
          </mdc-menupopover>
        </mdc-menusection>
        <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 2">
          <mdc-navmenuitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="9" label="Messaging"></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="10" label="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="11" label="Calling"></mdc-navmenuitem>
        </mdc-menusection>
        <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 3">
          <mdc-navmenuitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="12" label="Messaging"></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="13" label="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="14" label="Calling"></mdc-navmenuitem>
        </mdc-menusection>
        <mdc-menusection slot="scrollable-menubar" header-text="Section 4">
          <mdc-navmenuitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="15" label="Messaging"></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="16" label="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="17" label="Calling"></mdc-navmenuitem>
        </mdc-menusection>
        <mdc-menusection slot="fixed-menubar">
          <mdc-navmenuitem badge-type="counter" counter="3" max-counter="66" icon-name="settings-bold" nav-id="18" label="Settings"></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="help-circle-bold" nav-id="19" label="Help" disable-aria-current></mdc-navmenuitem>
        </mdc-menusection>
        <mdc-icon slot="brand-logo" aria-label="This is the brand logo icon" name="apple-bold"></mdc-icon>
      </mdc-sidenavigation>
    </div>
  `;
  await componentsPage.mount({ html, clearDocument: true });
  const sidenav = componentsPage.page.locator('mdc-sidenavigation');
  await sidenav.waitFor();
  const toggleButton = sidenav.locator('[grabber-btn-aria-label], [aria-label="Toggle Side navigation"], mdc-button');
  const fixedNavlist = sidenav.locator('[slot="fixed-menubar"]');
  const scrollableList = sidenav.locator('[slot="scrollable-menubar"]');
  const navMenuItems = sidenav.locator('mdc-navmenuitem');
  const mainMenuNavMenuItem = sidenav.locator('mdc-navmenuitem#menu-button-trigger');
  const mainMenuPopover = sidenav.locator('mdc-menupopover[triggerid="menu-button-trigger"]');
  const toolsMenuItem = sidenav.locator('mdc-navmenuitem#share-id');
  const toolsMenuPopover = sidenav.locator('mdc-menupopover[triggerid="share-id"]');
  const callingNavMenuItem = sidenav.locator('mdc-navmenuitem#temp');
  const callingPopover = sidenav.locator('mdc-menupopover[triggerid="temp"]');
  const mainMenuTooltip = componentsPage.page.locator('mdc-tooltip[triggerid="menu-button-trigger"]');
  const toolsTooltip = componentsPage.page.locator('mdc-tooltip[triggerid="share-id"]');

  return {
    sidenav,
    toggleButton,
    fixedNavlist,
    scrollableList,
    navMenuItems,
    mainMenuNavMenuItem,
    mainMenuPopover,
    toolsMenuItem,
    toolsMenuPopover,
    callingNavMenuItem,
    callingPopover,
    mainMenuTooltip,
    toolsTooltip,
  };
};

const variants = ['flexible', 'fixed-expanded', 'fixed-collapsed'];

test.describe.parallel('SideNavigation (Nested, all scenarios, all variants)', () => {
  variants.forEach(variant => {
    test(`user scenarios for ${variant} variant`, async ({ componentsPage }) => {
      const {
        sidenav,
        toggleButton,
        fixedNavlist,
        scrollableList,
        navMenuItems,
        mainMenuNavMenuItem,
        mainMenuPopover,
        toolsMenuItem,
        toolsMenuPopover,
        callingNavMenuItem,
        callingPopover,
        mainMenuTooltip,
        toolsTooltip,
      } = await setup(componentsPage, variant);

      await test.step('attributes', async () => {
        // Main sidenavigation attributes
        await expect(sidenav).toHaveAttribute('variant', variant);
        await expect(sidenav).toHaveAttribute('footer-text', '%Customer Name%');
        await expect(sidenav).toHaveAttribute('grabber-btn-aria-label', 'Toggle Side navigation');
        await expect(sidenav).toHaveAttribute('parent-nav-tooltip-text', 'Contains active navmenuitem');

        // Expanded/collapsed attribute
        if (variant === 'fixed-collapsed') {
          await expect(sidenav).not.toHaveAttribute('expanded');
        } else {
          await expect(sidenav).toHaveAttribute('expanded', 'true');
        }

        // Toggle button aria attributes (flexible only)
        if (variant === 'flexible') {
          await expect(toggleButton).toHaveAttribute('aria-label', 'Toggle Side navigation');
          await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
        }

        // Menuitem attributes
        const firstNavMenuItem = navMenuItems.first();
        await expect(firstNavMenuItem).toHaveAttribute('icon-name', 'meetings-bold');
        await expect(firstNavMenuItem).toHaveAttribute('nav-id', 'verify1');
        await expect(firstNavMenuItem).toHaveAttribute('label', 'Meetings');

        // Soft-disabled menuitem
        const softDisabled = sidenav.locator('mdc-navmenuitem[soft-disabled]').first();
        await expect(softDisabled).toHaveAttribute('soft-disabled');
        await expect(softDisabled).toHaveAttribute('aria-disabled', 'true');
      });

      await test.step('interactions', async () => {
        // Default state of sidenavigation
        await takeSnapshot(componentsPage, `sidenavigation-${variant}-default`);
        await componentsPage.accessibility.checkForA11yViolations(`sidenavigation-${variant}-default`);

        // --- Expand/Collapse (flexible only) ---
        if (variant === 'flexible') {
          await test.step('Collapse and expand sidenavigation using keyboard', async () => {
            const firstNavMenuItem = navMenuItems.first();
            const firstNavMenuItemInFixedBar = fixedNavlist.locator('mdc-navmenuitem').first();
            await componentsPage.actionability.pressAndCheckFocus('Tab', [
              firstNavMenuItem,
              firstNavMenuItemInFixedBar,
              toggleButton,
            ]);
            const eventResolveAfterEnter = await componentsPage.waitForEvent(sidenav, 'toggle');
            await componentsPage.page.keyboard.press('Enter');
            await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
            await expect(toggleButton.locator('mdc-icon[name="arrow-right-regular"]')).toBeVisible();
            await eventResolveAfterEnter();
            await takeSnapshot(componentsPage, `sidenavigation-${variant}`, {
              source: 'userflow',
              fileNameSuffix: 'collapsed-view',
            });
            await componentsPage.accessibility.checkForA11yViolations(`sidenavigation-${variant}-collapsed`);

            const eventResolveAfterSpace = await componentsPage.waitForEvent(sidenav, 'toggle');
            await componentsPage.page.keyboard.press('Space');
            await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
            await expect(toggleButton.locator('mdc-icon[name="arrow-left-regular"]')).toBeVisible();
            await eventResolveAfterSpace();
          });
          await test.step('Collapse and expand sidenavigation using mouse', async () => {
            const eventResolveAfterClickCollapse = await componentsPage.waitForEvent(sidenav, 'toggle');
            await toggleButton.click();
            await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
            await expect(toggleButton.locator('mdc-icon[name="arrow-right-regular"]')).toBeVisible();
            await eventResolveAfterClickCollapse();

            const eventResolveAfterClickExpand = await componentsPage.waitForEvent(sidenav, 'toggle');
            await toggleButton.click();
            await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
            await expect(toggleButton.locator('mdc-icon[name="arrow-left-regular"]')).toBeVisible();
            await eventResolveAfterClickExpand();
          });
        }

        // --- Scroll Behavior ---
        await test.step('Scroll to reveal more top menuitems and keep fixed section pinned', async () => {
          const lastNavMenuItem = scrollableList.locator('mdc-navmenuitem').last();
          await lastNavMenuItem.scrollIntoViewIfNeeded();
          await expect(lastNavMenuItem).toBeVisible();
          await expect(fixedNavlist).toBeVisible();
          await takeSnapshot(componentsPage, `sidenavigation-${variant}`, {
            source: 'userflow',
            fileNameSuffix: 'scrolled-view',
          });
          await componentsPage.accessibility.checkForA11yViolations(`sidenavigation-${variant}-scrolled-view`);
        });

        // --- Top-level menuitem selection ---
        await test.step('Select a top level menuitem by mouse', async () => {
          await navMenuItems.first().click();
          await expect(navMenuItems.first()).toHaveAttribute('aria-current', 'page');
        });
        await test.step('Select a top level menuitem by keyboard', async () => {
          await setup(componentsPage, variant);
          await componentsPage.actionability.pressTab();
          await expect(navMenuItems.first()).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(navMenuItems.first()).toHaveAttribute('aria-current', 'page');
        });

        // --- Actionable/soft-disabled menuitem ---
        await test.step('Clicking a soft-disabled menuitem should not trigger any action', async () => {
          const softDisabled = sidenav.locator('mdc-navmenuitem[soft-disabled]').first();
          await expect(softDisabled).toHaveAttribute('soft-disabled');
          await expect(softDisabled).toHaveAttribute('aria-disabled', 'true');
          await softDisabled.click({ force: true });
          await expect(softDisabled).not.toHaveAttribute('aria-current', 'page');
        });
        await test.step('Keyboard activation on soft-disabled menuitem should not trigger any action', async () => {
          await setup(componentsPage, variant);
          await componentsPage.actionability.pressTab();
          const firstMenuSectionNavMenuItem = sidenav
            .locator('mdc-menusection')
            .first()
            .locator('mdc-navmenuitem')
            .first();
          const secondMenuSectionNavMenuItem = sidenav
            .locator('mdc-menusection')
            .first()
            .locator('mdc-navmenuitem')
            .nth(1);
          await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [
            navMenuItems.nth(1),
            firstMenuSectionNavMenuItem,
            secondMenuSectionNavMenuItem,
          ]);
          const softDisabled = secondMenuSectionNavMenuItem;
          await expect(softDisabled).toHaveAttribute('soft-disabled');
          await expect(softDisabled).toHaveAttribute('aria-disabled', 'true');
          await componentsPage.page.keyboard.press('Enter');
          await expect(softDisabled).not.toHaveAttribute('aria-current', 'page');
        });

        // --- Nested menuitem: open submenu ---
        await test.step('Open/close submenu to reveal/hide nested menuitems (mouse)', async () => {
          // check for main menu item
          await mainMenuNavMenuItem.click();
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();
          await mainMenuNavMenuItem.click();
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'false');
          await expect(mainMenuPopover).not.toBeVisible();

          // check for calling menu item
          await callingNavMenuItem.click();
          await expect(callingNavMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(callingPopover).toBeVisible();
          await callingNavMenuItem.click();
          await expect(callingNavMenuItem).toHaveAttribute('aria-expanded', 'false');
          await expect(callingPopover).not.toBeVisible();
        });
        await test.step('Open submenu to reveal nested menuitems (keyboard)', async () => {
          // check for main menu item
          await setup(componentsPage, variant);
          await mainMenuNavMenuItem.focus();
          await componentsPage.page.keyboard.press('Enter');
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();
          await takeSnapshot(componentsPage, `sidenavigation-${variant}`, {
            source: 'userflow',
            fileNameSuffix: 'mainmenu-popover',
          });

          // check for calling menu item
          await setup(componentsPage, variant);
          await componentsPage.actionability.pressTab();
          await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [callingNavMenuItem]);
          await componentsPage.page.keyboard.press('Enter');
          await expect(callingNavMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(callingPopover).toBeVisible();
        });

        // --- Nested menuitem: select nested menuitem (1st level submenu) ---
        await test.step('Select nested menuitem with mouse inside 1st level submenu', async () => {
          await setup(componentsPage, variant);
          await mainMenuNavMenuItem.click();
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();
          const nestedItem = mainMenuPopover.locator('mdc-navmenuitem').first();
          await nestedItem.click();
          await expect(nestedItem).toHaveAttribute('aria-current', 'page');
          await expect(mainMenuPopover).not.toBeVisible();
          await expect(mainMenuNavMenuItem).toHaveAttribute('active', '');
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'false');
        });

        await test.step('Select nested menuitem with keyboard inside 1st level submenu', async () => {
          await setup(componentsPage, variant);
          await mainMenuNavMenuItem.focus();
          await componentsPage.page.keyboard.press('Enter');
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();
          const nestedItem = mainMenuPopover.locator('mdc-navmenuitem').first();
          await expect(nestedItem).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(nestedItem).toHaveAttribute('aria-current', 'page');
          await expect(mainMenuPopover).not.toBeVisible();
          await expect(mainMenuNavMenuItem).toBeFocused();
          await expect(mainMenuNavMenuItem).toHaveAttribute('active', '');
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'false');
        });

        // --- Nested menuitem: select nested menuitem (2nd level submenu) ---
        await test.step('Select nested menuitem with mouse inside 2nd level submenu', async () => {
          await setup(componentsPage, variant);
          await mainMenuNavMenuItem.click();
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();
          await toolsMenuItem.click();
          await expect(toolsMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(toolsMenuPopover).toBeVisible();
          const nestedItem = toolsMenuPopover.locator('mdc-navmenuitem').first();
          await nestedItem.click();
          await expect(nestedItem).toHaveAttribute('aria-current', 'page');
          await expect(toolsMenuPopover).not.toBeVisible();
          await expect(mainMenuPopover).not.toBeVisible();
          await expect(toolsMenuItem).toHaveAttribute('active', '');
          await expect(mainMenuNavMenuItem).toHaveAttribute('active', '');
          await expect(toolsMenuItem).toHaveAttribute('aria-expanded', 'false');
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'false');
        });

        // --- Re-engaging with previously selected parent using mouse ---
        await test.step('Hovering with mouse over activated parent menuitem shows tooltip', async () => {
          // top level
          await mainMenuNavMenuItem.hover();
          await expect(mainMenuTooltip).toBeVisible();
          const text1 = await mainMenuTooltip.textContent();
          expect(text1?.trim()).toBe('Contains active navmenuitem');
          // nested level
          await mainMenuNavMenuItem.click();
          await toolsMenuItem.hover();
          await expect(toolsTooltip).toBeVisible();
          const text2 = await toolsTooltip.textContent();
          expect(text2?.trim()).toBe('Contains active navmenuitem');
        });

        await test.step('Select nested menuitem with keyboard inside 2nd level submenu', async () => {
          await setup(componentsPage, variant);
          await mainMenuNavMenuItem.focus();
          await componentsPage.page.keyboard.press('Enter');
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();
          const items = mainMenuPopover.locator('mdc-navmenuitem');
          await expect(items.first()).toBeFocused();
          await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [
            items.nth(1),
            items.nth(2),
            toolsMenuItem,
          ]);
          await componentsPage.page.keyboard.press('Enter');
          await expect(toolsMenuItem).toHaveAttribute('aria-expanded', 'true');
          await expect(toolsMenuPopover).toBeVisible();
          const nestedItem = toolsMenuPopover.locator('mdc-navmenuitem').first();
          await expect(nestedItem).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(nestedItem).toHaveAttribute('aria-current', 'page');
          await expect(toolsMenuPopover).not.toBeVisible();
          await expect(mainMenuPopover).not.toBeVisible();
          await expect(mainMenuNavMenuItem).toBeFocused();
          await expect(toolsMenuItem).toHaveAttribute('active', '');
          await expect(mainMenuNavMenuItem).toHaveAttribute('active', '');
          await expect(toolsMenuItem).toHaveAttribute('aria-expanded', 'false');
          await expect(mainMenuNavMenuItem).toHaveAttribute('aria-expanded', 'false');
        });

        // --- Re-engaging with previously selected parent using keyboard ---
        await test.step('Focusing with keyboard over activated parent menuitem shows tooltip', async () => {
          // top level
          await expect(mainMenuTooltip).toBeVisible();
          const text1 = await mainMenuTooltip.textContent();
          expect(text1?.trim()).toBe('Contains active navmenuitem');
          await takeSnapshot(componentsPage, `sidenavigation-${variant}`, {
            source: 'userflow',
            fileNameSuffix: 'active-parent-tooltip',
          });
          // nested level
          await componentsPage.page.keyboard.press('ArrowRight');
          await expect(toolsMenuItem).toBeFocused();
          await expect(toolsTooltip).toBeVisible();
          const text2 = await toolsTooltip.textContent();
          expect(text2?.trim()).toBe('Contains active navmenuitem');
          await takeSnapshot(componentsPage, `sidenavigation-${variant}`, {
            source: 'userflow',
            fileNameSuffix: 'active-nested-tooltip',
          });
          await componentsPage.page.keyboard.press('ArrowRight');
          await expect(toolsMenuPopover).toBeVisible();
          const nestedItem = toolsMenuPopover.locator('mdc-navmenuitem').first();
          await expect(nestedItem).toBeFocused();
          await expect(nestedItem).toHaveAttribute('aria-current', 'page');
          await expect(nestedItem).toHaveAttribute('active', '');
          await takeSnapshot(componentsPage, `sidenavigation-${variant}-nested-active-navmenuitem`);
        });

        // --- Focus Management and Tab Behavior ---
        await test.step('Tabbing into, through, and out of the SideNavigation', async () => {
          await setup(componentsPage, variant);
          // Tab to first navmenuitem in scrollable slot
          await componentsPage.actionability.pressTab();
          const firstScrollableNav = sidenav.locator('mdc-navmenuitem[slot="scrollable-menubar"]').first();
          await expect(firstScrollableNav).toBeFocused();
          // Tab to first navmenuitem in fixed slot
          await componentsPage.actionability.pressTab();
          const firstFixedNav = sidenav.locator('mdc-menusection[slot="fixed-menubar"] > mdc-navmenuitem').first();
          await expect(firstFixedNav).toBeFocused();
          // If flexible, Tab to toggle button
          if (variant === 'flexible') {
            await componentsPage.actionability.pressTab();
            await expect(toggleButton).toBeFocused();
          }
        });
        await test.step('Shift+Tab moves backward through focusable elements', async () => {
          await setup(componentsPage, variant);
          // First, tab through to the end of the focusable elements
          await componentsPage.actionability.pressTab(); // scrollable navmenuitem
          await componentsPage.actionability.pressTab(); // fixed navmenuitem
          if (variant === 'flexible') {
            await componentsPage.actionability.pressTab(); // toggle button
            // Now shift+tab: toggle button -> fixed navmenuitem -> scrollable navmenuitem
            await expect(toggleButton).toBeFocused();
            await componentsPage.actionability.pressShiftTab();
            const firstFixedNav = sidenav.locator('mdc-menusection[slot="fixed-menubar"] > mdc-navmenuitem').first();
            await expect(firstFixedNav).toBeFocused();
            await componentsPage.actionability.pressShiftTab();
            const firstScrollableNav = sidenav.locator('mdc-navmenuitem[slot="scrollable-menubar"]').first();
            await expect(firstScrollableNav).toBeFocused();
          } else {
            // Not flexible: shift+tab from fixed navmenuitem -> scrollable navmenuitem
            const firstFixedNav = sidenav.locator('mdc-menusection[slot="fixed-menubar"] > mdc-navmenuitem').first();
            await expect(firstFixedNav).toBeFocused();
            await componentsPage.actionability.pressShiftTab();
            const firstScrollableNav = sidenav.locator('mdc-navmenuitem[slot="scrollable-menubar"]').first();
            await expect(firstScrollableNav).toBeFocused();
          }
        });

        // --- Close submenu using Escape ---
        await test.step('Close submenu using Escape', async () => {
          await mainMenuNavMenuItem.click();
          await expect(mainMenuPopover).toBeVisible();
          await componentsPage.page.keyboard.press('Escape');
          await expect(mainMenuPopover).not.toBeVisible();
        });
      });
    });
  });
});
