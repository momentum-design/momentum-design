import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-filterchip 
    label="${args.label}"
    ?selected="${args.selected}"
    ?disabled="${args.disabled}"
  ></mdc-filterchip>`;

const meta: Meta = {
  title: 'Work In Progress/chip/filter',
  tags: ['autodocs'],
  component: 'mdc-filterchip',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    selected: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['soft-disabled', 'size', 'role', 'type', 'active',
      'icon-name', 'color']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
    label: 'Filterchip',
    selected: false,
    disabled: false,
  },
};

export const StatesAndVariants: StoryObj = {
  render: () => html`
  <div style="display: flex; gap: 0.5rem;">
    <mdc-filterchip label="Filterchip"></mdc-filterchip>
    <mdc-filterchip label="Selected" selected></mdc-filterchip>
    <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
  </div>`,
};
