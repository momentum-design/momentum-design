/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';
import type Dialog from '../dialog/dialog.component';

import type Popover from './popover.component';
import { COLOR, DEFAULTS, POPOVER_PLACEMENT, TRIGGER } from './popover.constants';
import type { PopoverColor, PopoverPlacement, PopoverTrigger } from './popover.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  triggerID: string;
  trigger?: PopoverTrigger;
  placement?: PopoverPlacement;
  delay?: string;
  zIndex?: number;
  visible?: boolean;
  offset?: number;
  interactive?: boolean;
  focusTrap?: boolean;
  showArrow?: boolean;
  color?: PopoverColor;
  flip?: boolean;
  size?: boolean;
  backdrop?: boolean;
  closeButton?: boolean;
  preventScroll?: boolean;
  hideOnBlur?: boolean;
  hideOnEscape?: boolean;
  hideOnOutsideClick?: boolean;
  focusBackToTrigger?: boolean;
  closeButtonAriaLabel?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  disableAriaExpanded?: boolean;
  role?: HTMLElement['role'];
  children?: any;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="wrapper">
      <div style="height: 20vh">
        <mdc-button id="${restArgs.triggerID}" aria-label="Trigger Button of Popover">Click Me!</mdc-button>
      </div>
      <mdc-popover
        ${restArgs.id ? `id="${restArgs.id}"` : ''}
        ${restArgs.triggerID ? `triggerID="${restArgs.triggerID}"` : ''}
        ${restArgs.trigger ? `trigger="${restArgs.trigger}"` : ''}
        ${restArgs.placement ? `placement="${restArgs.placement}"` : ''}
        ${restArgs.delay ? `delay="${restArgs.delay}"` : ''}
        ${restArgs.zIndex ? `z-index="${restArgs.zIndex}"` : ''}
        ${restArgs.visible ? 'visible' : ''}
        ${restArgs.offset ? `offset="${restArgs.offset}"` : ''}
        ${restArgs.interactive ? 'interactive' : ''}
        ${restArgs.focusTrap ? 'focus-trap' : ''}
        ${restArgs.showArrow ? 'show-arrow' : ''}
        ${restArgs.color ? `color="${restArgs.color}"` : ''}
        ${restArgs.flip ? 'flip' : ''}
        ${restArgs.size ? 'size' : ''}
        ${restArgs.backdrop ? 'backdrop' : ''}
        ${restArgs.closeButton ? 'close-button' : ''}
        ${restArgs.preventScroll ? `prevent-scroll="${restArgs.preventScroll}"` : ''}
        ${restArgs.hideOnBlur ? `hide-on-blur="${restArgs.hideOnBlur}"` : ''}
        ${restArgs.hideOnEscape ? `hide-on-escape="${restArgs.hideOnEscape}"` : ''}
        ${restArgs.hideOnOutsideClick ? `hide-on-outside-click="${restArgs.hideOnOutsideClick}"` : ''}
        ${restArgs.focusBackToTrigger ? `focus-back-to-trigger="${restArgs.focusBackToTrigger}"` : ''}
        ${restArgs.closeButtonAriaLabel ? `close-button-aria-label="${restArgs.closeButtonAriaLabel}"` : ''}
        ${restArgs.disableAriaExpanded ? 'disable-aria-expanded' : ''}
        ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
        ${restArgs.ariaLabelledby ? `aria-labelledby="${restArgs.ariaLabelledby}"` : ''}
        ${restArgs.ariaDescribedby ? `aria-describedby="${restArgs.ariaDescribedby}"` : ''}
        ${restArgs.role ? `role="${restArgs.role}"` : ''}
      >
        ${restArgs.children}
      </mdc-popover>
      <mdc-button id="outside-button">Outside Button</mdc-button>
    </div>
    `,
    clearDocument: true,
  });
  const wrapper = componentsPage.page.locator('div#wrapper');
  await wrapper.waitFor();
  const popover = componentsPage.page.locator(`#${restArgs.id}`);
  const triggerButton = componentsPage.page.locator(`#${restArgs.triggerID}`);
  return { popover, triggerButton };
};

const visualTestingSetup = async (componentsPage: ComponentsPage) => {
  let index = 1;
  let popoverHTML = '';

  for (const placement of Object.values(POPOVER_PLACEMENT)) {
    popoverHTML += `
      <div class="button-wrapper" style="position: relative;">
        <mdc-button id="trigger-button-${index}">Click Me!</mdc-button>
      </div>
      <mdc-popover 
        triggerID="trigger-button-${index}" 
        placement="${placement}" 
        show-arrow 
        visible 
      >
        <mdc-text>
          This is a placeholder.
        </mdc-text>
      </mdc-popover>
    `;
    index += 1;
  }

  const popoverWithSelect = `
    <mdc-button id="select-popover-trigger">Select Button</mdc-button>
    <mdc-popover triggerid="select-popover-trigger" interactive>
      <div style="width: 15rem;">
        <mdc-select id="select-popover-1">
          <mdc-selectlistbox>
            <mdc-option value="1" label="Option 1"></mdc-option>
            <mdc-option value="2" label="Option 2"></mdc-option>
            <mdc-option value="3" label="Option 3"></mdc-option>
          </mdc-selectlistbox>
        </mdc-select>
        <mdc-select id="select-popover-2">
          <mdc-selectlistbox>
            <mdc-option value="4" label="Option 4"></mdc-option>
            <mdc-option value="5" label="Option 5"></mdc-option>
            <mdc-option value="6" label="Option 6"></mdc-option>
          </mdc-selectlistbox>
        </mdc-select>
        <mdc-select id="select-popover-3">
          <mdc-selectlistbox>
            <mdc-option value="7" label="Option 7"></mdc-option>
            <mdc-option value="8" label="Option 8"></mdc-option>
            <mdc-option value="9" label="Option 9"></mdc-option>
          </mdc-selectlistbox>
        </mdc-select>
      </div>
    </mdc-popover>
  `;

  await componentsPage.mount({
    html: `
    <div class="popoverWrapper">
      ${popoverHTML}
      <mdc-popover 
        triggerID="trigger-button-1" 
        placement="${POPOVER_PLACEMENT.RIGHT_START}" 
        show-arrow 
        visible 
        color="contrast"
      >
        <mdc-text>
          Popover Contrast
        </mdc-text>
      </mdc-popover>
      ${popoverWithSelect}
      <br/></br/>
    </div>`,
    clearDocument: true,
  });

  const popoverWrapper = componentsPage.page.locator('.popoverWrapper');
  const selectPopoverTrigger = componentsPage.page.locator('#select-popover-trigger');
  await selectPopoverTrigger.click();
  const selectPopoverInternal = componentsPage.page.locator('mdc-select[id="select-popover-2"]');
  await selectPopoverInternal.waitFor();
  await selectPopoverInternal.click();

  await popoverWrapper.waitFor();
  return popoverWrapper;
};

