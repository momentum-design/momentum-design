import { html } from 'lit';
import { get } from 'lodash';
import '../../../src/components/text';
import '../../../src/components/divider';

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
  const docs = get(context, 'parameters.docs.description.story');
  if (!docs) {
    return html` <div style="padding: 1rem; height: calc(100% - 2rem);">${story()}</div> `;
  }

  let content;

  if (typeof docs !== 'string') {
    content = html` <mdc-text>${docs}</mdc-text> `;
  }

  content = html` ${docs} `;

  return html`
    <div style="height: calc(100% - 2rem); display: flex; flex-direction: column;">
      <div style="padding: 1rem; background: #262626; border-bottom: 1px solid #ffffff4d;">${content}</div>
      <div style="padding: 1rem; flex: 1 0 auto;">${story()}</div>
    </div>
  `;
};
