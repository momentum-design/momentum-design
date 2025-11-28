import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import iconsManifest from '@momentum-design/icons/dist/manifest.json';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls } from '../../../config/storybook/utils';

import { TYPE, ICON_VARIANT, DEFAULTS } from './badge.constants';

const MAX_COUNTER_LIST = [9, 99, 999];

const render = (args: Args) => html`
  <mdc-badge
    type="${args.type}"
    icon-name="${args['icon-name']}"
    counter="${args.counter}"
    max-counter="${args['max-counter']}"
    variant="${args.variant}"
    ?overlay="${args.overlay}"
    aria-label="${args['aria-label']}"
  ></mdc-badge>
`;
const renderOverlay = (args: Args) => html`
  <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;">${render(args)}</div>
`;

const meta: Meta = {
  title: 'Components/badge',
  tags: ['autodocs'],
  component: 'mdc-badge',
  render,
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(TYPE),
    },
    overlay: {
      control: 'boolean',
    },
    counter: {
      if: {
        arg: 'type',
        eq: TYPE.COUNTER,
      },
      control: 'number',
    },
    'max-counter': {
      if: {
        arg: 'type',
        eq: TYPE.COUNTER,
      },
      control: 'select',
      options: MAX_COUNTER_LIST,
    },
    'icon-name': {
      if: {
        arg: 'type',
        eq: TYPE.ICON,
      },
      control: 'select',
      options: Object.keys(iconsManifest),
    },
    variant: {
      if: {
        arg: 'type',
        eq: TYPE.ICON,
      },
      control: 'select',
      options: Object.values(ICON_VARIANT),
    },
    'aria-label': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false,
  },
};

export const Dot: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
  },
};

export const Icon: StoryObj = {
  args: {
    type: TYPE.ICON,
    'icon-name': 'placeholder-bold',
    variant: ICON_VARIANT.PRIMARY,
  },
};

export const Counter: StoryObj = {
  args: {
    type: TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1],
  },
};

export const Success: StoryObj = {
  args: {
    type: TYPE.SUCCESS,
  },
};

export const Warning: StoryObj = {
  args: {
    type: TYPE.WARNING,
  },
};

export const Error: StoryObj = {
  args: {
    type: TYPE.ERROR,
    overlay: false,
  },
};

export const Overlay: StoryObj = {
  render: renderOverlay,
  args: {
    type: TYPE.COUNTER,
    counter: 1000,
    'max-counter': MAX_COUNTER_LIST[2],
    overlay: true,
  },
};

export const AllVariants: StoryObj = {
  render: () => html`
    <h5>Without overlay</h5>
    <div style="display: flex; justify-content: space-between; align-items: center; width: 10rem;">
      <mdc-badge type="${TYPE.DOT}"></mdc-badge>
      <mdc-badge type="${TYPE.ICON}" icon-name="placeholder-bold"></mdc-badge>
      <mdc-badge type="${TYPE.COUNTER}" counter="10"></mdc-badge>
      <mdc-badge type="${TYPE.SUCCESS}"></mdc-badge>
      <mdc-badge type="${TYPE.WARNING}"></mdc-badge>
      <mdc-badge type="${TYPE.ERROR}"></mdc-badge>
    </div>
    <h5>With overlay</h5>
    <div
      style="display: flex; justify-content: space-between; align-items: center; width: 10rem; background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;"
    >
      <mdc-badge type="${TYPE.DOT}" overlay></mdc-badge>
      <mdc-badge type="${TYPE.ICON}" icon-name="placeholder-bold" overlay></mdc-badge>
      <mdc-badge type="${TYPE.COUNTER}" counter="10" overlay></mdc-badge>
      <mdc-badge type="${TYPE.SUCCESS}" overlay></mdc-badge>
      <mdc-badge type="${TYPE.WARNING}" overlay></mdc-badge>
      <mdc-badge type="${TYPE.ERROR}" overlay></mdc-badge>
    </div>
  `,
  ...hideAllControls(),
};
