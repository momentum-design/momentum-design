import { expect } from '@playwright/test';

import { KEYS } from '../../utils/keys';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetUpOptions = {
  componentsPage: ComponentsPage;
  children: string;
  suffix?: string;
  'header-text'?: string;
  loop?: string;
  'initial-focus'?: number;
};

const generateBasicChildren = (count: number) =>
  new Array(count)
    .fill(1)
    .map(
      (_, index) => `
  <mdc-listitem label="List Item ${index + 1}"><mdc-listitem>
`,
    )
    .join('');

const generateChildren = (count: number) =>
  new Array(count)
    .fill(1)
    .map(
      (_, index) => `
  <mdc-listitem label="List Item ${index + 1}">
    <mdc-checkbox slot="leading-controls" data-aria-label="checkbox label ${index + 1}"></mdc-checkbox>
    <mdc-button
      slot="trailing-controls"
      color="positive"
      prefix-icon="data-range-selection-bold"
      aria-label="button label ${index + 1}"
    ></mdc-button>
    <mdc-button
      slot="trailing-controls"
      variant="tertiary"
      aria-label="button text label ${index + 1}"
    >Click</mdc-button>
    <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
  </mdc-listitem>
`,
    )
    .join('');

const setup = async (args: SetUpOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <div>
        <mdc-list loop='${restArgs.loop ?? ''}' initial-focus="${restArgs['initial-focus'] ?? ''}">
          ${restArgs['header-text'] ? `<mdc-listheader header-text="${restArgs['header-text']}"></mdc-listheader>` : ''}
          ${restArgs.children ? restArgs.children : ''}
        </mdc-list>
        ${restArgs.suffix ? restArgs.suffix : ''}
      </div>
    `,
    clearDocument: true,
  });
  const list = componentsPage.page.locator('mdc-list');
  await list.waitFor();
  return list;
};

test('mdc-list', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const listSheet = new StickerSheet(componentsPage, 'mdc-list');
    const options = { createNewRow: true };
    listSheet.setChildren(generateBasicChildren(1));
    await listSheet.createMarkupWithCombination({}, options);
    listSheet.setChildren(`
      <mdc-listheader header-text="List Header"></mdc-listheader>
      ${generateChildren(6)}
    `);
    await listSheet.createMarkupWithCombination({}, options);
    listSheet.setChildren(`
      <mdc-listheader header-text="List With Divider"></mdc-listheader>
      ${generateChildren(2)}
      <mdc-divider></mdc-divider>
      ${generateChildren(2)}
    `);
    await listSheet.createMarkupWithCombination({}, options);

    await listSheet.mountStickerSheet();
    await test.step('matches screenshot of list stickersheet', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-list', {
        element: listSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('list-default');
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('component should focus on specific list item when clicking on it', async () => {
        const list = await setup({ componentsPage, children: generateChildren(6) });

        await list.locator('mdc-listitem >> nth=2').click();
        await expect(list.locator('mdc-listitem >> nth=2')).toBeFocused();

        await list.locator('mdc-listitem >> nth=4').click();
        await expect(list.locator('mdc-listitem >> nth=4')).toBeFocused();
      });
    });

    await test.step('keyboard', async () => {
      await test.step('component should navigate in between list items', async () => {
        const list = await setup({ componentsPage, children: generateChildren(5) });

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await expect(list.locator('mdc-listitem[label="List Item 2"]')).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await expect(list.locator('mdc-listitem[label="List Item 3"]')).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.END);
        await expect(list.locator('mdc-listitem[label="List Item 5"]')).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
        await expect(list.locator('mdc-listitem[label="List Item 4"]')).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
        await expect(list.locator('mdc-listitem[label="List Item 3"]')).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.HOME);
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(list.locator('mdc-listitem[label="List Item 5"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();
      });

      await test.step('component should not loop navigation when list has loop attribute set to false', async () => {
        const list = await setup({ componentsPage, children: generateChildren(5) });
        await list.evaluate(node => node.setAttribute('loop', 'false'));

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();

        await componentsPage.page.keyboard.press('End');
        await expect(list.locator('mdc-listitem[label="List Item 5"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(list.locator('mdc-listitem[label="List Item 5"]')).toBeFocused();
      });

      await test.step('component should navigate inside children of the list items', async () => {
        const list = await setup({ componentsPage, children: generateChildren(2) });

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-checkbox[data-aria-label="checkbox label 1"]')).toBeFocused();
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).not.toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-button[aria-label="button label 1"]')).toBeFocused();

        // As there are only 2 elements in the list, when we press up arrow on 1st item, then it should go to 2nd item.
        await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
        await expect(list.locator('mdc-listitem[label="List Item 2"]')).toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-checkbox[data-aria-label="checkbox label 2"]')).toBeFocused();
        await expect(list.locator('mdc-listitem[label="List Item 2"]')).not.toBeFocused();
      });
    });

    await test.step('focus', async () => {
      await test.step('component should focus on the item specified in initial-focus attribute', async () => {
        const list = await setup({ componentsPage, children: generateChildren(5), 'initial-focus': 4 });

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-listitem[label="List Item 5"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(list.locator('mdc-listitem[label="List Item 4"]')).toBeFocused();

        // Focus should not be updated on initial-focus attribute change after component is loaded
        await list.evaluate(node => node.setAttribute('initial-focus', '1'));
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressShiftTab();
        await expect(list.locator('mdc-listitem[label="List Item 4"]')).toBeFocused();
      });

      await test.step('component should update focus when focused element is removed', async () => {
        const list = await setup({ componentsPage, children: generateChildren(4) });

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();

        await list.locator('mdc-listitem[label="List Item 4"]').evaluate(node => node.remove());
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(list.locator('mdc-listitem[label="List Item 2"]')).toBeFocused();

        await list.locator('mdc-listitem[label="List Item 2"]').evaluate(node => node.remove());
        await expect(list.locator('mdc-listitem[label="List Item 3"]')).toBeFocused();

        await list.locator('mdc-listitem[label="List Item 3"]').evaluate(node => node.remove());
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();
      });

      await test.step('focus should return to the previously focused item when an item is added', async () => {
        const list = await setup({
          componentsPage,
          children: generateChildren(4),
          suffix: `<mdc-button id="add-item-button">Add Item</mdc-button>`,
        });

        await componentsPage.page.locator('#add-item-button').evaluate(node => {
          node.addEventListener('click', () => {
            const newItem = document.createElement('mdc-listitem');
            newItem.setAttribute('label', `Button List Item`);

            const btn = document.createElement('mdc-button');
            btn.setAttribute('slot', 'trailing-controls');
            btn.innerText = 'New Button';
            newItem.appendChild(btn);

            document.querySelector('mdc-list')?.appendChild(newItem);
          });
        });

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(list.locator('mdc-listitem[label="List Item 2"]')).toBeFocused();

        // Add new item
        await list.evaluate(node => {
          const newItem = document.createElement('mdc-listitem');
          newItem.setAttribute('label', 'Added List Item');
          node.appendChild(newItem);
        });
        await list.locator('mdc-listitem[label="Added List Item"]').waitFor();
        await expect(list.locator('mdc-listitem[label="List Item 2"]')).toBeFocused();

        // Focus the add item button
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressTab();
        await expect(componentsPage.page.locator('#add-item-button')).toBeFocused();

        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await list.locator('mdc-listitem[label="Button List Item"]').waitFor();

        await componentsPage.actionability.pressShiftTab();
        await expect(list.locator('mdc-listitem[label="List Item 2"] mdc-button[variant="tertiary"]')).toBeFocused();
      });
    });
  });

  /**
   * USER STORIES
   */
  await test.step('user stories', async () => {
    await test.step('should focus on all items when the list is focused', async () => {
      const list = await setup({ componentsPage, children: generateChildren(5) });
      await componentsPage.actionability.pressTab();
      await expect(list.locator('mdc-listitem').first()).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_DOWN, [
        list.locator('mdc-listitem').nth(1),
        list.locator('mdc-listitem').nth(2),
        list.locator('mdc-listitem').nth(3),
      ]);
      await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_UP, [
        list.locator('mdc-listitem').nth(2),
        list.locator('mdc-listitem').nth(1),
        list.locator('mdc-listitem').first(),
      ]);
      await componentsPage.page.keyboard.press(KEYS.END);
      await expect(list.locator('mdc-listitem').last()).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.HOME);
      await expect(list.locator('mdc-listitem').first()).toBeFocused();
    });

    await test.step('should focus on the enabled listitems only', async () => {
      const list = await setup({
        componentsPage,
        children: `
        <mdc-listitem label="List Item 1" disabled></mdc-listitem>
        <mdc-listitem label="List Item 2"></mdc-listitem>
        <mdc-listitem label="List Item 3" disabled></mdc-listitem>
        <mdc-listitem label="List Item 4"></mdc-listitem>
        <mdc-listitem label="List Item 5" disabled></mdc-listitem>
        `,
      });
      await componentsPage.actionability.pressTab();
      await expect(list.locator('mdc-listitem').nth(1)).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_DOWN, [
        list.locator('mdc-listitem').nth(3),
        list.locator('mdc-listitem').nth(1),
      ]);
      await componentsPage.visualRegression.takeScreenshot('mdc-list', {
        source: 'userflow',
        fileNameSuffix: 'disabled-list-items',
      });
      await componentsPage.page.keyboard.press(KEYS.END);
      await componentsPage.visualRegression.takeScreenshot('mdc-list', {
        source: 'userflow',
        fileNameSuffix: 'focus-last-disabled-item',
      });
    });

    await test.step('should have correct ARIA roles and attributes', async () => {
      const list = await setup({
        componentsPage,
        children: `
            <mdc-listitem label="List Item 1"></mdc-listitem>
            <mdc-listitem label="List Item 2" disabled></mdc-listitem>
          `,
      });
      await expect(list).toHaveAttribute('role', 'list');
      const items = list.locator('mdc-listitem');
      await expect(items.nth(0)).toHaveAttribute('role', 'listitem');
      await expect(items.nth(1)).toHaveAttribute('role', 'listitem');
      await expect(items.nth(1)).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('should skip disabled items when navigating (feature file pattern)', async () => {
      const list = await setup({
        componentsPage,
        children: `
            <mdc-listitem label="Item 1"></mdc-listitem>
            <mdc-listitem label="Item 2" disabled></mdc-listitem>
            <mdc-listitem label="Item 3"></mdc-listitem>
            <mdc-listitem label="Item 4" disabled></mdc-listitem>
            <mdc-listitem label="Item 5"></mdc-listitem>
          `,
      });
      await componentsPage.actionability.pressTab();
      await expect(list.locator('mdc-listitem[label="Item 1"]')).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(list.locator('mdc-listitem[label="Item 3"]')).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(list.locator('mdc-listitem[label="Item 5"]')).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(list.locator('mdc-listitem[label="Item 1"]')).toBeFocused();
      await expect(list.locator('mdc-listitem[label="Item 2"]')).not.toBeFocused();
      await expect(list.locator('mdc-listitem[label="Item 4"]')).not.toBeFocused();
    });

    await test.step('should preserve focus on correct item after Shift+Tab (rowing index)', async () => {
      await componentsPage.mount({
        html: `
            <div>
              <mdc-list>
                <mdc-listitem label="List Item 1"></mdc-listitem>
                <mdc-listitem label="List Item 2"></mdc-listitem>
                <mdc-listitem label="List Item 3"></mdc-listitem>
                <mdc-listitem label="List Item 4"></mdc-listitem>
                <mdc-listitem label="List Item 5"></mdc-listitem>
              </mdc-list>
              <mdc-button>Button</mdc-button>
            </div>
          `,
        clearDocument: true,
      });
      const list = componentsPage.page.locator('mdc-list');
      await list.waitFor();
      const listitems = list.locator('mdc-listitem');
      await componentsPage.actionability.pressTab();
      await expect(listitems.first()).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_DOWN, [listitems.nth(1), listitems.nth(2)]);
      await componentsPage.actionability.pressTab();
      await expect(componentsPage.page.locator('mdc-button')).toBeFocused();
      await componentsPage.actionability.pressShiftTab();
      await expect(listitems.nth(2)).toBeFocused();
    });
  });

  await test.step('should keep the focus on interactive elements inside list items', async () => {
    const testSteps = async (html: string) => {
      await componentsPage.mount({
        html,
        clearDocument: true,
      });

      const list = componentsPage.page.locator('mdc-list');
      await list.waitFor();
      const listItems = list.locator('mdc-listitem');

      await componentsPage.actionability.pressTab();
      await expect(listItems.first()).toBeFocused();

      await componentsPage.actionability.pressTab();

      const firstInteractive = listItems.first().locator('mdc-button');
      await expect(firstInteractive).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(firstInteractive).toBeFocused();

      await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_DOWN, [listItems.nth(1)]);
      await componentsPage.actionability.pressTab();

      const secondInteractive = listItems.nth(1).locator('mdc-toggle');
      await expect(secondInteractive).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.SPACE);
      await expect(secondInteractive).toBeFocused();
      await expect(secondInteractive).toHaveAttribute('checked');

      await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_DOWN, [listItems.nth(2)]);
      await componentsPage.actionability.pressTab();

      const thirdInteractive = listItems.nth(2).locator('mdc-button');
      await expect(thirdInteractive).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      const menuItem = listItems.nth(2).locator('mdc-menuitem');
      await expect(menuItem).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.ENTER);

      await expect(thirdInteractive).toBeFocused();
    };

    await test.step('when stock list item used', async () => {
      await testSteps(`<mdc-list>
        <mdc-listitem label="List item with button">
          List item with button
          <mdc-button slot="trailing-controls" variant="secondary">Action</mdc-button>
        </mdc-listitem>
        <mdc-listitem label="List item with toggle">
          List item with toggle
          <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
        </mdc-listitem>
        <mdc-listitem label="List item with badge">
          List item with menu
          <div slot="trailing-controls">
            <mdc-button id="copy-menu-trigger-1" variant="secondary" prefix-icon="more-bold"></mdc-button>
            <mdc-menupopover triggerID="copy-menu-trigger-1" placement="bottom" show-arrow>
              <mdc-menuitem label="Copy"></mdc-menuitem>
            </mdc-menupopover>
          </div>
        </mdc-listitem>
      </mdc-list>
      `);
    });

    await test.step('when list item with custom content used', async () => {
      await testSteps(`
        <mdc-list>
          <mdc-listitem label="List item with button">
            <div slot="content">
              List item with button
              <mdc-button slot="trailing-controls" variant="secondary">Action</mdc-button>
            </div>
          </mdc-listitem>
          <mdc-listitem label="List item with toggle">
            <div slot="content">
              List item with toggle
              <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
            </div>
          </mdc-listitem>
          <mdc-listitem label="List item with badge">
            <div slot="content">
              List item with menu
              <div slot="trailing-controls">
                <mdc-button id="copy-menu-trigger-2" variant="secondary" prefix-icon="more-bold"></mdc-button>
                <mdc-menupopover triggerID="copy-menu-trigger-2" placement="bottom" show-arrow>
                  <mdc-menuitem label="Copy"></mdc-menuitem>
                </mdc-menupopover>
              </div>
            </div>
          </mdc-listitem>
        </mdc-list>
       `);
    });
  });
});
