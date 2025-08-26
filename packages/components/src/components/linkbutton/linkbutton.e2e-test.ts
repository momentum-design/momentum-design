/* eslint-disable no-restricted-syntax */

/* eslint-disable no-await-in-loop */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { LINKBUTTON_SIZES } from './linkbutton.constants';
import { getIconSize } from './linkbutton.utils';
import type { LinkButtonSize } from './linkbutton.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  children?: string;
  'icon-name'?: string;
  inline?: boolean;
  inverted?: boolean;
  disabled?: boolean;
  'soft-disabled'?: boolean;
  autofocus?: boolean;
  size?: string;
  'aria-label'?: string;
  addPageFooter?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  const html = `
    ${restArgs.addPageFooter ? '<div id="wrapper">' : ''}
    <mdc-linkbutton
      ${restArgs['icon-name'] ? `icon-name="${restArgs['icon-name']}"` : ''}
      ${restArgs.inline ? 'inline' : ''}
      ${restArgs.inverted ? 'inverted' : ''}
      ${restArgs.disabled ? 'disabled' : ''}
      ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}
      ${restArgs.autofocus ? 'auto-focus-on-mount' : ''}
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
      ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
    >
      ${restArgs.children ?? 'LinkButton'}
    </mdc-linkbutton>
    ${restArgs.addPageFooter ? '<div id="content" tabindex="0"><p>Test content</p></div></div>' : ''}
  `;

  await componentsPage.mount({ html, clearDocument: true });

  const linkbutton = componentsPage.page.locator('mdc-linkbutton').first();
  await linkbutton.waitFor();
  return linkbutton;
};

