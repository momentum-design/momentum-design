import { expect } from '@playwright/test';
import type { ComponentsPage } from '../../../config/playwright/setup';
import { test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage,
  'header-text'?: string;
  children: string;
}

const headerText = 'Select all powers';
const children = `
  <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
  <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
  <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
`;
const avengersChildren = `
  <mdc-checkbox label="Black Widow"></mdc-checkbox>
  <mdc-checkbox label="Captain America"></mdc-checkbox>
  <mdc-checkbox label="Hawkye"></mdc-checkbox>
  <mdc-checkbox label="The Hulk"></mdc-checkbox>
  <mdc-checkbox label="Iron Man"></mdc-checkbox>
  <mdc-checkbox label="Thor"></mdc-checkbox>
`;
const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-checkboxgroup
        ${restArgs['header-text'] ? `header-text="${restArgs['header-text']}"` : ''}
      >
        ${restArgs.children}
      </mdc-checkboxgroup>
    `,
    clearDocument: true,
  });
  const checkboxgroup = componentsPage.page.locator('mdc-checkboxgroup');
  await checkboxgroup.waitFor();
  return checkboxgroup;
};

test('mdc-checkboxgroup', async ({ componentsPage }) => {
  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('checkboxgroup-default');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const checkboxgroupStickerSheet = new StickerSheet(componentsPage, 'mdc-checkboxgroup');
    checkboxgroupStickerSheet.setAttributes({
      'header-text': headerText,
    });
    checkboxgroupStickerSheet.setChildren(avengersChildren);
    await checkboxgroupStickerSheet.createMarkupWithCombination({}, true);
    await checkboxgroupStickerSheet.mountStickerSheet();
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-checkboxgroup', {
        element: checkboxgroupStickerSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const checkboxgroup = await setup({ componentsPage, children });
    await test.step('attribute `header-text` should be present on component when set', async () => {
      await componentsPage.setAttributes(checkboxgroup, { 'header-text': headerText });
      const mdcText = componentsPage.page.locator('mdc-text');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe(headerText);
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('keyboard', async () => {
      await test.step('component should travel through children with tab', async () => {
        const checkboxgroup = await setup({ componentsPage, children });

        await componentsPage.actionability.pressTab();
        await expect(checkboxgroup.locator('mdc-checkbox').first()).toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(checkboxgroup.locator('mdc-checkbox').nth(1)).toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(checkboxgroup.locator('mdc-checkbox').last()).toBeFocused();
      });

      await test.step('component should travel through children with arrow down and arrow up keys', async () => {
        const checkboxgroup = await setup({ componentsPage, children: avengersChildren });

        await componentsPage.actionability.pressTab();
        await expect(checkboxgroup.locator('mdc-checkbox').first()).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(checkboxgroup.locator('mdc-checkbox').nth(1)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(checkboxgroup.locator('mdc-checkbox').nth(2)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(checkboxgroup.locator('mdc-checkbox').nth(3)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(checkboxgroup.locator('mdc-checkbox').nth(4)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(checkboxgroup.locator('mdc-checkbox').nth(3)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(checkboxgroup.locator('mdc-checkbox').nth(2)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(checkboxgroup.locator('mdc-checkbox').nth(1)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(checkboxgroup.locator('mdc-checkbox').first()).toBeFocused();
      });
    });
  });
});
