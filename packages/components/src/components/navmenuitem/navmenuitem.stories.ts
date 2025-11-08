import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

import { ALLOWED_BADGE_TYPES, DEFAULTS } from './navmenuitem.constants';

const render = (args: Args) => html`
  <div role="menubar">
    <mdc-navmenuitem
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
      ?cannot-activate=${args['cannot-activate']}
      aria-label=${ifDefined(args['aria-label'])}
      tooltip-text=${args['tooltip-text']}
      tooltip-placement=${args['tooltip-placement']}
      tooltip-type=${args['tooltip-type']}
      tooltip-appearance=${args['tooltip-appearance']}
      tooltip-boundary-padding=${args['tooltip-boundary-padding']}
    ></mdc-navmenuitem>
  </div>
`;

const meta: Meta = {
  title: 'Components/sidenavigation/navmenuitem',
  tags: ['autodocs'],
  component: 'mdc-navmenuitem',
  render,
  argTypes: {
    'show-label': {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
    'cannot-activate': {
      control: 'boolean',
    },
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
    'tooltip-text': {
      control: 'text',
    },
    'tooltip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'tooltip-type': {
      control: 'select',
      options: ['description', 'label', 'none'],
    },
    'tooltip-appearance': {
      control: 'select',
      options: ['when-collapsed', 'always'],
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
    'disable-aria-current': {
      control: 'boolean',
    },
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
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'show-label': true,
    active: false,
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    label: 'Dashboard',
  },
};

export const collapsedNavMenuItem: StoryObj = {
  args: {
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    'aria-label': 'This is a navmenuitem.',
    active: false,
    'show-label': false,
  },
};

export const tooltipNavMenuItem: StoryObj = {
  args: {
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    'aria-label': 'This is a navmenuitem.',
    active: false,
    'show-label': false,
    'tooltip-text': 'This is a tooltip text.',
  },
};
