import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import '../divider';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import '../optgroup';
import '../option';

const helpTextTypes = Object.values(VALIDATION).filter((type: string) => type !== 'priority');

const wrapWithDiv = (htmlString: TemplateResult) => html`
  <div style="height: 20rem; width: 20rem;">${htmlString}</div>
`;

const render = (args: Args) => wrapWithDiv(html`
  <mdc-select
    @change="${action('onchange')}"
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @focus="${action('onfocus')}"
    label="${args.label}"
    required-label="${args['required-label']}"
    help-text-type="${args['help-text-type']}"
    help-text="${args['help-text']}"
    height="${args.height}"
    data-aria-label="${args['data-aria-label']}"
    name="${args.name}"
    placeholder="${args.placeholder}" 
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
  >
    <mdc-option>London, UK</mdc-option>
    <mdc-option>Los Angeles, CA</mdc-option>
    <mdc-option>New York, NY</mdc-option>
    <mdc-option>Phoenix, AZ</mdc-option>
    <mdc-option>Seattle, WA</mdc-option>
  </mdc-select>
`);

const meta: Meta = {
  title: 'Components/select',
  tags: ['autodocs'],
  component: 'mdc-select',
  render,
  parameters: {
    badges: ['stable'],
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
      description: `The type of help text. It can be ${helpTextTypes.map((type: string) => `'${type}'`).join(', ')}.`,
      options: helpTextTypes,
    },
    'data-aria-label': {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    ...hideControls(['id', 'value', 'validity', 'validation-message', 'willValidate', 'default', 'label-info']),
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
    'data-aria-label': 'Select label',
    height: 'auto',
  },
};

export const SelectWithGroups: StoryObj = {
  render: () => html`
    <div style="height: 35rem;">
      <mdc-select label="Select an option from the list of groups" data-aria-label="Select an option">
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
  ...hideAllControls(),
};

export const SelectWithLongOptionText: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-select placeholder="Select a color" label="Select one color">
      <mdc-option>Red</mdc-option>
      <mdc-option>Yellow</mdc-option>
      <mdc-option
        tooltip-text="White and Black are the biggest colors on the spectrum"
        tooltip-placement="bottom"
      >
        White and Black are the biggest colors on the spectrum
      </mdc-option>
      <mdc-option>Green</mdc-option>
    </mdc-select>
  `),
  ...hideAllControls(),
};

export const SelectWithIconOptions: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-select placeholder="Select an option" label="You are in a meeting">
      <mdc-option prefix-icon="alert-bold">Mute notifications</mdc-option>
      <mdc-option prefix-icon="apps-bold">Add apps</mdc-option>
      <mdc-option prefix-icon="stored-info-bold">View direct message policy</mdc-option>
      <mdc-option prefix-icon="calendar-day-bold">Meeting capabilities</mdc-option>
      <mdc-option prefix-icon="exit-room-bold">Leave</mdc-option>
    </mdc-select>
  `),
  ...hideAllControls(),
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
  ...hideAllControls(),
};

export const SelectWithFixedHeight = {
  args: {
    height: '18rem',
    placeholder: 'Select an option',
    label: 'Select option',
  },
  render: (args: Args) => wrapWithDiv(html`
    <mdc-select height="${args.height}" placeholder="${args.placeholder}" label="${args.label}">
      ${Array.from({ length: 1000 }, (_, i) => html`<mdc-option label="Option Label ${i + 1}"></mdc-option>`)}
    </mdc-select>
  `),
  argTypes: {
    ...disableControls([
      'readonly', 'name', 'data-aria-label', 'disabled', 'required-label', 'help-text-type', 'help-text',
    ]),
  },
};

export const SelectWithForm: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.get('stone-count');
      action('Form Submitted')({ value: selectedValues });
    };

    return html`
      <form @submit=${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem;">
          <div style="width: 20rem;">
            <mdc-select
              name="stone-count"
              placeholder="Select the count"
              label="How many Infinity Stones exist?"
              required-label="required"
            >
              <mdc-option value="two">Two</mdc-option>
              <mdc-option value="three">Three</mdc-option>
              <mdc-option value="four">Four</mdc-option>
              <mdc-option value="five">Five</mdc-option>
              <mdc-option value="six">Six</mdc-option>
            </mdc-select>
            <div style="display: flex; gap: 3rem; margin-top: 1rem;">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </div>
        </fieldset>
      </form>
    `;
  },
  ...hideAllControls(),
};
