import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../button';
import { html } from 'lit';
import iconsManifest from '@momentum-design/icons/dist/manifest.json';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls } from '../../../config/storybook/utils';

import { TYPE, ICON_VARIANT, DEFAULTS } from './badge.constants';

const MAX_COUNTER_LIST = [9, 99, 999];

const renderExample = (args: Args) => html`
  <div
    data-badge-demo
    style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
  >
    <mdc-badge
      data-testid="example-badge"
      type="${args.type}"
      icon-name="${args['icon-name']}"
      counter="${args.counter}"
      max-counter="${args['max-counter']}"
      variant="${args.variant}"
      ?overlay="${args.overlay}"
      aria-label="${args['aria-label']}"
    ></mdc-badge>
  </div>
`;

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
  render: renderExample,
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

export const Motion: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
        <span>Counter badge</span>
        <mdc-badge id="motion-badge-counter" type="${TYPE.COUNTER}" counter="1" max-counter="99"></mdc-badge>
        <div style="display: flex; gap: 0.5rem;">
          <button type="button" id="motion-badge-counter-show">Show badge</button>
          <button type="button" id="motion-badge-counter-increment">Increment counter</button>
          <button type="button" id="motion-badge-counter-clear">Clear badge</button>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
        <span>Dot badge</span>
        <mdc-badge id="motion-badge-dot" type="${TYPE.DOT}"></mdc-badge>
        <div style="display: flex; gap: 0.5rem;">
          <button type="button" id="motion-badge-dot-show">Show badge</button>
          <button type="button" id="motion-badge-dot-hide">Hide badge</button>
        </div>
      </div>
    </div>
    <script>
      const counterBadge = document.getElementById('motion-badge-counter');
      const counterShowButton = document.getElementById('motion-badge-counter-show');
      const counterIncrementButton = document.getElementById('motion-badge-counter-increment');
      const counterClearButton = document.getElementById('motion-badge-counter-clear');

      counterShowButton?.addEventListener('click', () => {
        counterBadge?.setAttribute('type', 'counter');
        counterBadge?.setAttribute('counter', '1');
        counterBadge?.setAttribute('visible', '');
      });

      counterIncrementButton?.addEventListener('click', () => {
        const current = Number(counterBadge?.getAttribute('counter') ?? '0');
        counterBadge?.setAttribute('counter', String(current + 1));
      });

      counterClearButton?.addEventListener('click', () => {
        counterBadge?.removeAttribute('counter');
        counterBadge?.removeAttribute('visible');
      });

      const dotBadge = document.getElementById('motion-badge-dot');
      const dotShowButton = document.getElementById('motion-badge-dot-show');
      const dotHideButton = document.getElementById('motion-badge-dot-hide');

      dotShowButton?.addEventListener('click', () => {
        dotBadge?.setAttribute('type', 'dot');
        dotBadge?.setAttribute('visible', '');
      });

      dotHideButton?.addEventListener('click', () => {
        if (dotBadge) {
          dotBadge.visible = false;
        }
      });
    </script>
  `,
  ...hideAllControls(),
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
