import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { LISTITEM_VARIANTS } from './listitem.constants';

type SetUpOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  variant?: any;
  'secondary-label'?: string;
  'tertiary-label'?: string;
  'side-header-text'?: string;
  'subline-text'?: string;
  disabled?: boolean;
  softDisabled?: boolean;
  active?: boolean;
  children?: string;
};

const primaryLabel = 'Primary Label';
const secondaryLabel = 'Secondary Label';
const tertiaryLabel = 'Tertiary Label';
const sideHeaderText = 'Header Text';
const sublineText = 'Subline Text';

const setup = async (args: SetUpOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-listitem
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
        ${restArgs.softDisabled ? 'soft-disabled' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.active ? 'active' : ''}
        ${restArgs['secondary-label'] ? `secondary-label="${restArgs['secondary-label']}"` : ''}
        ${restArgs['tertiary-label'] ? `tertiary-label="${restArgs['tertiary-label']}"` : ''}
        ${restArgs['side-header-text'] ? `side-header-text="${restArgs['side-header-text']}"` : ''}
        ${restArgs['subline-text'] ? `subline-text="${restArgs['subline-text']}"` : ''}
      >
        ${restArgs.children ? restArgs.children : ''}
      </mdc-listitem>
      `,
    clearDocument: true,
  });
  const listitem = componentsPage.page.locator('mdc-listitem');
  await listitem.waitFor();
  return listitem;
};

test.describe.parallel('mdc-listitem', () => {
  test('visual regression and accessibility', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const listitemSheet = new StickerSheet(componentsPage, 'mdc-listitem', 'margin: 0.25rem 0;');
      const options = { createNewRow: true };
      listitemSheet.setAttributes({
        label: primaryLabel,
      });
      await listitemSheet.createMarkupWithCombination({}, options);
      listitemSheet.setChildren(`
      <mdc-checkbox checked slot="leading-controls" data-aria-label="${primaryLabel}"></mdc-checkbox>
    `);
      await listitemSheet.createMarkupWithCombination({}, options);
      listitemSheet.setChildren(`
      <mdc-radio checked slot="leading-controls" data-aria-label="${primaryLabel}"></mdc-radio>
    `);
      await listitemSheet.createMarkupWithCombination({}, options);
      listitemSheet.setAttributes({
        label: primaryLabel,
        'secondary-label': secondaryLabel,
        'tertiary-label': tertiaryLabel,
      });
      await listitemSheet.createMarkupWithCombination({}, options);
      listitemSheet.setAttributes({
        active: true,
        label: primaryLabel,
        'secondary-label': secondaryLabel,
        'tertiary-label': tertiaryLabel,
      });
      await listitemSheet.createMarkupWithCombination({}, options);
      listitemSheet.setAttributes({
        label: primaryLabel,
        'secondary-label': secondaryLabel,
        'tertiary-label': tertiaryLabel,
      });
      listitemSheet.setChildren(`
      <div slot="leading-controls">
        <mdc-checkbox checked data-aria-label="${primaryLabel}"></mdc-checkbox>
        <mdc-avatar presence="active" initials="MD"></mdc-avatar>
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
      </div>
    `);
      await listitemSheet.createMarkupWithCombination({}, options);
      listitemSheet.setAttributes({
        'side-header-text': sideHeaderText,
        'subline-text': sublineText,
      });
      listitemSheet.setChildren(`
      <div slot="trailing-controls">
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
        <mdc-toggle checked data-aria-label="${primaryLabel}"></mdc-toggle>
        <mdc-button variant="secondary" color="positive">Click</mdc-button>
        <mdc-badge type="dot"></mdc-badge>
      </div>
    `);
      await listitemSheet.createMarkupWithCombination({}, options);
      listitemSheet.setAttributes({
        label: primaryLabel,
        'secondary-label': secondaryLabel,
        'tertiary-label': tertiaryLabel,
        'side-header-text': sideHeaderText,
        'subline-text': sublineText,
      });
      listitemSheet.setChildren(`
      <div slot="leading-controls">
        <mdc-checkbox data-aria-label="${primaryLabel}" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
      </div>
      <div slot="trailing-controls">
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
        <mdc-button variant="secondary">Click</mdc-button>
        <mdc-toggle data-aria-label="${primaryLabel}" size="compact"></mdc-toggle>
        <mdc-badge type="dot"></mdc-badge>
      </div>
    `);
      await listitemSheet.createMarkupWithCombination({}, options);
      listitemSheet.setAttributes({
        label: 'This is a long text which should be truncated',
        style: 'width: 15rem;',
      });
      listitemSheet.setChildren(`
      <div slot="leading-controls">
        <mdc-checkbox data-aria-label="${primaryLabel}" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
      </div>
    `);
      await listitemSheet.createMarkupWithCombination({}, options);
      listitemSheet.setAttributes({
        label: 'This is an extremely long label text that should wrap or truncate properly inside a fixed width',
        'secondary-label': secondaryLabel,
        'tertiary-label': tertiaryLabel,
        'side-header-text': sideHeaderText,
        'subline-text': sublineText,
        style: 'width: 50rem;',
      });
      listitemSheet.setChildren(`
      <div slot="leading-controls">
        <mdc-checkbox data-aria-label="${primaryLabel}" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
      </div>
      <div slot="trailing-controls">
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
        <mdc-button variant="secondary">Click</mdc-button>
        <mdc-toggle data-aria-label="${primaryLabel}" size="compact"></mdc-toggle>
        <mdc-badge type="dot"></mdc-badge>
      </div>
    `);
      await listitemSheet.createMarkupWithCombination({}, options);
      await listitemSheet.mountStickerSheet({ role: 'list' });
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-listitem', {
          element: listitemSheet.getWrapperContainer(),
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('listitem-default');
    });
  });

  test('attributes and interactions', async ({ componentsPage }) => {
    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      const listitem = await setup({ componentsPage });

      await test.step('attribute role, tabindex and variant should be present on component by default', async () => {
        await expect(listitem).toHaveAttribute('role', 'listitem');
        await expect(listitem).toHaveAttribute('tabindex', '0');
        await expect(listitem).toHaveAttribute('variant', LISTITEM_VARIANTS.FULL_WIDTH);
      });

      await test.step('should have primary text label when the attribute is passed', async () => {
        await componentsPage.setAttributes(listitem, { label: primaryLabel });
        const mdcText = componentsPage.page.locator('mdc-text');
        const textContent = await mdcText.textContent();
        expect(textContent?.trim()).toBe(primaryLabel);
      });

      await test.step('should have secondary text label when the attribute is passed', async () => {
        await componentsPage.setAttributes(listitem, { 'secondary-label': secondaryLabel });
        const mdcText = componentsPage.page.locator('mdc-text[part="leading-text-secondary-label"]');
        const textContent = await mdcText.textContent();
        expect(textContent?.trim()).toBe(secondaryLabel);
      });

      await test.step('should have tertiary text label when the attribute is passed', async () => {
        await componentsPage.setAttributes(listitem, { 'tertiary-label': tertiaryLabel });
        const mdcText = componentsPage.page.locator('mdc-text[part="leading-text-tertiary-label"]');
        const textContent = await mdcText.textContent();
        expect(textContent?.trim()).toBe(tertiaryLabel);
      });

      await test.step('should have header text label when the attribute is passed', async () => {
        await componentsPage.setAttributes(listitem, { 'side-header-text': sideHeaderText });
        const mdcText = componentsPage.page.locator('mdc-text[part="trailing-text-side-header"]');
        const textContent = await mdcText.textContent();
        expect(textContent?.trim()).toBe(sideHeaderText);
      });

      await test.step('should have subline text label when the attribute is passed', async () => {
        await componentsPage.setAttributes(listitem, { 'subline-text': sublineText });
        const mdcText = componentsPage.page.locator('mdc-text[part="trailing-text-subline"]');
        const textContent = await mdcText.textContent();
        expect(textContent?.trim()).toBe(sublineText);
      });

      await test.step('should have soft-disabled attribute when the attribute is passed', async () => {
        await componentsPage.setAttributes(listitem, { 'soft-disabled': '' });
        await expect(listitem).toHaveAttribute('soft-disabled', '');
        await expect(listitem).toHaveAttribute('aria-disabled', 'true');
      });
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      await test.step('focus', async () => {
        await test.step('component should be focusable with tab', async () => {
          const listitem = await setup({ componentsPage, label: primaryLabel });

          await componentsPage.actionability.pressTab();
          await expect(listitem).toBeFocused();
        });

        await test.step('component should focus inside when focusable elements are present', async () => {
          const listitem = await setup({
            componentsPage,
            label: primaryLabel,
            children: `
            <mdc-checkbox checked slot="leading-controls" data-aria-label="${primaryLabel}"></mdc-checkbox>
            <mdc-button slot="trailing-controls">Click</mdc-button>
          `,
          });
          const button = listitem.locator('mdc-button');
          const checkbox = listitem.locator('mdc-checkbox');

          await componentsPage.actionability.pressTab();
          await expect(listitem).toBeFocused();

          await componentsPage.actionability.pressTab();
          await expect(checkbox).toBeFocused();

          await componentsPage.actionability.pressTab();
          await expect(button).toBeFocused();
        });

        await test.step(`should focus when soft-disabled attribute is present
           and elements within should be disabled`, async () => {
          const listitem = await setup({
            componentsPage,
            label: primaryLabel,
            softDisabled: true,
            children: `
            <mdc-checkbox checked slot="leading-controls" data-aria-label="${primaryLabel}"></mdc-checkbox>
          `,
          });
          const checkbox = listitem.locator('mdc-checkbox');

          await componentsPage.actionability.pressTab();
          await expect(listitem).toBeFocused();
          await expect(listitem).toHaveAttribute('soft-disabled', '');
          await expect(listitem).toHaveAttribute('aria-disabled', 'true');

          await componentsPage.actionability.pressTab();
          await expect(checkbox).not.toBeFocused();
          await expect(checkbox).toHaveAttribute('disabled', '');
        });
      });

      await test.step('click', async () => {
        await test.step('should trigger click event on component', async () => {
          const listitem = await setup({ componentsPage, label: primaryLabel });
          const waitForClick = await componentsPage.waitForEvent(listitem, 'click');
          await listitem.click();
          await expect(waitForClick).toEventEmitted();
        });

        await test.step('should not trigger click when listitem is disabled', async () => {
          const listitem = await setup({ componentsPage, label: primaryLabel, disabled: true });
          const waitForClick = await componentsPage.waitForEvent(listitem, 'click');
          await listitem.click();
          await expect(waitForClick).not.toEventEmitted();
        });

        await test.step('should trigger click event on leading controls and not on listitem', async () => {
          const listitem = await setup({
            componentsPage,
            label: primaryLabel,
            children: `
            <mdc-checkbox checked slot="leading-controls" data-aria-label="${primaryLabel}"></mdc-checkbox>
          `,
          });
          const checkbox = listitem.locator('mdc-checkbox');
          const waitForCheckboxClick = await componentsPage.waitForEvent(checkbox, 'click');
          const waitForListItemClick = await componentsPage.waitForEvent(listitem, 'click');
          await checkbox.click();
          await expect(waitForCheckboxClick).toEventEmitted();
          await expect(waitForListItemClick).not.toEventEmitted();
        });

        await test.step('should trigger click event on trailing controls and not on listitem', async () => {
          const listitem = await setup({
            componentsPage,
            label: primaryLabel,
            children: `
            <mdc-button slot="trailing-controls">Click</mdc-button>
          `,
          });
          const button = listitem.locator('mdc-button');
          const waitForButtonClick = await componentsPage.waitForEvent(button, 'click');
          const waitForListItemClick = await componentsPage.waitForEvent(listitem, 'click');
          await button.click();
          await expect(waitForButtonClick).toEventEmitted();
          await expect(waitForListItemClick).not.toEventEmitted();
        });
      });

      await test.step('keyboard', async () => {
        await test.step('should trigger keyup and keydown events on component', async () => {
          const listitem = await setup({ componentsPage, label: primaryLabel });
          const waitForKeyDown = await componentsPage.waitForEvent(listitem, 'keydown');
          const waitForKeyUp = await componentsPage.waitForEvent(listitem, 'keyup');
          await componentsPage.actionability.pressTab();
          await expect(listitem).toBeFocused();
          await componentsPage.page.keyboard.press('Enter');
          await expect(waitForKeyDown).toEventEmitted();
          await expect(waitForKeyUp).toEventEmitted();
        });

        await test.step('should trigger keyup and keydown events on leading controls and not on listitem', async () => {
          const listitem = await setup({
            componentsPage,
            label: primaryLabel,
            children: `
            <mdc-checkbox checked slot="leading-controls" data-aria-label="${primaryLabel}"></mdc-checkbox>
          `,
          });
          const checkbox = listitem.locator('mdc-checkbox');
          const waitForCheckboxKeyUp = await componentsPage.waitForEvent(checkbox, 'keyup');
          const waitForCheckboxKeyDown = await componentsPage.waitForEvent(checkbox, 'keydown');
          await componentsPage.actionability.pressTab();
          await expect(listitem).toBeFocused();
          await componentsPage.actionability.pressTab();
          await expect(checkbox).toBeFocused();
          const waitForListItemKeyUp = await componentsPage.waitForEvent(listitem, 'keyup');
          const waitForListItemKeyDown = await componentsPage.waitForEvent(listitem, 'keydown');
          await componentsPage.page.keyboard.press('Space');
          await expect(waitForCheckboxKeyDown).toEventEmitted();
          await expect(waitForCheckboxKeyUp).toEventEmitted();
          await expect(waitForListItemKeyDown).not.toEventEmitted();
          await expect(waitForListItemKeyUp).not.toEventEmitted();
        });

        await test.step('should trigger keyup & keydown events on trailing controls & not on listitem', async () => {
          const listitem = await setup({
            componentsPage,
            label: primaryLabel,
            children: `
            <mdc-button slot="trailing-controls">Click</mdc-button>
          `,
          });
          const button = listitem.locator('mdc-button');
          const waitForButtonKeyUp = await componentsPage.waitForEvent(button, 'keyup');
          const waitForButtonKeyDown = await componentsPage.waitForEvent(button, 'keydown');
          await componentsPage.actionability.pressTab();
          await expect(listitem).toBeFocused();
          await componentsPage.actionability.pressTab();
          await expect(button).toBeFocused();
          const waitForListItemKeyUp = await componentsPage.waitForEvent(listitem, 'keyup');
          const waitForListItemKeyDown = await componentsPage.waitForEvent(listitem, 'keydown');
          await componentsPage.page.keyboard.press('Enter');
          await expect(waitForButtonKeyDown).toEventEmitted();
          await expect(waitForButtonKeyUp).toEventEmitted();
          await expect(waitForListItemKeyDown).not.toEventEmitted();
          await expect(waitForListItemKeyUp).not.toEventEmitted();
        });
      });

      await test.step('component should show tooltip when the listitem is focused and tooltip associated with it', async () => {
        await componentsPage.mount({
          html: `<mdc-list><mdc-listitem 
          label="A long label here" 
          id="listitem-with-tooltip" 
          style="width: 100px"></mdc-listitem>
          <mdc-tooltip 
          id="listitem-tooltip" 
          triggerID="listitem-with-tooltip" 
          show-arrow>The long label associated with the listitem is displayed here</mdc-tooltip></mdc-list>`,
          clearDocument: true,
        });
        const listitem = componentsPage.page.locator('mdc-listitem');
        await listitem.waitFor();
        await componentsPage.actionability.pressTab();
        await expect(listitem).toBeFocused();
        const tooltip = componentsPage.page.locator('mdc-tooltip');
        await expect(tooltip).toBeVisible();
        const text = await tooltip.textContent();
        expect(text?.trim()).toBe('The long label associated with the listitem is displayed here');
      });
    });
  });
});
