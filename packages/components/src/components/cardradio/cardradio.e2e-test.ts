/* eslint-disable no-restricted-syntax */

/* eslint-disable no-await-in-loop */
import { expect } from '@playwright/test';

import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { VARIANTS } from '../card/card.constants';

interface CardRadioArgs {
  name?: string;
  cardTitle?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: string;
  orientation?: string;
  titleTagName?: string;
  subtitleTagName?: string;
  iconName?: string;
  disabled?: boolean;
  tabindex?: number;
  checked?: boolean;
  children?: string;
}

interface SetupOptions extends CardRadioArgs {
  componentsPage: ComponentsPage;
  isGroup?: boolean;
}

const renderCardRadio = (restArgs: CardRadioArgs) => `
    <mdc-cardradio
      ${restArgs.name ? `name="${restArgs.name}"` : ''}
      ${restArgs.cardTitle ? `card-title="${restArgs.cardTitle}"` : ''}
      ${restArgs.subtitle ? `subtitle="${restArgs.subtitle}"` : ''}
      ${restArgs.imageSrc ? `image-src="${restArgs.imageSrc}"` : ''}
      ${restArgs.imageAlt ? `image-alt="${restArgs.imageAlt}"` : ''}
      ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
      ${restArgs.orientation ? `orientation="${restArgs.orientation}"` : ''}
      ${restArgs.titleTagName ? `title-tag-name="${restArgs.titleTagName}"` : ''}
      ${restArgs.subtitleTagName ? `subtitle-tag-name="${restArgs.subtitleTagName}"` : ''}
      ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
      ${restArgs.disabled ? 'disabled' : ''}
      ${restArgs.tabindex ? `tabindex="${restArgs.tabindex}"` : ''}
      ${restArgs.checked ? 'checked' : ''}
    >
    ${restArgs.children}
    </mdc-cardradio>
    `;

const defaultChildren = `<mdc-text slot='body' 
    type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mdc-text>`;

const setup = async (args: SetupOptions) => {
  const { componentsPage, isGroup, ...restArgs } = args;
  await componentsPage.mount({
    html: isGroup
      ? `
    <mdc-radiogroup>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
    ${Array.from({ length: 3 }, (_, i) =>
      renderCardRadio({ ...restArgs, cardTitle: `cardradio-${i}`, name: 'cardradio' }),
    ).join('')}
    </div>
    </mdc-radiogroup>`
      : renderCardRadio(restArgs),
    clearDocument: true,
  });

  const cardradio = componentsPage.page.locator('mdc-cardradio').first();
  await cardradio.waitFor();

  if (isGroup) {
    return componentsPage.page.locator('mdc-radiogroup');
  }

  return cardradio;
};

