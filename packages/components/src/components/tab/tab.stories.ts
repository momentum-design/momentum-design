import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../badge';
import '../staticchip';
import '../brandvisual';
import { html, nothing } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { hideAllControls, hideControls, readOnlyControls } from '../../../config/storybook/utils';

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
    ></mdc-tab>
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
    ...hideControls(['role', 'size', 'type', 'Slot Name: ""']),
  },
};

export default meta;

const defaultArgs = {
  active: false,
  disabled: false,
  'icon-name': 'placeholder-bold',
  role: 'tab',
  tabIndex: 0,
  text: 'Label',
  variant: TAB_VARIANTS.PILL,
};

export const Example: StoryObj = {
  render,
  args: {
    ...defaultArgs,
  },
};

export const GlassTab: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    variant: TAB_VARIANTS.GLASS,
  },
  argTypes: {
    ...readOnlyControls(['variant']),
  },
};

export const LineTab: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    variant: TAB_VARIANTS.LINE,
  },
  argTypes: {
    ...readOnlyControls(['variant']),
  },
};

export const PillTab: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    variant: TAB_VARIANTS.PILL,
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

export const CustomPrefixSlot: StoryObj = {
  render: (args: Args) =>
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
        tabIndex="${ifDefined(args.tabIndex)}"
        text="${ifDefined(args.text)}"
        variant="${ifDefined(args.variant)}"
        tab-id="tab1"
        ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
      >
        <mdc-brandvisual style="width: 1rem;" slot="prefix" name="webex-symbol-common-color-gradient"></mdc-brandvisual>
      </mdc-tab>
    </div>`,
  args: {
    ...defaultArgs,
    'icon-name': undefined, // Remove default icon-name since we're using custom slot
  },
  argTypes: {
    ...hideControls(['icon-name']),
  },
};

export const TabWithSlots: StoryObj = {
  render: () => html`
    <div role="main" style="display: flex; gap: 2rem; flex-direction: column;">
      <div style="display: flex; gap: 1rem;" role="tablist">
        <mdc-tab text="Postfix Icon">
          <mdc-icon slot="postfix" name="placeholder-bold"></mdc-icon>
        </mdc-tab>
        <mdc-tab active text="Prefix Icon">
          <mdc-icon slot="prefix" name="placeholder-bold"></mdc-icon>
        </mdc-tab>
      </div>
      <div style="display: flex; gap: 1rem;" role="tablist">
        <mdc-tab text="Postfix Badge">
          <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
        </mdc-tab>
        <mdc-tab active text="Prefix Badge">
          <mdc-badge slot="prefix"></mdc-badge>
        </mdc-tab>
      </div>
      <div style="display: flex; gap: 1rem;" role="tablist">
        <mdc-tab text="Postfix Chip">
          <mdc-staticchip slot="postfix" label="Alpha"></mdc-chip>
        </mdc-tab>
        <mdc-tab active text="Prefix Chip">
          <mdc-staticchip slot="prefix" label="Beta"></mdc-chip>
        </mdc-tab>
      </div>
    </div>
  `,
  ...hideAllControls(),
};
