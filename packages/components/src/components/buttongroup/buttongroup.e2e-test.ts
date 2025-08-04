import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { BUTTON_GROUP_ORIENTATION, BUTTON_GROUP_SIZE, BUTTON_GROUP_VARIANT } from './buttongroup.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  variant?: string;
  orientation?: string;
  size?: string;
  compact?: boolean;
  children?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage } = args;

  await componentsPage.mount({
    html: `
        <mdc-buttongroup 
        ${args.variant ? `variant="${args.variant}"` : ''} 
        ${args.orientation ? `orientation="${args.orientation}"` : ''} 
        ${args.size ? `size="${args.size}"` : ''} 
        ${args.compact ? `compact="${args.compact}"` : ''}
        > 
        ${args.children ? `${args.children}` : ''}
        </mdc-buttongroup>
      `,
    clearDocument: true,
  });

  const buttongroup = componentsPage.page.locator('mdc-buttongroup');
  await buttongroup.waitFor();
  return buttongroup;
};

const setupWithPopover = async (args: SetupOptions) => {
  const { componentsPage } = args;

  await componentsPage.mount({
    html: `<div>
      <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
        <mdc-button prefix-icon="camera-on-bold">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-1"></mdc-button>
      </mdc-buttongroup>
      <mdc-popover
        id="popover1"
        triggerID="popover-trigger-1"
        trigger="click"
        placement="bottom"
        show-arrow
        hide-on-escape
      >
        <mdc-text>Settings related to video options</mdc-text>
      </mdc-popover>
    </div>
      `,
    clearDocument: true,
  });

  const buttongroup = componentsPage.page.locator('mdc-buttongroup');
  await buttongroup.waitFor();
  const popover = componentsPage.page.locator('mdc-popover');
  return { buttongroup, popover };
};

