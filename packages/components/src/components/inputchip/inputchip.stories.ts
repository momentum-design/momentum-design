import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
<mdc-inputchip 
  label="${args.label}"
  avatar-src="${args.avatarSrc}"
  avatar-initials="${args.avatarInitials}"
  icon-name="${args.iconName}"
  ?error="${args.error}"
  ?disabled="${args.disabled}"
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
    avatarSrc: {
      control: 'text',
    },
    avatarInitials: {
      control: 'text',
    },
    iconName: {
      control: 'text',
    },
    error: {
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
    label: 'Input Chip',
    iconName: 'placeholder-bold',
    clearAriaLabel: 'Clear',
    avatarSrc: 'https://picsum.photos/id/63/200',
    avatarInitials: 'AV',
    error: false,
    disabled: false,
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};
