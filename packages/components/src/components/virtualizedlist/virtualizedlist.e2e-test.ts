/* eslint-disable no-await-in-loop */
import { expect, type Locator } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

import { DEFAULTS } from './virtualizedlist.constants';
import type { VirtualizedListE2E } from './helpers/virtualizedlist.e2e-test.utils';
import type VirtualizedList from './virtualizedlist.component';

test('mdc-virtualizedlist', async ({ componentsPage }) => {
  type SetupOptions = {
    loop?: true;
    revertList?: true;
    initialItemCount?: number;
    initialFocus?: number;
  };

  const setup = async ({ loop, revertList, initialItemCount, initialFocus }: SetupOptions = {}) => {
    await componentsPage.mount({
      html: `
        <div>
          <mdc-virtualizedlist-e2e
            ${loop ? 'loop' : ''}
            ${revertList ? 'revert-list' : ''}
            ${initialItemCount !== undefined ? `initial-item-count="${initialItemCount}"` : ''}
            ${initialFocus !== undefined ? `initial-focus="${initialFocus}"` : ''}
          ></mdc-virtualizedlist-e2e>
          <mdc-button>after</mdc-button>
        </div>
      `,
      clearDocument: true,
    });

    const wrapper = componentsPage.page.locator('mdc-virtualizedlist-e2e');
    await wrapper.waitFor({ state: 'attached' });

    const vlist = wrapper.locator('mdc-virtualizedlist');
    await vlist.waitFor({ state: 'attached' });

    return { wrapper, vlist };
  };

  const listItemLocator = (vlist: Locator, index: number) => vlist.locator(`mdc-listitem[data-index="${index}"]`);

  const scrollList = async (vlist: Locator, distance: number) => {
    await vlist.evaluate((vlistEl: VirtualizedList, scrollDistance: number) => {
      const scrollEl = vlistEl.shadowRoot?.querySelector('[part="scroll"]');

      if (scrollEl) {
        scrollEl.scrollTop += scrollDistance;
      }
    }, distance);
  };

  await test.step('renders with default attributes', async () => {
    const { vlist } = await setup();

    await expect(vlist).toHaveAttribute('at-bottom-threshold', DEFAULTS.IS_AT_BOTTOM_THRESHOLD.toString());
    await expect(vlist).toHaveAttribute('loop', DEFAULTS.LOOP);
    await expect(vlist).not.toHaveAttribute('scroll-anchoring');
  });

  await test.step('list populates correctly', async () => {
    const { wrapper, vlist } = await setup();

    await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
      for (let i = 0; i < 25; i += 1) {
        wrapperEl.addItem(`Message ${i}`);
      }
    });

    expect(await vlist.locator('mdc-listitem').count()).toBe(10);

    const firstItem = listItemLocator(vlist, 0);
    await expect(firstItem).toHaveAttribute('data-index', '0');
    await expect(firstItem).toHaveAttribute('aria-posinset', '1');
    await expect(firstItem).toHaveAttribute('aria-setsize', '25');

    const lastRenderedItem = listItemLocator(vlist, 9);
    await expect(lastRenderedItem).toHaveAttribute('data-index', '9');
    await expect(lastRenderedItem).toHaveAttribute('aria-posinset', '10');
    await expect(lastRenderedItem).toHaveAttribute('aria-setsize', '25');
  });

  await test.step('focus', async () => {
    await test.step('focused element remains in viewport after scroll and is focused again on tab', async () => {
      const { vlist } = await setup({ initialItemCount: 25 });

      await componentsPage.actionability.pressTab();
      await expect(listItemLocator(vlist, 0)).toBeFocused();

      await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [
        listItemLocator(vlist, 1),
        listItemLocator(vlist, 2),
        listItemLocator(vlist, 3),
      ]);

      await componentsPage.actionability.pressTab();
      await componentsPage.actionability.pressTab();
      await expect(componentsPage.page.getByText('after')).toBeFocused();

      await scrollList(vlist, 400);
      await expect(listItemLocator(vlist, 3)).toBeVisible();
      await expect(listItemLocator(vlist, 3)).not.toBeInViewport();

      await componentsPage.actionability.pressShiftTab();
      await expect(listItemLocator(vlist, 3)).toBeInViewport();
      await expect(listItemLocator(vlist, 3).locator('mdc-button')).toBeFocused();
    });

    await test.step('ArrowUp works correctly', async () => {
      const { vlist } = await setup({ initialItemCount: 25, initialFocus: 3 });

      await componentsPage.actionability.pressTab();
      await expect(listItemLocator(vlist, 3)).toBeFocused();

      await scrollList(vlist, 300);
      await expect(listItemLocator(vlist, 3)).toBeVisible();
      await expect(listItemLocator(vlist, 3)).toBeFocused();
      await expect(listItemLocator(vlist, 3)).not.toBeInViewport();

      await componentsPage.page.keyboard.press('ArrowUp');
      await expect(listItemLocator(vlist, 2)).toBeVisible();
      await expect(listItemLocator(vlist, 2)).toBeFocused();
      await expect(listItemLocator(vlist, 2)).toBeInViewport();
    });

    await test.step('ArrowDown works correctly', async () => {
      const { vlist } = await setup({ initialItemCount: 25, initialFocus: 3 });

      await componentsPage.actionability.pressTab();
      await expect(listItemLocator(vlist, 3)).toBeFocused();

      await scrollList(vlist, 300);
      await expect(listItemLocator(vlist, 3)).toBeVisible();
      await expect(listItemLocator(vlist, 3)).toBeFocused();
      await expect(listItemLocator(vlist, 3)).not.toBeInViewport();

      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(listItemLocator(vlist, 4)).toBeVisible();
      await expect(listItemLocator(vlist, 4)).toBeFocused();
      await expect(listItemLocator(vlist, 4)).toBeInViewport();
    });
  });

  await test.step('scrolling', async () => {});

  await test.step('attributes', async () => {
    await test.step('loop', async () => {
      await test.step('does not loop if loop = false', async () => {
        const { wrapper, vlist } = await setup();

        await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
          for (let i = 0; i < 25; i += 1) {
            wrapperEl.addItem(`Message ${i}`);
          }
        });

        await componentsPage.actionability.pressTab();
        await expect(listItemLocator(vlist, 0)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(listItemLocator(vlist, 0)).toBeFocused();

        await componentsPage.page.keyboard.press('End');
        await expect(listItemLocator(vlist, 24)).toBeVisible();
        await expect(listItemLocator(vlist, 24)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(listItemLocator(vlist, 24)).toBeFocused();
      });

      await test.step('does loop if loop = true', async () => {
        const { wrapper, vlist } = await setup({ loop: true });

        await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
          for (let i = 0; i < 25; i += 1) {
            wrapperEl.addItem(`Message ${i}`);
          }
        });

        await componentsPage.actionability.pressTab();
        await expect(listItemLocator(vlist, 0)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(listItemLocator(vlist, 24)).toBeVisible();
        await expect(listItemLocator(vlist, 24)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(listItemLocator(vlist, 0)).toBeVisible();
        await expect(listItemLocator(vlist, 0)).toBeFocused();
      });
    });

    await test.step('initial-focus', async () => {
      await test.step('set focus when element is in the DOM', async () => {
        const { vlist } = await setup({ initialItemCount: 25, initialFocus: 1 });

        await componentsPage.actionability.pressTab();
        await expect(listItemLocator(vlist, 1)).toBeFocused();
      });

      await test.step('set focus when element is not in the DOM', async () => {
        const { vlist } = await setup({ initialItemCount: 100, initialFocus: 50 });

        await componentsPage.actionability.pressTab();
        await expect(listItemLocator(vlist, 50)).toBeFocused();
        await expect(listItemLocator(vlist, 50)).toBeVisible();
        await expect(listItemLocator(vlist, 50)).toBeInViewport();
      });
    });

    await test.step('revert-list', async () => {
      const { wrapper } = await setup({ revertList: true });

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.addItem(`Message 1`);
      });

      await componentsPage.visualRegression.takeScreenshot('mdc-virtualizedlist-revert-list-1', {
        element: wrapper,
      });

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        for (let i = 2; i <= 5; i += 1) {
          wrapperEl.addItem(`Message ${i}`);
        }
      });

      await componentsPage.visualRegression.takeScreenshot('mdc-virtualizedlist-revert-list-5', {
        element: wrapper,
      });
    });
  });
});
