/* eslint-disable no-restricted-syntax */

/* eslint-disable no-await-in-loop */
import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { VARIANTS } from '../card/card.constants';

interface CardCheckboxArgs {
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
  selectionType?: string;
  children?: string;
}

interface SetupOptions extends CardCheckboxArgs {
  componentsPage: ComponentsPage;
  isGroup?: boolean;
}

const renderCardCheckbox = (restArgs: CardCheckboxArgs) => `
    <mdc-cardcheckbox
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
      ${restArgs.selectionType ? `selection-type="${restArgs.selectionType}"` : ''}
    >
    ${restArgs.children}
    </mdc-cardcheckbox>
    `;

const defaultChildren = `<mdc-text slot='body' 
    type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mdc-text>`;

const setup = async (args: SetupOptions) => {
  const { componentsPage, isGroup, ...restArgs } = args;
  await componentsPage.mount({
    html: isGroup
      ? `
    <mdc-formfieldgroup>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
    ${Array.from({ length: 3 }, (_, i) => renderCardCheckbox({ ...restArgs, cardTitle: `cardcheckbox-${i}` })).join('')}
    </div>
    </mdc-formfieldgroup>`
      : renderCardCheckbox(restArgs),
    clearDocument: true,
  });

  const cardcheckbox = componentsPage.page.locator('mdc-cardcheckbox').first();
  await cardcheckbox.waitFor();

  if (isGroup) {
    return componentsPage.page.locator('mdc-formfieldgroup');
  }

  return cardcheckbox;
};

