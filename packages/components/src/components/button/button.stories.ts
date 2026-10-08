import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../spinner';
import '../animation';
import '../brandvisual';
import '../badge';
import iconsManifest from '@momentum-design/icons/dist/manifest.json';
import { html, nothing } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import {
  TYPE as BADGE_TYPE,
  ICON_VARIANT as BADGE_ICON_VARIANT,
  DEFAULTS as BADGE_DEFAULTS,
} from '../badge/badge.constants';

import { BUTTON_COLORS, PILL_BUTTON_SIZES, BUTTON_VARIANTS, ICON_BUTTON_SIZES, BUTTON_TYPE } from './button.constants';

const BADGE_MAX_COUNTER_LIST = [9, 99, 999];

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

const pillButtonBadgeArgTypes = {
  'has-badge': {
    control: 'boolean',
    description: 'When true, shows a notification badge on the pill button.',
  },
  'badge-type': {
    control: 'select',
    options: Object.values(BADGE_TYPE),
    if: { arg: 'has-badge', eq: true },
  },
  'badge-counter': {
    control: 'number',
    if: { arg: 'badge-type', eq: BADGE_TYPE.COUNTER },
  },
  'badge-max-counter': {
    control: 'select',
    options: BADGE_MAX_COUNTER_LIST,
    if: { arg: 'badge-type', eq: BADGE_TYPE.COUNTER },
  },
  'badge-icon-name': {
    control: 'select',
    options: Object.keys(iconsManifest),
    if: { arg: 'badge-type', eq: BADGE_TYPE.ICON },
  },
  'badge-variant': {
    control: 'select',
    options: Object.values(BADGE_ICON_VARIANT),
    if: { arg: 'badge-type', eq: BADGE_TYPE.ICON },
  },
  'badge-overlay': {
    control: 'boolean',
    if: { arg: 'has-badge', eq: true },
  },
} as const;

const renderPillButtonWithBadge = (args: Args) => html`
  <div style="position: relative; display: inline-flex;">
    ${render(args)}
    ${args['has-badge']
      ? html`<mdc-badge
          style="position: absolute; top: -0.125rem; inset-inline-end: -0.125rem;"
          type="${args['badge-type']}"
          icon-name="${ifDefined(args['badge-icon-name'])}"
          counter="${ifDefined(args['badge-counter'])}"
          max-counter="${ifDefined(args['badge-max-counter'])}"
          variant="${ifDefined(args['badge-variant'])}"
          ?overlay="${args['badge-overlay']}"
          aria-hidden="true"
        ></mdc-badge>`
      : nothing}
  </div>
`;

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
      control: 'select',
      options: Object.keys(iconsManifest),
    },
    'postfix-icon': {
      control: 'select',
      options: Object.keys(iconsManifest),
    },
    active: {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
      description: 'Defines an accessible label for screen readers. Required when using icon-only buttons.',
      table: { category: 'attributes' },
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
  render: renderPillButtonWithBadge,
  argTypes: pillButtonBadgeArgTypes,
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
    'has-badge': false,
    'badge-type': BADGE_DEFAULTS.TYPE,
    'badge-counter': 3,
    'badge-max-counter': BADGE_MAX_COUNTER_LIST[1],
    'badge-icon-name': 'placeholder-bold',
    'badge-variant': BADGE_ICON_VARIANT.PRIMARY,
    'badge-overlay': true,
  },
};

export const PillButton: StoryObj = {
  render: renderPillButtonWithBadge,
  argTypes: pillButtonBadgeArgTypes,
  args: {
    ...Example.args,
    'has-badge': false,
    'badge-type': BADGE_DEFAULTS.TYPE,
    'badge-counter': 3,
    'badge-max-counter': BADGE_MAX_COUNTER_LIST[1],
    'badge-icon-name': 'placeholder-bold',
    'badge-variant': BADGE_ICON_VARIANT.PRIMARY,
    'badge-overlay': true,
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

export const ButtonWithTooltip: StoryObj = {
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
        id="button"
      >
        ${args.children}

        <div slot="prefix">
          <mdc-icon name="placeholder-bold" size="small"></mdc-icon>
        </div>
        <div slot="postfix">
          <mdc-brandvisual name="webex-app-icon-color-container" style="width: 1.25rem;"></mdc-brandvisual>
        </div>
      </mdc-button>
      <mdc-tooltip show-arrow="true" triggerID="button" position="top">Tooltip text</mdc-tooltip>`,
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold',
    'postfix-icon': 'placeholder-bold',
    children: 'Hover me',
  },
};
