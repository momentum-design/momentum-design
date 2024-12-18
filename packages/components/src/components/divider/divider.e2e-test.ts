/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import type { DividerOrientation, DividerVariant } from './divider.types';
import { DEFAULTS, DIRECTIONS, DIVIDER_ORIENTATION, DIVIDER_VARIANT } from './divider.constants';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  arrowDirection?: string;
  buttonPosition?: string;
  children?: string;
  dataType?: string
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
     <div style="height: 25rem; margin: 1rem">
       <mdc-divider
        ${restArgs.orientation ? `orientation="${restArgs.orientation}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
        ${restArgs.arrowDirection ? `arrow-direction="${restArgs.arrowDirection}"` : ''}
        ${restArgs.buttonPosition ? `button-position="${restArgs.buttonPosition}"` : ''}
      >${restArgs.children || ''}</mdc-divider>
      </div>
    `,
    clearDocument: true,
  });
  const divider = componentsPage.page.locator('mdc-divider');
  await divider.waitFor();
  return divider;
};

// Tests Divider attributes based on type of children
const attributeTestCases = async (componentsPage: ComponentsPage, args: SetupOptions = { componentsPage }) => {
  const { ...props } = args;
  const divider = await setup({ ...props });
  await componentsPage.setAttributes(divider, { 'data-type': 'mdc-primary-divider' });
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
        await componentsPage.setAttributes(divider, { arrowDirection });
        await expect(divider).toHaveAttribute('arrow-direction', arrowDirection);
      });
    }
    for (const buttonPosition of Object.values(DIRECTIONS)) {
      await test.step(`attribute buttonPosition ${buttonPosition} should be present as expected`, async () => {
        await componentsPage.setAttributes(divider, { buttonPosition });
        await expect(divider).toHaveAttribute('button-position', buttonPosition);
      });
    }
  });
};

test.describe.parallel('mdc-divider', () => {
  // test('Attributes for DividerComponent', async ({ componentsPage }) => {
  //   const NoChildren = '';
  //   const Text = '<mdc-text tagname="h1">Label</mdc-text>';
  //   const Grabber = '<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>';
  //   for (const children of [NoChildren, Text, Grabber]) {
  //     await test.step(`${children} as Divider type`, async () => {
  //       /**
  //        * ATTRIBUTES
  //        */
  //       await test.step('attributes', async () => {
  //         await attributeTestCases(componentsPage);
  //       });
  //     });
  //   }
  // });

  test('VisualRegression and accessibility for DividerComponent', async ({ componentsPage }) => {
    const Text = '<mdc-text tagname="h1">Label</mdc-text>';
    const Grabber = `<mdc-button variant="secondary" role="button" aria-label="divider label" 
    aria-expanded="false" prefix-icon="arrow-down-regular"></mdc-button>`;

    const dividerStickerSheet = new StickerSheet(componentsPage, 'mdc-divider');
    await test.step('Horizontal', async () => {
      // for primary type
      dividerStickerSheet.setAttributes({ orientation: DIVIDER_ORIENTATION.HORIZONTAL,
        'data-type': 'mdc-primary-divider' });
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT });

      // for text type
      dividerStickerSheet.setAttributes({ orientation: DIVIDER_ORIENTATION.HORIZONTAL,
        'data-type': 'mdc-text-divider',
      });
      dividerStickerSheet.setChildren(Text);
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT });

      // for grabber type
      dividerStickerSheet.setAttributes({ orientation: DIVIDER_ORIENTATION.HORIZONTAL,
        'data-type': 'mdc-grabber-divider',
      });
      dividerStickerSheet.setChildren(Grabber);
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT,
        'arrow-direction':
      DIRECTIONS,
        'button-position': DIRECTIONS });

      await dividerStickerSheet.mountStickerSheet();
      await test.step('matches screenshot of element', async () => {
        const container = dividerStickerSheet.getWrapperContainer();
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
      // for primary type
      dividerStickerSheet.setAttributes({ orientation: DIVIDER_ORIENTATION.VERTICAL,
        'data-type': 'mdc-primary-divider' });
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT });

      // for text type
      dividerStickerSheet.setAttributes({ orientation: DIVIDER_ORIENTATION.VERTICAL,
        'data-type': 'mdc-text-divider',
      });
      dividerStickerSheet.setChildren(Text);
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT });

      // for grabber type
      dividerStickerSheet.setAttributes({ orientation: DIVIDER_ORIENTATION.VERTICAL,
        'data-type': 'mdc-grabber-divider',
      });
      dividerStickerSheet.setChildren(Grabber);
      await dividerStickerSheet.createMarkupWithCombination({ variant: DIVIDER_VARIANT,
        'arrow-direction':
      DIRECTIONS,
        'button-position': DIRECTIONS });

      await dividerStickerSheet.mountStickerSheet();
      await test.step('matches screenshot of element', async () => {
        const container = dividerStickerSheet.getWrapperContainer();
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
