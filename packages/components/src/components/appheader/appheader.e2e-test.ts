import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  slots: {
    leading?: string;
    center?: string;
    trailing?: string;
  };
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, slots } = args;

  await componentsPage.mount({
    html: `
      <mdc-appheader>
        ${slots.leading ? `<div slot="leading">${slots.leading}</div>` : ''}
        ${slots.center ? `<div slot="center">${slots.center}</div>` : ''}
        ${slots.trailing ? `<div slot="trailing">${slots.trailing}</div>` : ''}
      </mdc-appheader>
    `,
    clearDocument: true,
  });
  const appheader = componentsPage.page.locator('mdc-appheader');
  await appheader.waitFor();
  return appheader;
};

const mockElement = {
  CENTER: '<mdc-text>center</mdc-text>',
  LEADING: '<mdc-brandvisual name="momentum-design-logo-dark-color-horizontal"></mdc-brandvisual>',
  TRAILING: '<mdc-avatar size="32" name="avatar" initials="MD"></mdc-avatar>',
};

const generateChildren = ({ leading, center, trailing }: { leading?: string; center?: string; trailing?: string }) => `
    ${leading ? `<div slot="leading">${leading}</div>` : ''}
    ${center ? `<div slot="center">${center}</div>` : ''}
    ${trailing ? `<div slot="trailing">${trailing}</div>` : ''}
  `;

test('mdc-appheader', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const appheaderStickerSheet = new StickerSheet(componentsPage, 'mdc-appheader');

    appheaderStickerSheet.setChildren(
      generateChildren({
        leading: mockElement.LEADING,
        center: mockElement.CENTER,
        trailing: mockElement.TRAILING,
      }),
    );
    await appheaderStickerSheet.createMarkupWithCombination({}, { createNewRow: true });

    appheaderStickerSheet.setChildren(
      generateChildren({
        center: mockElement.CENTER,
        trailing: mockElement.TRAILING,
      }),
    );
    await appheaderStickerSheet.createMarkupWithCombination({}, { createNewRow: true });

    appheaderStickerSheet.setChildren(
      generateChildren({
        leading: mockElement.LEADING,
        trailing: mockElement.TRAILING,
      }),
    );
    await appheaderStickerSheet.createMarkupWithCombination({}, { createNewRow: true });

    appheaderStickerSheet.setChildren(
      generateChildren({
        leading: mockElement.LEADING,
        center: mockElement.CENTER,
      }),
    );
    await appheaderStickerSheet.createMarkupWithCombination({}, { createNewRow: true });

    await appheaderStickerSheet.mountStickerSheet();
    const container = appheaderStickerSheet.getWrapperContainer();
    await test.step('matches screenshot of header', async () => {
      await expect(container).toBeVisible();
      await componentsPage.visualRegression.takeScreenshot('mdc-appheader', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('appheader-default');
  });

  /**
   * ATTRIBUTES & SLOTS
   */
  await test.step('slots', async () => {
    const appheader = await setup({
      componentsPage,
      slots: {
        leading: mockElement.LEADING,
        center: mockElement.CENTER,
        trailing: mockElement.TRAILING,
      },
    });

    await test.step('should render content when slots passed', async () => {
      await expect(appheader.locator('mdc-brandvisual')).toBeVisible();
      await expect(appheader.locator('mdc-text[tagname="p"]')).toBeVisible();
      await expect(appheader.locator('mdc-avatar')).toBeVisible();
    });

    await test.step('should render correctly without trailing section', async () => {
      const appheaderWithoutTrailing = await setup({
        componentsPage,
        slots: {
          leading: mockElement.LEADING,
          center: mockElement.CENTER,
        },
      });

      await expect(appheader.locator('mdc-brandvisual')).toBeVisible();
      await expect(appheader.locator('mdc-text[tagname="p"]')).toBeVisible();

      // Ensure the trailing section is present
      const trailingSection = appheaderWithoutTrailing.locator('[part="trailing-section"]');
      await expect(trailingSection).toBeVisible();
      const trailingSlot = trailingSection.locator('slot[name="trailing"]');

      // Ensure the slot has NO assigned content
      await expect(trailingSlot.evaluate(slot => (slot as HTMLSlotElement).assignedElements().length)).resolves.toBe(0);
    });
  });
});
