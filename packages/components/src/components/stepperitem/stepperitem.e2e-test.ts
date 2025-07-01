import { expect } from '@playwright/test';

import { test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { VARIANT } from './stepperitem.constants';

type SetupOptions = {
  componentsPage: any;
  label?: string;
  status?: string;
  'optional-label'?: string;
  'step-number'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  const html = `
    <mdc-stepperitem
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
      ${restArgs.status ? `status="${restArgs.status}"` : ''}
      ${restArgs['optional-label'] ? `optional-label="${restArgs['optional-label']}"` : ''}
      ${restArgs['step-number'] ? `step-number="${restArgs['step-number']}"` : ''}
    ></mdc-stepperitem>
  `;
  await componentsPage.mount({ html, clearDocument: true });
  const stepperitem = componentsPage.page.locator('mdc-stepperitem');
  await stepperitem.waitFor();
  return { stepperitem };
};

test.use({ viewport: { width: 600, height: 400 } });
test('mdc-stepperitem', async ({ componentsPage }) => {
  /**
   * RENDERING & VISUAL STATES
   */

  await test.step('should render with label only', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', 'step-number': '1' });
    await expect(stepperitem).toBeVisible();
    await expect(stepperitem.locator('[part="label"]')).toHaveText('Step Label');
  });

  await test.step('should render with optional label in parentheses', async () => {
    const { stepperitem } = await setup({
      componentsPage,
      label: 'Step Label',
      'optional-label': 'Optional',
      'step-number': '1',
    });
    await expect(stepperitem.locator('[part="optional-label"]')).toHaveText('(Optional)');
  });

  await test.step('should render step number for current/future-clickable/future-disabled', async () => {
    const statuses = ['current', 'future-clickable', 'future-disabled'];
    await Promise.all(
      statuses.map(async status => {
        const { stepperitem } = await setup({ componentsPage, label: 'Step Label', status, 'step-number': '2' });
        await expect(stepperitem.locator('[part="step-number"]')).toHaveText('2');
      }),
    );
  });

  await test.step('should render completed icon for completed status', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', status: 'completed' });
    const statusIcon = stepperitem.locator('[part="status-icon"]');
    await expect(statusIcon).toBeVisible();
    await expect(statusIcon).toHaveAttribute('name', 'check-bold');
    await expect(stepperitem.locator('[part="label"]')).toHaveText('Step Label');
  });

  await test.step('should render error icon and error message for error status', async () => {
    const { stepperitem } = await setup({
      componentsPage,
      label: 'Step Label',
      status: 'error',
      'optional-label': 'Error message',
    });
    const statusIcon = stepperitem.locator('[part="status-icon"]');
    await expect(statusIcon).toBeVisible();
    await expect(statusIcon).toHaveAttribute('name', 'error-legacy-filled');
    await expect(stepperitem.locator('[part="optional-label"]')).toHaveText('Error message');
  });

  await test.step('should not be focusable and label is dimmed for future-disabled', async () => {
    const { stepperitem } = await setup({
      componentsPage,
      label: 'Step Label',
      status: 'future-disabled',
      'step-number': '3',
    });
    await expect(stepperitem).toHaveAttribute('aria-disabled', 'true');
    await expect(stepperitem).toHaveAttribute('tabindex', '-1');
  });

  /**
   * FOCUS & KEYBOARD
   */

  await test.step('should be focusable with Tab if not future-disabled', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', 'step-number': '1' });
    await componentsPage.page.keyboard.press('Tab');
    await expect(stepperitem).toBeFocused();
  });

  await test.step('should skip future-disabled in focus order', async () => {
    await componentsPage.mount({
      html: `
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-stepperitem label="Step 2" status="future-disabled" step-number="2"></mdc-stepperitem>
      <mdc-stepperitem label="Step 3" status="error" optional-label="Error"></mdc-stepperitem>
    `,
      clearDocument: true,
    });
    const items = componentsPage.page.locator('mdc-stepperitem');
    await componentsPage.page.keyboard.press('Tab');
    await expect(items.nth(0)).toBeFocused();
    await componentsPage.page.keyboard.press('Tab');
    await expect(items.nth(2)).toBeFocused();
  });

  /**
   * INTERACTIONS
   */

  await test.step('should fire click event when clicked (not future-disabled)', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', 'step-number': '4' });
    const waitForClick = componentsPage.waitForEvent(stepperitem, 'click');
    await stepperitem.click();
    await waitForClick;
  });

  await test.step('should fire click event on Enter (not future-disabled)', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', 'step-number': '5' });
    const waitForClick = componentsPage.waitForEvent(stepperitem, 'click');
    await componentsPage.actionability.pressTab();
    await expect(stepperitem).toBeFocused();
    await componentsPage.page.keyboard.press('Enter');
    await waitForClick;
  });

  await test.step('should fire click event on Space (not future-disabled)', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', 'step-number': '5' });
    const waitForClick = componentsPage.waitForEvent(stepperitem, 'click');
    await componentsPage.actionability.pressTab();
    await expect(stepperitem).toBeFocused();
    await componentsPage.page.keyboard.press('Space');
    await waitForClick;
  });

  /**
   * ARIA & ACCESSIBILITY
   */

  await test.step('should have correct ARIA attributes and tabindex', async () => {
    const { stepperitem } = await setup({ componentsPage, label: 'Step Label', status: 'current', 'step-number': '2' });
    await expect(stepperitem).toHaveAttribute('role', 'listitem');
    await expect(stepperitem).toHaveAttribute('tabindex', '0');
    await expect(stepperitem).toHaveAttribute('aria-current', 'step');
  });

  await test.step('should pass accessibility checks (a11y)', async () => {
    await componentsPage.mount({
      html: `
      <mdc-list>
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-stepperitem label="Step 2" status="future-disabled" step-number="2"></mdc-stepperitem>
      <mdc-stepperitem label="Step 3" status="error" optional-label="Error"></mdc-stepperitem>
      </mdc-list>
    `,
      clearDocument: true,
    });
    await componentsPage.accessibility.checkForA11yViolations('stepperitem-default');
  });

  await test.step('should match visual regression screenshot', async () => {
    const stepperitemSheet = new StickerSheet(componentsPage, 'mdc-stepperitem', 'margin: 0.25rem 0;');
    stepperitemSheet.setAttributes({ label: 'Step Label', optionalLabel: 'Optional', 'step-number': '2' });
    await stepperitemSheet.createMarkupWithCombination({
      variant: VARIANT,
      status: {
        current: 'current',
        completed: 'completed',
        'future-clickable': 'future-clickable',
        'future-disabled': 'future-disabled',
      },
    });
    stepperitemSheet.setAttributes({ label: 'Step Label', status: 'error', 'optional-label': 'Error message' });
    await stepperitemSheet.createMarkupWithCombination({ variant: VARIANT });
    await stepperitemSheet.mountStickerSheet();
    await componentsPage.visualRegression.takeScreenshot('mdc-stepperitem', {
      element: stepperitemSheet.getWrapperContainer(),
    });
  });
});
