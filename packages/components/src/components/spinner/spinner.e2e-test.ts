import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { SPINNER_SIZES, SPINNER_VARIANT } from './spinner.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  variant?: string;
  size?: string;
  ariaLabel?: string;
  inverted?: boolean;
};

const setup = async (options: SetupOptions) => {
  const { componentsPage, ...rest } = options;
  await componentsPage.mount({
    html: `
    <mdc-spinner 
      ${rest.size ? `size="${rest.size}"` : ''}
      ${rest.ariaLabel ? `aria-label="${rest.ariaLabel}"` : ''}
      ${rest.inverted ? 'inverted' : ''}
      ${rest.variant ? `variant="${rest.variant}"` : ''}
    >
    </mdc-spinner>
      `,
    clearDocument: true,
  });
  const spinner = componentsPage.page.locator('mdc-spinner');
  await spinner.waitFor();
  return spinner;
};

test('mdc-spinner', async ({ componentsPage }) => {
  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await test.step('accessibility with default props', async () => {
      await setup({ componentsPage });
      await componentsPage.accessibility.checkForA11yViolations('spinner-default');
    });

    await test.step('accessibility with aria-label passed in', async () => {
      await setup({ componentsPage, ariaLabel: 'test aria label' });
      await componentsPage.accessibility.checkForA11yViolations('spinner-with-aria-label');
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const spinnerSheet = new StickerSheet(componentsPage, 'mdc-spinner');

    await spinnerSheet.createMarkupWithCombination({ size: SPINNER_SIZES });

    spinnerSheet.setAttributes({ variant: SPINNER_VARIANT.BUTTON });
    await spinnerSheet.createMarkupWithCombination({ size: SPINNER_SIZES });

    spinnerSheet.setAttributes({ inverted: '' });
    await spinnerSheet.createMarkupWithCombination(
      { size: SPINNER_SIZES },
      { rowWrapperStyle: 'background-color: var(--mds-color-theme-inverted-background-normal);' },
    );

    spinnerSheet.setAttributes({ variant: SPINNER_VARIANT.BUTTON, inverted: '' });
    await spinnerSheet.createMarkupWithCombination(
      { size: SPINNER_SIZES },
      {
        rowWrapperStyle:
          'background-color: var(--mds-color-theme-inverted-background-normal); ' +
          'color: var(--mds-color-theme-inverted-text-primary-normal);',
      },
    );

    await spinnerSheet.mountStickerSheet();

    await test.step('matches screenshot of spinner element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-spinner', {
        element: spinnerSheet.getWrapperContainer(),
        // As the spinner is animated, we need to disable animations to avoid flakiness in the snapshots, else
        // the snapshots will be taken at a different point in the animation every time.
        animations: 'disabled',
      });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    type Attributes = {
      role?: string;
      'aria-hidden'?: string;
      'aria-label'?: string;
      inverted?: string;
      variant?: 'standalone' | 'button';
      size?: 'small' | 'midsize' | 'large';
    };

    const defaultAttributes: Attributes = {
      role: undefined,
      'aria-hidden': 'true',
      size: 'midsize',
      'aria-label': undefined,
      inverted: undefined,
      variant: 'standalone',
    };

    const checkAttributes = async (spinner: any, expectedAttributes: Attributes = defaultAttributes) => {
      const attributes = {
        ...defaultAttributes,
        ...expectedAttributes,
      };

      await Promise.all(
        Object.entries(attributes).map(async ([key, value]) => {
          if (value !== undefined) {
            await expect(spinner).toHaveAttribute(key, value);
          } else {
            const attribute = await spinner.getAttribute(key);
            expect(attribute).toBeNull();
          }
        }),
      );
    };

    await test.step('attributes should be present on component by default', async () => {
      const spinner = await setup({ componentsPage });

      await checkAttributes(spinner);
    });

    await test.step('attributes should be present on component with aria-label passed in', async () => {
      const spinner = await setup({ componentsPage, ariaLabel: 'test aria label' });

      await checkAttributes(spinner, {
        role: 'img',
        'aria-hidden': 'false',
        'aria-label': 'test aria label',
      });
    });

    await test.step('attributes should be present on component with size passed in', async () => {
      const spinner = await setup({ componentsPage, size: 'large' });

      await checkAttributes(spinner, { size: 'large' });
    });

    await test.step('attributes should be present on component with variant passed in', async () => {
      const spinner = await setup({ componentsPage, variant: 'button' });

      await checkAttributes(spinner, { variant: 'button' });
    });

    await test.step('attributes should be present on component with inverted passed in', async () => {
      const spinner = await setup({ componentsPage, inverted: true });

      await checkAttributes(spinner, { inverted: '' });
    });
  });
});
