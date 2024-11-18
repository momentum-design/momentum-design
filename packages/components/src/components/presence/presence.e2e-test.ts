import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import { DEFAULTS, TYPE, SIZE } from './presence.constants';
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

const visualTestingSetup = async (args: SetupOptions) => {
  const { componentsPage } = args;
  const presences = (type: string) =>
    Object.values(SIZE)
      .map((size) => `<mdc-presence type="${type}" size="${size}"></mdc-presence>`)
      .join('');

  await componentsPage.mount({
    html: `
    <div class="presence-list">
    ${Object.values(TYPE)
    .map(
      (type) => `
      <div class="presence-row">
        ${presences(type)}
      </div>
    `,
    )
    .join('')}
    </div>
      `,
  });
  const presenceList = componentsPage.page.locator('.presence-list');
  const presence = componentsPage.page.locator('.mdc-presence').last();
  await presence.waitFor();
  return presenceList;
};

const testToRun = async (componentsPage: ComponentsPage) => {
  const visualPresence = await visualTestingSetup({ componentsPage });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of default element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-presence', { element: visualPresence });
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
      await expect(presence).toHaveAttribute('size', DEFAULTS.SIZE);
    });

    await test.step('should fallback to default values when invalid attributes are passed', async () => {
      await componentsPage.setAttributes(presence, {
        type: 'invalid',
        size: 'invalid',
      });
      await expect(presence).toHaveAttribute('type', DEFAULTS.TYPE);
      await expect(presence).toHaveAttribute('size', DEFAULTS.SIZE);
    });

    await test.step('should only accept allowed type and size', async () => {
      await componentsPage.setAttributes(presence, {
        type: TYPE.MEETING,
        size: SIZE.XX_LARGE,
      });

      await expect(presence).toHaveAttribute('type', TYPE.MEETING);
      await expect(presence).toHaveAttribute('size', SIZE.XX_LARGE);
    });
  });
};

test.describe.parallel('mdc-Presence', () => {
  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage);
  });
});
