import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-aiassistantprompt class="${args.class}" style="${args.style}"></mdc-aiassistantprompt>
`;

const meta: Meta = {
  title: 'Work In Progress/aiassistantprompt',
  tags: ['autodocs'],
  component: 'mdc-aiassistantprompt',
  render,
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};
