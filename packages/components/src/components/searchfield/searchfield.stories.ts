import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../inputchip';

const render = (args: Args) => html`
  <mdc-searchfield 
  @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  value="${args.value}"
  ?disabled="${args.disabled}"
  data-aria-label="${args['aria-label']}"
  clear-aria-label="${args['clear-aria-label']}"
  ></mdc-searchfield>`;

const meta: Meta = {
  title: 'Work In Progress/searchfield',
  tags: ['autodocs'],
  component: 'mdc-searchfield',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    ...hideControls(['prefix-text', 'help-text', 'help-text-type', 'required-label', 'validation-message']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': '',
  },
};

export const WithoutLabel: StoryObj = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search',
  },
};

export const DisabledSearch: StoryObj = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search',
  },
};

export const WithInputChip: StoryObj = {
  render: () => html`
  <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
    <mdc-inputchip label="Query: value" slot="filters"></mdc-inputchip>
    <mdc-inputchip label="In: Marketing" slot="filters"></mdc-inputchip>
  </mdc-searchfield>
  `,
};
