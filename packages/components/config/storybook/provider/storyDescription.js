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
    return story();
  }

  if (typeof docs !== 'string') {
    return html`<mdc-text>${docs}</mdc-text>
      <mdc-divider style="margin-block: 1rem"></mdc-divider>
      ${story()}`;
  }

  return html`${docs}
    <mdc-divider style="margin-block: 1rem"></mdc-divider>
    ${story()}`;
};
