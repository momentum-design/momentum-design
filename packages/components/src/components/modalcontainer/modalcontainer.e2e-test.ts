/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import type { ModalContainerColor, ModalContainerElevation } from './modalcontainer.types';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { COLOR, DEFAULTS, ELEVATION } from './modalcontainer.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  color?: ModalContainerColor;
  elevation?: ModalContainerElevation;
  children?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
       <mdc-modalcontainer
        ${restArgs.color ? `color="${restArgs.color}"` : ''}
        ${restArgs.elevation ? `elevation="${restArgs.elevation}"` : ''}
        role="dialog"
        aria-label="avatar button"
        aria-model="dialog"
      >${restArgs.children}
      </mdc-modalcontainer>
    `,
    clearDocument: true,
  });
  const modalcontainer = componentsPage.page.locator('mdc-modalcontainer');
  await modalcontainer.waitFor();
  return modalcontainer;
};

const attributeTestCases = async (componentsPage: ComponentsPage) => {
  const modalcontainer = await setup({ componentsPage });
  await test.step('default attributes for modalcontainer', async () => {
    await expect(modalcontainer).toHaveAttribute('color', DEFAULTS.COLOR);
    await expect(modalcontainer).toHaveAttribute('elevation', DEFAULTS.ELEVATION.toString());
  });

  await test.step('ModalContainerAttributes', async () => {
    for (const color of Object.values(COLOR)) {
      await test.step(`attribute color ${color} should be present as expected`, async () => {
        await componentsPage.setAttributes(modalcontainer, { color });
        await expect(modalcontainer).toHaveAttribute('color', color);
      });
    }
    for (const elevation of Object.values(ELEVATION)) {
      await test.step(`attribut elevation ${elevation} should be present as expected`, async () => {
        await componentsPage.setAttributes(modalcontainer, { elevation: elevation.toString() });
        await expect(modalcontainer).toHaveAttribute('elevation', elevation.toString());
      });
    }
  });
};

test.describe.parallel('mdc-modalcontainer', () => {
  test.use({ viewport: { width: 800, height: 800 } });

  /**
   * ATTRIBUTES
   */
  test('Attributes for ModalcontainerComponent', async ({ componentsPage }) => {
    await test.step('attributes', async () => {
      await attributeTestCases(componentsPage);
    });
  });

  /**
   * ACCESSIBILITY
   */
  test('accessibility', async ({ componentsPage }) => {
    await componentsPage.accessibility.checkForA11yViolations('modalcontainer-default');
  });

  /**
   * VISUAL REGRESSION
   */
  test('visual-regression', async ({ componentsPage }) => {
    const modalcontainerStickerSheet = new StickerSheet(componentsPage, 'mdc-modalcontainer');
    const text = '<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>';
    await test.step('Elevation and Color', async () => {
      modalcontainerStickerSheet.setChildren(text);
      await modalcontainerStickerSheet.createMarkupWithCombination({ color: COLOR, elevation: ELEVATION });
      await modalcontainerStickerSheet.mountStickerSheet();
      const container = modalcontainerStickerSheet.getWrapperContainer();

      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-modalcontainer', { element: container });
      });
    });
  });
});
