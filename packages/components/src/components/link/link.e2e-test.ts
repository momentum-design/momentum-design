import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { DEFAULTS, LINK_SIZES } from './link.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  disabled?: boolean;
  iconName?: string;
  inline?: boolean;
  inverted?: boolean;
  size?: string;
  addPageFooter?: boolean;
};

const ICON_PLACEHOLDER = 'placeholder-bold';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    ${restArgs.addPageFooter ? '<div id="wrapper">' : ''}
    <mdc-link
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
        ${restArgs.inline ? 'inline' : ''}
        ${restArgs.inverted ? 'inverted' : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
      >
        <a href="#content">Label</a>
      </mdc-link>
      ${restArgs.addPageFooter ? '<div id="content"><p>Test content</p></div></div>' : ''}
    `,
    clearDocument: true,
  });

  const element = restArgs.addPageFooter
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-link');
  await element.waitFor();

  // always return the first button:
  const link = await componentsPage.page.locator('mdc-link').first();
  return link;
};

test.use({ viewport: { width: 400, height: 800 } });
test('mdc-link', async ({ componentsPage }) => {
  await test.step('attributes and interactions', async () => {
    const link = await setup({ componentsPage });

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      // Default values for link
      await test.step('only size attribute should be present on component by default', async () => {
        await expect(link).toHaveAttribute('size', DEFAULTS.LINK_SIZE);
        await expect(link).not.toHaveAttribute('disabled');
        await expect(link).not.toHaveAttribute('icon-name');
        await expect(link).not.toHaveAttribute('inline');
        await expect(link).not.toHaveAttribute('inverted');
      });

      // Disabled
      await test.step('attribute disabled should be present on link', async () => {
        await componentsPage.setAttributes(link, {
          disabled: '',
        });
        await expect(link).toHaveAttribute('disabled');
        await componentsPage.removeAttribute(link, 'disabled');
      });

      // Icon name
      await test.step('attribute icon-name should be present on link', async () => {
        await componentsPage.setAttributes(link, {
          'icon-name': ICON_PLACEHOLDER,
        });
        await expect(link).toHaveAttribute('icon-name');
        await componentsPage.removeAttribute(link, 'icon-name');
      });

      // Inline
      await test.step('attribute inline should be present on link', async () => {
        await componentsPage.setAttributes(link, {
          inline: '',
        });
        await expect(link).toHaveAttribute('inline');
        await componentsPage.removeAttribute(link, 'inline');
      });

      // Inverted
      await test.step('attribute inverted should be present on link', async () => {
        await componentsPage.setAttributes(link, {
          inverted: '',
        });
        await expect(link).toHaveAttribute('inverted');
        await componentsPage.removeAttribute(link, 'inverted');
      });

      // Size
      // eslint-disable-next-line no-restricted-syntax
      for (const linkSize of Object.values(LINK_SIZES)) {
      // eslint-disable-next-line no-await-in-loop
        await test.step(`attribute size ${linkSize} should be present as expected`, async () => {
          await componentsPage.setAttributes(link, { size: linkSize });
          await expect(link).toHaveAttribute('size', linkSize);
        });
      }

      // Href
      await test.step('attribute href should be present on anchor tag', async () => {
        const linkElement = link.getByRole('link');
        await expect(linkElement).toHaveAttribute('href', '#content');
      });
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      const linkInFooterPage = await setup({ componentsPage, addPageFooter: true });

      await test.step('link focus and click on disabled link', async () => {
        const linkElement = linkInFooterPage.getByRole('link');
        await componentsPage.setAttributes(link, {
          disabled: '',
        });
        await componentsPage.actionability.pressTab();
        await expect(linkElement).not.toBeFocused();

        await componentsPage.removeAttribute(link, 'disabled');
        await linkElement.evaluate((el) => el.blur());
      });

      await test.step('link focus and click', async () => {
        const linkElement = linkInFooterPage.getByRole('link');
        await componentsPage.actionability.pressTab();
        await expect(linkElement).toBeFocused();

        await componentsPage.page.keyboard.press('Enter');
        await expect(componentsPage.page.url()).toContain('#content');
        await linkElement.evaluate((el) => el.blur());
        await componentsPage.page.goBack();
      });
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-link');
    stickerSheet.setChildren(
      '<a href="http://localhost:4000/" target="_blank" rel="noopener noreferrer">Label</a>',
    );

    // Standalone Link without trailing icon
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link with trailing icon
    stickerSheet.setAttributes({ 'icon-name': ICON_PLACEHOLDER });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link disabled without trailing icon
    stickerSheet.setAttributes({ disabled: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link disabled with trailing icon
    stickerSheet.setAttributes({ disabled: '', 'icon-name': ICON_PLACEHOLDER });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link without trailing icon
    stickerSheet.setAttributes({ inline: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link with trailing icon
    stickerSheet.setAttributes({ 'icon-name': ICON_PLACEHOLDER, inline: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link disabled without trailing icon
    stickerSheet.setAttributes({ disabled: '', inline: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link disabled with trailing icon
    stickerSheet.setAttributes({ disabled: '', 'icon-name': ICON_PLACEHOLDER, inline: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link inverted without trailing icon
    stickerSheet.setAttributes({ inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link inverted with trailing icon
    stickerSheet.setAttributes({ 'icon-name': ICON_PLACEHOLDER, inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link inverted and disabled without trailing icon
    stickerSheet.setAttributes({ disabled: '', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link inverted and disabled with trailing icon
    stickerSheet.setAttributes({ disabled: '', 'icon-name': ICON_PLACEHOLDER, inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link inverted without trailing icon
    stickerSheet.setAttributes({ inline: '', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link inverted with trailing icon
    stickerSheet.setAttributes({ 'icon-name': ICON_PLACEHOLDER, inline: '', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link inverted and disabled without trailing icon
    stickerSheet.setAttributes({ disabled: '', inline: '', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link inverted and disabled with trailing icon
    stickerSheet.setAttributes({ disabled: '', inline: '', inverted: '', 'icon-name': ICON_PLACEHOLDER });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    await stickerSheet.mountStickerSheet();
    const container = await stickerSheet.getWrapperContainer();
    await container.evaluate((wrapper) => {
      const rowWrappers = wrapper.querySelectorAll('.componentRowWrapper') as NodeListOf<HTMLElement>;
      const lastTwoRowWrappers = Array.from(rowWrappers).slice(-8);
      lastTwoRowWrappers.forEach((rowWrapper) => {
        const modifiedRowWrapper = rowWrapper;
        modifiedRowWrapper.style.backgroundColor = 'var(--mds-color-theme-inverted-background-normal)';
      });
    });

    await test.step('matches screenshot of link element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-link', {
        element: container,
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessbility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('mdc-link');
  });
});
