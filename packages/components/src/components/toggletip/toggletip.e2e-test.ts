/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import { expect } from '@playwright/test';

import { test, ComponentsPage } from '../../../config/playwright/setup';
import type { PopoverColor, PopoverPlacement } from '../popover/popover.types';
import { COLOR, POPOVER_PLACEMENT, DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';

import { DEFAULTS } from './toggletip.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  closeButton?: boolean;
  closeButtonAriaLabel?: string;
  color?: PopoverColor;
  id: string;
  offset?: string;
  placement?: PopoverPlacement;
  showArrow?: boolean;
  showTestButton?: boolean;
  triggerID: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="wrapper" >
      <div style="height: 10vh">
        <mdc-avatarbutton
          aria-label="Trigger button"
          icon-name="placeholder-bold"
          initials="MD"
          id="${restArgs.triggerID}">
        </mdc-avatarbutton>
      </div>
      <mdc-toggletip
        ${restArgs.closeButton ? 'close-button' : ''}
        ${restArgs.closeButtonAriaLabel ? `close-button-aria-label="${restArgs.closeButtonAriaLabel}"` : ''}
        ${restArgs.color ? `color="${restArgs.color}"` : ''}
        ${restArgs.id ? `id="${restArgs.id}"` : ''}
        ${restArgs.offset ? `offset="${restArgs.offset}"` : ''}
        ${restArgs.placement ? `placement="${restArgs.placement}"` : ''}
        ${restArgs.showArrow ? 'show-arrow' : ''}
        ${restArgs.triggerID ? `triggerID="${restArgs.triggerID}"` : ''}
      ><div>
          The toggletip with a
          <mdc-link
            inline icon-name="placeholder-bold" href="https://www.webex.com" target="_blank" rel="noopener noreferrer"
          >link</mdc-link>.
        </div>
      </mdc-toggletip>

      ${restArgs.showTestButton ? '<mdc-button style="margin-top: 100px;">Test button</mdc-button>' : ''}
    </div>
    `,
    clearDocument: true,
  });
  const wrapper = componentsPage.page.locator('div#wrapper');
  await wrapper.waitFor();
  const toggletip = componentsPage.page.locator(`#${restArgs.id}`).first();
  const triggerButton = componentsPage.page.locator(`#${restArgs.triggerID}`).first();
  return { toggletip, triggerButton };
};

/**
 * ATTRIBUTE TEST CASES
 *
 * @param componentsPage - ComponentsPage instance
 */
const attributeTestCases = async (componentsPage: ComponentsPage) => {
  const { toggletip, triggerButton } = await setup({
    componentsPage,
    id: 'toggletip',
    triggerID: 'trigger-button',
  });

  /**
   * DEFAULTS ATTRIBUTES
   */
  await test.step('default attributes for toggletip', async () => {
    await expect(toggletip).toHaveAttribute('backdrop');
    await expect(toggletip).toHaveAttribute('color', 'tonal');
    await expect(toggletip).toHaveAttribute('delay', '0,0');
    await expect(toggletip).toHaveAttribute('hide-on-blur');
    await expect(toggletip).toHaveAttribute('hide-on-escape');
    await expect(toggletip).toHaveAttribute('interactive');
    await expect(toggletip).toHaveAttribute('offset', '4');
    await expect(toggletip).toHaveAttribute('placement', 'top');
    await expect(toggletip).toHaveAttribute('role', 'dialog');
    await expect(toggletip).toHaveAttribute('show-arrow');
    await expect(toggletip).toHaveAttribute('trigger', 'click');

    await expect(toggletip).not.toHaveAttribute('visible');
    await expect(toggletip).not.toHaveAttribute('enabledPreventScroll');
    await expect(toggletip).not.toHaveAttribute('flip');
    await expect(toggletip).not.toHaveAttribute('prevent-scroll');
    await expect(toggletip).not.toHaveAttribute('close-button');
    await expect(toggletip).toHaveAttribute('hide-on-outside-click');
    await expect(toggletip).toHaveAttribute('focus-back-to-trigger');
    await expect(toggletip).not.toHaveAttribute('size');
    await expect(toggletip).not.toHaveAttribute('disable-aria-expanded');

    await expect(toggletip).toHaveAttribute('focus-trap', '');
    await expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
    await expect(triggerButton).toHaveAttribute('aria-haspopup', 'dialog');
  });

  /**
   * SET ATTRIBUTES
   */
  await test.step('attributes should be set correctly for toggletip', async () => {
    await componentsPage.setAttributes(toggletip, {
      'close-button': '',
      'close-button-aria-label': 'Close',
      color: 'contrast',
      offset: '8',
      placement: 'bottom',
      'show-arrow': '',
    });

    await expect(toggletip).toHaveAttribute('close-button');
    await expect(toggletip).toHaveAttribute('close-button-aria-label', 'Close');
    await expect(toggletip.locator('[part="popover-close"]')).toHaveAttribute('aria-label', 'Close');
    await expect(toggletip).toHaveAttribute('color', 'contrast');
    await expect(toggletip).toHaveAttribute('delay', '0,0');
    await expect(toggletip).toHaveAttribute('offset', '8');
    await expect(toggletip).toHaveAttribute('placement', 'bottom');
    await expect(toggletip).toHaveAttribute('show-arrow');
  });

  /**
   * COLOR ATTRIBUTES
   */
  await test.step('Toggletip color attributes', async () => {
    for (const color of Object.values(COLOR)) {
      await test.step(`attribute placement ${color} should be present as expected`, async () => {
        await componentsPage.setAttributes(toggletip, { color });
        await expect(toggletip).toHaveAttribute('color', color);
      });
    }
  });

  /**
   * PLACEMENT ATTRIBUTES
   */
  await test.step('Toggletip placement attributes', async () => {
    for (const placement of Object.values(POPOVER_PLACEMENT)) {
      await test.step(`attribute placement ${placement} should be present as expected`, async () => {
        await componentsPage.setAttributes(toggletip, { placement });
        await expect(toggletip).toHaveAttribute('placement', placement);
      });
    }
  });

  /**
   * INVALID ATTRIBUTES
   */
  await test.step('Invalid Attributes', async () => {
    await test.step('should fallback to default values when invalid attributes are passed', async () => {
      await componentsPage.setAttributes(toggletip, {
        color: 'invalid',
        placement: 'invalid',
      });
      await expect(toggletip).toHaveAttribute('color', POPOVER_DEFAULTS.COLOR);
      await expect(toggletip).toHaveAttribute('placement', DEFAULTS.PLACEMENT);
    });
  });
};

