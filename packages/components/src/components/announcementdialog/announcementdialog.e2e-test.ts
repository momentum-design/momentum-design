import { expect } from '@playwright/test';

import { test, ComponentsPage } from '../../../config/playwright/setup';
import type { IllustrationNames } from '../illustration/illustration.types';

import { DEFAULTS } from './announcementdialog.constants';
import type Announcementdialog from './announcementdialog.component';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  triggerId?: string;
  zIndex?: number;
  visible?: boolean;
  size?: boolean;
  closeButtonAriaLabel?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  role?: HTMLElement['role'];
  headerText?: string;
  headerTagName?: string;
  illustration?: IllustrationNames;
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
      <mdc-announcementdialog
        ${restArgs.id ? `id="${restArgs.id}"` : ''}
        ${restArgs.triggerId ? `triggerId="${restArgs.triggerId}"` : ''}
        ${restArgs.zIndex ? `z-index="${restArgs.zIndex}"` : ''}
        ${restArgs.visible ? `visible` : ''}
        ${restArgs.size ? 'size' : ''}
        ${restArgs.closeButtonAriaLabel ? `close-button-aria-label="${restArgs.closeButtonAriaLabel}"` : ''}
        ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
        ${restArgs.ariaLabelledby ? `aria-labelledby="${restArgs.ariaLabelledby}"` : ''}
        ${restArgs.role ? `role="${restArgs.role}"` : ''}
        ${restArgs.headerText ? `header-text="${restArgs.headerText}"` : ''}
        ${restArgs.headerTagName ? `header-tag-name="${restArgs.headerTagName}"` : ''}
        ${restArgs.illustration ? `illustration="${restArgs.illustration}"` : ''}
      >
        ${restArgs.children}
      </mdc-announcementdialog>
    </div>
    `,
    clearDocument: true,
  });
  await componentsPage.page.locator('div#wrapper').waitFor();
  const dialog = componentsPage.page.locator(`#${restArgs.id}`);
  const triggerButton = componentsPage.page.locator(`#${restArgs.triggerId}`);

  // add event listener to dialog for close event
  // this is to ensure that the dialog closes when the close button is clicked
  // since the dialog is a controlled component, the consumer needs to handle the close event
  // and set the visible attribute to false
  await componentsPage.page.evaluate(dialogId => {
    const dialogElement = document.querySelector(`#${dialogId}`) as Announcementdialog;
    if (dialogElement) {
      dialogElement.onclose = () => {
        dialogElement.visible = false;
      };
    }
  }, restArgs.id);

  return { dialog, triggerButton };
};

const dialogWithAllSlots = {
  id: 'dialog',
  triggerId: 'trigger-btn',
  ariaLabel: 'dialog',
  visible: true,
  closeButtonAriaLabel: 'Close button label',
  headerText: 'Dialog Header',
  illustration: 'onezerox-better-threetwozero-onboarding-tertiary' as const,
  children: `
     <mdc-text slot="description-container" type="body-large-regular">
      Introduction sentence.
      <br />
      Feature description.
      <br />
      Promote the feature, add some delight 🎉 and let the user know any top level information but don't be
      instructional or technical.
      <br />
      Max 8 lines of copy with or without breaks.
    </mdc-text>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  `,
};

