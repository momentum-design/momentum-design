import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import '../divider';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import '../optgroup';
import '../option';

const render = (args: Args) => html`
  <div style="height: 15rem;">
    <mdc-select
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      label="${args.label}"
      required-label="${args['required-label']}"
      help-text-type="${args['help-text-type']}"
      help-text="${args['help-text']}"
      name="${args.name}"
      placeholder="${args.placeholder}" 
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
    >
      <mdc-option>London, UK</mdc-option>
      <mdc-option>Los Angeles, CA</mdc-option>
      <mdc-option>Phoenix, AZ</mdc-option>
      <mdc-option>New York, NY</mdc-option>
      <mdc-option>Seattle, WA</mdc-option>
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
    name: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    'required-label': {
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
    ...hideControls(['validity', 'willValidate', 'default', 'label-info']),
    ...disableControls(['validation-message']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Headquarters location',
    'required-label': 'required',
    placeholder: 'Select your headquarters location',
    disabled: false,
    readonly: false,
    'help-text': 'Select Help Text',
    'help-text-type': '',
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

export const SelectWithStates: StoryObj = {
  render: () => html`
  <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
    <mdc-select
      help-text-type="${VALIDATION.SUCCESS}"
      help-text="The correct number of Infinity Stones has been selected."
      label="How many Infinity Stones exist?"
      required-label="required"
    >
      <mdc-option value="six" selected>Six</mdc-option>
    </mdc-select>
    <mdc-select
      help-text="Selecting this number may cause a security risk because it is not properly setup."
      help-text-type="${VALIDATION.WARNING}"
      label="Select phone number"
      required-label="required"
    >
      <mdc-option selected value="456-198-0253">456-198-0253</mdc-option>
    </mdc-select>
    <mdc-select
      help-text-type="${VALIDATION.ERROR}"
      help-text="You must select the total number of Infinity Stones."
      label="How many Infinity Stones exist?"
      placeholder="Select the total number of Infinity Stones"
      required-label="required"
    ></mdc-select>
    <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
    <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
  </div>
  `,
};