test.describe('LinkButton Feature Scenarios', () => {
  test('mdc-linkbutton', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const stickerSheet = new StickerSheet(componentsPage, 'mdc-linkbutton');
      stickerSheet.setChildren('LinkButton');

      const baseCombos: Record<string, string | undefined>[] = [
        {},
        { 'icon-name': 'placeholder-bold' },
        { disabled: '' },
        { disabled: '', 'icon-name': 'placeholder-bold' },
        { inline: '' },
        { inline: '', 'icon-name': 'placeholder-bold' },
        { inline: '', disabled: '' },
        { inline: '', disabled: '', 'icon-name': 'placeholder-bold' },
      ];

      const createVariants = async (
        baseAttrs: Record<string, string | undefined>,
        inline = false,
        inverted = false,
      ) => {
        const attrs: Record<string, string> = {};

        for (const [key, val] of Object.entries(baseAttrs)) {
          if (val !== undefined) {
            attrs[key] = val;
          }
        }

        if (inline) attrs.inline = '';
        if (inverted) attrs.inverted = '';

        stickerSheet.setAttributes(attrs);

        await stickerSheet.createMarkupWithCombination(
          { size: LINKBUTTON_SIZES },
          inverted
            ? { rowWrapperStyle: 'background-color: var(--mds-color-theme-inverted-background-normal);' }
            : undefined,
        );
      };

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

      await test.step('matches screenshot of linkbutton element', async () => {
        await componentsPage.page.mouse.move(0, 0);
        await componentsPage.visualRegression.takeScreenshot('mdc-linkbutton', { element: container });
      });

      await test.step('accessibility', async () => {
        await componentsPage.accessibility.checkForA11yViolations('linkbutton-default');
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await setup({ componentsPage });
      await componentsPage.accessibility.checkForA11yViolations('linkbutton-default');
    });

    /**
     * RENDERING AND VISUAL STATES
     */
    await test.step('rendering and visual states', async () => {
      await test.step('render linkbutton with children slot only', async () => {
        const linkbutton = await setup({ componentsPage, children: 'LinkButton' });
        await expect(linkbutton).toContainText('LinkButton');
      });

      await test.step('render linkbutton with icon-name attribute', async () => {
        const iconName = 'placeholder-bold';
        await setup({ componentsPage, 'icon-name': iconName });
        const icon = componentsPage.page.locator(`mdc-icon[name="${iconName}"]`);
        await expect(icon).toBeVisible();
        await expect(icon).toHaveAttribute('name', iconName);
        await expect(icon).toHaveAttribute('size', '1');
      });

      await test.step('render linkbutton with different sizes', async () => {
        const sizes = Object.values(LINKBUTTON_SIZES);
        await Promise.all(
          sizes.map(async size => {
            await setup({ componentsPage, 'icon-name': 'placeholder-bold', size: `${size}` });
            const icon = componentsPage.page.locator('mdc-icon[name="placeholder-bold"]');
            await expect(icon).toBeVisible();
            const expectedIconSize = getIconSize(String(size) as unknown as LinkButtonSize);
            await expect(icon).toHaveAttribute('size', expectedIconSize.toString());
          }),
        );
      });

      await test.step('render linkbutton with inline and block layout', async () => {
        const inlineBtn = await setup({ componentsPage, inline: true });
        await expect(inlineBtn).toHaveAttribute('inline', '');
        const blockBtn = await setup({ componentsPage, inline: false });
        await expect(blockBtn).not.toHaveAttribute('inline');
      });

      await test.step('render linkbutton with inverted color', async () => {
        const linkbutton = await setup({ componentsPage, inverted: true });
        await expect(linkbutton).toHaveAttribute('inverted', '');
      });

      await test.step('render disabled linkbutton', async () => {
        const linkbutton = await setup({ componentsPage, disabled: true });
        await expect(linkbutton).toHaveAttribute('disabled', '');
        await expect(linkbutton).toHaveAttribute('aria-disabled', 'true');
        await expect(await linkbutton.getAttribute('tabindex')).not.toBe('0');
      });

      await test.step('render soft-disabled linkbutton', async () => {
        const linkbutton = await setup({ componentsPage, 'soft-disabled': true });
        await expect(linkbutton).toHaveAttribute('soft-disabled', '');
        await expect(linkbutton).toHaveAttribute('aria-disabled', 'true');
        await expect(linkbutton).toHaveAttribute('tabindex', '0');
      });

      await test.step('render linkbutton with auto-focus-on-mount', async () => {
        const linkbutton = await setup({ componentsPage, autofocus: true });
        await expect(linkbutton).toHaveAttribute('auto-focus-on-mount', '');
      });
    });

    /**
     * MOUSE INTERACTIONS
     */
    await test.step('mouse interactions', async () => {
      await test.step('click on normal linkbutton triggers event', async () => {
        const linkbutton = await setup({ componentsPage });
        const clickPromise = componentsPage.waitForEvent(linkbutton, 'click');
        await linkbutton.click();
        await clickPromise;
      });

      await test.step('click on disabled linkbutton does nothing', async () => {
        const linkbutton = await setup({ componentsPage, disabled: true });
        await expect(linkbutton).toHaveAttribute('disabled', '');
        await expect(await linkbutton.getAttribute('tabindex')).not.toBe('0');
      });
    });

    /**
     * KEYBOARD INTERACTIONS
     */
    await test.step('keyboard interactions', async () => {
      await test.step('focus and blur events', async () => {
        const linkbutton = await setup({ componentsPage, addPageFooter: true });
        await componentsPage.actionability.pressTab();
        await expect(linkbutton).toBeFocused();
        // Tab to next element to naturally trigger blur
        await componentsPage.actionability.pressTab();
        await expect(linkbutton).not.toBeFocused();
      });

      await test.step('focus linkbutton using Tab navigation', async () => {
        const linkbutton = await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await expect(linkbutton).toBeFocused();
      });

      await test.step('activate linkbutton using Enter key', async () => {
        const linkbutton = await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        const clickPromise = componentsPage.waitForEvent(linkbutton, 'click');
        await linkbutton.press('Enter');
        await clickPromise;
      });

      await test.step('activate linkbutton using Space key', async () => {
        const linkbutton = await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        const clickPromise = componentsPage.waitForEvent(linkbutton, 'click');
        await linkbutton.press('Space');
        await clickPromise;
      });

      await test.step('disabled linkbutton keyboard behavior', async () => {
        const linkbutton = await setup({ componentsPage, disabled: true });
        await expect(await linkbutton.getAttribute('tabindex')).not.toBe('0');
      });

      await test.step('soft-disabled linkbutton keyboard behavior', async () => {
        const linkbutton = await setup({ componentsPage, 'soft-disabled': true });
        await expect(linkbutton).toHaveAttribute('soft-disabled', '');
        await expect(linkbutton).toHaveAttribute('aria-disabled', 'true');
        await expect(linkbutton).toHaveAttribute('tabindex', '0');
        await componentsPage.actionability.pressTab();
        await expect(linkbutton).toBeFocused();
      });
    });

    /**
     * ARIA AND ACCESSIBILITY
     */
    await test.step('ARIA and accessibility', async () => {
      await test.step('default ARIA attributes', async () => {
        const linkbutton = await setup({ componentsPage });
        await expect(linkbutton).toHaveAttribute('role', 'button');
        await expect(linkbutton).toHaveAttribute('tabindex', '0');
        await expect(linkbutton).toHaveAttribute('size', '16');
      });

      await test.step('disabled state ARIA attributes', async () => {
        const linkbutton = await setup({ componentsPage, disabled: true });
        await expect(linkbutton).toHaveAttribute('aria-disabled', 'true');
        await expect(await linkbutton.getAttribute('tabindex')).not.toBe('0');
      });

      await test.step('soft-disabled state ARIA attributes', async () => {
        const linkbutton = await setup({ componentsPage, 'soft-disabled': true });
        await expect(linkbutton).toHaveAttribute('aria-disabled', 'true');
        await expect(linkbutton).toHaveAttribute('tabindex', '0');
      });

      await test.step('render linkbutton with aria-label', async () => {
        const linkbutton = await setup({ componentsPage, 'aria-label': 'Accessible label' });
        await expect(linkbutton).toHaveAttribute('aria-label', 'Accessible label');
      });
    });
  });
});
