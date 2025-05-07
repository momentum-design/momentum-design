import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { ROLE } from '../../utils/roles';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  'help-text'?: string;
  children: string;
}

const label = 'Select all powers';
const helpText = 'check all that apply';
const ariaLabel = 'header text aria label';
const children = `
  <mdc-checkbox label="Flight"></mdc-checkbox>
  <mdc-checkbox label="Mind control"></mdc-checkbox>
  <mdc-checkbox label="Super genius"></mdc-checkbox>
  <mdc-checkbox label="Super strength"></mdc-checkbox>
  <mdc-checkbox label="Tactics"></mdc-checkbox>
  <mdc-checkbox label="Weather control"></mdc-checkbox>
`;
const toggleChildren = `
  <mdc-toggle label="Left Thruster 1"></mdc-toggle>
  <mdc-toggle label="Left Thruster 2"></mdc-toggle>
  <mdc-toggle label="Left Thruster 3"></mdc-toggle>
  <mdc-toggle label="Right Thruster 1"></mdc-toggle>
  <mdc-toggle label="Right Thruster 2"></mdc-toggle>
  <mdc-toggle label="Right Thruster 3"></mdc-toggle>
`;

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-formfieldgroup
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
      >${restArgs.children}</mdc-formfieldgroup>
    `,
    clearDocument: true,
  });
  const formfieldgroup = componentsPage.page.locator('mdc-formfieldgroup');
  await formfieldgroup.waitFor();
  return formfieldgroup;
};

test('mdc-formfieldgroup', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const createNewRow = true;
    const formfieldgroupStickerSheet = new StickerSheet(componentsPage, 'mdc-formfieldgroup');
    formfieldgroupStickerSheet.setAttributes({
      label,
      'help-text': helpText,
    });
    formfieldgroupStickerSheet.setChildren(children);
    await formfieldgroupStickerSheet.createMarkupWithCombination({}, { createNewRow });

    formfieldgroupStickerSheet.setAttributes({
      label: 'Engine thrusters',
      'help-text': 'Select all the thrusters you would like to turn on',
    });
    formfieldgroupStickerSheet.setChildren(toggleChildren);
    await formfieldgroupStickerSheet.createMarkupWithCombination({}, { createNewRow });
    await formfieldgroupStickerSheet.mountStickerSheet();

    await test.step('matches screenshot of default element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-formfieldgroup', {
        element: formfieldgroupStickerSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('formfieldgroup-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const formfieldgroup = await setup({ componentsPage, children });

    await test.step('attribute `label` should be present on component when set', async () => {
      await componentsPage.setAttributes(formfieldgroup, { label });
      const labelElement = componentsPage.page.locator('mdc-text[id="heading-id"]');
      const groupLabelText = await labelElement.nth(0).textContent();
      expect(groupLabelText).toBe(label);
    });

    await test.step('attribute `help-text` should be present on component when set', async () => {
      await componentsPage.setAttributes(formfieldgroup, { 'help-text': helpText });
      const mdcText = componentsPage.page.locator('mdc-text[id="helper-text-id"]');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe(helpText);
    });

    await test.step('attribute `data-aria-label` should be present on component when set', async () => {
      await componentsPage.setAttributes(formfieldgroup, { 'data-aria-label': ariaLabel });
      const ariaLabelContent = await componentsPage.page.getByRole(ROLE.GROUP).getAttribute('aria-label');
      expect(ariaLabelContent).toBe(ariaLabel);
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('keyboard', async () => {
      await test.step('component should travel through checkbox children with tab', async () => {
        const formfieldgroup = await setup({ componentsPage, children });

        await componentsPage.actionability.pressTab();
        await expect(formfieldgroup.locator('mdc-checkbox').first()).toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(formfieldgroup.locator('mdc-checkbox').nth(1)).toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(formfieldgroup.locator('mdc-checkbox').nth(2)).toBeFocused();
      });
    });

    await test.step('component should travel through toggle children with tab', async () => {
      const formfieldgroup = await setup({ componentsPage, children: toggleChildren });

      await componentsPage.actionability.pressTab();
      await expect(formfieldgroup.locator('mdc-toggle').first()).toBeFocused();

      await componentsPage.actionability.pressTab();
      await expect(formfieldgroup.locator('mdc-toggle').nth(1)).toBeFocused();

      await componentsPage.actionability.pressTab();
      await expect(formfieldgroup.locator('mdc-toggle').nth(2)).toBeFocused();
    });
  });
});
