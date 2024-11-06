import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-button 
  ?active="${args.active}"
  ?disabled="${args.disabled}"
  ?soft-disabled="${args['soft-disabled']}"
  @click="${args.onclick}"
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
      options: Object.values(BUTTON_SIZES),

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
    size: BUTTON_SIZES[32],
    color: BUTTON_COLORS.ACTIVE,
  },
};

export const PrefixIcon: StoryObj = {
  render: () => html`
    <mdc-button>
      <mdc-icon name="info-circle-bold" slot="prefix-icon"></mdc-icon>
      <p slot="label-text">Left Icon</p>
    </mdc-button>
  `,
};

export const PostfixIcon: StoryObj = {
  render: () => html`
    <mdc-button>
      <p slot="label-text">Right Icon</p>
      <mdc-icon name="info-circle-bold" slot="postfix-icon"></mdc-icon>
    </mdc-button>
  `,
};

export const Icon: StoryObj = {
  render: () => html`
    <mdc-button>
      <mdc-icon name="info-circle-bold"></mdc-icon>
    </mdc-button>
  `,
};