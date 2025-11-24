import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../spinner';
import '../animation';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { BUTTON_COLORS, PILL_BUTTON_SIZES, BUTTON_VARIANTS, ICON_BUTTON_SIZES, BUTTON_TYPE } from './button.constants';

const render = (args: Args) =>
  html`<mdc-button
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    ?active="${args.active}"
    ?disabled="${args.disabled}"
    ?soft-disabled="${args['soft-disabled']}"
    variant="${ifDefined(args.variant)}"
    size="${ifDefined(args.size)}"
    color="${ifDefined(args.color)}"
    prefix-icon="${ifDefined(args['prefix-icon'])}"
    postfix-icon="${ifDefined(args['postfix-icon'])}"
    type="${ifDefined(args.type)}"
    name="${ifDefined(args.name)}"
    value="${ifDefined(args.value)}"
    role="${ifDefined(args.role)}"
    tabIndex="${ifDefined(args.tabIndex)}"
    aria-label="${ifDefined(args['aria-label'])}"
    ariaStateKey="${ifDefined(args.ariaStateKey)}"
    ?inverted="${args.inverted}"
    style="${ifDefined(args.style)}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    >${args.children}</mdc-button
  >`;

const meta: Meta = {
  title: 'Components/button',
  tags: ['autodocs'],
  component: 'mdc-button',
  render,
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
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
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
    ...Example.args,
  },
};

export const PillButtonInverted: StoryObj = {
  render: args =>
    html`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${render(args)}
    </div>`,
  args: {
    ...Example.args,
    inverted: true,
  },
};

export const PillWithPrefixIcon: StoryObj = {
  args: {
    ...Example.args,
    children: 'Left Icon',
    'prefix-icon': 'placeholder-bold',
  },
};

export const PillWithPostfixIcon: StoryObj = {
  args: {
    ...Example.args,
    children: 'Right Icon',
    'postfix-icon': 'placeholder-bold',
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
    html`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
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
    ...IconButton.args,
    inverted: true,
  },
};

export const PillButtonEllipsis: StoryObj = {
  render: args => render({ ...args, style: 'width: 150px;' }),
  args: {
    ...Example.args,
    children: 'Long text with icons',
  },
};

export const PillWithPrefixIconEllipsis: StoryObj = {
  render: args => render({ ...args, style: 'width: 150px;' }),
  args: {
    ...Example.args,
    children: 'Long text with icons',
    'prefix-icon': 'placeholder-bold',
  },
};

export const PillWithPrefixSlot: StoryObj = {
  render: args =>
    html`<mdc-button
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      ?active="${args.active}"
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      variant="${ifDefined(args.variant)}"
      size="${ifDefined(args.size)}"
      color="${ifDefined(args.color)}"
      type="${ifDefined(args.type)}"
      role="${ifDefined(args.role)}"
      tabIndex="${ifDefined(args.tabIndex)}"
      aria-label="${ifDefined(args['aria-label'])}"
      ariaStateKey="${ifDefined(args.ariaStateKey)}"
      ?inverted="${args.inverted}"
      style="${ifDefined(args.style)}"
      ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    >
      <mdc-spinner slot="prefix" variant="button" size="small"></mdc-spinner>
      ${args.children}
    </mdc-button>`,
  args: {
    ...Example.args,
    children: 'Loading...',
  },
};

export const PillWithPostfixSlot: StoryObj = {
  render: args =>
    html`<mdc-button
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      ?active="${args.active}"
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      variant="${ifDefined(args.variant)}"
      size="${ifDefined(args.size)}"
      color="${ifDefined(args.color)}"
      type="${ifDefined(args.type)}"
      role="${ifDefined(args.role)}"
      tabIndex="${ifDefined(args.tabIndex)}"
      aria-label="${ifDefined(args['aria-label'])}"
      ariaStateKey="${ifDefined(args.ariaStateKey)}"
      ?inverted="${args.inverted}"
      style="${ifDefined(args.style)}"
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
    ...Example.args,
    children: 'Wow',
  },
};
