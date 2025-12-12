/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  disabled?: boolean;
  inline?: boolean;
  inverted?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  addPageFooter?: boolean;
};

const INVERTED_BG_STYLE = 'background-color: var(--mds-color-theme-inverted-background-normal);';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...rest } = args;

  const html = `
    ${rest.addPageFooter ? '<div id="wrapper">' : ''}
    <mdc-linksimple
      ${rest.disabled ? 'disabled' : ''}
      ${rest.inline ? 'inline' : ''}
      ${rest.inverted ? 'inverted' : ''}
      ${rest.href ? `href="${rest.href}"` : ''}
      ${rest.target ? `target="${rest.target}"` : ''}
      ${rest.rel ? `rel="${rest.rel}"` : ''}
    >Label</mdc-linksimple>
    ${rest.addPageFooter ? '<div id="content"><p>Test content</p></div></div>' : ''}
  `;

  await componentsPage.mount({ html, clearDocument: true });

  const link = componentsPage.page.locator('mdc-linksimple').first();
  await link.waitFor();
  return link;
};

test.use({ viewport: { width: 400, height: 800 } });

test('mdc-linksimple', async ({ componentsPage }) => {
  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const link = await setup({ componentsPage });

    await test.step('default attributes', async () => {
      await expect(link).not.toHaveAttribute('disabled');
      await expect(link).not.toHaveAttribute('inline');
      await expect(link).not.toHaveAttribute('inverted');
    });

    const attributeTests: [string, Record<string, string | ''>][] = [
      ['disabled', { disabled: '' }],
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
  await test.step('visual-regression and accessibility', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-linksimple');
    stickerSheet.setChildren('Label');

    // without inverted background
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ href: '#', disabled: '' });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ href: '#', inline: '' });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ href: '#', disabled: '', inline: '' });
    await stickerSheet.createMarkupWithCombination({});

    // with inverted background
    stickerSheet.setAttributes({ href: '#', inverted: '', style: INVERTED_BG_STYLE });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ href: '#', disabled: '', inverted: '', style: INVERTED_BG_STYLE });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ href: '#', inline: '', inverted: '', style: INVERTED_BG_STYLE });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ href: '#', disabled: '', inline: '', inverted: '', style: INVERTED_BG_STYLE });
    await stickerSheet.createMarkupWithCombination({});

    await stickerSheet.mountStickerSheet();
    const container = stickerSheet.getWrapperContainer();

    await test.step('matches screenshot of link element', async () => {
      await componentsPage.page.mouse.move(0, 0);
      await componentsPage.visualRegression.takeScreenshot('mdc-linksimple', {
        element: container,
      });
    });

    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('linksimple-default');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('mdc-linksimple interactions', async () => {
    const linksimple = await setup({ componentsPage, addPageFooter: true, href: 'https://www.webex.com' });
    let originalURL = '';

    await test.step('does not focus or activate when disabled', async () => {
      await componentsPage.setAttributes(linksimple, { disabled: '' });
      await componentsPage.actionability.pressTab();
      await expect(linksimple).not.toBeFocused();
      await componentsPage.removeAttribute(linksimple, 'disabled');
    });

    await test.step('focus and navigate with Enter', async () => {
      await componentsPage.actionability.pressTab();
      await expect(linksimple).toBeFocused();
      // Track the current URL before pressing Enter
      originalURL = componentsPage.page.url();
      await componentsPage.page.keyboard.press('Enter');
      await expect(componentsPage.page).toHaveURL('https://www.webex.com');
    });

    await test.step('navigate with mouse click', async () => {
      // Now, navigate back to the original page
      await componentsPage.page.goto(originalURL);
      await setup({ componentsPage, addPageFooter: true, href: 'https://www.webex.com' });

      await linksimple.click();
      await expect(componentsPage.page).toHaveURL('https://www.webex.com');
    });

    await test.step('focus using JavaScript focus() method', async () => {
      await componentsPage.page.goto(originalURL);
      const focusableLinksimple = await setup({ componentsPage, addPageFooter: true, href: '#content' });

      // Use JavaScript to focus the element
      await focusableLinksimple.evaluate((el: HTMLElement) => el.focus());

      // Verify the internal anchor element is focused (delegatesFocus delegates to shadow DOM)
      const isFocused = await focusableLinksimple.evaluate(el => {
        const { shadowRoot } = el;
        if (!shadowRoot) return false;
        const anchor = shadowRoot.querySelector('a');
        return document.activeElement === el && anchor === shadowRoot.activeElement;
      });

      expect(isFocused).toBe(true);
    });
  });
});
