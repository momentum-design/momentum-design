import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetUpOptions = {
  componentsPage: ComponentsPage;
  children: string;
  'header-text'?: string;
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
      <mdc-list>
        ${restArgs['header-text'] ? `<mdc-listheader header-text="${restArgs['header-text']}"></mdc-listheader>` : ''}
        ${restArgs.children ? restArgs.children : ''}
      </mdc-list>
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

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(list.locator('mdc-listitem[label="List Item 2"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(list.locator('mdc-listitem[label="List Item 3"]')).toBeFocused();

        await componentsPage.page.keyboard.press('End');
        await expect(list.locator('mdc-listitem[label="List Item 5"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(list.locator('mdc-listitem[label="List Item 4"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(list.locator('mdc-listitem[label="List Item 3"]')).toBeFocused();

        await componentsPage.page.keyboard.press('Home');
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(list.locator('mdc-listitem[label="List Item 5"]')).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(list.locator('mdc-listitem[label="List Item 1"]')).toBeFocused();
      });

      await test.step('component should not loop navigation when list has no-loop attribute', async () => {
        const list = await setup({ componentsPage, children: generateChildren(5) });
        await list.evaluate(node => node.setAttribute('no-loop', ''));

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
        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(list.locator('mdc-listitem[label="List Item 2"]')).toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(list.locator('mdc-checkbox[data-aria-label="checkbox label 2"]')).toBeFocused();
        await expect(list.locator('mdc-listitem[label="List Item 2"]')).not.toBeFocused();
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
      await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [
        list.locator('mdc-listitem').nth(1),
        list.locator('mdc-listitem').nth(2),
        list.locator('mdc-listitem').nth(3),
      ]);
      await componentsPage.actionability.pressAndCheckFocus('ArrowUp', [
        list.locator('mdc-listitem').nth(2),
        list.locator('mdc-listitem').nth(1),
        list.locator('mdc-listitem').first(),
      ]);
      await componentsPage.page.keyboard.press('End');
      await expect(list.locator('mdc-listitem').last()).toBeFocused();
      await componentsPage.page.keyboard.press('Home');
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
      await componentsPage.actionability.pressAndCheckFocus('ArrowDown', [
        list.locator('mdc-listitem').nth(3),
        list.locator('mdc-listitem').nth(1),
      ]);
      await componentsPage.visualRegression.takeScreenshot('mdc-list', {
        source: 'userflow',
        fileNameSuffix: 'disabled-list-items',
      });
      await componentsPage.page.keyboard.press('End');
      await componentsPage.visualRegression.takeScreenshot('mdc-list', {
        source: 'userflow',
        fileNameSuffix: 'focus-last-disabled-item',
      });
    });
  });
});
