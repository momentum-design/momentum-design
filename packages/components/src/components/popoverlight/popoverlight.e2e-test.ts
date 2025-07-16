import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  triggerID: string;
  trigger?: string;
  placement?: string;
  delay?: string;
  zIndex?: number;
  visible?: boolean;
  offset?: boolean;
  interactive?: boolean;
  focusTrap?: boolean;
  showArrow?: boolean;
  color?: string;
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
        <mdc-button id="${restArgs.triggerID}" aria-label="Trigger Button of Popoverlight">Click Me!</mdc-button>
      </div>
      <mdc-popoverlight
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
      </mdc-popoverlight>
      <mdc-button id="outside-button">Outside Button</mdc-button>
    </div>
    `,
    clearDocument: true,
  });
  const wrapper = componentsPage.page.locator('div#wrapper');
  await wrapper.waitFor();
  const popoverlight = componentsPage.page.locator(`#${restArgs.id}`);
  const triggerButton = componentsPage.page.locator(`#${restArgs.triggerID}`);
  return { popoverlight, triggerButton };
};

test('mdc-popoverlight', async ({ componentsPage }) => {
  /**
   * ATTRIBUTES
   */
  await test.step('attributes for popoverlight component', async () => {
    const { popoverlight } = await setup({
      componentsPage,
      id: 'popoverlight',
      triggerID: 'trigger-button',
      children: 'Popoverlight content',
    });
    await expect(popoverlight).toHaveAttribute('placement', 'bottom');
    await expect(popoverlight).toHaveAttribute('delay', '0,0');
    await expect(popoverlight).toHaveAttribute('z-index', '1000');
    await expect(popoverlight).not.toHaveAttribute('visible');
    await expect(popoverlight).toHaveAttribute('offset', '4');
    await expect(popoverlight).not.toHaveAttribute('interactive');
    await expect(popoverlight).not.toHaveAttribute('focus-trap');
    await expect(popoverlight).not.toHaveAttribute('show-arrow');
    await expect(popoverlight).toHaveAttribute('color', 'tonal');
    await expect(popoverlight).toHaveAttribute('flip');
    await expect(popoverlight).not.toHaveAttribute('size');
    await expect(popoverlight).not.toHaveAttribute('backdrop');
    await expect(popoverlight).not.toHaveAttribute('close-button');
    await expect(popoverlight).not.toHaveAttribute('prevent-scroll');
    await expect(popoverlight).not.toHaveAttribute('hide-on-blur');
    await expect(popoverlight).not.toHaveAttribute('hide-on-escape');
    await expect(popoverlight).not.toHaveAttribute('hide-on-outside-click');
    await expect(popoverlight).not.toHaveAttribute('focus-back-to-trigger');
    await expect(popoverlight).not.toHaveAttribute('close-button-aria-label');
    await expect(popoverlight).not.toHaveAttribute('disable-aria-expanded');
    await expect(popoverlight).not.toHaveAttribute('aria-label');
    await expect(popoverlight).not.toHaveAttribute('aria-labelledby');
    await expect(popoverlight).not.toHaveAttribute('aria-describedby');
    await expect(popoverlight).toHaveAttribute('role', 'dialog');
  });

  /**
   * SET ATTRIBUTES
   */
  await test.step('attributes should be set correctly for popoverlight', async () => {
    const { popoverlight, triggerButton } = await setup({
      componentsPage,
      id: 'popoverlight',
      triggerID: 'trigger-button',
      placement: 'top',
      trigger: 'manual',
      delay: '100,100',
      zIndex: 2000,
      visible: true,
      offset: true,
      interactive: true,
      focusTrap: true,
      showArrow: true,
      color: 'contrast',
      size: true,
      backdrop: true,
      closeButton: true,
      preventScroll: true,
      hideOnBlur: true,
      hideOnEscape: true,
      hideOnOutsideClick: true,
      focusBackToTrigger: true,
      closeButtonAriaLabel: 'close button',
      disableAriaExpanded: true,
      ariaLabel: 'popoverlight',
      ariaLabelledby: 'popoverlight-label',
      ariaDescribedby: 'popoverlight-description',
      role: 'dialog',
      children: 'Popoverlight content',
    });
    await expect(popoverlight).toHaveAttribute('placement', 'top');
    await expect(popoverlight).toHaveAttribute('delay', '100,100');
    await expect(popoverlight).toHaveAttribute('z-index', '2000');
    await expect(popoverlight).toHaveAttribute('visible');
    await expect(popoverlight).toHaveAttribute('offset');
    await expect(popoverlight).toHaveAttribute('interactive');
    await expect(popoverlight).toHaveAttribute('focus-trap');
    await expect(popoverlight).toHaveAttribute('show-arrow');
    await expect(popoverlight).toHaveAttribute('color', 'contrast');
    await expect(popoverlight).toHaveAttribute('size');
    await expect(popoverlight).toHaveAttribute('backdrop');
    await expect(popoverlight).toHaveAttribute('close-button');
    await expect(popoverlight).toHaveAttribute('prevent-scroll');
    await expect(popoverlight).toHaveAttribute('hide-on-blur');
    await expect(popoverlight).toHaveAttribute('hide-on-escape');
    await expect(popoverlight).toHaveAttribute('hide-on-outside-click');
    await expect(popoverlight).toHaveAttribute('focus-back-to-trigger');
    await expect(popoverlight).toHaveAttribute('close-button-aria-label', 'close button');
    await expect(popoverlight).toHaveAttribute('disable-aria-expanded');
    await expect(popoverlight).toHaveAttribute('aria-label', 'popoverlight');
    await expect(popoverlight).toHaveAttribute('aria-labelledby', 'popoverlight-label');
    await expect(popoverlight).toHaveAttribute('aria-describedby', 'popoverlight-description');
    await expect(popoverlight).toHaveAttribute('role', 'dialog');
    await expect(triggerButton).not.toHaveAttribute('aria-expanded');
    await expect(triggerButton).toHaveAttribute('aria-haspopup', 'dialog');
    await expect(popoverlight).toHaveAttribute('aria-modal', 'true');
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions for popoverlight', async () => {
    // Mouse click, focus, keyboard, etc. can be added here as needed
    // Example: Click to show/hide
    const { popoverlight, triggerButton } = await setup({
      componentsPage,
      id: 'popoverlight',
      triggerID: 'trigger-button',
      children: 'Popoverlight content',
    });
    await triggerButton.click();
    await expect(popoverlight).toHaveAttribute('visible');
    await triggerButton.click();
    await expect(popoverlight).not.toHaveAttribute('visible');
  });

  /**
   * ACCESSIBILITY & VISUAL REGRESSION
   */
  await test.step('accessibility and visual regression for popoverlight', async () => {
    await setup({
      componentsPage,
      id: 'popoverlight',
      triggerID: 'trigger-button',
      children: 'Popoverlight content',
      visible: true,
      ariaLabel: 'Popoverlight Default',
    });
    await componentsPage.accessibility.checkForA11yViolations('popoverlight-default');
    await componentsPage.visualRegression.takeScreenshot('mdc-popoverlight');
  });
});
