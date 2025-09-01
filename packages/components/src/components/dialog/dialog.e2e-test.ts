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
  size?: boolean;
  variant?: string;
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
    await test.step('matches screenshot of element', async () => {
      await setup({ componentsPage, ...dialogWithAllSlots });
      await componentsPage.visualRegression.takeScreenshot('mdc-dialog', { element: dialog });
    });
    await test.step('matches screenshot of element with variant', async () => {
      await setup({ componentsPage, ...dialogWithCustomHeader, variant: 'promotional' });
      await componentsPage.visualRegression.takeScreenshot('mdc-dialog-variant-promotional', { element: dialog });
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
});
