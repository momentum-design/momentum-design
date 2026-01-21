/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { STATUS, VARIANT } from './stepperitem.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  status?: string;
  'help-text'?: string;
  'step-number'?: string;
  'aria-label'?: string;
  'aria-current'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  const html = `
    <mdc-stepperitem
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
      ${restArgs.status ? `status="${restArgs.status}"` : ''}
      ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
      ${restArgs['step-number'] ? `step-number="${restArgs['step-number']}"` : ''}
      ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
      ${restArgs['aria-current'] ? `aria-current="${restArgs['aria-current']}"` : ''}
    ></mdc-stepperitem>
  `;
  await componentsPage.mount({ html, clearDocument: true });
  const stepperitem = componentsPage.page.locator('mdc-stepperitem');
  await stepperitem.waitFor();
  return { stepperitem };
};

test.use({ viewport: { width: 600, height: 400 } });
test('mdc-stepperitem', async ({ componentsPage }) => {
  // default attributes
  await test.step('should render with default attributes', async () => {
    const { stepperitem } = await setup({ componentsPage });
    await expect(stepperitem).toBeVisible();
    await expect(stepperitem).toHaveAttribute('role', 'listitem');
    await expect(stepperitem).toHaveAttribute('tabindex', '0');
    await expect(stepperitem).toHaveAttribute('status', 'not-started');
  });

  await test.step('should render with label', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label' });
    await expect(stepperitem).toBeVisible();
    await expect(stepperitem.locator('[part="label"]')).toHaveText('Step Label');
  });

  await test.step('should render with help-text when present', async () => {
    const { stepperitem } = await setup({
      componentsPage,
      label: 'Step Label',
      'help-text': 'Helper text',
    });
    await expect(stepperitem.locator('[part="help-text"]')).toHaveText('Helper text');
  });

  await test.step('should render step number for not-started and error-incomplete', async () => {
    const statuses = ['not-started', 'error-incomplete'];
    for (const status of statuses) {
      const { stepperitem } = await setup({ componentsPage, label: 'Step Label', status, 'step-number': '2' });
      await expect(stepperitem.locator('[part="step-number"]')).toHaveText('2');
      await expect(stepperitem).toHaveAttribute('status', status);
    }
  });

  await test.step('should render completed icon for completed status', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', status: 'completed' });
    const statusIcon = stepperitem.locator('[part="status-icon"]');
    await expect(statusIcon).toBeVisible();
    await expect(statusIcon).toHaveAttribute('name', 'check-bold');
    await expect(stepperitem.locator('[part="label"]')).toHaveText('Step Label');
  });

  await test.step('should render pencil icon and help-text for current or error-current status', async () => {
    const statuses = ['current', 'error-current'];
    for (const status of statuses) {
      const { stepperitem } = await setup({
        componentsPage,
        label: 'Step Label',
        status,
        'help-text': 'helper',
        'aria-current': 'step',
      });
      await expect(stepperitem).toHaveAttribute('aria-current', 'step');
      await expect(stepperitem).toHaveAttribute('status', status);
      await expect(stepperitem).toHaveAttribute('help-text', 'helper');
      const statusIcon = stepperitem.locator('[part="status-icon"]');
      await expect(statusIcon).toBeVisible();
      await expect(statusIcon).toHaveAttribute('name', 'edit-bold');
    }
  });

  await test.step('should render error icon with help-text when status is error-current or error-incomplete', async () => {
    const statuses = ['error-current', 'error-incomplete'];
    for (const status of statuses) {
      const { stepperitem } = await setup({
        componentsPage,
        label: 'Step Label',
        status,
        'help-text': 'Error message',
      });
      const statusIcon = stepperitem.locator('[part="help-icon"]');
      await expect(stepperitem).toHaveAttribute('status', status);
      await expect(stepperitem).toHaveAttribute('help-text', 'Error message');
      await expect(statusIcon).toBeVisible();
      await expect(statusIcon).toHaveAttribute('name', 'error-legacy-badge-filled');
    }
  });

  /**
   * FOCUS & KEYBOARD
   */

  // Keyboard and Focus Management

  await test.step('should be focusable with Tab', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', 'step-number': '1' });
    await componentsPage.actionability.pressTab();
    await expect(stepperitem).toBeFocused();
  });

  /**
   * INTERACTIONS
   */
  await test.step('should fire click event when clicked', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', 'step-number': '4' });
    const waitForClick = await componentsPage.waitForEvent(stepperitem, 'click');
    await stepperitem.click();
    await expect(waitForClick).toEventEmitted();
  });

  await test.step('should fire click event on Enter', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', 'step-number': '5' });
    const waitForClick = await componentsPage.waitForEvent(stepperitem, 'click');
    await componentsPage.actionability.pressTab();
    await expect(stepperitem).toBeFocused();
    await componentsPage.page.keyboard.press('Enter');
    await expect(waitForClick).toEventEmitted();
  });

  await test.step('should fire click event on Space', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', 'step-number': '5' });
    const waitForClick = await componentsPage.waitForEvent(stepperitem, 'click');
    await componentsPage.actionability.pressTab();
    await expect(stepperitem).toBeFocused();
    await componentsPage.page.keyboard.press('Space');
    await expect(waitForClick).toEventEmitted();
  });

  /**
   * ARIA & ACCESSIBILITY
   */
  await test.step('should have correct ARIA attributes and tabindex', async () => {
    const { stepperitem } = await setup({
      componentsPage,
      label: 'Step Label',
      status: 'current',
      'step-number': '2',
      'aria-label': 'Step 2 current',
      'aria-current': 'step',
    });
    await expect(stepperitem).toHaveAttribute('role', 'listitem');
    await expect(stepperitem).toHaveAttribute('tabindex', '0');
    await expect(stepperitem).toHaveAttribute('aria-current', 'step');
    await expect(stepperitem).toHaveAttribute('aria-label', 'Step 2 current');
    await expect(stepperitem).toHaveAttribute('status', 'current');
  });

  await test.step('should announce aria-label for screen readers', async () => {
    const { stepperitem } = await setup({
      componentsPage,
      label: 'Step Label',
      'step-number': '2',
      status: 'not-started',
      'aria-label': 'Step 2 not started',
    });
    const stepNumber = stepperitem.locator('[part="step-number"]');
    await expect(stepNumber).toBeVisible();
    await expect(stepperitem).toHaveAttribute('aria-label', 'Step 2 not started');
  });

  await test.step('should pass accessibility checks (a11y)', async () => {
    await componentsPage.mount({
      html: `
      <mdc-list>
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-stepperitem label="Step 2" help-text="Helper text" status="current"></mdc-stepperitem>
      <mdc-stepperitem label="Step 3" status="not-started" step-number="3"></mdc-stepperitem>
      </mdc-list>
    `,
      clearDocument: true,
    });
    await componentsPage.accessibility.checkForA11yViolations('stepperitem-default');
  });

  // Visual Regression
  await test.step('should match visual regression screenshot', async () => {
    await componentsPage.page.setViewportSize({ width: 500, height: 500 });
    const stepperitemSheet = new StickerSheet(componentsPage, 'mdc-stepperitem', 'margin: 0.25rem 0;');
    stepperitemSheet.setAttributes({ label: 'Step Label', helperLabel: 'helper', 'step-number': '2' });
    await stepperitemSheet.createMarkupWithCombination({
      variant: VARIANT,
      status: STATUS,
    });
    stepperitemSheet.setAttributes({ label: 'Step Label', 'help-text': 'Help Text', 'step-number': '3' });
    await stepperitemSheet.createMarkupWithCombination({
      variant: VARIANT,
      status: STATUS,
    });
    stepperitemSheet.setAttributes({
      label: 'A very long label text added here',
      'help-text': 'This is a very long help text',
      status: 'completed',
      variant: 'stacked',
    });
    await stepperitemSheet.createMarkupWithCombination({});
    await stepperitemSheet.mountStickerSheet();
    await componentsPage.visualRegression.takeScreenshot('mdc-stepperitem', {
      element: stepperitemSheet.getWrapperContainer(),
    });
  });
});
