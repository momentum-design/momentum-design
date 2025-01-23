import { expect, Locator } from '@playwright/test';
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
  linkText?: string;
  linkUrl?: string;
  addPageFooter?: boolean;
};

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

// Applies focus to the component, handling WebKit-specific focus quirks
const pressTab = async (componentsPage: ComponentsPage, browserName: string, subComponent: Locator, focus: boolean) => {
  if (browserName === 'webkit') {
    if (focus) {
      await componentsPage.page.keyboard.press('Alt+Tab');
    } else {
      // Explicitly blur to remove focus in WebKit
      await subComponent.evaluate((el: HTMLElement) => el.blur());
    }
  } else {
    await componentsPage.page.keyboard.press('Tab');
  }
};

test.describe('mdc-link', () => {
  test.use({ viewport: { width: 800, height: 2700 } });
  test('mdc-link', async ({ componentsPage, browserName }) => {
    const link = await setup({ componentsPage });
    await test.step('default attributes for link', async () => {
    // Default values for link
      await test.step('only attributes size should be present on component by default', async () => {
        await expect(link).toHaveAttribute('size', DEFAULTS.LINK_SIZE);
        await expect(link).not.toHaveAttribute('disabled');
        await expect(link).not.toHaveAttribute('icon-name');
        await expect(link).not.toHaveAttribute('inline');
        await expect(link).not.toHaveAttribute('inverted');
      });
    });

    /**
    * ATTRIBUTES
    */
    await test.step('attributes', async () => {
    // Disabled
      await test.step('attribute disabled should be present on link', async () => {
        await componentsPage.setAttributes(link, {
          disabled: '',
        });
        await expect(link).toHaveAttribute('disabled');
        await componentsPage.removeAttribute(link, 'disabled');
      });

      // Icon name
      await test.step('attribute inline should be present on link', async () => {
        await componentsPage.setAttributes(link, {
          'icon-name': 'placeholder-regular',
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
    * ACCESSIBILITY
    */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('mdc-link');
    });

    /**
   * INTERACTIONS
   */
    await test.step('link focus and click events', async () => {
      const linkInFooterPage = await setup({ componentsPage, addPageFooter: true });
      await test.step('link focus and click', async () => {
        const linkElement = linkInFooterPage.getByRole('link');
        await pressTab(componentsPage, browserName, linkElement, true);
        await expect(linkElement).toBeFocused();

        await componentsPage.page.keyboard.press('Enter');
        await expect(componentsPage.page.url()).toContain('#content');
        await pressTab(componentsPage, browserName, linkElement, false);
        await componentsPage.page.goBack();
      });
      await test.step('link focus and click on disabled link', async () => {
        const linkElement = linkInFooterPage.getByRole('link');
        await componentsPage.setAttributes(link, {
          disabled: '',
        });
        await pressTab(componentsPage, browserName, linkElement, true);
        await expect(linkElement).not.toBeFocused();

        await componentsPage.removeAttribute(link, 'disabled');
        await pressTab(componentsPage, browserName, linkElement, false);
      });
    });
  });
  /**
  * VISUAL REGRESSION
  */
  test('visual-regression', async ({ componentsPage }) => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-link');
    stickerSheet.setChildren(
      '<a href="http://localhost:4000/" target="_blank" rel="noopener noreferrer">Label</a>',
    );

    // Standalone Link without trailing icon
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link with trailing icon
    stickerSheet.setAttributes({ 'icon-name': 'placeholder-regular' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link disabled without trailing icon
    stickerSheet.setAttributes({ disabled: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link disabled with trailing icon
    stickerSheet.setAttributes({ disabled: '', 'icon-name': 'placeholder-regular' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link without trailing icon
    stickerSheet.setAttributes({ inline: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link with trailing icon
    stickerSheet.setAttributes({ 'icon-name': 'placeholder-regular', inline: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link disabled without trailing icon
    stickerSheet.setAttributes({ disabled: '', inline: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link disabled with trailing icon
    stickerSheet.setAttributes({ disabled: '', 'icon-name': 'placeholder-regular', inline: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link inverted without trailing icon
    stickerSheet.setAttributes({ inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link inverted with trailing icon
    stickerSheet.setAttributes({ 'icon-name': 'placeholder-regular', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link inverted without trailing icon
    stickerSheet.setAttributes({ inline: '', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link inverted with trailing icon
    stickerSheet.setAttributes({ 'icon-name': 'placeholder-regular', inline: '', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link inverted and disabled without trailing icon
    stickerSheet.setAttributes({ disabled: '', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Standalone Link inverted and disabled with trailing icon
    stickerSheet.setAttributes({ disabled: '', 'icon-name': 'placeholder-regular', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link inverted and disabled without trailing icon
    stickerSheet.setAttributes({ disabled: '', inline: '', inverted: '' });
    await stickerSheet.createMarkupWithCombination({ size: Object.values(LINK_SIZES) });

    // Inline Link inverted and disabled with trailing icon
    stickerSheet.setAttributes({ disabled: '', inline: '', inverted: '', 'icon-name': 'placeholder-regular' });
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
});
