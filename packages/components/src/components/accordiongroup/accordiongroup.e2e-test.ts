/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { KEYS } from '../../utils/keys';

import type { Size, Variant } from './accordiongroup.types';
import { SIZE, VARIANT } from './accordiongroup.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  allowMultiple?: boolean;
  size?: Size;
  variant?: Variant;
  items: any;
};

const accordionItems = [
  { headerText: 'Accordion Header 1', expanded: true, disabled: false },
  { headerText: 'Accordion Header 2', expanded: false, disabled: false },
  { headerText: 'Accordion Header 3', expanded: false, disabled: true },
];

const defaultPlaceholder = 'placeholder-bold';
const defaultContent =
  'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const createAccordionMarkup = (item: any, index: number) => `
  <mdc-accordion
    ${item.expanded ? 'expanded' : ''}
    ${item.disabled ? 'disabled' : ''}
    header-text="${item.headerText}"
    prefix-icon="${defaultPlaceholder}"
  >
    <mdc-chip slot="leading-controls" label="First"></mdc-chip>
    <mdc-icon slot="trailing-controls" name="${defaultPlaceholder}"></mdc-icon>
    <mdc-chip slot="trailing-controls" label="Last"></mdc-chip>
    <mdc-avatarbutton slot="trailing-controls" aria-label="avatar index ${index + 1}" initials="#${index + 1}"></mdc-avatarbutton>
    ${defaultContent}
  </mdc-accordion>
`;

const createAccordionButtonMarkup = (item: any) => `
  <mdc-accordionbutton
    ${item.expanded ? 'expanded' : ''}
    ${item.disabled ? 'disabled' : ''}
    header-text="${item.headerText}"
    prefix-icon="${defaultPlaceholder}"
  >
    ${defaultContent}
  </mdc-accordionbutton>
