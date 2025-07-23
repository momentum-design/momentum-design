import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { ORIENTATION } from '../connector/connector.constants';
import { VARIANT } from '../stepperitem/stepperitem.constants';
import type { OrientationType } from '../connector/connector.types';
import type { VariantType } from '../stepperitem/stepperitem.types';

type Args = {
  orientation?: OrientationType;
  variant?: VariantType;
  children?: string;
};

const setup = async (componentsPage: ComponentsPage, args: Args) => {
  const { orientation, variant, children = '' } = args;
  const html = `
    <mdc-stepper 
    ${orientation ? `orientation="${orientation}"` : ''}
    ${variant ? `variant="${variant}"` : ''}
    >
      ${children}
    </mdc-stepper>
  `;
  await componentsPage.mount({ html, clearDocument: true });
  const stepper = componentsPage.page.locator('mdc-stepper');
  await stepper.waitFor();
  return stepper;
};

const takeScreenshot = async (componentsPage: ComponentsPage, orientation: OrientationType) => {
  if (orientation === ORIENTATION.VERTICAL) {
    await componentsPage.page.setViewportSize({ width: 700, height: 1000 });
  }
  const styles = `margin: 0.5rem; ${orientation === ORIENTATION.VERTICAL ? 'height: 800px;' : ''}`;
  const sheet = new StickerSheet(componentsPage, 'mdc-stepper', styles);
  sheet.setAttributes({ orientation });
  sheet.setChildren(`<mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
    <mdc-connector status="complete"></mdc-connector>
    <mdc-stepperitem
      label="Step 2"
      status="completed"
      help-text="Help text"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem
      label="Step 3"
      status="error-current"
      help-text="Help text"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem
      label="Step 4"
      status="error-incomplete"
      step-number="4"
      help-text="Error"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem label="Step 5" status="not-started" step-number="5"></mdc-stepperitem>
     <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem
      label="This is a very long label for step 6 that might not fit"
      status="not-started"
      help-text="Help text is also very long"
      step-number="6"
    ></mdc-stepperitem>`);

  await sheet.createMarkupWithCombination({ variant: VARIANT });
  await sheet.mountStickerSheet();
  await componentsPage.visualRegression.takeScreenshot(`mdc-stepper-${orientation}`, {
    element: sheet.getWrapperContainer(),
  });
};

test('mdc-stepper', async ({ componentsPage }) => {
  const children = `
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-connector></mdc-connector>
      <mdc-stepperitem label="Step 2" status="current"></mdc-stepperitem>
    `;
  const stepper = await setup(componentsPage, { children });
  const connector = componentsPage.page.locator('mdc-connector');
  const item1 = componentsPage.page.locator('mdc-stepperitem').nth(0);
  const item2 = componentsPage.page.locator('mdc-stepperitem').nth(1);

  await test.step('should render stepper with default orientation and variant', async () => {
    await expect(stepper).toHaveAttribute('variant', 'inline');
    await expect(stepper).toHaveAttribute('orientation', 'horizontal');
  });

  await test.step('should provide orientation and variant context to children', async () => {
    await expect(connector).toHaveAttribute('orientation', 'horizontal');
    await expect(item1).toHaveAttribute('variant', 'inline');
    await expect(item2).toHaveAttribute('variant', 'inline');
  });

  await test.step('should update connector and stepperitem context on attribute change', async () => {
    await componentsPage.setAttributes(stepper, { orientation: 'vertical', variant: 'stacked' });
    await expect(connector).toHaveAttribute('orientation', 'vertical');
    await expect(item1).toHaveAttribute('variant', 'stacked');
  });

  await test.step('should filter out invalid children', async () => {
    const children = `
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <div id="invalid">Invalid</div>
      <mdc-connector></mdc-connector>
      <span id="invalid2">Invalid2</span>
      <mdc-stepperitem label="Step 2" status="current"></mdc-stepperitem>
    `;
    await setup(componentsPage, { children });
    const invalid = componentsPage.page.locator('#invalid');
    const invalid2 = componentsPage.page.locator('#invalid2');
    await expect(invalid).toHaveCount(0);
    await expect(invalid2).toHaveCount(0);
  });

  await test.step('should have appropriate ARIA roles and attributes for navigation', async () => {
    const children = `
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-connector></mdc-connector>
      <mdc-stepperitem label="Step 2" status="current"></mdc-stepperitem>
    `;
    const stepper = await setup(componentsPage, { children, orientation: 'vertical' });
    await expect(stepper).toHaveAttribute('role', 'list');
    const item = componentsPage.page.locator('mdc-stepperitem').nth(0);
    await expect(item).toHaveAttribute('role', 'listitem');
  });

  await test.step('should support keyboard and mouse interactions on stepperitems', async () => {
    const children = `
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-connector status="complete"></mdc-connector>
      <mdc-stepperitem label="Step 2" status="completed"></mdc-stepperitem>
      <mdc-connector></mdc-connector>
      <mdc-stepperitem label="Step 3" status="current"></mdc-stepperitem>
      <mdc-connector></mdc-connector>
      <mdc-stepperitem label="Step 4" status="not-started"></mdc-stepperitem>
    `;
    await setup(componentsPage, { children });
    const items = componentsPage.page.locator('mdc-stepperitem');
    // Focus with Tab
    await componentsPage.actionability.pressAndCheckFocus('Tab', [
      items.nth(0),
      items.nth(1),
      items.nth(2),
      items.nth(3),
    ]);
    await componentsPage.actionability.pressAndCheckFocus('Shift+Tab', [items.nth(2), items.nth(1), items.nth(0)]);
    // Keyboard Enter
    const waitForClickEnter = componentsPage.waitForEvent(items.nth(0), 'click');
    await componentsPage.page.keyboard.press('Enter');
    await waitForClickEnter;
    // Keyboard Space
    await componentsPage.actionability.pressTab();
    const waitForClickSpace = componentsPage.waitForEvent(items.nth(1), 'click');
    await componentsPage.page.keyboard.press('Space');
    await waitForClickSpace;
    // Mouse click
    const waitForClick = componentsPage.waitForEvent(items.nth(2), 'click');
    await items.nth(2).click();
    await waitForClick;
  });

  /**
   * VISUAL REGRESSION & ACCESSIBILITY
   */
  await test.step('should match visual regression screenshot (StickerSheet)', async () => {
    // Tests are ignored for mobile devices
    const deviceName = test.info().project.name;
    if (['chrome', 'firefox', 'msedge', 'webkit', 'tablet chrome', 'tablet safari'].includes(deviceName)) {
      await takeScreenshot(componentsPage, ORIENTATION.HORIZONTAL);
      await componentsPage.accessibility.checkForA11yViolations('stepper-horizontal');
      await takeScreenshot(componentsPage, ORIENTATION.VERTICAL);
      await componentsPage.accessibility.checkForA11yViolations('stepper-vertical');
    }
  });
});
