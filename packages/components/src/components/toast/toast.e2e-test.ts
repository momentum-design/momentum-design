/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

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
  test.skip('mdc-toast', async ({ componentsPage }) => {
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
        const variants = ['success', 'warning', 'error'];
        const prefixIcon = componentsPage.page.locator('mdc-toast [part="prefix-icon"]');
        for (const variant of variants) {
          const toast = await setup({ componentsPage, variant, children: `<span slot="toast-body-normal">${variant}</span>` });
          await expect(toast).toHaveAttribute('variant', variant);
          await expect(prefixIcon).toBeVisible();
        }

        // custom variant: should show custom prefix content
        const customVariant = 'custom';
        const toast = await setup({
          componentsPage,
          variant: customVariant,
          children: `<mdc-icon name="chat-bold" size="1" slot="content-prefix"></mdc-icon><span slot="toast-body-normal">${customVariant}</span>`
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
        const showMoreBtn = componentsPage.page.locator('mdc-button[part="footer-toggle-btn"]');
        await expect(showMoreBtn).toHaveText(SHOW_MORE_TEXT);
        await expect(showMoreBtn).toBeVisible();
      });
    });

    await test.step('Rule: ✅ Rendering and Visual States', async () => {
      await test.step('Toast renders only normal content', async () => {
        const body = 'Your files are now available in the dashboard';
        const toast = await setup({ componentsPage, children: `<span slot="toast-body-normal">${body}</span>` });
        const bodySlot = toast.locator('span[slot="toast-body-normal"]');
        await expect(bodySlot).toContainText(body);
        await expect(toast.locator('mdc-button[part="footer-toggle-btn"]')).not.toBeVisible();
      });

      await test.step('Toast renders normal and detailed body content', async () => {
        const body = 'Your files are now available in the dashboard';
        const detailedBody = 'This is detailed content.';
        const toast = await setup({ componentsPage, showMoreText: SHOW_MORE_TEXT, showLessText: SHOW_LESS_TEXT, children: `<span slot="toast-body-normal">${body}</span><p slot="toast-body-detailed">${detailedBody}</p>` });
        const bodySlot = toast.locator('span[slot="toast-body-normal"]');
        await expect(bodySlot).toContainText(body);
        const detailedSlot = toast.locator('p[slot="toast-body-detailed"]');
        await expect(detailedSlot).toHaveText(detailedBody);
        await expect(detailedSlot).not.toBeVisible();
        const showMoreBtn = toast.locator('mdc-button[part="footer-toggle-btn"]');
        await expect(showMoreBtn).toBeVisible();
        await expect(showMoreBtn).toContainText(SHOW_MORE_TEXT);
      });
    });

    await test.step('Rule: ✅ Mouse Interactions', async () => {
      await test.step('User manually dismisses the toast', async () => {
        const toast = await setup({ componentsPage, headerText: 'Action Completed', children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await closeBtn.waitFor();
        const closePromise = componentsPage.waitForEvent(toast, 'close');
        await closeBtn.click();
        await closePromise;
      });

      await test.step('User expands/collapses toast body using mouse', async () => {
        const detailedBody = 'This is detailed content.';
        const toast = await setup({ componentsPage, showMoreText: SHOW_MORE_TEXT, showLessText: SHOW_LESS_TEXT, children: `<span slot="toast-body-normal">Normal</span><p slot="toast-body-detailed">${detailedBody}</p>` });
        const showMoreBtn = toast.locator('mdc-button[part="footer-toggle-btn"]');
        await showMoreBtn.click(); // expand
        const detailedSlot = toast.locator('p[slot="toast-body-detailed"]');
        await expect(detailedSlot).toBeVisible();
        await expect(showMoreBtn).toContainText(SHOW_LESS_TEXT);      
         await showMoreBtn.click(); // collapse
        await expect(detailedSlot).not.toBeVisible();
        await expect(showMoreBtn).toContainText(SHOW_MORE_TEXT);
      });
    });

    await test.step('Rule: ✅ Keyboard Interactions', async () => {
      await test.step('User navigates toast using Tab', async () => {
        await setup({
          componentsPage,
          children: `<span slot="toast-body-normal">Normal</span><p slot="toast-body-detailed">Detailed</p><mdc-button slot="footer-button-primary">Primary</mdc-button><mdc-button slot="footer-button-secondary">Secondary</mdc-button>`
        });
        await componentsPage.actionability.pressTab();
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await expect(closeBtn).toBeFocused();
        await componentsPage.actionability.pressTab();
        const showMoreBtn = componentsPage.page.locator('mdc-button[part="footer-toggle-btn"]');
        await expect(showMoreBtn).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(componentsPage.page.locator('mdc-button[slot="footer-button-secondary"]')).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(componentsPage.page.locator('mdc-button[slot="footer-button-primary"]')).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(componentsPage.page.locator('mdc-button[slot="footer-button-primary"]')).not.toBeFocused();
      });

      await test.step('User navigates toast using Shift+Tab', async () => {
        await setup({
          componentsPage,
          children: `<span slot="toast-body-normal">Normal</span><p slot="toast-body-detailed">Detailed</p><mdc-button slot="footer-button-primary">Primary</mdc-button><mdc-button slot="footer-button-secondary">Secondary</mdc-button>`
        });
        // Move focus to primary button
        await componentsPage.actionability.pressTab(); // close
        await componentsPage.actionability.pressTab(); // show more
        await componentsPage.actionability.pressTab(); // secondary
        await componentsPage.actionability.pressTab(); // primary
        await expect(componentsPage.page.locator('mdc-button[slot="footer-button-primary"]')).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(componentsPage.page.locator('mdc-button[slot="footer-button-secondary"]')).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        const showMoreBtn = componentsPage.page.locator('mdc-button[part="footer-toggle-btn"]');
        await expect(showMoreBtn).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(componentsPage.page.locator('mdc-toast [part="toast-close-btn"]')).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(componentsPage.page.locator('mdc-toast [part="toast-close-btn"]')).not.toBeFocused();
      });

      await test.step('User closes toast with keyboard', async () => {
        const toast = await setup({ componentsPage, headerText: 'Action Completed', children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
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
          children: `<span slot="toast-body-normal">Normal</span><p slot="toast-body-detailed">This is detailed content.</p>`
        });
        const showMoreBtn = toast.locator('mdc-button[part="footer-toggle-btn"]');
        await showMoreBtn.focus();
        await showMoreBtn.press('Enter'); // expand
        const detailedSlot = toast.locator('p[slot="toast-body-detailed"]');
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