/**
 * ATTRIBUTE TEST CASES
 *
 * @param componentsPage - ComponentsPage instance
 */
const attributeTestCases = async (componentsPage: ComponentsPage) => {
  const { popover, triggerButton } = await setup({
    componentsPage,
    id: 'popover',
    triggerID: 'trigger-button',
    children: 'Lorem ipsum dolor sit amet.',
  });

  /**
   * DEFAULTS ATTRIBUTES
   */
  await test.step('default attributes for popover', async () => {
    await expect(popover).toHaveAttribute('placement', DEFAULTS.PLACEMENT);
    await expect(popover).toHaveAttribute('delay', DEFAULTS.DELAY);
    await expect(popover).toHaveAttribute('z-index', DEFAULTS.Z_INDEX.toString());
    await expect(popover).not.toHaveAttribute('visible');
    await expect(popover).toHaveAttribute('offset', DEFAULTS.OFFSET.toString());
    await expect(popover).not.toHaveAttribute('interactive');
    await expect(popover).not.toHaveAttribute('focus-trap');
    await expect(popover).not.toHaveAttribute('show-arrow');
    await expect(popover).toHaveAttribute('color', DEFAULTS.COLOR);
    await expect(popover).not.toHaveAttribute('flip');
    await expect(popover).not.toHaveAttribute('size');
    await expect(popover).not.toHaveAttribute('backdrop');
    await expect(popover).not.toHaveAttribute('close-button');
    await expect(popover).not.toHaveAttribute('prevent-scroll');
    await expect(popover).not.toHaveAttribute('hide-on-blur');
    await expect(popover).not.toHaveAttribute('hide-on-escape');
    await expect(popover).not.toHaveAttribute('hide-on-outside-click');
    await expect(popover).not.toHaveAttribute('focus-back-to-trigger');
    await expect(popover).not.toHaveAttribute('close-button-aria-label');
    await expect(popover).not.toHaveAttribute('disable-aria-expanded');
    await expect(popover).not.toHaveAttribute('aria-label');
    await expect(popover).not.toHaveAttribute('aria-labelledby');
    await expect(popover).not.toHaveAttribute('aria-describedby');
    await expect(popover).toHaveAttribute('role', DEFAULTS.ROLE);
  });

  /**
   * SET ATTRIBUTES
   */
  await test.step('attributes should be set correctly for popover', async () => {
    await componentsPage.setAttributes(popover, {
      placement: POPOVER_PLACEMENT.TOP,
      trigger: TRIGGER.MANUAL,
      delay: '100,100',
      'z-index': '2000',
      visible: '',
      offset: '8',
      interactive: '',
      'focus-trap': '',
      'show-arrow': '',
      color: COLOR.CONTRAST,
      flip: 'false',
      size: '',
      backdrop: '',
      'close-button': '',
      'prevent-scroll': '',
      'hide-on-blur': '',
      'hide-on-escape': '',
      'hide-on-outside-click': '',
      'focus-back-to-trigger': '',
      'close-button-aria-label': 'close button',
      'disable-aria-expanded': '',
      'aria-label': 'popover',
      'aria-labelledby': 'popover-label',
      'aria-describedby': 'popover-description',
      role: DEFAULTS.ROLE,
    });
    await expect(popover).toHaveAttribute('placement', POPOVER_PLACEMENT.TOP);
    await expect(popover).toHaveAttribute('delay', '100,100');
    await expect(popover).toHaveAttribute('z-index', '2000');
    await expect(popover).toHaveAttribute('visible');
    await expect(popover).toHaveAttribute('offset', '8');
    await expect(popover).toHaveAttribute('interactive');
    await expect(popover).toHaveAttribute('focus-trap');
    await expect(popover).toHaveAttribute('show-arrow');
    await expect(popover).toHaveAttribute('color', COLOR.CONTRAST);
    await expect(popover).toHaveAttribute('flip', 'false');
    await expect(popover).toHaveAttribute('size');
    await expect(popover).toHaveAttribute('backdrop');
    await expect(popover).toHaveAttribute('close-button');
    await expect(popover).toHaveAttribute('prevent-scroll');
    await expect(popover).toHaveAttribute('hide-on-blur');
    await expect(popover).toHaveAttribute('hide-on-escape');
    await expect(popover).toHaveAttribute('hide-on-outside-click');
    await expect(popover).toHaveAttribute('focus-back-to-trigger');
    await expect(popover).toHaveAttribute('close-button-aria-label', 'close button');
    await expect(popover).toHaveAttribute('disable-aria-expanded');
    await expect(popover).toHaveAttribute('aria-label', 'popover');
    await expect(popover).toHaveAttribute('aria-labelledby', 'popover-label');
    await expect(popover).toHaveAttribute('aria-describedby', 'popover-description');
    await expect(popover).toHaveAttribute('role', DEFAULTS.ROLE);
    // disable-aria-expanded changed after first update
    // it will not remove already existing aria-expanded and aria-haspopup attributes!
    await expect(triggerButton).toHaveAttribute('aria-expanded');
    await expect(triggerButton).toHaveAttribute('aria-haspopup', 'dialog');
    await expect(popover).toHaveAttribute('aria-modal', 'true');
  });

  /**
   * PLACEMENT ATTRIBUTES
   */
  await test.step('Popover Placement Attributes', async () => {
    for (const placement of Object.values(POPOVER_PLACEMENT)) {
      await test.step(`attribute placement ${placement} should be present as expected`, async () => {
        await componentsPage.setAttributes(popover, { placement });
        await expect(popover).toHaveAttribute('placement', placement);
      });
    }
  });

  /**
   * TRIGGER ATTRIBUTES
   */
  await test.step('Popover Trigger Attributes', async () => {
    await test.step('attribute trigger focusin should be present as expected', async () => {
      await componentsPage.setAttributes(popover, { trigger: TRIGGER.FOCUSIN });
      await expect(popover).toHaveAttribute('trigger', TRIGGER.FOCUSIN);
    });

    await test.step('attribute trigger mouseenter should be present as expected', async () => {
      await componentsPage.removeAttribute(popover, 'interactive');
      await componentsPage.setAttributes(popover, { trigger: TRIGGER.MOUSEENTER });
      await expect(popover).toHaveAttribute('trigger', `${TRIGGER.MOUSEENTER} ${TRIGGER.FOCUSIN}`);
    });

    await test.step('attribute trigger mouseenter and interactive popover should be present as expected', async () => {
      await componentsPage.setAttributes(popover, { trigger: TRIGGER.MOUSEENTER, interactive: '' });
      await expect(popover).toHaveAttribute('trigger', `${TRIGGER.MOUSEENTER} ${TRIGGER.CLICK}`);
    });
  });

  /**
   * COLOR ATTRIBUTES
   */
  await test.step('Popover Color Attributes', async () => {
    for (const color of Object.values(COLOR)) {
      await test.step(`attribute placement ${color} should be present as expected`, async () => {
        await componentsPage.setAttributes(popover, { color });
        await expect(popover).toHaveAttribute('color', color);
      });
    }
  });
};

