import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import '../avatar';
import '../badge';
import '../button';
import '../checkbox';
import '../icon';
import '../list';
import '../toggle';
import { LISTITEM_VARIANTS } from './listitem.constants';

const wrapWithList = (content: TemplateResult) => html`<mdc-list>${content}</mdc-list>`;

const render = (args: Args) => wrapWithList(
  html`
    <mdc-listitem
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      ?disabled="${args.disabled}"
      variant="${args.variant}"
      label="${args.label}"
      secondary-label="${args['secondary-label']}"
      tertiary-label="${args['tertiary-label']}"
      side-header-text="${args['side-header-text']}"
      subline-text="${args['subline-text']}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `,
);

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
    ...hideControls([
      'role',
    ]),
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
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
      '--mdc-listitem-disabled-color',
      '--mdc-listitem-column-gap',
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
    disabled: false,
  },
};

export const LabelOnly: StoryObj = {
  render: () => wrapWithList(html`<mdc-listitem label="Primary Label"></mdc-listitem>`),
  ...hideAllControls(),
};

export const TrailingIcon: StoryObj = {
  render: () => wrapWithList(html`
    <mdc-listitem>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  `),
  ...hideAllControls(),
};

export const ListWithLabelAndLeadingAvatar: StoryObj = {
  render: () => wrapWithList(html`
    <mdc-listitem label="Primary Label">
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
    </mdc-listitem>
  `),
  ...hideAllControls(),
};

export const ListWithLabelAndTrailingBadge: StoryObj = {
  render: () => wrapWithList(html`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `),
  ...hideAllControls(),
};

export const ListWithDisableState: StoryObj = {
  render: (args: Args) => wrapWithList(html`
    <mdc-listitem
      ?disabled="${args.disabled}"
      label="${args.label}"
      side-header-text="${args['side-header-text']}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
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
  render: () => wrapWithList(html`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon name="placeholder-bold"></mdc-icon>
      </div>
    </mdc-listitem>
  `),
  ...hideAllControls(),
};
