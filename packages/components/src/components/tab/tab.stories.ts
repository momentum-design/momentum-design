import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../badge';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import { TAB_VARIANTS } from './tab.constants';
import { disableControls, hideControls, readOnlyControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`<div role="tablist">
  <mdc-tab
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    ?active="${args.active}"
    ?disabled="${args.disabled}"
    icon-name="${ifDefined(args['icon-name'])}"
    role="${ifDefined(args.role)}"
    tabIndex="${ifDefined(args.tabIndex)}"
    variant="${ifDefined(args.variant)}"
    >${args.showBadge ? html`<mdc-badge slot="badge" type="dot"></mdc-badge>` : ''}${args.children}</mdc-tab>
</div>`;

const meta: Meta = {
  title: 'Work In Progress/tab',
  tags: ['autodocs'],
  component: 'mdc-tab',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    children: {
      description: 'Tab label',
      control: 'text',
    },
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
    role: {
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
    variant: {
      control: 'select',
      options: Object.values(TAB_VARIANTS),
    },
    ...disableControls([
      '--mdc-tab-content-gap',
      '--mdc-tab-height',
      '--mdc-tab-line-active-background-color-active',
      '--mdc-tab-line-active-background-color-disabled',
      '--mdc-tab-line-active-background-color-focus',
      '--mdc-tab-line-active-background-color-hover',
      '--mdc-tab-line-active-background-color-normal',
      '--mdc-tab-line-active-bottom-border-color',
      '--mdc-tab-line-active-bottom-border-color-disabled',
      '--mdc-tab-line-active-color',
      '--mdc-tab-line-active-color-disabled',
      '--mdc-tab-line-border-bottom-left-radius',
      '--mdc-tab-line-border-bottom-right-radius',
      '--mdc-tab-line-border-top-left-radius',
      '--mdc-tab-line-border-top-right-radius',
      '--mdc-tab-line-inactive-background-color-active',
      '--mdc-tab-line-inactive-background-color-disabled',
      '--mdc-tab-line-inactive-background-color-focus',
      '--mdc-tab-line-inactive-background-color-hover',
      '--mdc-tab-line-inactive-background-color-normal',
      '--mdc-tab-line-inactive-color',
      '--mdc-tab-line-inactive-color-disabled',
      '--mdc-tab-padding-left',
      '--mdc-tab-padding-right',
      '--mdc-tab-pill-active-background-color-active',
      '--mdc-tab-pill-active-background-color-disabled',
      '--mdc-tab-pill-active-background-color-focus',
      '--mdc-tab-pill-active-background-color-hover',
      '--mdc-tab-pill-active-background-color-normal',
      '--mdc-tab-pill-active-color',
      '--mdc-tab-pill-active-color-disabled',
      '--mdc-tab-pill-border-radius',
      '--mdc-tab-pill-inactive-background-color-active',
      '--mdc-tab-pill-inactive-background-color-disabled',
      '--mdc-tab-pill-inactive-background-color-focus',
      '--mdc-tab-pill-inactive-background-color-hover',
      '--mdc-tab-pill-inactive-background-color-normal',
      '--mdc-tab-pill-inactive-color',
      '--mdc-tab-pill-inactive-color-disabled',
    ]),
    ...hideControls([
      'size',
      'soft-disabled',
      'type',
    ]),
  },
};

export default meta;

const defaultArgs = {
  children: 'Label',
  active: false,
  disabled: false,
  'icon-name': 'placeholder-bold',
  role: 'tab',
  showBadge: false,
  tabIndex: 0,
  variant: 'pill',
};

export const Example: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    showBadge: true,
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
