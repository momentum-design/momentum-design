import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { BUTTON_COLORS, ICON_BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';

const render = (args: Args) => html`
  <mdc-button 
  ?active="${args.active}"
  ?disabled="${args.disabled}"
  ?soft-disabled="${args['soft-disabled']}"
  variant="${args.variant}"
  size="${args.size}"
  color="${args.color}"
  >${args.children}</mdc-button>`;

const meta: Meta = {
  title: 'Work In Progress/button',
  tags: ['autodocs'],
  component: 'mdc-button',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    children: {
      description: 'Button content',
      control: {
        type: 'text',
      },
    },
    active: {
      description: 'Indicates whether the button is active.',
      control: 'boolean',
    },
    disabled: {
      description: 'Indicates whether the button is disabled.',
      control: 'boolean',
    },
    'soft-disabled': {
      description: 'Indicates whether the button is soft disabled.',
      control: 'boolean',
    },
    variant: {
      description: 'The variant of the button.',
      control: 'select',
      options: Object.values(BUTTON_VARIANTS),
    },
    size: {
      description: 'The size of the button.',
      control: 'select',
      options: Object.values(ICON_BUTTON_SIZES),
    },
    color: {
      description: 'The color of the button.',
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
    ...classArgType,
    ...styleArgType,
  },
};
export default meta;

export const Primary: StoryObj = {
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
  },
};
