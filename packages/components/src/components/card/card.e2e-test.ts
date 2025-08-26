/* eslint-disable no-restricted-syntax */

/* eslint-disable no-await-in-loop */
import { expect, Locator } from '@playwright/test';

import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { VARIANTS } from './card.constants';

type SetupOptions = {
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
  children?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-card
    ${restArgs.cardTitle ? `card-title="${restArgs.cardTitle}"` : ''}
    ${restArgs.subtitle ? `subtitle="${restArgs.subtitle}"` : ''}
    ${restArgs.imageSrc ? `image-src="${restArgs.imageSrc}"` : ''}
    ${restArgs.imageAlt ? `image-alt="${restArgs.imageAlt}"` : ''}
    ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
    ${restArgs.orientation ? `orientation="${restArgs.orientation}"` : ''}
    ${restArgs.titleTagName ? `title-tag-name="${restArgs.titleTagName}"` : ''}
    ${restArgs.subtitleTagName ? `subtitle-tag-name="${restArgs.subtitleTagName}"` : ''}
    ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
    >${restArgs.children}
    </mdc-card>
    `,
    clearDocument: true,
  });

  const card = componentsPage.page.locator('mdc-card');
  await card.waitFor();

  return card;
};

const defaultChildren = `<mdc-text slot='body' 
    type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam vulputate aliquet risus, eget auctor ante egestas facilisis.</mdc-text>`;

const interactiveChildren = `<mdc-text slot='body' 
    type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam vulputate aliquet risus, eget auctor ante egestas facilisis.</mdc-text>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
<mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
<mdc-button slot="footer-button-secondary">Label</mdc-button>
<mdc-button slot="footer-button-primary">Label</mdc-button>`;

test.describe.parallel('mdc-card', () => {
  test('attributes and interactions', async ({ componentsPage }) => {
    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      const card = await setup({ componentsPage, cardTitle: 'Card Title', subtitle: 'Card Subtitle' });
      await test.step('attribute X should be present on component by default', async () => {
        await expect(card).toHaveAttribute('variant', 'border');
        await expect(card).toHaveAttribute('orientation', 'vertical');
        await expect(card).toHaveAttribute('title-tag-name', 'span');
        await expect(card).toHaveAttribute('subtitle-tag-name', 'span');
      });

      await test.step('attributes should be present on component when provided', async () => {
        await expect(card).toHaveAttribute('card-title', 'Card Title');
        await expect(card).toHaveAttribute('subtitle', 'Card Subtitle');
      });

      await test.step('attribute icon-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(card, { 'icon-name': 'placeholder-bold' });
        await expect(card).toHaveAttribute('icon-name', 'placeholder-bold');
        await componentsPage.removeAttribute(card, 'icon-name');
      });

      await test.step('attribute image-src should be present on component when provided', async () => {
        await componentsPage.setAttributes(card, { 'image-src': imageFixtures.card });
        await expect(card).toHaveAttribute('image-src', imageFixtures.card);
        await componentsPage.removeAttribute(card, 'image-src');
      });

      await test.step('attribute image-alt should be present on component when provided', async () => {
        await componentsPage.setAttributes(card, { 'image-alt': 'Image Alt' });
        await expect(card).toHaveAttribute('image-alt', 'Image Alt');
        await componentsPage.removeAttribute(card, 'image-alt');
      });

      await test.step('attribute title-tag-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(card, { 'title-tag-name': 'h1' });
        await expect(card).toHaveAttribute('title-tag-name', 'h1');
        await componentsPage.removeAttribute(card, 'title-tag-name');
      });

      await test.step('attribute subtitle-tag-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(card, { 'subtitle-tag-name': 'h2' });
        await expect(card).toHaveAttribute('subtitle-tag-name', 'h2');
        await componentsPage.removeAttribute(card, 'subtitle-tag-name');
      });
    });

    /**
     * INTERACTIONS
     * This is applicable only for interactive card (card with interactive elements in the children)
     */
    await test.step('interactions', async () => {
      const card = await setup({
        componentsPage,
        cardTitle: 'Card Title',
        subtitle: 'Card Subtitle',
        children: interactiveChildren,
      });

      const iconButtons = card.locator('mdc-button[slot="icon-button"]');
      const link = card.locator('mdc-link[slot="footer-link"]');
      const primaryButton = card.locator('mdc-button[slot="footer-button-primary"]');
      const secondaryButton = card.locator('mdc-button[slot="footer-button-secondary"]');

      await test.step('focus', async () => {
        await test.step('component should be focusable with tab', async () => {
          await componentsPage.actionability.pressAndCheckFocus('Tab', [
            iconButtons.first(),
            iconButtons.nth(1),
            iconButtons.last(),
            link,
            secondaryButton,
            primaryButton,
          ]);
        });
        await test.step('component should be focusable with shift+tab', async () => {
          await componentsPage.actionability.pressAndCheckFocus('Shift+Tab', [
            secondaryButton,
            link,
            iconButtons.last(),
            iconButtons.nth(1),
            iconButtons.first(),
          ]);
        });
      });

      const testClickEvent = async (button: Locator) => {
        const eventResolve = await componentsPage.waitForEvent(button, 'click');
        await button.click();
        await eventResolve();
      };

      await test.step('mouse/pointer', async () => {
        await test.step('component should fire click event when clicking on primary button in the footer', async () => {
          await testClickEvent(primaryButton);
        });

        await test.step(`component should fire click event when clicking on 
          secondary button in the footer`, async () => {
          await testClickEvent(secondaryButton);
        });

        await test.step('component should fire click event when clicking on icon button', async () => {
          await testClickEvent(iconButtons.first());
          await testClickEvent(iconButtons.nth(1));
          await testClickEvent(iconButtons.last());
        });
      });

      const testOnEnterSpace = async (button: Locator) => {
        const eventResolveAfterEnter = await componentsPage.waitForEvent(button, 'click');
        await button.focus();
        await expect(button).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await eventResolveAfterEnter();

        const eventResolveAfterSpace = await componentsPage.waitForEvent(button, 'click');
        await componentsPage.page.keyboard.press('Space');
        await eventResolveAfterSpace();
      };

      await test.step('keyboard', async () => {
        await test.step(`component should fire click event when 
        pressing enter/space on primary button in the footer`, async () => {
          await testOnEnterSpace(primaryButton);
        });

        await test.step(`component should fire click event when 
        pressing enter/space on secondary button in the footer`, async () => {
          await testOnEnterSpace(secondaryButton);
        });

        await test.step(`component should fire click event when 
        pressing enter/space on icon button`, async () => {
          await testOnEnterSpace(iconButtons.first());
          await testOnEnterSpace(iconButtons.nth(1));
          await testOnEnterSpace(iconButtons.last());
        });
      });
    });
  });

  // Ensure all images are visible before snapshot
  const loadAllImages = async (componentsPage: ComponentsPage) => { 
    const card = componentsPage.page.locator('mdc-card');
    const img = card.locator('img[src="https://placehold.co/100x100"]');
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
    const card = componentsPage.page.locator('mdc-card');
    const icon = card.locator('mdc-icon[name="placeholder-bold"]');
    const iconCount = await icon.count();
    if (iconCount > 0) {
      for (let i = 0; i < iconCount; i += 1) {
        await icon.nth(i).waitFor();
        await expect(icon.nth(i)).toBeVisible();
      }
    }
  }

  const createStickerSheetBasedOnOrientation = async (
    componentsPage: ComponentsPage,
    orientation: string,
    children: string,
    suffix?: string,
  ) => {
    const cardStickersheet = new StickerSheet(componentsPage, 'mdc-card');

    // Card without body
    cardStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'image-src': imageFixtures.card,
      'image-alt': 'Image Alt',
      'icon-name': 'placeholder-bold',
      orientation,
    });
    await cardStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Card with body
    cardStickersheet.setChildren(children);

    await cardStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Card without image
    cardStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      'selection-type': 'button',
      orientation,
    });
    await cardStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Selected Card
    cardStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      checked: '',
      orientation,
    });
    await cardStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Disabled Card
    cardStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      disabled: '',
      orientation,
    });
    await cardStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Selected and disabled Card
    cardStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      checked: '',
      'selection-type': 'button',
      disabled: '',
      orientation,
    });
    await cardStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    await cardStickersheet.mountStickerSheet();
    await loadAllImages(componentsPage);
    const container = cardStickersheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      const fileName = suffix ? `mdc-card-${orientation}-${suffix}` : `mdc-card-${orientation}`;
      await componentsPage.visualRegression.takeScreenshot(fileName, { element: container });
    });
  };

  test('visual-regression & accessibility vertical', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION & ACCESSIBILITY
     */
    const isDesktop = ['chrome', 'firefox', 'msedge', 'webkit'].includes(test.info().project.name);
    if (isDesktop) {
      await componentsPage.page.setViewportSize({ width: 1000, height: 1700 });

      await test.step('static card vertical', async () => {
        await createStickerSheetBasedOnOrientation(componentsPage, 'vertical', defaultChildren);
        await componentsPage.accessibility.checkForA11yViolations('static-card-vertical');
      });

      await test.step('interactive card vertical', async () => {
        await createStickerSheetBasedOnOrientation(componentsPage, 'vertical', interactiveChildren, 'interactive');
        await componentsPage.accessibility.checkForA11yViolations('interactive-card-vertical');
      });
    } else {
      await test.step('static card vertical', async () => {
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

      await test.step('interactive card vertical', async () => {
        await setup({
          componentsPage,
          cardTitle: 'Card Title',
          subtitle: 'Card Subtitle',
          orientation: 'vertical',
          children: interactiveChildren,
          imageSrc: imageFixtures.card,
          imageAlt: 'Image Alt',
        });

        await loadAllImages(componentsPage);
        await loadAllIcons(componentsPage);
        await componentsPage.visualRegression.takeScreenshot('interactive-card-vertical');
        await componentsPage.accessibility.checkForA11yViolations('interactive-card-vertical');
      });
    }
  });

  test('visual-regression & accessibility horizontal', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION & ACCESSIBILITY
     */
    const isDesktop = ['chrome', 'firefox', 'msedge', 'webkit'].includes(test.info().project.name);
    if (isDesktop) {
      await componentsPage.page.setViewportSize({ width: 2000, height: 1250 });

      await test.step('static card horizontal', async () => {
        await createStickerSheetBasedOnOrientation(componentsPage, 'horizontal', defaultChildren);
        await componentsPage.accessibility.checkForA11yViolations('static-card-horizontal');
      });

      await test.step('interactive card horizontal', async () => {
        await createStickerSheetBasedOnOrientation(componentsPage, 'horizontal', interactiveChildren, 'interactive');
        await componentsPage.accessibility.checkForA11yViolations('interactive-card-horizontal');
      });
    } else {
      await componentsPage.page.setViewportSize({ width: 700, height: 600 });
      await test.step('static card horizontal', async () => {
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

      await test.step('interactive card horizontal', async () => {
        await setup({
          componentsPage,
          cardTitle: 'Card Title',
          subtitle: 'Card Subtitle',
          orientation: 'horizontal',
          children: interactiveChildren,
          imageSrc: imageFixtures.card,
          imageAlt: 'Image Alt',
        });

        await loadAllImages(componentsPage);
        await loadAllIcons(componentsPage);
        await componentsPage.visualRegression.takeScreenshot('interactive-card-horizontal');
        await componentsPage.accessibility.checkForA11yViolations('interactive-card-horizontal');
      });
    }
  });
});
