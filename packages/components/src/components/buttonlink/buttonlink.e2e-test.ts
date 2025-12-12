/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import {
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  DEFAULTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES,
} from '../button/button.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  disabled?: boolean;
  softDisabled?: boolean;
  prefixIcon?: string;
  postfixIcon?: string;
  size?: number;
  color?: string;
  variant?: string;
  href?: string;
  target?: string;
  rel?: string;
  children?: any;
  dataAriaLabel?: string;
  addPageFooter?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  if (restArgs.children) {
    await componentsPage.mount({
      html: `
        ${restArgs.addPageFooter ? '<div id="wrapper">' : ''}
        <mdc-buttonlink
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.softDisabled ? 'soft-disabled' : ''}
          ${restArgs.prefixIcon ? `prefix-icon="${restArgs.prefixIcon}"` : ''}
          ${restArgs.postfixIcon ? `postfix-icon="${restArgs.postfixIcon}"` : ''}
          ${restArgs.size ? `size="${restArgs.size}"` : ''}
          ${restArgs.color ? `color="${restArgs.color}"` : ''}
          ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
          ${restArgs.href ? `href="${restArgs.href}"` : ''}
          ${restArgs.target ? `target="${restArgs.target}"` : ''}
          ${restArgs.rel ? `rel="${restArgs.rel}"` : ''}
        >
        ${restArgs.children}
        </mdc-buttonlink>
        ${restArgs.addPageFooter ? '<div id="content"><p>Test content</p></div></div>' : ''}
        `,
      clearDocument: true,
    });
  } else {
    await componentsPage.mount({
      html: `
        ${restArgs.addPageFooter ? '<div id="wrapper">' : ''}
        <mdc-buttonlink
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.softDisabled ? 'soft-disabled' : ''}
          ${restArgs.prefixIcon ? `prefix-icon="${restArgs.prefixIcon}"` : ''}
          ${restArgs.postfixIcon ? `postfix-icon="${restArgs.postfixIcon}"` : ''}
          ${restArgs.size ? `size="${restArgs.size}"` : ''}
          ${restArgs.color ? `color="${restArgs.color}"` : ''}
          ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
          ${restArgs.href ? `href="${restArgs.href}"` : ''}
          ${restArgs.target ? `target="${restArgs.target}"` : ''}
          ${restArgs.rel ? `rel="${restArgs.rel}"` : ''}
          ${restArgs.dataAriaLabel ? `data-data-aria-label="${restArgs.dataAriaLabel}"` : ''}
        ></mdc-buttonlink>
        ${restArgs.addPageFooter ? '<div id="content"><p>Test content</p></div></div>' : ''}
        `,
      clearDocument: true,
    });
  }

  const element = restArgs.addPageFooter
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-buttonlink');
  await element.waitFor();

  const buttonlink = componentsPage.page.locator('mdc-buttonlink').first();
  await buttonlink.waitFor();
  return buttonlink;
};

/**
 * ATTRIBUTES
 */
const attributeTestCases = async (args: SetupOptions, buttonlinkType: string) => {
  await test.step('default attributes', async () => {
    const { componentsPage, ...props } = args;
    const buttonlink = await setup({
      componentsPage,
      ...props,
    });

    await test.step(`attributes for ${buttonlinkType} should be present on component by default`, async () => {
      await expect(buttonlink).not.toHaveAttribute('disabled');
      await expect(buttonlink).toHaveAttribute('size', DEFAULTS.SIZE.toString());
      await expect(buttonlink).toHaveAttribute('color', DEFAULTS.COLOR);
      await expect(buttonlink).toHaveAttribute('variant', DEFAULTS.VARIANT);
      await expect(buttonlink).not.toHaveAttribute('href');
      await expect(buttonlink).toHaveAttribute('target', '_self');
    });
  });

  await test.step('attributes for buttonlink', async () => {
    const { componentsPage } = args;
    const buttonlink = await setup({
      componentsPage,
      disabled: true,
      href: '#content',
      target: '_self',
      rel: 'noopener',
      prefixIcon: 'placeholder-light',
      postfixIcon: 'placeholder-light',
    });

    await expect(buttonlink).toHaveAttribute('disabled');
    await expect(buttonlink).toHaveAttribute('prefix-icon', 'placeholder-light');
    await expect(buttonlink).toHaveAttribute('postfix-icon', 'placeholder-light');
    await expect(buttonlink).toHaveAttribute('href', '#content');
    await expect(buttonlink).toHaveAttribute('target', '_self');
    await expect(buttonlink).toHaveAttribute('rel', 'noopener');
  });
};

