/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import type { SideNavigationVariant } from './sidenavigation.types';
import { VARIANTS } from './sidenavigation.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  variant?: SideNavigationVariant;
  customerName?: string;
  expanded?: boolean;
  ariaLabel?: string;
};

const renderChildren = (expanded: boolean) =>
  ` <!-- Upper Nav (scrollable section) -->
    <div slot="scrollable-menubar" aria-label='menubar label' ?expanded=${expanded}>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" 
      nav-id="1" aria-label='navItem label' ?expanded=${expanded} label="Messaging"></mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold"
      nav-id="2" aria-label='navItem label' ?expanded=${expanded} label="Meetings"></mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="dot" icon-name="placeholder-bold" nav-id="3" aria-label='navItem label' 
      disabled ?expanded=${expanded} label="Calling"></mdc-navitem>
      <mdc-divider variant="gradient"></mdc-divider>
      <mdc-text>Section 1</mdc-text>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"
      nav-id="4" aria-label='navItem label' ?expanded=${expanded} label="Messaging"></mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="5" aria-label='navItem label' ?expanded=${expanded} label="Meetings"></mdc-navitem>
      <mdc-navitem role="menuitem" icon-name="placeholder-bold" aria-label='navItem label' 
      ?expanded=${expanded} label="Calling"></mdc-navitem>
      <mdc-divider variant="gradient" nav-id="6"></mdc-divider>
      <mdc-text>Section 2</mdc-text>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" 
      nav-id="7" aria-label='navItem label' ?expanded=${expanded} label="Messaging"></mdc-navitem>
      <mdc-navitem role="menuitem" icon-name="placeholder-bold" nav-id="8"
      aria-label='navItem label' ?expanded=${expanded} label="Meetings"></mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="dot" icon-name="placeholder-bold" nav-id="9" 
      aria-label='navItem label' ?expanded=${expanded} label="Calling"></mdc-navitem>
      <mdc-divider variant="gradient"></mdc-divider>
      <mdc-text>Section 3</mdc-text>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" 
      nav-id="10" aria-label='navItem label' ?expanded=${expanded} label="Messaging"></mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="11" aria-label='navItem label' ?expanded=${expanded} label="Meetings"></mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="dot" icon-name="placeholder-bold" nav-id="12" 
      aria-label='navItem label' ?expanded=${expanded} label="Calling"></mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" 
      nav-id="13" aria-label='navItem label' ?expanded=${expanded} label="Messaging"></mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="14" aria-label='navItem label' ?expanded=${expanded} label="Meetings"></mdc-navitem>
      <mdc-navitem role="menuitem" icon-name="placeholder-bold" nav-id="15" 
      aria-label='navItem label' label="Calling"></mdc-navitem>
    </div>

    <!-- Lower Nav (Fixed section) -->
    <div slot="fixed-menubar" aria-label='menubar label'>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="1" aria-label='navItem label' ?expanded=${expanded} label="Meetings"></mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="2" aria-label='navItem label' ?expanded=${expanded} label="Meetings"></mdc-navitem>
    </div>

    <!-- Brand Logo (Fixed section) -->
    <mdc-icon 
      slot="brand-logo"
      aria-label="This is the brand logo icon" 
      name="apple-bold">
    </mdc-icon>
  `;

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  const html = `
      <mdc-sidenavigation
        ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}>
        ${restArgs.customerName ? `customer-name="${restArgs.customerName}"` : ''}
        ${restArgs.expanded ? `expanded="${restArgs.expanded}"` : ''}
      >
        ${renderChildren(restArgs.expanded ?? true)}
      </mdc-sidenavigation>
  `;

  await componentsPage.mount({ html, clearDocument: true });

  const sideNavigation = componentsPage.page.locator('mdc-sidenavigation');
  await sideNavigation.waitFor();
  return sideNavigation;
};