/**
 * INTERACTIONS TEST CASES
 *
 * @param componentsPage - ComponentsPage instance
 */
const interactionsTestCases = async (componentsPage: ComponentsPage) => {
  const { toggletip, triggerButton } = await setup({
    componentsPage,
    closeButton: true,
    closeButtonAriaLabel: 'Close',
    id: 'toggletip',
    triggerID: 'trigger-button',
    showTestButton: true,
  });
  await test.step('focus and actions', async () => {
    await test.step('focusing on trigger button should not show toggletip', async () => {
      await componentsPage.actionability.pressTab();
      await expect(triggerButton).toBeFocused();
      await expect(toggletip).not.toBeVisible();
    });
    await test.step('clicking on trigger button should show toggletip and focus on close button', async () => {
      await triggerButton.click();
      await expect(toggletip).toBeVisible();
      await expect(toggletip.locator('[part="popover-close"]')).toBeFocused();
    });
    await test.step('Pressing Enter key when trigger button is focussed should show toggletip and focus on close button', async () => {
      await triggerButton.focus();
      await componentsPage.page.keyboard.press('Enter');
      await expect(toggletip).toBeVisible();
      await expect(toggletip.locator('[part="popover-close"]')).toBeFocused();
      await expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
    });
    await test.step('Pressing Space key when trigger button is focussed should show toggletip and focus on close button', async () => {
      await triggerButton.focus();
      await componentsPage.page.keyboard.press('Enter');
      await expect(toggletip).toBeVisible();
      await expect(toggletip.locator('[part="popover-close"]')).toBeFocused();
    });
    await test.step('focus should move to next focusable element in toggletip', async () => {
      await triggerButton.focus();
      await componentsPage.page.keyboard.press('Enter');
      await expect(toggletip).toBeVisible();
      await expect(toggletip.locator('[part="popover-close"]')).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(toggletip.locator('mdc-link')).toBeFocused();
    });
    await test.step('toggletip shall trap focus', async () => {
      await triggerButton.focus();
      await componentsPage.page.keyboard.press('Enter');
      await expect(toggletip).toBeVisible();
      await expect(toggletip.locator('[part="popover-close"]')).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(toggletip.locator('mdc-link')).toBeFocused();
      await componentsPage.actionability.pressTab();
      await expect(toggletip.locator('[part="popover-close"]')).toBeFocused();
    });
    await test.step('clicking on close button in toggltip shall dismiss toggletip', async () => {
      await triggerButton.focus();
      await componentsPage.page.keyboard.press('Enter');
      await expect(toggletip).toBeVisible();
      await toggletip.locator('[part="popover-close"]').click();
      await expect(toggletip).not.toBeVisible();
      await expect(triggerButton).toBeFocused();
    });
    await test.step('pressing Esc key shall dismiss toggletip', async () => {
      await triggerButton.focus();
      await componentsPage.page.keyboard.press('Enter');
      await expect(toggletip).toBeVisible();
      await componentsPage.page.keyboard.press('Escape');
      await expect(toggletip).not.toBeVisible();
      await expect(triggerButton).toBeFocused();
    });
  });
};

const visualTestingSetup = async (componentsPage: ComponentsPage, color: string) => {
  await componentsPage.mount({
    html: `
    <div class="popoverWrapper">
      <div style="display: flex; flex-direction: column; gap: 100px; align-items: center; margin: 100px;">
        <mdc-button id="trigger-button">${color} Trigger</mdc-button>
      </div>

      <mdc-toggletip
        close-button-aria-label="Close"
        close-button
        color=${color}
        triggerID="trigger-button"
        visible
      ><div>
          The toggletip with color ${color}.
        </div>
      </mdc-toggletip>
      </div>`,
    clearDocument: true,
  });

  const toggletip = componentsPage.page.locator('mdc-toggletip');
  await toggletip.waitFor();
  return toggletip;
};

test.use({ viewport: { width: 600, height: 400 } });
test('mdc-toggletip', async ({ componentsPage }) => {
  /**
   * ATTRIBUTES
   */
  await test.step('attributes for toggletip component', async () => {
    await attributeTestCases(componentsPage);
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions for toggletip', async () => {
    await interactionsTestCases(componentsPage);
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility for toggletip', async () => {
    await componentsPage.accessibility.checkForA11yViolations('toggletip');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of tonal toggletip', async () => {
      await visualTestingSetup(componentsPage, 'tonal');
      await componentsPage.visualRegression.takeScreenshot('mdc-toggletip-tonal');
    });

    await test.step('matches screenshot of contrast toggletip', async () => {
      await visualTestingSetup(componentsPage, 'contrast');
      await componentsPage.visualRegression.takeScreenshot('mdc-toggletip-contrast');
    });
  });
});
