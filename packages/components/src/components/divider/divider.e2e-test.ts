/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import type { Directions, DividerOrientation, DividerVariant } from './divider.types';
import { DEFAULTS, DIRECTIONS, DIVIDER_ORIENTATION, DIVIDER_VARIANT } from './divider.constants';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  'arrow-direction'?: Directions;
  'button-position'?: Directions;
  children?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <div style="height: 25rem; margin: 1rem">
       <mdc-divider
        ${restArgs.orientation ? `orientation="${restArgs.orientation}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
        ${restArgs['arrow-direction'] ? `arrow-direction="${restArgs['arrow-direction']}"` : ''}
        ${restArgs['button-position'] ? `button-position="${restArgs['button-position']}"` : ''}
      >${restArgs.children}
      </mdc-divider>
      </div>
    `,
    clearDocument: true,
  });
  const divider = componentsPage.page.locator('mdc-divider');
  await divider.waitFor();
  return divider;
};

// Tests Divider attributes based on type of children
const attributeTestCases = async (componentsPage: ComponentsPage, children: string) => {
  const divider = await setup({ componentsPage, children });
  await test.step('default and invalid attributes for divider', async () => {
    const assertDefaultAttributes = async () => {
      await expect(divider).toHaveAttribute('orientation', DEFAULTS.ORIENTATION);
      await expect(divider).toHaveAttribute('variant', DEFAULTS.VARIANT);
      await expect(divider).toHaveAttribute('arrow-direction', DEFAULTS.ARROW_DIRECTION);
      await expect(divider).toHaveAttribute('button-position', DEFAULTS.BUTTON_DIRECTION);
    };

    await test.step('attributes should be present on component by default', async () => {
      await assertDefaultAttributes();
    });

    await test.step('should fallback to default values when invalid attributes are passed', async () => {
      await componentsPage.setAttributes(divider, {
        orientation: 'invalid',
        variant: 'invalid',
        'arrow-direction': 'invalid',
        'button-position': 'invalid',
      });
      await assertDefaultAttributes();
    });
  });

  await test.step('DividerAttributes', async () => {
    for (const orientation of Object.values(DIVIDER_ORIENTATION)) {
      await test.step(`attribute orientation ${orientation} should be present as expected`, async () => {
        await componentsPage.setAttributes(divider, { orientation });
        await expect(divider).toHaveAttribute('orientation', orientation);
      });
    }
    for (const variant of Object.values(DIVIDER_VARIANT)) {
      await test.step(`attribute variant ${variant} should be present as expected`, async () => {
        await componentsPage.setAttributes(divider, { variant });
        await expect(divider).toHaveAttribute('variant', variant);
      });
    }
    for (const arrowDirection of Object.values(DIRECTIONS)) {
      await test.step(`attribute arrowDirection ${arrowDirection} should be present as expected`, async () => {
        await componentsPage.setAttributes(divider, { 'arrow-direction': arrowDirection });
        await expect(divider).toHaveAttribute('arrow-direction', arrowDirection);
      });
    }
    for (const buttonPosition of Object.values(DIRECTIONS)) {
      await test.step(`attribute buttonPosition ${buttonPosition} should be present as expected`, async () => {
        await componentsPage.setAttributes(divider, { 'button-position': buttonPosition });
        await expect(divider).toHaveAttribute('button-position', buttonPosition);
      });
    }
  });
};

test.describe.parallel('mdc-divider', () => {
  test.use({ viewport: { width: 800, height: 800 } });

  test('Attributes for DividerComponent', async ({ componentsPage }) => {
    const NoChildren = '';
    const Text = '<mdc-text tagname="h1">Label</mdc-text>';
    const Grabber = '<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>';
    for (const children of [NoChildren, Text, Grabber]) {
      await test.step(`${children} as Divider type`, async () => {
        /**
         * ATTRIBUTES
         */
        await test.step('attributes', async () => {
          await attributeTestCases(componentsPage, children);
        });
      });
    }
  });

  test('VisualRegression and accessibility for DividerComponent', async ({ componentsPage }) => {
    const NoChildren = '';
    const Text = '<mdc-text tagname="h1">Label</mdc-text>';
    const Grabber = `<mdc-button variant="secondary" role="button" aria-label="divider label" 
    aria-expanded="false" prefix-icon="arrow-down-regular"></mdc-button>`;

    const dividerStickerSheet = new StickerSheet(componentsPage, 'mdc-divider');
    await test.step('Horizontal', async () => {
      dividerStickerSheet.setAttributes({ orientation: DIVIDER_ORIENTATION.HORIZONTAL });
      // for primary type
      dividerStickerSheet.setChildren(NoChildren);
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT });

      // for text type
      dividerStickerSheet.setChildren(Text);
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT });

      // for grabber type
      dividerStickerSheet.setChildren(Grabber);
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT,
        'arrow-direction':
      DIRECTIONS,
        'button-position': DIRECTIONS });

      await dividerStickerSheet.mountStickerSheet();
      const container = dividerStickerSheet.getWrapperContainer();
      await container.evaluate((wrapper) => {
        const modifiedWrapper = wrapper;
        modifiedWrapper.style.padding = '1.25rem';

        const rowWrappers = wrapper.querySelectorAll('.componentRowWrapper') as NodeListOf<HTMLElement>;
        Array.from(rowWrappers).forEach((rowWrapper) => {
          const modifiedRowWrapper = rowWrapper;
          modifiedRowWrapper.style.gap = '1.5rem';
          modifiedRowWrapper.style.marginBottom = '3.5rem';
        });
      });

      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-divider-horizontal', { element: container });
      });

      /**
     * ACCESSIBILITY
     */
      await test.step('accessibility', async () => {
        await componentsPage.accessibility.checkForA11yViolations('mdc-divider-horizontal');
      });
    });

    await test.step('Vertical', async () => {
      dividerStickerSheet.setAttributes({ orientation: DIVIDER_ORIENTATION.VERTICAL });
      // for primary type
      dividerStickerSheet.setChildren(NoChildren);
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT });

      // for grabber type
      dividerStickerSheet.setChildren(Grabber);
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT,
        'arrow-direction':
      DIRECTIONS,
        'button-position': DIRECTIONS });

      await dividerStickerSheet.mountStickerSheet();
      const container = dividerStickerSheet.getWrapperContainer();
      await container.evaluate((wrapper) => {
        const modifiedWrapper = wrapper;
        modifiedWrapper.style.display = 'flex';
        modifiedWrapper.style.gap = '3.5rem';
        modifiedWrapper.style.height = '90%';
        modifiedWrapper.style.padding = '1.25rem';

        const rowWrappers = wrapper.querySelectorAll('.componentRowWrapper') as NodeListOf<HTMLElement>;
        Array.from(rowWrappers).forEach((rowWrapper) => {
          const modifiedRowWrapper = rowWrapper;
          modifiedRowWrapper.style.gap = '3.5rem';
          modifiedRowWrapper.style.marginBottom = '3.5rem';
        });
      });

      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-divider-vertical', { element: container });
      });

      /**
     * ACCESSIBILITY
     */
      await test.step('accessibility', async () => {
        await componentsPage.accessibility.checkForA11yViolations('mdc-divider-vertical');
      });
    });
  });
});