test('mdc-announcementdialog', async ({ componentsPage }) => {
  const { dialog, triggerButton } = await setup({ componentsPage, ...dialogWithAllSlots });

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
      await componentsPage.visualRegression.takeScreenshot('mdc-announcementdialog');
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const { dialog, triggerButton } = await setup({
      componentsPage,
      id: 'dialog',
      triggerId: 'trigger-btn',
      closeButtonAriaLabel: 'Close button label',
      ariaLabel: 'dialog-attribute',
    });

    await test.step('default attributes', async () => {
      await expect(dialog).toHaveAttribute('z-index', '1000');
      await expect(dialog).toHaveAttribute('size', 'medium');
      await expect(dialog).toHaveAttribute('variant', 'default');
      await expect(dialog).toHaveAttribute('header-tag-name', 'h2');
      await expect(dialog).toHaveAttribute('role', 'dialog');
    });

    await test.step('accessibility attributes', async () => {
      await expect(dialog).toHaveAttribute('size', DEFAULTS.SIZE);

      await expect(triggerButton).not.toHaveAttribute('aria-expanded');
      await expect(triggerButton).toHaveAttribute('aria-haspopup', 'dialog');

      await expect(dialog).not.toHaveAttribute('header-text');
      await expect(dialog).not.toHaveAttribute('description-text');

      await expect(dialog).toHaveAttribute('aria-label', 'dialog-attribute');
      await expect(dialog).not.toHaveAttribute('aria-labelledby');
      await expect(dialog).toHaveAttribute('aria-describedby', 'trigger-btn');

      const closeDialogButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
      await expect(closeDialogButton).toHaveAttribute('aria-label', 'Close button label');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('programmatic', async () => {
      await test.step('dialog should close/open when the visible attribute is changed without trigger', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, triggerId: undefined });
        await expect(dialog).toBeVisible();
        await dialog.evaluate(dialog => {
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
        const { dialog, triggerButton } = await setup({ componentsPage, ...dialogWithAllSlots, visible: false });
        await dialog.evaluate(dialog => {
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
        await expect(triggerButton).toBeFocused();
      });

      await test.step('dialog should close on escape keydown and fire onClose event', async () => {
        await dialog.evaluate(dialog => {
          dialog.toggleAttribute('visible');
        });
        await expect(dialog).toBeVisible();

        await componentsPage.page.keyboard.press('Escape');

        await expect(dialog).not.toBeVisible();
        await expect(triggerButton).toBeFocused();
      });

      await test.step('focus should remain only in the dialog when visible', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, visible: false });
        await dialog.evaluate(dialog => {
          dialog.toggleAttribute('visible');
        });
        await expect(dialog).toBeVisible();
        const closeButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
        await expect(closeButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        const secondaryButton = componentsPage.page.locator('[slot="footer-button-secondary"]');
        await expect(secondaryButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        const primaryButton = componentsPage.page.locator('[slot="footer-button-primary"]');
        await expect(primaryButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(closeButton).toBeFocused();
      });

      await test.step('focus should remain only in the dialog when buttons are added dynamically', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, visible: false });
        await dialog.evaluate(dialog => {
          dialog.toggleAttribute('visible');
        });
        await expect(dialog).toBeVisible();
        const closeButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
        await expect(closeButton).toBeFocused();

        // add a new button dynamically
        await componentsPage.page.evaluate(() => {
          const dialog = document.querySelector('mdc-announcementdialog');
          const newButton = document.createElement('mdc-button');
          newButton.textContent = 'New Button';
          newButton.slot = 'content-container';
          dialog?.appendChild(newButton);
        });
        // tab through the dialog to check focus
        await componentsPage.actionability.pressTab();
        const newButton = componentsPage.page.locator('mdc-button:has-text("New Button")');
        await expect(newButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        const secondaryButton = componentsPage.page.locator('[slot="footer-button-secondary"]');
        await expect(secondaryButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        const primaryButton = componentsPage.page.locator('[slot="footer-button-primary"]');
        await expect(primaryButton).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(closeButton).toBeFocused();

        // press shift tab to go back
        await componentsPage.actionability.pressShiftTab();
        await expect(primaryButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(secondaryButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(newButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(closeButton).toBeFocused();
      });

      await test.step('dialog should focus on close button automatically with visible = true', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, visible: true });
        await expect(dialog).toBeVisible();
        const closeButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
        await expect(closeButton).toBeFocused();
      });
    });
  });

  /**
   * RESPONSIVE SETTINGS
   */
  await test.step('responsive settings', async () => {
    const setup = async ({ size, forceFullScreenDialog }: { size?: string; forceFullScreenDialog?: boolean }) => {
      await componentsPage.mount({
        html: `
      <div id="wrapper">
          <mdc-responsivesettingsprovider id="responsive-settings-provider" ${forceFullScreenDialog ? 'force-fullscreen-dialog' : ''}>
              <mdc-announcementdialog id="dialog" ${size ? `size="${size}"` : ''}>Hello dialog!</mdc-announcementdialog>
          </mdc-responsivesettingsprovider>
      </div>
      `,
        clearDocument: true,
      });

      const dialog = componentsPage.page.locator(`#dialog`);
      const responsiveSettings = componentsPage.page.locator(`#responsive-settings-provider`);
      return { dialog, responsiveSettings };
    };

    await test.step('force-fullscreen-dialog responsive settings changes dialog size settings', async () => {
      const { dialog } = await setup({ forceFullScreenDialog: true });

      await expect(dialog).toHaveAttribute('size', 'fullscreen');
    });

    await test.step("responsive settings takes priority over dialog's size attribute", async () => {
      const { dialog } = await setup({ size: 'medium', forceFullScreenDialog: true });

      await expect(dialog).toHaveAttribute('size', 'fullscreen');
    });

    await test.step('dialog size reacts on responsive settings changes', async () => {
      const { dialog, responsiveSettings } = await setup({ size: 'medium', forceFullScreenDialog: false });

      await expect(dialog).toHaveAttribute('size', 'medium');

      await componentsPage.setAttributes(responsiveSettings, { 'force-fullscreen-dialog': 'true' });

      await expect(dialog).toHaveAttribute('size', 'fullscreen');

      await componentsPage.removeAttribute(responsiveSettings, 'force-fullscreen-dialog');

      await expect(dialog).toHaveAttribute('size', 'medium');
    });
  });
});
