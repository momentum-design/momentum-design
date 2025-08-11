import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import '../badge';
import '../divider';
import '../icon';
import '../tooltip';

import { ARROW_DIRECTIONS, ARROW_POSITIONS } from './menuitem.constants';

const label = 'Menu Item';
const wrapWithDiv = (htmlString: TemplateResult) => html`<div role="menu" style="width: 20rem;">${htmlString}</div>`;

const render = (args: Args) =>
  wrapWithDiv(
    html` <mdc-menuitem
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      arrow-position="${args['arrow-position']}"
      arrow-direction="${args['arrow-direction']}"
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      label="${args.label}"
      secondary-label="${args['secondary-label']}"
      side-header-text="${args['side-header-text']}"
      tertiary-label="${args['tertiary-label']}"
      subline-text="${args['subline-text']}"
    ></mdc-menuitem>`,
  );

const meta: Meta = {
  title: 'Components/menupopover/menuitem',
  tags: ['autodocs'],
  component: 'mdc-menuitem',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    'secondary-label': {
      control: 'text',
    },
    'side-header-text': {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    'tertiary-label': {
      control: 'text',
    },
    'subline-text': {
      control: 'text',
    },
    'arrow-position': {
      control: 'select',
      options: Object.values(ARROW_POSITIONS),
    },
    'arrow-direction': {
      control: 'select',
      options: Object.values(ARROW_DIRECTIONS),
    },
    ...hideControls([
      'variant',
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
      '--mdc-listitem-disabled-color',
      '--mdc-listitem-column-gap',
      '--mdc-listitem-padding-left-and-right',
      'default',
    ]),
    ...disableControls([
      'leading-controls',
      'leading-text-primary-label',
      'leading-text-secondary-label',
      'leading-text-tertiary-label',
      'trailing-text-side-header',
      'trailing-text-subline',
      'trailing-controls',
      'click',
      'keydown',
      'keyup',
      'focus',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label,
    'secondary-label': 'This is a secondary Label',
    'side-header-text': '',
    'tertiary-label': '',
    'subline-text': '',
    disabled: false,
  },
};

export const ListOfMenuItems: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-menuitem label="New" secondary-label="Create a new file"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Open File" secondary-label="Open an existing file"></mdc-menuitem>
      <mdc-menuitem label="Close File" secondary-label="Close the current file"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Save" secondary-label="Save the current file"></mdc-menuitem>
      <mdc-menuitem label="Save As" secondary-label="Save the current file with a new name"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Share" secondary-label="Share the current file"></mdc-menuitem>
    `),
  ...hideAllControls(),
};

export const MenuItemWithLeadingIcon: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-menuitem label="${label}">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    `),
  ...hideAllControls(),
};

export const MenuItemWithTrailingIcon: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-menuitem label="${label}">
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    `),
  ...hideAllControls(),
};

export const MenuItemWithBadge: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-menuitem label="${label}">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-menuitem>
    `),
  ...hideAllControls(),
};

export const MenuItemWithBadgeIcon: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-menuitem label="${label}">
        <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
      </mdc-menuitem>
    `),
  ...hideAllControls(),
};

export const MenuItemWithBadgeCounter: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-menuitem label="${label}">
        <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
      </mdc-menuitem>
    `),
  ...hideAllControls(),
};

export const MenuItemWithSideText: StoryObj = {
  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" side-header-text="##"></mdc-menuitem> `),
  ...hideAllControls(),
};

export const MenuItemWithTrailingArrow: StoryObj = {
  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" arrow-position="trailing"></mdc-menuitem> `),
  ...hideAllControls(),
};

export const MenuItemWithLeadingArrow: StoryObj = {
  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" arrow-position="leading"></mdc-menuitem> `),
  ...hideAllControls(),
};

export const MenuItemWithTooltip: StoryObj = {
  render: () => html`
    <div role="menu" style="width: 15rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" id="menuitem-1">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
      <mdc-tooltip triggerID="menuitem-1" show-arrow>This is the tooltip text.</mdc-tooltip>
    </div>
  `,
  ...hideAllControls(),
};
