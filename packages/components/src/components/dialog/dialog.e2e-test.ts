import { expect } from '@playwright/test';

import { test, ComponentsPage } from '../../../config/playwright/setup';

import { DEFAULTS } from './dialog.constants';
import type Dialog from './dialog.component';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  triggerId?: string;
  zIndex?: number;
  visible?: boolean;
  size?: string;
  variant?: string;
  closeButtonAriaLabel?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  role?: HTMLElement['role'];
  headerText?: string;
  descriptionText?: string;
  headerTagName?: string;
  descriptionTagName?: string;
  hideBackdrop?: boolean;
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
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
        ${restArgs.hideBackdrop ? `hide-backdrop` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
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

  // add event listener to dialog for close event
  // this is to ensure that the dialog closes when the close button is clicked
  // since the dialog is a controlled component, the consumer needs to handle the close event
  // and set the visible attribute to false
  await componentsPage.page.evaluate(dialogId => {
    const dialogElement = document.querySelector(`#${dialogId}`) as Dialog;
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
  variant: 'default',
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

const dialogWithCustomHeader = {
  id: 'dialog',
  triggerId: 'trigger-btn',
  ariaLabel: 'dialog',
  visible: true,
  variant: 'default',
  closeButtonAriaLabel: 'Close button label',
  headerText: 'Dialog Header',
  descriptionText: 'Dialog Description',
  children: `
    <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
    <div slot="dialog-body">
      <p>This is the body content of the dialog.</p>
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  `,
};

const dialogWithIframe = {
  id: 'dialog',
  triggerId: 'trigger-btn',
  ariaLabel: 'dialog',
  visible: true,
  variant: 'default',
  closeButtonAriaLabel: 'Close button label',
  headerText: 'Dialog Header',
  descriptionText: 'Dialog Description',
  children: `
    <div slot="dialog-body">
      <p>This is the body content of the dialog.</p>
      <iframe id="frame" style="width: 100%; height: 200px;"></iframe>
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  `,
};

const dialogWithTextarea = {
  id: 'dialog',
  triggerId: 'trigger-btn',
  ariaLabel: 'dialog',
  visible: true,
  variant: 'default',
  closeButtonAriaLabel: 'Close button label',
  headerText: 'Dialog Header',
  descriptionText: 'Dialog Description',
  children: `
    <div slot="dialog-body">
      <mdc-textarea label="Type something here..." rows="4" cols="50"></mdc-textarea>
    </div>
  `,
};

test('mdc-dialog', async ({ componentsPage }) => {
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
    // Test all sizes with complete content (header + body + footer)
    await test.step('size variations', async () => {
      await test.step('matches screenshot for size: small', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, size: 'small' });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-size-small', { element: dialog });
      });

      await test.step('matches screenshot for size: medium', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, size: 'medium' });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-size-medium', { element: dialog });
      });

      await test.step('matches screenshot for size: large', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, size: 'large' });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-size-large', { element: dialog });
      });

      await test.step('matches screenshot for size: xlarge', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, size: 'xlarge' });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-size-xlarge', { element: dialog });
      });

      await test.step('matches screenshot for size: fullscreen', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, size: 'fullscreen' });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-size-fullscreen', { element: dialog });
      });
    });

    // Test variants (only small size)
    await test.step('variant variations', async () => {
      await test.step('matches screenshot for default variant', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, variant: 'default', size: 'small' });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-variant-default', { element: dialog });
      });

      await test.step('matches screenshot for promotional variant', async () => {
        const { dialog } = await setup({
          componentsPage,
          ...dialogWithCustomHeader,
          variant: 'promotional',
          size: 'small',
        });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-variant-promotional', { element: dialog });
      });
    });

    // Test content variations (only small size)
    await test.step('content variations', async () => {
      await test.step('matches screenshot for dialog without header', async () => {
        const dialogWithoutHeader = {
          ...dialogWithAllSlots,
          headerText: undefined,
          descriptionText: undefined,
          ariaLabel: 'dialog without header',
        };
        const { dialog } = await setup({ componentsPage, ...dialogWithoutHeader, size: 'small' });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-no-header', { element: dialog });
      });

      await test.step('matches screenshot for dialog without footer', async () => {
        const dialogWithoutFooter = {
          ...dialogWithAllSlots,
          children: `
            <div slot="dialog-body">
              <p>This is the body content of the dialog without footer.</p>
            </div>
          `,
        };
        const { dialog } = await setup({ componentsPage, ...dialogWithoutFooter, size: 'small' });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-no-footer', { element: dialog });
      });

      await test.step('matches screenshot for dialog with body only', async () => {
        const dialogBodyOnly = {
          ...dialogWithAllSlots,
          headerText: undefined,
          descriptionText: undefined,
          ariaLabel: 'dialog with body only',
          children: `
            <div slot="dialog-body">
              <p>This is the body content of the dialog with only body content.</p>
              <p>No header and no footer elements are provided.</p>
            </div>
          `,
        };
        const { dialog } = await setup({ componentsPage, ...dialogBodyOnly, size: 'small' });
        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-body-only', { element: dialog });
      });

      await test.step('matches screenshot for dialog with a focused textarea in body', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithTextarea, size: 'small' });
        await componentsPage.page.pause();
        await componentsPage.actionability.pressTab();

        await componentsPage.visualRegression.takeScreenshot('mdc-dialog-with-textarea', { element: dialog });
      });
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
      await expect(dialog).toHaveAttribute('size', 'small');
      await expect(dialog).toHaveAttribute('variant', 'default');
      await expect(dialog).toHaveAttribute('header-tag-name', 'h2');
      await expect(dialog).toHaveAttribute('description-tag-name', 'p');
      await expect(dialog).toHaveAttribute('role', 'dialog');
      await expect(dialog).not.toHaveAttribute('hide-backdrop');
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
   * BACKDROP
   */
  await test.step('backdrop', async () => {
    await test.step('backdrop should be present by default', async () => {
      const { dialog } = await setup({
        componentsPage,
        id: 'dialog-with-backdrop',
        triggerId: 'trigger-btn',
        visible: true,
        ariaLabel: 'dialog with backdrop',
      });

      await expect(dialog).toBeVisible();

      // Check that backdrop element exists
      const backdrop = componentsPage.page.locator('.dialog-backdrop');
      await expect(backdrop).toBeVisible();
    });

    await test.step('backdrop should not be present when hide-backdrop is set', async () => {
      const { dialog } = await setup({
        componentsPage,
        id: 'dialog-without-backdrop',
        triggerId: 'trigger-btn',
        visible: true,
        hideBackdrop: true,
        ariaLabel: 'dialog without backdrop',
      });

      await expect(dialog).toBeVisible();
      await expect(dialog).toHaveAttribute('hide-backdrop');

      // Check that backdrop element does not exist
      const backdrop = componentsPage.page.locator('.dialog-backdrop');
      await expect(backdrop).not.toBeVisible();
    });

    await test.step('backdrop should be removed when dialog is hidden', async () => {
      const { dialog } = await setup({
        componentsPage,
        id: 'dialog-backdrop-on-hide',
        triggerId: 'trigger-btn',
        visible: true,
        ariaLabel: 'dialog backdrop on hide',
      });

      await expect(dialog).toBeVisible();

      // Backdrop should be present
      let backdrop = componentsPage.page.locator('.dialog-backdrop');
      await expect(backdrop).toBeVisible();

      // Hide dialog
      await dialog.evaluate(dialog => {
        dialog.removeAttribute('visible');
      });

      await expect(dialog).not.toBeVisible();

      // Backdrop should be removed
      backdrop = componentsPage.page.locator('.dialog-backdrop');
      await expect(backdrop).not.toBeVisible();
    });

    await test.step('backdrop attribute can be toggled dynamically', async () => {
      const { dialog } = await setup({
        componentsPage,
        id: 'dialog-backdrop-toggle',
        triggerId: 'trigger-btn',
        visible: true,
        hideBackdrop: false,
        ariaLabel: 'dialog backdrop toggle',
      });

      await expect(dialog).toBeVisible();

      // Initially backdrop is present
      let backdrop = componentsPage.page.locator('.dialog-backdrop');
      await expect(backdrop).toBeVisible();

      // Hide the dialog and set hide-backdrop
      await dialog.evaluate(dialog => {
        dialog.removeAttribute('visible');
      });
      await expect(dialog).not.toBeVisible();

      await componentsPage.setAttributes(dialog, { 'hide-backdrop': '' });
      await expect(dialog).toHaveAttribute('hide-backdrop');

      // Show dialog again
      await dialog.evaluate(dialog => {
        dialog.toggleAttribute('visible');
      });
      await expect(dialog).toBeVisible();

      // Backdrop should not be present now
      backdrop = componentsPage.page.locator('.dialog-backdrop');
      await expect(backdrop).not.toBeVisible();
    });

    await test.step('backdrop should be removed when hide-backdrop is changed while dialog is open', async () => {
      const { dialog } = await setup({
        componentsPage,
        id: 'dialog-backdrop-dynamic-change',
        triggerId: 'trigger-btn',
        visible: true,
        hideBackdrop: false,
        ariaLabel: 'dialog backdrop dynamic change',
      });

      await expect(dialog).toBeVisible();

      // Initially backdrop is present
      let backdrop = componentsPage.page.locator('.dialog-backdrop');
      await expect(backdrop).toBeVisible();

      // Change hide-backdrop to true while dialog is open
      await componentsPage.setAttributes(dialog, { 'hide-backdrop': '' });
      await expect(dialog).toHaveAttribute('hide-backdrop');

      // Backdrop should still be visible while dialog is open
      await expect(backdrop).toBeVisible();

      // Close the dialog
      await dialog.evaluate(dialog => {
        dialog.removeAttribute('visible');
      });
      await expect(dialog).not.toBeVisible();

      // Backdrop should now be removed (this is the bug fix being tested)
      backdrop = componentsPage.page.locator('.dialog-backdrop');
      await expect(backdrop).not.toBeVisible();
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
          const dialog = document.querySelector('mdc-dialog');
          const newButton = document.createElement('mdc-button');
          newButton.textContent = 'New Button';
          newButton.slot = 'dialog-body';
          dialog?.appendChild(newButton);
        });
        // tab through the dialog to check focus
        await componentsPage.actionability.pressTab();
        const newButton = componentsPage.page.locator('mdc-button:has-text("New Button")');
        await expect(newButton).toBeFocused();
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

        // press shift tab to go back
        await componentsPage.actionability.pressShiftTab();
        await expect(primaryButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(secondaryButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(link).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(newButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(closeButton).toBeFocused();
      });

      await test.step('focus should remain in the dialog when an iframe is inside', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithIframe, visible: false });

        await dialog.evaluate(dialog => {
          // make dialog visible
          dialog.toggleAttribute('visible');

          // add a button element inside of the iframe (no real url will be used to avoid any
          // cross-origin or flakiness issues)
          const iframe = dialog.querySelector('#frame') as HTMLIFrameElement;
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            const button = iframeDoc.createElement('button');
            button.textContent = 'Iframe Button';
            iframeDoc.body.appendChild(button);
          }
        });

        await expect(dialog).toBeVisible();
        const closeButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
        await expect(closeButton).toBeFocused();

        await componentsPage.actionability.pressTab();
        // firefix requires an extra tab to focus the iframe button
        if (test.info().project.name === 'firefox') {
          await componentsPage.actionability.pressTab();
        }
        const iframeButton = componentsPage.page
          .locator('#frame')
          .contentFrame()
          .getByRole('button', { name: 'Iframe Button' });
        await expect(iframeButton).toBeFocused();

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

        // press shift tab to go back
        await componentsPage.actionability.pressShiftTab();
        await expect(primaryButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(secondaryButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(link).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        // firefix requires an extra shift tab to focus the iframe button
        if (test.info().project.name === 'firefox') {
          await componentsPage.actionability.pressShiftTab();
        }
        await expect(iframeButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(closeButton).toBeFocused();
      });

      await test.step('dialog should focus on close button automatically with visible = true', async () => {
        const { dialog } = await setup({ componentsPage, ...dialogWithAllSlots, visible: true });
        await expect(dialog).toBeVisible();
        const closeButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
        await expect(closeButton).toBeFocused();
      });

      // Start AI-Assisted
      await test.step('focus should pass correctly between different interactive components', async () => {
        const dialogWithFormElements = {
          id: 'dialog',
          triggerId: 'trigger-btn',
          ariaLabel: 'dialog with form elements',
          visible: false,
          variant: 'default',
          closeButtonAriaLabel: 'Close button label',
          headerText: 'Dialog with Form Elements',
          descriptionText: 'Dialog with various form elements for focus testing',
          children: `
            <div slot="dialog-body">
              <mdc-input id="first-input" label="First Input"></mdc-input>
              
              <mdc-checkbox id="standalone-checkbox" checked>Standalone Checkbox</mdc-checkbox>
              
              <mdc-formfieldgroup legend="Checkbox Group">
                <mdc-checkbox id="group-checkbox-1" value="option1">Group Checkbox 1</mdc-checkbox>
                <mdc-checkbox id="group-checkbox-2" value="option2">Group Checkbox 2</mdc-checkbox>
              </mdc-formfieldgroup>
              
              <mdc-radiogroup legend="Radio Group" name="radio-test">
                <mdc-radio id="radio-1" value="radio1">Radio Option 1</mdc-radio>
                <mdc-radio id="radio-2" value="radio2">Radio Option 2</mdc-radio>
              </mdc-radiogroup>
              
              <mdc-button id="dialog-body-button">Dialog Body Button</mdc-button>
              
              <mdc-input id="second-input" label="Second Input"></mdc-input>
            </div>
            <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Footer Link</mdc-link>
            <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
            <mdc-button slot="footer-button-primary">Primary</mdc-button>
          `,
        };

        const { dialog } = await setup({ componentsPage, ...dialogWithFormElements });
        await dialog.evaluate(dialog => {
          dialog.toggleAttribute('visible');
        });
        await expect(dialog).toBeVisible();

        const closeButton = componentsPage.page.locator('mdc-button[part="dialog-close-btn"]');
        const firstInput = componentsPage.page.locator('mdc-input[id="first-input"]');
        const standaloneCheckbox = componentsPage.page.locator('mdc-checkbox[id="standalone-checkbox"]');
        const groupCheckbox1 = componentsPage.page.locator('mdc-checkbox[id="group-checkbox-1"]');
        const groupCheckbox2 = componentsPage.page.locator('mdc-checkbox[id="group-checkbox-2"]');
        const radio1 = componentsPage.page.locator('mdc-radio[id="radio-1"]');
        const dialogBodyButton = componentsPage.page.locator('mdc-button[id="dialog-body-button"]');
        const secondInput = componentsPage.page.locator('mdc-input[id="second-input"]');
        const footerLink = componentsPage.page.locator('[slot="footer-link"]');
        const secondaryButton = componentsPage.page.locator('[slot="footer-button-secondary"]');
        const primaryButton = componentsPage.page.locator('[slot="footer-button-primary"]');

        const elementsInTabOrder = [
          closeButton,
          firstInput,
          standaloneCheckbox,
          groupCheckbox1,
          groupCheckbox2,
          radio1,
          dialogBodyButton,
          secondInput,
          footerLink,
          secondaryButton,
          primaryButton,
        ];

        /* eslint-disable no-await-in-loop */
        for (let i = 0; i < elementsInTabOrder.length; i += 1) {
          const element = elementsInTabOrder[i];

          await expect(element).toBeFocused();
          await componentsPage.actionability.pressTab();
        }

        for (let i = elementsInTabOrder.length - 1; i >= 0; i -= 1) {
          const element = elementsInTabOrder[i];

          await componentsPage.actionability.pressShiftTab();
          await expect(element).toBeFocused();
        }
        /* eslint-enable no-await-in-loop */
      });
      // End AI-Assisted
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
              <mdc-dialog id="dialog" ${size ? `size="${size}"` : ''}>Hello dialog!</mdc-dialog>
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