const ariaExpandedAttributeTestCases = async (componentsPage: ComponentsPage) => {
  const { popover, triggerButton } = await setup({
    componentsPage,
    id: 'popover',
    triggerID: 'trigger-button',
    children: 'Lorem ipsum dolor sit amet.',
    visible: true,
    disableAriaExpanded: true,
  });

  await test.step('attributes after disable-aria-expanded should be set correctly for popover', async () => {
    await expect(popover).toHaveAttribute('role', DEFAULTS.ROLE);
    await expect(triggerButton).not.toHaveAttribute('aria-expanded');
    await expect(triggerButton).not.toHaveAttribute('aria-haspopup', 'dialog');
    await expect(popover).toHaveAttribute('aria-modal', 'true');
  });
};

/**
 * INTERACTIONS TEST CASES
 *
 * @param componentsPage - ComponentsPage instance
 */
const interactionsTestCases = async (componentsPage: ComponentsPage) => {
  /**
   * KEYBOARD INTERACTIONS
   */
  await test.step('keyboard', async () => {
    await test.step('Hide on escape (keyboard) inside a dialog', async () => {
      // if hide-on-escape = true and propagate-event-on-escape = false, pressing ESC closes popover, not dialog'
      // Mount a dialog with a popover inside
      await componentsPage.mount({
        html: `
          <mdc-dialog id="test-dialog" visible>
            <div slot="dialog-body">
              <mdc-button id="trigger-button-dialog">Open Popover</mdc-button>
              <mdc-popover
                id="popover"
                triggerId="trigger-button-dialog"
                interactive
                hide-on-escape
                focus-trap
                focus-back-to-trigger
                hide-on-outside-click
              >
                <mdc-button>Button inside Popover inside dialog</mdc-button>
              </mdc-popover>
            </div>
          </mdc-dialog>
        `,
        clearDocument: true,
      });

      const dialog = componentsPage.page.locator('#test-dialog');
      const popover = componentsPage.page.locator('#popover');

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
      }, 'test-dialog');

      // Ensure dialog and popover are visible
      await expect(dialog).toBeVisible();

      await componentsPage.page.locator('#trigger-button-dialog').focus();
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(popover).toBeVisible();

      // Focus the popover and press Escape
      await expect(
        componentsPage.page.getByRole('button', { name: 'Button inside Popover inside dialog' }),
      ).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ESCAPE);

      // Popover should close, dialog should remain open and Popover Button Trigger should be focused
      await expect(popover).not.toBeVisible();
      await expect(dialog).toBeVisible();
      await expect(componentsPage.page.locator('#trigger-button-dialog')).toBeFocused();

      // Press Escape again to close the dialog
      await componentsPage.page.keyboard.press(KEYS.ESCAPE);
      // Dialog should close
      await expect(dialog).not.toBeVisible();
      await expect(popover).not.toBeVisible();
    });
  });
};

/**
 * USER STORIES TEST CASES
 *
 * @param componentsPage - ComponentsPage instance
 */
