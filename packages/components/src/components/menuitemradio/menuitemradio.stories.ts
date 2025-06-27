import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

import { DEFAULTS, INDICATOR } from './menuitemradio.constants';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div role="menu" style="width: 25rem;">${htmlString}</div>`;

const render = (args: Args) =>
  wrapWithDiv(
    html` <mdc-menuitemradio
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      indicator="${args.indicator}"
      label="${args.label}"
      secondary-label="${args['secondary-label']}"
      tooltip-text="${args['tooltip-text']}"
      tooltip-placement="${args['tooltip-placement']}"
    ></mdc-menuitemradio>`,
  );

const meta: Meta = {
  title: 'Work In Progress/menu/menuitemradio',
  tags: ['autodocs'],
  component: 'mdc-menuitemradio',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indicator: {
      control: 'select',
      options: Object.values(INDICATOR),
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
    ...disableControls(['change', 'click', 'focus', '--mdc-radio-indicator-color']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    indicator: DEFAULTS.INDICATOR,
    checked: DEFAULTS.CHECKED,
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP,
  },
};

export const RadioWithMenuItem: StoryObj = {
  args: {
    indicator: INDICATOR.RADIO,
    checked: true,
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP,
  },
};

export const CheckmarkWithMenuItem: StoryObj = {
  args: {
    indicator: INDICATOR.CHECKMARK,
    checked: true,
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP,
  },
};

export const AllVariants: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-menuitemradio checked label="Selected Radio"></mdc-menuitemradio>
      <mdc-menuitemradio disabled checked label="Disabled Selected Radio"></mdc-menuitemradio>
      <mdc-menuitemradio label="Unselected Radio"></mdc-menuitemradio>
      <mdc-menuitemradio disabled label="Disabled Unselected Radio"></mdc-menuitemradio>
      <mdc-menuitemradio checked indicator="checkmark" label="Selected Checkmark"></mdc-menuitemradio>
      <mdc-menuitemradio disabled checked indicator="checkmark" label="Disabled Selected Checkmark"></mdc-menuitemradio>
      <mdc-menuitemradio indicator="checkmark" label="Unselected Checkmark"></mdc-menuitemradio>
      <mdc-menuitemradio disabled indicator="checkmark" label="Disabled Unselected Checkmark"></mdc-menuitemradio>
      <mdc-menuitemradio
        checked
        label="Selected Radio With Secondary Label"
        secondary-label="Secondary Label"
      ></mdc-menuitemradio>
      <mdc-menuitemradio
        label="Unselected Radio With Secondary Label"
        secondary-label="Secondary Label"
      ></mdc-menuitemradio>
      <mdc-menuitemradio
        checked
        indicator="checkmark"
        label="Selected Checkmark With Secondary Label"
        secondary-label="Secondary Label"
      ></mdc-menuitemradio>
      <mdc-menuitemradio
        indicator="checkmark"
        label="Unselected Checkmark With Secondary Label"
        secondary-label="Secondary Label"
      ></mdc-menuitemradio>
    `),
  ...hideAllControls(),
};
