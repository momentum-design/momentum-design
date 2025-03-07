import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { TemplateResult } from 'lit';
import '.';
import { hideControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div style="width: 20rem;" role="listbox">${htmlString}</div>`;

const render = (args: Args) => wrapWithDiv(html`
  <mdc-option
    ?disabled="${args.disabled}"
    ?selected="${args.selected}"
    label="${args.label}"
    value="${args.value}"
    prefix-icon="${args['prefix-icon']}"
    aria-label="${args['aria-label']}"
    @click="${action('onclick')}"
  ></mdc-option>
`);

const meta: Meta = {
  title: 'Work In Progress/option',
  tags: ['autodocs'],
  component: 'mdc-option',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    'aria-label': {
      control: 'text',
    },
    'prefix-icon': {
      control: 'text',
    },
    ...hideControls([
      'name',
      'validation-message',
      'validity',
      'willValidate',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Option Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label',
  },
};

export const OptionWithIcon: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-option value="label" prefix-icon="placeholder-bold">Option Label</mdc-option>
  `),
};

export const SelectedOption: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-option value="label" prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  `),
};

export const DisabledOption: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-option value="label" disabled prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  `),
};
