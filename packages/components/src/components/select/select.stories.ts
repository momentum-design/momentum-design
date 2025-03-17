import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../option';
import '../optgroup';
import '../divider';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

const render = (args: Args) => html`
  <div style="height: 15rem;">
    <mdc-select
      label="${args.label}"
      help-text-type="${args['help-text-type']}"
      help-text="${args['help-text']}"
      name="${args.name}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
    >
      <mdc-option>1</mdc-option>
      <mdc-option>2</mdc-option>
      <mdc-option>3</mdc-option>
      <mdc-option>4</mdc-option>
    </mdc-select>
  </div>
`;

const meta: Meta = {
  title: 'Work In Progress/select',
  tags: ['autodocs'],
  component: 'mdc-select',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    disabled: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    'help-text': {
      control: 'text',
    },
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    disabled: false,
    label: 'Select Label',
    placeholder: 'Select an option',
    'help-text': 'Select Help Text',
    'help-text-type': 'error',
  },
};

export const SelectWithGroups: StoryObj = {
  render: () => html`
    <mdc-select>
      <mdc-optgroup label="Fruit">
        <mdc-option value="apple">Apples</mdc-option>
        <mdc-option value="banana">Bananas</mdc-option>
        <mdc-option value="cherry">Cherries</mdc-option>
        <mdc-option value="damson">Damsons</mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Vegetables">
        <mdc-option value="artichoke">Artichokes</mdc-option>
        <mdc-option value="broccoli">Broccoli</mdc-option>
        <mdc-option value="cabbage">Cabbages</mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Fish">
        <mdc-option value="tuna">Tuna</mdc-option>
        <mdc-option value="salmon">Salmon</mdc-option>
      </mdc-optgroup>
    </mdc-select>
  `,
};
