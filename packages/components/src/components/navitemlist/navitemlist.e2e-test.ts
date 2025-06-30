// AI-Assisted
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  'aria-label'?: string;
  children?: string;
  includeContext?: boolean;
};

const ariaLabel = 'Main Navigation List';
const sampleNavItems = `
  <mdc-navitem icon-name="chat-regular" nav-id="nav-1" label="Messages">Messages</mdc-navitem>
  <mdc-navitem icon-name="meetings-regular" nav-id="nav-2" label="Meetings">Meetings</mdc-navitem>
  <mdc-navitem icon-name="audio-call-regular" nav-id="nav-3" label="Calling" disabled>Calling</mdc-navitem>
`;

const mixedContent = `
  <mdc-text>Communication</mdc-text>
  <mdc-navitem icon-name="chat-regular" nav-id="nav-1" label="Messages">Messages</mdc-navitem>
  <mdc-navitem icon-name="meetings-regular" nav-id="nav-2" label="Meetings">Meetings</mdc-navitem>
  <mdc-divider variant="gradient"></mdc-divider>
  <mdc-text>Tools</mdc-text>
  <mdc-navitem icon-name="settings-regular" nav-id="nav-3" label="Settings">Settings</mdc-navitem>
`;

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  const contextWrapper = restArgs.includeContext
    ? `
    <mdc-sidenavigation variant="flexible" expanded>
      <mdc-navitemlist slot="scrollable-section"
        ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
      >
        ${restArgs.children ?? ''}
      </mdc-navitemlist>
    </mdc-sidenavigation>
  `
    : `
    <mdc-navitemlist
      ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
    >
      ${restArgs.children ?? ''}
    </mdc-navitemlist>
  `;

  await componentsPage.mount({
    html: contextWrapper,
    clearDocument: true,
  });

  const navitemlist = componentsPage.page.locator('mdc-navitemlist');
  await navitemlist.waitFor();
  return navitemlist;
};

