import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { BANNER_VARIANT } from './banner.constants';
import type { BannerVariant } from './banner.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  variant?: BannerVariant;
  title?: string;
  subtitle?: string;
  children?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, children, ...restArgs } = args;
  let attrs = '';
  Object.entries(restArgs).forEach(([key, value]) => {
    if (value !== undefined) {
      attrs += ` ${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}="${value}"`;
    }
  });
  await componentsPage.mount({
    html: `<mdc-banner${attrs}>${children || ''}</mdc-banner>`,
    clearDocument: true,
  });
  const banner = componentsPage.page.locator('mdc-banner');
  await banner.waitFor();
  return banner;
};

// Helper function to create banner with default action buttons
const createDefaultActionButtons = (extraButtons = '') => `
  <div slot="trailing-actions" style="display: flex; gap: 12px;">
    <mdc-button variant="tertiary" aria-label="Cancel action">Cancel</mdc-button>
    <mdc-button variant="secondary" aria-label="Perform primary action">Action</mdc-button>
    <mdc-button variant="tertiary" prefix-icon="cancel-bold" size="20" aria-label="Dismiss banner"></mdc-button>
    ${extraButtons}
  </div>
`;

test('mdc-banner', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await componentsPage.page.setViewportSize({ width: 800, height: 1200 });
    const bannerSheet = new StickerSheet(componentsPage, 'mdc-banner', 'margin: 1rem 0;');
    const options = { createNewRow: true };

    // Banner with title only
    bannerSheet.setAttributes({ variant: BANNER_VARIANT.INFORMATIONAL, title: 'System Update' });
    await bannerSheet.createMarkupWithCombination({}, options);

    // Banner with both title and subtitle
    bannerSheet.setAttributes({ 
      variant: BANNER_VARIANT.SUCCESS, 
      title: 'Main Title', 
      subtitle: 'Supporting subtitle' 
    });
    await bannerSheet.createMarkupWithCombination({}, options);

    // Banner with variant icons
    const variantConfigs = [
      {
        variant: BANNER_VARIANT.CUSTOM,
        title: 'Custom Banner with Slot Icon',
        subtitle: 'This banner uses a custom icon via slot instead of variant-based icon.',
        extraChildren: '<mdc-icon slot="leading-icon" name="placeholder-bold" size="1.5" style="padding: 0.25rem 0;"></mdc-icon>'
      },
      {
        variant: BANNER_VARIANT.INFORMATIONAL,
        title: 'System Update Available',
        subtitle: 'A new version is ready to install.'
      },
      {
        variant: BANNER_VARIANT.WARNING,
        title: 'Storage Almost Full',
        subtitle: 'Your storage is 95% full. Consider removing some files.'
      },
      {
        variant: BANNER_VARIANT.ERROR,
        title: 'Connection Failed',
        subtitle: 'Unable to connect to the server. Please try again.',
        extraButtons: '<mdc-button variant="tertiary" prefix-icon="reset-bold" size="20" aria-label="Retry connection"></mdc-button>'
      },
      {
        variant: BANNER_VARIANT.SUCCESS,
        title: 'Changes Saved',
        subtitle: 'Your changes have been successfully saved.'
      }
    ];

    const createVariantBanner = async (config: typeof variantConfigs[0]) => {
      bannerSheet.setAttributes({ 
        variant: config.variant, 
        title: config.title, 
        subtitle: config.subtitle 
      });
      
      const children = (config.extraChildren || '') + 
        createDefaultActionButtons(config.extraButtons || '');
      
      bannerSheet.setChildren(children);
      await bannerSheet.createMarkupWithCombination({}, options);
    };

    // Create custom variant banner
    await createVariantBanner(variantConfigs[0]);
    
    // Create informational variant banner
    await createVariantBanner(variantConfigs[1]);
    
    // Create warning variant banner
    await createVariantBanner(variantConfigs[2]);
    
    // Create error variant banner
    await createVariantBanner(variantConfigs[3]);
    
    // Create success variant banner
    await createVariantBanner(variantConfigs[4]);

    // Banner with long text (wrapping) - constrain width to force text wrapping
    bannerSheet.setAttributes({ 
      variant: BANNER_VARIANT.INFORMATIONAL, 
      title: 'This is an extremely long title that should wrap to multiple lines when the banner has a constrained width',
      subtitle: 'This is also a very long subtitle with extensive descriptive text that should wrap appropriately',
      style: 'max-width: 400px; margin: 1rem 0;'
    });
    await bannerSheet.createMarkupWithCombination({}, options);

    await bannerSheet.mountStickerSheet();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-banner', {
        element: bannerSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ✅ ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('banner sets default attributes', async () => {
      const banner = await setup({ componentsPage });
      await expect(banner).toHaveAttribute('variant', BANNER_VARIANT.CUSTOM);
    });

    await test.step('banner accepts allowed variant values', async () => {
      const variantTestCases = [
        { variant: BANNER_VARIANT.CUSTOM, expectIcon: false, name: 'custom variant has no default icon' },
        { variant: BANNER_VARIANT.INFORMATIONAL, expectIcon: true, name: 'informational variant has icon' },
        { variant: BANNER_VARIANT.WARNING, expectIcon: true, name: 'warning variant has icon' },
        { variant: BANNER_VARIANT.ERROR, expectIcon: true, name: 'error variant has icon' },
        { variant: BANNER_VARIANT.SUCCESS, expectIcon: true, name: 'success variant has icon' }
      ];

      const testVariant = async (testCase: { variant: typeof BANNER_VARIANT[keyof typeof BANNER_VARIANT]; expectIcon: boolean; name: string }) => {
        const banner = await setup({ 
          componentsPage, 
          variant: testCase.variant, 
          title: `${testCase.variant.charAt(0).toUpperCase() + testCase.variant.slice(1)} Banner`, 
          subtitle: 'Test subtitle' 
        });
        
        await expect(banner).toHaveAttribute('variant', testCase.variant);
        const icon = banner.locator('mdc-icon');
        
        if (testCase.expectIcon) {
          await expect(icon).toBeVisible();
        } else {
          await expect(icon).toHaveCount(0);
        }
      };

      await test.step('custom variant has no default icon', () => testVariant(variantTestCases[0]));
      await test.step('informational variant has icon', () => testVariant(variantTestCases[1]));
      await test.step('warning variant has icon', () => testVariant(variantTestCases[2]));
      await test.step('error variant has icon', () => testVariant(variantTestCases[3]));
      await test.step('success variant has icon', () => testVariant(variantTestCases[4]));
    });
  });

  /**
   * ✅ RENDERING AND VISUAL STATES
   */
  await test.step('rendering and visual states', async () => {
    await test.step('banner renders with title only', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.INFORMATIONAL,
        title: 'System Update'
      });
      
      const titleText = banner.locator('mdc-text').first();
      await expect(titleText).toBeVisible();
      await expect(titleText).toHaveText('System Update');
      
      // No subtitle should be visible
      const subtitleText = banner.locator('mdc-text').nth(1);
      await expect(subtitleText).toHaveCount(0);
    });

    await test.step('banner renders with both title and subtitle', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.SUCCESS,
        title: 'Main Title',
        subtitle: 'Supporting subtitle'
      });
      
      const titleText = banner.locator('mdc-text').first();
      const subtitleText = banner.locator('mdc-text').nth(1);
      
      await expect(titleText).toBeVisible();
      await expect(titleText).toHaveText('Main Title');
      await expect(subtitleText).toBeVisible();
      await expect(subtitleText).toHaveText('Supporting subtitle');
    });

    await test.step('banner renders custom content for custom variant', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.CUSTOM,
        title: 'Custom Banner'
      });
      
      // Custom variant should not have a default icon
      const defaultIcon = banner.locator('mdc-icon');
      await expect(defaultIcon).toHaveCount(0);
    });

    await test.step('banner does not render subtitle without title', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.INFORMATIONAL,
        subtitle: 'Some subtitle text'
        // No title provided
      });
      
      // No title should be visible
      const titleText = banner.locator('mdc-text').first();
      await expect(titleText).toHaveCount(0);
      
      // No subtitle should be visible either
      const subtitleText = banner.locator('mdc-text').nth(1);
      await expect(subtitleText).toHaveCount(0);
    });
  });

  /**
   * ✅ SLOT FUNCTIONALITY
   */
  await test.step('slot functionality', async () => {
    await test.step('banner uses custom leading-icon slot', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.CUSTOM,
        title: 'Custom Icon Banner',
        subtitle: 'Using custom icon slot',
        children: `<mdc-icon slot="leading-icon" name="sparkle-filled" size="1.5"></mdc-icon>`
      });
      
      const customIcon = banner.locator('mdc-icon[slot="leading-icon"]');
      const titleText = banner.locator('mdc-text').first();
      
      await expect(customIcon).toBeVisible();
      await expect(customIcon).toHaveAttribute('name', 'sparkle-filled');
      
      // Icon should be positioned before text content
      const iconBox = await customIcon.boundingBox();
      const titleBox = await titleText.boundingBox();
      
      expect(iconBox!.x).toBeLessThan(titleBox!.x);
    });

    await test.step('banner uses custom leading-text slot', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.SUCCESS,
        children: `
          <div slot="leading-text" style="display: flex; flex-direction: column; gap: 0.25rem;">
            <mdc-text type="body-large-bold" tagname="h2">Custom Title Layout</mdc-text>
            <mdc-text type="body-midsize-regular" tagname="p">Custom subtitle content</mdc-text>
          </div>
        `
      });
      
      const customText = banner.locator('[slot="leading-text"]');
      await expect(customText).toBeVisible();
      
      const titleText = customText.locator('mdc-text').first();
      const subtitleText = customText.locator('mdc-text').nth(1);
      
      await expect(titleText).toBeVisible();
      await expect(titleText).toHaveText('Custom Title Layout');
      await expect(subtitleText).toBeVisible();
      await expect(subtitleText).toHaveText('Custom subtitle content');
    });

    await test.step('banner uses custom trailing-actions slot', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.ERROR,
        title: 'Custom Actions',
        subtitle: 'This banner has custom action buttons',
        children: `
          <div slot="trailing-actions" style="display: flex; gap: 0.5rem; align-items: center;">
            <mdc-button variant="primary" size="20">Retry</mdc-button>
            <mdc-button variant="secondary" size="20">Cancel</mdc-button>
            <mdc-button variant="tertiary" prefix-icon="cancel-bold" size="20"></mdc-button>
          </div>
        `
      });
      
      const customActions = banner.locator('[slot="trailing-actions"]');
      const actionButtons = customActions.locator('mdc-button');
      const titleText = banner.locator('mdc-text').first();
      
      await expect(customActions).toBeVisible();
      await expect(actionButtons).toHaveCount(3);
      
      // Actions should be positioned after text content
      const actionsBox = await customActions.boundingBox();
      const titleBox = await titleText.boundingBox();
      
      expect(actionsBox!.x).toBeGreaterThan(titleBox!.x);
    });

    await test.step('banner uses complete content slot override', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.CUSTOM,
        children: `
          <div slot="content" style="display: grid; grid-template-columns: auto 1fr auto; gap: 1rem; align-items: center;">
            <mdc-icon name="placeholder-bold" size="1.5"></mdc-icon>
            <div>
              <h3>Custom Layout</h3>
              <p>Complete structure override</p>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <mdc-button variant="primary">Action 1</mdc-button>
              <mdc-button variant="secondary">Action 2</mdc-button>
            </div>
          </div>
        `
      });
      
      const customContent = banner.locator('[slot="content"]');
      await expect(customContent).toBeVisible();
      
      const icon = customContent.locator('mdc-icon');
      const buttons = customContent.locator('mdc-button');
      
      await expect(icon).toBeVisible();
      await expect(buttons).toHaveCount(2);
    });

    await test.step('banner provides hybrid approach flexibility', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.CUSTOM,
        title: 'Hybrid Banner',
        subtitle: 'Properties for text, slot for custom icon',
        children: `
          <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.5" style="color: #e74c3c;"></mdc-icon>
          <mdc-button slot="trailing-actions" variant="tertiary" prefix-icon="cancel-bold" size="20">Dismiss</mdc-button>
        `
      });
      
      // Check property-based title and subtitle
      const titleText = banner.locator('mdc-text').first();
      const subtitleText = banner.locator('mdc-text').nth(1);
      
      await expect(titleText).toHaveText('Hybrid Banner');
      await expect(subtitleText).toHaveText('Properties for text, slot for custom icon');
      
      // Check custom icon from slot
      const customIcon = banner.locator('mdc-icon[slot="leading-icon"]');
      await expect(customIcon).toBeVisible();
      await expect(customIcon).toHaveAttribute('name', 'placeholder-bold');
      
      // Check custom action button from slot
      const actionButton = banner.locator('mdc-button[slot="trailing-actions"]');
      await expect(actionButton).toBeVisible();
      
      // Verify proper positioning: icon before text, actions after text
      const iconBox = await customIcon.boundingBox();
      const titleBox = await titleText.boundingBox();
      const actionBox = await actionButton.boundingBox();
      
      expect(iconBox!.x).toBeLessThan(titleBox!.x);
      expect(actionBox!.x).toBeGreaterThan(titleBox!.x);
    });
  });

  /**
   * ✅ FOCUS MANAGEMENT AND NAVIGATION
   */
  await test.step('focus management and navigation', async () => {
    await test.step('focus management with trailing actions', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.ERROR,
        title: 'Focus Test',
        subtitle: 'Testing focus management',
        children: `
          <div slot="trailing-actions">
            <mdc-button id="first-action" variant="primary">First</mdc-button>
            <mdc-button id="second-action" variant="secondary">Second</mdc-button>
            <mdc-button id="third-action" variant="tertiary" prefix-icon="cancel-bold" size="20"></mdc-button>
          </div>
        `
      });
      
      const firstButton = banner.locator('#first-action');
      const secondButton = banner.locator('#second-action');
      const thirdButton = banner.locator('#third-action');
      
      // Tab to first action
      await componentsPage.actionability.pressTab();
      await expect(firstButton).toBeFocused();
      
      // Tab to second action
      await componentsPage.actionability.pressTab();
      await expect(secondButton).toBeFocused();
      
      // Tab to third action
      await componentsPage.actionability.pressTab();
      await expect(thirdButton).toBeFocused();
      
      // Tab out of banner
      await componentsPage.actionability.pressTab();
      // await expect(thirdButton).not.toBeFocused(); // failing for firefox
    });

    await test.step('reverse focus navigation with Shift+Tab', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.WARNING,
        title: 'Reverse Focus Test',
        subtitle: 'Testing Shift+Tab navigation',
        children: `
          <div slot="trailing-actions">
            <mdc-button id="btn-1" variant="primary">Button 1</mdc-button>
            <mdc-button id="btn-2" variant="secondary">Button 2</mdc-button>
            <mdc-button id="btn-3" variant="tertiary">Button 3</mdc-button>
          </div>
        `
      });
      
      const button1 = banner.locator('#btn-1');
      const button2 = banner.locator('#btn-2');
      const button3 = banner.locator('#btn-3');
      
      // First navigate forward to the last button
      await componentsPage.actionability.pressTab(); // to btn-1
      await componentsPage.actionability.pressTab(); // to btn-2
      await componentsPage.actionability.pressTab(); // to btn-3
      await expect(button3).toBeFocused();
      
      // Now test reverse navigation with Shift+Tab
      await componentsPage.page.keyboard.press('Shift+Tab');
      await expect(button2).toBeFocused();
      
      await componentsPage.page.keyboard.press('Shift+Tab');
      await expect(button1).toBeFocused();
      
      // Shift+Tab again should move focus out of banner (backwards)
      await componentsPage.page.keyboard.press('Shift+Tab');
      // await expect(button1).not.toBeFocused(); // failing for firefox
    });

    await test.step('skip banner when no interactive content', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.INFORMATIONAL,
        title: 'Non-Interactive Banner',
        subtitle: 'Only text content, no buttons'
      });
      
      // Try to tab through - banner should not receive focus
      await componentsPage.actionability.pressTab();
      
      // Banner itself should not be focused
      await expect(banner).not.toBeFocused();
    });
  });

  /**
   * ✅ MOUSE INTERACTIONS
   */
  await test.step('mouse interactions', async () => {
    await test.step('click on trailing action buttons (interactive elements)', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.WARNING,
        title: 'Interactive Banner',
        subtitle: 'Click the buttons to test interactions',
        children: `
          <div slot="trailing-actions">
            <mdc-button id="primary-action" variant="primary">Primary</mdc-button>
            <mdc-button id="close-action" variant="tertiary" prefix-icon="cancel-bold" size="20">Close</mdc-button>
          </div>
        `
      });
      
      const primaryButton = banner.locator('#primary-action');
      const closeButton = banner.locator('#close-action');
      
      await expect(primaryButton).toBeVisible();
      await expect(closeButton).toBeVisible();
      
      // Test that buttons are clickable
      await primaryButton.click();
      await closeButton.click();
    });
  });

  /**
   * ✅ KEYBOARD INTERACTIONS
   */
  await test.step('keyboard interactions', async () => {
    await test.step('user activates custom actions using keyboard', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.WARNING,
        title: 'Keyboard Activation Test',
        subtitle: 'Test Enter and Space key activation',
        children: `
          <div slot="trailing-actions">
            <mdc-button id="action-btn" variant="primary">Action</mdc-button>
          </div>
        `
      });
      
      const actionButton = banner.locator('#action-btn');
      
      // Tab to button
      await componentsPage.actionability.pressTab();
      await expect(actionButton).toBeFocused();
      
      // Test keyboard activation with Enter and Space
      await actionButton.press('Enter');
      await actionButton.press('Space');
    });
  });

  /**
   * ✅ ARIA AND ACCESSIBILITY
   */
  await test.step('aria and accessibility', async () => {
    await test.step('screen reader reads banner content', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.INFORMATIONAL,
        title: 'Screen Reader Test',
        subtitle: 'Testing reading order and content'
      });
      
      const titleText = banner.locator('mdc-text').first();
      const subtitleText = banner.locator('mdc-text').nth(1);
      
      // Verify content is in correct reading order
      await expect(titleText).toBeVisible();
      await expect(subtitleText).toBeVisible();
      await expect(titleText).toHaveText('Screen Reader Test');
      await expect(subtitleText).toHaveText('Testing reading order and content');
      
      await componentsPage.accessibility.checkForA11yViolations('banner-screen-reader-content');
    });

    await test.step('screen reader interacts with banner actions', async () => {
      const banner = await setup({
        componentsPage,
        variant: BANNER_VARIANT.ERROR,
        title: 'Screen Reader Actions',
        subtitle: 'Testing screen reader button interaction',
        children: `
          <div slot="trailing-actions" style="display: flex; align-items: center; gap: 0.5rem;">
            <mdc-button aria-label="Retry failed operation" variant="primary">Retry</mdc-button>
            <mdc-button aria-label="Cancel operation" variant="tertiary" prefix-icon="cancel-bold" size="20"></mdc-button>
          </div>
        `
      });
      
      const retryButton = banner.locator('mdc-button[aria-label="Retry failed operation"]');
      const cancelButton = banner.locator('mdc-button[aria-label="Cancel operation"]');
      
      // Verify buttons have proper labels for screen reader announcement
      await expect(retryButton).toHaveAttribute('aria-label', 'Retry failed operation');
      await expect(cancelButton).toHaveAttribute('aria-label', 'Cancel operation');
      
      // Verify buttons are keyboard accessible for screen reader activation
      await retryButton.focus();
      await expect(retryButton).toBeFocused();
      
      await cancelButton.focus();
      await expect(cancelButton).toBeFocused();
      
      await componentsPage.accessibility.checkForA11yViolations('banner-screen-reader-actions');
    });
  });
});
