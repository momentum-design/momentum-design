/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import type { Route } from '@playwright/test';

import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { KEYS } from '../../utils/keys';

import {
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  DEFAULTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES,
  PRIMARY_BUTTON_COLORS,
  SECONDARY_BUTTON_COLORS,
  TERTIARY_BUTTON_COLORS,
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
  secondButtonForFocus?: boolean;
  inverted?: boolean;
  disableAutoIconFill?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  if (restArgs.children) {
    await componentsPage.mount({
      html: `
      ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
        <mdc-button
          ${restArgs.active ? 'active' : ''}
          ${restArgs.disableAutoIconFill ? 'disable-auto-icon-fill' : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.softDisabled ? 'soft-disabled' : ''}
          ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
          ${restArgs.inverted ? 'inverted' : ''}
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
          ${restArgs.disableAutoIconFill ? 'disable-auto-icon-fill' : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.softDisabled ? 'soft-disabled' : ''}
          ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
          ${restArgs.inverted ? 'inverted' : ''}
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
  const firstButton = componentsPage.page.locator('mdc-button').first();
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
      const iconSizesToTest = Object.values(ICON_BUTTON_SIZES).filter(size => size !== ICON_BUTTON_SIZES[20]);
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

    for (const color of Object.values(PRIMARY_BUTTON_COLORS)) {
      await test.step(`attribute color="${color}" should be present on ${buttonType} button`, async () => {
        await componentsPage.setAttributes(button, { color });
        await expect(button).toHaveAttribute('color', color);
      });
    }

    await test.step(`attribute color="overlay" should only be supported on secondary ${buttonType} button`, async () => {
      await componentsPage.setAttributes(button, {
        variant: BUTTON_VARIANTS.SECONDARY,
        color: BUTTON_COLORS.OVERLAY,
      });
      await expect(button).toHaveAttribute('color', BUTTON_COLORS.OVERLAY);

      for (const variant of [BUTTON_VARIANTS.PRIMARY, BUTTON_VARIANTS.TERTIARY]) {
        await componentsPage.setAttributes(button, { variant, color: BUTTON_COLORS.OVERLAY });
        await expect(button).toHaveAttribute('color', BUTTON_COLORS.DEFAULT);
      }
    });

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
      variant: { primary: BUTTON_VARIANTS.PRIMARY },
      size,
      color: PRIMARY_BUTTON_COLORS,
    });
    await buttonSheet.createMarkupWithCombination({
      variant: { secondary: BUTTON_VARIANTS.SECONDARY },
      size,
      color: SECONDARY_BUTTON_COLORS,
    });
  };
  return { buttonSheet, commonMount };
};

test.describe('mdc-button active icons', () => {
  test('should retain the table icon when its button is active in a button group', async ({ componentsPage }) => {
    await componentsPage.mount({
      html: `<mdc-buttongroup>
        <mdc-button active prefix-icon="table-bold" aria-label="Table view"></mdc-button>
        <mdc-button prefix-icon="placeholder-bold" aria-label="Alternate view"></mdc-button>
      </mdc-buttongroup>`,
      clearDocument: true,
    });
    const buttons = componentsPage.page.locator('mdc-button');
    await expect(buttons.nth(0).locator('mdc-icon svg')).toHaveAttribute('data-name', 'table-bold');
    await expect(buttons.nth(1).locator('mdc-icon svg')).toHaveAttribute('data-name', 'placeholder-bold');
  });

  for (const placement of ['prefix', 'postfix'] as const) {
    const attribute = `${placement}-icon`;
    const setupIcon = placement === 'prefix' ? 'prefixIcon' : 'postfixIcon';

    test(`should restore the original ${placement} icon when the active state changes`, async ({ componentsPage }) => {
      const button = await setup({ componentsPage, [setupIcon]: 'placeholder-bold', children: 'Toggle view' });
      const icon = button.locator(`mdc-icon[part="${attribute}"]`);
      await expect(icon.locator('svg')).toHaveAttribute('data-name', 'placeholder-bold');

      await componentsPage.setAttributes(button, { active: '' });
      await expect(icon.locator('svg')).toHaveAttribute('data-name', 'placeholder-filled');
      await componentsPage.removeAttribute(button, 'active');
      await expect(icon.locator('svg')).toHaveAttribute('data-name', 'placeholder-bold');
    });

    for (const initiallyActive of [false, true]) {
      test(`should retain the ${placement} icon without a filled variant when initially active is ${initiallyActive}`, async ({
        componentsPage,
      }) => {
        const button = await setup({
          componentsPage,
          [setupIcon]: 'table-bold',
          active: initiallyActive,
          children: 'Table view',
        });
        const icon = button.locator(`mdc-icon[part="${attribute}"]`);
        if (!initiallyActive) {
          await expect(icon.locator('svg')).toHaveAttribute('data-name', 'table-bold');
          await componentsPage.setAttributes(button, { active: '' });
        }
        await expect(icon).toHaveAttribute('name', 'table-bold');
        await expect(icon.locator('svg')).toHaveAttribute('data-name', 'table-bold');
        await expect(button).toHaveAttribute('aria-pressed', 'true');

        await componentsPage.setAttributes(button, { [attribute]: 'placeholder-bold' });
        await expect(icon.locator('svg')).toHaveAttribute('data-name', 'placeholder-filled');
        await componentsPage.removeAttribute(button, attribute);
        await expect(icon).toHaveCount(0);
      });
    }

    test(`should preserve the ${placement} icon when automatic filling is disabled`, async ({ componentsPage }) => {
      const requests: string[] = [];
      componentsPage.page.on('request', request => {
        if (request.url().endsWith('.svg')) requests.push(request.url());
      });
      const button = await setup({
        componentsPage,
        [setupIcon]: 'placeholder-bold',
        active: true,
        disableAutoIconFill: true,
        children: 'Toggle view',
      });
      const icon = button.locator(`mdc-icon[part="${attribute}"]`);
      await expect(icon.locator('svg')).toHaveAttribute('data-name', 'placeholder-bold');
      expect(requests.some(url => url.endsWith('/placeholder-filled.svg'))).toBe(false);

      await componentsPage.removeAttribute(button, 'disable-auto-icon-fill');
      await expect(icon.locator('svg')).toHaveAttribute('data-name', 'placeholder-filled');
      await componentsPage.setAttributes(button, { 'disable-auto-icon-fill': '' });
      await expect(icon.locator('svg')).toHaveAttribute('data-name', 'placeholder-bold');
      await componentsPage.setAttributes(button, { [attribute]: 'table-bold' });
      await expect(icon.locator('svg')).toHaveAttribute('data-name', 'table-bold');
    });

    for (const cached of [false, true]) {
      test(`should ignore superseded ${placement} icon errors with caching ${cached ? 'enabled' : 'disabled'}`, async ({
        componentsPage,
      }) => {
        let resolveOldRequest!: (route: Route) => void;
        const oldRequest = new Promise<Route>(resolve => {
          resolveOldRequest = resolve;
        });
        const requests: string[] = [];
        await componentsPage.page.route('**/superseded-icons/*.svg', async route => {
          const name = route.request().url().split('/').pop()!;
          requests.push(name);
          if (name === 'old-filled.svg') {
            resolveOldRequest(route);
            return;
          }
          await route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg"></svg>' });
        });
        await componentsPage.mount({
          html: `<mdc-iconprovider icon-set="custom-icons" url="/superseded-icons"
            ${cached ? 'cache-strategy="in-memory-cache" cache-name="superseded-icons"' : ''}>
            <mdc-button active ${attribute}="old-bold">Toggle view</mdc-button>
          </mdc-iconprovider>`,
          clearDocument: true,
        });
        const oldRoute = await oldRequest;
        const button = componentsPage.page.locator('mdc-button');
        const icon = button.locator(`mdc-icon[part="${attribute}"]`);
        const errorEvent = await componentsPage.waitForEvent(icon, 'error');

        await componentsPage.setAttributes(button, { [attribute]: 'new-bold' });
        await expect(icon.locator('svg')).toHaveAttribute('data-name', 'new-filled');
        await oldRoute.fulfill({ status: 404 });

        await expect(errorEvent).not.toEventEmitted();
        await expect(icon).toHaveAttribute('name', 'new-filled');
        await expect(icon.locator('svg')).toHaveAttribute('data-name', 'new-filled');
        expect(requests).not.toContain('new-bold.svg');
      });
    }

    test(`should report an error without retrying when the original ${placement} icon also fails to load`, async ({
      componentsPage,
    }) => {
      const requests: string[] = [];
      await componentsPage.page.route('**/missing-*.svg', async route => {
        requests.push(route.request().url());
        await route.fulfill({ status: 404 });
      });
      const button = await setup({ componentsPage, [setupIcon]: 'placeholder-bold', children: 'Toggle view' });
      const icon = button.locator(`mdc-icon[part="${attribute}"]`);
      await expect(icon.locator('svg')).toHaveAttribute('data-name', 'placeholder-bold');
      const errorEvent = await componentsPage.waitForEvent(icon, 'error');

      await componentsPage.setAttributes(button, { active: '', [attribute]: 'missing-bold' });
      await expect(errorEvent).toEventEmitted();
      await expect(icon).toHaveAttribute('name', 'missing-bold');
      expect(requests.map(url => url.split('/').pop())).toEqual(['missing-filled.svg', 'missing-bold.svg']);
    });
  }

  test('should preserve custom icon names without requesting filled variants when opted out', async ({
    componentsPage,
  }) => {
    const requests: string[] = [];
    await componentsPage.page.route('**/test-icons/*.svg', async route => {
      requests.push(route.request().url());
      await route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg"></svg>' });
    });
    await componentsPage.mount({
      html: `<mdc-iconprovider icon-set="custom-icons" url="/test-icons">
        <mdc-button active disable-auto-icon-fill prefix-icon="custom-view" postfix-icon="custom-light-symbol-bold">
          Toggle view
        </mdc-button>
      </mdc-iconprovider>`,
      clearDocument: true,
    });
    const button = componentsPage.page.locator('mdc-button');
    const prefix = button.locator('mdc-icon[part="prefix-icon"] svg');
    const postfix = button.locator('mdc-icon[part="postfix-icon"] svg');
    await expect(prefix).toHaveAttribute('data-name', 'custom-view');
    await expect(postfix).toHaveAttribute('data-name', 'custom-light-symbol-bold');
    expect(requests.map(url => url.split('/').pop()).sort()).toEqual([
      'custom-light-symbol-bold.svg',
      'custom-view.svg',
    ]);

    await componentsPage.removeAttribute(button, 'disable-auto-icon-fill');
    await expect(prefix).toHaveAttribute('data-name', 'custom-view-filled');
    await expect(postfix).toHaveAttribute('data-name', 'custom-light-symbol-filled');
  });

  test('should recover each icon independently when a custom filled variant is unavailable', async ({
    componentsPage,
  }) => {
    await componentsPage.page.route('**/test-icons/*.svg', async route => {
      if (route.request().url().endsWith('/custom-view-filled.svg')) {
        await route.fulfill({ status: 404 });
      } else {
        await route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg"></svg>' });
      }
    });
    await componentsPage.mount({
      html: `<mdc-iconprovider icon-set="custom-icons" url="/test-icons">
        <mdc-button active prefix-icon="custom-view" postfix-icon="custom-light-symbol-bold">Toggle view</mdc-button>
      </mdc-iconprovider>`,
      clearDocument: true,
    });
    const button = componentsPage.page.locator('mdc-button');
    await expect(button.locator('mdc-icon[part="prefix-icon"] svg')).toHaveAttribute('data-name', 'custom-view');
    await expect(button.locator('mdc-icon[part="postfix-icon"] svg')).toHaveAttribute(
      'data-name',
      'custom-light-symbol-filled',
    );
  });
});

test.describe.parallel('mdc-button', () => {
  test.use({ viewport: { width: 800, height: 3500 } });

  test('visual regression for mdc-button with long text ellipsis', async ({ componentsPage }) => {
    await componentsPage.mount({
      html: `
        <mdc-button
          id="button-ellipsis"
          style="width: 150px;"
        >
          This is a very long text that should get truncated with ellipsis
        </mdc-button>
        
        <mdc-tooltip 
        triggerid="button-ellipsis"
        show-arrow>This is a very long text that should get truncated with ellipsis</mdc-tooltip>`,
      clearDocument: true,
    });

    await test.step('matches screenshot of mdc-button with long text ellipsis', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-button-long-text-ellipsis', {
        element: componentsPage.page.locator('mdc-button'),
      });
    });
  });

  test('mdc-button pill button', async ({ componentsPage }) => {
    await testForCombinations({ children: 'Pill Button', componentsPage }, 'pill');
    await test.step('snapshot of pill button', async () => {
      const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);
      // default
      buttonSheet.setChildren('Pill Button');
      await commonMount();
      // tertiary
      buttonSheet.setAttributes({ variant: BUTTON_VARIANTS.TERTIARY });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });
      // disabled
      buttonSheet.setAttributes({ disabled: '' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // 'soft-disabled'
      buttonSheet.setAttributes({ 'soft-disabled': '' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // inverted
      buttonSheet.setAttributes({ inverted: '', variant: BUTTON_VARIANTS.PRIMARY, color: BUTTON_COLORS.DEFAULT });
      await buttonSheet.createMarkupWithCombination(
        { size: PILL_BUTTON_SIZES },
        { rowWrapperStyle: 'background: var(--mds-color-theme-inverted-background-normal); padding: 5px 0;' },
      );
      // active
      buttonSheet.setAttributes({ active: '' });
      await commonMount();
      // tertiary active
      buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });
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
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });
      // disabled
      buttonSheet.setAttributes({ disabled: '', 'prefix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // 'soft-disabled'
      buttonSheet.setAttributes({
        'soft-disabled': '',
        'prefix-icon': 'placeholder-light',
      });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // inverted
      buttonSheet.setAttributes({
        inverted: '',
        variant: BUTTON_VARIANTS.PRIMARY,
        color: BUTTON_COLORS.DEFAULT,
        'prefix-icon': 'placeholder-light',
      });
      await buttonSheet.createMarkupWithCombination(
        { size: PILL_BUTTON_SIZES },
        { rowWrapperStyle: 'background: var(--mds-color-theme-inverted-background-normal); padding: 5px 0;' },
      );
      // active
      buttonSheet.setAttributes({ active: '', 'prefix-icon': 'placeholder-light' });
      await commonMount();
      // tertiary active
      buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY, 'prefix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });
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
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });
      // disabled
      buttonSheet.setAttributes({ disabled: '', 'postfix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // 'soft-disabled'
      buttonSheet.setAttributes({
        'soft-disabled': '',
        'postfix-icon': 'placeholder-light',
      });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // inverted
      buttonSheet.setAttributes({
        inverted: '',
        variant: BUTTON_VARIANTS.PRIMARY,
        color: BUTTON_COLORS.DEFAULT,
        'postfix-icon': 'placeholder-light',
      });
      await buttonSheet.createMarkupWithCombination(
        { size: PILL_BUTTON_SIZES },
        { rowWrapperStyle: 'background: var(--mds-color-theme-inverted-background-normal); padding: 5px 0;' },
      );
      // active
      buttonSheet.setAttributes({ active: '', 'postfix-icon': 'placeholder-light' });
      await commonMount();
      // tertiary active
      buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY, 'postfix-icon': 'placeholder-light' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });
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

  test('mdc-button pill with postfix slot button', async ({ componentsPage }) => {
    await testForCombinations(
      {
        children: '<mdc-icon slot="postfix" name="placeholder-bold"></mdc-icon>Pill with postfix slot',
        componentsPage,
      },
      'pill-with-postfix-slot',
    );

    await test.step('accessibility for pill with postfix slot button', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-button-pill-with-postfix-slot');
    });

    await test.step('snapshot of pill with postfix slot button', async () => {
      const { buttonSheet, commonMount } = await getStickerSheetDetails(componentsPage);

      // default
      buttonSheet.setChildren('<mdc-icon slot="postfix" name="placeholder-light"></mdc-icon>Pill with postfix slot');
      await commonMount();

      // tertiary
      buttonSheet.setAttributes({ variant: BUTTON_VARIANTS.TERTIARY });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });

      // disabled
      buttonSheet.setAttributes({ disabled: '' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });

      // soft-disabled
      buttonSheet.setAttributes({ 'soft-disabled': '' });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, variant: BUTTON_VARIANTS });

      // inverted
      buttonSheet.setAttributes({
        inverted: '',
        variant: BUTTON_VARIANTS.PRIMARY,
        color: BUTTON_COLORS.DEFAULT,
      });
      await buttonSheet.createMarkupWithCombination(
        { size: PILL_BUTTON_SIZES },
        { rowWrapperStyle: 'background: var(--mds-color-theme-inverted-background-normal); padding: 5px 0;' },
      );

      // active
      buttonSheet.setAttributes({ active: '' });
      await commonMount();

      // tertiary active
      buttonSheet.setAttributes({ active: '', variant: BUTTON_VARIANTS.TERTIARY });
      await buttonSheet.createMarkupWithCombination({ size: PILL_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });

      // active disabled
      buttonSheet.setAttributes({ active: '', disabled: '' });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });

      // active soft-disabled
      buttonSheet.setAttributes({ active: '', 'soft-disabled': '' });
      await buttonSheet.createMarkupWithCombination({ variant: BUTTON_VARIANTS });

      await buttonSheet.mountStickerSheet();

      await test.step('matches screenshot of pill-with-postfix-slot-button element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-button-pill-with-postfix-slot', {
          element: buttonSheet.getWrapperContainer(),
        });
      });
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
      await buttonSheet.createMarkupWithCombination({ size: ICON_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });
      // disabled
      buttonSheet.setAttributes({ 'prefix-icon': 'placeholder-light', disabled: '', 'aria-label': 'icon-button' });
      await buttonSheet.createMarkupWithCombination({ size: BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // 'soft-disabled'
      buttonSheet.setAttributes({
        'prefix-icon': 'placeholder-light',
        'soft-disabled': '',
        'aria-label': 'icon-button',
      });
      await buttonSheet.createMarkupWithCombination({ size: BUTTON_SIZES, variant: BUTTON_VARIANTS });
      // inverted
      buttonSheet.setAttributes({
        'prefix-icon': 'placeholder-light',
        inverted: '',
        variant: BUTTON_VARIANTS.PRIMARY,
        color: BUTTON_COLORS.DEFAULT,
        'aria-label': 'icon-button',
      });
      await buttonSheet.createMarkupWithCombination(
        { size: PILL_BUTTON_SIZES },
        { rowWrapperStyle: 'background: var(--mds-color-theme-inverted-background-normal); padding: 5px 0;' },
      );
      // active
      buttonSheet.setAttributes({ active: '', 'prefix-icon': 'placeholder-light', 'aria-label': 'icon-button' });
      await commonMount(true);
      // tertiary active
      buttonSheet.setAttributes({
        active: '',
        variant: BUTTON_VARIANTS.TERTIARY,
        'prefix-icon': 'placeholder-light',
        'aria-label': 'icon-button',
      });
      await buttonSheet.createMarkupWithCombination({ size: ICON_BUTTON_SIZES, color: TERTIARY_BUTTON_COLORS });
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

      (btn as HTMLElement).onkeydown = e => {
        if (e.key === 'Enter' || e.key === ' ') {
          const value = e.key === 'Enter' ? 'enter' : 'space';
          btn.textContent = `${value} down`;
        }
      };

      (btn as HTMLElement).onkeyup = e => {
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

  test('mdc-text overflowing is not focusable', async ({ componentsPage }) => {
    const button = await setup({
      componentsPage,
      children: '<mdc-text>This is a very long text that should get truncated with ellipsis</mdc-text>',
      secondButtonForFocus: true,
    });

    await componentsPage.setAttributes(button, { style: 'width: 100px' });

    await componentsPage.page.keyboard.press('Tab');
    await expect(button).toBeFocused();

    await componentsPage.page.keyboard.press('Tab');
    const bothButtons = await componentsPage.page.locator('mdc-button').all();
    await expect(bothButtons[1]).toBeFocused();
  });

  test('soft-disabled button with color should not change background on hover', async ({ componentsPage }) => {
    const variantColorCombinations = [
      { variant: BUTTON_VARIANTS.PRIMARY, colors: Object.values(PRIMARY_BUTTON_COLORS) },
      { variant: BUTTON_VARIANTS.SECONDARY, colors: Object.values(SECONDARY_BUTTON_COLORS) },
    ];

    for (const { variant, colors } of variantColorCombinations) {
      for (const color of colors.filter(value => value !== BUTTON_COLORS.DEFAULT)) {
        await test.step(`color="${color}" variant="${variant}" soft-disabled hover should use disabled style`, async () => {
          const button = await setup({
            componentsPage,
            children: 'Test Button',
            color,
            variant,
            softDisabled: true,
          });

          const bgBeforeHover = await button.evaluate(el => getComputedStyle(el).getPropertyValue('background'));

          await button.hover();

          const bgAfterHover = await button.evaluate(el => getComputedStyle(el).getPropertyValue('background'));

          expect(bgAfterHover).toBe(bgBeforeHover);
        });
      }
    }
  });

  test('interactions', async ({ componentsPage }) => {
    await test.step('spatial navigation', async () => {
      const button = await setup({ componentsPage });
      await componentsPage.wrapElement({ wrapperTagName: 'mdc-spatialnavigationprovider' });
      const { keyboard } = componentsPage.page;

      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(button).toBeFocused();

      const waitForClick = await componentsPage.waitForEvent(button, 'click');
      await keyboard.press(KEYS.ENTER);
      await expect(waitForClick).toEventEmitted();
    });
  });

  test('mdc-button with tooltip stays visible when hovering over prefix/postfix icons', async ({ componentsPage }) => {
    await componentsPage.mount({
      html: `
        <div id="wrapper">
          <mdc-button id="button-with-tooltip">
            Hover me
            <div slot="prefix">
              <mdc-icon name="placeholder-bold" size="small"></mdc-icon>
            </div>
            <div slot="postfix">
              <mdc-brandvisual name="webex-app-icon-color-container" style="width: 1.25rem;"></mdc-brandvisual>
            </div>
          </mdc-button>
          <mdc-tooltip show-arrow triggerid="button-with-tooltip" placement="top">Tooltip text</mdc-tooltip>
        </div>`,
      clearDocument: true,
    });

    const button = componentsPage.page.locator('#button-with-tooltip');
    const tooltip = componentsPage.page.locator('mdc-tooltip');
    const prefixIcon = button.locator('div[slot="prefix"] mdc-icon');
    const postfixIcon = button.locator('div[slot="postfix"] mdc-brandvisual');

    await expect(tooltip).not.toBeVisible();

    await test.step('hovering over the button shows the tooltip', async () => {
      await button.hover();
      await expect(tooltip).toBeVisible();
    });

    await test.step('hovering over the prefix icon keeps the tooltip visible', async () => {
      await prefixIcon.hover();
      await expect(tooltip).toBeVisible();
    });

    await test.step('hovering over the postfix brandvisual keeps the tooltip visible', async () => {
      await postfixIcon.hover();
      await expect(tooltip).toBeVisible();
    });

    await test.step('moving the mouse away hides the tooltip', async () => {
      await componentsPage.page.mouse.move(1000, 1000);
      await expect(tooltip).not.toBeVisible();
    });
  });
});
