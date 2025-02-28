import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { hideControls } from '../../../config/storybook/utils';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../avatar';
import '../badge';
import '../button';
import '../checkbox';
import '../icon';
import '../toggle';
import { LISTITEM_VARIANTS } from './listitem.constants';

const render = (args: Args) => html`
  <mdc-listitem
    ?disabled="${args.disabled}"
    variant="${args.variant}"
    label="${args.label}"
    secondary-label="${args['secondary-label']}"
    tertiary-label="${args['tertiary-label']}"
    side-header-text="${args['side-header-text']}"
    subline-text="${args['subline-text']}"
  >
    <div slot="leading-controls">
      <mdc-checkbox checked></mdc-checkbox>
      <mdc-avatar src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
      <mdc-icon name="placeholder-bold"></mdc-icon>
    </div>
    <div slot="trailing-controls">
      <mdc-icon name="placeholder-bold"></mdc-icon>
      <mdc-button variant="secondary">Label</mdc-button>
      <mdc-toggle size="compact"></mdc-toggle>
      <mdc-badge type="dot"></mdc-badge>
    </div>
  </mdc-listitem>
`;

const meta: Meta = {
  title: 'Work In Progress/listitem',
  tags: ['autodocs'],
  component: 'mdc-listitem',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(LISTITEM_VARIANTS),
    },
    label: {
      control: 'text',
    },
    'secondary-label': {
      control: 'text',
    },
    'tertiary-label': {
      control: 'text',
    },
    'side-header-text': {
      control: 'text',
    },
    'subline-text': {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    ...hideControls([
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: LISTITEM_VARIANTS.FULL_WIDTH,
    label: 'Label Text',
    'secondary-label': 'Secondary Label',
    'tertiary-label': 'Teritary Label',
    'side-header-text': 'Header',
    'subline-text': 'Subline',
  },
};

export const TrailingIcon: StoryObj = {
  render: () => html`
    <mdc-listitem>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  `,
};

export const LabelOnly: StoryObj = {
  render: () => html`<mdc-listitem label="Primary Label"></mdc-listitem>`,
};

export const ListWithLabelAndLeadingAvatar: StoryObj = {
  render: () => html`
    <mdc-listitem label="Primary Label">
      <div slot="leading-controls">
        <mdc-avatar src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
      </div>
    </mdc-listitem>`,
};

export const ListWithLabelAndTrailingBadge: StoryObj = {
  render: () => html`
    <mdc-listitem label="Primary Label">
      <div slot="trailing-controls">
        <mdc-badge type="dot"></mdc-badge>
      </div>
    </mdc-listitem>`,
};

export const ListWithIconAndLabels: StoryObj = {
  render: () => html`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon name="placeholder-bold"></mdc-icon>
      </div>
    </mdc-listitem>`,
};
