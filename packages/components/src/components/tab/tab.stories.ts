import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { TAB_VARIANTS } from './tab.constants';
import { hideControls, readOnlyControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`<div role="tablist">
  <mdc-tab
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    ?active="${args.active}"
    ?disabled="${args.disabled}"
    icon-name="${args['icon-name']}"
    role="${args.role}"
    tabindex="${args.tabIndex}"
    variant="${args.variant}"
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
