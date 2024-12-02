/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
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

/**
   * ACCESSIBILITY
   */
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

/**
   * ATTRIBUTES
   */
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
          await componentsPage.accessibility
            .checkForA11yViolations(`button-${buttonType}-${variant}-${color}-${size}`);
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
    }
  }

  await test.step('attribute size="20" should be present on tertiary prefix-icon button', async () => {
    await componentsPage.setAttributes(button, { size: `${ICON_BUTTON_SIZES[20]}`, variant: BUTTON_VARIANTS.TERTIARY });
    await expect(button).toHaveAttribute('size', `${ICON_BUTTON_SIZES[20]}`);
  });
};

const stickerSheetForSnapshot = async (
  componentsPage: ComponentsPage,
  attributes: any,
  props: any,
) => {
  const buttonsArr:string[] = [];
  // primary and secondary button variants with all sizes and colors
  buttonsArr.push(
    await componentsPage.visualRegression.generateComponentMarkup(
      'mdc-button',
      attributes,
      { ...props },
    ),
  );
  // active button
  buttonsArr.push(
    await componentsPage.visualRegression.generateComponentMarkup(
      'mdc-button',
      attributes,
      { ...props, active: 'true' },
    ),
  );
  // tertiary button sizes
  buttonsArr.push(
    await componentsPage.visualRegression.generateComponentMarkup(
      'mdc-button',
      {
        size: PILL_BUTTON_SIZES,
      },
      { ...props, variant: BUTTON_VARIANTS.TERTIARY },
    ),
  );
  // disabled button
  buttonsArr.push(
    await componentsPage.visualRegression.generateComponentMarkup(
      'mdc-button',
      {
        variant: BUTTON_VARIANTS,
      },
      { ...props, disabled: 'true' },
    ),
  );
  // active disabled button
  buttonsArr.push(
    await componentsPage.visualRegression.generateComponentMarkup(
      'mdc-button',
      {
        variant: BUTTON_VARIANTS,
      },
      { ...props, disabled: 'true', active: 'true' },
    ),
  );
  return buttonsArr.join(' ');
};

test.describe.parallel('mdc-button', () => {
  test.use({ viewport: { width: 2000, height: 4000 } });

  test('mdc-button pill button', async ({ componentsPage }) => {
    const children = 'Pill Button';
    await test.step('mdc-button as pill button', async () => {
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

  test('mdc-button icon button', async ({ componentsPage }) => {
    await test.step('mdc-button as icon button', async () => {
      const prefixIcon = 'placeholder-bold';
      await testForCombinations({ prefixIcon, componentsPage }, 'icon');
      await testForIconButtonSizes({ prefixIcon, componentsPage }, 'icon');
    });
  });

  test('mdc-button visual regression', async ({ componentsPage }) => {
    const buttonsArr:string[] = [];
    const defaultAttributes = {
      variant: { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY },
      size: PILL_BUTTON_SIZES,
      color: BUTTON_COLORS,
    };
    // pill button
    buttonsArr.push(await stickerSheetForSnapshot(componentsPage, defaultAttributes, { children: 'Pill button' }));
    // pill with prefix icon
    buttonsArr.push(await stickerSheetForSnapshot(
      componentsPage,
      defaultAttributes,
      { 'prefix-icon': 'placeholder-light', children: 'Pill with prefix' },
    ));
    // pill with postfix icon
    buttonsArr.push(await stickerSheetForSnapshot(
      componentsPage,
      defaultAttributes,
      { 'postfix-icon': 'placeholder-light', children: 'Pill with postfix' },
    ));
    // icon button
    buttonsArr.push(
      await stickerSheetForSnapshot(
        componentsPage,
        { ...defaultAttributes, size: { ...defaultAttributes.size, 52: 52, 64: 64 } }, // not including size 20
        { 'prefix-icon': 'placeholder-light', class: 'mdc-icon-button' },
      ),
    );
    // tertiary icon button with size 20
    buttonsArr.push(
      await stickerSheetForSnapshot(
        componentsPage,
        {},
        {
          'prefix-icon': 'placeholder-light',
          variant: BUTTON_VARIANTS.TERTIARY,
          size: ICON_BUTTON_SIZES[20],
          class: 'mdc-icon-button',
        },
      ),
    );

    /**
   * VISUAL REGRESSION
   */
    await componentsPage.mount({
      html: `
      <div class="componentWrapper">
        ${buttonsArr.join(' ')}
      </div>
      `,
      clearDocument: true,
    });

    const buttonEl = componentsPage.page.locator('.componentWrapper');
    await componentsPage.page.waitForLoadState('networkidle');

    await test.step('matches screenshot of button element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-button', { element: buttonEl });
    });
  });

  // TODO: Key pressed, focused events test.
  test('mdc-button key pressed and focused events', async ({ componentsPage }) => {
    const children = 'Pill Button';
    await test.step('mdc-button as pill button', async () => {
      const button = await setup({ componentsPage, children });
      // await button.focus();
      await componentsPage.page.keyboard.press('Tab');
      await expect(button).toBeFocused();
      await componentsPage.page.keyboard.down('Space');
      await expect(button).toHaveClass('pressed');
      await componentsPage.page.keyboard.up('Space');
      // trigger should be fired
      await expect(button).not.toHaveClass('pressed');
      await componentsPage.page.keyboard.down('Enter');
      await expect(button).toHaveClass('pressed');
      // onclick function should be called
      await componentsPage.page.keyboard.up('Enter');
      await expect(button).not.toHaveClass('pressed');
      await componentsPage.page.keyboard.press('Tab');
      await expect(button).not.toBeFocused();
    });
  });

  test('mdc-button click event', async ({ componentsPage }) => {
    const children = 'Pill Button';
    await test.step('mdc-button as pill button', async () => {
      const mdcButton = await setup({ componentsPage, children });
      await componentsPage.page.evaluate(() => {
        const button = document.getElementsByTagName('mdc-button')[0];
        button.addEventListener('click', () => {
          button.classList.toggle('btn-clicked');
        });
      });
      await mdcButton.click();
      await expect(mdcButton).toHaveClass('btn-clicked');
      await mdcButton.click();
      await expect(mdcButton).not.toHaveClass('btn-clicked');
    });
  });
});
