import { expect, Locator } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import { BUTTON_COLORS, BUTTON_VARIANTS, ICON_BUTTON_SIZES, PILL_BUTTON_SIZES } from './button.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  prefixIcon?: string;
  postfixIcon?: string;
  active?: boolean;
  disabled?: boolean;
  softDisabled?: boolean;
  variant?: string;
  size?: number;
  color?: string;
  children?: any;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-button
      ${restArgs.active ? 'active' : ''}
      ${restArgs.disabled ? 'disabled' : ''}
      ${restArgs.softDisabled ? 'soft-disabled' : ''}
      ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
      ${restArgs.color ? `color="${restArgs.color}"` : ''}
      ${restArgs.prefixIcon ? `prefix-icon="${restArgs.prefixIcon}"` : ''}
      ${restArgs.postfixIcon ? `postfix-icon="${restArgs.postfixIcon}"` : ''}
    >
      ${restArgs.children}
    </mdc-button>
      `,
    clearDocument: true,
  });
  const button = componentsPage.page.locator('mdc-button');
  await button.waitFor();
  return button;
};

const pressTab = async (componentsPage: ComponentsPage, browserName: string, subComponent: Locator, focus: boolean) => {
  if (browserName === 'webkit') {
    if (focus) {
      await componentsPage.page.keyboard.press('Alt+Tab');
    } else {
      // Explicitly blur to remove focus in WebKit
      await subComponent.evaluate((el) => el.blur());
    }
  } else {
    await componentsPage.page.keyboard.press('Tab');
  }
};

const testForButtonTypes = async ({ browserName, props, componentsPage, buttonType }: any) => {
  // Test for all possible combinations of variant, color, and size
  const ButtonSizes = buttonType === 'icon' ? ICON_BUTTON_SIZES : PILL_BUTTON_SIZES;

  Object.values(BUTTON_VARIANTS).forEach(async (variant) => {
    Object.values(BUTTON_COLORS).forEach(async (color) => {
      Object.values(ButtonSizes).forEach(async (size) => {
        const button = await setup({
          componentsPage,
          ...props,
        });
        await test.step('visual-regression', async () => {
          await componentsPage.visualRegression
            .takeScreenshot(`mdc-button-${buttonType}-${variant}-${color}-${size}`, { element: button });
        });

        await test.step(
          'attributes should be present on the component with the given variant, color, and size',
          async () => {
            await expect(button).toHaveAttribute('variant', variant);
            await expect(button).toHaveAttribute('size', size.toString());
            await expect(button).toHaveAttribute('color', color);
          },
        );

        // Disabled button
        await componentsPage.setAttributes(button, {
          disabled: 'true',
        });

        await test.step(`accessibility for disabled ${buttonType} button`, async () => {
          await componentsPage.accessibility
            .checkForA11yViolations(`button-${buttonType}-${variant}-${color}-${size}-disabled`);
        });

        await test.step(`visual-regression for disabled ${buttonType} button`, async () => {
          await componentsPage.visualRegression
            .takeScreenshot(`mdc-button-${buttonType}-${variant}-${color}-${size}-disabled`, { element: button });
        });

        await test.step(`${buttonType} button should not be focusable when disabled`, async () => {
          await pressTab(componentsPage, browserName, button, false);
          await expect(button).not.toBeFocused();
        });
        await componentsPage.removeAttribute(button, 'disabled');

        // Soft disabled button
        await componentsPage.setAttributes(button, {
          softDisabled: 'true',
        });

        await test.step(`accessibility for softDisabled ${buttonType} button`, async () => {
          await componentsPage.accessibility
            .checkForA11yViolations(`button-${buttonType}-${variant}-${color}-${size}-softDisabled`);
        });

        await test.step(`visual-regression for softDisabled ${buttonType} button`, async () => {
          await componentsPage.visualRegression
            .takeScreenshot(`mdc-button-${buttonType}-${variant}-${color}-${size}-softDisabled`, { element: button });
        });

        await test.step('button should be focusable when soft-disabled', async () => {
          await pressTab(componentsPage, browserName, button, false);
          await expect(button).toBeFocused();
        });
        await componentsPage.removeAttribute(button, 'softDisabled');

        // Active button
        await componentsPage.setAttributes(button, {
          active: 'true',
        });

        await test.step(`accessibility for active ${buttonType} button`, async () => {
          await componentsPage.accessibility
            .checkForA11yViolations(`button-${buttonType}-${variant}-${color}-${size}-active`);
        });

        await test.step(`visual-regression for active ${buttonType} button`, async () => {
          await componentsPage.visualRegression
            .takeScreenshot(`mdc-button-${buttonType}-${variant}-${color}-${size}-active`, { element: button });
        });

        await test.step('button should be focusable when active', async () => {
          await pressTab(componentsPage, browserName, button, false);
          await expect(button).toBeFocused();
        });

        // Active disabled button
        await componentsPage.setAttributes(button, {
          active: 'true',
          disabled: 'true',
        });

        await test.step(`accessibility for active disabled ${buttonType} button`, async () => {
          await componentsPage.accessibility
            .checkForA11yViolations(`button-${buttonType}-${variant}-${color}-${size}-active-disabled`);
        });

        await test.step(`visual-regression for active disabled ${buttonType} button`, async () => {
          await componentsPage.visualRegression
            .takeScreenshot(
              `mdc-button-${buttonType}-${variant}-${color}-${size}-active-disabled`,
              { element: button },
            );
        });

        await test.step('button should not be focusable when active disabled', async () => {
          await pressTab(componentsPage, browserName, button, false);
          await expect(button).not.toBeFocused();
        });
        await componentsPage.removeAttribute(button, 'disabled');

        // Active softDisabled button
        await componentsPage.setAttributes(button, {
          active: 'true',
          softDisabled: 'true',
        });

        await test.step(`accessibility for active softDisabled ${buttonType} button`, async () => {
          await componentsPage.accessibility
            .checkForA11yViolations(`button-${buttonType}-${variant}-${color}-${size}-active-soft-disabled`);
        });

        await test.step(`visual-regression for active softDisabled ${buttonType} button`, async () => {
          await componentsPage.visualRegression
            .takeScreenshot(
              `mdc-button-${buttonType}-${variant}-${color}-${size}-active-soft-disabled`,
              { element: button },
            );
        });

        await test.step('button should be focusable when active soft-disabled', async () => {
          await pressTab(componentsPage, browserName, button, false);
          await expect(button).toBeFocused();
        });
      });
    });
  });
};

const testsToRun = async (componentsPage: ComponentsPage, browserName: string) => {
  await test.step('mdc-button as pill button', async () => {
    const children = 'Button content';
    await testForButtonTypes({ browserName,
      props: { children },
      componentsPage,
      buttonType: 'pill' });
  });
};

test.describe.parallel('mdc-button', () => {
  test('standalone', async ({ componentsPage, browserName }) => {
    await testsToRun(componentsPage, browserName);
  });
});
