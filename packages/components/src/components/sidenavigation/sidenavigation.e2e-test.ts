import { expect } from '@playwright/test';
import { test } from '../../../config/playwright/setup';

type SidenavigationSetupArgs = {
  variant?: string;
  'customer-name'?: string;
  'grabber-btn-aria-label'?: string;
  'parent-nav-tooltip-text'?: string;
  expanded?: boolean;
};

const setup = async (
  componentsPage: any,
  args: SidenavigationSetupArgs = {},
) => {
  const {
    variant = 'flexible',
    'customer-name': customerName = '',
    'grabber-btn-aria-label': grabberBtnAriaLabel = 'Toggle sidenavigation',
    'parent-nav-tooltip-text': parentNavTooltipText = 'Active parent',
    expanded = false,
  } = args;
  await componentsPage.mount({
    html: `
      <div style="height: 90vh; margin: 1rem">
        <mdc-sidenavigation
          variant="${variant}"
          customer-name="${customerName}"
          grabber-btn-aria-label="${grabberBtnAriaLabel}"
          parent-nav-tooltip-text="${parentNavTooltipText}"
          ${expanded ? 'expanded' : ''}
          aria-label="Main Navigation"
        >
          <mdc-navitemlist slot="scrollable-section" aria-label="This is a 1st navitemlist.">
            <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" 
            nav-id="1" label="Messaging"></mdc-navitem>
            <mdc-navitem icon-name="meetings-bold" nav-id="2" label="Meetings" disabled></mdc-navitem>
            <mdc-navitem badge-type="counter" counter="2" max-counter="66" 
            icon-name="audio-call-bold" nav-id="3" label="Callings"></mdc-navitem>
            <mdc-navitem icon-name="more-circle-bold" nav-id="4" label="More" id="menu-button-trigger"></mdc-navitem>
            <mdc-menupopover triggerid="menu-button-trigger">
              <mdc-navitem label="App Hub" nav-id="5" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Personal Insights" nav-id="6" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="What's new?" nav-id="7" badge-type="counter" counter="2" 
              max-counter="66" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Collaboration Tools" nav-id="8" 
              icon-name="placeholder-bold" id="share-id"></mdc-navitem>
              <mdc-menupopover triggerid="share-id">
                <mdc-navitem label="Webex App Hub" nav-id="temp1" 
                badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
                <mdc-navitem label="Team Insights" nav-id="temp2" icon-name="placeholder-bold"></mdc-navitem>
                <mdc-navitem label="Release Notes" nav-id="temp3" badge-type="counter" 
                counter="2" max-counter="66" icon-name="placeholder-bold"></mdc-navitem>
                <mdc-navitem label="Cisco Spaces" nav-id="temp4" icon-name="placeholder-bold"></mdc-navitem>
              </mdc-menupopover>
            </mdc-menupopover>
            <mdc-divider variant="gradient"></mdc-divider>
            <mdc-text>Section 1</mdc-text>
            <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" 
            nav-id="9" label="Messaging"></mdc-navitem>
            <mdc-navitem icon-name="meetings-bold" nav-id="10" label="Meetings"></mdc-navitem>
            <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="11" label="Calling"></mdc-navitem>
            <mdc-divider variant="gradient"></mdc-divider>
            <mdc-text>Section 2</mdc-text>
            <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" 
            nav-id="12" label="Messaging"></mdc-navitem>
            <mdc-navitem icon-name="meetings-bold" nav-id="13" label="Meetings"></mdc-navitem>
            <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="14" label="Calling"></mdc-navitem>
            <mdc-divider variant="gradient"></mdc-divider>
            <mdc-text>Section 3</mdc-text>
            <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" 
            nav-id="15" label="Messaging"></mdc-navitem>
            <mdc-navitem icon-name="meetings-bold" nav-id="16" label="Meetings"></mdc-navitem>
            <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="17" label="Calling"></mdc-navitem>
          </mdc-navitemlist>
          <mdc-navitemlist slot="fixed-section" aria-label="This is a 2nd navitemlist.">
            <mdc-navitem badge-type="counter" counter="3" max-counter="66" 
            icon-name="settings-bold" nav-id="18" label="Settings"></mdc-navitem>
            <mdc-navitem icon-name="help-circle-bold" nav-id="19" label="Help" disable-aria-current></mdc-navitem>
          </mdc-navitemlist>
          <mdc-icon slot="brand-logo" aria-label="This is the brand logo icon" name="apple-bold"></mdc-icon>
        </mdc-sidenavigation>
      </div>
    `,
    clearDocument: true,
  });
  const sidenavigation = componentsPage.page.locator('mdc-sidenavigation');
  await sidenavigation.waitFor();
  return sidenavigation;
};

