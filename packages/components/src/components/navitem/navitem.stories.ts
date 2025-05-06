import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { ALLOWED_BADGE_TYPES, DEFAULTS } from './navitem.constants';
import { disableControls, hideControls } from '../../../config/storybook/utils';

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
      ?disabled=${args.disabled}
      badge-type="${args['badge-type']}"
      counter=${args.counter}
      max-counter="${args['max-counter']}"
      ?active=${args.active}
      ?isExpanded=${args.isExpanded}
      aria-label="${args['aria-label']}"
    >
      Dashboard
    </mdc-navitem>
  </div>
`;

const meta: Meta = {
  title: 'Work In Progress/navitem',
  tags: ['autodocs'],
  component: 'mdc-navitem',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    'nav-id': {
      description: 'Unique identifier for the navItem.',
      control: 'text',
    },
    'icon-name': {
      description: 'Name of the leading icon.',
      control: 'text',
    },
    'badge-type': {
      control: 'radio',
      options: Object.values(ALLOWED_BADGE_TYPES),
      description: 'Badge style: dot or counter.',
    },
    counter: {
      control: 'number',
      description: 'Value to display in the badge (only for counter badgeType).',
    },
    'max-counter': {
      control: { type: 'number', min: 9, max: 999 },
      description: 'Maximum number before showing "+" (e.g., 999+).',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the navItem.',
    },
    active: {
      control: 'boolean',
      description: 'Marks the navItem as active.',
    },
    isExpanded: {
      control: 'boolean',
      description: 'Determines whether the navItem is expanded',
    },
    ...disableControls([
      'default',
      '--mdc-navitem-color',
      '--mdc-navitem-border-color',
      '--mdc-navitem-hover-background-color',
      '--mdc-navitem-pressed-background-color',
      '--mdc-navitem-disabled-background-color',
      '--mdc-navitem-disabled-color',
      '--mdc-navitem-active-background-color',
      '--mdc-navitem-expanded-width',
    ]),
    ...hideControls([
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
      '--mdc-listitem-disabled-color',
      '--mdc-listitem-column-gap',
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
      'label',
      'variant',
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
    isExpanded: true,
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
    'aria-label': 'This is the navItem',
    active: false,
    isExpanded: false,
  },
};
