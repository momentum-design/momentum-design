import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import '../button';
import '../divider';
import '../optgroup';
import '../option';
import '../selectlistbox';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls, textControls } from '../../../config/storybook/utils';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { POPOVER_PLACEMENT, STRATEGY } from '../popover/popover.constants';

const render = (args: Args) =>
  html` <div style="width: 25rem;">
    <mdc-combobox
      @change="${action('onchange')}"
      @click="${action('onclick')}"
      @input="${action('oninput')}"
      @keydown="${action('onkeydown')}"
      @focus="${action('onfocus')}"
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
      boundary="${args.boundary}"
      strategy="${args.strategy}"
      popover-z-index="${args['popover-z-index']}"
      backdrop-append-to="${args['backdrop-append-to']}"
    >
      ${args.children}
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
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    'data-aria-label': {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    'help-text': {
      control: 'text',
    },
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    'info-icon-aria-label': {
      control: 'text',
    },
    'no-result-text': {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: [POPOVER_PLACEMENT.BOTTOM_START, POPOVER_PLACEMENT.TOP_START],
    },
    boundary: {
      control: 'text',
    },
    strategy: {
      control: 'select',
      options: Object.values(STRATEGY),
    },
    'popover-z-index': {
      control: 'number',
    },
    'backdrop-append-to': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['id', 'validity', 'validation-message', 'willValidate', 'default']),
    ...textControls(['--mdc-combobox-border-color', '--mdc-combobox-icon-color']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    value: '',
    label: 'Top Countries',
    name: 'country',
    'help-text': 'Select a country',
    'help-text-type': VALIDATION.DEFAULT,
    disabled: false,
    'soft-disabled': false,
    height: '5rem',
    'no-result-text': '',
    placeholder: 'Start typing',
    'data-aria-label': 'Select a country',
    'info-icon-aria-label': 'Required icon label',
    placement: POPOVER_PLACEMENT.BOTTOM_START,
    children: html`
      <mdc-selectlistbox>
        <mdc-option value="arg" label="Argentina"></mdc-option>
        <mdc-option value="aus" label="Australia"></mdc-option>
        <mdc-option value="au" label="Austria"></mdc-option>
        <mdc-option value="ban" label="Bangladesh"></mdc-option>
        <mdc-option value="bel" label="Belgium"></mdc-option>
        <mdc-option value="bra" label="Brazil"></mdc-option>
        <mdc-option value="can" label="Canada"></mdc-option>
        <mdc-option value="chi" label="China"></mdc-option>
        <mdc-option value="col" label="Colombia"></mdc-option>
        <mdc-option value="den" label="Denmark"></mdc-option>
      </mdc-selectlistbox>
    `,
  },
};

export const AllVariants: StoryObj = {
  render: () => html`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;"></div>
      <mdc-combobox
        name="country"
        label="Top Countries"
        placeholder="Start typing"
        help-text="Select a country"
        help-text-type="${VALIDATION.SUCCESS}"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="usa" selected label="America"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${VALIDATION.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text-type="${VALIDATION.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-combobox>
      <mdc-combobox help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-combobox>
      <mdc-combobox help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-combobox>
    </div>
  `,
};

export const ComboboxWithOptionGroups: StoryObj = {
  render: () => html`
    <mdc-combobox
      label="Fruits and Vegetables"
      placeholder="Type a fruit or vegetable"
      no-result-text="No results found"
    >
      <mdc-selectlistbox>
        <mdc-optgroup label="Fruit">
          <mdc-option value="apple" label="Apples"></mdc-option>
          <mdc-option value="banana" label="Bananas"></mdc-option>
          <mdc-option value="cherry" label="Cherries"></mdc-option>
          <mdc-option value="tomato" label="Tomato"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Vegetables">
          <mdc-option value="artichoke" label="Artichokes"></mdc-option>
          <mdc-option value="broccoli" label="Broccoli"></mdc-option>
          <mdc-option value="tomato" label="Tomato"></mdc-option>
          <mdc-option value="cabbage" label="Cabbages"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Fish">
          <mdc-option value="tuna" label="Tuna"></mdc-option>
          <mdc-option value="salmon" label="Salmon"></mdc-option>
        </mdc-optgroup>
      </mdc-selectlistbox>
    </mdc-combobox>
  `,
};

export const ComboboxWithSelectedValue: StoryObj = {
  args: {
    name: 'avengers-name',
    placeholder: 'Select the avenger',
    label: 'Who is your favorite Avenger?',
    value: 'hulk',
    required: true,
    children: html`
      <mdc-selectlistbox>
        <mdc-option value="ironman" label="Iron Man"></mdc-option>
        <mdc-option value="captainamerica" label="Captain America"></mdc-option>
        <mdc-option value="thor" label="Thor"></mdc-option>
        <mdc-option value="hulk" selected label="Hulk"></mdc-option>
        <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
        <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
      </mdc-selectlistbox>
    `,
  },
};

export const ComboboxWithForm: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedStones = formData.get('stone-count');
      const selectedAvengers = formData.get('avengers-name');
      action('Form Submitted')({
        value: {
          selectedStones,
          selectedAvengers,
        },
      });
    };

    return html`
      <form @submit=${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-combobox
            id="avenger-form"
            name="avengers-name"
            placeholder="Select the avenger"
            label="Who is your favorite Avenger?"
            required
            @change=${action('avengers combobox onchange')}
            @input=${action('avengers combobox oninput')}
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  ...hideAllControls(),
};
