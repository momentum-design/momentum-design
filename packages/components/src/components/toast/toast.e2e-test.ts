/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

type ToastSetupOptions = {
  variant?: string;
  ariaLabel?: string;
  headerText?: string;
  headerTagName?: string;
  closeButtonAriaLabel?: string;
  rtl?: boolean;
  children?: string;
  componentsPage: any
};

const setup = async (options: ToastSetupOptions) => {
  const {
    componentsPage,
    variant,
    ariaLabel,
    headerText,
    headerTagName,
    closeButtonAriaLabel,
    rtl = false,
    children,
  } = options;
  const attrs = [
    variant ? `variant="${variant}"` : '',
    ariaLabel ? `aria-label="${ariaLabel}"` : '',
    headerText ? `header-text="${headerText}"` : '',
    headerTagName ? `header-tag-name="${headerTagName}"` : '',
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
    // Rule: ✅ Attributes
    await test.step('Rule: ✅ Attributes', async () => {
      await test.step('Toast sets default attributes', async () => {
        const toast = await setup({ componentsPage, children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        await expect(toast).toHaveAttribute('header-tag-name', 'h2');
        await expect(toast).not.toHaveAttribute('variant');
        await expect(toast).not.toHaveAttribute('aria-label');
      });

      await test.step('Toast sets the header-text attribute', async () => {
        const toast = await setup({ componentsPage, headerText: 'Action Completed', children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        await expect(toast).toHaveAttribute('header-text', 'Action Completed');
      });

      await test.step('Toast accepts allowed variant values', async () => {
        const toastSuccess = await setup({ componentsPage, variant: 'success', children: '<span slot="toast-body-normal">Success</span>' });
        await expect(toastSuccess).toHaveAttribute('variant', 'success');
        const toastWarning = await setup({ componentsPage, variant: 'warning', children: '<span slot="toast-body-normal">Warning</span>' });
        await expect(toastWarning).toHaveAttribute('variant', 'warning');
        const toastError = await setup({ componentsPage, variant: 'error', children: '<span slot="toast-body-normal">Error</span>' });
        await expect(toastError).toHaveAttribute('variant', 'error');
      });

      await test.step('Toast sets the aria-label attribute when provided', async () => {
        const ariaLabel = 'Toast notification';
        const toast = await setup({ componentsPage, ariaLabel, children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        await expect(toast).toHaveAttribute('aria-label', ariaLabel);
      });

      await test.step('Toast sets the close-button-aria-label attribute when provided', async () => {
        const closeButtonAriaLabel = 'Dismiss notification';
        await setup({ componentsPage, closeButtonAriaLabel, children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await expect(closeBtn).toHaveAttribute('aria-label', closeButtonAriaLabel);
      });

      await test.step('Toast sets the header-tag-name attribute when provided', async () => {
        const toast = await setup({ componentsPage, headerTagName: 'h3', children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        await expect(toast).toHaveAttribute('header-tag-name', 'h3');
      });
    });

    // Rule: ✅ Rendering and Visual States
    await test.step('Rule: ✅ Rendering and Visual States', async () => {
      await test.step('Toast emits "shown" event when displayed', async () => {
        const toast = await setup({ componentsPage, children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        const shownPromise = componentsPage.waitForEvent(toast, 'shown');
        await shownPromise;
      });

      await test.step('Toast renders custom content in content-prefix slot for custom variant', async () => {
        const customIcon = '<mdc-icon name="placeholder-bold" size="1" slot="content-prefix"></mdc-icon>';
        const toastCustom = await setup({ componentsPage, variant: 'custom', children: `${customIcon}` });
        const custom = toastCustom.locator('mdc-icon[name="placeholder-bold"]');
        await expect(custom).toBeVisible();
      });

      await test.step('Toast sets normal and detailed body content', async () => {
        const body = 'Your files are now available in the dashboard';
        const detailedBody = 'This is detailed content.';
        const toast = await setup({ componentsPage, children: `<span slot="toast-body-normal">${body}</span><p slot="toast-body-detailed">${detailedBody}</p>` });
        const bodySlot = toast.locator('span[slot="toast-body-normal"]');
        await expect(bodySlot).toContainText(body);
        const detailedSlot = toast.locator('p[slot="toast-body-detailed"]');
        await expect(detailedSlot).toHaveText(detailedBody);
        await expect(detailedSlot).not.toBeVisible();
      });

      await test.step('Toast renders custom action buttons', async () => {
        const toast = await setup({
          componentsPage,
          children: `<span slot="toast-body-normal">Your file has been successfully uploaded</span><mdc-button slot="footer-button-primary">Primary</mdc-button><mdc-button slot="footer-button-secondary">Secondary</mdc-button><mdc-link slot="footer-link">Footer Link</mdc-link>`
        });
        await expect(toast.locator('mdc-button[slot="footer-button-primary"]')).toHaveText('Primary');
        await expect(toast.locator('mdc-button[slot="footer-button-secondary"]')).toHaveText('Secondary');
        await expect(toast.locator('mdc-link[slot="footer-link"]')).toHaveText('Footer Link');
      });
    });

    // Rule: ✅ Mouse Interactions
    await test.step('Rule: ✅ Mouse Interactions', async () => {
      await test.step('User manually dismisses a toast using the mouse', async () => {
        const toast = await setup({ componentsPage, children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await closeBtn.waitFor();
        const closePromise = componentsPage.waitForEvent(toast, 'onclose');
        await closeBtn.click();
        await closePromise;
      });

      await test.step('User expands toast body using the mouse', async () => {
        const detailedBody = 'This is detailed content that is long enough to require expansion.';
        const toast = await setup({ componentsPage, children: `<span slot="toast-body-normal">Normal</span><p slot="toast-body-detailed">${detailedBody}</p>` });
        const showMoreBtn = toast.locator('mdc-button[part="footer-toggle-btn"]');
        await expect(showMoreBtn).toBeVisible();
        await showMoreBtn.click();
        const detailedSlot = toast.locator('p[slot="toast-body-detailed"]');
        await expect(detailedSlot).toBeVisible();
      });

      await test.step('User collapses expanded toast body using the mouse', async () => {
        const detailedBody = 'This is detailed content that is long enough to require expansion.';
        const toast = await setup({ componentsPage, children: `<span slot="toast-body-normal">Normal</span><p slot="toast-body-detailed">${detailedBody}</p>` });
        const showMoreBtn = toast.locator('mdc-button[part="footer-toggle-btn"]');
        const detailedSlot = toast.locator('p[slot="toast-body-detailed"]');
        await showMoreBtn.click(); // expand
        await expect(detailedSlot).toBeVisible();
        await showMoreBtn.click(); // collapse
        await expect(detailedSlot).not.toBeVisible();
      });

      await test.step('User activates custom action button using the mouse', async () => {
        const toast = await setup({ componentsPage, children: `<span slot="toast-body-normal">Normal</span><mdc-button slot="footer-button-primary">Primary Action</mdc-button>` });
        const primaryBtn = toast.locator('mdc-button[slot="footer-button-primary"]');
        await expect(primaryBtn).toBeVisible();
        await primaryBtn.click();
      });

      await test.step('User activates custom action link using the mouse', async () => {
        const toast = await setup({ componentsPage, children: `<span slot="toast-body-normal">Normal</span><mdc-link slot="footer-link">Footer Link</mdc-link>` });
        const link = toast.locator('mdc-link[slot="footer-link"]');
        await expect(link).toBeVisible();
        await link.click();
      });
    });

    // Rule: ✅ Keyboard Interactions
    await test.step('Rule: ✅ Keyboard Interactions', async () => {
      await test.step('User navigates through toast using Tab and Shift+Tab', async () => {
        await setup({
          componentsPage,
          children: `<span slot="toast-body-normal">Normal</span><mdc-button slot="footer-button-primary">Primary Action</mdc-button><mdc-button slot="footer-button-secondary">Secondary Action</mdc-button>`
        });
        await componentsPage.actionability.pressTab();
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await expect(closeBtn).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(componentsPage.page.locator('mdc-button[slot="footer-button-secondary"]')).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(componentsPage.page.locator('mdc-button[slot="footer-button-primary"]')).toBeFocused();
      });

      await test.step('User activates close button using keyboard', async () => {
        const toast = await setup({ componentsPage, children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        await componentsPage.actionability.pressTab();
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await expect(closeBtn).toBeFocused();
        const closePromise = componentsPage.waitForEvent(toast, 'onclose');
        await closeBtn.press('Enter');
        await closePromise;
      });

      await test.step('User expands toast body using keyboard', async () => {
        const toast = await setup({
          componentsPage,
          children: `<span slot="toast-body-normal">Normal</span><p slot="toast-body-detailed">This is detailed content that is long enough to require expansion.</p>`
        });
        const showMoreBtn = toast.locator('mdc-button[part="footer-toggle-btn"]');
        await expect(showMoreBtn).toBeVisible();
        await showMoreBtn.focus();
        await showMoreBtn.press('Enter');
        await expect(toast.locator('p[slot="toast-body-detailed"]')).toBeVisible();
      });

      await test.step('User collapses expanded toast body using keyboard', async () => {
        const toast = await setup({
          componentsPage,
          children: `<span slot="toast-body-normal">Normal</span><p slot="toast-body-detailed">This is detailed content that is long enough to require expansion.</p>`
        });
        const showMoreBtn = toast.locator('mdc-button[part="footer-toggle-btn"]');
        await showMoreBtn.focus();
        const detailedSlot = toast.locator('p[slot="toast-body-detailed"]');
        await showMoreBtn.press('Enter'); // expand
        await expect(detailedSlot).toBeVisible();
        await showMoreBtn.press('Enter'); // collapse
        await expect(detailedSlot).not.toBeVisible();
      });

      await test.step('User activates custom action button using keyboard', async () => {
        await setup({ componentsPage, children: `<span slot="toast-body-normal">Normal</span><mdc-button slot="footer-button-primary">Primary Action</mdc-button>` });
        await componentsPage.actionability.pressTab(); // close button
        await componentsPage.actionability.pressTab(); // primary button
        const primaryBtn = componentsPage.page.locator('mdc-button[slot="footer-button-primary"]');
        await expect(primaryBtn).toBeFocused();
        await primaryBtn.press('Enter');
      });

      await test.step('User activates custom action link using keyboard', async () => {
        await setup({ componentsPage, children: `<span slot="toast-body-normal">Normal</span><mdc-link slot="footer-link">Footer Link</mdc-link>` });
        await componentsPage.actionability.pressTab(); // close button
        await componentsPage.actionability.pressTab(); // link
        const link = componentsPage.page.locator('mdc-link[slot="footer-link"]');
        await expect(link).toBeFocused();
        await link.press('Enter');
      });
    });

    // Rule: ✅ Accessibility and ARIA
    await test.step('Rule: ✅ Accessibility and ARIA', async () => {
      await test.step('Screen reader announces aria-label when header is absent', async () => {
        const ariaLabel = 'Upload successful';
        const toast = await setup({ componentsPage, headerText: '', ariaLabel, children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        await expect(toast).toHaveAttribute('aria-label', ariaLabel);
      });

      await test.step('Close button has accessible label', async () => {
        const closeButtonAriaLabel = 'Dismiss notification';
        await setup({ componentsPage, closeButtonAriaLabel, children: '<span slot="toast-body-normal">Your file has been successfully uploaded</span>' });
        const closeBtn = componentsPage.page.locator('mdc-toast [part="toast-close-btn"]');
        await expect(closeBtn).toHaveAttribute('aria-label', closeButtonAriaLabel);
      });
    });
  });
});
