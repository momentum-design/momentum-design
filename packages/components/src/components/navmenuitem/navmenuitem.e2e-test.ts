// AI-Assisted
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  'icon-name'?: string;
  active?: boolean;
  disabled?: boolean;
  'soft-disabled'?: boolean;
  'badge-type'?: string;
  counter?: number;
  'max-counter'?: number;
  'nav-id'?: string;
  'show-label'?: boolean;
  'aria-label'?: string;
  'disable-aria-current'?: boolean;
  children?: string;
};

const primaryLabel = 'Navigation Item';
const navId = 'nav-item-1';
const iconName = 'placeholder-regular';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <div role="menu">
      <mdc-navmenuitem
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs['icon-name'] ? `icon-name="${restArgs['icon-name']}"` : ''}
        ${restArgs.active ? 'active' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}
        ${restArgs['badge-type'] ? `badge-type="${restArgs['badge-type']}"` : ''}
        ${restArgs.counter ? `counter="${restArgs.counter}"` : ''}
        ${restArgs['max-counter'] ? `max-counter="${restArgs['max-counter']}"` : ''}
        ${restArgs['nav-id'] ? `nav-id="${restArgs['nav-id']}"` : ''}
        ${restArgs['show-label'] ? 'show-label' : ''}
        ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
        ${restArgs['disable-aria-current'] ? 'disable-aria-current' : ''}
      >
        ${restArgs.children ?? ''}
      </mdc-navmenuitem></div>
    `,
    clearDocument: true,
  });
  const navmenuitem = componentsPage.page.locator('mdc-navmenuitem');
  await navmenuitem.waitFor();
  return navmenuitem;
};

test.describe('NavMenuItem Feature Scenarios', () => {
  test('mdc-navmenuitem', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const navmenuitemSheet = new StickerSheet(componentsPage, 'mdc-navmenuitem', 'margin: 0.25rem 0;');
      const options = { createNewRow: true };

      // Basic navmenuitem with label and icon
      navmenuitemSheet.setAttributes({
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
        'show-label': true,
      });
      await navmenuitemSheet.createMarkupWithCombination({}, options);

      // Active navmenuitem
      navmenuitemSheet.setAttributes({
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
        'show-label': true,
        active: true,
      });
      await navmenuitemSheet.createMarkupWithCombination({}, options);

      // NavMenuItem without label (collapsed state)
      navmenuitemSheet.setAttributes({
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
      });
      await navmenuitemSheet.createMarkupWithCombination({}, options);

      // NavMenuItem with dot badge
      navmenuitemSheet.setAttributes({
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
        'show-label': true,
        'badge-type': 'dot',
      });
      await navmenuitemSheet.createMarkupWithCombination({}, options);

      // NavMenuItem with counter badge
      navmenuitemSheet.setAttributes({
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
        'show-label': true,
        'badge-type': 'counter',
        counter: 5,
      });
      await navmenuitemSheet.createMarkupWithCombination({}, options);

      // NavMenuItem with high counter badge
      navmenuitemSheet.setAttributes({
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
        'show-label': true,
        'badge-type': 'counter',
        counter: 150,
        'max-counter': 99,
      });
      await navmenuitemSheet.createMarkupWithCombination({}, options);

      // Disabled navmenuitem
      navmenuitemSheet.setAttributes({
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
        'show-label': true,
        disabled: true,
      });
      await navmenuitemSheet.createMarkupWithCombination({}, options);

      // Soft-disabled navmenuitem
      navmenuitemSheet.setAttributes({
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
        'show-label': true,
        'soft-disabled': true,
      });
      await navmenuitemSheet.createMarkupWithCombination({}, options);

      // Active navmenuitem with badge (collapsed)
      navmenuitemSheet.setAttributes({
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
        active: true,
        'badge-type': 'counter',
        counter: 3,
      });
      await navmenuitemSheet.createMarkupWithCombination({}, options);

      await navmenuitemSheet.mountStickerSheet({ role: 'navigation' });
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-navmenuitem', {
          element: navmenuitemSheet.getWrapperContainer(),
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await setup({
        componentsPage,
        label: primaryLabel,
        'icon-name': iconName,
        'nav-id': navId,
        'show-label': true,
      });
      await componentsPage.accessibility.checkForA11yViolations('navmenuitem-default');
    });

    /**
     * RENDERING AND VISUAL STATES
     */
    await test.step('rendering and visual states', async () => {
      await test.step('render navmenuitem with label and icon', async () => {
        await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
        });

        const text = componentsPage.page.locator('mdc-text');
        const icon = componentsPage.page.locator('mdc-icon');

        await text.waitFor();
        await icon.waitFor();

        await test.step('should have correct text content', async () => {
          const textContent = await text.textContent();
          expect(textContent?.trim()).toBe(primaryLabel);
        });

        await test.step('should have correct icon', async () => {
          const iconNameAttr = await icon.getAttribute('name');
          expect(iconNameAttr).toBe(iconName);
        });
      });

      await test.step('render active navmenuitem', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          active: true,
        });

        await test.step('should have active attribute', async () => {
          await expect(navmenuitem).toHaveAttribute('active');
        });

        await test.step('should modify icon to filled variant when active', async () => {
          const icon = componentsPage.page.locator('mdc-icon');
          const iconNameAttr = await icon.getAttribute('name');
          expect(iconNameAttr).toBe('placeholder-filled');
        });
      });

      await test.step('render navmenuitem without label (collapsed)', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': false,
          'aria-label': primaryLabel,
        });

        const text = componentsPage.page.locator('mdc-text');
        const icon = componentsPage.page.locator('mdc-icon');

        await icon.waitFor();

        await test.step('should not show text label', async () => {
          await expect(text).not.toBeVisible();
        });

        await test.step('should have aria-label for accessibility', async () => {
          await expect(navmenuitem).toHaveAttribute('aria-label', primaryLabel);
        });
      });

      await test.step('render navmenuitem with badges', async () => {
        await test.step('render with dot badge', async () => {
          await setup({
            componentsPage,
            label: primaryLabel,
            'icon-name': iconName,
            'nav-id': navId,
            'show-label': true,
            'badge-type': 'dot',
          });

          const badge = componentsPage.page.locator('mdc-badge');
          await badge.waitFor();

          const badgeType = await badge.getAttribute('type');
          expect(badgeType).toBe('dot');
        });

        await test.step('render with counter badge', async () => {
          await setup({
            componentsPage,
            label: primaryLabel,
            'icon-name': iconName,
            'nav-id': navId,
            'show-label': true,
            'badge-type': 'counter',
            counter: 10,
          });

          const badge = componentsPage.page.locator('mdc-badge');
          await badge.waitFor();

          const badgeType = await badge.getAttribute('type');
          const counter = await badge.getAttribute('counter');
          expect(badgeType).toBe('counter');
          expect(counter).toBe('10');
        });
      });

      await test.step('render disabled navmenuitem', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          disabled: true,
        });

        await test.step('should have disabled attribute', async () => {
          await expect(navmenuitem).toHaveAttribute('disabled');
        });

        await test.step('should have aria-disabled', async () => {
          await expect(navmenuitem).toHaveAttribute('aria-disabled', 'true');
        });
      });
    });

    /**
     * MOUSE INTERACTIONS
     */
    await test.step('mouse interactions', async () => {
      await test.step('click on normal navmenuitem', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          active: true,
        });

        const eventPromise = componentsPage.waitForEvent(navmenuitem, 'activechange');
        await navmenuitem.click();

        await eventPromise;
      });

      await test.step('click on disabled navmenuitem', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          disabled: true,
        });
        await expect(navmenuitem).toBeDisabled();
        await expect(navmenuitem).toHaveAttribute('disabled');
      });
    });

    /**
     * KEYBOARD INTERACTIONS
     */
    await test.step('keyboard interactions', async () => {
      await test.step('focus navmenuitem using Tab navigation', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
        });

        await componentsPage.actionability.pressTab();
        await expect(navmenuitem).toBeFocused();
      });

      await test.step('disabled navmenuitem keyboard behavior', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          disabled: true,
        });

        await test.step('should not be focusable', async () => {
          await componentsPage.actionability.pressTab();
          await expect(navmenuitem).not.toBeFocused();
        });
      });

      await test.step('soft-disabled navmenuitem keyboard behavior', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          'soft-disabled': true,
        });

        await test.step('should be focusable', async () => {
          await componentsPage.actionability.pressTab();
          await expect(navmenuitem).toBeFocused();
        });
      });
    });

    /**
     * ARIA AND ACCESSIBILITY ATTRIBUTES
     */
    await test.step('ARIA and accessibility attributes', async () => {
      await test.step('default ARIA attributes', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
        });

        await expect(navmenuitem).toHaveAttribute('role', 'menuitem');
        await expect(navmenuitem).toHaveAttribute('tabindex', '0');
      });

      await test.step('disabled state ARIA attributes', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          disabled: true,
        });

        await expect(navmenuitem).toHaveAttribute('aria-disabled', 'true');
      });

      await test.step('soft-disabled state ARIA attributes', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          'soft-disabled': true,
        });

        await expect(navmenuitem).toHaveAttribute('aria-disabled', 'true');
        await expect(navmenuitem).toHaveAttribute('tabindex', '0');
      });

      await test.step('collapsed state with aria-label', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': false,
          'aria-label': primaryLabel,
        });

        await expect(navmenuitem).toHaveAttribute('aria-label', primaryLabel);
      });
    });

    /**
     * EVENT HANDLING
     */
    await test.step('event handling', async () => {
      await test.step('activechange event details', async () => {
        const navmenuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          active: true,
        });

        // Use evaluate to capture event details since waitForEvent doesn't return event data
        let eventDetails: any = null;
        await navmenuitem.evaluate((element: HTMLElement) => {
          element.addEventListener('activechange', (e: any) => {
            (window as any).eventDetails = e.detail;
          });
        });

        await navmenuitem.click();

        eventDetails = await componentsPage.page.evaluate(() => (window as any).eventDetails);
        expect(eventDetails).toBeTruthy();
        expect(eventDetails.navId).toBe(navId);
        expect(eventDetails.active).toBe(true);
      });
    });

    /**
     * BADGE FUNCTIONALITY
     */
    await test.step('badge functionality', async () => {
      await test.step('badge visibility based on show-label state', async () => {
        await test.step('badge in expanded state', async () => {
          await setup({
            componentsPage,
            label: primaryLabel,
            'icon-name': iconName,
            'nav-id': navId,
            'show-label': true,
            'badge-type': 'counter',
            counter: 5,
          });

          const badge = componentsPage.page.locator('mdc-badge');
          await badge.waitFor();
          await expect(badge).toBeVisible();
        });

        await test.step('badge in collapsed state', async () => {
          await setup({
            componentsPage,
            label: primaryLabel,
            'icon-name': iconName,
            'nav-id': navId,
            'show-label': false,
            'badge-type': 'counter',
            counter: 5,
          });

          const badge = componentsPage.page.locator('mdc-badge');
          await badge.waitFor();
          await expect(badge).toBeVisible();
        });
      });

      await test.step('counter badge max-counter behavior', async () => {
        await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'nav-id': navId,
          'show-label': true,
          'badge-type': 'counter',
          counter: 150,
          'max-counter': 99,
        });

        const badge = componentsPage.page.locator('mdc-badge');
        await badge.waitFor();

        const maxCounter = await badge.getAttribute('max-counter');
        expect(maxCounter).toBe('99');
      });
    });
  });
});
// End AI-Assisted
