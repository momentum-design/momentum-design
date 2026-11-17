import { expect } from '@playwright/test';
import type { Locator } from '@playwright/test';

import { test } from '../../../config/playwright/setup';
import type { ComponentsPage } from '../../../config/playwright/setup';

const fixtureHTML = `
  <div id="fixed-overlay-fixture" class="mds-elevation" style="position: relative; width: 100%; height: 100%;">
    <style>
      #outer-trigger { position: absolute; inset-inline-start: 12rem; top: 7rem; }
      #outer-popover { --mdc-popover-width: 16rem; --mdc-popover-max-width: 16rem; }
      #fixture-content { padding-top: 2rem; }
      #tooltip-trigger { margin-inline-start: 7rem; }
      #nested-select { margin-top: 2rem; }
      #scroll-end { display: block; margin-top: 28rem; }
    </style>
    <mdc-button id="outer-trigger">Open settings</mdc-button>
    <mdc-popover id="outer-popover" triggerid="outer-trigger" placement="bottom-start"
      interactive size show-arrow close-button close-button-aria-label="Close settings"
      hide-on-escape focus-back-to-trigger aria-label="Example settings">
      <div id="fixture-content">
        <mdc-button id="tooltip-trigger">Details</mdc-button>
        <mdc-tooltip id="nested-tooltip" triggerid="tooltip-trigger" strategy="fixed"
          placement="right" boundary="#fixed-overlay-fixture" color="contrast" show-arrow delay="0,0">
          Full tooltip text outside the scrolling settings panel.
        </mdc-tooltip>
        <mdc-select id="nested-select" label="Example choice" placeholder="Choose an option"
          strategy="fixed" boundary="#fixed-overlay-fixture">
          <mdc-selectlistbox>
            <mdc-option value="first" label="First option"></mdc-option>
            <mdc-option value="second" label="Second option"></mdc-option>
            <mdc-option value="third" label="Third option"></mdc-option>
            <mdc-option value="last" label="Last option"></mdc-option>
          </mdc-selectlistbox>
        </mdc-select>
        <mdc-button id="scroll-end">End of settings</mdc-button>
      </div>
    </mdc-popover>
  </div>
`;

const setup = async (componentsPage: ComponentsPage, { sized = true, short = false, fixed = false } = {}) => {
  const { page } = componentsPage;
  await page.setViewportSize({ width: 1000, height: short ? 480 : 760 });
  await componentsPage.mount({ html: fixtureHTML, clearDocument: true });
  const parent = page.locator('#outer-popover');
  if (!sized) {
    await parent.evaluate(element => element.removeAttribute('size'));
    await page.locator('#scroll-end').evaluate((element: HTMLElement) => {
      const { style } = element;
      style.marginTop = '1rem';
    });
  }
  if (short) {
    await page.locator('#outer-trigger').evaluate((element: HTMLElement) => {
      const { style } = element;
      style.top = '27rem';
    });
    await page.locator('#nested-select').evaluate((element: HTMLElement) => {
      const { style } = element;
      style.marginTop = '12rem';
    });
  }
  if (fixed) await parent.evaluate(element => element.setAttribute('strategy', 'fixed'));
  await page.getByRole('button', { name: 'Open settings', exact: true }).click();
  await expect(parent).toBeVisible();
  return {
    parent,
    tooltip: page.locator('#nested-tooltip'),
    tooltipTrigger: page.getByRole('button', { name: 'Details', exact: true }),
    select: page.locator('#nested-select'),
    combobox: page.getByRole('combobox', { name: 'Example choice' }),
    listbox: page.getByRole('listbox'),
    dropdown: page.locator('#nested-select mdc-popover'),
    scrollContent: parent.locator('[part="popover-content"]').first(),
  };
};

const expectTooltipAnchored = async (tooltip: Locator, trigger: Locator, rtl = false) => {
  await expect(tooltip).toBeVisible();
  await expect(async () => {
    const tip = (await tooltip.boundingBox())!;
    const anchor = (await trigger.boundingBox())!;
    const gap = rtl ? anchor.x - tip.x - tip.width : tip.x - anchor.x - anchor.width;
    expect(gap).toBeGreaterThan(8);
    expect(gap).toBeLessThan(24);
    expect(Math.abs(tip.y + tip.height / 2 - anchor.y - anchor.height / 2)).toBeLessThan(2);
  }).toPass({ timeout: 5000 });
};

const expectSelectAnchored = async (dropdown: Locator, combobox: Locator, above = false, rtl = false) => {
  await expect(dropdown).toBeVisible();
  await expect(async () => {
    const list = (await dropdown.boundingBox())!;
    const anchor = (await combobox.boundingBox())!;
    const alignment = rtl ? list.x + list.width - anchor.x - anchor.width : list.x - anchor.x;
    expect(Math.abs(alignment)).toBeLessThan(2);
    const gap = above ? anchor.y - list.y - list.height : list.y - anchor.y - anchor.height;
    expect(gap).toBeGreaterThanOrEqual(3);
    expect(gap).toBeLessThan(6);
  }).toPass({ timeout: 5000 });
};

