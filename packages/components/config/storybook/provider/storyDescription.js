import { html } from 'lit';
import { get } from 'lodash';

import '../../../src/components/text';
import '../../../src/components/divider';
import { isFluidTheme } from '../themes';

export const getStoryDescription = context => get(context, 'parameters.docs.description.story');

export const descriptionBanner = docs => html`
  <div
    style="padding: 1rem; background: var(--mds-color-theme-background-solid-tertiary-normal); border-bottom: 1px solid var(--mds-color-theme-background-secondary-active); backdrop-filter: var(--mds-effect-backdrop-filter-blur200);"
  >
    ${docs}
  </div>
`;

/**
 * Usage
 *
 * with string
 * ```ts
 * export const PopoverInChangingList: StoryObj = {
 *   parameters: {
 *     docs: {
 *       description: {
 *         story: 'Short description',
 *       },
 *     },
 *  },
 * ```
 *
 * with template
 * ```ts
 * import { html } from 'lit';
 *
 * export const PopoverInChangingList: StoryObj = {
 *   parameters: {
 *     docs: {
 *       description: {
 *         story: html`<h1>Title</h1>
 *           <mdc-text>Description</mdc-text>`,
 *       },
 *     },
 *  },
 * ```
 */
export const storyDescription = (story, context) => {
  const docs = getStoryDescription(context);

  // The fluid canvas renders the banner itself, outside its glass container.
  if (!docs || isFluidTheme(context.globals.theme)) {
    return html` <div style="padding: 1rem; height: calc(100% - 2rem);">${story()}</div> `;
  }

  return html`
    <div style="height: calc(100% - 2rem); display: flex; flex-direction: column;">
      ${descriptionBanner(docs)}
      <div style="padding: 1rem; flex: 1 0 auto;">${story()}</div>
    </div>
  `;
};