const testForButtonLinkSizes = async (args: SetupOptions, buttonlinkType: string) => {
  await test.step('attribute size for icon buttonlink', async () => {
    const { componentsPage, ...props } = args;
    const buttonlink = await setup({
      componentsPage,
      ...props,
    });
    if (buttonlinkType === 'icon') {
      const iconSizesToTest = Object.values(ICON_BUTTON_SIZES).filter(size => size !== ICON_BUTTON_SIZES[20]);
      for (const size of iconSizesToTest) {
        await test.step(`attribute size="${size}" should be present on ${buttonlinkType} buttonlink`, async () => {
          await componentsPage.setAttributes(buttonlink, { size: `${size}`, 'data-aria-label': 'icon-button-20' });
          await expect(buttonlink).toHaveAttribute('size', `${size}`);
        });
      }

      // Tertiary icon buttonlink with size 20 - only this is supported
      await test.step('attribute size="20" should be present on tertiary prefix-icon buttonlink', async () => {
        await componentsPage.setAttributes(buttonlink, {
          size: `${ICON_BUTTON_SIZES[20]}`,
          variant: BUTTON_VARIANTS.TERTIARY,
          'data-aria-label': 'icon-button-20',
        });
        await expect(buttonlink).toHaveAttribute('size', `${ICON_BUTTON_SIZES[20]}`);
      });
    } else {
      for (const size of Object.values(PILL_BUTTON_SIZES)) {
        await test.step(`attribute size="${size}" should be present on ${buttonlinkType} buttonlink`, async () => {
          await componentsPage.setAttributes(buttonlink, { size: `${size}` });
          await expect(buttonlink).toHaveAttribute('size', `${size}`);
        });
      }
    }
  });
};

const testForCombinations = async (args: SetupOptions, buttonlinkType: string) => {
  await attributeTestCases(args, buttonlinkType);

  await test.step('attribute combination for variant and color', async () => {
    const { componentsPage, ...props } = args;
    const buttonlink = await setup({
      componentsPage,
      ...props,
    });

    for (const color of Object.values(BUTTON_COLORS)) {
      await test.step(`attribute color="${color}" should be present on ${buttonlinkType} buttonlink`, async () => {
        await componentsPage.setAttributes(buttonlink, { color });
        await expect(buttonlink).toHaveAttribute('color', color);
      });
    }

    for (const variant of Object.values(BUTTON_VARIANTS)) {
      await test.step(`attribute variant="${variant}" should be present on ${buttonlinkType} buttonlink`, async () => {
        await componentsPage.setAttributes(buttonlink, { variant });
        await expect(buttonlink).toHaveAttribute('variant', variant);
      });
    }
  });

  await testForButtonLinkSizes(args, buttonlinkType);
};

/**
 * VISUAL REGRESSION AND ACCESSIBILITY
 */
const getStickerSheetDetails = async (componentsPage: ComponentsPage) => {
  const buttonlinkSheet = new StickerSheet(componentsPage, 'mdc-buttonlink');
  const commonMount = async (iconButton = false) => {
    const size = iconButton ? { ...PILL_BUTTON_SIZES, 52: 52, 64: 64 } : PILL_BUTTON_SIZES;
    await buttonlinkSheet.createMarkupWithCombination({
      variant: { primary: BUTTON_VARIANTS.PRIMARY, secondary: BUTTON_VARIANTS.SECONDARY },
      size,
      color: BUTTON_COLORS,
    });
  };
  return { buttonlinkSheet, commonMount };
};

