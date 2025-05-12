import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';
import '.';
import '../icon';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { INDICATOR } from './menuitemcheckbox.constants';
import { ARIA_CHECKED_STATES } from '../menusection/menusection.constants';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div role="menu" style="width: 25rem;">${htmlString}</div>`;

const render = (args: Args) => wrapWithDiv(html`
  <mdc-menuitemcheckbox
    ?disabled="${args.disabled}"
    aria-checked="${args['aria-checked']}"
    label="${args.label}"
    indicator="${args.indicator}"
    secondary-label="${args['secondary-label']}"
    tooltip-text="${args['tooltip-text']}"
    tooltip-placement="${args['tooltip-placement']}"
  >
    ${args.children}
  </mdc-menuitemcheckbox>`);

const meta: Meta = {
  title: 'Work In Progress/menu/menuitemcheckbox',
  tags: ['autodocs'],
  component: 'mdc-menuitemcheckbox',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    'aria-checked': {
      control: 'select',
      options: Object.values(ARIA_CHECKED_STATES),
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
      '--mdc-checkmark-indicator-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    indicator: INDICATOR.CHECKBOX,
    'aria-checked': ARIA_CHECKED_STATES.FALSE,
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP,
    children: html`<mdc-icon name="alert-muted-bold" slot="leading-controls"></mdc-icon>`,
  },
};

export const ToggleWithMenuItem: StoryObj = {
  args: {
    'aria-checked': ARIA_CHECKED_STATES.TRUE,
    indicator: INDICATOR.TOGGLE,
    label: 'Menu Item With Toggle',
    disabled: false,
    'secondary-label': '',
  },
};

export const CheckboxWithMenuItem: StoryObj = {
  args: {
    'aria-checked': ARIA_CHECKED_STATES.TRUE,
    indicator: INDICATOR.CHECKBOX,
    label: 'Menu Item With Checkbox',
    disabled: false,
    'secondary-label': '',
  },
};

export const CheckmarkWithMenuItem: StoryObj = {
  args: {
    'aria-checked': ARIA_CHECKED_STATES.TRUE,
    indicator: INDICATOR.CHECKMARK,
    label: 'Menu Item With Checkmark',
    disabled: false,
    'secondary-label': '',
  },
};

export const AllVariants: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-menuitemcheckbox aria-checked="true" label="Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" label="Disabled Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" label="Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" label="Disabled Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="toggle" label="Selected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="toggle" label="Disabled Selected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="toggle" label="Unselected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="toggle" label="Disabled Unselected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="checkmark" label="Selected Checkmark"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="checkmark" label="Disabled Selected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="checkmark" label="Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="checkmark" label="Disabled Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" indicator="toggle"
      label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" indicator="toggle"
      label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
  `),
  ...hideAllControls(),
};
