import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { BADGE_TYPE, ICON_VARIANT, DEFAULTS, MAX_COUNTER_LIST } from './badge.constants';

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
      control: 'select',
      options: MAX_COUNTER_LIST,
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
        eq: BADGE_TYPE.ICON,
      },
      control: 'select',
      options: Object.values(ICON_VARIANT),
      table: {
        defaultValue: {
          summary: DEFAULTS.VARIANT,
        },
      },
    },
  },
};

export default meta;

export const Dot: StoryObj = {
  args: {
    type: BADGE_TYPE.DOT,
    counter: 1,
    overlay: false,
    'icon-name': 'error-legacy-filled',
    'max-counter': MAX_COUNTER_LIST[0],
  },
};

export const Icon: StoryObj = {
  args: {
    type: BADGE_TYPE.ICON,
    'icon-name': 'accessibility-regular',
    variant: ICON_VARIANT.PRIMARY,
    overlay: false,
  },
};

export const Counter: StoryObj = {
  args: {
    type: BADGE_TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false,
  },
};

export const Success: StoryObj = {
  args: {
    type: BADGE_TYPE.SUCCESS,
    overlay: false,
  },
};

export const Warning: StoryObj = {
  args: {
    type: BADGE_TYPE.WARNING,
    overlay: false,
  },
};

export const Error: StoryObj = {
  args: {
    type: BADGE_TYPE.ERROR,
    overlay: false,
  },
};
