/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { BUTTON_COLORS, BUTTON_VARIANTS, DEFAULTS, ICON_BUTTON_SIZES, PILL_BUTTON_SIZES } from './button.constants';

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
  secondButtonForFocus?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  if (restArgs.children) {
    await componentsPage.mount({
      html: `
      ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
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
      ${restArgs.secondButtonForFocus ? '<mdc-button>Second Button</mdc-button></div>' : ''}
        `,
      clearDocument: true,
    });
  } else {
    await componentsPage.mount({
      html: `
      ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
        <mdc-button
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
      ${restArgs.secondButtonForFocus ? '<mdc-button>Second Button</mdc-button></div>' : ''}
        `,
      clearDocument: true,
    });
  }

  const element = restArgs.secondButtonForFocus
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-button');
  await element.waitFor();

  // always return the first button:
  const firstButton = await componentsPage.page.locator('mdc-button').first();
  return firstButton;
};

/**
 * ATTRIBUTES
 */
const attributeTestCases = async (args: SetupOptions, buttonType: string) => {
  await test.step('default and invalid attributes for button', async () => {
    const { componentsPage, ...props } = args;
    const button = await setup({
      componentsPage,
      ...props,
    });

    // Default values for button
    await test.step(`attributes for ${buttonType} should be present on component by default`, async () => {
      await expect(button).toHaveAttribute('variant', DEFAULTS.VARIANT);
      await expect(button).toHaveAttribute('size', DEFAULTS.SIZE.toString());
      await expect(button).toHaveAttribute('color', DEFAULTS.COLOR);
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
  });

  await test.step('attributes for button', async () => {
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
  });
};

const testForButtonSizes = async (args: SetupOptions, buttonType: string) => {
  await test.step('attribute size for icon button', async () => {
    const { componentsPage, ...props } = args;
    const button = await setup({
      componentsPage,
      ...props,
    });

    if (buttonType === 'icon') {
      const iconSizesToTest = Object.values(ICON_BUTTON_SIZES).filter((size) => size !== ICON_BUTTON_SIZES[20]);
      for (const size of iconSizesToTest) {
        await test.step(`attribute size="${size}" should be present on ${buttonType} button`, async () => {
          await componentsPage.setAttributes(button, { size: `${size}`, 'aria-label': 'icon-button-20' });
          await expect(button).toHaveAttribute('size', `${size}`);
        });
      }

      // Tertiary icon button with size 20 - only this is supported
      await test.step('attribute size="20" should be present on tertiary prefix-icon button', async () => {
        await componentsPage.setAttributes(button, {
          size: `${ICON_BUTTON_SIZES[20]}`,
          variant: BUTTON_VARIANTS.TERTIARY,
          'aria-label': 'icon-button-20',
        });
        await expect(button).toHaveAttribute('size', `${ICON_BUTTON_SIZES[20]}`);
      });
    } else {
      for (const size of Object.values(PILL_BUTTON_SIZES)) {
        await test.step(`attribute size="${size}" should be present on ${buttonType} button`, async () => {
          await componentsPage.setAttributes(button, { size: `${size}` });
          await expect(button).toHaveAttribute('size', `${size}`);
        });
      }
    }
  });
};

const testForCombinations = async (args: SetupOptions, buttonType: string) => {
  await attributeTestCases(args, buttonType);

  await test.step('attribute combination for variant and color', async () => {
    const { componentsPage, ...props } = args;
    const button = await setup({
      componentsPage,
      ...props,
    });

    for (const color of Object.values(BUTTON_COLORS)) {
      await test.step(`attribute color="${color}" should be present on ${buttonType} button`, async () => {
        await componentsPage.setAttributes(button, { color });
        await expect(button).toHaveAttribute('color', color);
      });
    }

    for (const variant of Object.values(BUTTON_VARIANTS)) {
      await test.step(`attribute variant="${variant}" should be present on ${buttonType} button`, async () => {
        await componentsPage.setAttributes(button, { variant });
        await expect(button).toHaveAttribute('variant', variant);
      });
    }
  });
  await testForButtonSizes(args, buttonType);
};

const getStickerSheetDetails = async (componentsPage: ComponentsPage) => {
  const buttonSheet = new StickerSheet(componentsPage, 'mdc-button');
  const commonMount = async (iconButton = false) => {
    const size = iconButton ? { ...PILL_BUTTON_SIZES, 52: 52, 64: 64 } : PILL_BUTTON_SIZES;
    await buttonSheet.createMarkupWithCombination({
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
    await testForCombinations({ children: 'Pill Button', componentsPage }, 'pill');
    await test.step('snapshot of pill button', async () => {
      const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
      // default
      buttonSheet.setChildren('Pill Button');
      await commonMount();
      // tertiary
      buttonSheet.setAttributes({ variant: BUTTON_VARIANTS.TERTIARY });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES });
      // disabled
      buttonSheet.setAttributes({ disabled: '' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // 'soft-disabled'
      buttonSheet.setAttributes({ 'soft-disabled': '' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // active
      buttonSheet.setAttributes({ active: '' });
      const subVariants = { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY };
      await buttonSheet
        .createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: subVariants, color: BUTTON_COLORS });
      // tertiary active
      buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES });
      // active disabled
      buttonSheet.setAttributes({ active: '', disabled: '' });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });
      // active 'soft-disabled'
      buttonSheet.setAttributes({ active: '', 'soft-disabled': '' });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });
      await buttonSheet.mountStickerSheet();

      await test.step('matches screenshot of pill-button element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-button-pill', {
          element: buttonSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility for pill button', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-button-pill');
    });
  });

  test('mdc-button pill with prefix icon button', async ({ componentsPage }) => {
    await testForCombinations(
      { prefixIcon: 'placeholder-light', children: 'Pill with prefix', componentsPage },
      'pill-with-prefix-icon',
    );
    await test.step('snapshot of pill with prefix icon button', async () => {
      const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
      // default
      buttonSheet.setChildren('Pill with prefix');
      buttonSheet.setAttributes({
        'prefix-icon': 'placeholder-light',
      });
      await commonMount();
      // tertiary
      buttonSheet.setAttributes({
        variant: BUTTON_VARIANTS.TERTIARY,
        'prefix-icon': 'placeholder-light',
      });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES });
      // disabled
      buttonSheet.setAttributes({ disabled: '', 'prefix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // 'soft-disabled'
      buttonSheet.setAttributes({
        'soft-disabled': '',
        'prefix-icon': 'placeholder-light',
      });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // active
      buttonSheet.setAttributes({ active: '', 'prefix-icon': 'placeholder-light' });
      const subVariants = { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY };
      await buttonSheet
        .createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: subVariants, color: BUTTON_COLORS });
      // tertiary active
      buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY, 'prefix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES });
      // active disabled
      buttonSheet.setAttributes({ active: '', disabled: '', 'prefix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });
      // active 'soft-disabled'
      buttonSheet.setAttributes({ active: '', 'soft-disabled': '', 'prefix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });
      await buttonSheet.mountStickerSheet();

      await test.step('matches screenshot of pill-with-prefix-icon-button element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-button-pill-with-prefix-icon', {
          element: buttonSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility for pill with prefix icon button', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-button-pill-with-prefix-icon');
    });
  });

  test('mdc-button pill with postfix icon button', async ({ componentsPage }) => {
    await testForCombinations(
      { postfixIcon: 'placeholder-light', children: 'Pill with postfix', componentsPage },
      'pill-with-postfix-icon',
    );
    await test.step('snapshot of pill with postfix icon button', async () => {
      const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
      // default
      buttonSheet.setChildren('Pill with postfix');
      buttonSheet.setAttributes({
        'postfix-icon': 'placeholder-light',
      });
      await commonMount();
      // tertiary
      buttonSheet.setAttributes({
        variant: BUTTON_VARIANTS.TERTIARY,
        'postfix-icon': 'placeholder-light',
      });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES });
      // disabled
      buttonSheet.setAttributes({ disabled: '', 'postfix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // 'soft-disabled'
      buttonSheet.setAttributes({
        'soft-disabled': '',
        'postfix-icon': 'placeholder-light',
      });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // active
      buttonSheet.setAttributes({ active: '', 'postfix-icon': 'placeholder-light' });
      const subVariants = { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY };
      await buttonSheet
        .createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: subVariants, color: BUTTON_COLORS });
      // tertiary active
      buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY, 'postfix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES });
      // active disabled
      buttonSheet.setAttributes({ active: '', disabled: '', 'postfix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });
      // active 'soft-disabled'
      buttonSheet.setAttributes({ active: '', 'soft-disabled': '', 'postfix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });
      await buttonSheet.mountStickerSheet();

      await test.step('matches screenshot of pill-with-postfix-icon-button element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-button-pill-with-postfix-icon', {
          element: buttonSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility for pill with postfix icon button', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-button-pill-with-postfix-icon');
    });
  });

  test('mdc-button icon button', async ({ componentsPage }) => {
    const prefixIcon = 'placeholder-bold';
    await testForCombinations({ prefixIcon, componentsPage }, 'icon');
    await test.step('snapshot of icon button', async () => {
      const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
      const BUTTON_SIZES = { ...PILL_BUTTON_SIZES, 52: 52, 64: 64 };
      // default
      buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light', 'aria-label': 'icon-button' });
      await commonMount(true);
      // tertiary
      buttonSheet.setAttributes({
        'prefix-icon': 'placeholder-light',
        variant: BUTTON_VARIANTS.TERTIARY,
        'aria-label': 'icon-button',
      });
      await buttonSheet.createMarkupWithCombination({ size: ICON_BUTTON_SIZES });
      // disabled
      buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light', disabled: '', 'aria-label': 'icon-button' });
      await buttonSheet.createMarkupWithCombination({ size: BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // 'soft-disabled'
      buttonSheet
        .setAttributes({ 'prefix-icon': 'placeholder-light', 'soft-disabled': '', 'aria-label': 'icon-button' });
      await buttonSheet.createMarkupWithCombination({ size: BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // active
      buttonSheet.setAttributes({ active: '', 'prefix-icon': 'placeholder-light', 'aria-label': 'icon-button' });
      const subVariants = { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY };
      await buttonSheet.createMarkupWithCombination({ size: BUTTON_SIZES, variant: subVariants, color: BUTTON_COLORS });
      // tertiary active
      buttonSheet.setAttributes({
        active: '',
        variant: BUTTON_VARIANTS.TERTIARY,
        'prefix-icon': 'placeholder-light',
        'aria-label': 'icon-button',
      });
      await buttonSheet.createMarkupWithCombination({ size: ICON_BUTTON_SIZES });
      // active disabled
      buttonSheet.setAttributes({
        active: '',
        disabled: '',
        'prefix-icon': 'placeholder-light',
        'aria-label': 'icon-button',
      });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });
      // active 'soft-disabled'
      buttonSheet.setAttributes({
        active: '',
        'soft-disabled': '',
        'prefix-icon': 'placeholder-light',
        'aria-label': 'icon-button',
      });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });
      await buttonSheet.mountStickerSheet();

      await test.step('matches screenshot of icon-button element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-button-icon', {
          element: buttonSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility for pill with prefix icon button', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-button-icon');
    });
  });

  test('mdc-button key pressed and focused events', async ({ componentsPage }) => {
    const button = await setup({ componentsPage, children: 'Pill Button', secondButtonForFocus: true });

    await componentsPage.page.evaluate(() => {
      const btn = document.getElementsByTagName('mdc-button')[0];
      btn.addEventListener('click', () => {
        btn.classList.toggle('btn-listener');
      });
      (btn as HTMLElement).onclick = () => {
        btn.classList.toggle('btn-onclick');
      };

      (btn as HTMLElement).onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const value = e.key === 'Enter' ? 'enter' : 'space';
          btn.textContent = `${value} down`;
        }
      };

      (btn as HTMLElement).onkeyup = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const value = e.key === 'Enter' ? 'enter' : 'space';
          btn.textContent = `${value} up`;
        }
      };
    });

    await test.step('mdc-button focus event for pill button', async () => {
      await componentsPage.page.keyboard.press('Tab');
      await expect(button).toBeFocused();

      await componentsPage.page.keyboard.down('Space');
      await expect(button).toHaveClass('pressed');
      await expect(button).toHaveText('space down');
      await componentsPage.page.keyboard.up('Space');
      await expect(button).toHaveText('space up');
      await expect(button).toHaveClass('btn-listener btn-onclick');
      await expect(button).not.toHaveClass('pressed');

      await componentsPage.page.keyboard.down('Enter');
      await expect(button).toHaveText('enter down');
      await expect(button).toHaveClass('pressed');
      await componentsPage.page.keyboard.up('Enter');
      await expect(button).toHaveText('enter up');
      await expect(button).not.toHaveClass('pressed');
      await expect(button).not.toHaveClass('btn-listener btn-onclick'); // toggled class to remove

      await componentsPage.page.keyboard.press('Tab');
      await expect(button).not.toBeFocused();

      // expect second button to be focused (Tab moves away)
      const bothButtons = await componentsPage.page.locator('mdc-button').all();
      await expect(bothButtons[1]).toBeFocused();
    });

    await test.step('mdc-button click event for pill button', async () => {
      await button.click();
      await expect(button).toHaveClass('btn-listener btn-onclick');
      await button.click();
      await expect(button).not.toHaveClass('btn-listener btn-onclick');
    });

    await test.step('mdc-button click event for disabled pill button', async () => {
      await componentsPage.setAttributes(button, { disabled: '' });
      await expect(button).toHaveAttribute('disabled');
      await expect(button).toBeDisabled();
      await componentsPage.removeAttribute(button, 'disabled');
      await expect(button).not.toBeDisabled();
    });

    await test.step('mdc-button key press event for disabled pill button', async () => {
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
