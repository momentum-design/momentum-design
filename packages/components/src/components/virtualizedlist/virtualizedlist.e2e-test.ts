/* eslint-disable no-await-in-loop */
import { expect, type Locator } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

import { DEFAULTS } from './virtualizedlist.constants';
import type { VirtualizedListE2E } from './helpers/virtualizedlist.e2e-test.utils';
import type VirtualizedList from './virtualizedlist.component';

test('mdc-virtualizedlist', async ({ componentsPage }) => {
  type SetupOptions = {
    listHeader?: string;
    loop?: true;
    revertList?: true;
    initialItemCount?: number;
    initialFocus?: number;
    observeSizeChanges?: true;
    scrollAnchoring?: true;
    withTooltip?: true;
  };

  const setup = async ({
    listHeader,
    loop,
    revertList,
    initialItemCount,
    initialFocus,
    observeSizeChanges,
    scrollAnchoring,
    withTooltip,
  }: SetupOptions = {}) => {
    await componentsPage.mount({
      html: `
        <div>
          <mdc-virtualizedlist-e2e
            ${loop ? 'loop' : ''}
            ${revertList ? 'revert-list' : ''}
            ${initialItemCount !== undefined ? `initial-item-count="${initialItemCount}"` : ''}
            ${initialFocus !== undefined ? `initial-focus="${initialFocus}"` : ''}
            ${observeSizeChanges ? 'observe-size-changes' : ''}
            ${scrollAnchoring ? 'scroll-anchoring' : ''}
            ${listHeader ? `list-header="${listHeader}"` : ''}
            ${withTooltip ? 'with-tooltip' : ''}
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

  const calculateExpectedClientRectBottom = (height: number) => height - 1 - 5; // 1px for border and 5px (=0.3125rem) for padding

  await test.step('renders with default attributes', async () => {
    const { vlist } = await setup();

    await expect(vlist).toHaveAttribute('at-bottom-threshold', DEFAULTS.IS_AT_BOTTOM_THRESHOLD.toString());
    await expect(vlist).toHaveAttribute('loop', DEFAULTS.LOOP);
    await expect(vlist).not.toHaveAttribute('scroll-anchoring');
    await expect(vlist).not.toHaveAttribute('revert-list');
    await expect(vlist).not.toHaveAttribute('observe-size-changes');
  });

  await test.step('visual regression', async () => {
    await test.step('renders correctly with list header', async () => {
      const { wrapper, vlist } = await setup({ listHeader: 'Header Text' });

      await componentsPage.visualRegression.takeScreenshot(`mdc-virtualizedlist-listheader`, {
        element: vlist,
      });

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        for (let i = 0; i < 25; i += 1) {
          wrapperEl.addItem(`Message ${i}`);
        }
      });

      await scrollList(vlist, 180);

      await componentsPage.visualRegression.takeScreenshot(`mdc-virtualizedlist-listheader-scrolled`, {
        element: vlist,
      });
    });

    await test.step('popovers should render correctly when defined inside the listitems', async () => {
      const { vlist } = await setup({ initialItemCount: 25, initialFocus: 24, withTooltip: true });

      await expect(listItemLocator(vlist, 24)).toBeVisible();
      await expect(listItemLocator(vlist, 24)).toBeInViewport();

      await componentsPage.actionability.pressTab();
      await componentsPage.actionability.pressTab();

      await expect(listItemLocator(vlist, 24).locator('mdc-button')).toBeFocused();
      await expect(listItemLocator(vlist, 24).locator('mdc-tooltip')).toBeVisible();

      await componentsPage.visualRegression.takeScreenshot(`mdc-virtualizedlist-with-tooltip`, {
        element: vlist,
      });
    });

    await test.step('renders listitem focus ring correctly', async () => {
      const { vlist } = await setup({ initialItemCount: 25 });

      await componentsPage.actionability.pressTab();
      await expect(listItemLocator(vlist, 0)).toBeFocused();

      await componentsPage.visualRegression.takeScreenshot(`mdc-virtualizedlist-first-listitem-focus-ring`, {
        element: vlist,
      });

      await componentsPage.page.keyboard.press('End');
      await expect(listItemLocator(vlist, 24)).toBeFocused();
      await expect(listItemLocator(vlist, 24)).toBeInViewport();

      await componentsPage.visualRegression.takeScreenshot(`mdc-virtualizedlist-last-listitem-focus-ring`, {
        element: vlist,
      });
    });

    await test.step('renders revert-list listitem focus ring correctly', async () => {
      const { vlist } = await setup({ revertList: true, initialItemCount: 1 });

      await componentsPage.actionability.pressTab();
      await expect(listItemLocator(vlist, 0)).toBeFocused();

      await componentsPage.visualRegression.takeScreenshot(`mdc-virtualizedlist-revertlist-first-listitem-focus-ring`, {
        element: vlist,
      });
    });
  });

  await test.step('list populates correctly', async () => {
    const { wrapper, vlist } = await setup();

    await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
      for (let i = 0; i < 25; i += 1) {
        wrapperEl.addItem(`Message ${i}`);
      }
    });

    // Flag test
    // This is fails, the height of the listitems has been updated
    expect(await listItemLocator(vlist, 0).evaluate(el => getComputedStyle(el).height)).toBe('40px');

    // 300px / 40px = 7.5 -> 8 items + 1 overflow
    expect(await vlist.locator('mdc-listitem').count()).toBe(9);

    const firstItem = listItemLocator(vlist, 0);
    await expect(firstItem).toHaveAttribute('data-index', '0');
    await expect(firstItem).toHaveAttribute('aria-posinset', '1');
    await expect(firstItem).toHaveAttribute('aria-setsize', '25');

    const lastRenderedItem = listItemLocator(vlist, 8);
    await expect(lastRenderedItem).toHaveAttribute('data-index', '8');
    await expect(lastRenderedItem).toHaveAttribute('aria-posinset', '9');
    await expect(lastRenderedItem).toHaveAttribute('aria-setsize', '25');

    await componentsPage.actionability.pressTab();
    await expect(firstItem).toBeFocused();
  });

  await test.step('keyboard', async () => {
    const { vlist } = await setup({ initialItemCount: 20 });

    await componentsPage.page.keyboard.press('Tab');
    await expect(listItemLocator(vlist, 0)).toBeFocused();

    // Navigate far enough down the list to check scrolling
    for (let i = 1; i <= 15; i += 1) {
      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(listItemLocator(vlist, i)).toBeFocused();
      await expect(listItemLocator(vlist, i)).toBeInViewport();
    }

    for (let i = 14; i >= 5; i -= 1) {
      await componentsPage.page.keyboard.press('ArrowUp');
      await expect(listItemLocator(vlist, i)).toBeFocused();
      await expect(listItemLocator(vlist, i)).toBeInViewport();
    }

    await componentsPage.page.keyboard.press('End');
    await expect(listItemLocator(vlist, 19)).toBeFocused();
    await expect(listItemLocator(vlist, 19)).toBeInViewport();

    await componentsPage.page.keyboard.press('Home');
    await expect(listItemLocator(vlist, 0)).toBeFocused();
    await expect(listItemLocator(vlist, 0)).toBeInViewport();
  });

  await test.step('focus', async () => {
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

    const testcases = [
      { visible: true, focused: true },
      { visible: true, focused: false },
      { visible: false, focused: true },
      { visible: false, focused: false },
    ];
    for (const { visible, focused } of testcases) {
      await test.step(`active item removed (visible=${visible}, focused=${focused})`, async () => {
        const { wrapper, vlist } = await setup({ initialItemCount: 50, initialFocus: 1 });

        await componentsPage.actionability.pressTab();
        await expect(listItemLocator(vlist, 1)).toBeFocused();

        if (!focused) {
          await componentsPage.actionability.pressTab();
          await componentsPage.actionability.pressTab();
          await expect(componentsPage.page.getByText('after')).toBeFocused();
        }

        if (!visible) {
          await scrollList(vlist, 400);
        }

        await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
          wrapperEl.removeIndex(1);
        });

        if (!focused) {
          await componentsPage.actionability.pressShiftTab();
          await componentsPage.actionability.pressShiftTab();
        } else if (!visible) {
          // Tab to button in listitem and then back to the listitem itself
          await componentsPage.actionability.pressTab();
          await componentsPage.actionability.pressShiftTab();
        }

        // Focus should keep at index 1
        await expect(listItemLocator(vlist, 1)).toBeVisible();
        await expect(listItemLocator(vlist, 1)).toBeInViewport();
        await expect(listItemLocator(vlist, 1)).toBeFocused();
      });
    }
  });

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

        // The initial focus should be visible and in the viewport before tabbing to the list
        await expect(listItemLocator(vlist, 50)).toBeVisible();
        await expect(listItemLocator(vlist, 50)).toBeInViewport();
        await componentsPage.actionability.pressTab();
        await expect(listItemLocator(vlist, 50)).toBeFocused();
      });

      await test.step('initial focus should still be focusable after scrolling before tabbing to the list', async () => {
        const { vlist } = await setup({ initialItemCount: 100, initialFocus: 50 });

        await scrollList(vlist, -1000);
        await expect(listItemLocator(vlist, 50)).toBeVisible();
        await expect(listItemLocator(vlist, 50)).not.toBeInViewport();
        await componentsPage.actionability.pressTab();
        await expect(listItemLocator(vlist, 50)).toBeFocused();
      });
    });

    await test.step('revert-list', async () => {
      const { wrapper, vlist } = await setup({ revertList: true });

      await test.step('new items are rendered at the bottom', async () => {
        await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
          wrapperEl.addItem(`Message 1`);
        });

        expect(await listItemLocator(vlist, 0).evaluate(el => el.getBoundingClientRect().bottom)).toBe(
          calculateExpectedClientRectBottom(300),
        );
      });

      /* eslint-disable no-param-reassign */
      await test.step('resizing the list keeps the bottom item in view', async () => {
        await vlist.evaluate((vlistEl: VirtualizedList) => {
          vlistEl.style.height = '200px';
        });

        await expect(async () => {
          expect(await listItemLocator(vlist, 0).evaluate(el => el.getBoundingClientRect().bottom)).toBe(
            calculateExpectedClientRectBottom(200),
          );
        }).toPass();

        await vlist.evaluate((vlistEl: VirtualizedList) => {
          vlistEl.style.height = '400px';
        });

        await expect(async () => {
          expect(await listItemLocator(vlist, 0).evaluate(el => el.getBoundingClientRect().bottom)).toBe(
            calculateExpectedClientRectBottom(400),
          );
        }).toPass();

        await vlist.evaluate((vlistEl: VirtualizedList) => {
          vlistEl.style.height = '';
        });

        await expect(async () => {
          expect(await listItemLocator(vlist, 0).evaluate(el => el.getBoundingClientRect().bottom)).toBe(
            calculateExpectedClientRectBottom(300),
          );
        }).toPass();
      });
      /* eslint-enable no-param-reassign */

      await test.step('added items appear below existing items and is still at the bottom', async () => {
        for (let i = 2; i <= 5; i += 1) {
          await wrapper.evaluate((wrapperEl: VirtualizedListE2E, index) => {
            wrapperEl.addItem(`Message ${index}`);
          }, i);
        }

        expect(await listItemLocator(vlist, 4).evaluate(el => el.getBoundingClientRect().bottom)).toBe(
          calculateExpectedClientRectBottom(300),
        );
      });

      await test.step('normal scrolling starts after enough items to fill the viewport', async () => {
        for (let i = 6; i <= 10; i += 1) {
          await wrapper.evaluate((wrapperEl: VirtualizedListE2E, index) => {
            wrapperEl.addItem(`Message ${index}`);
          }, i);
        }

        // 1px for the border + 5px for padding
        expect(await listItemLocator(vlist, 0).evaluate(el => el.getBoundingClientRect().top)).toBe(6);
        expect(await listItemLocator(vlist, 8).evaluate(el => el.getBoundingClientRect().top)).toBeGreaterThan(
          calculateExpectedClientRectBottom(300),
        );
      });
    });

    await test.step('observe-size-changes', async () => {
      const { wrapper, vlist } = await setup({ initialItemCount: 5, observeSizeChanges: true });

      const wrapperHeight = await vlist.evaluate(
        (vlistEl: VirtualizedList) =>
          vlistEl.shadowRoot?.querySelector<HTMLDivElement>('[part="wrapper"]')?.style?.height,
      );

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        const updateId = wrapperEl.getItems()[2].id;
        wrapperEl.updateItem(updateId, { size: 500 });
      });

      await expect(listItemLocator(vlist, 4)).not.toBeVisible();
      await scrollList(vlist, 700);
      await expect(listItemLocator(vlist, 4)).toBeVisible();

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        const updateId = wrapperEl.getItems()[2].id;
        wrapperEl.updateItem(updateId, { size: 40 });
      });

      await expect(listItemLocator(vlist, 0)).toBeVisible();

      await expect(async () => {
        expect(
          await vlist.evaluate(
            (vlistEl: VirtualizedList) =>
              vlistEl.shadowRoot?.querySelector<HTMLDivElement>('[part="wrapper"]')?.style?.height,
          ),
        ).toBe(wrapperHeight);
      }).toPass();
    });
  });

  await test.step('scroll anchoring', async () => {
    const getTopPositionOfItem = (locator: Locator) => locator.evaluate(el => el.getBoundingClientRect().top);

    await test.step('observe-size-changes = false', async () => {
      const { wrapper, vlist } = await setup({ scrollAnchoring: true, initialItemCount: 100, initialFocus: 50 });

      await componentsPage.actionability.pressTab();
      await expect(listItemLocator(vlist, 50)).toBeFocused();

      const initialTopPosition = await getTopPositionOfItem(listItemLocator(vlist, 50));

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.addItem('New Message after Focused Item', 51);
      });
      expect(await getTopPositionOfItem(listItemLocator(vlist, 50))).toBe(initialTopPosition);

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.addItem('New Message before Focused Item', 50);
      });
      expect(await getTopPositionOfItem(listItemLocator(vlist, 51))).toBe(initialTopPosition);

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.removeIndex(52);
      });
      expect(await getTopPositionOfItem(listItemLocator(vlist, 51))).toBe(initialTopPosition);

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.removeIndex(50);
      });
      expect(await getTopPositionOfItem(listItemLocator(vlist, 50))).toBe(initialTopPosition);

      await componentsPage.page.keyboard.press('End');
      await expect(listItemLocator(vlist, 99)).toBeFocused();

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.addItem('New Message at Bottom');
      });

      expect(await listItemLocator(vlist, 100).evaluate(el => el.getBoundingClientRect().bottom)).toBe(
        calculateExpectedClientRectBottom(300),
      );
    });

    await test.step('observe-size-changes = true', async () => {
      const { wrapper, vlist } = await setup({
        scrollAnchoring: true,
        initialItemCount: 100,
        initialFocus: 50,
        observeSizeChanges: true,
      });

      await componentsPage.actionability.pressTab();

      const initialTopPosition = await getTopPositionOfItem(listItemLocator(vlist, 50));
      await componentsPage.visualRegression.takeScreenshot('mdc-virtualizedlist-scroll-anchoring-initial', {
        element: vlist,
      });

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.addItem('New Message after Focused Item', 51);
      });
      await expect(listItemLocator(vlist, 51)).toContainText('New Message after Focused Item');
      expect(await getTopPositionOfItem(listItemLocator(vlist, 50))).toBe(initialTopPosition);

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.addItem('New Message before Focused Item', 50);
      });
      await expect(listItemLocator(vlist, 50)).toContainText('New Message before Focused Item');
      expect(await getTopPositionOfItem(listItemLocator(vlist, 51))).toBe(initialTopPosition);

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.removeIndex(52);
      });
      await expect(listItemLocator(vlist, 52)).toContainText('Initial Message 51');
      expect(await getTopPositionOfItem(listItemLocator(vlist, 51))).toBe(initialTopPosition);

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E) => {
        wrapperEl.removeIndex(50);
      });
      await expect(listItemLocator(vlist, 50)).toContainText('Initial Message 50');
      expect(await getTopPositionOfItem(listItemLocator(vlist, 50))).toBe(initialTopPosition);

      await componentsPage.page.keyboard.press('End');
      await expect(listItemLocator(vlist, 99)).toBeFocused();

      await componentsPage.actionability.pressTab();
      await componentsPage.actionability.pressTab();
      await expect(componentsPage.page.getByText('after')).toBeFocused();

      const bottomMessage = await wrapper.evaluate((wrapperEl: VirtualizedListE2E) =>
        wrapperEl.addItem('New Message at Bottom'),
      );

      await expect(async () => {
        expect(await listItemLocator(vlist, 100).evaluate(el => el.getBoundingClientRect().bottom)).toBe(
          calculateExpectedClientRectBottom(300),
        );
      }).toPass();

      await wrapper.evaluate((wrapperEl: VirtualizedListE2E, updateId: string) => {
        wrapperEl.updateItem(updateId, { size: 200 });
      }, bottomMessage.id);

      await expect(async () => {
        expect(await listItemLocator(vlist, 100).evaluate(el => el.getBoundingClientRect().bottom)).toBe(
          calculateExpectedClientRectBottom(300),
        );
      }).toPass();
    });
  });
});
