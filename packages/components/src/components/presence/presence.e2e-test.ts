import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { DEFAULTS, PRESENCE_TYPE, PRESENCE_SIZE } from './presence.constants';
import type { PresenceType, PresenceSize } from './presence.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  type?: PresenceType;
  size?: PresenceSize;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-presence
      ${restArgs.type ? `type="${restArgs.type}"` : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
    >
    </mdc-presence> 
      `,
    clearDocument: true,
  });
  const presence = componentsPage.page.locator('mdc-presence');
  await presence.waitFor();
  return presence;
};

const testToRun = async (componentsPage: ComponentsPage) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const presenceStickerSheet = new StickerSheet(componentsPage, 'mdc-presence');
    await presenceStickerSheet.createMarkupWithCombination({ type: PRESENCE_TYPE, size: PRESENCE_SIZE });
    await presenceStickerSheet.mountStickerSheet();
    await test.step('matches screenshot of default element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-presence');
    });
  });

  const presence = await setup({ componentsPage });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('presence-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute should be present on component by default', async () => {
      await expect(presence).toHaveAttribute('type', DEFAULTS.TYPE);
      await expect(presence).toHaveAttribute('size', DEFAULTS.SIZE.toString());
    });

    await test.step('should fallback to default values when invalid attributes are passed', async () => {
      await componentsPage.setAttributes(presence, {
        type: 'invalid',
        size: 'invalid',
      });
      await expect(presence).toHaveAttribute('type', DEFAULTS.TYPE);
      await expect(presence).toHaveAttribute('size', DEFAULTS.SIZE.toString());
    });

    await test.step('should only accept allowed type and size', async () => {
      await componentsPage.setAttributes(presence, {
        type: PRESENCE_TYPE.MEETING,
        size: PRESENCE_SIZE[124].toString(),
      });

      await expect(presence).toHaveAttribute('type', PRESENCE_TYPE.MEETING);
      await expect(presence).toHaveAttribute('size', PRESENCE_SIZE[124].toString());
    });
  });
};

test.describe.parallel('mdc-presence', () => {
  test.use({ viewport: { width: 400, height: 800 } });
  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage);
  });
});
