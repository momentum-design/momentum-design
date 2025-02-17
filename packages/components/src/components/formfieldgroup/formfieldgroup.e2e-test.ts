import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { ROLE } from './formfieldgroup.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  'header-text'?: string;
  'description-text'?: string;
  children: string;
}

const headerText = 'Select all powers';
const descriptionText = 'check all that apply';
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
        ${restArgs['header-text'] ? `header-text="${restArgs['header-text']}"` : ''}
        ${restArgs['description-text'] ? `description-text="${restArgs['description-text']}"` : ''}
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
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('formfieldgroup-default');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const createNewRow = true;
    const formfieldgroupStickerSheet = new StickerSheet(componentsPage, 'mdc-formfieldgroup');
    formfieldgroupStickerSheet.setAttributes({
      'header-text': headerText,
      'description-text': descriptionText,
    });
    formfieldgroupStickerSheet.setChildren(children);
    await formfieldgroupStickerSheet.createMarkupWithCombination({}, { createNewRow });

    formfieldgroupStickerSheet.setAttributes({
      'header-text': 'Engine thrusters',
      'description-text': 'Select all the thrusters you would like to turn on',
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
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const formfieldgroup = await setup({ componentsPage, children });

    await test.step('attribute `header-text` should be present on component when set', async () => {
      await componentsPage.setAttributes(formfieldgroup, { 'header-text': headerText });
      const mdcText = componentsPage.page.locator('mdc-text[id=\'header-id\']');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe(headerText);
    });

    await test.step('attribute `description-text` should be present on component when set', async () => {
      await componentsPage.setAttributes(formfieldgroup, { 'description-text': descriptionText });
      const mdcText = componentsPage.page.locator('mdc-text[id=\'description-id\']');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe(descriptionText);
    });

    await test.step('attribute `data-aria-label` should be present on component when set', async () => {
      await componentsPage.setAttributes(formfieldgroup, { 'data-aria-label': ariaLabel });
      const divContent = await componentsPage.page.getByRole(ROLE.GROUP).getAttribute('aria-label');
      expect(divContent).toBe(ariaLabel);
    });
  });
});
