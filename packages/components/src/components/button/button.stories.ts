import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { BUTTON_COLORS, PILL_BUTTON_SIZES, BUTTON_VARIANTS, ICON_BUTTON_SIZES, BUTTON_TYPE } from './button.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-button 
  @click="${action('onclick')}"
  @keydown="${action('onkeydown')}"
  @keyup="${action('onkeyup')}"
  @focus="${action('onfocus')}"
  ?active="${args.active}"
  ?disabled="${args.disabled}"
  ?soft-disabled="${args['soft-disabled']}"
  variant="${args.variant}"
  size="${args.size}"
  color="${args.color}"
  prefix-icon="${args['prefix-icon']}"
  postfix-icon="${args['postfix-icon']}"
  type="${args.type}"
  role="${args.role}"
  tabIndex="${args.tabIndex}"
  aria-label="${args['aria-label']}"
  >${args.children}</mdc-button>`;

const meta: Meta = {
  title: 'Components/button',
  tags: ['autodocs'],
  component: 'mdc-button',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    children: {
      description: 'Text label for the button.',
      control: 'text',
    },
    'prefix-icon': {
      control: 'text',
    },
    'postfix-icon': {
      control: 'text',
    },
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: Object.values(BUTTON_VARIANTS),
    },
    size: {
      control: 'select',
      options: Object.values(PILL_BUTTON_SIZES),
    },
    color: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
    type: {
      control: 'select',
      options: Object.values(BUTTON_TYPE),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0,
  },
};

export const PillButton: StoryObj = {
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0,
  },
};

export const PillWithPrefixIcon: StoryObj = {
  args: {
    children: 'Left Icon',
    'prefix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0,
  },
};

export const PillWithPostfixIcon: StoryObj = {
  args: {
    children: 'Right Icon',
    'postfix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0,
  },
};

export const IconButton: StoryObj = {
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES),
    },
    'aria-label': {
      description: 'Aria label for the icon button. Required for accessibility.',
    },
  },
  args: {
    'prefix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0,
    'aria-label': 'icon button',
  },
};
