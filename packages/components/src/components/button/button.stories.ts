import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../spinner';
import '../animation';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { BUTTON_COLORS, PILL_BUTTON_SIZES, BUTTON_VARIANTS, ICON_BUTTON_SIZES, BUTTON_TYPE } from './button.constants';

const render = (args: Args) =>
  html` <mdc-button
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
    ariaStateKey="${ifDefined(args.ariaStateKey)}"
    ?inverted="${args.inverted}"
    style="${args.style}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    >${args.children}</mdc-button
  >`;

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
    ariaStateKey: {
      control: 'text',
    },
    inverted: {
      control: 'boolean',
    },
    'auto-focus-on-mount': {
      control: 'boolean',
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
    inverted: false,
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

export const PillButtonInverted: StoryObj = {
  render: args =>
    html` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${render(args)}
    </div>`,
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
    inverted: true,
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

export const IconButtonInverted: StoryObj = {
  render: args =>
    html` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${render(args)}
    </div>`,
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
    inverted: true,
  },
};

export const PillButtonEllipsis: StoryObj = {
  render: args => render({ ...args, style: 'width: 150px;' }),
  args: {
    children: 'Long text with icons',
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

export const PillWithPrefixIconEllipsis: StoryObj = {
  render: args => render({ ...args, style: 'width: 150px;' }),
  args: {
    children: 'Long text with icons',
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

export const PillWithPrefixSlot: StoryObj = {
  render: args =>
    html` <mdc-button
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
      type="${args.type}"
      role="${args.role}"
      tabIndex="${args.tabIndex}"
      aria-label="${args['aria-label']}"
      ariaStateKey="${ifDefined(args.ariaStateKey)}"
      ?inverted="${args.inverted}"
      style="${args.style}"
      ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    >
      <mdc-spinner slot="prefix" variant="button" size="small"></mdc-spinner>
      ${args.children}
    </mdc-button>`,
  args: {
    children: 'Loading...',
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

export const PillWithPostfixSlot: StoryObj = {
  render: args =>
    html` <mdc-button
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
      type="${args.type}"
      role="${args.role}"
      tabIndex="${args.tabIndex}"
      aria-label="${args['aria-label']}"
      ariaStateKey="${ifDefined(args.ariaStateKey)}"
      ?inverted="${args.inverted}"
      style="${args.style}"
      ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    >
      <mdc-animation
        name="wow"
        loop="true"
        slot="postfix"
        style="height: 1.25rem; width: 1.25rem; flex-shrink: 0;"
      ></mdc-animation>
      ${args.children}
    </mdc-button>`,
  args: {
    children: 'Wow',
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