test.describe('SideNavigation Feature Scenarios', () => {
  test('mdc-sidenavigation scenarios', async ({ componentsPage }) => {
    const sidenavigation = await setup(componentsPage);

    // Accessibility
    await test.step('should have role navigation and correct aria-label', async () => {
      await expect(sidenavigation).toHaveAttribute('role', 'navigation');
      await expect(sidenavigation).toHaveAttribute('aria-label', 'Main Navigation');
    });

    // Expand/Collapse Behavior
    await test.step('Collapse the sidenavigation using mouse', async () => {
      const sidenavigation = await setup(componentsPage);
      const toggleBtn = sidenavigation.locator('mdc-button[part="grabber-btn"]');
      await expect(toggleBtn).toBeVisible();
      await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
      await toggleBtn.click();
      await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    });
    await test.step('Expand the sidenavigation using mouse', async () => {
      const toggleBtn = sidenavigation.locator('mdc-button[part="grabber-btn"]');
      await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
      await expect(toggleBtn).toBeVisible();
      await toggleBtn.click();
      await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    });
    await test.step('Collapse the sidenavigation using keyboard', async () => {
      const sidenavigation = await setup(componentsPage);
      const toggleBtn = sidenavigation.locator('mdc-button[part="grabber-btn"]');
      await expect(toggleBtn).toBeVisible();
      await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
      await toggleBtn.focus();
      await componentsPage.page.keyboard.press('Space');
      await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    });
    await test.step('Expand the sidenavigation using keyboard', async () => {
      const toggleBtn = sidenavigation.locator('mdc-button[part="grabber-btn"]');
      await expect(toggleBtn).toBeVisible();
      await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
      await toggleBtn.focus();
      await componentsPage.page.keyboard.press('Enter');
      await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    });

    // Scroll Behavior
    await test.step('Scroll to reveal more top menuitems using mouse', async () => {
      const sidenavigation = await setup(componentsPage);

      // Get the scrollable container
      const scrollableSection = sidenavigation.locator('[part="scrollable-section"]');
      const fixedSection = sidenavigation.locator('[part="fixed-section"]');
      // Check that the fixed section is visible initially
      await expect(fixedSection).toBeVisible();
      // Get the initial scroll position
      const initialScrollTop: number = await scrollableSection.evaluate((el: HTMLElement): number => el.scrollTop);
      // Ensure the scrollable section is in the viewport
      await scrollableSection.scrollIntoViewIfNeeded();
      // Simulate a more natural scroll by using mouse wheel event
      await componentsPage.page.mouse.wheel(0, 300);
      // Wait for scroll to complete and check that the scroll position changed
      await expect(async () => {
        const currentScrollTop = await scrollableSection.evaluate((el: HTMLElement): number => el.scrollTop);
        return currentScrollTop > initialScrollTop;
      }).toPass();

      // Verify that the fixed section is still visible after scrolling
      await expect(fixedSection).toBeVisible();
    });

    // Menuitems Selection
    await test.step('Navigating to a new page section by mouse click', async () => {
      // TODO: Implement test for menuitem selection by mouse
    });
    await test.step('Navigating to a new page section by keyboard', async () => {
      // TODO: Implement test for menuitem selection by keyboard
    });
    await test.step('Triggering an action by clicking a menuitem', async () => {
      // TODO: Implement test for menuitem action by mouse
    });
    await test.step('Triggering an action via keyboard', async () => {
      // TODO: Implement test for menuitem action by keyboard
    });

    // Selecting a nested menuitem
    await test.step('Open submenu to reveal nested menuitems', async () => {
      // TODO: Implement test for opening submenu
    });
    await test.step('Select nested menuitem with mouse or keyboard', async () => {
      // TODO: Implement test for selecting nested menuitem
    });
    await test.step('Return focus to parent after keyboard activation', async () => {
      // TODO: Implement test for focus return after submenu closes
    });

    // Re-engaging with previously selected parent
    await test.step('Parent menuitem reflects active state due to selected child', async () => {
      // TODO: Implement test for parent active state
    });
    await test.step('Hovering or focusing over parent menuitem shows tooltip', async () => {
      // TODO: Implement test for tooltip on parent
    });
    await test.step('Reopen submenu from active parent menuitem', async () => {
      // TODO: Implement test for reopening submenu from active parent
    });

    // Focus Management and Tab Behavior
    await test.step('Tabbing into the SideNavigation', async () => {
      // TODO: Implement test for tabbing into sidenavigation
    });
    await test.step('Tabbing from first Menubar to second Menubar', async () => {
      // TODO: Implement test for tabbing between menubars
    });
    await test.step('Tabbing from second Menubar to SideNavigation toggle button', async () => {
      // TODO: Implement test for tabbing to toggle button
    });
    await test.step('Tabbing out of the SideNavigation', async () => {
      // TODO: Implement test for tabbing out of sidenavigation
    });
    await test.step('Shift+Tab moves backward through focusable elements inside the SideNavigation', async () => {
      // TODO: Implement test for shift+tab focus management
    });
    await test.step('Close submenu using Escape', async () => {
      // TODO: Implement test for closing submenu with Escape
    });
  });
});