`;

const setup = async (args: SetupOptions) => {
  const { componentsPage, items = accordionItems, ...restArgs } = args;

  await componentsPage.mount({
    html: `
      <mdc-accordiongroup
        ${restArgs.allowMultiple ? 'allow-multiple' : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
      >
        ${items.map(createAccordionButtonMarkup).join('\n')}
      </mdc-accordiongroup>
    `,
    clearDocument: true,
  });

  const accordionGroup = componentsPage.page.locator('mdc-accordiongroup');
  const accordions = accordionGroup.locator('mdc-accordion');
  const accordionButtons = accordionGroup.locator('mdc-accordionbutton');

  await accordionGroup.waitFor();

  return {
    accordionButtons,
    accordionGroup,
    accordions,
  };
};

test.use({ viewport: { width: 500, height: 2000 } });
test.describe('AccordionGroup Feature Scenarios', () => {
  test('mdc-accordiongroup', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const options = { createNewRow: true };

      await test.step('group of accordion with default settings', async () => {
        const accordionSheet = new StickerSheet(componentsPage, 'mdc-accordiongroup', 'margin: 0.25rem 0;');

        // Default accordion group
        accordionSheet.setAttributes({});
        accordionSheet.setChildren(accordionItems.map(createAccordionMarkup).join('\n'));
        await accordionSheet.createMarkupWithCombination({ size: SIZE, variant: VARIANT }, options);

        await accordionSheet.mountStickerSheet();
        await test.step('matches screenshot of element', async () => {
          await componentsPage.visualRegression.takeScreenshot('mdc-accordiongroup-with-accordion', {
            element: accordionSheet.getWrapperContainer(),
          });
        });
      });

      await test.step('group of accordion button with default settings', async () => {
        const accordionButtonSheet = new StickerSheet(componentsPage, 'mdc-accordiongroup', 'margin: 0.25rem 0;');

        // Default accordion button group
        accordionButtonSheet.setAttributes({});
        accordionButtonSheet.setChildren(accordionItems.map(createAccordionButtonMarkup).join('\n'));
        await accordionButtonSheet.createMarkupWithCombination({ size: SIZE, variant: VARIANT }, options);

        await accordionButtonSheet.mountStickerSheet();
        await test.step('matches screenshot of element', async () => {
          await componentsPage.visualRegression.takeScreenshot('mdc-accordiongroup-with-accordionbutton', {
            element: accordionButtonSheet.getWrapperContainer(),
          });
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await setup({ componentsPage, items: accordionItems });
      await componentsPage.accessibility.checkForA11yViolations('accordiongroup-default');
    });

    /**
     * RENDERING AND VISUAL STATES
     */
    await test.step('rendering and visual states', async () => {
      await test.step('render accordion group with default settings', async () => {
        const { accordionGroup } = await setup({ componentsPage, items: accordionItems });

        // Verify all items are rendered
        await expect(accordionGroup.locator('mdc-accordionbutton').locator('div[part="header-section"]')).toHaveCount(
          3,
        );

        // First item should be expanded by default
        await expect(accordionGroup.locator('mdc-accordionbutton[expanded]')).toHaveCount(1);

        // Other items should be collapsed
        await expect(accordionGroup.locator('mdc-accordionbutton:not([expanded])')).toHaveCount(2);
      });

      await test.step('default attributes for accordion group', async () => {
        const { accordionGroup } = await setup({ componentsPage, items: accordionItems });
        await expect(accordionGroup).not.toHaveAttribute('allow-multiple');
        await expect(accordionGroup).toHaveAttribute('size', 'small');
        await expect(accordionGroup).toHaveAttribute('variant', 'stacked');
      });

      await test.step('update size attribute', async () => {
        const { accordionGroup } = await setup({ componentsPage, items: accordionItems, size: 'large' });
        await expect(accordionGroup).toHaveAttribute('size', 'large');
        for (const accordion of accordionItems) {
          await expect(
            accordionGroup.locator('mdc-accordionbutton').nth(accordionItems.indexOf(accordion)),
          ).toHaveAttribute('size', 'large');
        }
      });

      await test.step('update variant attribute', async () => {
        const { accordionGroup } = await setup({ componentsPage, items: accordionItems, variant: 'borderless' });
        await expect(accordionGroup).toHaveAttribute('variant', 'borderless');
        for (const accordion of accordionItems) {
          await expect(
            accordionGroup.locator('mdc-accordionbutton').nth(accordionItems.indexOf(accordion)),
          ).toHaveAttribute('variant', 'borderless');
        }
      });
    });

    /**
     * USER INTERACTION
     */
    await test.step('user interactions', async () => {
      await test.step('mouse click', async () => {
        await test.step('when allow multiple is false, only one item should be expanded at a time', async () => {
          const { accordionGroup } = await setup({ componentsPage, items: accordionItems, allowMultiple: false });
          await accordionGroup.locator('mdc-accordionbutton').nth(1).click();
          await expect(accordionGroup.locator('mdc-accordionbutton[expanded]')).toHaveCount(1);
          await expect(accordionGroup.locator('mdc-accordionbutton[expanded]')).toHaveAttribute(
            'header-text',
            'Accordion Header 2',
          );
          await expect(accordionGroup.locator('mdc-accordionbutton:not([expanded])')).toHaveCount(2);
        });

        await test.step('when allow multiple is true, more than one item should be expanded', async () => {
          const { accordionGroup } = await setup({ componentsPage, items: accordionItems, allowMultiple: true });
          await accordionGroup.locator('mdc-accordionbutton').nth(1).click();
          await expect(accordionGroup.locator('mdc-accordionbutton[expanded]')).toHaveCount(2);
          await expect(accordionGroup.locator('mdc-accordionbutton:not([expanded])')).toHaveCount(1);
        });

        await test.step('disabled state', async () => {
          const { accordionGroup } = await setup({ componentsPage, items: accordionItems });
          // Should not expand when clicked
          await accordionGroup.locator('mdc-accordionbutton').nth(2).click({ force: true });
          await expect(accordionGroup.locator('mdc-accordionbutton').nth(2)).not.toHaveAttribute('expanded');
        });
      });
      await test.step('keyboard click', async () => {
        await test.step('component should be focusable with tab and shift tab', async () => {
          const { accordionButtons } = await setup({
            componentsPage,
            items: accordionItems.map(accordion => ({ ...accordion, expanded: false, disabled: false })),
          });
          await componentsPage.actionability.pressAndCheckFocus(KEYS.TAB, [
            accordionButtons.first(),
            accordionButtons.nth(1),
            accordionButtons.last(),
          ]);
          await componentsPage.actionability.pressAndCheckFocus(KEYS.SHIFT_TAB, [
            accordionButtons.nth(1),
            accordionButtons.first(),
          ]);
        });

        await test.step('when allow multiple is false, only one item should be expanded at a time', async () => {
          const { accordionGroup, accordionButtons } = await setup({
            componentsPage,
            items: accordionItems,
            allowMultiple: false,
          });
          await componentsPage.actionability.pressAndCheckFocus(KEYS.TAB, [accordionButtons.first()]);
          await componentsPage.page.keyboard.press(KEYS.ENTER);
          await expect(accordionButtons.first()).not.toHaveAttribute('expanded');
          await componentsPage.actionability.pressAndCheckFocus(KEYS.TAB, [accordionButtons.nth(1)]);
          await componentsPage.page.keyboard.press(KEYS.ENTER);
          await expect(accordionButtons.nth(1)).toHaveAttribute('expanded');
          await expect(accordionButtons.nth(1).locator('[part="body-section"]')).toBeVisible();
          await expect(accordionButtons.first().locator('[part="body-section"]')).not.toBeVisible();
          await expect(accordionGroup.locator('mdc-accordionbutton:not([expanded])')).toHaveCount(2);
        });

        await test.step('when allow multiple is true, more than one item should be expanded', async () => {
          const { accordionGroup, accordionButtons } = await setup({
            componentsPage,
            items: accordionItems,
            allowMultiple: true,
          });
          await componentsPage.actionability.pressAndCheckFocus(KEYS.TAB, [
            accordionButtons.first(),
            accordionButtons.nth(1),
          ]);
          await componentsPage.page.keyboard.press(KEYS.ENTER);
          await expect(accordionGroup.locator('mdc-accordionbutton[expanded]')).toHaveCount(2);
        });

        await test.step('disabled state', async () => {
          const { accordionGroup } = await setup({ componentsPage, items: accordionItems });
          // Should not respond to keyboard
          await accordionGroup.locator('mdc-accordionbutton').nth(2).focus();
          await accordionGroup.locator('mdc-accordionbutton').nth(2).press(KEYS.ENTER);
          await expect(accordionGroup.locator('mdc-accordionbutton').nth(2)).not.toHaveAttribute('expanded');
        });
      });
    });
  });
});
