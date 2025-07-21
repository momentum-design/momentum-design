import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { VARIANT } from './stepperitem.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  'label-text'?: string;
  status?: string;
  'helper-text'?: string;
  'step-number'?: string;
  'aria-label'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  const html = `
    <mdc-stepperitem
      ${restArgs['label-text'] ? `label-text="${restArgs['label-text']}"` : ''}
      ${restArgs.status ? `status="${restArgs.status}"` : ''}
      ${restArgs['helper-text'] ? `helper-text="${restArgs['helper-text']}"` : ''}
      ${restArgs['step-number'] ? `step-number="${restArgs['step-number']}"` : ''}
      ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
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
    await expect(stepperitem).toHaveAttribute('status', 'current');
    await expect(stepperitem).toHaveAttribute('aria-current', 'true');
  });

  await test.step('should render with label-text', async () => {
    const { stepperitem } = await setup({ componentsPage, 'label-text': 'Step Label' });
    await expect(stepperitem).toBeVisible();
    await expect(stepperitem.locator('[part="label"]')).toHaveText('Step Label');
  });

  await test.step('should render with helper-text when present', async () => {
    const { stepperitem } = await setup({
      componentsPage,
      'label-text': 'Step Label',
      'helper-text': 'Helper text',
    });
    await expect(stepperitem.locator('[part="helper-text"]')).toHaveText('Helper text');
  });

  await test.step('should render step number for not-started and error-incomplete', async () => {
    const statuses = ['not-started', 'error-incomplete'];
    await Promise.all(
      statuses.map(async status => {
        const { stepperitem } = await setup({ componentsPage, 'label-text': 'Step Label', status, 'step-number': '2' });
        await expect(stepperitem.locator('[part="step-number"]')).toHaveText('2');
        await expect(stepperitem).toHaveAttribute('status', status);
      }),
    );
  });

  await test.step('should render completed icon for completed status', async () => {
    const { stepperitem } = await setup({ componentsPage, 'label-text': 'Step Label', status: 'completed' });
    const statusIcon = stepperitem.locator('[part="status-icon"]');
    await expect(statusIcon).toBeVisible();
    await expect(statusIcon).toHaveAttribute('name', 'check-bold');
    await expect(stepperitem.locator('[part="label"]')).toHaveText('Step Label');
  });

  await test.step('should render pencil icon and helper-text for current or error-current status', async () => {
    const statuses = ['current', 'error-current'];
    await Promise.all(
      statuses.map(async status => {
        const { stepperitem } = await setup({
          componentsPage,
          'label-text': 'Step Label',
          status,
          'helper-text': 'helper',
        });
        const statusIcon = stepperitem.locator('[part="status-icon"]');
        await expect(statusIcon).toBeVisible();
        await expect(statusIcon).toHaveAttribute('name', 'edit-bold');
        await expect(stepperitem.locator('[part="helper-text"]')).toHaveText('helper');
      }),
    );
  });

  await test.step('should render error icon with helper-text when status is error-current or error-incomplete', async () => {
    const statuses = ['error-current', 'error-incomplete'];
    await Promise.all(
      statuses.map(async status => {
        const { stepperitem } = await setup({
          componentsPage,
          'label-text': 'Step Label',
          status,
          'helper-text': 'Error message',
        });
        const statusIcon = stepperitem.locator('[part="status-icon"]');
        await expect(statusIcon).toBeVisible();
        await expect(statusIcon).toHaveAttribute('name', 'error-legacy-badge');
        await expect(stepperitem.locator('[part="helper-text"]')).toHaveText('Error message');
      }),
    );
  });

  /**
   * FOCUS & KEYBOARD
   */

  // Keyboard and Focus Management

  await test.step('should be focusable with Tab', async () => {
    const { stepperitem } = await setup({ componentsPage, 'label-text': 'Step Label', 'step-number': '1' });
    await componentsPage.page.keyboard.press('Tab');
    await expect(stepperitem).toBeFocused();
  });

  /**
   * INTERACTIONS
   */
  await test.step('should fire click event when clicked', async () => {
    const { stepperitem } = await setup({ componentsPage, 'label-text': 'Step Label', 'step-number': '4' });
    const waitForClick = componentsPage.waitForEvent(stepperitem, 'click');
    await stepperitem.click();
    await waitForClick;
  });

  await test.step('should fire click event on Enter', async () => {
    const { stepperitem } = await setup({ componentsPage, 'label-text': 'Step Label', 'step-number': '5' });
    const waitForClick = componentsPage.waitForEvent(stepperitem, 'click');
    await componentsPage.actionability.pressTab();
    await expect(stepperitem).toBeFocused();
    await componentsPage.page.keyboard.press('Enter');
    await waitForClick;
  });

  await test.step('should fire click event on Space', async () => {
    const { stepperitem } = await setup({ componentsPage, 'label-text': 'Step Label', 'step-number': '5' });
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
    const { stepperitem } = await setup({
      componentsPage,
      'label-text': 'Step Label',
      status: 'current',
      'step-number': '2',
    });
    await expect(stepperitem).toHaveAttribute('role', 'listitem');
    await expect(stepperitem).toHaveAttribute('tabindex', '0');
    await expect(stepperitem).toHaveAttribute('aria-current', 'step');
  });

  await test.step('should announce aria-label for screen readers', async () => {
    const { stepperitem } = await setup({
      componentsPage,
      'label-text': 'Step Label',
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
      <mdc-stepperitem label="Step 2" helper-text="Helper text" status="current"></mdc-stepperitem>
      <mdc-stepperitem label="Step 3" status="not-started" step-number="3"></mdc-stepperitem>
      </mdc-list>
    `,
      clearDocument: true,
    });
    await componentsPage.accessibility.checkForA11yViolations('stepperitem-default');
  });

  // Visual Regression
  await test.step('should match visual regression screenshot', async () => {
    const stepperitemSheet = new StickerSheet(componentsPage, 'mdc-stepperitem', 'margin: 0.25rem 0;');
    stepperitemSheet.setAttributes({ label: 'Step Label', helperLabel: 'helper', 'step-number': '2' });
    await stepperitemSheet.createMarkupWithCombination({
      variant: VARIANT,
      status: {
        current: 'current',
        completed: 'completed',
        'not-started': 'not-started',
        'error-incomplete': 'error-incomplete',
        'error-current': 'error-current',
      },
    });
    // stepperitemSheet.setAttributes({ label: 'Step Label', status: 'error', 'helper-text': 'Error message' });
    // await stepperitemSheet.createMarkupWithCombination({ variant: VARIANT });
    await stepperitemSheet.mountStickerSheet();
    await componentsPage.visualRegression.takeScreenshot('mdc-stepperitem', {
      element: stepperitemSheet.getWrapperContainer(),
    });
  });
});
