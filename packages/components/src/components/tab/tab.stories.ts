import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { TAB_VARIANTS } from './tab.constants';
import { readOnlyControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`<mdc-tab
    ?active="${args.active}"
    ?disabled="${args.disabled}"
    icon-name="${args['icon-name']}"
    tab-variant="${args['tab-variant']}"
    >${args.showBadge ? html`<mdc-badge slot="badge" type="dot"></mdc-badge>` : ''}${args.children}</mdc-tab>`;

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
    'tab-variant': {
      control: 'select',
      options: Object.values(TAB_VARIANTS),
    },
  },
};

export default meta;

const defaultArgs = {
  children: 'Label',
  active: false,
  disabled: false,
  'icon-name': 'placeholder-bold',
  showBadge: false,
  'tab-variant': 'pill',
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
    'tab-variant': 'line',
  },
  argTypes: {
    ...readOnlyControls(['tab-variant']),
  },
};

export const PillTab: StoryObj = {
  render,
  args: {
    ...defaultArgs,
    'tab-variant': 'pill',
  },
  argTypes: {
    ...readOnlyControls(['tab-variant']),
  },
};
