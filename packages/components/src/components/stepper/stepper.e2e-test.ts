import { expect } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

// AI-Assisted
// Mount stepper with stepperitems using correct attributes from feature file
test.beforeEach(async ({ componentsPage }) => {
  await componentsPage.mount({
    html: `
      <mdc-stepper>
        <mdc-stepperitem label-text="Step Label" helper-text="Help" step-number="1" status="current"></mdc-stepperitem>
        <mdc-stepperitem label-text="Step 2" helper-text="Optional" step-number="2" status="not-started"></mdc-stepperitem>
        <mdc-stepperitem label-text="Step 3" helper-text="Error" step-number="3" status="error"></mdc-stepperitem>
      </mdc-stepper>
    `,
    clearDocument: true,
  });
});
// End AI-Assisted

test('mdc-stepper', async ({ componentsPage }) => {
  const stepper = componentsPage.page.locator('mdc-stepper');
  await stepper.waitFor();

  // AI-Assisted
  // ACCESSIBILITY
  await test.step('accessibility', async () => {
    // Check for a11y violations
    await componentsPage.accessibility.checkForA11yViolations('stepper-default');

    // Check stepperitem ARIA attributes
    const items = componentsPage.page.locator('mdc-stepperitem');
    await expect(await items.nth(0).getAttribute('role')).toBe('listitem');
    await expect(await items.nth(0).getAttribute('tabindex')).toBe('0');
    await expect(await items.nth(0).getAttribute('aria-current')).toBe('step');
  });

  // VISUAL REGRESSION
  await test.step('visual-regression', async () => {
    await componentsPage.visualRegression.takeScreenshot('mdc-stepper', { element: stepper });
  });

  // ATTRIBUTES
  await test.step('attributes', async () => {
    const items = componentsPage.page.locator('mdc-stepperitem');
    await expect(await items.nth(0).getAttribute('label-text')).toBe('Step Label');
    await expect(await items.nth(0).getAttribute('helper-text')).toBe('Help');
    await expect(await items.nth(0).getAttribute('step-number')).toBe('1');
    await expect(await items.nth(0).getAttribute('status')).toBe('current');
  });

  // INTERACTIONS
  await test.step('interactions', async () => {
    const items = componentsPage.page.locator('mdc-stepperitem');

    // Mouse click
    await test.step('should fire click event when clicking on stepperitem', async () => {
      const waitForClick = componentsPage.waitForEvent(items.nth(0), 'click');
      await items.nth(0).click();
      await waitForClick;
    });

    // Focus with Tab
    await test.step('should be focusable with tab', async () => {
      await componentsPage.page.keyboard.press('Tab');
      await expect(await items.nth(0).evaluate(el => document.activeElement === el)).toBe(true);
    });

    // Keyboard Enter
    await test.step('should fire click event on Enter', async () => {
      await componentsPage.actionability.pressTab();
      await expect(await items.nth(0).evaluate(el => document.activeElement === el)).toBe(true);
      const waitForClick = componentsPage.waitForEvent(items.nth(0), 'click');
      await componentsPage.page.keyboard.press('Enter');
      await waitForClick;
    });

    // Keyboard Space
    await test.step('should fire click event on Space', async () => {
      await componentsPage.actionability.pressTab();
      await expect(await items.nth(0).evaluate(el => document.activeElement === el)).toBe(true);
      const waitForClick = componentsPage.waitForEvent(items.nth(0), 'click');
      await componentsPage.page.keyboard.press('Space');
      await waitForClick;
    });
  });
  // End AI-Assisted
});
