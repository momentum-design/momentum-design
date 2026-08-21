import type { Locator } from '@playwright/test';

import { expect, test } from '../../../config/playwright/setup';
import type { ComponentsPage } from '../../../config/playwright/setup';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  children?: string;
  helpText?: string;
  helpTextType?: string;
  label?: string;
  required?: boolean;
};

const defaultChildren = `
  <mdc-checkbox id="avengers" label="Avengers"></mdc-checkbox>
  <mdc-checkboxtree id="avengers-tree">
    <mdc-checkbox id="iron-man" checked label="Iron Man"></mdc-checkbox>
    <mdc-checkbox id="captain-america" label="Captain America"></mdc-checkbox>
    <mdc-checkboxtree id="captain-america-tree">
      <mdc-checkbox id="falcon" checked label="Falcon"></mdc-checkbox>
      <mdc-checkbox id="winter-soldier" label="Winter Soldier"></mdc-checkbox>
    </mdc-checkboxtree>
    <mdc-checkbox id="thor" label="Thor"></mdc-checkbox>
  </mdc-checkboxtree>
  <mdc-checkbox id="guardians" label="Guardians of the Galaxy"></mdc-checkbox>
  <mdc-checkboxtree id="guardians-tree">
    <mdc-checkbox id="peter-quill" checked label="Peter Quill"></mdc-checkbox>
    <mdc-checkbox id="gamora" checked label="Gamora"></mdc-checkbox>
  </mdc-checkboxtree>
`;

const setup = async ({
  componentsPage,
  children = defaultChildren,
  helpText = 'Select all that apply.',
  helpTextType = VALIDATION.DEFAULT,
  label = 'Select your Avengers team',
  required = true,
}: SetupOptions): Promise<Locator> => {
  await componentsPage.mount({
    html: `
      <div>
        <mdc-button id="before-tree">Before tree</mdc-button>
        <mdc-checkboxtree
          label="${label}"
          help-text="${helpText}"
          help-text-type="${helpTextType}"
          ${required ? 'required' : ''}
        >
          ${children}
        </mdc-checkboxtree>
        <mdc-button id="after-tree">After tree</mdc-button>
      </div>
    `,
    clearDocument: true,
  });

  const tree = componentsPage.page.locator('mdc-checkboxtree').first();
  await tree.waitFor();
  await expect(tree.locator('mdc-checkbox').first()).toHaveAttribute('tabindex', '0');
  return tree;
};