test.use({ viewport: { width: 600, height: 800 } });
test('mdc-buttongroup', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const buttonGroupStickerSheet = new StickerSheet(componentsPage, 'mdc-buttongroup', 'margin: 0.25rem');

    // all combinations
    buttonGroupStickerSheet.setChildren(`
      <mdc-button prefix-icon="placeholder-bold" aria-label='icon button'></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label='icon button'></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label='icon button'></mdc-button>`);
    await buttonGroupStickerSheet.createMarkupWithCombination({
      variant: BUTTON_GROUP_VARIANT,
      size: BUTTON_GROUP_SIZE,
      orientation: BUTTON_GROUP_ORIENTATION,
    });

    // vertical group
    buttonGroupStickerSheet.setChildren(`
      <mdc-button prefix-icon="arrow-up-bold" aria-label='arrow up button'></mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label='arrow down button'></mdc-button>`);
    buttonGroupStickerSheet.setAttributes({
      orientation: BUTTON_GROUP_ORIENTATION.VERTICAL,
      variant: BUTTON_GROUP_VARIANT.SECONDARY,
      size: BUTTON_GROUP_SIZE[32],
    });
    await buttonGroupStickerSheet.createMarkupWithCombination({});

    // compact group
    buttonGroupStickerSheet.setChildren(`
      <mdc-button prefix-icon="reply-bold" aria-label='reply button'></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label='reactions button'></mdc-button>
      <mdc-button prefix-icon="alert-active-bold" aria-label='alert active button'></mdc-button>
      <mdc-button prefix-icon="forward-message-bold" aria-label='forward message button'></mdc-button>
      <mdc-button prefix-icon="more-bold" aria-label='more button'></mdc-button>`);
    buttonGroupStickerSheet.setAttributes({
      compact: true,
      variant: BUTTON_GROUP_VARIANT.SECONDARY,
      size: BUTTON_GROUP_SIZE[24],
    });
    await buttonGroupStickerSheet.createMarkupWithCombination({});

    // split button
    buttonGroupStickerSheet.setChildren(`
      <mdc-button prefix-icon="microphone-muted-bold">Unmute</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label='arrow down button'></mdc-button>`);
    buttonGroupStickerSheet.setAttributes({
      variant: BUTTON_GROUP_VARIANT.SECONDARY,
      size: BUTTON_GROUP_SIZE[28],
    });
    await buttonGroupStickerSheet.createMarkupWithCombination({orientation: BUTTON_GROUP_ORIENTATION});

    // split icon button
    buttonGroupStickerSheet.setChildren(`
      <mdc-button prefix-icon="raise-hand-bold" aria-label='raise hand button'></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label='reactions button'></mdc-button>`);
    buttonGroupStickerSheet.setAttributes({
      orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
      variant: BUTTON_GROUP_VARIANT.SECONDARY,
      size: BUTTON_GROUP_SIZE[40],
    });
    await buttonGroupStickerSheet.createMarkupWithCombination({});

    await buttonGroupStickerSheet.mountStickerSheet({ wrapperStyle: 'display: flex; flex-wrap: wrap' });
    const container = buttonGroupStickerSheet.getWrapperContainer();

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-buttongroup', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('buttongroup-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const buttongroup = await setup({
      componentsPage,
      children: `<mdc-button prefix-icon="reply-bold"></mdc-button>
      <mdc-button prefix-icon="reactions-bold"></mdc-button>
      <mdc-button prefix-icon="alert-active-bold"></mdc-button>
      <mdc-button prefix-icon="forward-message-bold"></mdc-button>
      <mdc-button prefix-icon="more-bold"></mdc-button>`,
    });

    await test.step('attribute variant should be present on component by default', async () => {
      await expect(buttongroup).toHaveAttribute('variant', BUTTON_GROUP_VARIANT.PRIMARY);
    });

    await test.step('attribute orientation should be present on component by default', async () => {
      await expect(buttongroup).toHaveAttribute('orientation', BUTTON_GROUP_ORIENTATION.HORIZONTAL);
    });

    await test.step('attribute size should be present on component by default', async () => {
      await expect(buttongroup).toHaveAttribute('size', `${BUTTON_GROUP_SIZE[28]}`);
    });

    await test.step('attribute compact should be present on component when set', async () => {
      await componentsPage.setAttributes(buttongroup, { compact: '' });
      await expect(buttongroup).toHaveAttribute('compact', '');
    });

    await test.step('attribute variant should change the button variant when set', async () => {
      const firstButton = buttongroup.locator('mdc-button').first();
      await expect(firstButton).toHaveAttribute('variant', BUTTON_GROUP_VARIANT.PRIMARY);
      await componentsPage.setAttributes(buttongroup, { variant: BUTTON_GROUP_VARIANT.SECONDARY });
      await expect(buttongroup).toHaveAttribute('variant', BUTTON_GROUP_VARIANT.SECONDARY);
      await expect(firstButton).toHaveAttribute('variant', BUTTON_GROUP_VARIANT.SECONDARY);
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('focus & interactions', async () => {
    await test.step('component should be focusable with tab', async () => {
      const buttongroup = await setup({
        componentsPage,
        children: `<mdc-button prefix-icon="reply-bold"></mdc-button>
      <mdc-button prefix-icon="reactions-bold"></mdc-button>
      <mdc-button prefix-icon="alert-active-bold"></mdc-button>
      <mdc-button prefix-icon="forward-message-bold"></mdc-button>
      <mdc-button prefix-icon="more-bold"></mdc-button>`,
      });

      const buttons = buttongroup.locator('mdc-button');
      await componentsPage.actionability.pressAndCheckFocus('Tab', [
        buttons.first(),
        buttons.nth(1),
        buttons.nth(2),
        buttons.nth(3),
        buttons.last(),
      ]);
      await componentsPage.actionability.pressAndCheckFocus('Shift+Tab', [
        buttons.nth(3),
        buttons.nth(2),
        buttons.nth(1),
        buttons.first(),
      ]);
    });

    await test.step('component should open popover when trigger button within the group is clicked', async () => {
      const { buttongroup, popover } = await setupWithPopover({ componentsPage });
      const triggerButton = buttongroup.locator('mdc-button#popover-trigger-1');
      await expect(popover).toBeHidden();
      await triggerButton.click();
      await popover.waitFor();
      await expect(popover).toBeVisible();
      await componentsPage.page.keyboard.press('Escape');
      await expect(popover).toBeHidden();
    });
  });
});
