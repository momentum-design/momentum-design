/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { STATUS, VARIANT } from './stepperitem.constants';
import type StepperItem from './stepperitem.component';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  status?: string;
  'help-text'?: string;
  'step-number'?: string;
  'aria-label'?: string;
  'aria-current'?: string;
  disabled?: boolean;
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
      ${restArgs.disabled ? 'disabled' : ''}
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
    await expect(stepperitem).not.toHaveAttribute('loading');
    await expect(stepperitem).not.toHaveAttribute('aria-busy');
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

  await test.step('should prevent focus and activation when disabled', async () => {
    const { stepperitem } = await setup({
      componentsPage,
      label: 'Future step',
      status: 'not-started',
      'step-number': '4',
      disabled: true,
    });

    await expect(stepperitem).toHaveAttribute('disabled', '');
    await expect(stepperitem).toHaveAttribute('aria-disabled', 'true');
    await expect(stepperitem).toHaveAttribute('tabindex', '-1');

    await componentsPage.actionability.pressTab();
    await expect(stepperitem).not.toBeFocused();

    const waitForPointerClick = await componentsPage.waitForEvent(stepperitem, 'click');
    await stepperitem.click();
    await expect(waitForPointerClick).not.toEventEmitted();

    await stepperitem.focus();
    const waitForKeyboardClick = await componentsPage.waitForEvent(stepperitem, 'click');
    await componentsPage.page.keyboard.press('Enter');
    await componentsPage.page.keyboard.press('Space');
    await expect(waitForKeyboardClick).not.toEventEmitted();
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
    await componentsPage.page.setViewportSize({ width: 500, height: 800 });
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
      animations: 'disabled',
    });
  });
});

test('should match disabled visual regression screenshot', async ({ componentsPage }) => {
  const { stepperitem } = await setup({
    componentsPage,
    label: 'Future step',
    status: STATUS.NOT_STARTED,
    'step-number': '4',
    disabled: true,
  });

  await componentsPage.visualRegression.takeScreenshot('mdc-stepperitem-disabled', {
    element: stepperitem,
  });
});

test('should replace the indicator and update busy state when status changes to and from loading', async ({
  componentsPage,
}) => {
  for (const status of Object.values(STATUS).filter(value => value !== STATUS.LOADING)) {
    const { stepperitem } = await setup({
      componentsPage,
      label: 'Generate staffing plan',
      status,
      'step-number': '4',
      'help-text': 'Step details',
      'aria-label': 'Step 4 of 4, generating staffing plan',
    });

    await stepperitem.evaluate((element, loadingStatus) => {
      const item = element as StepperItem;
      item.status = loadingStatus;
    }, STATUS.LOADING);
    const spinner = stepperitem.locator('mdc-spinner');
    await expect(spinner).toBeVisible();
    await expect(spinner).toHaveAttribute('aria-hidden', 'true');
    await expect(stepperitem).toHaveAttribute('aria-busy', 'true');
    await expect(stepperitem).toHaveAttribute('status', STATUS.LOADING);
    await expect(stepperitem).not.toHaveAttribute('disabled');
    await expect(stepperitem).toHaveAccessibleName('Step 4 of 4, generating staffing plan');
    await expect(stepperitem.locator('[part="status-icon"], [part="step-number"]')).toHaveCount(0);
    await expect(stepperitem.locator('[part="label"]')).toHaveText('Generate staffing plan');
    await expect(stepperitem.locator('[part="help-text"]')).toHaveText('Step details');
    await expect(stepperitem.locator('[part="help-icon"]')).toHaveCount(0);

    await stepperitem.evaluate((element, nextStatus) => {
      const item = element as StepperItem;
      item.status = nextStatus;
    }, status);
    await expect(spinner).toHaveCount(0);
    await expect(stepperitem).not.toHaveAttribute('aria-busy');
    await expect(stepperitem).toHaveAttribute('status', status);
    if (status === STATUS.NOT_STARTED || status === STATUS.ERROR_INCOMPLETE) {
      await expect(stepperitem.locator('[part="step-number"]')).toHaveText('4');
    } else {
      await expect(stepperitem.locator('[part="status-icon"]')).toHaveAttribute(
        'name',
        status === STATUS.COMPLETED ? 'check-bold' : 'edit-bold',
      );
    }
    await expect(stepperitem.locator('[part="help-icon"]')).toHaveCount(
      status === STATUS.ERROR_CURRENT || status === STATUS.ERROR_INCOMPLETE ? 1 : 0,
    );
  }
});

