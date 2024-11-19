/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect, Locator } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import {
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  DEFAULTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES,
} from './button.constants';

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
  ariaLabel?: string;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  if (restArgs.children) {
    await componentsPage.mount({
      html: `<mdc-button
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
  } else {
    await componentsPage.mount({
      html: `<mdc-button
        ${restArgs.active ? 'active' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.softDisabled ? 'soft-disabled' : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
        ${restArgs.color ? `color="${restArgs.color}"` : ''}
        ${restArgs.prefixIcon ? `prefix-icon="${restArgs.prefixIcon}"` : ''}
        ${restArgs.postfixIcon ? `postfix-icon="${restArgs.postfixIcon}"` : ''}
        ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
      ></mdc-button>
        `,
      clearDocument: true,
    });
  }

  const button = componentsPage.page.locator('mdc-button');
  await button.waitFor();
  return button;
};

const commonTestCases = async (args: SetupOptions, buttonType: string) => {
  const { componentsPage, ...props } = args;
  const button = await setup({
    componentsPage,
    ...props,
  });

  // Default values for button
  await test.step(`attributes for ${buttonType} button`, async () => {
    await test.step('attributes should be present on component by default', async () => {
      await expect(button).toHaveAttribute('variant', DEFAULTS.VARIANT);
      await expect(button).toHaveAttribute('size', DEFAULTS.SIZE.toString());
      await expect(button).toHaveAttribute('color', DEFAULTS.COLOR);
    });
  });

  await test.step('should fallback to default values when invalid attributes are passed', async () => {
    await componentsPage.setAttributes(button, {
      variant: 'invalid',
      color: 'invalid',
      size: 'invalid',
    });
    await expect(button).toHaveAttribute('variant', DEFAULTS.VARIANT);
    await expect(button).toHaveAttribute('size', `${DEFAULTS.SIZE}`);
    await expect(button).toHaveAttribute('color', DEFAULTS.COLOR);
  });
};

const accessibilityTestCases = async (args: SetupOptions, buttonType: string) => {
  const { componentsPage, ...props } = args;
  const button = await setup({
    componentsPage,
    ...props,
  });

  // Default
  await test.step(`accessibility for ${buttonType} button`, async () => {
    await componentsPage.accessibility.checkForA11yViolations(`button-${buttonType}-default`);
  });

  // Disabled
  await test.step(`accessibility for disabled ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { disabled: 'true' });
    await componentsPage.accessibility
      .checkForA11yViolations(`button-${buttonType}-disabled`);
    await componentsPage.removeAttribute(button, 'disabled');
  });

  // Soft Disabled
  await test.step(`accessibility for soft-disabled ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { 'soft-disabled': 'true' });
    await componentsPage.accessibility
      .checkForA11yViolations(`button-${buttonType}-soft-disabled`);
    await componentsPage.removeAttribute(button, 'soft-disabled');
  });

  // Active
  await test.step(`accessibility for active ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { active: 'true' });
    await componentsPage.accessibility
      .checkForA11yViolations(`button-${buttonType}-active`);
    await componentsPage.removeAttribute(button, 'active');
  });

  // Active Disabled
  await test.step(`accessibility for active and disabled ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { disabled: 'true', active: 'true' });
    await componentsPage.accessibility
      .checkForA11yViolations(`button-${buttonType}-active-disabled`);
    await componentsPage.removeAttribute(button, 'disabled');
    await componentsPage.removeAttribute(button, 'active');
  });

  // Active Soft Disabled
  await test.step(`accessibility for active and soft-disabled ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { 'soft-disabled': 'true', active: 'true' });
    await componentsPage.accessibility
      .checkForA11yViolations(`button-${buttonType}-active-soft-disabled`);
    await componentsPage.removeAttribute(button, 'soft-disabled');
    await componentsPage.removeAttribute(button, 'active');
  });
};

