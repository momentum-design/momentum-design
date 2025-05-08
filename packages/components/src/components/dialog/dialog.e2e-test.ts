import { expect } from '@playwright/test';
import { test, ComponentsPage } from '../../../config/playwright/setup';
import { DEFAULTS } from './dialog.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  triggerId: string;
  zIndex?: number;
  visible?: boolean;
  size?: boolean;
  closeButtonAriaLabel?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  role?: HTMLElement['role'];
  headerText?: string;
  descriptionText?: string;
  headerTagName?: string;
  descriptionTagName?: string;
  children?: any;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="wrapper">
      <div style="height: 10vh">
        <mdc-button
          id="${restArgs.triggerId}"
          aria-label="Trigger Button of Dialog"
        >
          Click Me!
        </mdc-button>
      </div>
      <mdc-dialog
        ${restArgs.id ? `id="${restArgs.id}"` : ''}
        ${restArgs.triggerId ? `triggerId="${restArgs.triggerId}"` : ''}
        ${restArgs.zIndex ? `z-index="${restArgs.zIndex}"` : ''}
        ${restArgs.visible ? `visible="${restArgs.visible}"` : ''}
        ${restArgs.size ? 'size' : ''}
        ${restArgs.closeButtonAriaLabel ? `close-button-aria-label="${restArgs.closeButtonAriaLabel}"` : ''}
        ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
        ${restArgs.ariaLabelledby ? `aria-labelledby="${restArgs.ariaLabelledby}"` : ''}
        ${restArgs.role ? `role="${restArgs.role}"` : ''}
        ${restArgs.headerText ? `header-text="${restArgs.headerText}"` : ''}
        ${restArgs.descriptionText ? `description-text="${restArgs.descriptionText}"` : ''}
        ${restArgs.headerTagName ? `header-tag-name="${restArgs.headerTagName}"` : ''}
        ${restArgs.descriptionTagName ? `description-tag-name="${restArgs.descriptionTagName}"` : ''}
      >
        ${restArgs.children}
      </mdc-dialog>
    </div>
    `,
    clearDocument: true,
  });
  await componentsPage.page.locator('div#wrapper').waitFor();
  const dialog = componentsPage.page.locator(`#${restArgs.id}`);
  const triggerButton = componentsPage.page.locator(`#${restArgs.triggerId}`);
  return { dialog, triggerButton };
};

const dialogWithAllSlots = {
  id: 'dialog',
  triggerId: 'trigger-btn',
  ariaLabel: 'dialog',
  visible: true,
  closeButtonAriaLabel: 'Close button label',
  headerText: 'Dialog Header',
  descriptionText: 'Dialog Description',
  children: `
    <div slot="dialog-body">
      <p>This is the body content of the dialog.</p>
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  `,
};

test('mdc-dialog', async ({ componentsPage }) => {
  const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots });

  // initial check for the dialog be visible on the screen:
  await dialog.waitFor();
  await test.step('initial visibility', async () => {
    await expect(dialog).toBeVisible();
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await setup({ componentsPage, ...dialogWithAllSlots });
    await componentsPage.accessibility.checkForA11yViolations('dialog-default');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      await setup({ componentsPage, ...dialogWithAllSlots });
      await componentsPage.visualRegression.takeScreenshot('mdc-dialog', { element: dialog });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const { dialog } = await setup({
      componentsPage,
      id: 'dialog',
      triggerId: 'trigger-btn',
      closeButtonAriaLabel: 'Close button label',
      ariaLabel: 'dialog-attribute',
    });

    await test.step('default attributes', async () => {
      await expect(dialog).toHaveAttribute('z-index', '1000');
      await expect(dialog).toHaveAttribute('size', 'small');
      await expect(dialog).toHaveAttribute('header-tag-name', 'h2');
      await expect(dialog).toHaveAttribute('description-tag-name', 'p');
      await expect(dialog).toHaveAttribute('role', 'dialog');
    });

    await test.step('accessibility attributes', async () => {
      await expect(dialog).toHaveAttribute('aria-label', 'dialog-attribute');
      await expect(dialog).not.toHaveAttribute('aria-expanded');
      await expect(dialog).not.toHaveAttribute('aria-describedby');
      await expect(dialog).toHaveAttribute('size', DEFAULTS.SIZE);
      await expect(dialog).toHaveAttribute('header-text', '');
      await expect(dialog).toHaveAttribute('description-text', '');
      await expect(dialog).not.toHaveAttribute('aria-labelledby', '');

      const closeDialogButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
      await expect(closeDialogButton).toHaveAttribute('aria-label', 'Close button label');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('programmatic', async () => {
      await test.step('dialog should close/open when the visible attribute is changed', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots });
        await expect(dialog).toBeVisible();
        await dialog.evaluate((dialog) => {
          dialog.removeAttribute('visible');
        });
        await expect(dialog).not.toBeVisible();
      });
    });

    await test.step('mouse/pointer', async () => {
      await test.step('dialog should close when clicking on close button', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots });

        await componentsPage.page.locator('mdc-button[part="dialog-close-btn"]').click();
        await expect(dialog).not.toBeVisible();
      });
    });

    await test.step('focus and keyboard', async () => {
      await test.step('close button should be focusable with tab and actionable with enter', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, visible: false });
        await dialog.evaluate((dialog) => {
          dialog.toggleAttribute('visible');
        });
        await expect(dialog).toBeVisible();
        const closeButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
        await expect(closeButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(closeButton).not.toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(closeButton).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(dialog).not.toBeVisible();
      });
      await test.step('dialog should close on escape keydown', async () => {
        await dialog.evaluate((dialog) => {
          dialog.toggleAttribute('visible');
        });
        await expect(dialog).toBeVisible();
        await componentsPage.page.keyboard.press('Escape');
        await expect(dialog).not.toBeVisible();
      });
      await test.step('focus should remain only in the dialog when visible', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, visible: false });
        await dialog.evaluate((dialog) => {
          dialog.toggleAttribute('visible');
        });
        await expect(dialog).toBeVisible();
        const closeButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
        await expect(closeButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        const link = componentsPage.page.locator('[slot="footer-link"]');
        await expect(link).toBeFocused();
        await componentsPage.actionability.pressTab();
        const secondaryButton = componentsPage.page.locator('[slot="footer-button-secondary"]');
        await expect(secondaryButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        const primaryButton = componentsPage.page.locator('[slot="footer-button-primary"]');
        await expect(primaryButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(closeButton).toBeFocused();
      });
    });
  });
});