const userStoriesTestCases = async (componentsPage: ComponentsPage) => {
  await test.step('Default Behavior', async () => {
    const { popover, triggerButton } = await setup({
      componentsPage,
      id: 'popover',
      triggerID: 'trigger-button',
      children: 'Popover content',
    });

    await test.step('Toggle popover on trigger element click (mouse)', async () => {
      await expect(popover).not.toBeVisible();
      await triggerButton.click();
      await expect(popover).toBeVisible();
      await triggerButton.click();
      await expect(popover).not.toBeVisible();
    });

    await test.step('Toggle popover on trigger element activation (keyboard)', async () => {
      await expect(triggerButton).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(popover).toBeVisible();
      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(popover).not.toBeVisible();
      await triggerButton.focus();
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(popover).toBeVisible();
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(popover).not.toBeVisible();
    });

    await test.step('Initial visibility attribute', async () => {
      await expect(popover).not.toBeVisible();
      await triggerButton.click();
      await expect(popover).toBeVisible();
      await componentsPage.removeAttribute(popover, 'visible');
      await expect(popover).not.toBeVisible();
    });
  });

  await test.step('Attributes', async () => {
    const { popover, triggerButton } = await setup({
      componentsPage,
      id: 'popover',
      triggerID: 'trigger-button',
      children: 'Popover content',
    });

    await test.step('Role attribute', async () => {
      await expect(popover).toHaveAttribute('role', ROLE.DIALOG);
      await componentsPage.setAttributes(popover, { role: ROLE.MENU });
      await expect(popover).toHaveAttribute('role', ROLE.MENU);
    });

    await test.step('Placement attribute', async () => {
      await expect(popover).toHaveAttribute('placement', POPOVER_PLACEMENT.BOTTOM);
      await componentsPage.setAttributes(popover, { placement: POPOVER_PLACEMENT.TOP });
      await expect(popover).toHaveAttribute('placement', POPOVER_PLACEMENT.TOP);
    });

    await test.step('Flip attribute', async () => {
      await expect(popover).toHaveAttribute('flip');
      await componentsPage.removeAttribute(popover, 'flip');
      await expect(popover).not.toHaveAttribute('flip');
    });

    await test.step('Display arrow attribute', async () => {
      await triggerButton.click();
      await componentsPage.setAttributes(popover, { 'show-arrow': 'true' });
      await expect(popover.locator('.popover-arrow')).toBeVisible();
      await componentsPage.removeAttribute(popover, 'show-arrow');
      await expect(popover.locator('.popover-arrow')).toHaveCount(0);
    });

    await test.step('Hide on outside click attribute', async () => {
      const { popover } = await setup({
        componentsPage,
        id: 'popover',
        triggerID: 'trigger-button',
        visible: true,
        hideOnOutsideClick: true,
        children: 'Popover content',
      });
      await expect(popover).toBeVisible();
      await componentsPage.page.click('#outside-button');
      await expect(popover).not.toBeVisible();
    });

    await test.step('Hide on blur (focus out) attribute', async () => {
      await componentsPage.mount({
        html: `
          <div>
            <mdc-button id="trigger-button">Trigger</mdc-button>
            <mdc-popover id="popover" triggerID="trigger-button" trigger="focusin" hide-on-blur interactive>
              Popover content <mdc-button id="inside-button">button on popover</mdc-button>
            </mdc-popover>
            <mdc-button id="outside-button">Outside</mdc-button>
          </div>
        `,
        clearDocument: true,
      });
      const popover = componentsPage.page.locator('#popover');
      const triggerButton = componentsPage.page.locator('#trigger-button');
      const outsideButton = componentsPage.page.locator('#outside-button');
      await expect(popover).not.toBeVisible();
      await componentsPage.actionability.pressTab();
      await expect(triggerButton).toBeFocused();
      await expect(popover).toBeVisible();
      await componentsPage.actionability.pressTab();
      await expect(popover.locator('#inside-button')).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(outsideButton).toBeFocused();
      await expect(popover).not.toBeVisible();
    });

    await test.step('Hide on escape attribute', async () => {
      await componentsPage.setAttributes(popover, {
        'hide-on-escape': 'true',
        visible: 'true',
      });
      await triggerButton.focus();
      await expect(popover).toBeVisible();
      await componentsPage.page.keyboard.press(KEYS.ESCAPE);
      await expect(popover).not.toBeVisible();
    });

    await test.step('Focus back to trigger attribute', async () => {
      await componentsPage.setAttributes(popover, {
        'focus-back-to-trigger': 'true',
        visible: 'true',
      });
      await expect(popover).toBeVisible();
      await componentsPage.page.keyboard.press(KEYS.ESCAPE);
      await expect(popover).not.toBeVisible();
      await expect(triggerButton).toBeFocused();
    });

    await test.step('Focus trap inside popover', async () => {
      const { popover, triggerButton } = await setup({
        componentsPage,
        id: 'popover',
        triggerID: 'trigger-button',
        focusTrap: true,
        interactive: true,
        children: '<mdc-button id="first">First</mdc-button><mdc-button id="last">Last</mdc-button>',
      });
      await expect(popover).not.toBeVisible();
      await componentsPage.actionability.pressTab();
      await expect(triggerButton).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(popover).toBeVisible();
      await expect(popover.locator('#first')).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(popover.locator('#last')).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(popover.locator('#first')).toBeFocused();
    });

    await test.step('Prevent outside scroll', async () => {
      await componentsPage.setAttributes(popover, {
        preventScroll: 'true',
      });
      const scrollYBefore = await componentsPage.page.evaluate(() => window.scrollY);
      await componentsPage.page.evaluate(() => window.scrollTo(0, 100));
      const scrollYAfter = await componentsPage.page.evaluate(() => window.scrollY);
      expect(scrollYAfter).toBe(scrollYBefore);
    });

    await test.step('Close button inside popover', async () => {
      const { popover, triggerButton } = await setup({
        componentsPage,
        id: 'popover',
        triggerID: 'trigger-button',
        focusTrap: true,
        interactive: true,
        closeButton: true,
        closeButtonAriaLabel: 'Close',
        children: '<mdc-button id="first">First</mdc-button><mdc-button id="last">Last</mdc-button>',
      });
      const closeButton = popover.locator('mdc-button[aria-label="Close"]');
      await componentsPage.actionability.pressTab();
      await expect(triggerButton).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(popover).toBeVisible();
      await expect(closeButton).toBeVisible();
      await expect(closeButton).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(popover).not.toBeVisible();
    });

    await test.step('Backdrop attribute with hide on outside click', async () => {
      await componentsPage.mount({
        html: `
          <div>
            <mdc-button id="trigger-2">Trigger 2 Button</mdc-button>
            <mdc-popover id="second-popover" triggerID="trigger-2">Second Popover Content</mdc-popover>
            <mdc-button id="trigger-1">Trigger 1 Button</mdc-button>
            <mdc-popover id="first-popover" triggerID="trigger-1" backdrop hide-on-outside-click>
              First Popover Content
            </mdc-popover>
          </div>
        `,
        clearDocument: true,
      });
      const trigger1 = componentsPage.page.locator('#trigger-1');
      const popover1 = componentsPage.page.locator('#first-popover');
      const trigger2 = componentsPage.page.locator('#trigger-2');
      const popover2 = componentsPage.page.locator('#second-popover');

      await expect(popover1).not.toBeVisible();
      await trigger1.click();
      await expect(popover1).toBeVisible();
      await trigger2.click({ force: true });
      await expect(popover2).not.toBeVisible();
      await expect(popover1).not.toBeVisible();
      await trigger2.click();
      await expect(popover2).toBeVisible();
    });
  });

  await test.step('Accessibility', async () => {
    const { popover, triggerButton } = await setup({
      componentsPage,
      id: 'popover',
      triggerID: 'trigger-button',
      interactive: true,
      visible: true,
      ariaLabel: 'Popover label',
      ariaLabelledby: 'popover-label',
      ariaDescribedby: 'popover-desc',
      children: 'Popover content',
    });

    await test.step('Default accessibility attributes', async () => {
      await expect(popover).toHaveAttribute('role', ROLE.DIALOG);
      await expect(popover).toHaveAttribute('aria-label', 'Popover label');
      await expect(popover).toHaveAttribute('aria-labelledby', 'popover-label');
      await expect(popover).toHaveAttribute('aria-describedby', 'popover-desc');
      await expect(popover).toHaveAttribute('aria-modal', 'true');
      await expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
      await componentsPage.removeAttribute(popover, 'visible');
      await expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
    });

    await test.step('Popover with disabled aria expanded', async () => {
      await componentsPage.setAttributes(popover, {
        'disable-aria-expanded': 'true',
        visible: 'true',
      });
      // disable-aria-expanded changed after first update
      // it will not remove already existing aria-expanded and aria-haspopup attributes!
      await expect(triggerButton).toHaveAttribute('aria-expanded');
      await expect(triggerButton).toHaveAttribute('aria-haspopup');
    });
  });

  await test.step('Nested Popovers', async () => {
    await test.step('Close only child popover on outside click', async () => {
      const { popover: parentPopover } = await setup({
        componentsPage,
        id: 'parent-popover',
        triggerID: 'trigger-button',
        visible: true,
        hideOnOutsideClick: true,
        children: `
          <mdc-button id="child-trigger">Child</mdc-button>
          <mdc-popover id="child-popover" triggerID="child-trigger" visible hide-on-outside-click>
            <span>Child Content</span>
          </mdc-popover>
        `,
      });
      const childPopover = parentPopover.locator('#child-popover');
      await expect(parentPopover).toBeVisible();
      await expect(childPopover).toBeVisible();
      await componentsPage.page.mouse.click(200, 100); // clicking outside the popover
      await expect(childPopover).not.toBeVisible();
      await expect(parentPopover).toBeVisible();
      await componentsPage.page.mouse.click(200, 100);
      await expect(parentPopover).not.toBeVisible();
    });
  });

  await test.step('Nested MenuPopover', async () => {
    await test.step('Close only child popover on outside click', async () => {
      const { popover: parentPopover } = await setup({
        componentsPage,
        id: 'parent-popover',
        triggerID: 'trigger-button',
        visible: true,
        hideOnOutsideClick: true,
        children: `
          <mdc-button id="child-trigger">Child</mdc-button>
          <mdc-menupopover id="child-popover" triggerID="child-trigger" visible hide-on-outside-click>
            <mdc-menuitem label="menu item"></mdc-menuitem>
          </mdc-menupopover>
        `,
      });
      const childPopover = parentPopover.locator('#child-popover');
      await expect(parentPopover).toBeVisible();
      await expect(childPopover).toBeVisible();
      await componentsPage.page.mouse.click(200, 100); // clicking outside the popover
      await expect(childPopover).not.toBeVisible();
      await expect(parentPopover).toBeVisible();
      await componentsPage.page.mouse.click(200, 100);
      await expect(parentPopover).not.toBeVisible();
    });
  });

  await test.step('Multiple popovers with same trigger using mouse', async () => {
    await componentsPage.mount({
      html: `
        <div style="height: 500px; width: 500px; display: 
        flex; flex-direction: column; align-items: center; justify-content: center;">
          <mdc-button id="trigger-multi">Trigger</mdc-button>
          <mdc-popover id="popover-one" show-arrow triggerID="trigger-multi" trigger="mouseenter" hide-on-escape>This is the first popover</mdc-popover>
          <mdc-popover id="popover-two" show-arrow triggerID="trigger-multi" trigger="click" hide-on-escape
          close-button close-button-aria-label="Close Popover"
          focus-back-to-trigger interactive focus-trap 
          placement="top">this is the second popover</mdc-popover>

        </div>
      `,
      clearDocument: true,
    });
    const trigger = componentsPage.page.locator('#trigger-multi');
    const popoverOne = componentsPage.page.locator('#popover-one');
    const popoverTwo = componentsPage.page.locator('#popover-two');

    // Hover to open first popover
    await trigger.hover();
    await expect(popoverOne).toBeVisible();
    await expect(popoverTwo).not.toBeVisible();

    // Click to open second popover
    await trigger.click();
    await expect(popoverTwo).toBeVisible();
    await expect(popoverOne).toBeVisible();

    // Move mouse away to close first popover
    await componentsPage.page.mouse.move(100, 30);
    await expect(popoverOne).not.toBeVisible();
    await expect(popoverTwo).toBeVisible();

    // Hover again to re-open first popover
    await trigger.hover();
    await expect(popoverOne).toBeVisible();
    await expect(popoverTwo).toBeVisible();

    // Click to close interactive popover
    await trigger.click();
    await expect(popoverTwo).not.toBeVisible();
    await expect(popoverOne).toBeVisible();

    // Move mouse away to close hover popover
    await componentsPage.page.mouse.move(100, 30);
    await expect(popoverOne).not.toBeVisible();
    await expect(popoverTwo).not.toBeVisible();
  });

  await test.step('Multiple popovers with same trigger using keyboard', async () => {
    await componentsPage.mount({
      html: `
        <div style="height: 500px; width: 500px; display: 
        flex; flex-direction: column; align-items: center; justify-content: center;">
          <mdc-button id="trigger-multi">Trigger</mdc-button>
          <mdc-popover id="popover-one" show-arrow triggerID="trigger-multi" trigger="mouseenter" hide-on-escape>This is the first popover</mdc-popover>
          <mdc-popover id="popover-two" show-arrow triggerID="trigger-multi" trigger="click" hide-on-escape
          close-button close-button-aria-label="Close Popover"
          focus-back-to-trigger interactive focus-trap 
          placement="top">this is the second popover</mdc-popover>

        </div>
      `,
      clearDocument: true,
    });
    const trigger = componentsPage.page.locator('#trigger-multi');
    const popoverOne = componentsPage.page.locator('#popover-one');
    const popoverTwo = componentsPage.page.locator('#popover-two');

    // Focus to open first popover
    await componentsPage.actionability.pressTab();
    await expect(trigger).toBeFocused();
    await expect(popoverOne).toBeVisible();
    await expect(popoverTwo).not.toBeVisible();

    // Press Space to open second popover and close first
    await componentsPage.page.keyboard.press(KEYS.SPACE);
    await expect(popoverTwo).toBeVisible();
    await expect(popoverOne).not.toBeVisible();

    // Press Escape to close second popover, first should re-open
    await componentsPage.page.keyboard.press(KEYS.ESCAPE);
    await expect(popoverTwo).not.toBeVisible();
    await expect(popoverOne).toBeVisible();

    // Press Escape again to close first popover
    await componentsPage.page.keyboard.press(KEYS.ESCAPE);
    await expect(popoverOne).not.toBeVisible();
    await expect(trigger).toBeFocused();
  });

  await test.step('Tooltip and popover with keepConnectedTooltipOpen as false', async () => {
    await componentsPage.mount({
      html: `
        <div style="height: 500px; width: 500px; display: 
        flex; flex-direction: column; align-items: center; justify-content: center;">
          <mdc-button id="trigger-multi">Trigger</mdc-button>
          <mdc-tooltip id="tooltip" show-arrow triggerID="trigger-multi">This is a tooltip</mdc-tooltip>
          <mdc-popover 
            id="popover" 
            triggerID="trigger-multi" 
            trigger="click" 
            show-arrow 
            hide-on-escape
            close-button 
            close-button-aria-label="Close Popover"
            focus-back-to-trigger 
            hide-on-outside-click
            interactive 
            focus-trap
            placement="top"
          >Click Popover</mdc-popover>
        </div>
      `,
      clearDocument: true,
    });
    const trigger = componentsPage.page.locator('#trigger-multi');
    const tooltip = componentsPage.page.locator('#tooltip');
    const popover = componentsPage.page.locator('#popover');

    // Hover to open tooltip
    await trigger.hover();
    await expect(tooltip).toBeVisible();
    await expect(popover).not.toBeVisible();

    // Click to open popover, tooltip should close
    await trigger.click();
    await expect(popover).toBeVisible();
    await expect(tooltip).not.toBeVisible();

    // Hover again while popover is open, tooltip should NOT open, popover remains open
    await componentsPage.page.mouse.move(0, 0);
    await trigger.hover();
    await expect(popover).toBeVisible();
    await expect(tooltip).not.toBeVisible();

    // Click outside to close popover, tooltip should remain closed
    await componentsPage.page.mouse.click(0, 0);
    await expect(popover).not.toBeVisible();
    await expect(tooltip).not.toBeVisible();

    // Tooltip should be hoverable again
    await trigger.hover();
    await expect(tooltip).toBeVisible();
    await expect(popover).not.toBeVisible();
  });

  await test.step('Popover and Tooltip on same trigger and Dialog opens', async () => {
    await componentsPage.mount({
      html: `
        <div style="height: 500px; width: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <mdc-button id="trigger">Trigger</mdc-button>
          <mdc-tooltip id="tooltip" show-arrow triggerID="trigger">Tooltip content</mdc-tooltip>
          <mdc-popover id="popover" triggerID="trigger" trigger="click" show-arrow interactive focus-trap keep-connected-tooltip-closed>
            <mdc-button id="open-dialog">Open Dialog</mdc-button>
          </mdc-popover>
          <mdc-dialog id="dialog" close-button-aria-label="Close Dialog">
            <div slot="dialog-body">
              <mdc-text>Dialog Content</mdc-text>
              <mdc-button id="dialog-action">Action</mdc-button>
            </div>
          </mdc-dialog>
        </div>
      `,
      clearDocument: true,
    });

    // Attach click handler to #open-dialog to open dialog and close popover
    await componentsPage.page.evaluate(() => {
      const openDialogBtn = document.querySelector('#open-dialog');
      if (openDialogBtn) {
        openDialogBtn.addEventListener('click', () => {
          const dialog = document.querySelector('#dialog') as Dialog;
          if (dialog) dialog.visible = true;
          const popover = document.querySelector('#popover') as Popover;
          if (popover) popover.visible = false;
        });
      }
    });

    const trigger = componentsPage.page.locator('#trigger');
    const tooltip = componentsPage.page.locator('#tooltip');
    const popover = componentsPage.page.locator('#popover');
    const openDialogBtn = componentsPage.page.locator('#open-dialog');
    const dialog = componentsPage.page.locator('#dialog');
    const dialogCloseButton = dialog.locator('mdc-button[aria-label="Close Dialog"]');

    // Focus on trigger, tooltip should open
    await componentsPage.actionability.pressTab();
    await expect(trigger).toBeFocused();
    await expect(tooltip).toBeVisible();

    // Press Space to open popover, tooltip should close, popover opens, focus moves inside
    await componentsPage.page.keyboard.press(KEYS.SPACE);
    await expect(popover).toBeVisible();
    await expect(tooltip).not.toBeVisible();
    await expect(openDialogBtn).toBeFocused();

    // Press Space on action inside popover to open dialog
    await componentsPage.page.keyboard.press(KEYS.SPACE);

    await expect(dialog).toBeVisible();
    await expect(popover).not.toBeVisible();
    await expect(tooltip).not.toBeVisible();
    await expect(dialogCloseButton).toBeFocused();
  });

  await test.step('Focus does not return to trigger by default', async () => {
    await componentsPage.mount({
      html: `
        <div style="height: 500px; width: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <mdc-button id="trigger">Trigger</mdc-button>
          <mdc-tooltip id="tooltip" show-arrow triggerID="trigger">Tooltip content</mdc-tooltip>
            <mdc-popover id="popover" triggerID="trigger" trigger="click" show-arrow interactive focus-trap hide-on-escape>
              <mdc-button id="popover-action">Action</mdc-button>
            </mdc-popover>
        </div>
      `,
      clearDocument: true,
    });

    const trigger = componentsPage.page.locator('#trigger');
    const tooltip = componentsPage.page.locator('#tooltip');
    const popover = componentsPage.page.locator('#popover');
    const popoverActionButton = componentsPage.page.locator('#popover-action');

    // Focus on trigger, tooltip should open
    await componentsPage.actionability.pressTab();
    await expect(trigger).toBeFocused();
    await expect(tooltip).toBeVisible();

    // Press Space to open popover, tooltip should close, popover opens, focus moves inside
    await componentsPage.page.keyboard.press(KEYS.SPACE);
    await expect(popover).toBeVisible();
    await expect(tooltip).not.toBeVisible();
    await expect(popoverActionButton).toBeFocused();

    // Press Space on action inside popover to open dialog
    await componentsPage.page.keyboard.press(KEYS.ESCAPE);

    await expect(popover).not.toBeVisible();
    await expect(tooltip).not.toBeVisible();
    await expect(trigger).not.toBeFocused();
  });

  await test.step('Focus does return to trigger when popover has focus-back-to-trigger attribute', async () => {
    await componentsPage.mount({
      html: `
        <div style="height: 500px; width: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <mdc-button id="trigger">Trigger</mdc-button>
          <mdc-tooltip id="tooltip" show-arrow triggerID="trigger">Tooltip content</mdc-tooltip>
            <mdc-popover id="popover" triggerID="trigger" trigger="click" show-arrow interactive focus-trap hide-on-escape focus-back-to-trigger>
              <mdc-button id="popover-action">Action</mdc-button>
            </mdc-popover>
        </div>
      `,
      clearDocument: true,
    });

    const trigger = componentsPage.page.locator('#trigger');
    const tooltip = componentsPage.page.locator('#tooltip');
    const popover = componentsPage.page.locator('#popover');
    const popoverActionButton = componentsPage.page.locator('#popover-action');

    // Focus on trigger, tooltip should open
    await componentsPage.actionability.pressTab();
    await expect(trigger).toBeFocused();
    await expect(tooltip).toBeVisible();

    // Press Space to open popover, tooltip should close, popover opens, focus moves inside
    await componentsPage.page.keyboard.press(KEYS.SPACE);
    await expect(popover).toBeVisible();
    await expect(tooltip).not.toBeVisible();
    await expect(popoverActionButton).toBeFocused();

    // Press Space on action inside popover to open dialog
    await componentsPage.page.keyboard.press(KEYS.ESCAPE);

    await expect(popover).not.toBeVisible();
    await expect(tooltip).not.toBeVisible();
    await expect(trigger).toBeFocused();
  });

  await test.step('Tooltip on trigger element does not open if it does not have visual focus when popover is closed', async () => {
    await componentsPage.mount({
      html: `
        <div style="height: 500px; width: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <p id="text-outside-popover">Backdrop</p>
          <mdc-button id="trigger">Trigger</mdc-button>
          <mdc-tooltip id="tooltip" show-arrow triggerID="trigger">Tooltip content</mdc-tooltip>
            <mdc-popover id="popover" triggerID="trigger" trigger="click" placement="bottom" show-arrow interactive focus-trap hide-on-escape hide-on-outside-click backdrop focus-back-to-trigger>
              <mdc-button id="popover-action">Action</mdc-button>
              <p id="popover-label">Popover Label</p>
            </mdc-popover>
        </div>
      `,
      clearDocument: true,
    });

    const trigger = componentsPage.page.locator('#trigger');
    const tooltip = componentsPage.page.locator('#tooltip');
    const popover = componentsPage.page.locator('#popover');
    const popoverActionButton = componentsPage.page.locator('#popover-action');
    const popoverLabel = componentsPage.page.locator('#popover-label');
    const backdrop = componentsPage.page.locator('#text-outside-popover');

    // Focus on trigger, tooltip should open
    await trigger.hover();
    await expect(tooltip).toBeVisible();

    // Open popover, tooltip should close, popover opens, focus moves inside
    await trigger.click();
    await expect(popover).toBeVisible();
    await expect(tooltip).not.toBeVisible();
    await expect(popoverActionButton).toBeFocused();

    // Click on p tag to remove focus from inside popover
    await popoverLabel.click();
    await expect(popoverActionButton).not.toBeFocused();

    // Click on backdrop to close popover
    await backdrop.click({ force: true });

    await expect(popover).not.toBeVisible();
    await expect(tooltip).not.toBeVisible();
    await expect(trigger).toBeFocused();
  });
};

