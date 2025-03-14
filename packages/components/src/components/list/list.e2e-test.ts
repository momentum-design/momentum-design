import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetUpOptions = {
  componentsPage: ComponentsPage;
  children: string;
  'header-text'?: string;
}

const headerText = 'Participants List';

const generateBasicChildren = (count: number) => new Array(count).fill(1).map((_, index) => `
  <mdc-listitem label="List Item ${index + 1}"><mdc-listitem>
`).join('');

const generateChildren = (count: number) => new Array(count).fill(1).map((_, index) => `
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
`).join('');

const setup = async (args: SetUpOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-list ${restArgs['header-text'] ? `header-text="${restArgs['header-text']}"` : ''}>
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
    listSheet.setAttributes({
      'header-text': 'List Header',
    });
    listSheet.setChildren(generateChildren(6));
    await listSheet.createMarkupWithCombination({}, options);
    listSheet.setAttributes({
      'header-text': 'List With Divider',
    });
    listSheet.setChildren([generateChildren(2), '<mdc-divider></mdc-divider>', generateChildren(2)].join(''));
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
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const list = await setup({ componentsPage, children: generateChildren(1) });

    await test.step('should have header text label when the attribute is passed', async () => {
      await componentsPage.setAttributes(list, { 'header-text': headerText });
      const textContent = await componentsPage.page.locator('mdc-text[part="header-text"]').textContent();
      expect(textContent?.trim()).toBe(headerText);
    });
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
});
