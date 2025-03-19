import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../option';
import '../optgroup';
import '../divider';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

const render = (args: Args) => html`
  <div style="height: 15rem; width: 20rem;">
    <mdc-select
      label="${args.label}"
      help-text-type="${args['help-text-type']}"
      help-text="${args['help-text']}"
      name="${args.name}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
    >
      <mdc-option>Option Label 1</mdc-option>
      <mdc-option>Option Label 2</mdc-option>
      <mdc-option>Option Label 3</mdc-option>
      <mdc-optgroup label="group">
        <mdc-option>Option Label 4</mdc-option>
        <mdc-option>Option Label 5</mdc-option>
      </mdc-optgroup>
      <mdc-option>Option Label 6</mdc-option>
      <mdc-optgroup>
        <mdc-option>Option Label 7</mdc-option>
        <mdc-option>Option Label 8</mdc-option>
        <mdc-option>Option Label 9</mdc-option>
      </mdc-optgroup>
      <mdc-option>Option Label 10</mdc-option>
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
    name: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
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
    label: 'Select Label',
    placeholder: 'Select an option',
    disabled: false,
    readonly: false,
    'help-text': 'Select Help Text',
    'help-text-type': 'error',
  },
};

export const SelectWithGroups: StoryObj = {
  render: () => html`
    <div style="height: 15rem;">
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
    </div>
  `,
};
