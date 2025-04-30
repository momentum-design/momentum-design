import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls } from '../../../config/storybook/utils';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div role="menu" style="width: 25rem;">${htmlString}
</div>`;

const render = (args: Args) => wrapWithDiv(html`
  <mdc-menuitemradio
    aria-checked="${args['aria-checked']}"
    ?disabled="${args.disabled}"
    label="${args.label}"
    secondary-label="${args['secondary-label']}"
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
      control: 'boolean',
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
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'aria-checked': 'false',
    disabled: false,
    label: 'Menu Item',
    'secondary-label': '',
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
