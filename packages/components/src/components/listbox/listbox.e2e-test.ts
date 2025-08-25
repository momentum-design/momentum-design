import { expect } from '@playwright/test';

import { KEYS } from '../../utils/keys';
import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  children: string;
  label?: string;
  name?: string;
};

const label = 'Headquarters Location';
const defaultChildren = (selectedIdx?: number) => `
  <mdc-option value="london" label="London UK" ${selectedIdx === 0 ? 'selected' : ''}></mdc-option>
  <mdc-option value="newyork" label="New York NY" ${selectedIdx === 1 ? 'selected' : ''}></mdc-option>
  <mdc-option value="tokyo" label="Tokyo HQ" ${selectedIdx === 2 ? 'selected' : ''}></mdc-option>
`;

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div>
      <mdc-button>Start here</mdc-button>
      <mdc-listbox
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.name ? `name="${restArgs.name}"` : ''}
      >
        ${restArgs.children}
      </mdc-listbox>
     </div> 
    `,
    clearDocument: true,
  });

  const listbox = componentsPage.page.locator('mdc-listbox');
  await listbox.waitFor();
  return listbox;
};

test('mdc-listbox', async ({ componentsPage }) => {
  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('listbox-default');
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('should select option on click', async () => {
        const listbox = await setup({ componentsPage, children: defaultChildren() });
        await listbox.locator('mdc-option').nth(1).click();
        await expect(listbox.locator('mdc-option').nth(1)).toHaveAttribute('selected');
      });
    });

    await test.step('keyboard navigation and selection', async () => {
      const listbox = await setup({ componentsPage, children: defaultChildren() });
      await componentsPage.page.locator('mdc-button').focus();
      await componentsPage.actionability.pressTab();
      await expect(listbox.locator('mdc-option').nth(0)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(listbox.locator('mdc-option').nth(1)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(listbox.locator('mdc-option').nth(2)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(listbox.locator('mdc-option').nth(2)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
      await expect(listbox.locator('mdc-option').nth(1)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
      await expect(listbox.locator('mdc-option').nth(0)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
      await expect(listbox.locator('mdc-option').nth(0)).toBeFocused();

      // Select option with Enter
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(listbox.locator('mdc-option').nth(0)).toHaveAttribute('selected');
    });
  });

  /**
   * DEFAULT SELECTED OPTION
   */
  await test.step('default selected option', async () => {
    const listbox = await setup({ componentsPage, children: defaultChildren(2), label });
    await expect(listbox.locator('mdc-option').nth(2)).toHaveAttribute('selected');
  });

  /**
   * ACCESSIBILITY ROLES & ATTRIBUTES
   */
  await test.step('accessibility roles and attributes', async () => {
    const listbox = await setup({ componentsPage, children: defaultChildren(), label });
    await expect(listbox).toHaveAttribute('role', 'listbox');
    await expect(listbox.locator('mdc-option').nth(0)).toHaveAttribute('role', 'option');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression for listbox', async () => {
    await componentsPage.page.setViewportSize({ width: 600, height: 2100 });
    const listbox = await setup({ componentsPage, children: defaultChildren(1) });

    await test.step('matches screenshot of listbox', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-listbox', {
        element: listbox,
      });
    });
  });
});
