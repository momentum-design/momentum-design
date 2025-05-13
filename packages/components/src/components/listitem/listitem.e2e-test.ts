import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
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
  children?: string;
}

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

test('mdc-listitem', async ({ componentsPage }) => {
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
      style: 'width: 15rem',
    });
    listitemSheet.setChildren(`
      <div slot="leading-controls">
        <mdc-checkbox data-aria-label="${primaryLabel}" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
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
    });
  });
});
