import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
<mdc-inputchip 
  label="${args.label}"
  avatar-src="${args['avatar-src']}"
  avatar-initials="${args['avatar-initials']}"
  icon-name="${args['icon-name']}"
  ?error="${args.error}"
  ?disabled="${args.disabled}"
  clear-aria-label="${args['clear-aria-label']}"
></mdc-inputchip>`;

const meta: Meta = {
  title: 'Work In Progress/chip/input',
  tags: ['autodocs'],
  component: 'mdc-inputchip',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    'avatar-src': {
      control: 'text',
    },
    'avatar-initials': {
      control: 'text',
    },
    'icon-name': {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'clear-aria-label': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Input Chip',
    'icon-name': 'placeholder-bold',
    'clear-aria-label': 'Clear',
    'avatar-src': 'https://picsum.photos/id/63/200',
    'avatar-initials': 'AV',
    error: false,
    disabled: false,
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};
