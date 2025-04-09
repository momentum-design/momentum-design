import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-decorative-radio 
  ?checked="${args.checked}"
  ?disabled="${args.disabled}"></mdc-decorative-radio>`;

const meta: Meta = {
  title: 'Work In Progress/decorator/decorative-radio',
  tags: ['autodocs'],
  component: 'mdc-decorative-radio',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    checked: false,
    disabled: false,
  },
};
