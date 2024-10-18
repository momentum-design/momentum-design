import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { VALUES } from './text.constants';

const render = (args: Args) => html`
<mdc-text type="${args.type}" tagname="${args.tagname}">${args.children}</mdc-text>
`;

const meta: Meta = {
  title: 'Work In Progress/text',
  tags: ['autodocs'],
  component: 'mdc-text',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    type: {
      control: 'radio',
      options: [null, ...VALUES.TYPE],
    },
    tagname: {
      control: 'text',
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    type: 'body-large-regular',
    tagname: '',
    children: 'This is a test text',
  },
};
