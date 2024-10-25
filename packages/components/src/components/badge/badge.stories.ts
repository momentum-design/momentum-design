import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { BADGE_TYPE, BADGE_VARIANT, DEFAULTS } from './badge.constants';

const render = (args: Args) => html`
  <mdc-badge
    type="${args.type}"
    icon-name="${args['icon-name']}"
    counter="${args.counter}"
    max-counter="${args['max-counter']}"
    variant="${args.variant}"
    ?overlay=${args.overlay}
  ></mdc-badge>
`;

const meta: Meta = {
  title: 'Work In Progress/badge',
  tags: ['autodocs'],
  component: 'mdc-badge',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(BADGE_TYPE),
      table: {
        defaultValue: {
          summary: DEFAULTS.TYPE,
        },
      },
    },
    overlay: {
      if: {
        arg: 'type',
        neq: BADGE_TYPE.ICON,
      },
      control: 'boolean',
    },
    counter: {
      if: {
        arg: 'type',
        eq: BADGE_TYPE.COUNTER,
      },
      control: 'number',
    },
    'max-counter': {
      if: {
        arg: 'type',
        eq: BADGE_TYPE.COUNTER,
      },
      control: 'number',
    },
    'icon-name': {
      if: {
        arg: 'type',
        eq: BADGE_TYPE.ICON,
      },
      control: 'text',
    },
    variant: {
      if: {
        arg: 'type',
        neq: BADGE_TYPE.COUNTER,
      },
      control: 'select',
      options: Object.values(BADGE_VARIANT),
      table: {
        defaultValue: {
          summary: DEFAULTS.VARIANT,
        },
      },
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'error-legacy-filled',
    counter: 1,
    'max-counter': 99,
    variant: DEFAULTS.VARIANT,
    overlay: false,
  },
};