test.describe.parallel('mdc-cardcheckbox', () => {
  test('attributes and interactions', async ({ componentsPage }) => {
    const cardcheckbox = await setup({ componentsPage, cardTitle: 'Card Title', subtitle: 'Card Subtitle' });

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      await test.step('attribute X should be present on component by default', async () => {
        await expect(cardcheckbox).toHaveAttribute('variant', 'border');
        await expect(cardcheckbox).toHaveAttribute('orientation', 'vertical');
        await expect(cardcheckbox).toHaveAttribute('title-tag-name', 'span');
        await expect(cardcheckbox).toHaveAttribute('subtitle-tag-name', 'span');
        await expect(cardcheckbox).toHaveAttribute('selection-type', 'check');
      });

      await test.step('attributes should be present on component when provided', async () => {
        await expect(cardcheckbox).toHaveAttribute('card-title', 'Card Title');
        await expect(cardcheckbox).toHaveAttribute('subtitle', 'Card Subtitle');
      });

      await test.step('attribute selection-type should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { 'selection-type': 'checkbox' });
        await expect(cardcheckbox).toHaveAttribute('selection-type', 'checkbox');
        await componentsPage.removeAttribute(cardcheckbox, 'selection-type');
      });

      await test.step('attribute disabled should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { disabled: '' });
        await expect(cardcheckbox).toHaveAttribute('disabled', '');
        await expect(cardcheckbox).toBeDisabled();
        await componentsPage.removeAttribute(cardcheckbox, 'disabled');
        await expect(cardcheckbox).not.toBeDisabled();
      });

      await test.step('attribute checked should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { checked: '' });
        await expect(cardcheckbox).toHaveAttribute('checked', '');
        await expect(cardcheckbox).toBeChecked();
        await componentsPage.removeAttribute(cardcheckbox, 'checked');
        await expect(cardcheckbox).not.toBeChecked();
      });

      await test.step('attribute icon-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { 'icon-name': 'placeholder-bold' });
        await expect(cardcheckbox).toHaveAttribute('icon-name', 'placeholder-bold');
        await componentsPage.removeAttribute(cardcheckbox, 'icon-name');
      });

      await test.step('attribute image-src should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { 'image-src': imageFixtures.card });
        await expect(cardcheckbox).toHaveAttribute('image-src', imageFixtures.card);
        await componentsPage.removeAttribute(cardcheckbox, 'image-src');
      });

      await test.step('attribute image-alt should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { 'image-alt': 'Image Alt' });
        await expect(cardcheckbox).toHaveAttribute('image-alt', 'Image Alt');
        await componentsPage.removeAttribute(cardcheckbox, 'image-alt');
      });

      await test.step('attribute aria-label should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { 'aria-label': 'Card checkbox' });
        await expect(cardcheckbox).toHaveAttribute('aria-label', 'Card checkbox');
        await componentsPage.removeAttribute(cardcheckbox, 'aria-label');
      });

      await test.step('attribute title-tag-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { 'title-tag-name': 'h1' });
        await expect(cardcheckbox).toHaveAttribute('title-tag-name', 'h1');
        await componentsPage.removeAttribute(cardcheckbox, 'title-tag-name');
      });

      await test.step('attribute subtitle-tag-name should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { 'subtitle-tag-name': 'h2' });
        await expect(cardcheckbox).toHaveAttribute('subtitle-tag-name', 'h2');
        await componentsPage.removeAttribute(cardcheckbox, 'subtitle-tag-name');
      });

      await test.step('attribute tabindex should be present on component when provided', async () => {
        await componentsPage.setAttributes(cardcheckbox, { tabindex: '0' });
        await expect(cardcheckbox).toHaveAttribute('tabindex', '0');
        await componentsPage.removeAttribute(cardcheckbox, 'tabindex');
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
          await cardcheckbox.click();
          await expect(cardcheckbox).toBeChecked();
          await cardcheckbox.click();
          await expect(cardcheckbox).not.toBeChecked();
        });
      });

      await test.step('keyboard & focus', async () => {
        await test.step('component should toggle checked state when pressed enter/space', async () => {
          await setup(setupArgs);
          await componentsPage.actionability.pressTab();
          await expect(cardcheckbox).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(cardcheckbox).toBeChecked();
          await componentsPage.page.keyboard.press('Space');
          await expect(cardcheckbox).not.toBeChecked();
        });

        await test.step('component should not be focused in disabled state', async () => {
          await setup({ ...setupArgs, disabled: true });
          await componentsPage.actionability.pressTab();
          await expect(cardcheckbox).not.toBeFocused();
        });

        await test.step('component should not dispatch change event when disabled and space/enter is pressed', async () => {
          await setup({ ...setupArgs, disabled: true });
          const waitForChange = await componentsPage.waitForEvent(cardcheckbox, 'change');
          await cardcheckbox.dispatchEvent('focus');
          await componentsPage.page.keyboard.press('Space');
          await expect(waitForChange).not.toEventEmitted();
          await componentsPage.page.keyboard.press('Enter');
          await expect(waitForChange).not.toEventEmitted();
          await expect(cardcheckbox).not.toBeChecked();
        });

        await test.step('component should navigate between checkbox cards using tab key', async () => {
          await setup({ ...setupArgs, isGroup: true });
          const cards = componentsPage.page.locator('mdc-cardcheckbox');
          await componentsPage.actionability.pressTab();
          await expect(cards.nth(0)).toBeFocused();
          await expect(cards.nth(0)).not.toBeChecked();
          await componentsPage.actionability.pressTab();
          await expect(cards.nth(1)).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(cards.nth(1)).toBeChecked();
          await componentsPage.actionability.pressTab();
          await expect(cards.nth(2)).toBeFocused();
          await expect(cards.nth(2)).not.toBeChecked();
          await componentsPage.actionability.pressShiftTab();
          await expect(cards.nth(1)).toBeFocused();
          await expect(cards.nth(1)).toBeChecked();
          await componentsPage.actionability.pressShiftTab();
          await expect(cards.nth(0)).toBeFocused();
          await componentsPage.page.keyboard.press('Space');
          await expect(cards.nth(0)).toBeChecked();
        });
      });
    });
  });

  // Ensure all images are visible before snapshot
  const loadAllImages = async (componentsPage: ComponentsPage) => {
    const cardcheckbox = componentsPage.page.locator('mdc-cardcheckbox');
    const img = cardcheckbox.locator(`img[src="${imageFixtures.card}"]`);
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
    const cardcheckbox = componentsPage.page.locator('mdc-cardcheckbox');
    const icon = cardcheckbox.locator('mdc-icon[name="placeholder-bold"]');
    const iconCount = await icon.count();
    if (iconCount > 0) {
      for (let i = 0; i < iconCount; i += 1) {
        await icon.nth(i).waitFor();
        await expect(icon.nth(i)).toBeVisible();
      }
    }
  };

  const createStickerSheetBasedOnOrientation = async (componentsPage: ComponentsPage, orientation: string) => {
    const cardcheckboxStickersheet = new StickerSheet(componentsPage, 'mdc-cardcheckbox');

    // Card checkbox without body
    cardcheckboxStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'image-src': imageFixtures.card,
      'image-alt': 'Image Alt',
      'icon-name': 'placeholder-bold',
      orientation,
    });
    await cardcheckboxStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Card checkbox with body
    cardcheckboxStickersheet.setChildren(defaultChildren);

    await cardcheckboxStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Card checkbox without image
    cardcheckboxStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      'selection-type': 'checkbox',
      orientation,
    });
    await cardcheckboxStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Selected Card checkbox
    cardcheckboxStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      checked: '',
      orientation,
    });
    await cardcheckboxStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Disabled Card checkbox
    cardcheckboxStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      disabled: '',
      orientation,
    });
    await cardcheckboxStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Selected and disabled Card checkbox
    cardcheckboxStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'icon-name': 'placeholder-bold',
      checked: '',
      'selection-type': 'checkbox',
      disabled: '',
      orientation,
    });
    await cardcheckboxStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    await cardcheckboxStickersheet.mountStickerSheet();
    await loadAllImages(componentsPage);
    await loadAllIcons(componentsPage);
    const container = cardcheckboxStickersheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot(`mdc-cardcheckbox-${orientation}`, { element: container });
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
      await componentsPage.accessibility.checkForA11yViolations('cardcheckbox-vertical');
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
      await componentsPage.accessibility.checkForA11yViolations('cardcheckbox-horizontal');
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
