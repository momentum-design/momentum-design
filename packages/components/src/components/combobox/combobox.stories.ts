import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../selectlistbox';
import '../option';
import '../button';
import { html } from 'lit';

import { textControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) =>
  html` <div style="width: 25rem;">
    <mdc-combobox
      label="${args.label}"
      help-text="${args['help-text']}"
      value="${args.value}"
      height="${args.height}"
      placeholder="${args.placeholder}"
      no-result-text="${args['no-result-text']}"
      ?disabled="${args.disabled}"
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
    <!-- TODO: remove this below code -->
    <br /><br /><br /><br /><br /><br />
    <mdc-button>Button</mdc-button>
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
    'help-text': 'Select a country',
    disabled: false,
    height: '5rem',
    'no-result-text': 'No results',
    placeholder: 'Start typing',
  },
};