test('should preserve activation and disabled behavior when status is loading', async ({ componentsPage }) => {
  const { stepperitem } = await setup({
    componentsPage,
    label: 'Generate staffing plan',
    status: STATUS.LOADING,
    'aria-label': 'Step 4 of 4, generating staffing plan',
    'aria-current': 'step',
  });
  await expect(stepperitem.locator('mdc-spinner')).toBeVisible();
  await expect(stepperitem).toHaveAttribute('aria-busy', 'true');
  await expect(stepperitem).toHaveAttribute('aria-current', 'step');
  await expect(stepperitem).toHaveAttribute('tabindex', '0');
  const waitForClick = await componentsPage.waitForEvent(stepperitem, 'click');
  await stepperitem.click();
  await expect(waitForClick).toEventEmitted();
  await stepperitem.focus();
  const waitForKeyClick = await componentsPage.waitForEvent(stepperitem, 'click');
  await componentsPage.page.keyboard.press('Enter');
  await expect(waitForKeyClick).toEventEmitted();

  await stepperitem.evaluate(element => {
    const item = element as StepperItem;
    item.disabled = true;
  });
  await expect(stepperitem).toHaveAttribute('aria-disabled', 'true');
  await expect(stepperitem).toHaveAttribute('tabindex', '-1');
  await expect(stepperitem.locator('mdc-spinner')).toBeVisible();
  const waitForDisabledClick = await componentsPage.waitForEvent(stepperitem, 'click');
  await stepperitem.click();
  await expect(waitForDisabledClick).not.toEventEmitted();
  await stepperitem.focus();
  const waitForDisabledKeyClick = await componentsPage.waitForEvent(stepperitem, 'click');
  await componentsPage.page.keyboard.press('Enter');
  await componentsPage.page.keyboard.press('Space');
  await expect(waitForDisabledKeyClick).not.toEventEmitted();

  await stepperitem.evaluate((element, status) => {
    element.setAttribute('status', status);
  }, STATUS.CURRENT);
  await expect(stepperitem.locator('mdc-spinner')).toHaveCount(0);
  await expect(stepperitem).not.toHaveAttribute('aria-busy');
  await expect(stepperitem).toHaveAttribute('disabled', '');
});

test('should expose loading steps accessibly in both variants', async ({ componentsPage }) => {
  for (const variant of Object.values(VARIANT)) {
    await componentsPage.mount({
      html: `<mdc-stepper variant="${variant}" aria-label="Staffing plan steps">
        <mdc-stepperitem label="Staffing plan details" status="completed"
          aria-label="Step 1 of 2, staffing plan details, completed"></mdc-stepperitem>
        <mdc-stepperconnector status="complete"></mdc-stepperconnector>
        <mdc-stepperitem label="Generate staffing plan" status="loading"
          aria-current="step" aria-label="Step 2 of 2, generating staffing plan"></mdc-stepperitem>
      </mdc-stepper>`,
      clearDocument: true,
    });
    await expect(componentsPage.page.locator('mdc-spinner')).toBeVisible();
    await componentsPage.accessibility.checkForA11yViolations(`stepperitem-loading-${variant}`);
  }
});

test('should match loading visual regression screenshot', async ({ componentsPage }) => {
  await componentsPage.page.setViewportSize({ width: 800, height: 800 });
  const sheet = new StickerSheet(componentsPage, 'mdc-stepperitem', 'margin: 0.5rem;');
  sheet.setAttributes({ label: 'Generate staffing plan', status: STATUS.LOADING });
  await sheet.createMarkupWithCombination({ variant: VARIANT });
  sheet.setAttributes({ label: 'Generate staffing plan', status: STATUS.LOADING, disabled: '' });
  await sheet.createMarkupWithCombination({ variant: VARIANT });
  await sheet.mountStickerSheet();
  await componentsPage.visualRegression.takeScreenshot('mdc-stepperitem-loading', {
    element: sheet.getWrapperContainer(),
    animations: 'disabled',
  });
});
