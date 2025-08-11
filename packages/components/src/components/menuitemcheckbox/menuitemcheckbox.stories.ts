import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import '.';
import '../icon';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls, textControls } from '../../../config/storybook/utils';

import { INDICATOR } from './menuitemcheckbox.constants';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div role="menu" style="width: 25rem;">${htmlString}</div>`;

const render = (args: Args) =>
  wrapWithDiv(
    html` <mdc-menuitemcheckbox
      ?disabled="${args.disabled}"
      ?checked="${args.checked}"
      label="${args.label}"
      indicator="${args.indicator}"
      secondary-label="${args['secondary-label']}"
    >
      ${args.children}
    </mdc-menuitemcheckbox>`,
  );

const meta: Meta = {
  title: 'Components/menupopover/menuitemcheckbox',
  tags: ['autodocs'],
  component: 'mdc-menuitemcheckbox',
  render,
  parameters: {
    badges: ['stable'],
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
    ...hideControls([
      'data-aria-label',
      'variant',
      'tertiary-label',
      'side-header-text',
      'subline-text',
      'leading-controls',
      'leading-text-primary-label',
      'leading-text-secondary-label',
      'leading-text-tertiary-label',
      'trailing-text-side-header',
      'trailing-text-subline',
      'trailing-controls',
      'arrow-position',
      'arrow-direction',
    ]),
    ...textControls([
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
      '--mdc-listitem-disabled-color',
      '--mdc-listitem-column-gap',
      '--mdc-listitem-padding-left-and-right',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    indicator: INDICATOR.CHECKBOX,
    checked: false,
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
    children: html`<mdc-icon length-unit="rem" name="alert-muted-bold" slot="leading-controls"></mdc-icon>`,
  },
};

export const ToggleWithMenuItem: StoryObj = {
  args: {
    checked: true,
    indicator: INDICATOR.TOGGLE,
    label: 'Menu Item With Toggle',
    disabled: false,
    'secondary-label': '',
  },
};

export const CheckboxWithMenuItem: StoryObj = {
  args: {
    checked: true,
    indicator: INDICATOR.CHECKBOX,
    label: 'Menu Item With Checkbox',
    disabled: false,
    'secondary-label': '',
  },
};

export const CheckmarkWithMenuItem: StoryObj = {
  args: {
    checked: true,
    indicator: INDICATOR.CHECKMARK,
    label: 'Menu Item With Checkmark',
    disabled: false,
    'secondary-label': '',
  },
};

export const AllVariants: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <div role="menu" style="display: flex; gap: 1rem;">
        <mdc-menusection headerText="Menu Item Checkboxes">
          <mdc-menuitemcheckbox checked label="Selected Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled checked label="Disabled Selected Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Unselected Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled label="Disabled Unselected Checkbox"></mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-menusection headerText="Menu Item Toggles">
          <mdc-menuitemcheckbox checked indicator="toggle" label="Selected Toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled checked indicator="toggle" label="Disabled Selected Toggle">
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="toggle" label="Unselected Toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled indicator="toggle" label="Disabled Unselected Toggle"> </mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-menusection headerText="Menu Item Checkmarks">
          <mdc-menuitemcheckbox checked indicator="checkmark" label="Selected Checkmark"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled checked indicator="checkmark" label="Disabled Selected Checkmark">
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="checkmark" label="Unselected Checkmark"> </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled indicator="checkmark" label="Disabled Unselected Checkmark">
          </mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-menusection headerText="Menu Item Checkbox with custom indicator">
          <style>
            mdc-menuitemcheckbox[indicator='none'] mdc-icon {
              width: 5rem;
              height: auto;
              aspect-ratio: 16/9;
              padding: 0.75rem;
            }
            mdc-menuitemcheckbox[indicator='none'][checked]:not([disabled]) mdc-icon {
              color: var(--mds-color-theme-text-accent-normal);
              background: var(--mdc-listitem-background-color-active);
            }
            mdc-menuitemcheckbox[indicator='none'][checked][disabled] mdc-icon {
              background: var(--mdc-listitem-background-color-hover);
            }
            mdc-menuitemcheckbox[indicator='none'][checked]::part(leading-text-primary-label) {
              font-weight: bold;
              color: inherit;
            }
          </style>
          <mdc-menuitemcheckbox name="group3" checked indicator="none" label="Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="group3" disabled checked indicator="none" label="Disabled Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="group3" indicator="none" label="Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="group3" disabled indicator="none" label="Disabled Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
        </mdc-menusection>

        <mdc-menusection headerText="Menu Item Checkboxes with secondary label">
          <mdc-menuitemcheckbox
            checked
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox
            checked
            indicator="toggle"
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox
            indicator="toggle"
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
        </mdc-menusection>
      </div>
    `),
  ...hideAllControls(),
};
