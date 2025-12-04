import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { BUTTON_SIZES, BUTTON_TYPE, DEFAULTS } from './buttonsimple.constants';

const render = (args: Args) =>
  html` <mdc-buttonsimple
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    ?active="${args.active}"
    ?disabled="${args.disabled}"
    ?soft-disabled="${args['soft-disabled']}"
    size="${ifDefined(args.size)}"
    type="${ifDefined(args.type)}"
    role="${ifDefined(args.role)}"
    tabindex="${ifDefined(args.tabIndex)}"
    ariaStateKey="${ifDefined(args.ariaStateKey)}"
    name="${ifDefined(args.name)}"
    value="${ifDefined(args.value)}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    >${args.children}</mdc-buttonsimple
  >`;

const meta: Meta = {
  title: 'Internal/buttonsimple',
  tags: ['autodocs'],
  component: 'mdc-buttonsimple',
  render,
  argTypes: {
    children: {
      description: 'Text label for the button.',
      control: 'text',
    },
    ariaStateKey: {
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
    size: {
      control: 'select',
      options: Object.values(BUTTON_SIZES),
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
    size: BUTTON_SIZES[32],
    type: BUTTON_TYPE.BUTTON,
    role: DEFAULTS.ROLE,
    tabIndex: 0,
  },
};
