import type { Locator } from '@playwright/test';

import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { ORIENTATION } from '../stepperconnector/stepperconnector.constants';
import { VARIANT } from '../stepperitem/stepperitem.constants';
import type { OrientationType } from '../stepperconnector/stepperconnector.types';
import type { VariantType } from '../stepperitem/stepperitem.types';
import { KEYS } from '../../utils/keys';

type Args = {
  orientation?: OrientationType;
  variant?: VariantType;
  children?: string;
  style?: string;
};

const setup = async (componentsPage: ComponentsPage, args: Args) => {
  const { orientation, variant, children = '', style } = args;
  const html = `
    <mdc-stepper 
    ${orientation ? `orientation="${orientation}"` : ''}
    ${variant ? `variant="${variant}"` : ''}
    ${style ? `style="${style}"` : ''}
    >
      ${children}
    </mdc-stepper>
  `;
  await componentsPage.mount({ html, clearDocument: true });
  const stepper = componentsPage.page.locator('mdc-stepper');
  await stepper.waitFor();
  return stepper;
};

// AI-Assisted: Exercise realistic stacked copy at wide and constrained widths.
const responsiveStackedChildren = `
  <mdc-stepperitem label="Work group details" status="completed"></mdc-stepperitem>
  <mdc-stepperconnector status="complete"></mdc-stepperconnector>
  <mdc-stepperitem label="Scheduling policy" status="completed" help-text="Policy selected"></mdc-stepperitem>
  <mdc-stepperconnector status="complete"></mdc-stepperconnector>
  <mdc-stepperitem label="Shift template configuration details" status="current" help-text="Choose a shift template for this work group"></mdc-stepperitem>
  <mdc-stepperconnector></mdc-stepperconnector>
  <mdc-stepperitem label="Adherence policy" status="error-incomplete" step-number="4" help-text="Select a policy to continue"></mdc-stepperitem>
  <mdc-stepperconnector></mdc-stepperconnector>
  <mdc-stepperitem label="Review" status="not-started" step-number="5"></mdc-stepperitem>
`;

const getTextLayout = async (element: Locator) =>
  element.evaluate((node) => {
    const { lineHeight } = getComputedStyle(node);
    const visibleHeight = node.getBoundingClientRect().height;
    const range = document.createRange();
    range.selectNodeContents(node);
    return {
      isTruncated: node.scrollHeight > node.clientHeight || range.getBoundingClientRect().height > visibleHeight + 0.5,
      visibleLineCount: Math.round(visibleHeight / Number.parseFloat(lineHeight)),
    };
  });

const expectLabelsNotToOverlap = async (items: Locator) => {
  const labelContainerRects = await items.locator('[part="label-container"]').evaluateAll((elements) =>
    elements
      .map((element) => {
        const { left, right } = element.getBoundingClientRect();
        return { left, right };
      })
      .sort((first, second) => first.left - second.left),
  );

  for (let index = 0; index < labelContainerRects.length - 1; index += 1) {
    expect(labelContainerRects[index].right).toBeLessThanOrEqual(labelContainerRects[index + 1].left);
  }
};
// End AI-Assisted

const takeScreenshot = async (componentsPage: ComponentsPage, orientation: OrientationType) => {
  // Move mouse away to prevent accidental hover on any stepperitem after previous interactions
  await componentsPage.page.mouse.move(0, 0);
  if (orientation === ORIENTATION.VERTICAL) {
    await componentsPage.page.setViewportSize({ width: 700, height: 1000 });
  }
  const styles = `margin: 0.5rem; ${orientation === ORIENTATION.VERTICAL ? 'height: 800px;' : ''}`;
  const sheet = new StickerSheet(componentsPage, 'mdc-stepper', styles);
  sheet.setAttributes({ orientation });
  sheet.setChildren(`<mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
    <mdc-stepperconnector status="complete"></mdc-stepperconnector>
    <mdc-stepperitem
      label="Step 2"
      status="completed"
      help-text="Help text"
    ></mdc-stepperitem>
    <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem
      label="Step 3"
      status="error-current"
      help-text="Help text"
    ></mdc-stepperitem>
    <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem
      label="Step 4"
      status="error-incomplete"
      step-number="4"
      help-text="Error"
    ></mdc-stepperitem>
    <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem label="Step 5" status="not-started" step-number="5"></mdc-stepperitem>
     <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem
      label="This is a very long label for step 6 that might not fit"
      status="not-started"
      help-text="Help text is also very long"
      step-number="6"
    ></mdc-stepperitem>`);

  await sheet.createMarkupWithCombination({ variant: VARIANT });
  await sheet.mountStickerSheet({
    wrapperStyle: 'background: var(--mds-color-theme-background-gradient-primary-normal);',
  });
  await componentsPage.visualRegression.takeScreenshot(`mdc-stepper-${orientation}`, {
    element: sheet.getWrapperContainer(),
  });
};

