import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { DEFAULTS, FONT_TYPE, VALID_TEXT_TAGS } from './text.constants';
import { disableControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
<mdc-text type="${args.type}" tagname="${args.tagname}">${args.children}</mdc-text>
`;

const typeDescription = `
  Specifies the text style to be applied\n
  Acceptable values include:\n
  ${Object.values(FONT_TYPE).map((fontType) => `- '${fontType}'\n`).join('  ')}
`;

const tagNameDescription = `
  Specifies the HTML tag name for the text element. The default tag name is \`p\`.\n
  This attribute is optional. When set, it changes the tag name of the text element.\n\n
  Acceptable values include:\n
  ${Object.values(VALID_TEXT_TAGS).map((textTag) => `- '${textTag}'\n`).join('  ')}\n
  For instance, setting this attribute to \`h2\` will render the text element as an \`h2\` element.\n
  Note that the styling is determined by the \`type\` attribute.
`;

const meta: Meta = {
  title: 'Components/text',
  tags: ['autodocs'],
  component: 'mdc-text',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Children (passed into "default" slot)',
    },
    type: {
      control: 'select',
      options: Object.values(FONT_TYPE),
      description: typeDescription,
    },
    tagname: {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
      description: tagNameDescription,
    },
    ...classArgType,
    ...styleArgType,
    ...disableControls([
      'text',
    ]),
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    tagname: '',
    children: DEFAULTS.CHILDREN,
  },
};