test.describe.parallel('mdc-buttonlink', () => {
  test.use({ viewport: { width: 800, height: 2700 } });

  test('mdc-buttonlink pill', async ({ componentsPage }) => {
    await testForCombinations({ children: 'Pill Buttonlink', componentsPage }, 'pill');
    await test.step('snapshot of pill', async () => {
      const { buttonlinkSheet, commonMount } = await getStickerSheetDetails(componentsPage);

      buttonlinkSheet.setChildren('Pill Buttonlink');
      buttonlinkSheet.setAttributes({ href: '#' });
      await commonMount();

      buttonlinkSheet.setAttributes({ href: '#', variant: BUTTON_VARIANTS.TERTIARY });
      await buttonlinkSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES });

      buttonlinkSheet.setAttributes({ href: '#', disabled: '' });
      await buttonlinkSheet.createMarkupWithCombination({
        size: PILL_BUTTON_SIZES,
        variant: BUTTON_VARIANTS,
      });

      await buttonlinkSheet.mountStickerSheet();

      await test.step('matches screenshot of pill-buttonlink element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-buttonlink-pill', {
          element: buttonlinkSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility for pill buttonlink', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-buttonlink-pill');
    });
  });

  test('mdc-buttonlink pill with prefix icon', async ({ componentsPage }) => {
    await testForCombinations(
      { prefixIcon: 'placeholder-light', children: 'Pill with prefix icon', componentsPage },
      'pill-with-prefix-icon',
    );
    await test.step('snapshot of pill buttonlink with prefix icon', async () => {
      const { buttonlinkSheet, commonMount } = await getStickerSheetDetails(componentsPage);

      buttonlinkSheet.setChildren('Pill buttonlink with prefix icon');
      buttonlinkSheet.setAttributes({ href: '#', 'prefix-icon': 'placeholder-light' });
      await commonMount();

      buttonlinkSheet.setAttributes({
        href: '#',
        variant: BUTTON_VARIANTS.TERTIARY,
        'prefix-icon': 'placeholder-light',
      });
      await buttonlinkSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES });

      buttonlinkSheet.setAttributes({ href: '#', disabled: '', 'prefix-icon': 'placeholder-light' });
      await buttonlinkSheet.createMarkupWithCombination({
        size: PILL_BUTTON_SIZES,
        variant: BUTTON_VARIANTS,
      });

      await buttonlinkSheet.mountStickerSheet();

      await test.step('matches screenshot of pill-with-prefix-icon element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-buttonlink-pill-with-prefix-icon', {
          element: buttonlinkSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility for pill buttonlink with prefix icon', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-buttonlink-pill-with-prefix-icon');
    });
  });

  test('mdc-buttonlink pill with postfix icon', async ({ componentsPage }) => {
    await testForCombinations(
      { postfixIcon: 'placeholder-light', children: 'Pill with postfix icon', componentsPage },
      'pill-with-postfix-icon',
    );
    await test.step('snapshot of pill buttonlink with postfix icon', async () => {
      const { buttonlinkSheet, commonMount } = await getStickerSheetDetails(componentsPage);

      buttonlinkSheet.setChildren('Pill buttonlink with postfix');
      buttonlinkSheet.setAttributes({ href: '#', 'postfix-icon': 'placeholder-light' });

      await commonMount();

      buttonlinkSheet.setAttributes({
        href: '#',
        variant: BUTTON_VARIANTS.TERTIARY,
        'postfix-icon': 'placeholder-light',
      });
      await buttonlinkSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES });

      buttonlinkSheet.setAttributes({ href: '#', disabled: '', 'postfix-icon': 'placeholder-light' });
      await buttonlinkSheet.createMarkupWithCombination({
        size: PILL_BUTTON_SIZES,
        variant: BUTTON_VARIANTS,
      });

      await buttonlinkSheet.mountStickerSheet();

      await test.step('matches screenshot of pill-with-postfix-icon element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-buttonlink-pill-with-postfix-icon', {
          element: buttonlinkSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility for pill buttonlink with postfix icon', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-buttonlink-pill-with-postfix-icon');
    });
  });

  test('mdc-buttonlink without any children ', async ({ componentsPage }) => {
    const prefixIcon = 'placeholder-bold';
    await testForCombinations({ prefixIcon, componentsPage }, 'icon');
    await test.step('snapshot of icon button', async () => {
      const { buttonlinkSheet, commonMount } = await getStickerSheetDetails(componentsPage);
      const BUTTON_SIZES = { ...PILL_BUTTON_SIZES, 52: 52, 64: 64 };

      buttonlinkSheet.setAttributes({
        href: '#',
        'prefix-icon': 'placeholder-light',
        'data-aria-label': 'icon-button',
      });
      await commonMount(true);

      buttonlinkSheet.setAttributes({
        href: '#',
        'prefix-icon': 'placeholder-light',
        variant: BUTTON_VARIANTS.TERTIARY,
        'data-aria-label': 'icon-button',
      });
      await buttonlinkSheet.createMarkupWithCombination({ size: ICON_BUTTON_SIZES });

      buttonlinkSheet.setAttributes({
        href: '#',
        'prefix-icon': 'placeholder-light',
        disabled: '',
        'data-aria-label': 'icon-button',
      });
      await buttonlinkSheet.createMarkupWithCombination({
        size: BUTTON_SIZES,
        variant: BUTTON_VARIANTS,
      });

      await buttonlinkSheet.mountStickerSheet();

      await test.step('matches screenshot of icon-buttonlink element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-buttonlink-icon', {
          element: buttonlinkSheet.getWrapperContainer(),
        });
      });
    });

    await test.step('accessibility for pill buttonlink with prefix icon', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-buttonlink-icon');
    });
  });

  /**
   * INTERACTIONS
   */
  test('mdc-buttonlink interactions', async ({ componentsPage }) => {
    const buttonlink = await setup({ componentsPage, addPageFooter: true, href: 'https://www.webex.com' });
    let originalURL = '';

    await test.step('does not focus or activate when disabled', async () => {
      await componentsPage.setAttributes(buttonlink, { disabled: '' });
      await componentsPage.actionability.pressTab();
      await expect(buttonlink).not.toBeFocused();
      await componentsPage.removeAttribute(buttonlink, 'disabled');
    });

    await test.step('focus and navigate with Enter', async () => {
      await componentsPage.actionability.pressTab();
      await expect(buttonlink).toBeFocused();
      // Track the current URL before pressing Enter
      originalURL = componentsPage.page.url();
      await componentsPage.page.keyboard.press('Enter');
      await expect(componentsPage.page).toHaveURL('https://www.webex.com');
    });

    await test.step('navigate with mouse click', async () => {
      // Now, navigate back to the original page
      await componentsPage.page.goto(originalURL);
      await setup({ componentsPage, addPageFooter: true, href: 'https://www.webex.com' });

      await buttonlink.click();
      await expect(componentsPage.page).toHaveURL('https://www.webex.com');
    });

    await test.step('focus using JavaScript focus() method', async () => {
      await componentsPage.page.goto(originalURL);
      const focusableButtonLink = await setup({ componentsPage, addPageFooter: true, href: '#content' });

      // Use JavaScript to focus the element
      await focusableButtonLink.evaluate((el: HTMLElement) => el.focus());

      // Verify the element is focused
      await expect(focusableButtonLink).toBeFocused();
    });
  });
});
