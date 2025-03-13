import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
<mdc-inputchip
  @click="${action('onclick')}"
  @keydown="${action('onkeydown')}"
  @keyup="${action('onkeyup')}"
  @focus="${action('onfocus')}"
  label="${args.label}"
  icon-name="${args['icon-name']}"
  ?error="${args.error}"
  ?disabled="${args.disabled}"
  clear-aria-label="${args['clear-aria-label']}"
></mdc-inputchip>`;

const meta: Meta = {
  title: 'Work In Progress/chip/input',
  tags: ['autodocs'],
  component: 'mdc-inputchip',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    'icon-name': {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'clear-aria-label': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false,
  },
};

export const WithIcon: StoryObj = {
  args: {
    label: 'Input Chip',
    'icon-name': 'placeholder-bold',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false,
  },
};

export const Error: StoryObj = {
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: true,
    disabled: false,
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: true,
  },
};

export const StatesAndVariants: StoryObj = {
  render: () => html`
  <div style="display: flex; gap: 0.5rem;">
    <mdc-inputchip 
      label="Input" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear"
      @click="${action('click')}"
    ></mdc-inputchip>
    <mdc-inputchip 
      label="Error" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear" 
      error
      @click="${action('click')}"
    ></mdc-inputchip>
    <mdc-inputchip 
      label="Disabled" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear" 
      disabled
      @click="${action('click')}"
    ></mdc-inputchip>
  </div>`,
};
