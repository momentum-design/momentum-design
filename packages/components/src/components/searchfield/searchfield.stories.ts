import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-searchfield 
  label="${args.label}"
  placeholder="${args.placeholder}"
  value="${args.value}"
  ?disabled="${args.disabled}"
  ></mdc-searchfield>`;

const meta: Meta = {
  title: 'Work In Progress/searchfield',
  tags: ['autodocs'],
  component: 'mdc-searchfield',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
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
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
  },
};
