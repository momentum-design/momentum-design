/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect, Locator } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
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

const getStickerSheetDetails = async (componentsPage: ComponentsPage) => {
  const buttonSheet = new StickerSheet(componentsPage, 'mdc-button');
  const commonMount = async (iconButton = false) => {
    const size = iconButton ? { ...PILL_BUTTON_SIZES, 52: 52, 64: 64 } : PILL_BUTTON_SIZES;
    await buttonSheet.mountComponents({
      variant: { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY },
      size,
      color: BUTTON_COLORS,
    });
  };
  return { buttonSheet, commonMount };
};

test.describe.parallel('mdc-button', () => {
  test.use({ viewport: { width: 800, height: 1300 } });

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

  test('mdc-button visual regression pill button', async ({ componentsPage }) => {
    const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
    // pill button
    buttonSheet.setChildren('Pill button');
    await commonMount();
    // tertiary pill button
    buttonSheet.setAttributes({ variant: BUTTON_VARIANTS.TERTIARY });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES });
    // disabled pill button
    buttonSheet.setAttributes({ disabled: 'true' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // 'soft-disabled' pill button
    buttonSheet.setAttributes({ 'soft-disabled': 'true' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });

    await test.step('matches screenshot of pill-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-button-pill');
    });
  });

  test('mdc-button visual regression pill with prefix icon button', async ({ componentsPage }) => {
    const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
    // pill with prefix icon
    buttonSheet.setChildren('Pill with prefix');
    buttonSheet.setAttributes({
      'prefix-icon': 'placeholder-light',
    });
    buttonSheet.setAssertion(async (component: Locator) => {
      await component.locator('mdc-icon').waitFor();
    });
    await commonMount();
    // tertiary pill with prefix icon
    buttonSheet.setAttributes({
      variant: BUTTON_VARIANTS.TERTIARY,
      'prefix-icon': 'placeholder-light',
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES });
    // disabled pill with prefix icon button
    buttonSheet.setAttributes({ disabled: 'true', 'prefix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // 'soft-disabled' pill with prefix icon button
    buttonSheet.setAttributes({
      'soft-disabled': 'true',
      'prefix-icon': 'placeholder-light',
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    await test.step('matches screenshot of pill-with-prefix-icon-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-button-pill-with-prefix-icon');
    });
  });

  test('mdc-button visual regression pill with postfix icon button', async ({ componentsPage }) => {
    const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
    // pill with postfix icon
    buttonSheet.setChildren('Pill with postfix');
    buttonSheet.setAttributes({
      'postfix-icon': 'placeholder-light',
    });
    buttonSheet.setAssertion(async (component: Locator) => {
      await component.locator('mdc-icon').waitFor();
    });
    await commonMount();
    // tertiary pill with postfix icon
    buttonSheet.setAttributes({
      variant: BUTTON_VARIANTS.TERTIARY,
      'postfix-icon': 'placeholder-light',
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES });
    // disabled pill with postfix icon button
    buttonSheet.setAttributes({ disabled: 'true', 'postfix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // 'soft-disabled' pill with postfix icon button
    buttonSheet.setAttributes({
      'soft-disabled': 'true',
      'postfix-icon': 'placeholder-light',
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    await test.step('matches screenshot of pill-with-postfix-icon-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-button-pill-with-postfix-icon');
    });
  });

  test('mdc-button visual regression icon button', async ({ componentsPage }) => {
    const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
    // icon button
    buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light' });
    await commonMount(true);
    // tertiary icon button
    buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light', variant: BUTTON_VARIANTS.TERTIARY });
    await buttonSheet.mountComponents({ size: ICON_BUTTON_SIZES });
    // disabled icon button
    buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light', disabled: 'true' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // 'soft-disabled' icon button
    buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light', 'soft-disabled': 'true' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    await test.step('matches screenshot of icon-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-button-icon');
    });
  });

  test('mdc-button visual regression active button', async ({ componentsPage }) => {
    const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
    buttonSheet.setChildren('Pill with prefix');
    buttonSheet.setAttributes({
      'prefix-icon': 'placeholder-light',
      active: 'true' });
    buttonSheet.setAssertion(async (component: Locator) => {
      await component.locator('mdc-icon').waitFor();
      const icon = await component.locator('mdc-icon');
      await icon.locator('svg').waitFor();
      const svg = await icon.locator('svg');
      await expect(component).toHaveAttribute('prefix-icon', 'placeholder-filled');
      await expect(icon).toHaveAttribute('name', 'placeholder-filled');
      await expect(svg).toHaveAttribute('data-name', 'placeholder-filled');
    });
    await commonMount();
    await test.step('matches screenshot of active-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-button-active');
    });
  });

  test('mdc-button key pressed and focused events', async ({ componentsPage }) => {
    const children = 'Pill Button';
    await test.step('mdc-button as pill button', async () => {
      const button = await setup({ componentsPage, children });
      await componentsPage.page.evaluate(() => {
        const btn = document.getElementsByTagName('mdc-button')[0];
        btn.addEventListener('click', () => {
          btn.classList.toggle('btn-clicked');
        });
      });
      await componentsPage.page.keyboard.press('Tab');
      await expect(button).toBeFocused();

      await componentsPage.page.keyboard.down('Space');
      await expect(button).toHaveClass('pressed');
      await componentsPage.page.keyboard.up('Space');
      await expect(button).toHaveClass('btn-clicked');
      await expect(button).not.toHaveClass('pressed');

      await componentsPage.page.keyboard.down('Enter');
      await expect(button).toHaveClass('pressed');
      await expect(button).not.toHaveClass('btn-clicked'); // toggled class to remove
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

  test('mdc-button disabled click event', async ({ componentsPage }) => {
    const children = 'Pill Button';
    await test.step('mdc-button as pill button', async () => {
      const mdcButton = await setup({ componentsPage, children });
      await componentsPage.page.evaluate(() => {
        const button = document.getElementsByTagName('mdc-button')[0];
        button.addEventListener('click', () => {
          button.classList.toggle('btn-clicked');
        });
      });

      await componentsPage.setAttributes(mdcButton, { disabled: 'true' });
      await expect(mdcButton).toBeDisabled();
      await componentsPage.removeAttribute(mdcButton, 'disabled');
      await expect(mdcButton).not.toBeDisabled();
    });
  });

  test('mdc-button disabled key pressed and focused events', async ({ componentsPage }) => {
    const children = 'Pill Button';
    await test.step('mdc-button as pill button', async () => {
      const button = await setup({ componentsPage, children });
      await componentsPage.setAttributes(button, { disabled: 'true' });

      await componentsPage.page.evaluate(() => {
        const btn = document.getElementsByTagName('mdc-button')[0];
        btn.addEventListener('click', () => {
          btn.classList.toggle('btn-clicked');
        });
      });
      await componentsPage.page.keyboard.press('Tab');
      await expect(button).not.toBeFocused();

      await componentsPage.page.keyboard.down('Space');
      await expect(button).not.toHaveClass('pressed');
      await componentsPage.page.keyboard.up('Space');
      await expect(button).not.toHaveClass('btn-clicked');

      await componentsPage.page.keyboard.down('Enter');
      await expect(button).not.toHaveClass('pressed');
      await expect(button).not.toHaveClass('btn-clicked');
      await componentsPage.page.keyboard.up('Enter');
    });
  });
});
