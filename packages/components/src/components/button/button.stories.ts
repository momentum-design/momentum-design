import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-button args.property="${args.property}"></mdc-button>`;

const meta: Meta = {
  title: 'Work In Progress/button',
  tags: ['autodocs'],
  component: 'mdc-button',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: { 
    ...classArgType,
    ...styleArgType
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;'
  },
};
