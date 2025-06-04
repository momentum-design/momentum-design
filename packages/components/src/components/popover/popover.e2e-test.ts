/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { test, ComponentsPage } from '../../../config/playwright/setup';
import type { PopoverPlacement, PopoverTrigger, PopoverColor } from './popover.types';
import { DEFAULTS, POPOVER_PLACEMENT, TRIGGER, COLOR } from './popover.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  triggerID: string;
  trigger?: PopoverTrigger;
  placement?: PopoverPlacement;
  delay?: string;
  zIndex?: number;
  visible?: boolean;
  offset?: boolean;
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
    <div id="wrapper" >
      <div style="height: 10vh">
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
          <mdc-option value="1">Option 1</mdc-option>
          <mdc-option value="2">Option 2</mdc-option>
          <mdc-option value="3">Option 3</mdc-option>
        </mdc-select>
        <mdc-select id="select-popover-2">
          <mdc-option value="4">Option 4</mdc-option>
          <mdc-option value="5">Option 5</mdc-option>
          <mdc-option value="6">Option 6</mdc-option>
        </mdc-select>
        <mdc-select id="select-popover-3">
          <mdc-option value="7">Option 7</mdc-option>
          <mdc-option value="8">Option 8</mdc-option>
          <mdc-option value="9">Option 9</mdc-option>
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
  const selectPopoverInternal = componentsPage.page.locator('#select-popover-2');
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
    await expect(popover).toHaveAttribute('flip');
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
   * INTERACTIVE POPOVER DEFAULTS ACCESSIBILITY ATTRIBUTES
   */
  await test.step('Defaults accessibility attributes with interactive popover', async () => {
    await componentsPage.setAttributes(popover, { interactive: '' });
    await componentsPage.removeAttribute(popover, 'disable-aria-expanded');
    await expect(popover).toHaveAttribute('interactive');
    await expect(popover).not.toHaveAttribute('disable-aria-expanded');
    await expect(popover).toHaveAttribute('aria-label', 'Trigger Button of Popover');
    await expect(popover).toHaveAttribute('aria-labelledby', 'trigger-button');
    await expect(popover).toHaveAttribute('aria-modal', 'true');
    await expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
    await expect(triggerButton).toHaveAttribute('aria-haspopup', 'dialog');
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
    await expect(triggerButton).not.toHaveAttribute('aria-expanded');
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

  /**
   * INVALID ATTRIBUTES
   */
  await test.step('Invalid Attributes', async () => {
    await test.step('should fallback to default values when invalid attributes are passed', async () => {
      await componentsPage.setAttributes(popover, {
        placement: 'invalid',
        trigger: 'invalid',
        delay: 'invalid',
        color: 'invalid',
      });
      await expect(popover).toHaveAttribute('placement', DEFAULTS.PLACEMENT);
      await expect(popover).toHaveAttribute('trigger', DEFAULTS.TRIGGER);
      await expect(popover).toHaveAttribute('delay', DEFAULTS.DELAY);
      await expect(popover).toHaveAttribute('color', DEFAULTS.COLOR);
    });
  });
};

/**
 * INTERACTIONS TEST CASES
 *
 * @param componentsPage - ComponentsPage instance
 */
const interactionsTestCases = async (componentsPage: ComponentsPage) => {
  const { popover, triggerButton } = await setup({
    componentsPage,
    id: 'popover',
    triggerID: 'trigger-button',
    children: 'Lorem ipsum dolor sit amet.',
    interactive: true,
    closeButton: true,
    focusBackToTrigger: true,
    backdrop: true,
  });

  /**
   * CLICK INTERACTIONS
   */
  await test.step('click', async () => {
    await test.step('clicking button should open popover', async () => {
      await triggerButton.click();
      await expect(popover).toBeVisible();
    });
    await test.step('aria-expanded and aria-haspopup should be set when popover(interactive) is visible', async () => {
      await expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
      await expect(triggerButton).toHaveAttribute('aria-haspopup', 'dialog');
    });
    await test.step('if backdrop set, other element should not be clickable', async () => {
      const outsideButton = componentsPage.page.locator('#outside-button');
      const buttonBox = await outsideButton.boundingBox();
      if (buttonBox) {
        const x = buttonBox.x + buttonBox.width / 2;
        const y = buttonBox.y + buttonBox.height / 2;

        await componentsPage.page.mouse.click(x, y);
        await expect(outsideButton).not.toBeFocused();
      }
    });
    await test.step('clicking close button should close popover and trigger element should be focus', async () => {
      await componentsPage.page.locator('.popover-close').click();
      await expect(popover).not.toBeVisible();
      await expect(triggerButton).toBeFocused();
    });
    await test.step('aria-expanded should be set to false when popover(interactive) is not visible', async () => {
      await expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
    });
    await test.step('if `hideOnOutsideClick` is true clicking outside popover should close popover', async () => {
      await componentsPage.setAttributes(popover, { 'hide-on-outside-click': '' });
      await triggerButton.click();
      await expect(popover).toBeVisible();
      await componentsPage.page.mouse.click(0, 0);
      await expect(popover).not.toBeVisible();
      await expect(componentsPage.page.locator('.popover-backdrop')).not.toBeVisible();
    });
    await test.step('if delay is set to 1000,1000, popover should show/hide after 1 sec when trigger', async () => {
      await componentsPage.setAttributes(popover, { delay: '1000,1000' });
      await triggerButton.click();
      await expect(popover).not.toBeVisible();
      await componentsPage.page.waitForTimeout(1000);
      await expect(popover).toBeVisible();
      await componentsPage.page.locator('.popover-close').click();
      await expect(popover).toBeVisible();
      await componentsPage.page.waitForTimeout(1000);
      await expect(popover).not.toBeVisible();
    });
  });

  /**
   * FOCUS INTERACTIONS
   */
  await test.step('focus', async () => {
    const { popover, triggerButton } = await setup({
      componentsPage,
      id: 'popover',
      triggerID: 'trigger-button',
      trigger: TRIGGER.FOCUSIN,
      children: 'Lorem ipsum dolor sit amet.',
    });
    await test.step('focusing on trigger button should open popover', async () => {
      await triggerButton.focus();
      await expect(popover).toBeVisible();
    });
    await test.step('focusing out the trigger button should close the popover', async () => {
      await componentsPage.page.keyboard.press('Tab');
      await expect(popover).not.toBeVisible();
    });

    const { popover: popoverInteractive, triggerButton: triggerButtonInteractive } = await setup({
      componentsPage,
      id: 'popover',
      triggerID: 'trigger-button',
      trigger: TRIGGER.FOCUSIN,
      children: '<mdc-button>Interactive Popover</mdc-button>',
      interactive: true,
      hideOnBlur: true,
    });

    await test.step('focusing trigger button, focus should go in interactive popover', async () => {
      await triggerButtonInteractive.focus();
      await expect(popoverInteractive).toBeVisible();
      await expect(triggerButtonInteractive).not.toBeFocused();
    });

    await test.step('if hide-on-blur set, focusing out the interactive popover should close the popover', async () => {
      await componentsPage.page.keyboard.press('Tab');
      await expect(popoverInteractive).not.toBeVisible();
    });
  });

  /**
   * KEYBOARD INTERACTIONS
   */
  await test.step('keyboard', async () => {
    await test.step('if hide-on-escapse set, pressing escape should close popover', async () => {
      await componentsPage.setAttributes(popover, { 'hide-on-escape': '' });
      await triggerButton.focus();
      await expect(popover).toBeVisible();
      await componentsPage.page.keyboard.press('Escape');
      await expect(popover).not.toBeVisible();
    });

    await test.step('if focus-trap set, focus should be lock in popover', async () => {
      await componentsPage.setAttributes(popover, { 'focus-trap': '' });
      await triggerButton.focus();
      await expect(popover).toBeVisible();
      await componentsPage.page.keyboard.press('Tab');
      await expect(popover).toBeVisible();
      await componentsPage.page.keyboard.press('Escape');
    });
  });

  /**
   * HOVER INTERACTIONS
   */
  await test.step('hover', async () => {
    await test.step('if trigger is mouseenter, hovering over trigger should open popover', async () => {
      await componentsPage.setAttributes(popover, { trigger: TRIGGER.MOUSEENTER });
      await triggerButton.hover();
      await expect(popover).toBeVisible();
    });
    await test.step('hovering out the trigger should close popover', async () => {
      await componentsPage.page.mouse.move(1000, 1000);
      await expect(popover).not.toBeVisible();
    });
  });
};

test.use({ viewport: { width: 600, height: 2100 } });
test('mdc-popover', async ({ componentsPage }) => {
  /**
   * ATTRIBUTES
   */
  await test.step('attributes for popover component', async () => {
    await attributeTestCases(componentsPage);
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression for popover', async () => {
    const visualPopover = await visualTestingSetup(componentsPage);

    await test.step('matches screenshot of popover', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-popover', {
        element: visualPopover,
      });
    });
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
});