test.describe('mdc-popover nested fixed overlays', () => {
  test('should anchor a fixed tooltip inside an unsized filtered parent', async ({ componentsPage }) => {
    const { tooltip, tooltipTrigger } = await setup(componentsPage, { sized: false });
    await tooltipTrigger.hover();
    await expectTooltipAnchored(tooltip, tooltipTrigger);
  });

  test('should paint the complete fixed tooltip beyond scrolling content', async ({ componentsPage }) => {
    const { page } = componentsPage;
    const { parent, tooltip, tooltipTrigger, combobox, scrollContent } = await setup(componentsPage);
    await tooltipTrigger.hover();
    await expectTooltipAnchored(tooltip, tooltipTrigger);
    await componentsPage.visualRegression.takeScreenshot('mdc-popover-nested-fixed-tooltip', {
      assertionAfterSwitchingDirection: async () => {
        await tooltipTrigger.hover();
        const rtl = (await page.locator('html').getAttribute('dir')) === 'rtl';
        await expectTooltipAnchored(tooltip, tooltipTrigger, rtl);
      },
    });

    await tooltipTrigger.hover();
    await tooltipTrigger.focus();
    await page.keyboard.press('Escape');
    await expect(tooltip).not.toBeVisible();
    await expect(parent).toBeVisible();
    await expect(tooltipTrigger).toBeFocused();

    await page.mouse.move(0, 0);
    await combobox.focus();
    const beforeScroll = (await tooltipTrigger.boundingBox())!;
    await scrollContent.evaluate(element => element.scrollBy(0, 24));
    await page.keyboard.press('Shift+Tab');
    await expect(tooltipTrigger).toBeFocused();
    await expect(async () => {
      expect((await tooltipTrigger.boundingBox())!.y).toBeLessThan(beforeScroll.y);
    }).toPass({ timeout: 5000 });
    await expectTooltipAnchored(tooltip, tooltipTrigger);
    await componentsPage.visualRegression.takeScreenshot('mdc-popover-nested-fixed-tooltip-scrolled', {
      source: 'userflow',
      fileNameSuffix: 'scrolled',
    });
    await page.getByRole('button', { name: 'End of settings', exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole('button', { name: 'End of settings', exact: true })).toBeInViewport();
    await parent.getByRole('button', { name: 'Close settings', exact: true }).click();
    await expect(parent).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'Open settings', exact: true })).toBeFocused();
  });

  [false, true].forEach(short => {
    test(`should show and use the full fixed Select list in a ${short ? 'short' : 'normal'} viewport`, async ({
      componentsPage,
    }) => {
      const { page } = componentsPage;
      const { parent, select, combobox, listbox, dropdown, scrollContent, tooltip, tooltipTrigger } = await setup(
        componentsPage,
        {
          short,
          fixed: short,
        },
      );
      if (short) {
        await tooltipTrigger.hover();
        await expectTooltipAnchored(tooltip, tooltipTrigger);
        await componentsPage.visualRegression.takeScreenshot('mdc-popover-nested-fixed-tooltip-short', {
          source: 'userflow',
          fileNameSuffix: 'short',
        });
      }
      await combobox.click();
      await expectSelectAnchored(dropdown, combobox, short);
      await expect(listbox.getByRole('option', { name: 'First option', exact: true })).toBeInViewport();
      await expect(listbox.getByRole('option', { name: 'Last option', exact: true })).toBeInViewport();
      await componentsPage.visualRegression.takeScreenshot(
        `mdc-popover-nested-fixed-select-${short ? 'short' : 'normal'}`,
        {
          assertionAfterSwitchingDirection: async () => {
            const rtl = (await page.locator('html').getAttribute('dir')) === 'rtl';
            await expectSelectAnchored(dropdown, combobox, short, rtl);
          },
        },
      );
      await listbox.getByRole('option', { name: 'Last option', exact: true }).click();
      await expect(select).toHaveAttribute('value', 'last');
      await combobox.click();
      await listbox.getByRole('option', { name: 'First option', exact: true }).click();
      await expect(select).toHaveAttribute('value', 'first');

      await scrollContent.evaluate(element => element.scrollBy(0, 24));
      await combobox.click();
      await expectSelectAnchored(dropdown, combobox, short);
      await page.keyboard.press('Escape');
      await expect(listbox).not.toBeVisible();
      await expect(combobox).toBeFocused();
      await expect(parent).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(parent).not.toBeVisible();
      await expect(page.getByRole('button', { name: 'Open settings', exact: true })).toBeFocused();
    });
  });
});