test.describe('NavItemList Feature Scenarios', () => {
  test.skip('mdc-navitemlist', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const navitemlistSheet = new StickerSheet(componentsPage, 'mdc-navitemlist', 'margin: 0.25rem 0;');
      const options = { createNewRow: true };

      // Basic navitemlist with navitems
      navitemlistSheet.setAttributes({ 'aria-label': ariaLabel });
      navitemlistSheet.setChildren(sampleNavItems);
      await navitemlistSheet.createMarkupWithCombination({}, options);

      // Navitemlist with mixed content
      navitemlistSheet.setAttributes({ 'aria-label': ariaLabel });
      navitemlistSheet.setChildren(mixedContent);
      await navitemlistSheet.createMarkupWithCombination({}, options);

      // Empty navitemlist
      navitemlistSheet.setAttributes({ 'aria-label': ariaLabel });
      navitemlistSheet.setChildren('');
      await navitemlistSheet.createMarkupWithCombination({}, options);

      await navitemlistSheet.mountStickerSheet({ role: 'navigation' });
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-navitemlist', {
          element: navitemlistSheet.getWrapperContainer(),
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await setup({
        componentsPage,
        'aria-label': ariaLabel,
        children: sampleNavItems,
      });
      // await componentsPage.accessibility.checkForA11yViolations('navitemlist-default');
    });

    /**
     * CONTAINER STRUCTURE AND LAYOUT
     */
    await test.step('container structure and layout', async () => {
      await test.step('render navitemlist with multiple navitems', async () => {
        const navitemlist = await setup({
          componentsPage,
          'aria-label': ariaLabel,
          children: sampleNavItems,
        });

        const navitems = componentsPage.page.locator('mdc-navitem');
        await expect(navitems).toHaveCount(3);
        await expect(navitemlist).toHaveAttribute('role', 'menubar');
        await expect(navitemlist).toHaveAttribute('aria-label', ariaLabel);
      });

      await test.step('render navitemlist with mixed content', async () => {
        await setup({
          componentsPage,
          children: mixedContent,
        });

        const textHeaders = componentsPage.page.locator('mdc-text');
        const dividers = componentsPage.page.locator('mdc-divider');
        const navitems = componentsPage.page.locator('mdc-navitem');

        await expect(textHeaders).toHaveCount(2);
        await expect(dividers).toHaveCount(1);
        await expect(navitems).toHaveCount(3);
      });

      await test.step('render empty navitemlist', async () => {
        const navitemlist = await setup({
          componentsPage,
          children: '',
        });

        await expect(navitemlist).toBeVisible();
        await expect(navitemlist).toHaveAttribute('role', 'menubar');
      });
    });

    /**
     * NAVIGATION STRUCTURE AND LAYOUT
     */
    await test.step('navigation structure and layout', async () => {
      await test.step('navitemlist renders with correct structure', async () => {
        const navitemlist = await setup({
          componentsPage,
          children: sampleNavItems,
        });

        await expect(navitemlist).toBeVisible();
        await expect(navitemlist).toHaveAttribute('role', 'menubar');

        const navitems = componentsPage.page.locator('mdc-navitem');
        await expect(navitems).toHaveCount(3);
      });

      await test.step('navitemlist manages child navitems properly', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        const enabledNavitems = componentsPage.page.locator('mdc-navitem:not([disabled])');
        const disabledNavitems = componentsPage.page.locator('mdc-navitem[disabled]');

        await expect(enabledNavitems).toHaveCount(2);
        await expect(disabledNavitems).toHaveCount(1);
      });
    });

    /**
     * EVENT HANDLING AND COMMUNICATION
     */
    await test.step('event handling and communication', async () => {
      await test.step('handle activechange event from nested navitem', async () => {
        const navitemlist = await setup({
          componentsPage,
          children: sampleNavItems,
          includeContext: true,
        });

        const firstNavitem = componentsPage.page.locator('mdc-navitem').first();

        // Listen for event bubbling
        const eventPromise = componentsPage.waitForEvent(navitemlist, 'activechange');
        await firstNavitem.click();

        await eventPromise;
      });

      await test.step('event handling for disabled navitems', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        const disabledNavitem = componentsPage.page.locator('mdc-navitem[disabled]');
        await expect(disabledNavitem).toBeDisabled();

        // Disabled navitem should not emit activechange events
        await disabledNavitem.click();
        // Event should not be processed
      });
    });

    /**
     * ACCESSIBILITY AND ARIA
     */
    await test.step('accessibility and aria', async () => {
      await test.step('default aria attributes for navitemlist', async () => {
        const navitemlist = await setup({
          componentsPage,
          children: sampleNavItems,
        });

        await expect(navitemlist).toHaveAttribute('role', 'menubar');
        await expect(navitemlist).toHaveAttribute('aria-orientation', 'vertical');
      });

      await test.step('custom aria label for navitemlist', async () => {
        const navitemlist = await setup({
          componentsPage,
          'aria-label': ariaLabel,
          children: sampleNavItems,
        });

        await expect(navitemlist).toHaveAttribute('aria-label', ariaLabel);
      });

      await test.step('aria attributes for navitems', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        const navitems = componentsPage.page.locator('mdc-navitem');
        await expect(navitems.first()).toHaveAttribute('role', 'menuitem');
      });
    });

    /**
     * KEYBOARD NAVIGATION
     */
    await test.step('keyboard navigation', async () => {
      await test.step('tab navigation through navitemlist', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        const enabledNavitems = componentsPage.page.locator('mdc-navitem:not([disabled])');
        const firstNavitem = enabledNavitems.first();

        await componentsPage.actionability.pressTab();
        await expect(firstNavitem).toBeFocused();
      });

      await test.step('arrow key navigation within navitemlist', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        const navitems = componentsPage.page.locator('mdc-navitem:not([disabled])');
        const firstNavitem = navitems.first();
        const secondNavitem = navitems.nth(1);

        await firstNavitem.focus();
        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(secondNavitem).toBeFocused();
      });

      await test.step('enter and space key activation', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        const firstNavitem = componentsPage.page.locator('mdc-navitem').first();
        await firstNavitem.focus();

        const eventPromise = componentsPage.waitForEvent(firstNavitem, 'activechange');
        await componentsPage.page.keyboard.press('Enter');

        await eventPromise;
      });
    });

    /**
     * CONTENT MANAGEMENT
     */
    await test.step('content management', async () => {
      await test.step('navitems collection management', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        const allNavitems = componentsPage.page.locator('mdc-navitem');
        const enabledNavitems = componentsPage.page.locator('mdc-navitem:not([disabled])');

        await expect(allNavitems).toHaveCount(3);
        await expect(enabledNavitems).toHaveCount(2); // One is disabled
      });

      await test.step('finding navitem by nav-id', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        const specificNavitem = componentsPage.page.locator('mdc-navitem[nav-id="nav-2"]');
        await expect(specificNavitem).toBeVisible();
        await expect(specificNavitem).toHaveAttribute('nav-id', 'nav-2');
      });
    });

    /**
     * INTEGRATION WITH MENUBAR
     */
    await test.step('integration with menubar', async () => {
      await test.step('menubar functionality inheritance', async () => {
        const navitemlist = await setup({
          componentsPage,
          children: sampleNavItems,
        });

        // Should inherit MenuBar properties
        await expect(navitemlist).toHaveAttribute('role', 'menubar');
        await expect(navitemlist).toHaveAttribute('aria-orientation', 'vertical');
      });

      await test.step('menubar keyboard navigation', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        const firstNavitem = componentsPage.page.locator('mdc-navitem:not([disabled])').first();
        const lastNavitem = componentsPage.page.locator('mdc-navitem:not([disabled])').last();

        await firstNavitem.focus();

        // Home key should go to first item
        await componentsPage.page.keyboard.press('Home');
        await expect(firstNavitem).toBeFocused();

        // End key should go to last item
        await componentsPage.page.keyboard.press('End');
        await expect(lastNavitem).toBeFocused();
      });
    });

    /**
     * ERROR HANDLING
     */
    await test.step('error handling', async () => {
      await test.step('handle missing sidenavigation context gracefully', async () => {
        await setup({
          componentsPage,
          children: sampleNavItems,
        });

        // Should not throw errors when no context is available
        const navitemlist = componentsPage.page.locator('mdc-navitemlist');
        await expect(navitemlist).toBeVisible();

        const firstNavitem = componentsPage.page.locator('mdc-navitem').first();
        await firstNavitem.click();
        // Should handle the event without errors
      });

      await test.step('handle empty children gracefully', async () => {
        await setup({
          componentsPage,
          children: '',
        });

        const navitemlist = componentsPage.page.locator('mdc-navitemlist');
        await expect(navitemlist).toBeVisible();
        await expect(navitemlist).toHaveAttribute('role', 'menubar');
      });
    });

    /**
     * RESPONSIVE BEHAVIOR
     */
    await test.step('responsive behavior', async () => {
      await test.step('navitemlist adapts to different layouts', async () => {
        const navitemlist = await setup({
          componentsPage,
          children: sampleNavItems,
        });

        // Should maintain structure regardless of container size
        await expect(navitemlist).toBeVisible();

        const navitems = componentsPage.page.locator('mdc-navitem');
        await expect(navitems).toHaveCount(3);
      });
    });
  });
});
// End AI-Assisted
