import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { ARIA_CHECKED_STATES } from '../menusection/menusection.constants';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div role="menu" style="width: 25rem;">${htmlString}</div>`;

const render = (args: Args) => wrapWithDiv(html`
  <mdc-menuitemradio
    aria-checked="${args['aria-checked']}"
    ?disabled="${args.disabled}"
    label="${args.label}"
    secondary-label="${args['secondary-label']}"
    tooltip-text="${args['tooltip-text']}"
    tooltip-placement="${args['tooltip-placement']}"
  ></mdc-menuitemradio>`);

const meta: Meta = {
  title: 'Work In Progress/menu/menuitemradio',
  tags: ['autodocs'],
  component: 'mdc-menuitemradio',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    'aria-checked': {
      control: 'select',
      options: Object.values(ARIA_CHECKED_STATES),
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    'secondary-label': {
      control: 'text',
    },
    'tooltip-text': {
      control: 'text',
    },
    'tooltip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    ...hideControls([
      'data-aria-label',
      'variant',
      'tertiary-label',
      'side-header-text',
      'subline-text',
      'keydown',
      'keyup',
      'leading-controls',
      'leading-text-primary-label',
      'leading-text-secondary-label',
      'leading-text-tertiary-label',
      'trailing-text-side-header',
      'trailing-text-subline',
      'trailing-controls',
      'arrow-position',
      'arrow-direction',
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
      '--mdc-listitem-disabled-color',
      '--mdc-listitem-column-gap',
      '--mdc-listitem-padding-left-and-right',
    ]),
    ...disableControls([
      'change',
      'click',
      'focus',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'aria-checked': ARIA_CHECKED_STATES.FALSE,
    disabled: false,
    label: 'Menu Item',
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP,
  },
};

export const AllVariants: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-menuitemradio aria-checked="true" label="Selected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio disabled aria-checked="true" label="Disabled Selected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio aria-checked="false" label="Unselected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio disabled aria-checked="false" label="Disabled Unselected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio
      aria-checked="true" label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemradio>
    <mdc-menuitemradio
      aria-checked="false" label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemradio>
  `),
  ...hideAllControls(),
};
