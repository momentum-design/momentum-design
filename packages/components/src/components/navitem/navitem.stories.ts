import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, textControls } from '../../../config/storybook/utils';

import { ALLOWED_BADGE_TYPES, DEFAULTS } from './navitem.constants';

const render = (args: Args) => html`
  <div role="menubar">
    <mdc-navitem
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      @activechange="${action('onactivechange')}"
      nav-id="${args['nav-id']}"
      icon-name="${args['icon-name']}"
      label=${args.label}
      ?disabled=${args.disabled}
      badge-type="${args['badge-type']}"
      counter=${args.counter}
      max-counter="${args['max-counter']}"
      ?active=${args.active}
      ?show-label=${args['show-label']}
      ?disable-aria-current=${args['disable-aria-current']}
      aria-label=${args['aria-label']}
    ></mdc-navitem>
  </div>
`;

const meta: Meta = {
  title: 'Work In Progress/sidenavigation/navitem',
  tags: ['autodocs'],
  component: 'mdc-navitem',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    'nav-id': {
      control: 'text',
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
    disabled: {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
    'show-label': {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
    },
    'disable-aria-current': {
      control: 'boolean',
    },
    ...textControls([
      '--mdc-navitem-color',
      '--mdc-navitem-border-color',
      '--mdc-navitem-disabled-color',
      '--mdc-navitem-expanded-width',
      '--mdc-navitem-hover-background-color',
      '--mdc-navitem-hover-active-background-color',
      '--mdc-navitem-pressed-background-color',
      '--mdc-navitem-pressed-active-background-color',
      '--mdc-navitem-disabled-background-color',
      '--mdc-navitem-disabled-active-background-color',
      '--mdc-navitem-rest-active-background-color',
    ]),
    ...hideControls([
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
      '--mdc-listitem-disabled-color',
      '--mdc-listitem-column-gap',
      '--mdc-listitem-padding-left-and-right',
      'leading-controls',
      'leading-text-primary-label',
      'leading-text-secondary-label',
      'leading-text-tertiary-label',
      'trailing-text-side-header',
      'trailing-text-subline',
      'trailing-controls',
      'subline-text',
      'side-header-text',
      'tertiary-label',
      'secondary-label',
      'variant',
      'arrow-position',
      'arrow-direction',
      'tabIndex',
      'tooltip-text',
      'tooltip-placement',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    active: false,
    'show-label': true,
    label: 'Dashboard',
  },
};

export const collapsedNavItem: StoryObj = {
  args: {
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    'aria-label': 'This is a navitem.',
    active: false,
    'show-label': false,
  },
};
