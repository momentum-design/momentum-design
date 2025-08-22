import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../selectlistbox';
import '../option';
import '../select';
import '../button';
import { html } from 'lit';

import { textControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) =>
  html` <div style="width: 25rem;">
    <mdc-combobox
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      data-aria-label="${args['data-aria-label']}"
      height="${args.height}"
      help-text="${args['help-text']}"
      label="${args.label}"
      name="${args.name}"
      no-result-text="${args['no-result-text']}"
      placeholder="${args.placeholder}"
      value="${args.value}"
    >
      <mdc-selectlistbox>
        <mdc-option label="Argentina"></mdc-option>
        <mdc-option label="Australia"></mdc-option>
        <mdc-option label="Austria"></mdc-option>
        <mdc-option label="Bangladesh"></mdc-option>
        <mdc-option label="Belgium"></mdc-option>
        <mdc-option label="Brazil"></mdc-option>
        <mdc-option label="Canada"></mdc-option>
        <mdc-option label="China"></mdc-option>
        <mdc-option label="Colombia"></mdc-option>
        <mdc-option label="Denmark"></mdc-option>
      </mdc-selectlistbox>
    </mdc-combobox>
  </div>`;

const meta: Meta = {
  title: 'Work In Progress/combobox',
  tags: ['autodocs'],
  component: 'mdc-combobox',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    ...textControls(['label', 'help-text', 'placeholder', 'value', 'height', 'no-result-text']),
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    value: '',
    label: 'Top Countries',
    name: 'country',
    'help-text': 'Select a country',
    disabled: false,
    height: '5rem',
    'no-result-text': '',
    placeholder: 'Start typing',
    'data-aria-label': 'Select a country',
  },
};

export const CombiSelect: StoryObj = {
  render: () => html`
    <mdc-combobox
      name="country"
      label="Top Countries"
      placeholder="Start typing"
      help-text="Select a country"
      no-result-text="Tomato Potato"
    >
      <mdc-selectlistbox>
        <mdc-option value="london" label="London, UK"></mdc-option>
        <mdc-option value="losangeles" label="Los Angeles, CA"></mdc-option>
        <mdc-option value="newyork" label="New York, NY"></mdc-option>
        <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
        <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
      </mdc-selectlistbox>
    </mdc-combobox>
    <br /><br /><br />
    <mdc-input name="country" label="Top Countries" placeholder="Start typing" help-text="Select a country"></mdc-input>
    <br /><br /><br />
    <mdc-select name="country" label="Top Countries" placeholder="Start typing" help-text="Select a country">
      <mdc-selectlistbox>
        <mdc-option value="london" label="London, UK"></mdc-option>
        <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
        <mdc-option value="newyork" label="New York, NY"></mdc-option>
        <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
        <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
      </mdc-selectlistbox>
    </mdc-select>
  `,
};
