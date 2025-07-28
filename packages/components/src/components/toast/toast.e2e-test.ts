/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { TOAST_VARIANT } from './toast.constants';

type ToastSetupOptions = {
  variant?: string;
  ariaLabel?: string;
  headerText?: string;
  headerTagName?: string;
  closeButtonAriaLabel?: string;
  showMoreText?: string;
  showLessText?: string;
  rtl?: boolean;
  children?: string;
  componentsPage: any
};

const SHOW_MORE_TEXT = 'Show more';
const SHOW_LESS_TEXT = 'Show less';

const setup = async (options: ToastSetupOptions) => {
  const {
    componentsPage,
    variant,
    ariaLabel,
    headerText,
    headerTagName,
    showMoreText,
    showLessText,
    closeButtonAriaLabel,
    rtl = false,
    children,
  } = options;
  const attrs = [
    variant ? `variant="${variant}"` : '',
    ariaLabel ? `aria-label="${ariaLabel}"` : '',
    headerText ? `header-text="${headerText}"` : '',
    headerTagName ? `header-tag-name="${headerTagName}"` : '',
    showMoreText ? `show-more-text="${showMoreText}"` : '',
    showLessText ? `show-less-text="${showLessText}"` : '',
    closeButtonAriaLabel ? `close-button-aria-label="${closeButtonAriaLabel}"` : '',
  ].filter(Boolean).join(' ');
  const dir = rtl ? 'dir="rtl"' : '';
  await componentsPage.mount({
    html: `
      <div ${dir}>
        <mdc-toast ${attrs}>
          ${children}
        </mdc-toast>
      </div>
    `,
    clearDocument: true,
  });
  const toast = componentsPage.page.locator('mdc-toast');
  await toast.waitFor();
  return toast;
};

