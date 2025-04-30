import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { ALLOWED_BADGE_TYPES, DEFAULTS } from './navitem.constants';
import { BadgeType } from './navitem.types';
import { disableControls, hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
<div role='tablist'>
  <mdc-navitem
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    @activechange="${action('onactivechange')}"
    nav-id="${args['nav-id']}"
    icon-name="${args['icon-name']}"
    ?disabled=${args.disabled}
    aria-label="${args['aria-label']}"
    badge-type="${args['badge-type']}"
    counter=${args.counter}
    max-counter="${args['max-counter']}"
    ?active=${args.active}
  >
    Dashboard
  </mdc-navitem>
</div>`;

const meta: Meta = {
  title: 'Work In Progress/navitem',
  tags: ['autodocs'],
  component: 'mdc-navitem',
  render,
  parameters: {
    controls: { expanded: true },
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
    'aria-label': {
      control: 'text',
      description: 'Aria-label for accessibility.',
    },
    active: {
      control: 'boolean',
      description: 'Marks the navItem as active.',
    },
    ...disableControls([
      '--mdc-navitem-color',
      '--mdc-navitem-border-color',
      '--mdc-navitem-hover-background-color',
      '--mdc-navitem-pressed-background-color',
      '--mdc-navitem-disabled-background-color',
      '--mdc-navitem-disabled-color',
      '--mdc-navitem-active-background-color',
    ]),
    ...hideControls([
      'sideNavigationContext',
      'role',
      'size',
      'soft-disabled',
      'type',
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
    'aria-label': 'navItem label',
    active: false,
  },
};

export const WithCounterBadge: StoryObj = {
  args: {
    ...Example.args,
    counter: 5,
  },
};

export const WithDotBadge: StoryObj = {
  args: {
    ...Example.args,
    'badge-type': ALLOWED_BADGE_TYPES.DOT as BadgeType,
  },
};

export const Active: StoryObj = {
  args: {
    ...Example.args,
    active: true,
  },
};

export const Disabled: StoryObj = {
  args: {
    ...Example.args,
    disabled: true,
  },
};
