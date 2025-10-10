/* eslint-disable no-await-in-loop */
import { expect, type Locator } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

import { VirtualizerProps } from './virtualizedlist.types';

test('mdc-virtualizedlist', async ({ componentsPage }) => {
  await test.step('basic text list', async () => {
    type SetupOptions = {
      loop?: 'true' | 'false';
      initialFocus?: number;
      story?: 'text' | 'interactive';
      virtualizerProps?: Partial<VirtualizerProps>;
      itemSize?: number;
    };

    const setup = async (args: SetupOptions) => {
      const { loop, initialFocus, story, virtualizerProps } = args;

      await componentsPage.mount({
        html: `
        <div>
          <mdc-virtualizedwrapper
            item-size="${args.itemSize ?? 36}"
            ${loop !== undefined ? `loop="${loop}"` : ''}
            ${initialFocus !== undefined ? `initial-focus="${initialFocus}"` : ''}
            ${story !== undefined ? `story="${story}"` : ''}
            .virtualizerProps=${virtualizerProps}
          ></mdc-virtualizedwrapper>
          <mdc-button>after</mdc-button>
        </div>
        `,
        clearDocument: true,
      });
      const virtualizedList = componentsPage.page.locator('mdc-virtualizedlist');
      await virtualizedList.waitFor();
      return virtualizedList;
    };

    await test.step('should render virtualized list with visible items', async () => {
      const virtualizedList = await setup({ story: 'text' });

      // Check that the virtualized list is present
      await expect(virtualizedList).toBeVisible();

      // Check that only a subset of items are rendered (virtualization working)
      const listItems = virtualizedList.locator('mdc-listitem').filter({ visible: true });
      const itemCount = await listItems.count();

      // Should be less than total count (100) due to virtualization
      expect(itemCount).toBeLessThan(100);
      expect(itemCount).toBeGreaterThan(0);

      // Check that first visible item has correct text
      const firstItem = listItems.first();
      await expect(firstItem).toHaveAttribute('label', 'list item number 0');
    });

    await test.step('should handle initial focus correctly', async () => {
      const virtualizedList = await setup({ story: 'text', initialFocus: 90, itemSize: 36 });
      // Check that item with index 10 is visible and focused
      const focusedItem = virtualizedList.locator('mdc-listitem[data-index="90"][tabindex="0"]');
      await expect(focusedItem).toBeVisible();

      await componentsPage.actionability.pressTab();
      await expect(focusedItem).toBeFocused();
    });

    await test.step('keyboard navigation (loop disabled)', async () => {
      const virtualizedList = await setup({ story: 'text', initialFocus: 0, loop: 'false' });

      await expect(virtualizedList.locator('mdc-listitem[data-index="0"][tabindex="0"]')).toBeVisible();

      await componentsPage.actionability.pressTab();
      await expect(virtualizedList.locator('mdc-listitem[data-index="0"]')).toBeFocused();

      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(virtualizedList.locator('mdc-listitem[data-index="1"]')).toBeFocused();

      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(virtualizedList.locator('mdc-listitem[data-index="2"]')).toBeFocused();

      await componentsPage.page.keyboard.press('ArrowUp');
      await expect(virtualizedList.locator('mdc-listitem[data-index="1"]')).toBeFocused();
    });

    // TODO: Looping is currently not supported
    await test.step.skip('keyboard navigation (loop enabled)', async () => {
      const virtualizedList = await setup({ story: 'text', initialFocus: 0, loop: 'true' });
      await expect(virtualizedList.locator('mdc-listitem[data-index="0"][tabindex="0"]')).toBeVisible();

      await componentsPage.actionability.pressTab();
      await expect(virtualizedList.locator('mdc-listitem[data-index="0"]')).toBeFocused();

      await componentsPage.page.keyboard.press('ArrowUp');
      await expect(virtualizedList.locator('mdc-listitem[data-index="99"]')).toBeFocused();

      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(virtualizedList.locator('mdc-listitem[data-index="0"]')).toBeFocused();
    });

    await test.step('tabbing out of the list', async () => {
      const virtualizedList = await setup({ story: 'text', initialFocus: 0 });
      await expect(virtualizedList.locator('mdc-listitem[data-index="0"][tabindex="0"]')).toBeVisible();

      await componentsPage.page.pause();
      await componentsPage.actionability.pressTab();

      await expect(virtualizedList.locator('mdc-listitem[data-index="0"]')).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowDown');
      await componentsPage.page.keyboard.press('ArrowDown');
      await componentsPage.page.keyboard.press('ArrowDown');
      await componentsPage.page.keyboard.press('ArrowDown');

      await expect(virtualizedList.locator('mdc-listitem[data-index="4"]')).toBeFocused();
      await componentsPage.actionability.pressTab();

      await expect(virtualizedList.locator('mdc-listitem[data-index="4"]')).not.toBeFocused();
      await componentsPage.actionability.pressShiftTab();

      await expect(virtualizedList.locator('mdc-listitem[data-index="4"]')).toBeFocused();
      const scrollContainer = virtualizedList.locator('[part="scroll"]');

      await scrollContainer.evaluate(el => {
        // eslint-disable-next-line no-param-reassign
        el.scrollTop = 1000;
      });
      // Selected item should still be in the DOM after scrolling
      await virtualizedList.locator('mdc-listitem[data-index="4"]').waitFor();
      await componentsPage.page.keyboard.press('ArrowDown');
      await componentsPage.debugUtils.logActiveElement();
      await expect(virtualizedList.locator('mdc-listitem[data-index="5"]')).toBeFocused();

      await scrollContainer.evaluate(el => {
        // eslint-disable-next-line no-param-reassign
        el.scrollTop = 1000;
      });

      // Selected item should still be in the DOM after scrolling
      await virtualizedList.locator('mdc-listitem[data-index="5"]').waitFor();
      await componentsPage.page.keyboard.press('ArrowUp');
      await expect(virtualizedList.locator('mdc-listitem[data-index="4"]')).toBeFocused();
    });
  });

  await test.step('interactive dynamic list', async () => {
    const setup = async () => {
      await componentsPage.mount({
        html: `
          <mdc-virtualizeddynamiclist></mdc-virtualizedwrapper>
        `,
        clearDocument: true,
      });
      const virtualizedList = componentsPage.page.locator('mdc-virtualizedlist');
      await virtualizedList.waitFor();
      return virtualizedList;
    };

    const setupAndFocusInList = async () => {
      const virtualizedList = await setup();
      await expect(virtualizedList).toBeVisible();

      const listItemCounter = componentsPage.page.locator('[data-test="counter"]');

      await expect(listItemCounter).toHaveText('20');

      await expect(virtualizedList.locator('mdc-listitem[data-index="0"][tabindex="0"]')).toBeVisible();

      await componentsPage.actionability.pressTab();
      await expect(virtualizedList.locator('mdc-listitem[data-index="0"]')).toBeFocused();

      return { virtualizedList, listItemCounter };
    };

    const BUTTONS = [
      'Add 5 At Top',
      'Add Above',
      'Add Below',
      'Add Last',
      'Remove This',
      'Remove Above',
      'Remove Below',
    ] as const;
    const BUTTON_TAB_COUNT = Object.fromEntries(BUTTONS.map((key, index) => [key, index + 1])) as Record<
      (typeof BUTTONS)[number],
      number
    >;

    const listItemLocator = (virtualizedList: Locator, dataIndex: number, itemNumber: number) =>
      virtualizedList.locator(`mdc-listitem[data-index="${dataIndex}"][label="list item number ${itemNumber}"]`);

    const buttonLocator = (virtualizedList: Locator, dataIndex: number, buttonText: (typeof BUTTONS)[number]) =>
      virtualizedList.locator(`mdc-listitem[data-index="${dataIndex}"] mdc-button`).filter({ hasText: buttonText });

    const tabToListItemButton = async (
      virtualizedList: Locator,
      dataIndex: number,
      button: (typeof BUTTONS)[number],
    ) => {
      const tabCount = BUTTON_TAB_COUNT[button];
      for (let i = 0; i < tabCount; i += 1) {
        await componentsPage.actionability.pressTab();
      }

      const locator = buttonLocator(virtualizedList, dataIndex, button);
      await expect(locator).toBeFocused();

      return locator;
    };

    const tabOutOfListFromListItem = async (currentButton?: (typeof BUTTONS)[number]) => {
      const tabCount = BUTTONS.length - (currentButton ? BUTTON_TAB_COUNT[currentButton] : 0) + 1;

      for (let i = 0; i < tabCount; i += 1) {
        await componentsPage.actionability.pressTab();
      }
    };

    await test.step('should render virtualized list with visible items', async () => {
      const virtualizedList = await setup();

      // Check that the virtualized list is present
      await expect(virtualizedList).toBeVisible();

      // Check that only a subset of items are rendered (virtualization working)
      const listItems = virtualizedList.locator('mdc-listitem').filter({ visible: true });

      // Check that first visible item has correct text
      const firstItem = listItems.first();
      await expect(firstItem).toHaveAttribute('label', 'list item number 0');
    });

    await test.step('should handle items being added and removed', async () => {
      await test.step('add above', async () => {
        const { virtualizedList, listItemCounter } = await setupAndFocusInList();

        const addAboveButton = await tabToListItemButton(virtualizedList, 0, 'Add Above');

        await addAboveButton.press('Enter');
        await expect(listItemCounter).toHaveText('21');
        await listItemLocator(virtualizedList, 0, 21).waitFor({ state: 'visible' });
        // Focus should remain on the button - the item will be shifted down
        await expect(buttonLocator(virtualizedList, 1, 'Add Above')).toBeFocused();

        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressTab();

        await componentsPage.debugUtils.logActiveElement();

        // Focus should loop back to the Remove Last button
        await expect(componentsPage.page.locator('mdc-button:has-text("Remove Last")')).toBeFocused();
      });

      await test.step('add above keeps focus in view', async () => {
        const { virtualizedList } = await setupAndFocusInList();

        for (let i = 0; i < 5; i += 1) {
          await componentsPage.page.keyboard.press('ArrowDown');
        }

        let addAboveButton = await tabToListItemButton(virtualizedList, 5, 'Add Above');
        const initialBBox = await addAboveButton.boundingBox();
        for (let i = 0; i < 10; i += 1) {
          await expect(addAboveButton).toBeFocused();
          await addAboveButton.press('Enter');
          addAboveButton = buttonLocator(virtualizedList, 6 + i, 'Add Above');
          expect(await addAboveButton.boundingBox()).not.toEqual(initialBBox);
        }
      });

      await test.step('add below', async () => {
        const { virtualizedList, listItemCounter } = await setupAndFocusInList();

        const addBelowButton = await tabToListItemButton(virtualizedList, 0, 'Add Below');

        await addBelowButton.press('Enter');
        await expect(listItemCounter).toHaveText('21');

        await listItemLocator(virtualizedList, 1, 21).waitFor({ state: 'visible' });
        // Focus should remain on the button
        await expect(addBelowButton).toBeFocused();

        // Check that pressing down goes to the new item
        await componentsPage.page.keyboard.press('ArrowDown');
        await (await tabToListItemButton(virtualizedList, 1, 'Add Below')).press('Enter');
        await listItemLocator(virtualizedList, 2, 22).waitFor({ state: 'visible' });

        // Lets tab out of the list item
        await tabOutOfListFromListItem('Add Below');

        // Focus should be on the button after the list now
        await expect(componentsPage.page.locator('mdc-button:has-text("Remove Last")')).toBeFocused();
      });

      await test.step('add at bottom', async () => {
        const { virtualizedList, listItemCounter } = await setupAndFocusInList();
        const COUNT = 5;

        // go to the last item
        await componentsPage.page.keyboard.press('End');
        const addToBottomButton = await tabToListItemButton(virtualizedList, 9, 'Add Last');

        // Add several items to the bottom
        for (let i = 0; i < COUNT; i += 1) {
          await addToBottomButton.press('Enter');
        }
        await expect(addToBottomButton).toBeFocused();
        await expect(listItemCounter).toHaveText(`${10 + COUNT}`);

        // Check that they are all navigable to
        for (let i = 0; i < COUNT; i += 1) {
          await componentsPage.page.keyboard.press('ArrowDown');
          await expect(virtualizedList.locator(`mdc-listitem[data-index="${10 + i}"]`)).toHaveAttribute(
            'label',
            `list item number ${10 + i}`,
          );
        }
      });

      await test.step('remove item', async () => {
        const { virtualizedList, listItemCounter } = await setupAndFocusInList();

        await componentsPage.page.keyboard.press('ArrowDown');
        const removeButton = await tabToListItemButton(virtualizedList, 1, 'Remove This');
        await removeButton.press('Enter');
        await expect(listItemCounter).toHaveText('19');
        await expect(listItemLocator(virtualizedList, 1, 2)).toBeFocused();

        await componentsPage.page.keyboard.press('End');
        const bottomRemoveButton = await tabToListItemButton(virtualizedList, 8, 'Remove This');
        await bottomRemoveButton.press('Enter');
        await expect(listItemCounter).toHaveText('18');
        await expect(listItemLocator(virtualizedList, 7, 8)).toBeFocused();

        const outsideListRemoveLastButton = componentsPage.page.locator('mdc-button:has-text("Remove Last")');
        await tabOutOfListFromListItem();
        await expect(outsideListRemoveLastButton).toBeFocused();

        await outsideListRemoveLastButton.press('Enter');
        await expect(listItemCounter).toHaveText('17');
        await expect(outsideListRemoveLastButton).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(buttonLocator(virtualizedList, 6, 'Remove Below')).toBeFocused();
      });
    });
  });
});