test.describe.parallel('mdc-sidenavigation', () => {
  test.skip('attributes and interactions', async ({ componentsPage }) => {
    /**
     * ADDITIONAL LOCATORS
     */
    const sideNavigation = await setup({ componentsPage });
    const toggleButton = sideNavigation.locator('mdc-button');
    const scrollableNavlist = sideNavigation.locator('[slot="scrollable-menubar"]');
    // const fixedNavlist = sideNavigation.locator('[slot="fixed-menubar"]');
    const navItems = scrollableNavlist.locator('mdc-navitem');
    const scrollableFirstNavItem = scrollableNavlist.locator('mdc-navitem').nth(0);
    // const scrollableLastNavItem = scrollableNavlist.locator('mdc-navitem').nth(-1);
    // const fixedFirstNavItem = fixedNavlist.locator('mdc-navitem').nth(0);
    // const fixedLastNavItem = fixedNavlist.locator('mdc-navitem').nth(-1);

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      await test.step('default attributes', async () => {
        await expect(sideNavigation).toHaveRole('navigation');
        await expect(sideNavigation).toHaveAttribute('variant', 'flexible');
        await expect(sideNavigation).toHaveAttribute('customer-name', '');
        await expect(sideNavigation).toHaveAttribute('expanded');
        await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
        await expect(navItems.locator('[aria-current]')).toHaveCount(0);
      });

      const attributeTests: [string, Record<string, string | ''>][] = [
        ['variant', { variant: 'fixed-expanded' }],
        ['customer-name', { 'customer-name': '%Customer Name%' }],
        ['aria-label', { 'aria-label': 'Primary side navigation' }],
      ];

      for (const [label, attrs] of attributeTests) {
        await test.step(`attribute ${label} should be present`, async () => {
          await componentsPage.setAttributes(sideNavigation, attrs);
          const [attr] = Object.keys(attrs);
          await expect(sideNavigation).toHaveAttribute(attr);
          await componentsPage.removeAttribute(sideNavigation, attr);
        });
      }
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      /**
       * POINTER / MOUSE INTERACTIONS
       */
      await test.step('mouse: clicking the toggle button should toggle the expanded/collapsed state', async () => {
        await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
        await toggleButton.click();
        await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
        await toggleButton.click();
        await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      });

      await test.step('mouse: hovering over a nav item should not activate it', async () => {
        await scrollableFirstNavItem.hover();
        await expect(scrollableFirstNavItem).not.toHaveAttribute('aria-current', 'page');
      });

      await test.step('mouse: clicking an enabled nav item should activate it', async () => {
        await scrollableFirstNavItem.click();
        await expect(scrollableFirstNavItem).toHaveAttribute('aria-current', 'page');
      });

      await test.step('mouse: clicking a disabled nav item should not trigger any action', async () => {
        const disabledNavItem = navItems.nth(2); // Assuming it's the "Calling" disabled item
        await expect(disabledNavItem).toBeDisabled();
        await disabledNavItem.click({ force: true }); // Attempt to click it
        await expect(disabledNavItem).not.toHaveAttribute('aria-current', 'page');
      });

      /**
       * KEYBOARD INTERACTIONS
       */
      await test.step('keyboard: pressing Space or Enter should toggle the expanded/collapsed state', async () => {
        await toggleButton.focus();
        await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
        // Collapse the sideNavigation using Enter
        await componentsPage.page.keyboard.press('Enter');
        await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
        // Expand the sideNavigation using Space
        await componentsPage.page.keyboard.press('Space');
        await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      });

      await test.step('keyboard: pressing Space or Enter on a nav item should activate it', async () => {
        const first = navItems.nth(0);
        const second = navItems.nth(1);

        // Activate second item using Enter
        await second.focus();
        await componentsPage.page.keyboard.press('Enter');
        await expect(second).toBeFocused();
        await expect(second).toHaveAttribute('aria-current', 'page');
        await expect(first).not.toHaveAttribute('aria-current', 'page');

        // Activate first item using Space
        await first.focus();
        await componentsPage.page.keyboard.press('Space');
        await expect(first).toBeFocused();
        await expect(first).toHaveAttribute('aria-current', 'page');
        await expect(second).not.toHaveAttribute('aria-current', 'page');
      });

      await test.step('keyboard: disabled nav item should remain inactive on keydown', async () => {
        const disabledNavItem = navItems.nth(2);
        await expect(disabledNavItem).toBeDisabled();
        await disabledNavItem.focus();
        await componentsPage.page.keyboard.press('Space'); // or Enter
        await expect(disabledNavItem).not.toHaveAttribute('aria-current', 'page');
      });
    });
  });

  /**
   * USER STORIES
   */
  test.skip('user stories', async ({ componentsPage }) => {
    async function getLocators(sideNavigation: any) {
      const toggleButton = sideNavigation.locator('mdc-button');
      const scrollableNavlist = sideNavigation.locator('[slot="scrollable-menubar"]');
      const fixedNavlist = sideNavigation.locator('[slot="fixed-menubar"]');
      const navItems = scrollableNavlist.locator('mdc-navitem');
      const scrollableFirstNavItem = navItems.nth(0);
      const scrollableLastNavItem = navItems.nth(-1);
      const fixedFirstNavItem = fixedNavlist.locator('mdc-navitem').nth(0);
      // const fixedLastNavItem = fixedNavlist.locator('mdc-navitem').nth(-1);

      return {
        toggleButton,
        scrollableNavlist,
        fixedNavlist,
        navItems,
        scrollableFirstNavItem,
        scrollableLastNavItem,
        fixedFirstNavItem,
      };
    }

    async function toggleSideNavigationState(source: string, sideNavigation: any) {
      const locators = await getLocators(sideNavigation);
      const { toggleButton } = locators;

      switch (source) {
        case 'mouse':
          await toggleButton.click();
          await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

          // User clicks the toggle button again to expand the side navigation
          await toggleButton.click();
          await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
          break;

        case 'keyboard':
          // User presses tab twice to focus toggle button and collapse the sideNavigation state
          await componentsPage.page.keyboard.press('Tab');
          await componentsPage.page.keyboard.press('Tab');
          await componentsPage.page.keyboard.press('Enter'); // or Space
          await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

          // User presses tab twice to focus toggle button and collapse the sideNavigation state
          await componentsPage.page.keyboard.press('Space'); // or Enter
          await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
          break;

        default:
          throw new Error(`Unsupported interaction source: ${source}`);
      }
    }

    async function navigationFlow(source: string, sideNavigation: any) {
      const locators = await getLocators(sideNavigation);
      const { scrollableFirstNavItem, scrollableLastNavItem, fixedNavlist, navItems } = locators;

      switch (source) {
        case 'mouse':
          // User scrolls to the last item in the scrollable navigation section
          await scrollableLastNavItem.scrollIntoViewIfNeeded();
          await expect(scrollableLastNavItem).toBeVisible();
          await expect(fixedNavlist).toBeVisible();

          // User clicks on the last nav item of scrollable navigation section
          await scrollableLastNavItem.click();
          await expect(scrollableLastNavItem).toHaveAttribute('aria-current', 'page');
          await expect(scrollableFirstNavItem).not.toHaveAttribute('aria-current', 'page');

          // User scrolls to the first item in the scrollable navigation section
          await scrollableFirstNavItem.scrollIntoViewIfNeeded();
          await expect(scrollableFirstNavItem).toBeVisible();
          await expect(fixedNavlist).toBeVisible();

          // User clicks on the first nav item of scrollable section to activate it again
          await scrollableFirstNavItem.click();
          await expect(scrollableFirstNavItem).toHaveAttribute('aria-current', 'page');
          await expect(scrollableLastNavItem).not.toHaveAttribute('aria-current', 'page');
          break;

        case 'keyboard':
          // User presses Shift+tab to focus first nav item of scrollable section
          await componentsPage.page.keyboard.press('Shift+Tab');
          await expect(scrollableFirstNavItem).toHaveAttribute('aria-current', 'page');

          // User presses ArrowDown which should move the focus to next nav item skipping disabled one
          await componentsPage.page.keyboard.press('ArrowDown');
          await expect(navItems.nth(1)).toBeFocused();
          await componentsPage.page.keyboard.press('ArrowDown');
          await expect(navItems.nth(3)).toBeFocused();

          // User presses ArrowUp which should move the focus to previous nav item skipping disabled one
          await componentsPage.page.keyboard.press('ArrowUp');
          await expect(navItems.nth(1)).toBeFocused();
          await componentsPage.page.keyboard.press('ArrowUp');
          await expect(scrollableFirstNavItem).toBeFocused(); // focus reaches back to 1st navItem

          // User presses ArrowUp which should move the focus to last nav item in scrollable section and activate it
          await componentsPage.page.keyboard.press('ArrowUp');
          await expect(scrollableLastNavItem).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(scrollableLastNavItem).toHaveAttribute('aria-current', 'page');
          await expect(scrollableFirstNavItem).not.toHaveAttribute('aria-current', 'page');

          // User presses ArrowDown to the top and activate first nav item of the scrollable section again
          await componentsPage.page.keyboard.press('ArrowDown');
          await expect(scrollableFirstNavItem).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(scrollableFirstNavItem).toHaveAttribute('aria-current', 'page');
          await expect(scrollableLastNavItem).not.toHaveAttribute('aria-current', 'page');

          // User scrolls/navigates using Home and End to focus first and last nav item of the scrollable section
          await componentsPage.page.keyboard.press('End');
          await expect(scrollableLastNavItem).toBeFocused();
          await componentsPage.page.keyboard.press('Home');
          await expect(scrollableFirstNavItem).toBeFocused();
          break;

        default:
          throw new Error(`Unsupported interaction source: ${source}`);
      }
    }

    async function activateFirstNavItem(source: string, sideNavigation: any) {
      const locators = await getLocators(sideNavigation);
      const { scrollableFirstNavItem, fixedFirstNavItem } = locators;

      switch (source) {
        case 'mouse':
          // User clicks on the first nav item of scrollable section to activate it
          await scrollableFirstNavItem.click();
          await expect(scrollableFirstNavItem).toHaveAttribute('aria-current', 'page');

          // User clicks on the first nav item of fixed section to activate it
          await fixedFirstNavItem.click();
          await componentsPage.page.pause();
          await expect(fixedFirstNavItem).toHaveAttribute('aria-current', 'page');
          break;

        case 'keyboard':
          // User presses tab to focus first nav item of scrollable section and activate it
          await scrollableFirstNavItem.focus();
          await expect(scrollableFirstNavItem).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(scrollableFirstNavItem).toHaveAttribute('aria-current', 'page');

          // User presses tab to focus first nav item of fixed section and activate it
          await componentsPage.page.keyboard.press('Tab');
          await componentsPage.page.keyboard.press('Enter');
          await expect(fixedFirstNavItem).toHaveAttribute('aria-current', 'page');
          break;

        default:
          throw new Error(`Unsupported interaction source: ${source}`);
      }
    }

    async function runMouseFlow(variant: SideNavigationVariant, sideNavigation: any) {
      const locators = await getLocators(sideNavigation);
      const { toggleButton } = locators;

      switch (variant) {
        case VARIANTS.FIXED_EXPANDED:
          await activateFirstNavItem('mouse', sideNavigation);
          await navigationFlow('mouse', sideNavigation);
          break;

        case VARIANTS.FIXED_COLLAPSED:
          await activateFirstNavItem('mouse', sideNavigation);
          await navigationFlow('mouse', sideNavigation);
          break;

        case VARIANTS.FLEXIBLE:
          await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
          await activateFirstNavItem('mouse', sideNavigation);
          await navigationFlow('mouse', sideNavigation);
          await toggleSideNavigationState('mouse', sideNavigation);
          break;

        default:
          throw new Error(`Unknown variant: ${variant}`);
      }
    }

    async function runKeyboardFlow(variant: SideNavigationVariant, sideNavigation: any) {
      const locators = await getLocators(sideNavigation);
      const { toggleButton } = locators;
      
      switch (variant) {
        case VARIANTS.FIXED_EXPANDED:
          await activateFirstNavItem('keyboard', sideNavigation);
          await navigationFlow('keyboard', sideNavigation);
          break;

        case VARIANTS.FIXED_COLLAPSED:
          await activateFirstNavItem('keyboard', sideNavigation);
          await navigationFlow('keyboard', sideNavigation);
          break;

        case VARIANTS.FLEXIBLE:
          await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
          await activateFirstNavItem('keyboard', sideNavigation);
          await navigationFlow('keyboard', sideNavigation);
          await toggleSideNavigationState('keyboard', sideNavigation);
          break;

        default:
          throw new Error(`Unknown variant: ${variant}`);
      }
    }

    const SUPPORTED_VARIANTS = [VARIANTS.FIXED_EXPANDED, VARIANTS.FIXED_COLLAPSED, VARIANTS.FLEXIBLE];
    for (const variant of SUPPORTED_VARIANTS) {
      const sideNavigation = await setup({ componentsPage, variant, customerName: '%Customer Name%' });

      await test.step(`Variant: ${variant}`, async () => {
        await runMouseFlow(variant, sideNavigation);
        await runKeyboardFlow(variant, sideNavigation);
      });
    }
  });

  /**
   * VISUAL REGRESSION & ACCESSIBILITY
   */
  // test.use({ viewport: { width: 800, height: 1200 } });
  test.skip('visual-regression & accessibility', async ({ componentsPage }) => {
    /**
     * ADDITIONAL LOCATORS
     */
    const sideNavigation = await setup({ componentsPage });
    const toggleButton = sideNavigation.locator('mdc-button');

    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const stickerSheet = new StickerSheet(componentsPage, 'mdc-sidenavigation');
      stickerSheet.setAttributes({ variant: 'flexible', 'customer-name': '%Customer Name%' });

      await test.step('mdc-sidenavigation with flexible variant and is expanded', async () => {
        // default variant (Flexible and expanded)
        stickerSheet.setChildren(renderChildren(true));
        await stickerSheet.createMarkupWithCombination({});

        await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
        const container = stickerSheet.getWrapperContainer();

        await test.step('matches screenshot of the element', async () => {
          await componentsPage.visualRegression.takeScreenshot('mdc-sidenavigation-flexible-expanded', {
            element: container,
          });
        });
      });

      await test.step('mdc-sidenavigation with flexible variant and is collapsed', async () => {
        // Flexible and not expanded
        stickerSheet.setChildren(renderChildren(false));
        await stickerSheet.createMarkupWithCombination({});

        await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
        const container = stickerSheet.getWrapperContainer();

        await test.step('matches screenshot of the element', async () => {
          await toggleButton.click();
          await componentsPage.visualRegression.takeScreenshot('mdc-sidenavigation-flexible-collapsed', {
            element: container,
          });
        });
      });

      await test.step('mdc-sidenavigation with fixed-expanded variant', async () => {
        // fixed-expanded
        stickerSheet.setAttributes({ variant: 'fixed-expanded', 'customer-name': '%Customer Name%' });
        stickerSheet.setChildren(renderChildren(true));
        await stickerSheet.createMarkupWithCombination({});

        await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
        const container = stickerSheet.getWrapperContainer();
        await test.step('matches screenshot of the element', async () => {
          await componentsPage.visualRegression.takeScreenshot('mdc-sidenavigation-fixed-expanded', {
            element: container,
          });
        });
      });

      await test.step('mdc-sidenavigation with fixed-collapsed variant', async () => {
        // fixed-collapsed
        stickerSheet.setAttributes({ variant: 'fixed-collapsed', 'customer-name': '%Customer Name%' });
        stickerSheet.setChildren(renderChildren(false));
        await stickerSheet.createMarkupWithCombination({});

        await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
        const container = stickerSheet.getWrapperContainer();

        await test.step('matches screenshot of the element', async () => {
          await componentsPage.visualRegression.takeScreenshot('mdc-sidenavigation-fixed-collapsed', {
            element: container,
          });
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('sidenavigation-default');
    });
  });
});
