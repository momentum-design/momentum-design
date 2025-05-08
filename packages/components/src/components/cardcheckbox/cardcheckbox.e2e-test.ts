import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
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
    </mdc-cardcheckbox>
    `;

const setup = async (args: SetupOptions) => {
  const { componentsPage, isGroup, ...restArgs } = args;
  await componentsPage.mount({
    html: isGroup ? `
    <mdc-formfieldgroup>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
    ${Array.from({ length: 3 }, (_, i) => renderCardCheckbox({ ...restArgs,
    cardTitle: `cardcheckbox-${i}` })).join('')}
    </div>
    </mdc-formfieldgroup>` : renderCardCheckbox(restArgs),
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
    const cardcheckbox = await setup({ componentsPage,
      cardTitle: 'Card Title',
      subtitle: 'Card Subtitle' });

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
        await componentsPage.setAttributes(cardcheckbox, { 'image-src': 'https://placehold.co/150' });
        await expect(cardcheckbox).toHaveAttribute('image-src', 'https://placehold.co/150');
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

  const createStickerSheetBasedOnOrientation = async (componentsPage: ComponentsPage, orientation: string) => {
    const cardcheckboxStickersheet = new StickerSheet(componentsPage, 'mdc-cardcheckbox');
    const imageSrc = orientation === 'vertical' ? 'https://placehold.co/320x200' : 'https://placehold.co/160x300';

    // Card checkbox without body
    cardcheckboxStickersheet.setAttributes({
      'card-title': 'Card Title',
      subtitle: 'Card Subtitle',
      'image-src': imageSrc,
      'image-alt': 'Image Alt',
      'icon-name': 'placeholder-bold',
      orientation,
    });
    await cardcheckboxStickersheet.createMarkupWithCombination({
      variant: Object.values(VARIANTS),
    });

    // Card checkbox with body
    cardcheckboxStickersheet.setChildren(`<mdc-text slot='body' 
    type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
    Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. </mdc-text>`);

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
    await componentsPage.page.waitForTimeout(500);
    const container = cardcheckboxStickersheet.getWrapperContainer();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot(`mdc-cardcheckbox-${orientation}`, { element: container });
    });
  };

  test.use({ viewport: { width: 2400, height: 2400 } });
  test('visual-regression & accessibility vertical', async ({ componentsPage }) => {
    /**
   * VISUAL REGRESSION & ACCESSIBILITY
   */
    await test.step('visual-regression & accessibility', async () => {
      await createStickerSheetBasedOnOrientation(componentsPage, 'vertical');
      await componentsPage.accessibility.checkForA11yViolations('cardcheckbox-vertical');
    });
  });

  test('visual-regression & accessibility horizontal', async ({ componentsPage }) => {
    /**
   * VISUAL REGRESSION & ACCESSIBILITY
   */
    await test.step('visual-regression & accessibility', async () => {
      await createStickerSheetBasedOnOrientation(componentsPage, 'horizontal');
      await componentsPage.accessibility.checkForA11yViolations('cardcheckbox-horizontal');
    });
  });
});
