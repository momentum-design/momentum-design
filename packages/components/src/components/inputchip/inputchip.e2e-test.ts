import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import type { IconNames } from '../icon/icon.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label: string;
  iconName?: IconNames;
  error?: boolean;
  disabled?: boolean;
  clearAriaLabel: string;
  secondChipForFocus?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    ${restArgs.secondChipForFocus ? '<div id="wrapper">' : ''}
    <mdc-inputchip
      label="${restArgs.label}"
      clear-aria-label="${restArgs.clearAriaLabel}"
      ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
      ${restArgs.error ? 'error' : ''}
      ${restArgs.disabled ? 'disabled' : ''}
    ></mdc-inputchip>
    ${restArgs.secondChipForFocus ? '<mdc-inputchip label="Chip"></mdc-inputchip></div>' : ''}
    `,
    clearDocument: true,
  });

  const element = restArgs.secondChipForFocus
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-inputchip');
  await element.waitFor();

  const firstChip = componentsPage.page.locator('mdc-inputchip').first();
  return firstChip;
};

test('mdc-inputchip', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const inputchipStickerSheet = new StickerSheet(componentsPage, 'mdc-inputchip');
    inputchipStickerSheet.setAttributes({ label: 'Label', 'clear-aria-label': 'Clear' });
    await inputchipStickerSheet.createMarkupWithCombination({});

    inputchipStickerSheet.setAttributes({
      'icon-name': 'placeholder-bold',
      'aria-label': 'Icon Only',
      'clear-aria-label': 'Clear',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});

    inputchipStickerSheet.setAttributes({ label: 'Error', error: '', 'clear-aria-label': 'Clear' });
    await inputchipStickerSheet.createMarkupWithCombination({});

    inputchipStickerSheet.setAttributes({ label: 'Disabled', disabled: '', 'clear-aria-label': 'Clear' });
    await inputchipStickerSheet.createMarkupWithCombination({});

    inputchipStickerSheet.setAttributes({
      label: 'Error Disabled',
      error: '',
      disabled: '',
      'clear-aria-label': 'Clear',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});
    inputchipStickerSheet.setAttributes({
      label: 'Label',
      'clear-aria-label': 'Clear',
      'icon-name': 'placeholder-bold',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});
    inputchipStickerSheet.setAttributes({
      label: 'Error',
      error: '',
      'clear-aria-label': 'Clear',
      'icon-name': 'placeholder-bold',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});
    inputchipStickerSheet.setAttributes({
      label: 'Disabled',
      disabled: '',
      'clear-aria-label': 'Clear',
      'icon-name': 'placeholder-bold',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});
    inputchipStickerSheet.setAttributes({
      label: 'Error Disabled',
      disabled: '',
      error: '',
      'clear-aria-label': 'Clear',
      'icon-name': 'placeholder-bold',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});

    inputchipStickerSheet.setChildren(`<mdc-avatar slot="prefix" src="${imageFixtures.avatar}" initials="AP"></mdc-avatar>`);
    inputchipStickerSheet.setAttributes({
      label: 'Avatar Img',
      'clear-aria-label': 'Clear',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});

    inputchipStickerSheet.setChildren(`<mdc-avatar slot="prefix" src="${imageFixtures.avatar}" initials="AE"></mdc-avatar>`);
    inputchipStickerSheet.setAttributes({
      label: 'Avatar Error Img',
      error: '',
      'clear-aria-label': 'Clear',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});

    inputchipStickerSheet.setChildren(`<mdc-avatar slot="prefix" src="${imageFixtures.avatar}" initials="AD"></mdc-avatar>`);
    inputchipStickerSheet.setAttributes({
      label: 'Avatar Disabled Img',
      disabled: '',
      'clear-aria-label': 'Clear',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});

    inputchipStickerSheet.setChildren(`<mdc-avatar slot="prefix" src="${imageFixtures.avatar}" initials="ED"></mdc-avatar>`);
    inputchipStickerSheet.setAttributes({
      label: 'Avatar Error Disabled Img',
      error: '',
      disabled: '',
      'clear-aria-label': 'Clear',
    });
    await inputchipStickerSheet.createMarkupWithCombination({});

    await inputchipStickerSheet.mountStickerSheet({
      wrapperStyle: 'display: flex; flex-direction: column; gap: 0.5rem',
    });
    const container = inputchipStickerSheet.getWrapperContainer();
    
    // Wait for avatar images to load
    const avatars = await container.locator('mdc-avatar[src]').all();
    await Promise.all(avatars.map(async (avatarComp) => {
      const image = avatarComp.locator('img');
      await image.waitFor();
    }));

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-inputchip', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('inputchip-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const inputchip = await setup({
      componentsPage,
      label: 'Label',
      clearAriaLabel: 'Clear',
      iconName: 'placeholder-bold',
    });
    await test.step('attribute label should be present on component by default', async () => {
      await expect(inputchip).toHaveAttribute('label', 'Label');
    });

    await test.step('attribute error should be set on component', async () => {
      await componentsPage.setAttributes(inputchip, { error: '' });
      await expect(inputchip).toHaveAttribute('error');
      await componentsPage.removeAttribute(inputchip, 'error');
    });

    await test.step('attribute disabled should be set on component', async () => {
      await componentsPage.setAttributes(inputchip, { disabled: '' });
      await expect(inputchip).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(inputchip, 'disabled');
    });

    await test.step('attribute icon-name should be present on component by default', async () => {
      await expect(inputchip).toHaveAttribute('icon-name', 'placeholder-bold');
    });

    await test.step('prefix slot should take precedence over icon-name', async () => {
      await componentsPage.mount({
        html: `
          <mdc-inputchip label="Avatar Img" clear-aria-label="Clear" icon-name="placeholder-bold">
            <mdc-avatar slot="prefix" src="${imageFixtures.avatar}" initials="AP"></mdc-avatar>
          </mdc-inputchip>
        `,
        clearDocument: true,
      });
      
      const inputchipWithAvatar = componentsPage.page.locator('mdc-inputchip');
      const avatar = inputchipWithAvatar.locator('mdc-avatar[slot="prefix"]');
      await avatar.waitFor();
      await expect(avatar).toBeVisible();
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const inputchip = await setup({
      componentsPage,
      label: 'Label',
      clearAriaLabel: 'Clear',
      secondChipForFocus: true,
    });
    const btn = inputchip.locator('mdc-button');

    await componentsPage.page.evaluate(() => {
      const chip = document.getElementsByTagName('mdc-inputchip')[0];
      chip.addEventListener('click', () => {
        chip.classList.toggle('chip-listener');
      });
      (chip as HTMLElement).onclick = () => {
        chip.classList.toggle('chip-onclick');
      };
    });

    await test.step('focus', async () => {
      await test.step('component should be focusable with tab', async () => {
        await componentsPage.actionability.pressTab();
        await expect(btn).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(btn).not.toBeFocused();
      });
    });

    await test.step('mouse/pointer', async () => {
      await test.step('component should fire onclick when clicking chip', async () => {
        await btn.click();
        await expect(inputchip).toHaveClass('chip-listener chip-onclick');
      });
    });

    await test.step('keyboard', async () => {
      await test.step('component should fire onclick when pressing enter', async () => {
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('Enter');
        await expect(inputchip).toHaveClass('chip-listener chip-onclick');
      });
    });
  });
});