// AI-Assisted: Cover initial non-default context, direct child overrides, and subsequent provider updates.
test('should keep non-default context authoritative and remain responsive to updates', async ({
  componentsPage,
}) => {
  const children = `
    <mdc-stepperitem label="Step 1"></mdc-stepperitem>
    <mdc-stepperconnector></mdc-stepperconnector>
    <mdc-stepperitem label="Step 2"></mdc-stepperitem>
  `;
  const stepper = await setup(componentsPage, {
    children,
    orientation: ORIENTATION.VERTICAL,
    variant: VARIANT.STACKED,
  });
  const items = componentsPage.page.locator('mdc-stepperitem');
  const connector = componentsPage.page.locator('mdc-stepperconnector');

  await expect(items.nth(0)).toHaveAttribute('variant', VARIANT.STACKED);
  await expect(items.nth(1)).toHaveAttribute('variant', VARIANT.STACKED);
  await expect(connector).toHaveAttribute('orientation', ORIENTATION.VERTICAL);

  const [itemUpdatedInSingleCycle, connectorUpdatedInSingleCycle] = await Promise.all([
    items.nth(0).evaluate((element, variant) => {
      element.setAttribute('variant', variant);
      return (element as HTMLElement & { updateComplete: Promise<boolean> }).updateComplete;
    }, VARIANT.INLINE),
    connector.evaluate((element, orientation) => {
      element.setAttribute('orientation', orientation);
      return (element as HTMLElement & { updateComplete: Promise<boolean> }).updateComplete;
    }, ORIENTATION.HORIZONTAL),
  ]);

  expect(itemUpdatedInSingleCycle).toBe(true);
  expect(connectorUpdatedInSingleCycle).toBe(true);

  await expect(items.nth(0)).toHaveAttribute('variant', VARIANT.STACKED);
  await expect(connector).toHaveAttribute('orientation', ORIENTATION.VERTICAL);

  await componentsPage.setAttributes(stepper, {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE,
  });

  await expect(items.nth(0)).toHaveAttribute('variant', VARIANT.INLINE);
  await expect(items.nth(1)).toHaveAttribute('variant', VARIANT.INLINE);
  await expect(connector).toHaveAttribute('orientation', ORIENTATION.HORIZONTAL);
});
// End AI-Assisted

// AI-Assisted: Guard intrinsic sizing, two-line clamping, and collision-free horizontal stacked layout.
test('should use available width before clamping stacked content without overlap', async ({ componentsPage }) => {
  await componentsPage.page.setViewportSize({ width: 1400, height: 700 });
  await setup(componentsPage, {
    children: responsiveStackedChildren,
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.STACKED,
    style: 'width: 75rem;',
  });

  const items = componentsPage.page.locator('mdc-stepperitem');
  const firstLabel = items.nth(0).locator('[part="label"]');
  const wideLongLabel = items.nth(2).locator('[part="label"]');

  await expect.poll(() => getTextLayout(firstLabel)).toEqual({ isTruncated: false, visibleLineCount: 1 });
  await expect.poll(() => getTextLayout(wideLongLabel)).toEqual({ isTruncated: false, visibleLineCount: 1 });
  expect(await firstLabel.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);

  await setup(componentsPage, {
    children: responsiveStackedChildren,
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.STACKED,
    style: 'width: 32rem;',
  });

  const constrainedItems = componentsPage.page.locator('mdc-stepperitem');
  const constrainedLabel = constrainedItems.nth(2).locator('[part="label"]');
  const constrainedHelpText = constrainedItems.nth(2).locator('[part="help-text"]');
  const constrainedErrorText = constrainedItems.nth(3).locator('[part="help-text"]');

  await expect.poll(() => getTextLayout(constrainedLabel)).toEqual({ isTruncated: true, visibleLineCount: 2 });
  await expect.poll(() => getTextLayout(constrainedHelpText)).toEqual({ isTruncated: true, visibleLineCount: 2 });
  await expect.poll(() => getTextLayout(constrainedErrorText)).toEqual({ isTruncated: true, visibleLineCount: 2 });
  await expect(constrainedLabel).toHaveText('Shift template configuration details');
  await expect(constrainedHelpText).toHaveText('Choose a shift template for this work group');
  await expect(constrainedErrorText).toHaveText('Select a policy to continue');

  await expectLabelsNotToOverlap(constrainedItems);

  await componentsPage.page.evaluate(() => document.documentElement.setAttribute('dir', 'rtl'));
  await expectLabelsNotToOverlap(constrainedItems);
  await expect.poll(() => getTextLayout(constrainedLabel)).toEqual({ isTruncated: true, visibleLineCount: 2 });
  await expect.poll(() => getTextLayout(constrainedHelpText)).toEqual({ isTruncated: true, visibleLineCount: 2 });
  await expect.poll(() => getTextLayout(constrainedErrorText)).toEqual({ isTruncated: true, visibleLineCount: 2 });
  await componentsPage.page.evaluate(() => document.documentElement.setAttribute('dir', 'ltr'));

  await componentsPage.visualRegression.takeScreenshot('mdc-stepper-stacked-constrained', {
    element: componentsPage.page.locator('mdc-stepper'),
  });
});
// End AI-Assisted

