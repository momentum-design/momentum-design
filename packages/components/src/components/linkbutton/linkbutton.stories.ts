import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls, hideControls } from '../../../config/storybook/utils';

import { DEFAULTS, LINKBUTTON_SIZES } from './linkbutton.constants';

const render = (args: Args) =>
  html`<mdc-linkbutton
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    ?disabled="${args.disabled}"
    ?soft-disabled="${args['soft-disabled']}"
    ?inline="${args.inline}"
    ?inverted="${args.inverted}"
    icon-name="${args['icon-name']}"
    size="${args.size}"
    tabindex="${args.tabIndex}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    aria-label="${args['aria-label']}"
    >${args.children}</mdc-linkbutton
  >`;

const renderWithInvertedBackground = (args: Args) =>
  html`<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${render(args)}
  </div>`;

const meta: Meta = {
  title: 'Components/linkbutton',
  tags: ['autodocs'],
  component: 'mdc-linkbutton',
  render,

  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    inline: {
      control: 'boolean',
    },
    inverted: {
      control: 'boolean',
    },
    'icon-name': {
      control: 'text',
    },
    size: {
      control: 'select',
      options: Object.values(LINKBUTTON_SIZES),
    },
    tabIndex: {
      control: 'number',
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['active', 'role', 'type', 'ariaStateKey']),
    ...textControls([
      '--mdc-link-border-radius',
      '--mdc-link-color-active',
      '--mdc-link-color-disabled',
      '--mdc-link-color-hover',
      '--mdc-link-color-normal',
      '--mdc-link-inverted-color-active',
      '--mdc-link-inverted-color-disabled',
      '--mdc-link-inverted-color-hover',
      '--mdc-link-inverted-color-normal',
    ]),
  },
};

export default meta;

const defaultArgs = {
  children: 'LinkButton',
  disabled: false,
  'soft-disabled': false,
  'icon-name': 'placeholder-bold',
  inline: false,
  inverted: false,
  size: DEFAULTS.SIZE,
  tabIndex: 0,
};

export const Example: StoryObj = {
  args: {
    ...defaultArgs,
  },
};

export const StandaloneLinkButton: StoryObj = {
  args: {
    ...defaultArgs,
    inline: false,
    inverted: false,
  },
};

export const StandaloneLinkButtonInverted: StoryObj = {
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true,
    inline: false,
  },
};

export const InlineLinkButton: StoryObj = {
  args: {
    ...defaultArgs,
    inline: true,
    inverted: false,
  },
};

export const InlineLinkButtonInverted: StoryObj = {
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true,
  },
};
