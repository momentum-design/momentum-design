import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { BUTTON_COLORS, ICON_BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

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
      options: ICON_BUTTON_SIZES,
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

export const Default: StoryObj = {
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.ACTIVE,
  },
};

export const PrefixIcon: StoryObj = {
  args: {
    children: html`<mdc-icon name="info-circle-bold" slot="prefix-icon"></mdc-icon>
      <p slot="label-text">Left Icon</p>`,
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.ACTIVE,
  },
};

export const PostfixIcon: StoryObj = {
  args: {
    children: html`<p slot="label-text">Right Icon</p>
      <mdc-icon name="info-circle-bold" slot="postfix-icon"></mdc-icon>`,
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.ACTIVE,
  },
};

export const Icon: StoryObj = {
  args: {
    children: html`<mdc-icon name="info-circle-bold"></mdc-icon>`,
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.ACTIVE,
  },
};