test('mdc-stepper', async ({ componentsPage }) => {
  const children = `
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-stepperconnector></mdc-stepperconnector>
      <mdc-stepperitem label="Step 2" status="current"></mdc-stepperitem>
    `;
  const stepper = await setup(componentsPage, { children });
  const stepperconnector = componentsPage.page.locator('mdc-stepperconnector');
  const item1 = componentsPage.page.locator('mdc-stepperitem').nth(0);
  const item2 = componentsPage.page.locator('mdc-stepperitem').nth(1);

  await test.step('should render stepper with default orientation and variant', async () => {
    await expect(stepper).toHaveAttribute('variant', 'inline');
    await expect(stepper).toHaveAttribute('orientation', 'horizontal');
  });

  await test.step('should provide orientation and variant context to children', async () => {
    await expect(stepperconnector).toHaveAttribute('orientation', 'horizontal');
    await expect(item1).toHaveAttribute('variant', 'inline');
    await expect(item2).toHaveAttribute('variant', 'inline');
  });

  await test.step('should update stepperconnector and stepperitem context on attribute change', async () => {
    await componentsPage.setAttributes(stepper, { orientation: 'vertical', variant: 'stacked' });
    await expect(stepperconnector).toHaveAttribute('orientation', 'vertical');
    await expect(item1).toHaveAttribute('variant', 'stacked');
  });

  await test.step('should have appropriate ARIA roles and attributes for navigation', async () => {
    const children = `
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-stepperconnector></mdc-stepperconnector>
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
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 2" status="completed"></mdc-stepperitem>
      <mdc-stepperconnector></mdc-stepperconnector>
      <mdc-stepperitem label="Step 3" status="current"></mdc-stepperitem>
      <mdc-stepperconnector></mdc-stepperconnector>
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
    const waitForClickAfterEnter = await componentsPage.waitForEvent(items.nth(0), 'click');
    await componentsPage.page.keyboard.press('Enter');
    await expect(waitForClickAfterEnter).toEventEmitted();
    // Keyboard Space
    await componentsPage.actionability.pressTab();
    const waitForClickAfterSpace = await componentsPage.waitForEvent(items.nth(1), 'click');
    await componentsPage.page.keyboard.press('Space');
    await expect(waitForClickAfterSpace).toEventEmitted();
    // Mouse click
    const waitForClick = await componentsPage.waitForEvent(items.nth(2), 'click');
    await items.nth(2).click();
    await expect(waitForClick).toEventEmitted();
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

  await test.step('spatial navigation', async () => {
    await setup(componentsPage, { children });
    await componentsPage.wrapElement({ wrapperTagName: 'mdc-spatialnavigationprovider' });
    const items = componentsPage.page.locator('mdc-stepperitem');

    const { keyboard } = componentsPage.page;

    await keyboard.press(KEYS.ARROW_DOWN);
    await expect(items.nth(0)).toBeFocused();

    await keyboard.press(KEYS.ARROW_RIGHT);
    await expect(items.nth(1)).toBeFocused();

    const waitForClick = await componentsPage.waitForEvent(items.nth(1), 'click');
    await keyboard.press(KEYS.ENTER);
    await expect(waitForClick).toEventEmitted();
  });
});
