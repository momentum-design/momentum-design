import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  shape: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, shape } = args;
  await componentsPage.mount({
    html: `<mdc-subcomponent-focusring shape="${shape}" class="focus-ring"></mdc-subcomponent-focusring>`,
    clearDocument: true,
  });
  const subComponent = componentsPage.page.locator('mdc-subcomponent-focusring');
  await subComponent.waitFor();
  return subComponent;
};

test.describe('SubComponentFocusRing', () => {

  test('Test Case 1: Focus Ring Appearance', async ({ componentsPage }) => {
    const subComponent = await setup({ componentsPage, shape: 'mds-button' });

    await componentsPage.page.keyboard.press('Tab');

    // Optional: Click on the element to focus
    // await subComponent.click();  // Uncomment this line if click-based focus is desired

    await test.step('Check focus ring appearance', async () => {
      const boxShadow = await subComponent.evaluate((el: HTMLElement) => getComputedStyle(el).boxShadow);
      expect(boxShadow).toBe("rgb(0, 0, 0) 0px 0px 0px 2px, rgb(100, 180, 250) 0px 0px 0px 4px, rgba(100, 180, 250, 0.35) 0px 0px 0px 5px");
    });

    await componentsPage.visualRegression.takeScreenshot('focus-ring-appearance');
  });

  test('Test Case 2: Focus Ring Disappearance', async ({ componentsPage }) => {
    const subComponent = await setup({ componentsPage, shape: 'mds-button' });
  
    await componentsPage.page.keyboard.press('Tab');
  
    await test.step('Check subcomponent is focused', async () => {
      const isFocused = await subComponent.evaluate((el: HTMLElement) => document.activeElement === el);
      expect(isFocused).toBe(true); 
    });
  
    // Simulate pressing the Tab key again to move focus away (simulate blur)
    await componentsPage.page.keyboard.press('Tab');
  
    // Ensure the focus has moved away from the subcomponent
    await test.step('Check focus has moved away', async () => {
      const isFocused = await subComponent.evaluate((el: HTMLElement) => document.activeElement === el);
      expect(isFocused).toBe(false);
    });
  
    // Allow time for the focus change to be registered across all browsers
    await componentsPage.page.waitForTimeout(100); // Adjust the timeout as necessary
  
    await test.step('Check focus ring disappearance', async () => {
      const boxShadow = await subComponent.evaluate((el: HTMLElement) => getComputedStyle(el).boxShadow);
      expect(boxShadow).toBe('none'); 
    });
  
    await componentsPage.visualRegression.takeScreenshot('focus-ring-disappearance', { element: subComponent });
  });
  
  test('Test Case 3: Multiple Components', async ({ componentsPage }) => {
    const subComponent1 = await setup({ componentsPage, shape: 'mds-button' });
    const subComponent2 = await setup({ componentsPage, shape: 'mds-radio' }); // Replaced mds-anchor with mds-radio
  
    // Simulate pressing the Tab key to focus on the first component
    await componentsPage.page.keyboard.press('Tab');
    await componentsPage.page.waitForTimeout(50); // slight delay to register focus
  
    await componentsPage.visualRegression.takeScreenshot('focus-ring-first-component', { element: subComponent1 });
  
    // Simulate another Tab key press to focus on the second component
    await componentsPage.page.keyboard.press('Tab');
    await componentsPage.page.waitForTimeout(50); // slight delay to register focus
  
    await componentsPage.visualRegression.takeScreenshot('focus-ring-second-component', { element: subComponent2 });
  });  

  test('Test Case 4: Accessibility Compliance', async ({ componentsPage }) => {
    // Initial component setup for accessibility tests
    await setup({ componentsPage, shape: 'mds-button' });
  
    // Step 1: Accessibility check with default properties
    await test.step('Check accessibility with default props', async () => {
      await componentsPage.page.keyboard.press('Tab');
      await componentsPage.accessibility.checkForA11yViolations('focus-ring-a11y-default');
    });
  
    // Step 2: Accessibility check with aria-label added
    await test.step('Check accessibility with aria-label', async () => {
      const subComponentWithAriaLabel = await setup({ componentsPage, shape: 'mds-button' });
      await subComponentWithAriaLabel.evaluate((el: HTMLElement) => {
        el.setAttribute('aria-label', 'Subcomponent Focus Ring');
      });
      
      await componentsPage.page.keyboard.press('Tab');
      await componentsPage.accessibility.checkForA11yViolations('focus-ring-a11y-aria-label');
    });
  });  

  test('Test Case 5: Rapid Focus/Blur', async ({ componentsPage }) => {
    const subComponent = await setup({ componentsPage, shape: 'mds-button' });
    for (let i = 0; i < 5; i++) {
      // Simulate pressing the Tab key to focus
      await componentsPage.page.keyboard.press('Tab');

      // Simulate another Tab key press to blur (move focus away)
      await componentsPage.page.keyboard.press('Tab');
    }

    await test.step('Check focus/blur stability', async () => {
      const boxShadow = await subComponent.evaluate((el: HTMLElement) => getComputedStyle(el).boxShadow);
      expect(boxShadow).toBe('none'); 
    });

    await componentsPage.visualRegression.takeScreenshot('focus-ring-rapid-interaction', { element: subComponent });
  });

  test('Test Case 6: Focus Ring and Event Listener Interference', async ({ componentsPage }) => {
    await componentsPage.mount({
      html: `
        <button id="parent">
          <mdc-subcomponent-focusring shape="mds-button"></mdc-subcomponent-focusring>
        </button>
      `,
      clearDocument: true,
    });

    const parent = componentsPage.page.locator('#parent');
    const child = componentsPage.page.locator('mdc-subcomponent-focusring');

    await test.step('Check event listener interference', async () => {
      await parent.focus();
      await parent.evaluate((el: HTMLElement) => {
        el.addEventListener('click', (e) => e.stopPropagation());
      });

      // Simulate pressing the Tab key to focus the child
      await componentsPage.page.keyboard.press('Tab');

      expect(await child.evaluate((el: HTMLElement) => document.activeElement === el)).toBe(true);

      await componentsPage.visualRegression.takeScreenshot('focus-ring-parent-child', { element: child });
    });
  });
});

