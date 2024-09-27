import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { VALUES } from './text.constants';

const render = (args: Args) => html`
<mdc-text type="${args.type}">${args.children}</mdc-text>
`;

const meta: Meta = {
  title: 'Work In Progress/text',
  tags: ['autodocs'],
  component: 'mdc-text',
  render,
  argTypes: {
    type: {
      control: 'radio',
      options: VALUES.TYPE,
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    type: 'heading-1',
    children: 'This is a test text',
  },
};
