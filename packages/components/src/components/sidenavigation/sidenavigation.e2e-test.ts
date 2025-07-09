import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

// Setup function to mount sidenavigation and return locators
const setup = async (componentsPage: ComponentsPage, variant: string) => {
  const expanded = variant !== 'fixed-collapsed';
  const html = `
    <div style="height: 90vh; margin: 1rem">
      <mdc-sidenavigation
        variant="${variant}"
        expanded="${expanded}"
        customer-name="%Customer Name%"
        grabber-btn-aria-label="Toggle Side navigation"
        parent-nav-tooltip-text="Contains active navitem"
      >
        <mdc-navitem icon-name="meetings-bold" nav-id="verify1" label="Meetings" slot="scrollable-menubar"></mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="verify2" label="Calling" slot="scrollable-menubar" id="temp"></mdc-navitem>
        <mdc-menupopover triggerid="temp" slot="scrollable-menubar">
          <mdc-navitem label="Webex App Hub" nav-id="verify3" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
          <mdc-navitem label="Team Insights" nav-id="verify4" icon-name="placeholder-bold"></mdc-navitem>
          <mdc-navitem label="Release Notes" nav-id="verify5" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"></mdc-navitem>
          <mdc-navitem label="Cisco Spaces" nav-id="verify6" icon-name="placeholder-bold"></mdc-navitem>
        </mdc-menupopover>
        <mdc-menusection slot="scrollable-menubar">
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="1" label="Messaging"></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="2" label="Meetings" soft-disabled></mdc-navitem>
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="audio-call-bold" nav-id="3" label="Callings"></mdc-navitem>
          <mdc-navitem icon-name="more-circle-bold" nav-id="4" label="More" id="menu-button-trigger"></mdc-navitem>
          <mdc-menupopover triggerid="menu-button-trigger">
            <mdc-navitem label="App Hub" nav-id="5" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
            <mdc-navitem label="Personal Insights" nav-id="6" icon-name="placeholder-bold"></mdc-navitem>
            <mdc-navitem label="What's new?" nav-id="7" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"></mdc-navitem>
            <mdc-navitem label="Collaboration Tools" nav-id="8" icon-name="placeholder-bold" id="share-id"></mdc-navitem>
            <mdc-menupopover triggerid="share-id">
              <mdc-navitem label="Webex App Hub" nav-id="temp1" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Team Insights" nav-id="temp2" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Release Notes" nav-id="temp3" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Cisco Spaces" nav-id="temp4" icon-name="placeholder-bold"></mdc-navitem>
            </mdc-menupopover>
          </mdc-menupopover>
          <mdc-divider variant="gradient"></mdc-divider>
        </mdc-menusection>
        <mdc-menusection slot="scrollable-menubar" label="Section 1">
          <mdc-text>Section 1</mdc-text>
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="9" label="Messaging"></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="10" label="Meetings"></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="11" label="Calling"></mdc-navitem>
          <mdc-divider variant="gradient"></mdc-divider>
        </mdc-menusection>
        <mdc-menusection slot="scrollable-menubar" label="Section 2">
          <mdc-text>Section 2</mdc-text>
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="12" label="Messaging"></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="13" label="Meetings"></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="14" label="Calling"></mdc-navitem>
          <mdc-divider variant="gradient"></mdc-divider>
        </mdc-menusection>
        <mdc-menusection slot="scrollable-menubar" label="Section 3">
          <mdc-text>Section 3</mdc-text>
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="15" label="Messaging"></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="16" label="Meetings"></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="17" label="Calling"></mdc-navitem>
        </mdc-menusection>
        <mdc-menusection slot="fixed-menubar">
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="settings-bold" nav-id="18" label="Settings"></mdc-navitem>
          <mdc-navitem icon-name="help-circle-bold" nav-id="19" label="Help" disable-aria-current></mdc-navitem>
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
  const navItems = sidenav.locator('mdc-navitem');
  const mainMenuNavItem = sidenav.locator('mdc-navitem#menu-button-trigger');
  const mainMenuPopover = sidenav.locator('mdc-menupopover[triggerid="menu-button-trigger"]');
  const callingNavItem = sidenav.locator('mdc-navitem#temp');
  const callingPopover = sidenav.locator('mdc-menupopover[triggerid="temp"]');
  return {
    sidenav,
    toggleButton,
    fixedNavlist,
    navItems,
    mainMenuNavItem,
    mainMenuPopover,
    callingNavItem,
    callingPopover,
  };
};

const variants = ['flexible', 'fixed-expanded', 'fixed-collapsed'];

test.describe('SideNavigation (Nested, all scenarios, all variants)', () => {
  variants.forEach(variant => {
    test.describe(`${variant} variant`, () => {
      test(`all user scenarios for ${variant}`, async ({ componentsPage }) => {
        const {
          sidenav,
          toggleButton,
          fixedNavlist,
          navItems,
          mainMenuNavItem,
          mainMenuPopover,
          callingNavItem,
          callingPopover,
        } = await setup(componentsPage, variant);

        // --- Expand/Collapse (flexible only) ---
        if (variant === 'flexible') {
          await test.step('Collapse and expand sidenavigation using keyboard', async () => {
            const firstNavItem = navItems.first();
            const firstNavItemInFixedBar = fixedNavlist.locator('mdc-navitem').first();
            await componentsPage.actionability.pressAndCheckFocus('Tab', [
              firstNavItem,
              firstNavItemInFixedBar,
              toggleButton,
            ]);
            await componentsPage.page.keyboard.press('Enter');
            await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
            await componentsPage.page.keyboard.press('Space');
            await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
          });
          await test.step('Collapse and expand sidenavigation using mouse', async () => {
            await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
            await toggleButton.click();
            await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
            await toggleButton.click();
            await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
          });
        }

        // --- Scroll Behavior ---
        await test.step('Scroll to reveal more top menuitems and keep fixed section pinned', async () => {
          const lastNavItem = navItems.last();
          await lastNavItem.scrollIntoViewIfNeeded();
          await expect(lastNavItem).toBeVisible();
          await expect(fixedNavlist).toBeVisible();
        });

        // --- Top-level menuitem selection ---
        await test.step('Select a top level menuitem by mouse', async () => {
          await navItems.first().click();
          await expect(navItems.first()).toHaveAttribute('aria-current', 'page');
        });
        await test.step('Select a top level menuitem by keyboard', async () => {
          await setup(componentsPage, variant);
          await componentsPage.actionability.pressTab();
          await expect(navItems.first()).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(navItems.first()).toHaveAttribute('aria-current', 'page');
        });

        // --- Actionable/soft-disabled menuitem ---
        await test.step('Clicking a soft-disabled menuitem should not trigger any action', async () => {
          const softDisabled = sidenav.locator('mdc-navitem[soft-disabled]').first();
          await expect(softDisabled).toHaveAttribute('soft-disabled');
          await expect(softDisabled).toHaveAttribute('aria-disabled', 'true');
          await softDisabled.click({ force: true });
          await expect(softDisabled).not.toHaveAttribute('aria-current', 'page');
        });
        await test.step('Keyboard activation on soft-disabled menuitem should not trigger any action', async () => {
          await setup(componentsPage, variant);
          await componentsPage.actionability.pressTab();
          const firstMenuSectionNavItem = sidenav.locator('mdc-menusection').first().locator('mdc-navitem').first();
          const secondMenuSectionNavItem = sidenav.locator('mdc-menusection').first().locator('mdc-navitem').nth(1);
          await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [
            navItems.nth(1),
            firstMenuSectionNavItem,
            secondMenuSectionNavItem,
          ]);
          const softDisabled = secondMenuSectionNavItem;
          await expect(softDisabled).toHaveAttribute('soft-disabled');
          await expect(softDisabled).toHaveAttribute('aria-disabled', 'true');
          await componentsPage.page.keyboard.press('Enter');
          await expect(softDisabled).not.toHaveAttribute('aria-current', 'page');
        });

        // --- Nested menuitem: open submenu ---
        await test.step('Open/close submenu to reveal/hide nested menuitems (mouse)', async () => {
          // check for main menu item
          await mainMenuNavItem.click();
          await expect(mainMenuNavItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();
          await mainMenuNavItem.click();
          await expect(mainMenuNavItem).toHaveAttribute('aria-expanded', 'false');
          await expect(mainMenuPopover).not.toBeVisible();

          // check for calling menu item
          await callingNavItem.click();
          await expect(callingNavItem).toHaveAttribute('aria-expanded', 'true');
          await expect(callingPopover).toBeVisible();
          await callingNavItem.click();
          await expect(callingNavItem).toHaveAttribute('aria-expanded', 'false');
          await expect(callingPopover).not.toBeVisible();
        });
        await test.step('Open submenu to reveal nested menuitems (keyboard)', async () => {
          // check for main menu item
          await setup(componentsPage, variant);
          await mainMenuNavItem.focus();
          await componentsPage.page.keyboard.press('Enter');
          await expect(mainMenuNavItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();

          // check for calling menu item
          await setup(componentsPage, variant);
          await componentsPage.actionability.pressTab();
          await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [callingNavItem]);
          await componentsPage.page.keyboard.press('Enter');
          await expect(callingNavItem).toHaveAttribute('aria-expanded', 'true');
          await expect(callingPopover).toBeVisible();
        });

        // --- Nested menuitem: select nested menuitem ---
        await test.step('Select nested menuitem with mouse and parent menuitem reflects active state due to selected child', async () => {
          await setup(componentsPage, variant);
          await mainMenuNavItem.click();
          await expect(mainMenuNavItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();
          const nestedItem = mainMenuPopover.locator('mdc-navitem').first();
          await nestedItem.click();
          await expect(nestedItem).toHaveAttribute('aria-current', 'page');
          await expect(mainMenuPopover).not.toBeVisible();
          await expect(mainMenuNavItem).toHaveAttribute('active', '');
          // await expect(mainMenuNavItem).toHaveAttribute('aria-expanded', 'false'); -- doubt
        });
        await test.step('Select nested menuitem with keyboard, return focus to its parent and parent menuitem reflects active state due to selected child', async () => {
          await setup(componentsPage, variant);
          await mainMenuNavItem.focus();
          await componentsPage.page.keyboard.press('Enter');
          await expect(mainMenuNavItem).toHaveAttribute('aria-expanded', 'true');
          await expect(mainMenuPopover).toBeVisible();
          const nestedItem = mainMenuPopover.locator('mdc-navitem').first();
          await expect(nestedItem).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(nestedItem).toHaveAttribute('aria-current', 'page');
          await expect(mainMenuPopover).not.toBeVisible();
          await expect(mainMenuNavItem).toBeFocused();
          await expect(mainMenuNavItem).toHaveAttribute('active', '');
          // await expect(mainMenuNavItem).toHaveAttribute('aria-expanded', 'false'); -- doubt
        });

        // --- Tooltip on parent when child is active ---
        await test.step('Hovering or focusing over parent menuitem shows tooltip and reopen submenu from active parent menuitem', async () => {
          await mainMenuNavItem.hover();
          // Tooltip should appear -- pending

          // using keyboard
          await mainMenuNavItem.focus();
          await componentsPage.page.keyboard.press('Enter');
          await expect(mainMenuPopover).toBeVisible();
          const nestedItem2 = mainMenuPopover.locator('mdc-navitem').first();
          await expect(nestedItem2).toHaveAttribute('aria-current', 'page');
          // closes submenu for next step
          await componentsPage.page.keyboard.press('Enter');
          await expect(mainMenuPopover).not.toBeVisible();

          // using mouse
          await mainMenuNavItem.click();
          await expect(mainMenuPopover).toBeVisible();
          const nestedItem = mainMenuPopover.locator('mdc-navitem').first();
          await expect(nestedItem).toHaveAttribute('aria-current', 'page');
        });

        // --- Focus Management and Tab Behavior ---
        await test.step('Tabbing into, through, and out of the SideNavigation', async () => {
          await setup(componentsPage, variant);
          // Tab to first navitem in scrollable slot
          await componentsPage.actionability.pressTab();
          const firstScrollableNav = sidenav.locator('mdc-navitem[slot="scrollable-menubar"]').first();
          await expect(firstScrollableNav).toBeFocused();
          // Tab to first navitem in fixed slot
          await componentsPage.actionability.pressTab();
          const firstFixedNav = sidenav.locator('mdc-menusection[slot="fixed-menubar"] > mdc-navitem').first();
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
          await componentsPage.actionability.pressTab(); // scrollable navitem
          await componentsPage.actionability.pressTab(); // fixed navitem
          if (variant === 'flexible') {
            await componentsPage.actionability.pressTab(); // toggle button
            // Now shift+tab: toggle button -> fixed navitem -> scrollable navitem
            await expect(toggleButton).toBeFocused();
            await componentsPage.actionability.pressShiftTab();
            const firstFixedNav = sidenav.locator('mdc-menusection[slot="fixed-menubar"] > mdc-navitem').first();
            await expect(firstFixedNav).toBeFocused();
            await componentsPage.actionability.pressShiftTab();
            const firstScrollableNav = sidenav.locator('mdc-navitem[slot="scrollable-menubar"]').first();
            await expect(firstScrollableNav).toBeFocused();
          } else {
            // Not flexible: shift+tab from fixed navitem -> scrollable navitem
            const firstFixedNav = sidenav.locator('mdc-menusection[slot="fixed-menubar"] > mdc-navitem').first();
            await expect(firstFixedNav).toBeFocused();
            await componentsPage.actionability.pressShiftTab();
            const firstScrollableNav = sidenav.locator('mdc-navitem[slot="scrollable-menubar"]').first();
            await expect(firstScrollableNav).toBeFocused();
          }
        });

        // --- Close submenu using Escape ---
        await test.step('Close submenu using Escape', async () => {
          await mainMenuNavItem.click();
          await expect(mainMenuPopover).toBeVisible();
          await componentsPage.page.keyboard.press('Escape');
          await expect(mainMenuPopover).not.toBeVisible();
        });
      });
    });
  });
});