test.describe('Toast Feature Scenarios', () => {
  test('mdc-toast', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    // Skip visual regression tests for mobile devices
    const isDesktopDevice = () => {
      const deviceName = test.info().project.name;
      return ['chrome', 'firefox', 'msedge', 'webkit', 'tablet chrome', 'tablet safari'].includes(deviceName);
    };

    await test.step('visual-regression', async () => {
      if (!isDesktopDevice()) {
        test.skip();
      }
      const toastSheet = new StickerSheet(componentsPage, 'mdc-toast');
      const COMMON_ATTRS = {
        'close-button-aria-label': 'Close toast',
        'header-tag-name': 'span',
      };

      // Default custom (with less content)
      toastSheet.setAttributes({
        ...COMMON_ATTRS,
        'header-text': 'Default Title',
        'show-more-text': SHOW_MORE_TEXT,
        'show-less-text': SHOW_LESS_TEXT,
      });

      toastSheet.setChildren(`
        <mdc-icon slot="content-prefix" name="placeholder-bold" size="1.5"></mdc-icon>
        <mdc-text slot="toast-body-normal" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<mdc-link>Link to page</mdc-link></mdc-text>
        <mdc-text slot="toast-body-detailed" tagname="span">More detailed content goes here.</mdc-text>
        <mdc-button slot="footer-button-secondary">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary">Confirm</mdc-button>
      `);
      await toastSheet.createMarkupWithCombination({ variant: [TOAST_VARIANT.CUSTOM] });

      // Variant icons (success, warning, error)
      toastSheet.setAttributes({
        ...COMMON_ATTRS,
        'header-text': 'Action Status',
      });
      toastSheet.setChildren(`
        <mdc-text slot="toast-body-normal" tagname="span">Status message</mdc-text>
        <mdc-button slot="footer-button-secondary">Dismiss</mdc-button>
        <mdc-button slot="footer-button-primary">Retry</mdc-button>
      `);
      await toastSheet.createMarkupWithCombination({ variant: [TOAST_VARIANT.SUCCESS, TOAST_VARIANT.WARNING, TOAST_VARIANT.ERROR] });

      // Avatar prefix
      const src = 'https://picsum.photos/id/63/256';
      toastSheet.setAttributes({
        ...COMMON_ATTRS,
        'header-text': '',
      });
      toastSheet.setChildren(`
        <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size=24></mdc-avatar>
        <mdc-text slot="toast-body-normal" tagname="span"><b>Username</b> joined the session.</mdc-text>
      `);
      await toastSheet.createMarkupWithCombination({ variant: [TOAST_VARIANT.CUSTOM] });

      // Spinner prefix
      toastSheet.setAttributes({
        ...COMMON_ATTRS,
        'header-text': 'Connecting',
      });
      toastSheet.setChildren(`<mdc-spinner slot="content-prefix" size="small"></mdc-spinner>`);
      await toastSheet.createMarkupWithCombination({ variant: [TOAST_VARIANT.CUSTOM] });

      await toastSheet.mountStickerSheet();
      const container = toastSheet.getWrapperContainer();
      await test.step('matches screenshot of element', async () => {
        const avatarComp = await container.locator('mdc-avatar[src]');
        const image = avatarComp.locator('img');
        await image.waitFor();
        await expect(avatarComp).toHaveAttribute('src', src);
        await expect(image).toHaveAttribute('src', src);
        await componentsPage.visualRegression.takeScreenshot('mdc-toast', {
          element: container,
          animations: 'disabled',
        });
      });

      await test.step('accessibility', async () => {
        await componentsPage.accessibility.checkForA11yViolations('toast-default');
      });
    });

    await test.step('Rule: ✅ Attributes', async () => {
      await test.step('Toast sets default attributes', async () => {
        const toast = await setup({ componentsPage, headerText: 'Action Completed' });
        await expect(toast).toHaveAttribute('header-tag-name', 'h2');
        const header = componentsPage.page.locator('mdc-toast [part="toast-header"]');
        await expect(header).toHaveAttribute('tagname', 'h2');
      });

      await test.step('Toast sets the header-text attribute', async () => {
        const toast = await setup({ componentsPage, headerText: 'Action Completed' });
        await expect(toast).toHaveAttribute('header-text', 'Action Completed');
        const header = componentsPage.page.locator('mdc-toast [part="toast-header"]');
        await expect(header).toHaveText('Action Completed');
      });

      await test.step('Toast accepts allowed variant values', async () => {
        const variants = [TOAST_VARIANT.SUCCESS, TOAST_VARIANT.WARNING, TOAST_VARIANT.ERROR];
        const prefixIcon = componentsPage.page.locator('mdc-toast [part="prefix-icon"]');
        for (const variant of variants) {
          const toast = await setup({ componentsPage, variant, children: `<mdc-text tagname="span" slot="toast-body-normal">${variant}</mdc-text>`});
          await expect(toast).toHaveAttribute('variant', variant);
          await expect(prefixIcon).toBeVisible();
        }

        // custom variant: should show custom prefix content
        const customVariant = TOAST_VARIANT.CUSTOM;
        const toast = await setup({
          componentsPage,
          variant: customVariant,
          children: `<mdc-icon name="chat-bold" size="1" slot="content-prefix"></mdc-icon><mdc-text tagname="span" slot="toast-body-normal">${customVariant}</mdc-text>`
        });
        await expect(toast).toHaveAttribute('variant', customVariant);
        await expect(toast.locator('[slot="content-prefix"]')).toBeVisible();
      });

      await test.step('Toast sets the aria-label attribute', async () => {
        const ariaLabel = 'Toast notification';
        const toast = await setup({ componentsPage, ariaLabel });
        await expect(toast).toHaveAttribute('aria-label', ariaLabel);
      });

      await test.step('Toast sets the close-button-aria-label attribute', async () => {
        const closeButtonAriaLabel = 'Dismiss notification';
        await setup({ componentsPage, closeButtonAriaLabel });
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await expect(closeBtn).toHaveAttribute('aria-label', closeButtonAriaLabel);
      });

      await test.step('Toast sets the header-tag-name attribute', async () => {
        const toast = await setup({ componentsPage, headerText: 'Action Completed', headerTagName: 'span' });
        await expect(toast).toHaveAttribute('header-tag-name', 'span');
        const header = componentsPage.page.locator('mdc-toast [part="toast-header"]');
        await expect(header).toHaveAttribute('tagname', 'span');
      });

      await test.step('Toast sets showMoreText and showLessText attributes', async () => {
        const toast = await setup({ componentsPage, showMoreText: SHOW_MORE_TEXT, showLessText: SHOW_LESS_TEXT, children: `<span slot="toast-body-normal">Normal</span><p slot="toast-body-detailed">Details</p>` });
        await expect(toast).toHaveAttribute('show-more-text', SHOW_MORE_TEXT);
        await expect(toast).toHaveAttribute('show-less-text', SHOW_LESS_TEXT);
        const showMoreBtn = componentsPage.page.locator('mdc-linkbutton[part="footer-button-toggle"]');
        await expect(showMoreBtn).toHaveText(SHOW_MORE_TEXT);
        await expect(showMoreBtn).toBeVisible();
      });
    });

    await test.step('Rule: ✅ Rendering and Visual States', async () => {
      await test.step('Toast renders only normal content', async () => {
        const body = 'Your files are now available in the dashboard';
        const toast = await setup({ componentsPage, children: `<mdc-text tagname="span" slot="toast-body-normal">${body}</mdc-text>` });
        const bodySlot = toast.locator('mdc-text[slot="toast-body-normal"]');
        await expect(bodySlot).toContainText(body);
        await expect(toast.locator('mdc-linkbutton[part="footer-button-toggle"]')).not.toBeVisible();
      });

      await test.step('Toast renders normal and detailed body content', async () => {
        const body = 'Your files are now available in the dashboard';
        const detailedBody = 'This is detailed content.';
        const toast = await setup({ componentsPage, showMoreText: SHOW_MORE_TEXT, showLessText: SHOW_LESS_TEXT, children: `<mdc-text tagname="span" slot="toast-body-normal">${body}</mdc-text><p slot="toast-body-detailed">${detailedBody}</p>` });
        const bodySlot = toast.locator('mdc-text[slot="toast-body-normal"]');
        await expect(bodySlot).toContainText(body);
        const detailedSlot = toast.locator('p[slot="toast-body-detailed"]');
        await expect(detailedSlot).toHaveText(detailedBody);
        await expect(detailedSlot).not.toBeVisible();
        const showMoreBtn = toast.locator('mdc-linkbutton[part="footer-button-toggle"]');
        await expect(showMoreBtn).toBeVisible();
        await expect(showMoreBtn).toContainText(SHOW_MORE_TEXT);
      });
    });

    await test.step('Rule: ✅ Mouse Interactions', async () => {
      await test.step('User manually dismisses the toast', async () => {
        const toast = await setup({ componentsPage, headerText: 'Action Completed', children: '<mdc-text tagname="span" slot="toast-body-normal">Your file has been successfully uploaded</mdc-text>' });
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await closeBtn.waitFor();
        const closePromise = componentsPage.waitForEvent(toast, 'close');
        await closeBtn.click();
        await closePromise;
      });

      await test.step('User expands/collapses toast body using mouse', async () => {
        const detailedBody = 'This is detailed content.';
        const normalBody = 'This is normal content.';
        const toast = await setup({ 
          componentsPage, 
          headerText: 'Toast Title',
          headerTagName: 'span',
          closeButtonAriaLabel: 'Close toast',
          showMoreText: SHOW_MORE_TEXT,
          showLessText: SHOW_LESS_TEXT,
          children: `<mdc-text tagname="span" slot="toast-body-normal">${normalBody}</mdc-text><mdc-text tagname="span" slot="toast-body-detailed">${detailedBody}</mdc-text>`
        });
        const showMoreBtn = await toast.locator('mdc-linkbutton[part="footer-button-toggle"]');
        await expect(showMoreBtn.locator('mdc-icon[name="arrow-down-bold"]')).toBeVisible();
        if (isDesktopDevice()) {
          await componentsPage.visualRegression.takeScreenshot('mdc-toast', {
            source: 'userflow',
            fileNameSuffix: 'collapsed-view',
          });
          await componentsPage.accessibility.checkForA11yViolations(`toast-collapsed-view`);
        }
        await showMoreBtn.click(); // expand
        const detailedSlot = await toast.locator('mdc-text[slot="toast-body-detailed"]');
        await expect(detailedSlot).toBeVisible();
        await expect(showMoreBtn).toContainText(SHOW_LESS_TEXT);
        await expect(showMoreBtn.locator('mdc-icon[name="arrow-up-bold"]')).toBeVisible();
        if (isDesktopDevice()) {
          await componentsPage.visualRegression.takeScreenshot('mdc-toast', {
            source: 'userflow',
            fileNameSuffix: 'expanded-view',
          });
          await componentsPage.accessibility.checkForA11yViolations(`toast-expanded-view`);
        }
        await showMoreBtn.click(); // collapse
        await expect(detailedSlot).not.toBeVisible();
        await expect(showMoreBtn).toContainText(SHOW_MORE_TEXT);
        await expect(showMoreBtn.locator('mdc-icon[name="arrow-down-bold"]')).toBeVisible();
        if (isDesktopDevice()) {
          await componentsPage.visualRegression.takeScreenshot('mdc-toast', {
            source: 'userflow',
            fileNameSuffix: 'collapsed-view',
          });
        }
      });
    });

    await test.step('Rule: ✅ Keyboard Interactions', async () => {
      await test.step('User navigates toast using Tab and Shift+Tab', async () => {
        await setup({
          componentsPage,
          showMoreText: SHOW_MORE_TEXT, 
          showLessText: SHOW_LESS_TEXT,
          children: `<mdc-text tagname="span" slot="toast-body-normal">Normal</mdc-text><mdc-text tagname="span" slot="toast-body-detailed">Detailed</mdc-text><mdc-button slot="footer-button-primary">Primary</mdc-button><mdc-button slot="footer-button-secondary">Secondary</mdc-button>`
        });
        await componentsPage.actionability.pressAndCheckFocus('Tab', [
          componentsPage.page.locator('mdc-toast [part="toast-close-btn"]'),
          componentsPage.page.locator('mdc-toast [part="footer-button-toggle"]'),
          componentsPage.page.locator('mdc-button[slot="footer-button-secondary"]'),
          componentsPage.page.locator('mdc-button[slot="footer-button-primary"]'),
        ]);
        await componentsPage.actionability.pressAndCheckFocus('Shift+Tab', [
          componentsPage.page.locator('mdc-button[slot="footer-button-secondary"]'),
          componentsPage.page.locator('mdc-toast [part="footer-button-toggle"]'),
          componentsPage.page.locator('mdc-toast [part="toast-close-btn"]'),
        ]);
      });

      await test.step('User closes toast with keyboard', async () => {
        const toast = await setup({ componentsPage, headerText: 'Action Completed', children: '<mdc-text tagname="span" slot="toast-body-normal">Your file has been successfully uploaded</mdc-text>' });
        await componentsPage.actionability.pressTab();
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await expect(closeBtn).toBeFocused();
        const closePromise = componentsPage.waitForEvent(toast, 'close');
        await closeBtn.press('Enter');
        await closePromise;
      });

      await test.step('User expands/collapses toast body with keyboard', async () => {
        const toast = await setup({
          componentsPage,
          showMoreText: SHOW_MORE_TEXT,
          showLessText: SHOW_LESS_TEXT,
          children: `<mdc-text tagname="span" slot="toast-body-normal">Normal</mdc-text><mdc-text tagname="span" slot="toast-body-detailed">This is detailed content.</mdc-text>`
        });
        const showMoreBtn = toast.locator('mdc-linkbutton[part="footer-button-toggle"]');
        await showMoreBtn.focus();
        await showMoreBtn.press('Enter'); // expand
        const detailedSlot = toast.locator('mdc-text[slot="toast-body-detailed"]');
        await expect(detailedSlot).toBeVisible();
        await expect(showMoreBtn).toContainText(SHOW_LESS_TEXT);
        await expect(showMoreBtn).toBeFocused();
        await showMoreBtn.press('Enter'); // collapse
        await expect(detailedSlot).not.toBeVisible();
        await expect(showMoreBtn).toContainText(SHOW_MORE_TEXT);
        await expect(showMoreBtn).toBeFocused();
      });
    });
  });
});
