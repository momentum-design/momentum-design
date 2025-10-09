import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../badge';
import { html, nothing } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { hideControls, readOnlyControls } from '../../../config/storybook/utils';

import { TAB_VARIANTS } from './tab.constants';

const render = (args: Args) =>
  html`<div role="tablist">
    <mdc-tab
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      @activechange="${action('onactivechange')}"
      ?active="${args.active}"
      aria-label="${ifDefined(args.text ? nothing : 'Label')}"
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      icon-name="${ifDefined(args['icon-name'])}"
      tabIndex="${ifDefined(args.tabIndex)}"
      text="${ifDefined(args.text)}"
      variant="${ifDefined(args.variant)}"
      tab-id="tab1"
      ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
      >${args.showBadge ? html`<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>` : nothing}</mdc-tab
    >
  </div>`;

const meta: Meta = {
  title: 'Components/tab',
  tags: ['autodocs'],
  component: 'mdc-tab',
  render,

  argTypes: {
    active: {
      control: 'boolean',
      description: 'Tab can be active or inactive. Active tab means the tab is selected.',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    'icon-name': {
      control: 'text',
    },
    showBadge: {
      control: 'boolean',
      description: 'This is an internal argument to show the badge in the story',
      table: { disable: true },
    },
    tabIndex: {
      control: 'number',
    },
    text: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: Object.values(TAB_VARIANTS),
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    ...hideControls(['role', 'size', 'type']),
  },
};

export default meta;

const defaultArgs = {
  active: false,
  disabled: false,
  'icon-name': 'placeholder-bold',
  role: 'tab',
  showBadge: false,
  tabIndex: 0,
  text: 'Label',
  variant: 'pill',
};

export const Example: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    showBadge: true,
  },
};

export const GlassTab: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    variant: 'glass',
  },
  argTypes: {
    ...readOnlyControls(['variant']),
  },
};

export const LineTab: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    variant: 'line',
  },
  argTypes: {
    ...readOnlyControls(['variant']),
  },
};

export const PillTab: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    variant: 'pill',
  },
  argTypes: {
    ...readOnlyControls(['variant']),
  },
};

export const IconOnlyTab: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    text: '',
  },
  argTypes: {
    ...hideControls(['text']),
  },
};
