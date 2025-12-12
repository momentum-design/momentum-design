/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
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
  href?: string;
  target?: string;
  rel?: string;
  addPageFooter?: boolean;
};

const ICON_PLACEHOLDER = 'placeholder-bold';
const INVERTED_BG_STYLE = 'background-color: var(--mds-color-theme-inverted-background-normal);';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...rest } = args;

  const html = `
    ${rest.addPageFooter ? '<div id="wrapper">' : ''}
    <mdc-link
      ${rest.disabled ? 'disabled' : ''}
      ${rest.iconName ? `icon-name="${rest.iconName}"` : ''}
      ${rest.inline ? 'inline' : ''}
      ${rest.inverted ? 'inverted' : ''}
      ${rest.size ? `size="${rest.size}"` : ''}
      ${rest.href ? `href="${rest.href}"` : ''}
      ${rest.target ? `target="${rest.target}"` : ''}
      ${rest.rel ? `rel="${rest.rel}"` : ''}
    >Label</mdc-link>
    ${rest.addPageFooter ? '<div id="content"><p>Test content</p></div></div>' : ''}
  `;

  await componentsPage.mount({ html, clearDocument: true });

  const link = componentsPage.page.locator('mdc-link').first();
  await link.waitFor();
  return link;
};

test.use({ viewport: { width: 400, height: 800 } });

test('mdc-link', async ({ componentsPage }) => {
  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const link = await setup({ componentsPage });

    await test.step('default attributes', async () => {
      await expect(link).toHaveAttribute('size', DEFAULTS.LINK_SIZE);
      await expect(link).not.toHaveAttribute('disabled');
      await expect(link).not.toHaveAttribute('icon-name');
      await expect(link).not.toHaveAttribute('inline');
      await expect(link).not.toHaveAttribute('inverted');
    });

    const attributeTests: [string, Record<string, string | ''>][] = [
      ['disabled', { disabled: '' }],
      ['icon-name', { 'icon-name': ICON_PLACEHOLDER }],
      ['inline', { inline: '' }],
      ['inverted', { inverted: '' }],
    ];

    for (const [label, attrs] of attributeTests) {
      await test.step(`attribute ${label} should be present`, async () => {
        await componentsPage.setAttributes(link, attrs);
        const [attr] = Object.keys(attrs);
        await expect(link).toHaveAttribute(attr);
        await componentsPage.removeAttribute(link, attr);
      });
    }

    await test.step('supports different sizes', async () => {
      for (const size of Object.values(LINK_SIZES)) {
        await componentsPage.setAttributes(link, { size });
        await expect(link).toHaveAttribute('size', size);
      }
    });

    await test.step('supports href/target/rel', async () => {
      const newLink = await setup({
        componentsPage,
        href: '#content',
        target: '_self',
        rel: 'noopener',
      });

      await expect(newLink).toHaveAttribute('href', '#content');
      await expect(newLink).toHaveAttribute('target', '_self');
      await expect(newLink).toHaveAttribute('rel', 'noopener');
    });
  });

  /**
   * VISUAL REGRESSION AND ACCESSIBILITY
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-link');
    stickerSheet.setChildren('Label');

    const sizes = Object.values(LINK_SIZES);
    const baseCombos: Record<string, string | undefined>[] = [
      { href: '#' },
      { href: '#', 'icon-name': ICON_PLACEHOLDER },
      { href: '#', disabled: '' },
      { href: '#', disabled: '', 'icon-name': ICON_PLACEHOLDER },
      { href: '#', inline: '' },
      { href: '#', inline: '', 'icon-name': ICON_PLACEHOLDER },
      { href: '#', inline: '', disabled: '' },
      { href: '#', inline: '', disabled: '', 'icon-name': ICON_PLACEHOLDER },
    ];

    const createVariants = async (baseAttrs: Record<string, string | undefined>, inline = false, inverted = false) => {
      const attrs: Record<string, string | undefined> = { ...baseAttrs };
      if (inline) attrs.inline = '';
      if (inverted) attrs.inverted = '';

      const filteredAttrs = Object.fromEntries(Object.entries(attrs).filter(([, v]) => v !== undefined)) as Record<
        string,
        string
      >;

      stickerSheet.setAttributes(filteredAttrs);

      await stickerSheet.createMarkupWithCombination(
        { size: sizes },
        inverted ? { rowWrapperStyle: INVERTED_BG_STYLE } : undefined,
      );
    };

    // First 8 rows: inverted = false, Next 8 rows: inverted = true
    let invertedPattern = false;
    const maxRows = 16;

    for (let i = 0; i < maxRows; i += 1) {
      const baseAttrs = baseCombos[i % baseCombos.length];
      await createVariants(baseAttrs, false, invertedPattern);
      if ((i + 1) % 8 === 0) {
        invertedPattern = !invertedPattern;
      }
    }

    await stickerSheet.mountStickerSheet();
    const container = stickerSheet.getWrapperContainer();

    await test.step('matches screenshot of link element', async () => {
      await componentsPage.page.mouse.move(0, 0);
      await componentsPage.visualRegression.takeScreenshot('mdc-link', { element: container });
    });

    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('link-default');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('mdc-link interactions', async () => {
    const link = await setup({ componentsPage, addPageFooter: true, href: 'https://www.webex.com' });
    let originalURL = '';

    await test.step('does not focus or activate when disabled', async () => {
      await componentsPage.setAttributes(link, { disabled: '' });
      await componentsPage.actionability.pressTab();
      await expect(link).not.toBeFocused();
      await componentsPage.removeAttribute(link, 'disabled');
    });

    await test.step('focus and navigate with Enter', async () => {
      await componentsPage.actionability.pressTab();
      await expect(link).toBeFocused();
      // Track the current URL before pressing Enter
      originalURL = componentsPage.page.url();
      await componentsPage.page.keyboard.press('Enter');
      await expect(componentsPage.page).toHaveURL('https://www.webex.com');
    });

    await test.step('navigate with mouse click', async () => {
      // Now, navigate back to the original page
      await componentsPage.page.goto(originalURL);
      await setup({ componentsPage, addPageFooter: true, href: 'https://www.webex.com' });

      await link.click();
      await expect(componentsPage.page).toHaveURL('https://www.webex.com');
    });

    await test.step('focus using JavaScript focus() method', async () => {
      await componentsPage.page.goto(originalURL);
      const focusableLink = await setup({ componentsPage, addPageFooter: true, href: '#content' });

      // Use JavaScript to focus the element
      await focusableLink.evaluate((el: HTMLElement) => el.focus());

      // Verify the element is focused
      await expect(focusableLink).toBeFocused();
    });
  });
});
