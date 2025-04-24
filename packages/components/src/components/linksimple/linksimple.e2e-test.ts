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
  await test.step('attributes and interactions', async () => {
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

    await test.step('keyboard interactions', async () => {
      const footerLink = await setup({ componentsPage, addPageFooter: true });

      await test.step('does not focus or activate when disabled', async () => {
        await componentsPage.setAttributes(footerLink, { disabled: '' });
        await componentsPage.actionability.pressTab();
        await expect(footerLink).not.toBeFocused();
      });

      await test.step('focus and navigate with Enter', async () => {
        await componentsPage.removeAttribute(footerLink, 'disabled');
        await componentsPage.actionability.pressTab();
        await expect(footerLink).toBeFocused();

        await componentsPage.page.keyboard.press('Enter');
        await expect(componentsPage.page.locator('#content')).toBeVisible();
      });

      await test.step('navigate with mouse click', async () => {
        await footerLink.click();
        await expect(footerLink).toBeFocused();
        await expect(componentsPage.page.locator('#content')).toBeVisible();
      });
    });
  });

  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-linksimple');
    stickerSheet.setChildren('Label');

    // without inverted background
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ disabled: '' });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ inline: '' });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ disabled: '', inline: '' });
    await stickerSheet.createMarkupWithCombination({});

    // with inverted background
    stickerSheet.setAttributes({ inverted: '', style: INVERTED_BG_STYLE });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ disabled: '', inverted: '', style: INVERTED_BG_STYLE });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ inline: '', inverted: '', style: INVERTED_BG_STYLE });
    await stickerSheet.createMarkupWithCombination({});
    stickerSheet.setAttributes({ disabled: '', inline: '', inverted: '', style: INVERTED_BG_STYLE });
    await stickerSheet.createMarkupWithCombination({});

    await stickerSheet.mountStickerSheet();
    const container = stickerSheet.getWrapperContainer();

    await test.step('matches screenshot of link element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-linksimple', {
        element: container,
      });
    });
  });

  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('linksimple-default');
  });
});
