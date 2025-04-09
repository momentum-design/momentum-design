import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-decorative-checkbox 
    ?checked="${args.checked}"
    ?indeterminate="${args.indeterminate}"
    ?disabled="${args.disabled}"
    class="${args.class}"
    style="${args.style}"
  ></mdc-decorative-checkbox>`;

const meta: Meta = {
  title: 'Work In Progress/decorator/decorative-checkbox',
  tags: ['autodocs'],
  component: 'mdc-decorative-checkbox',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
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
    indeterminate: false,
    disabled: false,
  },
};
