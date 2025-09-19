/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
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
  componentsPage: ComponentsPage;
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
    variant && `variant="${variant}"`,
    ariaLabel && `aria-label="${ariaLabel}"`,
    headerText && `header-text="${headerText}"`,
    headerTagName && `header-tag-name="${headerTagName}"`,
    showMoreText && `show-more-text="${showMoreText}"`,
    showLessText && `show-less-text="${showLessText}"`,
    closeButtonAriaLabel && `close-button-aria-label="${closeButtonAriaLabel}"`,
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
     *  VISUAL REGRESSION AND ACCESSIBILITY
     */
    await test.step('visual-regression', async () => {
      await componentsPage.page.setViewportSize({ width: 800, height: 800 });
      const toastSheet = new StickerSheet(componentsPage, 'mdc-toast');
      const COMMON_ATTRS = {
        'close-button-aria-label': 'Close toast',
        'header-tag-name': 'span',
      };

      // Default toast with less content
      toastSheet.setAttributes({
        ...COMMON_ATTRS,
        'header-text': 'Default Title',
        'show-more-text': SHOW_MORE_TEXT,
        'show-less-text': SHOW_LESS_TEXT,
      });
      toastSheet.setChildren(`
        <mdc-icon slot="content-prefix" name="placeholder-bold" size="1.5"></mdc-icon>
        <mdc-text slot="toast-body-normal" tagname="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <mdc-link>Link to page</mdc-link>
        </mdc-text>
        <mdc-text slot="toast-body-detailed" tagname="span">More detailed content goes here.</mdc-text>
        <mdc-button slot="footer-button-secondary">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary">Confirm</mdc-button>
      `);
      await toastSheet.createMarkupWithCombination({ variant: [TOAST_VARIANT.CUSTOM] });

      // Variant icons
      toastSheet.setAttributes({
        ...COMMON_ATTRS,
        'header-text': 'Action Status',
      });
      toastSheet.setChildren(`
        <mdc-text slot="toast-body-normal" tagname="span">Status message</mdc-text>
        <mdc-button slot="footer-button-secondary">Dismiss</mdc-button>
        <mdc-button slot="footer-button-primary">Retry</mdc-button>
      `);
      await toastSheet.createMarkupWithCombination({
        variant: [TOAST_VARIANT.SUCCESS, TOAST_VARIANT.WARNING, TOAST_VARIANT.ERROR],
      });

      // Avatar prefix
      const src = 'https://picsum.photos/id/63/256';
      toastSheet.setAttributes({ ...COMMON_ATTRS, 'header-text': '' });
      toastSheet.setChildren(`
        <mdc-avatar slot="content-prefix" src="${src}" size="24"></mdc-avatar>
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
        const avatarComp = container.locator('mdc-avatar[src]');
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

    /**
     * ATTRIBUTES
     */
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
          const toast = await setup({
            componentsPage,
            variant,
            children: `<mdc-text tagname="span" slot="toast-body-normal">${variant}</mdc-text>`,
          });
          await expect(toast).toHaveAttribute('variant', variant);
          await expect(prefixIcon).toBeVisible();
        }

        const toast = await setup({
          componentsPage,
          variant: TOAST_VARIANT.CUSTOM,
          children: `
            <mdc-icon name="chat-bold" size="1" slot="content-prefix"></mdc-icon>
            <mdc-text tagname="span" slot="toast-body-normal">${TOAST_VARIANT.CUSTOM}</mdc-text>
          `,
        });
        await expect(toast).toHaveAttribute('variant', TOAST_VARIANT.CUSTOM);
        await expect(toast.locator('[slot="content-prefix"]')).toBeVisible();
      });

      await test.step('Toast sets the aria-label attribute', async () => {
        const toast = await setup({ componentsPage, ariaLabel: 'Toast notification' });
        await expect(toast).toHaveAttribute('aria-label', 'Toast notification');
      });

      await test.step('Toast sets the close-button-aria-label attribute', async () => {
        const closeButtonAriaLabel = 'Dismiss notification';
        await setup({ componentsPage, closeButtonAriaLabel });
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await expect(closeBtn).toHaveAttribute('aria-label', closeButtonAriaLabel);
      });

      await test.step('Toast sets the header-tag-name attribute', async () => {
        const toast = await setup({
          componentsPage,
          headerText: 'Action Completed',
          headerTagName: 'span',
        });
        await expect(toast).toHaveAttribute('header-tag-name', 'span');
        const header = componentsPage.page.locator('mdc-toast [part="toast-header"]');
        await expect(header).toHaveAttribute('tagname', 'span');
      });

      await test.step('Toast sets showMoreText and showLessText attributes', async () => {
        const toast = await setup({
          componentsPage,
          showMoreText: SHOW_MORE_TEXT,
          showLessText: SHOW_LESS_TEXT,
          children: `
            <mdc-text tagname="span" slot="toast-body-normal">Normal</mdc-text>
            <mdc-text tagname="span" slot="toast-body-detailed">Details</mdc-text>
          `,
        });
        await expect(toast).toHaveAttribute('show-more-text', SHOW_MORE_TEXT);
        await expect(toast).toHaveAttribute('show-less-text', SHOW_LESS_TEXT);     
        const showMoreBtn = componentsPage.page.locator('mdc-button[part="footer-button-toggle"]');
        await expect(showMoreBtn).toHaveText(SHOW_MORE_TEXT);
      });
    });

    await test.step('Rule: ✅ Rendering and Visual States', async () => {
      await test.step('Toast renders only normal content', async () => {
        const body = 'Your files are now available in the dashboard';
        const toast = await setup({
          componentsPage,
          children: `<mdc-text tagname="span" slot="toast-body-normal">${body}</mdc-text>`,
        });

        const bodySlot = toast.locator('mdc-text[slot="toast-body-normal"]');
        await expect(bodySlot).toContainText(body);
        await expect(toast.locator('mdc-button[part="footer-button-toggle"]')).not.toBeVisible();
      });

      await test.step('Toast renders normal and detailed body content', async () => {
        const normalBody = 'Your files are now available in the dashboard';
        const detailedBody = 'This is detailed content.';

        const toast = await setup({
          componentsPage,
          showMoreText: SHOW_MORE_TEXT,
          showLessText: SHOW_LESS_TEXT,
          children: `
            <mdc-text tagname="span" slot="toast-body-normal">${normalBody}</mdc-text>
            <mdc-text tagname="span" slot="toast-body-detailed">${detailedBody}</mdc-text>
          `,
        });

        const bodySlot = toast.locator('mdc-text[slot="toast-body-normal"]');
        const detailedSlot = toast.locator('mdc-text[slot="toast-body-detailed"]');
        const showMoreBtn = toast.locator('mdc-button[part="footer-button-toggle"]');

        await expect(bodySlot).toContainText(normalBody);
        await expect(detailedSlot).toHaveText(detailedBody);
        await expect(detailedSlot).not.toBeVisible();
        await expect(showMoreBtn).toBeVisible();
        await expect(showMoreBtn).toContainText(SHOW_MORE_TEXT);
      });
    });

    await test.step('Rule: ✅ Mouse Interactions', async () => {
      await test.step('User manually dismisses the toast', async () => {
        const toast = await setup({
          componentsPage,
          headerText: 'Action Completed',
          children: '<mdc-text tagname="span" slot="toast-body-normal">Your file has been successfully uploaded</mdc-text>',
        });

        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await closeBtn.waitFor();

        const closePromise = componentsPage.waitForEvent(toast, 'close');
        await closeBtn.click();
        await closePromise;
      });

      await test.step('User expands/collapses toast body using mouse', async () => {
        const toast = await setup({
          componentsPage,
          headerText: 'Toast Title',
          headerTagName: 'span',
          closeButtonAriaLabel: 'Close toast',
          showMoreText: SHOW_MORE_TEXT,
          showLessText: SHOW_LESS_TEXT,
          children: `
            <mdc-text tagname="span" slot="toast-body-normal">This is normal content.</mdc-text>
            <mdc-text tagname="span" slot="toast-body-detailed">This is detailed content.</mdc-text>
          `,
        });

        const toggleBtn = toast.locator('mdc-button[part="footer-button-toggle"]');
        const detailedSlot = toast.locator('mdc-text[slot="toast-body-detailed"]');

        await expect(toggleBtn.locator('mdc-icon[name="arrow-down-bold"]')).toBeVisible();
        await toggleBtn.click(); // expand

        await expect(detailedSlot).toBeVisible();
        await expect(toggleBtn).toContainText(SHOW_LESS_TEXT);
        await expect(toggleBtn.locator('mdc-icon[name="arrow-up-bold"]')).toBeVisible();

        await toggleBtn.click(); // collapse
        await expect(detailedSlot).not.toBeVisible();
        await expect(toggleBtn).toContainText(SHOW_MORE_TEXT);
        await expect(toggleBtn.locator('mdc-icon[name="arrow-down-bold"]')).toBeVisible();
      });
    });

    await test.step('Rule: ✅ Keyboard Interactions', async () => {
      await test.step('User navigates toast using Tab and Shift+Tab', async () => {
        await setup({
          componentsPage,
          showMoreText: SHOW_MORE_TEXT,
          showLessText: SHOW_LESS_TEXT,
          children: `
            <mdc-text tagname="span" slot="toast-body-normal">Normal</mdc-text>
            <mdc-text tagname="span" slot="toast-body-detailed">Detailed</mdc-text>
            <mdc-button slot="footer-button-primary">Primary</mdc-button>
            <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
          `,
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
        const toast = await setup({
          componentsPage,
          headerText: 'Action Completed',
          children: '<mdc-text tagname="span" slot="toast-body-normal">Your file has been successfully uploaded</mdc-text>',
        });

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
          headerText: 'Toast Title',
          headerTagName: 'span',
          closeButtonAriaLabel: 'Close toast',
          showMoreText: SHOW_MORE_TEXT,
          showLessText: SHOW_LESS_TEXT,
          children: `
            <mdc-text tagname="span" slot="toast-body-normal">This is normal content.</mdc-text>
            <mdc-text tagname="span" slot="toast-body-detailed">This is detailed content.</mdc-text>
          `,
        });

        const toggleBtn = toast.locator('mdc-button[part="footer-button-toggle"]');
        const detailedSlot = toast.locator('mdc-text[slot="toast-body-detailed"]');

        await toggleBtn.focus();
        await componentsPage.visualRegression.takeScreenshot('mdc-toast', {
          source: 'userflow',
          fileNameSuffix: 'collapsed-view',
          element: toast
        });
        await componentsPage.accessibility.checkForA11yViolations('toast-collapsed-view');

        await toggleBtn.press('Enter'); // expand
        await expect(detailedSlot).toBeVisible();
        await expect(toggleBtn.locator('mdc-icon[name="arrow-up-bold"]')).toBeVisible();
        await expect(toggleBtn).toContainText(SHOW_LESS_TEXT);
        await expect(toggleBtn).toBeFocused();
        await componentsPage.visualRegression.takeScreenshot('mdc-toast', {
          source: 'userflow',
          fileNameSuffix: 'expanded-view',
          element: toast
        });
        await componentsPage.accessibility.checkForA11yViolations('toast-expanded-view');

        await toggleBtn.press('Enter'); // collapse
        await expect(detailedSlot).not.toBeVisible();
        await expect(toggleBtn.locator('mdc-icon[name="arrow-down-bold"]')).toBeVisible();
        await expect(toggleBtn).toContainText(SHOW_MORE_TEXT);
        await expect(toggleBtn).toBeFocused();
        await componentsPage.visualRegression.takeScreenshot('mdc-toast', {
          source: 'userflow',
          fileNameSuffix: 'collapsed-view',
          element: toast
        });
      });
    });
  });
});