const attributeTestCases = async (args: SetupOptions, buttonType: string) => {
  const { componentsPage, ...props } = args;
  const button = await setup({
    componentsPage,
    ...props,
  });

  // Disabled button
  await test.step(`attribute disabled should be present on ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, {
      disabled: 'true',
    });
    await expect(button).toHaveAttribute('disabled');
    await componentsPage.removeAttribute(button, 'disabled');
  });

  // Soft Disabled button
  await test.step(`attribute soft-disabled should be present on ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, {
      'soft-disabled': 'true',
    });
    await expect(button).toHaveAttribute('soft-disabled');
    await componentsPage.removeAttribute(button, 'soft-disabled');
  });

  // Active button
  await test.step(`attribute active should be present on ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, {
      active: 'true',
    });
    await expect(button).toHaveAttribute('active');
    await componentsPage.removeAttribute(button, 'active');
  });

  // Active Disabled button
  await test.step(`attribute active and disabled should be present on ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, {
      disabled: 'true',
      active: 'true',
    });
    await expect(button).toHaveAttribute('disabled');
    await expect(button).toHaveAttribute('active');
    await componentsPage.removeAttribute(button, 'disabled');
    await componentsPage.removeAttribute(button, 'active');
  });

  // Active Soft Disabled button
  await test.step(`attribute active and soft-disabled should be present on ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, {
      'soft-disabled': 'true',
      active: 'true',
    });
    await expect(button).toHaveAttribute('soft-disabled');
    await expect(button).toHaveAttribute('active');
    await componentsPage.removeAttribute(button, 'soft-disabled');
    await componentsPage.removeAttribute(button, 'active');
  });
};

const visualRegressionTestCases = async (componentsPage: ComponentsPage, button: Locator, buttonType: string) => {
  await test.step(`visual-regression for disabled ${buttonType} button`, async () => {
    await componentsPage.visualRegression
      .takeScreenshot(`mdc-button-${buttonType}`, { element: button });
  });

  // Disbabled button
  await test.step(`visual-regression for disabled ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { disabled: 'true' });
    await componentsPage.visualRegression
      .takeScreenshot(`mdc-button-${buttonType}-disabled`, { element: button });
    await componentsPage.removeAttribute(button, 'disabled');
  });

  await test.step(`visual-regression for soft-disabled ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { 'soft-disabled': 'true' });
    await componentsPage.visualRegression
      .takeScreenshot(`mdc-button-${buttonType}-soft-disabled`, { element: button });
    await componentsPage.removeAttribute(button, 'soft-disabled');
  });

  await test.step(`visual-regression for active ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { active: 'true' });
    await componentsPage.visualRegression
      .takeScreenshot(`mdc-button-${buttonType}-active`, { element: button });
    await componentsPage.removeAttribute(button, 'active');
  });

  await test.step(`visual-regression for active and disabled ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { disabled: 'true', active: 'true' });
    await componentsPage.visualRegression
      .takeScreenshot(`mdc-button-${buttonType}-active-disabled`, { element: button });
    await componentsPage.removeAttribute(button, 'disabled');
    await componentsPage.removeAttribute(button, 'active');
  });

  await test.step(`visual-regression for active and soft-disabled ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, { 'soft-disabled': 'true', active: 'true' });
    await componentsPage.visualRegression
      .takeScreenshot(`mdc-button-${buttonType}-active-soft-disabled`, { element: button });
    await componentsPage.removeAttribute(button, 'soft-disabled');
    await componentsPage.removeAttribute(button, 'active');
  });
};

