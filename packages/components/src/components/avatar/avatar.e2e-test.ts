/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import { TYPE as PRESENCE_TYPE } from '../presence/presence.constants';
import { AVATAR_SIZE, DEFAULTS } from './avatar.constants';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { AvatarSize } from './avatar.types';
import type { IconNames } from '../icon/icon.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  counter?: number;
  iconName?: IconNames;
  initials?: string;
  size?: AvatarSize;
  src?: string;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-avatar
        ${restArgs.counter ? `counter="${restArgs.counter}"` : ''}
        ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
        ${restArgs.initials ? `initials="${restArgs.initials}"` : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
        ${restArgs.src ? `src="${restArgs.src}"` : ''}
      >
      </mdc-avatar>
    `,
    clearDocument: true,
  });
  const avatar = componentsPage.page.locator('mdc-avatar');
  await avatar.waitFor();
  return avatar;
};

const testToRun = async (componentsPage: ComponentsPage) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const avatarStickerSheet = new StickerSheet(componentsPage, 'mdc-avatar');
    const src = 'https://picsum.photos/id/63/256';

    await test.step('should add initials based avatar on sticker sheet', async () => {
      avatarStickerSheet.setAttributes({ initials: 'XS' });
      await avatarStickerSheet.createMarkupWithCombination({
        size: AVATAR_SIZE,
      });
    });

    await test.step('should add counter based avatar on sticker sheet', async () => {
      avatarStickerSheet.setAttributes({ counter: 100 });
      await avatarStickerSheet.createMarkupWithCombination({
        size: AVATAR_SIZE,
      });
    });

    await test.step('should add icon name based avatar on sticker sheet', async () => {
      const iconName = 'placeholder-regular';
      avatarStickerSheet.setAttributes({ 'icon-name': iconName });
      await avatarStickerSheet.createMarkupWithCombination({
        size: AVATAR_SIZE,
      });
    });

    await test.step('should add image based avatar on sticker sheet', async () => {
      avatarStickerSheet.setAttributes({ src });
      await avatarStickerSheet.createMarkupWithCombination({
        size: AVATAR_SIZE,
      });
    });

    await test.step('should add presence based avatar on sticker sheet', async () => {
      const presenceType = PRESENCE_TYPE.ACTIVE;
      avatarStickerSheet.setAttributes({ presence: presenceType });
      await avatarStickerSheet.createMarkupWithCombination({
        size: AVATAR_SIZE,
      });
    });
    await avatarStickerSheet.mountStickerSheet();
    const container = avatarStickerSheet.getWrapperContainer();
    const avatars = await container.locator('mdc-avatar[src]').all();
    for (const avatarComp of avatars) {
      const image = avatarComp.locator('img');
      await image.waitFor();
      await expect(avatarComp).toHaveAttribute('src', src);
      await expect(image).toHaveAttribute('src', src);
    }

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-avatar', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('avatar-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const avatar = await setup({ componentsPage });

    await test.step('should fallback to default icon and size to 32 when no attributes are passed', async () => {
      await componentsPage.setAttributes(avatar, {});
      const icon = await componentsPage.page.locator('mdc-icon');
      await icon.waitFor();
      await expect(icon).toHaveAttribute('name', DEFAULTS.ICON_NAME);
      await expect(avatar).toHaveAttribute('size', DEFAULTS.SIZE.toString());
    });

    await test.step('presence should not be displayed when the avatar type is counter', async () => {
      await componentsPage.setAttributes(avatar, {
        counter: '10',
        presence: PRESENCE_TYPE.ACTIVE,
      });
      const presence = await componentsPage.page.locator('mdc-presence');
      await expect(presence).not.toBeAttached();
    });

    await test.step('counter should be set to 99+ when more than 99 is passed', async () => {
      await componentsPage.setAttributes(avatar, {
        counter: '100',
      });
      const mdcTextElement = await componentsPage.page.locator('mdc-text');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe('99+');
    });

    await test.step('counter should be set to 0 when a negative value is passed', async () => {
      await componentsPage.setAttributes(avatar, {
        counter: '-12',
      });
      const mdcTextElement = await componentsPage.page.locator('mdc-text');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe('0');
    });

    await test.step('should limit the initials to two characters', async () => {
      await componentsPage.setAttributes(avatar, {
        initials: 'abcdef',
      });
      const mdcTextElement = await componentsPage.page.locator('mdc-text');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toHaveLength(2);
      expect(textContent?.trim()).toBe('AB');
    });

    await test.step('presence should be displayed when it is set', async () => {
      await componentsPage.setAttributes(avatar, {
        presence: PRESENCE_TYPE.ACTIVE,
      });
      await expect(avatar).toHaveAttribute('presence', PRESENCE_TYPE.ACTIVE);
    });

    await test.step('should display loading indicator when isTyping is set', async () => {
      await componentsPage.setAttributes(avatar, {
        'is-typing': 'true',
      });
      const loadingIndicator = await componentsPage.page.locator('div.loading__wrapper');
      await loadingIndicator.waitFor();
      await expect(loadingIndicator).toBeDefined();
      await expect(avatar).toHaveAttribute('is-typing', 'true');
    });

    await test.step('should only accept allowed size', async () => {
      await componentsPage.setAttributes(avatar, {
        size: AVATAR_SIZE[88].toString(),
      });
      await expect(avatar).toHaveAttribute('size', AVATAR_SIZE[88].toString());
    });
  });
};

test.describe.parallel('mdc-avatar', () => {
  test.use({ viewport: { width: 600, height: 800 } });

  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage);
  });
});
