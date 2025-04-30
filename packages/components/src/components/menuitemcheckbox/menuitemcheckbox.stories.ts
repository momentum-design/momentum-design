import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { ARIA_CHECKED_STATES, INDICATOR } from './menuitemcheckbox.constants';
import { hideAllControls, hideControls } from '../../../config/storybook/utils';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div role="menu" style="width: 25rem;">${htmlString}
</div>`;

const render = (args: Args) => wrapWithDiv(html`
  <mdc-menuitemcheckbox
    ?disabled="${args.disabled}"
    aria-checked="${args['aria-checked']}"
    label="${args.label}"
    indicator="${args.indicator}"
    secondary-label="${args['secondary-label']}"
  ></mdc-menuitemcheckbox>`);

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
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'aria-checked': 'false',
    indicator: 'checkbox',
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
  },
};

export const ToggleWithMenuItem: StoryObj = {
  args: {
    'aria-checked': 'true',
    indicator: 'toggle',
    label: 'Menu Item With Toggle',
    disabled: false,
    'secondary-label': '',
  },
};

export const CheckboxWithMenuItem: StoryObj = {
  args: {
    'aria-checked': 'true',
    indicator: 'checkbox',
    label: 'Menu Item With Checkbox',
    disabled: false,
    'secondary-label': '',
  },
};

export const AllVariants: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-menuitemcheckbox aria-checked="true" label="Selected Menu Item"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" label="Disabled Selected Menu Item"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" label="Unselected Menu Item"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" label="Disabled Unselected Menu Item"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="mixed" label="Indeterminate Menu Item"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="mixed" label="Disabled Indeterminate Menu Item"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="toggle" label="Selected Menu Item"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="toggle" label="Disabled Selected Menu Item">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="toggle" label="Unselected Menu Item"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="toggle" label="Disabled Unselected Menu Item">
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
