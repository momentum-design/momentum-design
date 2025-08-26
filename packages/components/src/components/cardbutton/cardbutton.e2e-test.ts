/* eslint-disable no-restricted-syntax */

/* eslint-disable no-await-in-loop */
import { expect } from '@playwright/test';

import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { VARIANTS } from '../card/card.constants';

interface SetupOptions {
  componentsPage: ComponentsPage;
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
  softDisabled?: boolean;
  tabindex?: number;
  children?: string;
}

const defaultChildren = `<mdc-text slot='body' 
    type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mdc-text>`;

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `<mdc-cardbutton
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
      ${restArgs.softDisabled ? 'soft-disabled' : ''}
    >
    ${restArgs.children}
    </mdc-cardbutton>`,
    clearDocument: true,
  });

  const cardbutton = componentsPage.page.locator('mdc-cardbutton');
  await cardbutton.waitFor();

  return cardbutton;
};

test.describe.parallel('mdc-cardbutton', () => {
  test('attributes and interactions', async ({ componentsPage }) => {
    const cardbutton = await setup({ componentsPage, cardTitle: 'Card Title', subtitle: 'Card Subtitle' });

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      await test.step('attribute X should be present on component by default', async () => {
        await expect(cardbutton).toHaveAttribute('variant', 'border');
        await expect(cardbutton).toHaveAttribute('orientation', 'vertical');
        await expect(cardbutton).toHaveAttribute('title-tag-name', 'span');
        await expect(cardbutton).toHaveAttribute('subtitle-tag-name', 'span');
      });

      await test.step('attributes should be present on component when provided', async () => {
        await expect(cardbutton).toHaveAttribute('card-title', 'Card Title');
        await expect(cardbutton).toHaveAttribute('subtitle', 'Card Subtitle');
      });

      await test.step('attribute disabled should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardbutton, { disabled: '' });
        await expect(cardbutton).toHaveAttribute('disabled', '');
        await expect(cardbutton).toBeDisabled();
        await componentsPage.removeAttribute(cardbutton, 'disabled');
        await expect(cardbutton).not.toBeDisabled();
      });

      await test.step('attribute soft-disabled should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardbutton, { 'soft-disabled': '' });
        await expect(cardbutton).toHaveAttribute('soft-disabled', '');
        await expect(cardbutton).toBeDisabled();
        await componentsPage.removeAttribute(cardbutton, 'soft-disabled');
        await expect(cardbutton).not.toBeDisabled();
      });

      await test.step('attribute icon-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardbutton, { 'icon-name': 'placeholder-bold' });
        await expect(cardbutton).toHaveAttribute('icon-name', 'placeholder-bold');
        await componentsPage.removeAttribute(cardbutton, 'icon-name');
      });

      await test.step('attribute image-src should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardbutton, { 'image-src': imageFixtures.card });
        await expect(cardbutton).toHaveAttribute('image-src', imageFixtures.card);
        await componentsPage.removeAttribute(cardbutton, 'image-src');
      });

      await test.step('attribute image-alt should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardbutton, { 'image-alt': 'Image Alt' });
        await expect(cardbutton).toHaveAttribute('image-alt', 'Image Alt');
        await componentsPage.removeAttribute(cardbutton, 'image-alt');
      });

      await test.step('attribute aria-label should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardbutton, { 'aria-label': 'Card button' });
        await expect(cardbutton).toHaveAttribute('aria-label', 'Card button');
        await componentsPage.removeAttribute(cardbutton, 'aria-label');
      });

      await test.step('attribute title-tag-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardbutton, { 'title-tag-name': 'h1' });
        await expect(cardbutton).toHaveAttribute('title-tag-name', 'h1');
        await componentsPage.removeAttribute(cardbutton, 'title-tag-name');
      });

      await test.step('attribute subtitle-tag-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardbutton, { 'subtitle-tag-name': 'h2' });
        await expect(cardbutton).toHaveAttribute('subtitle-tag-name', 'h2');
        await componentsPage.removeAttribute(cardbutton, 'subtitle-tag-name');
      });

      await test.step('attribute tabindex should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardbutton, { tabindex: '0' });
        await expect(cardbutton).toHaveAttribute('tabindex', '0');
        await componentsPage.removeAttribute(cardbutton, 'tabindex');
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
      };
      await test.step('mouse/pointer', async () => {
        await test.step('component should toggle checked state when clicked using mouse', async () => {
          await setup(setupArgs);
          const eventResolve = await componentsPage.waitForEvent(cardbutton, 'click');
          await cardbutton.click();
          await eventResolve();
        });
      });

      await test.step('keyboard & focus', async () => {
        await test.step('component should toggle checked state when pressed enter/space', async () => {
          await setup(setupArgs);
          const eventResolveAfterEnter = await componentsPage.waitForEvent(cardbutton, 'click');
          await componentsPage.actionability.pressTab();
          await expect(cardbutton).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await eventResolveAfterEnter();

          const eventResolveAfterSpace = await componentsPage.waitForEvent(cardbutton, 'click');
          await componentsPage.page.keyboard.press('Space');
          await eventResolveAfterSpace();
        });

        await test.step('component should not be focused in disabled state', async () => {
          await setup({ ...setupArgs, disabled: true });
          await componentsPage.actionability.pressTab();
          await expect(cardbutton).not.toBeFocused();
        });
      });
    });
  });

  // Ensure all images are visible before snapshot
  const loadAllImages = async (componentsPage: ComponentsPage) => { 
    const cardbutton = componentsPage.page.locator('mdc-cardbutton');
    const img = cardbutton.locator(`img[src="${imageFixtures.card}"]`);
    const imgCount = await img.count();
    if (imgCount > 0) {
      for (let i = 0; i < imgCount; i += 1) {
        await img.nth(i).waitFor();
        await expect(img.nth(i)).toBeVisible();
      }
    }
  }

  // Ensure all icons are visible before snapshot
  const loadAllIcons = async (componentsPage: ComponentsPage) => { 
    const cardbutton = componentsPage.page.locator('mdc-cardbutton');
    const icon = cardbutton.locator('mdc-icon[name="placeholder-bold"]');
    const iconCount = await icon.count();
    if (iconCount > 0) {
      for (let i = 0; i < iconCount; i += 1) {
        await icon.nth(i).waitFor();
        await expect(icon.nth(i)).toBeVisible();
      }
    }
  }

  const createStickerSheetBasedOnOrientation = async (componentsPage: ComponentsPage, orientation: string) => {
    const cardbuttonStickersheet = new StickerSheet(componentsPage, 'mdc-cardbutton');

    // Card button without body
    cardbuttonStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'image-src': imageFixtures.card,
      'image-alt': 'Image Alt',
      'icon-name': 'placeholder-bold',
      orientation,
    });
    await cardbuttonStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Card button with body
    cardbuttonStickersheet.setChildren(defaultChildren);

    await cardbuttonStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Card button without image
    cardbuttonStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      'selection-type': 'button',
      orientation,
    });
    await cardbuttonStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Selected Card button
    cardbuttonStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      checked: '',
      orientation,
    });
    await cardbuttonStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Disabled Card button
    cardbuttonStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      disabled: '',
      orientation,
    });
    await cardbuttonStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Selected and disabled Card button
    cardbuttonStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      checked: '',
      'selection-type': 'button',
      disabled: '',
      orientation,
    });
    await cardbuttonStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    await cardbuttonStickersheet.mountStickerSheet();
    await loadAllImages(componentsPage);
    await loadAllIcons(componentsPage);
    const container = cardbuttonStickersheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot(`mdc-cardbutton-${orientation}`, { element: container });
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
      await componentsPage.accessibility.checkForA11yViolations('cardbutton-vertical');
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
      await componentsPage.accessibility.checkForA11yViolations('cardbutton-horizontal');
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