test.describe.parallel('mdc-cardradio', () => {
  test('attributes and interactions', async ({ componentsPage }) => {
    const cardradio = await setup({
      componentsPage,
      name: 'cardradio',
      cardTitle: 'Card Title',
      subtitle: 'Card Subtitle',
    });

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      await test.step('attribute X should be present on component by default', async () => {
        await expect(cardradio).toHaveAttribute('variant', 'border');
        await expect(cardradio).toHaveAttribute('orientation', 'vertical');
        await expect(cardradio).toHaveAttribute('title-tag-name', 'span');
        await expect(cardradio).toHaveAttribute('subtitle-tag-name', 'span');
      });

      await test.step('attributes should be present on component when provided', async () => {
        await expect(cardradio).toHaveAttribute('name', 'cardradio');
        await expect(cardradio).toHaveAttribute('card-title', 'Card Title');
        await expect(cardradio).toHaveAttribute('subtitle', 'Card Subtitle');
      });

      await test.step('attribute disabled should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardradio, { disabled: '' });
        await expect(cardradio).toHaveAttribute('disabled', '');
        await expect(cardradio).toBeDisabled();
        await componentsPage.removeAttribute(cardradio, 'disabled');
        await expect(cardradio).not.toBeDisabled();
      });

      await test.step('attribute checked should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardradio, { checked: '' });
        await expect(cardradio).toHaveAttribute('checked', '');
        await expect(cardradio).toBeChecked();
        await componentsPage.removeAttribute(cardradio, 'checked');
        await expect(cardradio).not.toBeChecked();
      });

      await test.step('attribute icon-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardradio, { 'icon-name': 'placeholder-bold' });
        await expect(cardradio).toHaveAttribute('icon-name', 'placeholder-bold');
        await componentsPage.removeAttribute(cardradio, 'icon-name');
      });

      await test.step('attribute image-src should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardradio, { 'image-src': imageFixtures.card });
        await expect(cardradio).toHaveAttribute('image-src', imageFixtures.card);
        await componentsPage.removeAttribute(cardradio, 'image-src');
      });

      await test.step('attribute image-alt should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardradio, { 'image-alt': 'Image Alt' });
        await expect(cardradio).toHaveAttribute('image-alt', 'Image Alt');
        await componentsPage.removeAttribute(cardradio, 'image-alt');
      });

      await test.step('attribute aria-label should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardradio, { 'aria-label': 'Card Radio' });
        await expect(cardradio).toHaveAttribute('aria-label', 'Card Radio');
        await componentsPage.removeAttribute(cardradio, 'aria-label');
      });

      await test.step('attribute title-tag-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardradio, { 'title-tag-name': 'h1' });
        await expect(cardradio).toHaveAttribute('title-tag-name', 'h1');
        await componentsPage.removeAttribute(cardradio, 'title-tag-name');
      });

      await test.step('attribute subtitle-tag-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardradio, { 'subtitle-tag-name': 'h2' });
        await expect(cardradio).toHaveAttribute('subtitle-tag-name', 'h2');
        await componentsPage.removeAttribute(cardradio, 'subtitle-tag-name');
      });

      await test.step('attribute tabindex should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardradio, { tabindex: '0' });
        await expect(cardradio).toHaveAttribute('tabindex', '0');
        await componentsPage.removeAttribute(cardradio, 'tabindex');
      });
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      const setupArgs = {
        componentsPage,
        cardTitle: 'Card Title',
        subtitle: 'Card Subtitle',
        name: 'card-radio',
      };
      await test.step('mouse/pointer', async () => {
        await test.step('component should be checked when clicked using mouse', async () => {
          await setup(setupArgs);
          await cardradio.click();
          await expect(cardradio).toBeChecked();
        });
      });

      await test.step('keyboard & focus', async () => {
        await test.step('component should be checked when pressed enter', async () => {
          await setup(setupArgs);
          await componentsPage.actionability.pressTab();
          await expect(cardradio).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(cardradio).toBeChecked();
        });

        await test.step('component should be checked when pressed space', async () => {
          await setup(setupArgs);
          await componentsPage.actionability.pressTab();
          await expect(cardradio).toBeFocused();
          await componentsPage.page.keyboard.press('Space');
          await expect(cardradio).toBeChecked();
        });

        await test.step('component should not be focused in disabled state', async () => {
          await setup({ ...setupArgs, disabled: true });
          await componentsPage.actionability.pressTab();
          await expect(cardradio).not.toBeFocused();
        });

        await test.step(`component should navigate between radio cards using arrow keys
         and mark the focused card as checked`, async () => {
          await setup({ ...setupArgs, isGroup: true });
          const cards = componentsPage.page.locator('mdc-cardradio');
          await componentsPage.actionability.pressTab();
          await expect(cards.nth(0)).toBeFocused();
          await expect(cards.nth(0)).not.toBeChecked();
          await componentsPage.page.keyboard.press('ArrowDown');
          await expect(cards.nth(1)).toBeFocused();
          await expect(cards.nth(1)).toBeChecked();
          await componentsPage.page.keyboard.press('ArrowRight');
          await expect(cards.nth(2)).toBeFocused();
          await expect(cards.nth(2)).toBeChecked();
          await componentsPage.page.keyboard.press('ArrowLeft');
          await expect(cards.nth(1)).toBeFocused();
          await expect(cards.nth(1)).toBeChecked();
          await componentsPage.page.keyboard.press('ArrowUp');
          await expect(cards.nth(0)).toBeFocused();
          await expect(cards.nth(0)).toBeChecked();
        });
      });
    });
  });

  // Ensure all images are visible before snapshot
  const loadAllImages = async (componentsPage: ComponentsPage) => {
    const cardradio = componentsPage.page.locator('mdc-cardradio');
    const img = cardradio.locator(`img[src="${imageFixtures.card}"]`);
    const imgCount = await img.count();
    if (imgCount > 0) {
      for (let i = 0; i < imgCount; i += 1) {
        await img.nth(i).waitFor();
        await expect(img.nth(i)).toBeVisible();
      }
    }
  };

  // Ensure all icons are visible before snapshot
  const loadAllIcons = async (componentsPage: ComponentsPage) => {
    const cardradio = componentsPage.page.locator('mdc-cardradio');
    const icon = cardradio.locator('mdc-icon[name="placeholder-bold"]');
    const iconCount = await icon.count();
    if (iconCount > 0) {
      for (let i = 0; i < iconCount; i += 1) {
        await icon.nth(i).waitFor();
        await expect(icon.nth(i)).toBeVisible();
      }
    }
  };

  const createStickerSheetBasedOnOrientation = async (componentsPage: ComponentsPage, orientation: string) => {
    const cardRadioStickersheet = new StickerSheet(componentsPage, 'mdc-cardradio');

    // Card radio without body
    cardRadioStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'image-src': imageFixtures.card,
      'image-alt': 'Image Alt',
      'icon-name': 'placeholder-bold',
      orientation,
    });
    await cardRadioStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Card radio with body
    cardRadioStickersheet.setChildren(defaultChildren);

    await cardRadioStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Card Radio without image
    cardRadioStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      orientation,
    });
    await cardRadioStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Selected Card Radio
    cardRadioStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      checked: '',
      orientation,
    });
    await cardRadioStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Disabled Card Radio
    cardRadioStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      disabled: '',
      orientation,
    });
    await cardRadioStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Selected and disabled Card Radio
    cardRadioStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      checked: '',
      disabled: '',
      orientation,
    });
    await cardRadioStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    await cardRadioStickersheet.mountStickerSheet();
    await loadAllImages(componentsPage);
    await loadAllIcons(componentsPage);
    const container = cardRadioStickersheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot(`mdc-cardradio-${orientation}`, { element: container });
    });
  };

  test.use({ viewport: { width: 2000, height: 1400 } });
  test('visual-regression & accessibility vertical', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION & ACCESSIBILITY
     */
    const isDesktop = ['chrome', 'firefox', 'msedge', 'webkit'].includes(test.info().project.name);
    if (isDesktop) {
      await componentsPage.page.setViewportSize({ width: 1000, height: 1400 });
      await createStickerSheetBasedOnOrientation(componentsPage, 'vertical');
      await componentsPage.accessibility.checkForA11yViolations('cardradio-vertical');
    } else {
      await test.step('visual-regression & accessibility', async () => {
        await setup({
          componentsPage,
          cardTitle: 'Card Title',
          subtitle: 'Card Subtitle',
          orientation: 'vertical',
          children: defaultChildren,
          imageSrc: imageFixtures.card,
          imageAlt: 'Image Alt',
        });
        await loadAllImages(componentsPage);
        await loadAllIcons(componentsPage);
        await componentsPage.visualRegression.takeScreenshot('static-card-vertical');
        await componentsPage.accessibility.checkForA11yViolations('static-card-vertical');
      });
    }
  });

  test('visual-regression & accessibility horizontal', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION & ACCESSIBILITY
     */
    const isDesktop = ['chrome', 'firefox', 'msedge', 'webkit'].includes(test.info().project.name);
    if (isDesktop) {
      await componentsPage.page.setViewportSize({ width: 2000, height: 1000 });
      await createStickerSheetBasedOnOrientation(componentsPage, 'horizontal');
      await componentsPage.accessibility.checkForA11yViolations('cardradio-horizontal');
    } else {
      await test.step('visual-regression & accessibility', async () => {
        await setup({
          componentsPage,
          cardTitle: 'Card Title',
          subtitle: 'Card Subtitle',
          orientation: 'horizontal',
          children: defaultChildren,
          imageSrc: imageFixtures.card,
          imageAlt: 'Image Alt',
        });
        await loadAllImages(componentsPage);
        await loadAllIcons(componentsPage);
        await componentsPage.visualRegression.takeScreenshot('static-card-horizontal');
        await componentsPage.accessibility.checkForA11yViolations('static-card-horizontal');
      });
    }
  });
});
