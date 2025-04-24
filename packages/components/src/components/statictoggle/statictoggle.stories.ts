import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-statictoggle args.property="${args.property}"></mdc-statictoggle>`;

const meta: Meta = {
  title: 'Work In Progress/statictoggle',
  tags: ['autodocs'],
  component: 'mdc-statictoggle',
  render,
  parameters: {
    badges: ['wip'],
  },
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
