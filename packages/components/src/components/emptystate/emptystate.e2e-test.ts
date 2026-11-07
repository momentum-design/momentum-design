import { expect } from '@playwright/test';

import { test, type ComponentsPage } from '../../../config/playwright/setup';
import { VALID_TEXT_TAGS } from '../text/text.constants';

import { DEFAULTS, LAYOUT, SIZE } from './emptystate.constants';
import type { EmptyStateHeadingTagName, EmptyStateLayout, EmptyStateSize } from './emptystate.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  layout?: EmptyStateLayout;
  size?: EmptyStateSize;
  heading?: string;
  headingTagName?: EmptyStateHeadingTagName;
  description: string;
  children?: string;
};

const setup = async ({
  componentsPage,
  layout,
  size,
  heading,
  headingTagName,
  description,
  children = '',
}: SetupOptions) => {
  await componentsPage.mount({
    html: `
      <mdc-emptystate
        ${layout ? `layout="${layout}"` : ''}
        ${size ? `size="${size}"` : ''}
        ${heading ? `heading="${heading}"` : ''}
        ${headingTagName ? `heading-tag-name="${headingTagName}"` : ''}
        description="${description}"
      >${children}</mdc-emptystate>
    `,
    clearDocument: true,
  });

  const emptyState = componentsPage.page.locator('mdc-emptystate');
  await emptyState.waitFor({ state: 'attached' });
  return emptyState;
};

test.describe('mdc-emptystate', () => {
  test('should reflect default and supplied attributes and render consumer text', async ({ componentsPage }) => {
    const emptyState = await setup({
      componentsPage,
      heading: 'No items yet',
      description: 'Create an item to get started.',
    });

    await expect(emptyState).toHaveAttribute('layout', DEFAULTS.LAYOUT);
    await expect(emptyState).toHaveAttribute('size', DEFAULTS.SIZE);
    await expect(emptyState).toHaveAttribute('heading-tag-name', DEFAULTS.HEADING_TAG_NAME);
    await expect(emptyState.getByRole('heading', { name: 'No items yet', level: 2 })).toBeVisible();
    await expect(emptyState.locator('mdc-text').nth(1)).toHaveText('Create an item to get started.');

    await setup({
      componentsPage,
      layout: LAYOUT.HORIZONTAL,
      size: SIZE.LARGE,
      heading: 'No items yet',
      description: 'Create an item to get started.',
    });
    await expect(componentsPage.page.locator('mdc-emptystate')).toHaveAttribute('layout', LAYOUT.HORIZONTAL);
    await expect(componentsPage.page.locator('mdc-emptystate')).toHaveAttribute('size', SIZE.LARGE);
  });

  test('should allow the heading level to match its page context', async ({ componentsPage }) => {
    const emptyState = await setup({
      componentsPage,
      heading: 'No items yet',
      headingTagName: VALID_TEXT_TAGS.H3,
      description: 'Create an item to get started.',
    });

    await expect(emptyState.getByRole('heading', { name: 'No items yet', level: 3 })).toBeVisible();
    await expect(emptyState.getByRole('heading', { name: 'No items yet', level: 2 })).toHaveCount(0);
  });

  test('should render rich heading content from the heading slot in place of the heading property', async ({ componentsPage }) => {
    const emptyState = await setup({
      componentsPage,
      heading: 'Fallback heading',
      description: 'Create an item to get started.',
      children: '<span slot="heading" role="heading" aria-level="3">Let’s chat <span aria-hidden="true">🤫</span></span>',
    });

    const heading = emptyState.getByRole('heading', { name: 'Let’s chat', level: 3 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Let’s chat 🤫');
    const assignedHeadingText = await emptyState
      .locator('slot[name="heading"]')
      .evaluate((slot) =>
        (slot as HTMLSlotElement).assignedElements().map((element) => element.textContent?.trim()),
      );

    expect(assignedHeadingText).toEqual(['Let’s chat 🤫']);
  });

  test('should allow the heading to be omitted for search or filter results', async ({ componentsPage }) => {
    const description = 'Try changing your search or clearing filters.';
    const emptyState = await setup({ componentsPage, description });

    await expect(emptyState.getByRole('heading')).toHaveCount(0);
    await expect(emptyState.locator('mdc-text')).toHaveText(description);
  });

  test('should show assigned actions and hide the actions slot when empty', async ({ componentsPage }) => {
    const emptyState = await setup({
      componentsPage,
      heading: 'No items yet',
      description: 'Create an item to get started.',
    });
    const actionsSlot = emptyState.locator('slot[name="actions"]');

    await expect(emptyState.getByRole('heading', { name: 'No items yet' })).toBeVisible();
    await expect(actionsSlot).toBeHidden();

    await emptyState.evaluate(element => {
      const action = document.createElement('button');
      action.slot = 'actions';
      action.textContent = 'Retry';
      element.append(action);
    });

    const action = emptyState.getByRole('button', { name: 'Retry' });
    await expect(action).toBeVisible();
    await expect(actionsSlot).toBeVisible();

    await action.evaluate(element => element.remove());
    await expect(actionsSlot).toBeHidden();
  });

  test('should allow keyboard focus to reach a slotted action', async ({ componentsPage }) => {
    const emptyState = await setup({
      componentsPage,
      heading: 'No items yet',
      description: 'Create an item to get started.',
      children: '<button slot="actions">Create item</button>',
    });
    const action = emptyState.getByRole('button', { name: 'Create item' });

    await componentsPage.actionability.pressTab();
    await expect(action).toBeFocused();
  });

  test('should have no accessibility violations with representative content', async ({ componentsPage }) => {
    await setup({
      componentsPage,
      heading: 'No items yet',
      description: 'Create an item to get started.',
      children: '<button slot="actions">Create item</button>',
    });

    await componentsPage.accessibility.checkForA11yViolations('emptystate-with-content');
  });

  test('should match the visual variants', async ({ componentsPage }) => {
    const emptyStateMarkup = (layout: EmptyStateLayout, size: EmptyStateSize) => `
      <mdc-emptystate layout="${layout}" size="${size}" heading="No items yet" description="Create an item to get started.">
        <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
        <mdc-button slot="actions" variant="secondary" size="32" color="default">Create item</mdc-button>
      </mdc-emptystate>
    `;

    await componentsPage.mount({
      html: `
        <div style="display: grid; grid-template-columns: repeat(2, 31rem); gap: 2rem;">
          ${emptyStateMarkup(LAYOUT.VERTICAL, SIZE.MEDIUM)}
          ${emptyStateMarkup(LAYOUT.VERTICAL, SIZE.LARGE)}
          ${emptyStateMarkup(LAYOUT.HORIZONTAL, SIZE.MEDIUM)}
          ${emptyStateMarkup(LAYOUT.HORIZONTAL, SIZE.LARGE)}
        </div>
      `,
      clearDocument: true,
    });

    const variants = componentsPage.page.locator('#root > div');
    await expect(variants.locator('mdc-emptystate')).toHaveCount(4);
    await componentsPage.visualRegression.takeScreenshot('mdc-emptystate', { element: variants });
  });
});
