import { html } from 'lit';
import { get } from 'lodash';
import '../../../src/components/text';
import '../../../src/components/divider';

/**
 * Usage
 *
 * ```ts
 * export const PopoverInChangingList: StoryObj = {
 *   parameters: {
 *     docs: {
 *       description: {
 *         story: 'Another description on the story, overriding the comments',
 *       },
 *     },
 *  },
 *  args: ...,
 *  render(){}
 * }
 * ```
 */
export const storyDescription = (story, context) => {
  const docs = get(context, 'parameters.docs.description.story');
  if (!docs) {
    return story();
  }

  return html`<mdc-text>${docs}</mdc-text>
    <mdc-divider style="margin-block: 1rem"></mdc-divider>
    ${story()}`;
};