test('mdc-checkboxtree', async ({ componentsPage }) => {
  await test.step('accessibility', async () => {
    const tree = await setup({ componentsPage });
    const group = componentsPage.page.getByRole(ROLE.GROUP, { name: 'Select your Avengers team' });

    await expect(group).toHaveCount(1);
    await expect(group).toHaveAccessibleDescription('Select all that apply.');
    await expect(tree).not.toHaveAttribute('aria-invalid');
    const nestedTrees = tree.locator('mdc-checkboxtree');
    await expect(nestedTrees).toHaveCount(3);
    const nestedTreeCount = await nestedTrees.count();
    await Promise.all(
      Array.from({ length: nestedTreeCount }, (_, index) => expect(nestedTrees.nth(index)).not.toHaveAttribute('role')),
    );
    await expect(componentsPage.page.getByRole(ROLE.CHECKBOX)).toHaveCount(9);
    await expect(componentsPage.page.getByRole(ROLE.CHECKBOX, { name: 'Avengers' })).toHaveAttribute(
      'aria-checked',
      'mixed',
    );
    await componentsPage.accessibility.checkForA11yViolations('checkboxtree-default');

    const errorTree = await setup({
      componentsPage,
      helpText: 'You must select at least one team member.',
      helpTextType: VALIDATION.ERROR,
    });
    await expect(errorTree).toHaveAttribute('aria-invalid', 'true');
    await expect(errorTree).toHaveAccessibleDescription('You must select at least one team member.');
    await componentsPage.accessibility.checkForA11yViolations('checkboxtree-error');
  });

  await test.step('recursive checked state', async () => {
    const tree = await setup({ componentsPage });
    const avengers = tree.locator('#avengers');
    const captainAmerica = tree.locator('#captain-america');
    const avengersDescendants = tree.locator('#avengers-tree mdc-checkbox');

    await expect(avengers).toHaveAttribute('indeterminate', '');
    await expect(captainAmerica).toHaveAttribute('indeterminate', '');
    await expect(tree.locator('#guardians')).toHaveAttribute('checked', '');

    await avengers.click();
    await expect(avengersDescendants).toHaveCount(5);
    const descendantCount = await avengersDescendants.count();
    await Promise.all(
      Array.from({ length: descendantCount }, async (_, index) => {
        await expect(avengersDescendants.nth(index)).toHaveAttribute('checked', '');
        await expect(avengersDescendants.nth(index)).not.toHaveAttribute('indeterminate');
      }),
    );
    await expect(avengers).toHaveAttribute('checked', '');

    await tree.locator('#winter-soldier').click();
    await expect(captainAmerica).toHaveAttribute('indeterminate', '');
    await expect(avengers).toHaveAttribute('indeterminate', '');

    await avengers.click();
    await expect(avengers).toHaveAttribute('checked', '');
    await expect(tree.locator('#winter-soldier')).toHaveAttribute('checked', '');

    await avengers.click();
    await expect(avengers).not.toHaveAttribute('checked');
    await Promise.all(
      Array.from({ length: descendantCount }, (_, index) =>
        expect(avengersDescendants.nth(index)).not.toHaveAttribute('checked'),
      ),
    );
  });

  await test.step('immutable descendants', async () => {
    const tree = await setup({
      componentsPage,
      children: `
        <mdc-checkbox id="parent" label="Parent"></mdc-checkbox>
        <mdc-checkboxtree>
          <mdc-checkbox id="available-child" label="Available child"></mdc-checkbox>
          <mdc-checkbox id="disabled-child" disabled label="Disabled child"></mdc-checkbox>
          <mdc-checkbox id="readonly-child" readonly label="Readonly child"></mdc-checkbox>
        </mdc-checkboxtree>
      `,
    });

    await tree.locator('#parent').click();
    await expect(tree.locator('#available-child')).toHaveAttribute('checked', '');
    await expect(tree.locator('#disabled-child')).not.toHaveAttribute('checked');
    await expect(tree.locator('#readonly-child')).not.toHaveAttribute('checked');
    await expect(tree.locator('#parent')).toHaveAttribute('indeterminate', '');
  });

  await test.step('dynamic composition and programmatic state', async () => {
    const tree = await setup({
      componentsPage,
      children: `
        <mdc-checkbox id="parent" label="Parent"></mdc-checkbox>
        <mdc-checkboxtree id="children">
          <mdc-checkbox id="first-child" checked label="First child"></mdc-checkbox>
        </mdc-checkboxtree>
      `,
    });
    const parent = tree.locator('#parent');

    await expect(parent).toHaveAttribute('checked', '');
    await tree.locator('#children').evaluate(element => {
      const checkbox = document.createElement('mdc-checkbox');
      checkbox.id = 'added-child';
      checkbox.setAttribute('label', 'Added child');
      element.append(checkbox);
    });
    await expect(parent).toHaveAttribute('indeterminate', '');

    await tree.locator('#first-child').evaluate(element => element.remove());
    await expect(parent).not.toHaveAttribute('checked');
    await expect(parent).not.toHaveAttribute('indeterminate');

    await tree.locator('#added-child').evaluate((checkbox: any) => {
      const addedCheckbox = checkbox;
      addedCheckbox.checked = true;
    });
    await expect(parent).toHaveAttribute('checked', '');
    await expect(parent).not.toHaveAttribute('indeterminate');
  });

  await test.step('keyboard navigation', async () => {
    const tree = await setup({ componentsPage });
    const beforeTree = componentsPage.page.locator('#before-tree');
    const afterTree = componentsPage.page.locator('#after-tree');

    await beforeTree.focus();
    await componentsPage.actionability.pressTab();
    await expect(tree.locator('#avengers')).toBeFocused();

    await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
    await expect(tree.locator('#iron-man')).toBeFocused();
    await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
    await expect(tree.locator('#captain-america')).toBeFocused();
    await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
    await expect(tree.locator('#falcon')).toBeFocused();

    await componentsPage.page.keyboard.press(KEYS.HOME);
    await expect(tree.locator('#avengers')).toBeFocused();
    await componentsPage.page.keyboard.press(KEYS.END);
    await expect(tree.locator('#gamora')).toBeFocused();
    await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
    await expect(tree.locator('#gamora')).toBeFocused();
    await componentsPage.page.keyboard.press(KEYS.ARROW_UP);
    await expect(tree.locator('#peter-quill')).toBeFocused();

    await componentsPage.page.keyboard.press(KEYS.ARROW_LEFT);
    await expect(tree.locator('#peter-quill')).toBeFocused();
    await componentsPage.page.keyboard.press(KEYS.ARROW_RIGHT);
    await expect(tree.locator('#peter-quill')).toBeFocused();

    await componentsPage.page.keyboard.press(KEYS.SPACE);
    await expect(tree.locator('#peter-quill')).not.toHaveAttribute('checked');

    await componentsPage.actionability.pressTab();
    await expect(afterTree).toBeFocused();
  });

  await test.step('disabled checkboxes are skipped during navigation', async () => {
    const tree = await setup({
      componentsPage,
      children: `
        <mdc-checkbox id="first" label="First"></mdc-checkbox>
        <mdc-checkbox id="disabled" disabled label="Disabled"></mdc-checkbox>
        <mdc-checkbox id="last" label="Last"></mdc-checkbox>
      `,
    });

    await componentsPage.page.locator('#before-tree').focus();
    await componentsPage.actionability.pressTab();
    await expect(tree.locator('#first')).toBeFocused();
    await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
    await expect(tree.locator('#last')).toBeFocused();
  });

  await test.step('programmatic click() on a parent cascades to its descendants', async () => {
    const tree = await setup({
      componentsPage,
      children: `
        <mdc-checkbox id="parent" label="Parent"></mdc-checkbox>
        <mdc-checkboxtree>
          <mdc-checkbox id="child-one" label="Child one"></mdc-checkbox>
          <mdc-checkbox id="child-two" label="Child two"></mdc-checkbox>
        </mdc-checkboxtree>
      `,
    });
    const parent = tree.locator('#parent');

    await parent.evaluate((checkbox: any) => checkbox.click());
    await expect(parent).toHaveAttribute('checked', '');
    await expect(tree.locator('#child-one')).toHaveAttribute('checked', '');
    await expect(tree.locator('#child-two')).toHaveAttribute('checked', '');
  });

  await test.step('aria-label keeps tracking label after more than one change', async () => {
    const tree = await setup({ componentsPage, label: '' });

    await expect(tree).toHaveAttribute('aria-label', '');
    await tree.evaluate((element: any) => {
      const checkboxTree = element;
      checkboxTree.label = 'Select your Avengers team';
    });
    await expect(tree).toHaveAttribute('aria-label', 'Select your Avengers team');
    await tree.evaluate((element: any) => {
      const checkboxTree = element;
      checkboxTree.label = 'Select your Guardians team';
    });
    await expect(tree).toHaveAttribute('aria-label', 'Select your Guardians team');
  });

  await test.step('--mdc-checkboxtree-indent set on the outer tree reaches nested levels', async () => {
    const tree = await setup({ componentsPage });
    await tree.evaluate(element => element.style.setProperty('--mdc-checkboxtree-indent', '40px'));

    const nestedTreeIndent = await tree
      .locator('#avengers-tree')
      .evaluate(element => getComputedStyle(element).paddingInlineStart);
    const doubleNestedTreeIndent = await tree
      .locator('#captain-america-tree')
      .evaluate(element => getComputedStyle(element).paddingInlineStart);

    expect(nestedTreeIndent).toBe('40px');
    expect(doubleNestedTreeIndent).toBe('40px');
  });

  await test.step('visual regression', async () => {
    const tree = await setup({ componentsPage });
    await componentsPage.visualRegression.takeScreenshot('mdc-checkboxtree', { element: tree });
  });
});
