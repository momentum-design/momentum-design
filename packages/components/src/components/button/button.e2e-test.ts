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
      disabled: '',
    });
    await expect(button).toHaveAttribute('disabled');
    await componentsPage.removeAttribute(button, 'disabled');
  });

  // Soft Disabled button
  await test.step(`attribute soft-disabled should be present on ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, {
      'soft-disabled': '',
    });
    await expect(button).toHaveAttribute('soft-disabled');
    await componentsPage.removeAttribute(button, 'soft-disabled');
  });

  // Active button
  await test.step(`attribute active should be present on ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, {
      active: '',
    });
    await expect(button).toHaveAttribute('active');
    await componentsPage.removeAttribute(button, 'active');
  });

  // Active Disabled button
  await test.step(`attribute active and disabled should be present on ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, {
      disabled: '',
      active: '',
    });
    await expect(button).toHaveAttribute('disabled');
    await expect(button).toHaveAttribute('active');
    await componentsPage.removeAttribute(button, 'disabled');
    await componentsPage.removeAttribute(button, 'active');
  });

  // Active Soft Disabled button
  await test.step(`attribute active and soft-disabled should be present on ${buttonType} button`, async () => {
    await componentsPage.setAttributes(button, {
      'soft-disabled': '',
      active: '',
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
        await componentsPage.setAttributes(button, { size: `${size}`, 'aria-label': 'icon-button-20' });
        await expect(button).toHaveAttribute('size', `${size}`);
      });
    }
  }

  await test.step('attribute size="20" should be present on tertiary prefix-icon button', async () => {
    await componentsPage.setAttributes(button, {
      size: `${ICON_BUTTON_SIZES[20]}`,
      variant: BUTTON_VARIANTS.TERTIARY,
      'aria-label': 'icon-button-20',
    });
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
  test.use({ viewport: { width: 800, height: 2700 } });

  test('mdc-button pill button', async ({ componentsPage }) => {
    const children = 'Pill Button';
    await test.step('mdc-button as pill button', async () => {
      await testForCombinations({ children, componentsPage }, 'pill');
    });

    const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
    // default
    buttonSheet.setChildren(children);
    await commonMount();
    // tertiary
    buttonSheet.setAttributes({ variant: BUTTON_VARIANTS.TERTIARY });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES });
    // disabled
    buttonSheet.setAttributes({ disabled: '' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // 'soft-disabled'
    buttonSheet.setAttributes({ 'soft-disabled': '' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // active
    buttonSheet.setAttributes({ active: '' });
    const subVariants = { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY };
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: subVariants, color: BUTTON_COLORS });
    // tertiary active
    buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES });
    // active disabled
    buttonSheet.setAttributes({ active: '', disabled: '' });
    await buttonSheet.mountComponents({ variant: BUTTON_VARIANTS });
    // active 'soft-disabled'
    buttonSheet.setAttributes({ active: '', 'soft-disabled': '' });
    await buttonSheet.mountComponents({ variant: BUTTON_VARIANTS });

    await test.step('matches screenshot of pill-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot(
        'mdc-button-pill',
        { element: buttonSheet.getWrapperContainer() },
      );
    });
    await test.step('accessibility for pill button', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-button-pill');
    });
  });

  test('mdc-button pill with prefix icon button', async ({ componentsPage }) => {
    const children = 'Pill with Prefix Icon';
    const prefixIcon = 'placeholder-bold';
    await testForCombinations({ prefixIcon, children, componentsPage }, 'pill-with-prefix-icon');

    const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
    // default
    buttonSheet.setChildren('Pill with prefix');
    buttonSheet.setAttributes({
      'prefix-icon': 'placeholder-light',
    });
    buttonSheet.setAssertion(async (component: Locator) => {
      const svg = component.locator('mdc-icon[part=\'prefix-icon\'] svg[part=\'icon\']');
      await svg.waitFor();
      await expect(svg).toHaveAttribute('data-name', 'placeholder-light');
    });
    await commonMount();
    // tertiary
    buttonSheet.setAttributes({
      variant: BUTTON_VARIANTS.TERTIARY,
      'prefix-icon': 'placeholder-light',
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES });
    // disabled
    buttonSheet.setAttributes({ disabled: '', 'prefix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // 'soft-disabled'
    buttonSheet.setAttributes({
      'soft-disabled': '',
      'prefix-icon': 'placeholder-light',
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // active
    buttonSheet.setAttributes({ active: '', 'prefix-icon': 'placeholder-light' });
    const subVariants = { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY };
    buttonSheet.setAssertion(async (component: Locator) => {
      const svg = component.locator('mdc-icon[part=\'prefix-icon\'] svg[part=\'icon\']');
      await svg.waitFor();
      await expect(svg).toHaveAttribute('data-name', 'placeholder-filled');
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: subVariants, color: BUTTON_COLORS });
    // tertiary active
    buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY, 'prefix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES });
    // active disabled
    buttonSheet.setAttributes({ active: '', disabled: '', 'prefix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ variant: BUTTON_VARIANTS });
    // active 'soft-disabled'
    buttonSheet.setAttributes({ active: '', 'soft-disabled': '', 'prefix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ variant: BUTTON_VARIANTS });

    await test.step('matches screenshot of pill-with-prefix-icon-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot(
        'mdc-button-pill-with-prefix-icon',
        { element: buttonSheet.getWrapperContainer() },
      );
    });
    await test.step('accessibility for pill with prefix icon button', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-button-pill-with-prefix-icon');
    });
  });

  test('mdc-button pill with postfix icon button', async ({ componentsPage }) => {
    const children = 'Pill with Postfix Icon';
    const postfixIcon = 'placeholder-light';
    await testForCombinations({ postfixIcon, children, componentsPage }, 'pill-with-postfix-icon');

    const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
    // default
    buttonSheet.setChildren('Pill with postfix');
    buttonSheet.setAttributes({
      'postfix-icon': 'placeholder-light',
    });
    buttonSheet.setAssertion(async (component: Locator) => {
      const svg = component.locator('mdc-icon[part=\'postfix-icon\'] svg[part=\'icon\']');
      await svg.waitFor();
      await expect(svg).toHaveAttribute('data-name', 'placeholder-light');
    });
    await commonMount();
    // tertiary
    buttonSheet.setAttributes({
      variant: BUTTON_VARIANTS.TERTIARY,
      'postfix-icon': 'placeholder-light',
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES });
    // disabled
    buttonSheet.setAttributes({ disabled: '', 'postfix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // 'soft-disabled'
    buttonSheet.setAttributes({
      'soft-disabled': '',
      'postfix-icon': 'placeholder-light',
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // active
    buttonSheet.setAttributes({ active: '', 'postfix-icon': 'placeholder-light' });
    const subVariants = { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY };
    buttonSheet.setAssertion(async (component: Locator) => {
      const svg = component.locator('mdc-icon[part=\'postfix-icon\'] svg[part=\'icon\']');
      await svg.waitFor();
      await expect(svg).toHaveAttribute('data-name', 'placeholder-filled');
    });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES, variant: subVariants, color: BUTTON_COLORS });
    // tertiary active
    buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY, 'postfix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ size: PILL_BUTTON_SIZES });
    // active disabled
    buttonSheet.setAttributes({ active: '', disabled: '', 'postfix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ variant: BUTTON_VARIANTS });
    // active 'soft-disabled'
    buttonSheet.setAttributes({ active: '', 'soft-disabled': '', 'postfix-icon': 'placeholder-light' });
    await buttonSheet.mountComponents({ variant: BUTTON_VARIANTS });

    await test.step('matches screenshot of pill-with-postfix-icon-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot(
        'mdc-button-pill-with-postfix-icon',
        { element: buttonSheet.getWrapperContainer() },
      );
    });
    await test.step('accessibility for pill with postfix icon button', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-button-pill-with-postfix-icon');
    });
  });

  test('mdc-button icon button', async ({ componentsPage }) => {
    const prefixIcon = 'placeholder-bold';
    await testForCombinations({ prefixIcon, componentsPage }, 'icon');
    await testForIconButtonSizes({ prefixIcon, componentsPage }, 'icon');

    const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
    const BUTTON_SIZES = { ...PILL_BUTTON_SIZES, 52: 52, 64: 64 };
    // default
    buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light', 'aria-label': 'icon-button' });
    buttonSheet.setAssertion(async (component: Locator) => {
      const svg = component.locator('mdc-icon[part=\'prefix-icon\'] svg[part=\'icon\']');
      await svg.waitFor();
      await expect(svg).toHaveAttribute('data-name', 'placeholder-light');
    });
    await commonMount(true);
    // tertiary
    buttonSheet.setAttributes({
      'prefix-icon': 'placeholder-light',
      variant: BUTTON_VARIANTS.TERTIARY,
      'aria-label': 'icon-button',
    });
    await buttonSheet.mountComponents({ size: ICON_BUTTON_SIZES });
    // disabled
    buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light', disabled: '', 'aria-label': 'icon-button' });
    await buttonSheet.mountComponents({ size: BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // 'soft-disabled'
    buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light', 'soft-disabled': '', 'aria-label': 'icon-button' });
    await buttonSheet.mountComponents({ size: BUTTON_SIZES, variant: BUTTON_VARIANTS });
    // active
    buttonSheet.setAttributes({ active: '', 'prefix-icon': 'placeholder-light', 'aria-label': 'icon-button' });
    const subVariants = { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY };
    buttonSheet.setAssertion(async (component: Locator) => {
      const svg = component.locator('mdc-icon[part=\'prefix-icon\'] svg[part=\'icon\']');
      await svg.waitFor();
      await expect(svg).toHaveAttribute('data-name', 'placeholder-filled');
    });
    await buttonSheet.mountComponents({ size: BUTTON_SIZES, variant: subVariants, color: BUTTON_COLORS });
    // tertiary active
    buttonSheet.setAttributes({
      active: '',
      variant: BUTTON_VARIANTS.TERTIARY,
      'prefix-icon': 'placeholder-light',
      'aria-label': 'icon-button',
    });
    await buttonSheet.mountComponents({ size: ICON_BUTTON_SIZES });
    // active disabled
    buttonSheet.setAttributes({
      active: '',
      disabled: '',
      'prefix-icon': 'placeholder-light',
      'aria-label': 'icon-button',
    });
    await buttonSheet.mountComponents({ variant: BUTTON_VARIANTS });
    // active 'soft-disabled'
    buttonSheet.setAttributes({
      active: '',
      'soft-disabled': '',
      'prefix-icon': 'placeholder-light',
      'aria-label': 'icon-button',
    });
    await buttonSheet.mountComponents({ variant: BUTTON_VARIANTS });

    await test.step('matches screenshot of icon-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot(
        'mdc-button-icon',
        { element: buttonSheet.getWrapperContainer() },
      );
    });
    await test.step('accessibility for pill with prefix icon button', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-button-icon');
    });
  });

  test('mdc-button key pressed and focused events', async ({ componentsPage }) => {
    const children = 'Pill Button';
    const button = await setup({ componentsPage, children });

    await componentsPage.page.evaluate(() => {
      const btn = document.getElementsByTagName('mdc-button')[0];
      btn.addEventListener('click', () => {
        btn.classList.toggle('btn-listener');
      });
      (btn as HTMLElement).onclick = () => {
        btn.classList.toggle('btn-onclick');
      };
    });

    await test.step('mdc-button focus event for pill button', async () => {
      await componentsPage.page.keyboard.press('Tab');
      await expect(button).toBeFocused();

      await componentsPage.page.keyboard.down('Space');
      await expect(button).toHaveClass('pressed');
      await componentsPage.page.keyboard.up('Space');
      await expect(button).toHaveClass('btn-listener btn-onclick');
      await expect(button).not.toHaveClass('pressed');

      await componentsPage.page.keyboard.down('Enter');
      await expect(button).toHaveClass('pressed');
      await componentsPage.page.keyboard.up('Enter');
      await expect(button).not.toHaveClass('pressed');
      await expect(button).not.toHaveClass('btn-listener btn-onclick'); // toggled class to remove

      await componentsPage.page.keyboard.press('Tab');
      await expect(button).not.toBeFocused();
    });

    await test.step('mdc-button click event for pill button', async () => {
      await button.click();
      await expect(button).toHaveClass('btn-listener btn-onclick');
      await button.click();
      await expect(button).not.toHaveClass('btn-listener btn-onclick');
    });

    await test.step('mdc-button click event for disbaled pill button', async () => {
      await componentsPage.setAttributes(button, { disabled: '' });
      await expect(button).toHaveAttribute('disabled');
      await expect(button).toBeDisabled();
      await componentsPage.removeAttribute(button, 'disabled');
      await expect(button).not.toBeDisabled();
    });

    await test.step('mdc-button key press event for pill button', async () => {
      await componentsPage.setAttributes(button, { disabled: '' });

      await componentsPage.page.keyboard.press('Tab');
      await expect(button).not.toBeFocused();

      await componentsPage.page.keyboard.down('Space');
      await expect(button).not.toHaveClass('pressed');
      await componentsPage.page.keyboard.up('Space');
      await expect(button).not.toHaveClass('btn-listener btn-onclick');

      await componentsPage.page.keyboard.down('Enter');
      await expect(button).not.toHaveClass('pressed');
      await expect(button).not.toHaveClass('btn-listener btn-onclick');
      await componentsPage.page.keyboard.up('Enter');
    });
  });
});
