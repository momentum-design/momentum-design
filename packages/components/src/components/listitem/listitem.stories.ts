import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls, textControls } from '../../../config/storybook/utils';
import '../avatar';
import '../badge';
import '../button';
import '../checkbox';
import '../icon';
import '../list';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

import '../toggle';
import { LISTITEM_VARIANTS } from './listitem.constants';

const wrapWithList = (content: TemplateResult) => html`<mdc-list style="width: 10rem">${content}</mdc-list>`;

const render = (args: Args) =>
  wrapWithList(html`
    <mdc-listitem
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      @enabled="${action('onenabled')}"
      @disabled="${action('ondisabled')}"
      @created="${action('oncreated')}"
      @destroyed="${action('ondestroyed')}"
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      variant="${args.variant}"
      label="${args.label}"
      secondary-label="${args['secondary-label']}"
      tertiary-label="${args['tertiary-label']}"
      side-header-text="${args['side-header-text']}"
      subline-text="${args['subline-text']}"
      tooltip-text="${args['tooltip-text']}"
      tooltip-placement="${args['tooltip-placement']}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
      <mdc-icon slot="leading-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `);

const meta: Meta = {
  title: 'Components/listitem',
  tags: ['autodocs'],
  component: 'mdc-listitem',
  render,
  parameters: {
    badges: ['stable'],
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
    'soft-disabled': {
      control: 'boolean',
    },
    'tooltip-text': {
      control: 'text',
    },
    'tooltip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    ...hideControls(['role']),
    ...disableControls([
      'click',
      'keydown',
      'keyup',
      'focus',
      'leading-controls',
      'leading-text-primary-label',
      'leading-text-secondary-label',
      'leading-text-tertiary-label',
      'trailing-text-side-header',
      'trailing-text-subline',
      'trailing-controls',
    ]),
    ...textControls([
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
      '--mdc-listitem-disabled-color',
      '--mdc-listitem-column-gap',
      '--mdc-listitem-padding-left-right',
      '--mdc-listitem-padding-top-bottom',
      '--mdc-listitem-cursor',
      '--mdc-listitem-width',
      '--mdc-listitem-height',
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
    'side-header-text': 'Header Text',
    'subline-text': 'Subline Text',
    disabled: false,
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP,
  },
};

export const LabelOnly: StoryObj = {
  render: () => wrapWithList(html`<mdc-listitem label="Primary Label"></mdc-listitem>`),
  ...hideAllControls(),
};

export const TrailingIcon: StoryObj = {
  render: () =>
    wrapWithList(html`
      <mdc-listitem>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-listitem>
    `),
  ...hideAllControls(),
};

export const ListWithLabelAndLeadingAvatar: StoryObj = {
  render: () =>
    wrapWithList(html`
      <mdc-listitem label="Primary Label">
        <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
      </mdc-listitem>
    `),
  ...hideAllControls(),
};

export const ListWithLabelAndTrailingBadge: StoryObj = {
  render: () =>
    wrapWithList(html`
      <mdc-listitem label="Primary Label">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-listitem>
    `),
  ...hideAllControls(),
};

export const ListWithDisableState: StoryObj = {
  render: (args: Args) =>
    wrapWithList(html`
      <mdc-listitem ?disabled="${args.disabled}" label="${args.label}" side-header-text="${args['side-header-text']}">
        <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
        <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
        <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-listitem>
    `),
  args: {
    disabled: true,
    label: 'Primary Label',
    'side-header-text': 'Header',
  },
  argTypes: {
    ...hideControls(['variant', 'secondary-label', 'tertiary-label', 'subline-text', 'tabIndex']),
  },
};

export const ListWithIconAndLabels: StoryObj = {
  render: () =>
    wrapWithList(html`
      <mdc-listitem
        label="Primary Label"
        secondary-label="This is a long Secondary Label"
        tertiary-label="Teritary Label"
      >
        <div slot="leading-controls">
          <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
        </div>
      </mdc-listitem>
    `),
  ...hideAllControls(),
};

export const ListWithLongText: StoryObj = {
  render: () => html`
    <div role="list" style="width: 15rem">
      <mdc-listitem label="A short text"></mdc-listitem>
      <mdc-listitem label="A little lengthy text"></mdc-listitem>
      <mdc-listitem
        label="A long lengthy text with small secondary label"
        secondary-label="a small secondary label"
        tooltip-text="A long lengthy text with small secondary label"
      ></mdc-listitem>
      <mdc-listitem
        label="A small primary label"
        secondary-label="a lengthy secondary label with a small label"
        tooltip-text="a lengthy secondary label with a small label"
        tooltip-placement="bottom"
      ></mdc-listitem>
      <mdc-listitem label="A short text"></mdc-listitem>
    </div>
  `,
  ...hideAllControls(),
};

export const ListItemLabelsUsingSlot: StoryObj = {
  render: () => html`
    <mdc-list>
      <mdc-listitem variant="full-width">
        <mdc-checkbox slot="leading-controls" data-aria-label="List item checkbox" checked=""></mdc-checkbox>
        <mdc-text slot="leading-text-primary-label" type="body-midsize-regular" tagname="div">Primary</mdc-text>
        <mdc-text slot="leading-text-secondary-label" type="body-large-regular">Secondary</mdc-text>
        <mdc-text slot="leading-text-tertiary-label" type="body-small-bold" tagname="div">Tertiary</mdc-text>
      </mdc-listitem>
    </mdc-list>
  `,
};

export const ListItemOverrideWithContentSlot: StoryObj = {
  render: () => html`
    <mdc-list>
      <mdc-listitem variant="full-width">
        <span slot="content">This is a complete override / customisation to show case flexibility.</span>
        <mdc-button slot="content" variant="secondary">Action 1</mdc-button>
        <mdc-button slot="content" variant="primary">Action 2</mdc-button>
        <mdc-button slot="content" variant="tertiary">Action 3</mdc-button>
      </mdc-listitem>
    </mdc-list>
  `,
};
