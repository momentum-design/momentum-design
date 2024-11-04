import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { DEFAULTS, FONT_TYPE, VALID_TEXT_TAGS } from './text.constants';
import { disableControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
<mdc-text type="${args.type}" tagname="${args.tagname}">${args.children}</mdc-text>
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
    },
    tagname: {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
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
