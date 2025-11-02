import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { DEFAULTS, ALLOWED_BADGE_TYPES } from '../navmenuitem/navmenuitem.constants';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import '.';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-navbutton
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    ?show-label=${args['show-label']}
    icon-name="${args['icon-name']}"
    label=${args.label}
    ?disabled=${args.disabled}
    badge-type="${args['badge-type']}"
    counter=${args.counter}
    max-counter="${args['max-counter']}"
    aria-label=${args['aria-label']}
    tooltip-text=${args['tooltip-text']}
    tooltip-placement=${args['tooltip-placement']}
    tooltip-boundary-padding=${args['tooltip-boundary-padding']}
    class="${ifDefined(args.class)}"
    style="${ifDefined(args.style)}"
    >${args.children}</mdc-navbutton
  >`;

const meta: Meta = {
  title: 'Components/sidenavigation/navbutton',
  tags: ['autodocs'],
  component: 'mdc-navbutton',
  render,
  argTypes: {
    'show-label': {
      control: 'boolean',
    },
    'icon-name': {
      control: 'text',
    },
    'badge-type': {
      control: 'radio',
      options: Object.values(ALLOWED_BADGE_TYPES),
    },
    counter: {
      control: 'number',
    },
    'max-counter': {
      control: { type: 'number', min: 9, max: 999 },
    },
    label: {
      control: 'text',
      description: 'Label text displayed for the nav item.',
    },
    'tooltip-text': {
      control: 'text',
    },
    'tooltip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'tooltip-boundary-padding': {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
    },
    ...hideControls([
      'default',
      'ariaStateKey',
      'type',
      'role',
      'name',
      'value',
      'size',
      'active',
      'tabIndex',
      'auto-focus-on-mount',
      'soft-disabled',
      '--mdc-button-height',
      '--mdc-button-background',
      '--mdc-button-border-color',
      '--mdc-button-text-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'show-label': true,
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    label: 'Dashboard',
  },
};
