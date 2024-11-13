import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { BUTTON_COLORS, PILL_BUTTON_SIZES, BUTTON_VARIANTS, ICON_BUTTON_SIZES } from './button.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-button 
  ?active="${args.active}"
  ?disabled="${args.disabled}"
  ?soft-disabled="${args['soft-disabled']}"
  variant="${args.variant}"
  size="${args.size}"
  color="${args.color}"
  prefix-icon="${args.prefixIcon}"
  postfix-icon="${args.postfixIcon}"
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
    prefixIcon: {
      description: 'The name of the icon to display as a prefix.',
      control: {
        type: 'text',
      },
    },
    postfixIcon: {
      description: 'The name of the icon to display as a postfix.',
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
      options: Object.values(PILL_BUTTON_SIZES),
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

export const PillButton: StoryObj = {
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
  },
};

export const PillWithPrefixIcon: StoryObj = {
  args: {
    children: 'Left Icon',
    prefixIcon: 'info-circle-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
  },
};

export const PillWithPostfixIcon: StoryObj = {
  args: {
    children: 'Right Icon',
    postfixIcon: 'info-circle-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
  },
};

export const IconButton: StoryObj = {
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES),
    },
  },
  args: {
    prefixIcon: 'info-circle-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
  },
};