test('mdc-popover', async ({ componentsPage }) => {
  /**
   * ATTRIBUTES
   */
  await test.step('attributes for popover component', async () => {
    await attributeTestCases(componentsPage);
  });

  /**
   * disabled-aria-expanded ATTRIBUTE
   */
  await test.step('disabled-aria-expanded attribute for popover component', async () => {
    await ariaExpandedAttributeTestCases(componentsPage);
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility for popover', async () => {
    const { popover: popoverInteractive, triggerButton: triggerButtonInteractive } = await setup({
      componentsPage,
      id: 'popover',
      triggerID: 'trigger-button',
      trigger: TRIGGER.CLICK,
      children: '<mdc-button>Interactive Popover</mdc-button>',
      interactive: true,
    });
    await triggerButtonInteractive.click();
    await expect(popoverInteractive).toBeVisible();
    await componentsPage.accessibility.checkForA11yViolations('popover-default');
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions for popover', async () => {
    await interactionsTestCases(componentsPage);
  });

  /**
   * USER STORIES
   */
  await test.step('user stories for popover', async () => {
    await userStoriesTestCases(componentsPage);
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression for popover', async () => {
    await componentsPage.page.setViewportSize({ width: 600, height: 2100 });
    const visualPopover = await visualTestingSetup(componentsPage);

    await test.step('matches screenshot of popover', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-popover', {
        element: visualPopover,
      });
    });
  });

  /**
   * DYNAMIC CONTENT
   */
  await test.step('popover handle dynamic content changes', async () => {
    await componentsPage.mount({
      html: `<div id="root">
            <div id="container"></div>
        </div>`,
      clearDocument: true,
    });

    type Utils = {
      $: (id: string) => HTMLElement;
      wait: (ms: number) => Promise<void>;
      rmById: (id: string) => void;
      createPopover: (attrs?: Record<string, string>) => void;
      createTrigger: () => void;
      init: () => void;
    };

    // Prepare script to add popover and trigger dynamically
    await componentsPage.page.evaluate(async () => {
      const w = window as typeof window & Utils;

      w.$ = id => document.getElementById(id)!;

      w.wait = (ms: number) =>
        new Promise(resolve => {
          setTimeout(resolve, ms);
        });

      w.rmById = (id: string) => {
        const el = w.$(id);
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      };

      w.createPopover = (attrs = {}) => {
        const container = w.$('container');
        if (container) {
          const popover = document.createElement('mdc-popover');
          popover.setAttribute('id', 'runtime-popover');
          popover.setAttribute('triggerid', 'runtime-trigger');
          Object.entries(attrs).forEach(([key, value]) => {
            popover.setAttribute(key, value);
          });
          popover.innerHTML = 'Runtime Popover Content';
          container.appendChild(popover);
        }
      };

      w.createTrigger = () => {
        const container = w.$('container');
        if (container) {
          const trigger = document.createElement('mdc-button');
          trigger.setAttribute('id', 'runtime-trigger');
          trigger.textContent = 'Runtime Trigger';
          container.appendChild(trigger);
        }
      };

      w.init = () => {
        w.$('root').innerHTML = `<div id="container"></div>`;
      };
    });

    const container = componentsPage.page.locator('#container');
    const popover = componentsPage.page.locator('#runtime-popover');
    const trigger = componentsPage.page.locator('#runtime-trigger');

    await test.step('popover created befor trigger', async () => {
      await componentsPage.page.evaluate(async () => {
        const w = window as typeof window & Utils;
        w.init();

        w.createPopover();
        await w.wait(100);
        w.createTrigger();
      });

      // Wait for the trigger to be available
      await expect(trigger).toBeVisible();

      // Click the trigger to open the popover
      await trigger.click();
      await expect(popover).toBeVisible();

      // Click the trigger again to close the popover
      await trigger.click();
      await expect(popover).not.toBeVisible();
    });

    await test.step('Remove and re-create popover', async () => {
      await componentsPage.page.evaluate(async () => {
        const w = window as typeof window & Utils;

        w.init();

        w.createTrigger();
        w.createPopover();
        w.rmById('runtime-popover');
        await w.wait(100);
        w.createPopover();
      });

      // Wait for the trigger to be available
      await expect(trigger).toBeVisible();

      // Click the trigger to open the popover
      await trigger.click();
      await expect(popover).toBeVisible();

      // Click the trigger again to close the popover
      await trigger.click();
      await expect(popover).not.toBeVisible();
    });

    await test.step('Remove and re-create trigger', async () => {
      await componentsPage.page.evaluate(async () => {
        const w = window as typeof window & Utils;

        w.init();

        w.createTrigger();
        w.createPopover();
        w.rmById('runtime-trigger');
        await w.wait(100);
        w.createTrigger();
      });

      // Wait for the trigger to be available
      await expect(trigger).toBeVisible();

      // Click the trigger to open the popover
      await trigger.click();
      await expect(popover).toBeVisible();

      // Click the trigger again to close the popover
      await trigger.click();
      await expect(popover).not.toBeVisible();
    });

    await test.step('Append to attribute mount and unmount the popover correctly', async () => {
      await componentsPage.page.evaluate(async () => {
        const w = window as typeof window & Utils;

        w.init();
        w.createTrigger();
        w.createPopover({ 'append-to': 'root' });
      });

      await expect(popover.evaluate(node => node.parentElement?.id)).resolves.toBe('root');
      await expect(container.locator('mdc-popoverportal')).toHaveCount(1);
      await expect(container.locator('mdc-popoverportal')).not.toBeVisible();

      await componentsPage.page.evaluate(async () => {
        const w = window as typeof window & Utils;

        w.rmById('container');
      });

      await expect(popover).toHaveCount(0);
      await expect(container.locator('mdc-popoverportal')).toHaveCount(0);
    });

    await test.step('Removing of appended popover will remove the corresponding portal element as well', async () => {
      await componentsPage.page.evaluate(() => {
        const w = window as typeof window & Utils;

        w.init();
        w.createTrigger();
        w.createPopover({ 'append-to': 'root' });
      });

      await expect(popover.evaluate(node => node.parentElement?.id)).resolves.toBe('root');
      await expect(container.locator('mdc-popoverportal')).toHaveCount(1);
      await expect(container.locator('mdc-popoverportal')).not.toBeVisible();

      await componentsPage.page.evaluate(() => {
        const w = window as typeof window & Utils;

        w.rmById('runtime-popover');
      });

      await expect(popover).toHaveCount(0);
      await expect(container.locator('mdc-popoverportal')).toHaveCount(0);
    });
  });
});
