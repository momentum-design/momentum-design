import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../badge';
import { html, nothing } from 'lit';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { textControls, hideControls, readOnlyControls } from '../../../config/storybook/utils';

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
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Tab can be active or inactive. Active tab means the tab is selected.',
    },
    disabled: {
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
    ...textControls([
      '--mdc-tab-content-gap',
      '--mdc-tab-height',
      '--mdc-tab-glass-active-background-color-disabled',
      '--mdc-tab-glass-active-background-color-hover',
      '--mdc-tab-glass-active-background-color-normal',
      '--mdc-tab-glass-active-background-color-pressed',
      '--mdc-tab-glass-active-color',
      '--mdc-tab-glass-active-color-disabled',
      '--mdc-tab-glass-border-radius',
      '--mdc-tab-glass-inactive-background-color-disabled',
      '--mdc-tab-glass-inactive-background-color-hover',
      '--mdc-tab-glass-inactive-background-color-normal',
      '--mdc-tab-glass-inactive-background-color-pressed',
      '--mdc-tab-glass-inactive-color',
      '--mdc-tab-glass-inactive-color-disabled',
      '--mdc-tab-line-active-background-color-disabled',
      '--mdc-tab-line-active-background-color-hover',
      '--mdc-tab-line-active-background-color-normal',
      '--mdc-tab-line-active-background-color-pressed',
      '--mdc-tab-line-active-color',
      '--mdc-tab-line-active-color-disabled',
      '--mdc-tab-line-active-indicator-color',
      '--mdc-tab-line-active-indicator-color-disabled',
      '--mdc-tab-line-active-indicator-height',
      '--mdc-tab-line-active-indicator-width',
      '--mdc-tab-line-border-bottom-left-radius',
      '--mdc-tab-line-border-bottom-right-radius',
      '--mdc-tab-line-border-top-left-radius',
      '--mdc-tab-line-border-top-right-radius',
      '--mdc-tab-line-inactive-background-color-disabled',
      '--mdc-tab-line-inactive-background-color-hover',
      '--mdc-tab-line-inactive-background-color-normal',
      '--mdc-tab-line-inactive-background-color-pressed',
      '--mdc-tab-line-inactive-color',
      '--mdc-tab-line-inactive-color-disabled',
      '--mdc-tab-padding-left',
      '--mdc-tab-padding-right',
      '--mdc-tab-pill-active-background-color-disabled',
      '--mdc-tab-pill-active-background-color-hover',
      '--mdc-tab-pill-active-background-color-normal',
      '--mdc-tab-pill-active-background-color-pressed',
      '--mdc-tab-pill-active-color',
      '--mdc-tab-pill-active-color-disabled',
      '--mdc-tab-pill-border-radius',
      '--mdc-tab-pill-inactive-background-color-disabled',
      '--mdc-tab-pill-inactive-background-color-hover',
      '--mdc-tab-pill-inactive-background-color-normal',
      '--mdc-tab-pill-inactive-background-color-pressed',
      '--mdc-tab-pill-inactive-color',
      '--mdc-tab-pill-inactive-color-disabled',
    ]),
    ...hideControls(['role', 'size', 'soft-disabled', 'type']),
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