const testForCombinations = async (args: SetupOptions, buttonType: string) => {
  await commonTestCases(args, buttonType);
  await attributeTestCases(args, buttonType);
  await accessibilityTestCases(args, buttonType);

  const { componentsPage, ...props } = args;
  const button = await setup({
    componentsPage,
    ...props,
  });

  for (const variant of Object.values(BUTTON_VARIANTS)) {
    for (const size of Object.values(PILL_BUTTON_SIZES)) {
      for (const color of Object.values(BUTTON_COLORS)) {
        if (variant !== BUTTON_VARIANTS.TERTIARY) {
          await test.step(`attribute variant="${variant}",
                    color="${color}", size="${size}" should be present on ${buttonType} button`, async () => {
            await componentsPage.setAttributes(button, { variant, color, size: `${size}` });
            await expect(button).toHaveAttribute('variant', variant);
            await expect(button).toHaveAttribute('color', color);
            await expect(button).toHaveAttribute('size', `${size}`);
          });
          await test.step(`visual-regression for
            variant="${variant}", color="${color}", size="${size}" ${buttonType} button`, async () => {
            await visualRegressionTestCases(componentsPage, button, `${buttonType}-${variant}-${color}-${size}`);
          });
        }
      }
    }
  }
};

const testForIconButtonSizes = async (args: SetupOptions, buttonType: string) => {
  const { componentsPage, ...props } = args;
  const button = await setup({
    componentsPage,
    ...props,
  });

  for (const size of Object.values(ICON_BUTTON_SIZES)) {
    if (size !== ICON_BUTTON_SIZES[20]) {
      await test.step(`attribute size="${size}" should be present on ${buttonType} button`, async () => {
        await componentsPage.setAttributes(button, { size: `${size}` });
        await expect(button).toHaveAttribute('size', `${size}`);
      });

      await test.step(`accessibility,
      visual-regression and attributes for size="${size}" ${buttonType} button`, async () => {
        await visualRegressionTestCases(componentsPage, button, `${buttonType}-${size}`);
      });
    }
  }

  await test.step('attribute size="20" should be present on tertiary prefix-icon button', async () => {
    await componentsPage.setAttributes(button, { size: `${ICON_BUTTON_SIZES[20]}`, variant: BUTTON_VARIANTS.TERTIARY });
    await expect(button).toHaveAttribute('size', `${ICON_BUTTON_SIZES[20]}`);
    await componentsPage.visualRegression
      .takeScreenshot(`mdc-button-${buttonType}-${ICON_BUTTON_SIZES[20]}`, { element: button });
  });
};

test.describe.parallel('mdc-button', () => {
  test.use({ viewport: { width: 300, height: 200 } });
  test('mdc-button pill button', async ({ componentsPage }) => {
    await test.step('mdc-button as pill button', async () => {
      const children = 'Pill Button';
      await testForCombinations({ children, componentsPage }, 'pill');
    });
  });

  test('mdc-button pill with prefix icon button', async ({ componentsPage }) => {
    await test.step('mdc-button as pill with prefix icon button', async () => {
      const children = 'Pill with Prefix Icon';
      const prefixIcon = 'placeholder-bold';
      await testForCombinations({ prefixIcon, children, componentsPage }, 'pill-with-prefix-icon');
    });
  });

  test('mdc-button pill with postfix icon button', async ({ componentsPage }) => {
    await test.step('mdc-button as pill with postfix icon button', async () => {
      const children = 'Pill with Postfix Icon';
      const postfixIcon = 'placeholder-light';
      await testForCombinations({ postfixIcon, children, componentsPage }, 'pill-with-postfix-icon');
    });
  });

  test('mdc-button prefix icon button', async ({ componentsPage }) => {
    await test.step('mdc-button as prefix icon button', async () => {
      const prefixIcon = 'placeholder-bold';
      await testForCombinations({ prefixIcon, componentsPage }, 'prefix-icon');
      await testForIconButtonSizes({ prefixIcon, componentsPage }, 'prefix-icon');
    });
  });

  test('mdc-button postfix icon button', async ({ componentsPage }) => {
    await test.step('mdc-button as postfix icon button', async () => {
      const postfixIcon = 'placeholder-light';
      await testForCombinations({ postfixIcon, componentsPage }, 'postfix-icon');
      await testForIconButtonSizes({ postfixIcon, componentsPage }, 'prefix-icon');
    });
  });

  // TODO: Key pressed, focused events test.
});
