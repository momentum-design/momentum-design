import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  'secondary-label'?: string;
  'arrow-position'?: string;
  'tooltip-text'?: string;
  children?: string;
};

const primaryLabel = 'Primary Label';
const secondaryLabel = 'Secondary Label';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-menuitem
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs['secondary-label'] ? `secondary-label="${restArgs['secondary-label']}"` : ''}
        ${restArgs['arrow-position'] ? `arrow-position="${restArgs['arrow-position']}"` : ''}
        ${restArgs['tooltip-text'] ? `tooltip-text="${restArgs['tooltip-text']}"` : ''}
      >
        ${restArgs.children ?? ''}
      </mdc-menuitem>
    `,
    clearDocument: true,
  });
  const menuitem = componentsPage.page.locator('mdc-menuitem');
  await menuitem.waitFor();
  return menuitem;
};

test('mdc-menuitem', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const menuitemSheet = new StickerSheet(componentsPage, 'mdc-menuitem', 'margin: 0.25rem 0;');
    const options = { createNewRow: true };
    menuitemSheet.setAttributes({ label: primaryLabel });
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setAttributes({ label: primaryLabel, 'secondary-label': secondaryLabel });
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setChildren(`
      <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
    `);
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setChildren(`
      <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    `);
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setChildren(`
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    `);
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setChildren(`
      <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
    `);
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setChildren(`
      <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
    `);
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setAttributes({ label: primaryLabel, 'secondary-label': secondaryLabel, 'side-header-text': '##' });
    menuitemSheet.setChildren('');
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setAttributes({ label: primaryLabel, 'arrow-position': 'leading' });
    menuitemSheet.setChildren('');
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setAttributes({ label: primaryLabel, 'arrow-position': 'trailing' });
    menuitemSheet.setChildren('');
    await menuitemSheet.createMarkupWithCombination({}, options);
    menuitemSheet.setAttributes({ label: primaryLabel, 'secondary-label': secondaryLabel, disabled: true });
    menuitemSheet.setChildren('');
    await menuitemSheet.createMarkupWithCombination({}, options);

    await menuitemSheet.mountStickerSheet({ role: 'menu' });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-menuitem', {
        element: menuitemSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('menuitem-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const menuitem = await setup({ componentsPage });
    await test.step('attribute role, tabindex should be present on component by default', async () => {
      await expect(menuitem).toHaveAttribute('role', 'menuitem');
      await expect(menuitem).toHaveAttribute('tabindex', '0');
      await expect(menuitem).toHaveAttribute('variant', 'inset-rectangle');
    });

    await test.step('should have primary text label when the attribute is passed', async () => {
      await componentsPage.setAttributes(menuitem, { label: primaryLabel });
      const mdcText = componentsPage.page.locator('mdc-text');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe(primaryLabel);
    });

    await test.step('should have secondary text label when the attribute is passed', async () => {
      await componentsPage.setAttributes(menuitem, { 'secondary-label': secondaryLabel });
      const mdcText = componentsPage.page.locator('mdc-text[part="leading-text-secondary-label"]');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe(secondaryLabel);
    });

    await test.step('should have an arrow with leading position when the attribute is passed', async () => {
      await componentsPage.setAttributes(menuitem, { 'arrow-position': 'leading', 'arrow-direction': 'positive' });
      const mdcIcon = componentsPage.page.locator('mdc-icon[part="leading-arrow"]');
      await mdcIcon.waitFor();
      await expect(mdcIcon).toHaveAttribute('name', 'arrow-right-bold');
    });

    await test.step('should have an arrow with trailing position when the attribute is passed', async () => {
      await componentsPage.setAttributes(menuitem, { 'arrow-position': 'trailing', 'arrow-direction': 'negative' });
      const mdcIcon = componentsPage.page.locator('mdc-icon[part="trailing-arrow"]');
      await mdcIcon.waitFor();
      await expect(mdcIcon).toHaveAttribute('name', 'arrow-left-bold');
    });
  });
});
