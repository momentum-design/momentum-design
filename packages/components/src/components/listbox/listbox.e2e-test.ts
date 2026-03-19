import { Locator } from '@playwright/test';

import { KEYS } from '../../utils/keys';
import { ComponentsPage, test, expect } from '../../../config/playwright/setup';

import type { ListBoxChangeEventDetail } from './listbox.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  children: string;
  label?: string;
  name?: string;
  multiple?: boolean;
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
        ${restArgs.multiple ? 'multiple' : ''}
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

const captureChangeDetail = (listbox: Locator) =>
  listbox.evaluate(
    el =>
      new Promise<ListBoxChangeEventDetail>(resolve => {
        el.addEventListener('change', (e: Event) => resolve((e as CustomEvent<ListBoxChangeEventDetail>).detail), {
          once: true,
        });
      }),
  );

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

    await test.step('spatial navigation', async () => {
      const listbox = await setup({ componentsPage, children: defaultChildren() });

      await componentsPage.wrapElement({ wrapperTagName: 'mdc-spatialnavigationprovider' });
      const { keyboard } = componentsPage.page;
      const beforeBtn = componentsPage.page.locator('mdc-button');
      const firstOption = listbox.locator('mdc-option').nth(0);

      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(beforeBtn).toBeFocused();
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(firstOption).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(listbox.locator('mdc-option').nth(1)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(listbox.locator('mdc-option').nth(2)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(listbox.locator('mdc-option').nth(2)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
      await expect(listbox.locator('mdc-option').nth(1)).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
      await expect(firstOption).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
      await expect(beforeBtn).toBeFocused();

      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);

      // Select option with Enter
      const waitForClick = await componentsPage.waitForEvent(firstOption, 'click');
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(firstOption).toHaveAttribute('selected');
      await expect(waitForClick).toEventEmitted();
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

test('mdc-listbox multiselect', async ({ componentsPage }) => {
  /**
   * ARIA MULTISELECTABLE
   */
  await test.step('has aria-multiselectable when multiple is true', async () => {
    const listbox = await setup({ componentsPage, children: defaultChildren(), multiple: true });
    await expect(listbox).toHaveAttribute('aria-multiselectable', 'true');
  });

  /**
   * TOGGLE SELECTION WITH CLICK
   */
  await test.step('toggles selection on click and emits correct event detail', async () => {
    const listbox = await setup({ componentsPage, children: defaultChildren(), multiple: true });

    // Click first option to select
    let [detail] = await Promise.all([captureChangeDetail(listbox), listbox.locator('mdc-option').nth(0).click()]);
    await expect(listbox.locator('mdc-option').nth(0)).toHaveAttribute('selected');
    expect(detail.selectedValues).toEqual(['london']);
    expect(detail.value).toBe('london');

    // Click second option - first should remain selected
    [detail] = await Promise.all([captureChangeDetail(listbox), listbox.locator('mdc-option').nth(1).click()]);
    await expect(listbox.locator('mdc-option').nth(0)).toHaveAttribute('selected');
    await expect(listbox.locator('mdc-option').nth(1)).toHaveAttribute('selected');
    expect(detail.selectedValues).toEqual(['london', 'newyork']);
    expect(detail.value).toBe('london');

    // Click first again to deselect
    [detail] = await Promise.all([captureChangeDetail(listbox), listbox.locator('mdc-option').nth(0).click()]);
    await expect(listbox.locator('mdc-option').nth(0)).not.toHaveAttribute('selected');
    await expect(listbox.locator('mdc-option').nth(1)).toHaveAttribute('selected');
    expect(detail.selectedValues).toEqual(['newyork']);
    expect(detail.value).toBe('newyork');
  });

  /**
   * TOGGLE SELECTION WITH KEYBOARD
   */
  await test.step('toggles selection with Enter and Space', async () => {
    const listbox = await setup({ componentsPage, children: defaultChildren(), multiple: true });
    await componentsPage.page.locator('mdc-button').focus();
    await componentsPage.actionability.pressTab();

    // Select with Enter
    await componentsPage.page.keyboard.press(KEYS.ENTER);
    await expect(listbox.locator('mdc-option').nth(0)).toHaveAttribute('selected');

    // Navigate down and select with Space
    await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
    await componentsPage.page.keyboard.press(KEYS.SPACE);
    await expect(listbox.locator('mdc-option').nth(0)).toHaveAttribute('selected');
    await expect(listbox.locator('mdc-option').nth(1)).toHaveAttribute('selected');

    // Deselect with Enter
    await componentsPage.page.keyboard.press(KEYS.ENTER);
    await expect(listbox.locator('mdc-option').nth(1)).not.toHaveAttribute('selected');
    await expect(listbox.locator('mdc-option').nth(0)).toHaveAttribute('selected');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression for multiselect listbox', async () => {
    await componentsPage.page.setViewportSize({ width: 600, height: 2100 });
    const listbox = await setup({ componentsPage, children: defaultChildren(), multiple: true });

    // Select multiple options for visual snapshot
    await listbox.locator('mdc-option').nth(0).click();
    await listbox.locator('mdc-option').nth(2).click();

    await test.step('matches screenshot of multiselect listbox', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-listbox-multiselect', {
        element: listbox,
      });
    });
  });
});
