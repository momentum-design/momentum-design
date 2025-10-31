/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import { expect } from '@playwright/test';

import { test, ComponentsPage } from '../../../config/playwright/setup';
import { PopoverColor, PopoverPlacement, PopoverTrigger } from '../popover/popover.types';
import { COLOR, POPOVER_PLACEMENT, DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';

import { DEFAULTS, TOOLTIP_TYPES } from './tooltip.constants';

type SetupOptions = {
  children?: any;
  componentsPage: ComponentsPage;
  color?: PopoverColor;
  delay?: string;
  id?: string;
  offset?: number;
  placement?: PopoverPlacement;
  showArrow?: boolean;
  tooltipType?: string;
  trigger?: PopoverTrigger;
  triggerID: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="wrapper" >
      <div style="height: 10vh">
        <mdc-button id="${restArgs.triggerID}">Trigger</mdc-button>
        <mdc-button style="margin-top: 2px;">Other button</mdc-button>
      </div>
      <mdc-tooltip
        ${restArgs.color ? `color="${restArgs.color}"` : ''}
        ${restArgs.delay ? `delay="${restArgs.delay}"` : ''}
        ${restArgs.id ? `id="${restArgs.id}"` : ''}
        ${restArgs.offset ? `offset="${restArgs.offset}"` : ''}
        ${restArgs.placement ? `placement="${restArgs.placement}"` : ''}
        ${restArgs.showArrow ? 'show-arrow' : ''}
        ${restArgs.tooltipType ? `tooltip-type="${restArgs.tooltipType}"` : ''}
        ${restArgs.triggerID ? `triggerID="${restArgs.triggerID}"` : ''}
      >${restArgs.children}</mdc-tooltip>
    </div>
    `,
    clearDocument: true,
  });
  const wrapper = componentsPage.page.locator('div#wrapper');
  await wrapper.waitFor();
  const tooltip = componentsPage.page.locator(`#${restArgs.id}`).first();
  const triggerButton = componentsPage.page.locator(`#${restArgs.triggerID}`).first();
  return { tooltip, triggerButton };
};

/**
 * ATTRIBUTE TEST CASES
 *
 * @param componentsPage - ComponentsPage instance
 */
const attributeTestCases = async (componentsPage: ComponentsPage) => {
  const { tooltip, triggerButton } = await setup({
    componentsPage,
    id: 'tooltip',
    triggerID: 'trigger-button',
    children: 'Lorem ipsum dolor sit amet.',
  });

  /**
   * DEFAULTS ATTRIBUTES
   */
  await test.step('default attributes for tooltip', async () => {
    await expect(tooltip).not.toHaveAttribute('backdrop');
    await expect(tooltip).toHaveAttribute('color', 'tonal');
    await expect(tooltip).toHaveAttribute('delay', '0,0');
    await expect(tooltip).not.toHaveAttribute('focus-trap');
    await expect(tooltip).toHaveAttribute('hide-on-blur');
    await expect(tooltip).toHaveAttribute('hide-on-escape');
    await expect(tooltip).not.toHaveAttribute('interactive');
    await expect(tooltip).toHaveAttribute('offset', '4');
    await expect(tooltip).toHaveAttribute('placement', 'bottom');
    await expect(tooltip).toHaveAttribute('role', 'tooltip');
    await expect(tooltip).not.toHaveAttribute('show-arrow');
    await expect(tooltip).toHaveAttribute('trigger', 'mouseenter focusin');
    await expect(tooltip).toHaveAttribute('tooltip-type', 'description');

    await expect(tooltip).not.toHaveAttribute('visible');
    await expect(tooltip).not.toHaveAttribute('enabledFocusTrap');
    await expect(tooltip).not.toHaveAttribute('enabledPreventScroll');
    await expect(tooltip).not.toHaveAttribute('flip');
    await expect(tooltip).not.toHaveAttribute('focus-trap');
    await expect(tooltip).not.toHaveAttribute('prevent-scroll');
    await expect(tooltip).not.toHaveAttribute('close-button');
    await expect(tooltip).not.toHaveAttribute('hide-on-outside-click');
    await expect(tooltip).not.toHaveAttribute('focus-back-to-trigger');
    await expect(tooltip).not.toHaveAttribute('size');
    await expect(tooltip).toHaveAttribute('disable-aria-expanded');
    await expect(triggerButton).toHaveAttribute('aria-describedby', 'tooltip');
  });

  /**
   * SET ATTRIBUTES
   */
  await test.step('attributes should be set correctly for tooltip', async () => {
    await componentsPage.setAttributes(tooltip, {
      color: 'contrast',
      delay: '100,100',
      offset: '8',
      placement: 'bottom',
      'show-arrow': '',
      'tooltip-type': 'label',
    });
    await expect(tooltip).toHaveAttribute('color', 'contrast');
    await expect(tooltip).toHaveAttribute('delay', '100,100');
    await expect(tooltip).toHaveAttribute('offset', '8');
    await expect(tooltip).toHaveAttribute('placement', 'bottom');
    await expect(tooltip).toHaveAttribute('show-arrow');
    await expect(tooltip).toHaveAttribute('tooltip-type', 'label');
  });

  /**
   * COLOR ATTRIBUTES
   */
  await test.step('Tooltip color attributes', async () => {
    for (const color of Object.values(COLOR)) {
      await test.step(`attribute placement ${color} should be present as expected`, async () => {
        await componentsPage.setAttributes(tooltip, { color });
        await expect(tooltip).toHaveAttribute('color', color);
      });
    }
  });

  /**
   * PLACEMENT ATTRIBUTES
   */
  await test.step('Tooltip placement attributes', async () => {
    for (const placement of Object.values(POPOVER_PLACEMENT)) {
      await test.step(`attribute placement ${placement} should be present as expected`, async () => {
        await componentsPage.setAttributes(tooltip, { placement });
        await expect(tooltip).toHaveAttribute('placement', placement);
      });
    }
  });

  /**
   * TOOLTIP-TYPE ATTRIBUTES
   */
  await test.step('Tooltip type attributes', async () => {
    for (const type of Object.values(TOOLTIP_TYPES)) {
      await test.step(`attribute tooltip type ${type} should be present as expected`, async () => {
        await componentsPage.setAttributes(tooltip, { 'tooltip-type': type });
        await expect(tooltip).toHaveAttribute('tooltip-type', type);
        if (type === TOOLTIP_TYPES.DESCRIPTION) {
          await expect(triggerButton).toHaveAttribute('aria-describedby', 'tooltip');
        } else if (type === TOOLTIP_TYPES.LABEL) {
          await expect(triggerButton).toHaveAttribute('aria-labelledby', 'tooltip');
        }
      });
    }
    await componentsPage.removeAttribute(tooltip, 'tooltip-type');
  });

  /**
   * INVALID ATTRIBUTES
   */
  await test.step('Invalid Attributes', async () => {
    await test.step('should fallback to default values when invalid attributes are passed', async () => {
      await componentsPage.setAttributes(tooltip, {
        color: 'invalid',
        delay: 'invalid',
        placement: 'invalid',
        'tooltip-type': 'invalid',
      });
      await expect(tooltip).toHaveAttribute('color', POPOVER_DEFAULTS.COLOR);
      await expect(tooltip).toHaveAttribute('delay', DEFAULTS.DELAY);
      await expect(tooltip).toHaveAttribute('placement', DEFAULTS.PLACEMENT);
      await expect(tooltip).toHaveAttribute('tooltip-type', DEFAULTS.TOOLTIP_TYPE);
    });
  });
};

const visualTestingSetup = async (componentsPage: ComponentsPage) => {
  await componentsPage.mount({
    html: `
    <div class="popoverWrapper">
      <div style="height: 400px; display: flex; gap: 100px; align-items: center; margin: 100px;">
        <mdc-button id="trigger-button1">Hover here</mdc-button>
        <mdc-button id="trigger-button2">Hover here (contrast)</mdc-button>
      </div>

      <mdc-tooltip
        triggerID="trigger-button1"
        placement="top"
        show-arrow
        visible
      >This is a tooltip.</mdc-tooltip>

      <mdc-tooltip
        color="contrast"
        triggerID="trigger-button2"
        placement="top"
        show-arrow
        visible
      >This is a tooltip with contrast color.</mdc-tooltip>
    </div>`,
    clearDocument: true,
  });

  const tooltipWrapper = componentsPage.page.locator('.popoverWrapper');
  await tooltipWrapper.waitFor();
  return tooltipWrapper;
};

test.use({ viewport: { width: 600, height: 600 } });
test('mdc-tooltip', async ({ componentsPage }) => {
  /**
   * ATTRIBUTES
   */
  await test.step('attributes for tooltip component', async () => {
    await attributeTestCases(componentsPage);
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await visualTestingSetup(componentsPage);

    await test.step('matches screenshot of elements', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-tooltip');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions for tooltip', async () => {
    const { tooltip, triggerButton } = await setup({
      componentsPage,
      id: 'tooltip',
      triggerID: 'trigger-button',
      children: 'Lorem ipsum dolor sit amet.',
      offset: 15,
    });
    await test.step('focus', async () => {
      await test.step('focusing on trigger button should show tooltip', async () => {
        await componentsPage.actionability.pressTab();
        await expect(triggerButton).toBeFocused();
        await expect(tooltip).toBeVisible();
      });
      await test.step('focusing out the trigger button should hide the tooltip', async () => {
        await componentsPage.actionability.pressTab();
        await expect(triggerButton).not.toBeFocused();
        await expect(tooltip).not.toBeVisible();
      });
    });
    await test.step('hover', async () => {
      await test.step('mouseenter in on trigger button should show tooltip', async () => {
        await triggerButton.hover();
        await expect(tooltip).toBeVisible();
      });
      await test.step('mouseout out the trigger button should hide the tooltip', async () => {
        await componentsPage.page.mouse.move(1000, 1000);
        await expect(triggerButton).not.toBeFocused();
        await expect(tooltip).not.toBeVisible();
      });
      await test.step('mouse hovered from trigger to the tooltip content should still keep tooltip visible', async () => {
        await componentsPage.page.mouse.move(40, 20);
        await expect(tooltip).toBeVisible();
        await componentsPage.page.mouse.move(40, 45);
        await expect(tooltip).toBeVisible();
        await componentsPage.page.mouse.move(40, 60);
        await expect(tooltip).toBeVisible();
        await componentsPage.page.mouse.move(40, 100);
        await expect(tooltip).not.toBeVisible();
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility for tooltip', async () => {
    await componentsPage.accessibility.checkForA11yViolations('tooltip');
  });
});
