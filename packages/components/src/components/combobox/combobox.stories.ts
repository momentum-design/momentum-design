import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import '.';
import '../button';
import '../divider';
import '../optgroup';
import '../option';
import '../selectlistbox';
import '../tooltip';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls, textControls } from '../../../config/storybook/utils';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { POPOVER_PLACEMENT, STRATEGY } from '../popover/popover.constants';

import type Combobox from './combobox.component';

const wrapper = (contents: TemplateResult) =>
  html`<div style="width: 25rem; height: 100%; display: flex; align-items: center;">${contents}</div>`;
const render = (args: Args) =>
  html` <mdc-combobox
    @change="${action('onchange')}"
    @click="${action('onclick')}"
    @input="${action('oninput')}"
    @keydown="${action('onkeydown')}"
    @focus="${action('onfocus')}"
    backdrop-append-to="${args['backdrop-append-to']}"
    boundary="${args.boundary}"
    data-aria-label="${args['data-aria-label']}"
    ?disabled="${args.disabled}"
    help-text="${args['help-text']}"
    help-text-type="${args['help-text-type']}"
    info-icon-aria-label="${args['info-icon-aria-label']}"
    label="${args.label}"
    name="${args.name}"
    no-result-text="${args['no-result-text']}"
    placeholder="${args.placeholder}"
    placement="${args.placement}"
    popover-z-index="${args['popover-z-index']}"
    ?required="${args.required}"
    ?readonly="${args.readonly}"
    strategy="${args.strategy}"
    value="${args.value}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    toggletip-text="${args['toggletip-text']}"
    toggletip-placement="${args['toggletip-placement']}"
    validation-message="${args['validation-message']}"
    invalid-custom-value-text="${args['invalid-custom-value-text']}"
  >
    ${args.children}
  </mdc-combobox>`;

const meta: Meta = {
  title: 'Components/combobox',
  tags: ['autodocs'],
  component: 'mdc-combobox',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    'backdrop-append-to': {
      control: 'text',
    },
    boundary: {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
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
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    'no-result-text': {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: [POPOVER_PLACEMENT.BOTTOM_START, POPOVER_PLACEMENT.TOP_START],
    },
    'popover-z-index': {
      control: 'number',
    },
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    strategy: {
      control: 'select',
      options: Object.values(STRATEGY),
    },
    value: {
      control: 'text',
    },
    'toggletip-text': {
      control: 'text',
    },
    'toggletip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'validation-message': {
      control: 'text',
    },
    'invalid-custom-value-text': {
      control: 'text',
    },
    ...hideControls(['id', 'value', 'validity', 'willValidate', 'default', 'itemsStore', 'handleUpdateError']),
    ...textControls([
      '--mdc-combobox-border-color',
      '--mdc-combobox-icon-color',
      '--mdc-combobox-width',
      '--mdc-combobox-listbox-width',
      '--mdc-combobox-listbox-height',
      '--mdc-combobox-text-color-disabled',
      '--mdc-combobox-hover-background-color',
      '--mdc-combobox-error-border-color',
      '--mdc-combobox-warning-border-color',
      '--mdc-combobox-success-border-color',
      '--mdc-combobox-primary-border-color',
      '--mdc-combobox-focused-background-color',
      '--mdc-combobox-focused-border-color',
    ]),
    ...classArgType,
    ...styleArgType,
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
    readonly: false,
    'no-result-text': '',
    placeholder: 'Start typing',
    'data-aria-label': 'Select a country',
    'info-icon-aria-label': 'Required icon label',
    placement: POPOVER_PLACEMENT.BOTTOM_START,
    'invalid-custom-value-text': 'Custom values are not allowed',
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
  render: args => wrapper(render(args)),
};

export const AllVariants: StoryObj = {
  render: () => html`
      <mdc-combobox
        name="country"
        label="Top Countries"
        placeholder="Start typing"
        help-text="Select a country"
        help-text-type="${VALIDATION.SUCCESS}"
        data-aria-label="Select a country"
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
        data-aria-label="Select phone number"
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
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text-type="${VALIDATION.PRIORITY}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox help-text="This is a disabled text." label="Label" data-aria-label="This is a disabled text." placeholder="Disabled text" disabled>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox help-text="This is a readonly text." label="Label" data-aria-label="This is a readonly text." placeholder="Readonly text" readonly>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    </div>
  `,
};

export const ComboboxWithOptionGroups: StoryObj = {
  args: {
    label: 'Fruits and Vegetables',
    placeholder: 'Type a fruit or vegetable',
    'no-result-text': 'No results found',
    'data-aria-label': 'Fruits and Vegetables',
    children: html` <mdc-selectlistbox>
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
        <mdc-option value="cabbage" label="Cabbages"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Fish">
        <mdc-option value="tuna" label="Tuna"></mdc-option>
        <mdc-option value="salmon" label="Salmon"></mdc-option>
      </mdc-optgroup>
    </mdc-selectlistbox>`,
  },
};

export const ComboboxWithSelectedValue: StoryObj = {
  args: {
    name: 'avengers-name',
    placeholder: 'Select the avenger',
    label: 'Who is your favorite Avenger?',
    value: 'hulk',
    required: true,
    'data-aria-label': 'Who is your favorite Avenger?',
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

export const ComboboxWithLongOptionText: StoryObj = {
  render: () => html`
    <mdc-combobox
      placeholder="Type a color"
      label="Select one color"
      data-aria-label="Select one color"
      style="width: 300px;"
    >
      <mdc-selectlistbox>
        <mdc-option label="Red"></mdc-option>
        <mdc-option label="Yellow" id="trigger-option"></mdc-option>
        <mdc-option id="option-3" label="White and Black are the biggest colors on the spectrum"></mdc-option>
        <mdc-option label="Green"></mdc-option>
      </mdc-selectlistbox>
    </mdc-combobox>
    <mdc-tooltip triggerid="option-3" show-arrow> White and Black are the biggest colors on the spectrum </mdc-tooltip>
  `,
};

export const ComboboxWithForm: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedAvengers = formData.get('avengers-name');
      const selectedStones = formData.get('stone-count');
      action('Form Submitted')({
        value: {
          selectedAvengers,
          selectedStones,
        },
      });
    };

    return html`
      <form @submit=${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-combobox
            id="avenger-form"
            name="avengers-name"
            placeholder="Type the avenger name"
            label="Who is your favorite Avenger?"
            required
            @change=${action('avengers combobox onchange')}
            @input=${action('avengers combobox oninput')}
            data-aria-label="Select the avenger"
            validation-message="You must select an Avenger"
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
          <mdc-combobox
            name="stone-count"
            placeholder="Type the count"
            label="How many Infinity Stones exist?"
            required
            @change=${action('stones combobox onchange')}
            @input=${action('stones combobox oninput')}
            data-aria-label="How many Infinity Stones exist?"
            invalid-custom-value-text="Custom values are not allowed."
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
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

export const ComboboxWithHelpTextValidation: StoryObj = {
  render: (args: Args) => {
    const validateCombobox = (formData: HTMLFormElement): boolean => {
      const combobox = formData.querySelector('mdc-combobox') as Combobox;
      if (combobox.value === '') {
        combobox.setAttribute('help-text', 'This field is required');
        combobox.setAttribute('help-text-type', VALIDATION.ERROR);
        return false;
      }
      if (combobox.value !== 'super-strength') {
        combobox.setAttribute('help-text', 'Please select the Super Strength option');
        combobox.setAttribute('help-text-type', VALIDATION.WARNING);
        return false;
      }
      combobox.setAttribute('help-text', 'You now have Super Strength!');
      combobox.setAttribute('help-text-type', VALIDATION.SUCCESS);
      return true;
    };
    const handleReset = (event: Event) => {
      const combobox = (event?.target as HTMLFormElement).querySelector('mdc-combobox') as Combobox;
      combobox.setAttribute('help-text', '');
      combobox.setAttribute('help-text-type', VALIDATION.DEFAULT);
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = event.target as HTMLFormElement;
      if (!validateCombobox(formData)) return;
      action('Form Submitted')({
        value: {
          selectedOption: 'super-power',
        },
      });
    };
    return html`
      <form @submit=${handleSubmit} @reset=${handleReset} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power (with custom validation)</legend>
          <mdc-combobox
            name="${args.name}"
            label="${args.label}"
            placeholder="${args.placeholder}"
            data-aria-label="${args['data-aria-label']}"
            ?required=${args.required}
            help-text="${args['help-text']}"
            help-text-type="${args['help-text-type']}"
          >
            <mdc-selectlistbox>
              <mdc-option value="flight" label="Flight"></mdc-option>
              <mdc-option value="mind-control" label="Mind Control"></mdc-option>
              <mdc-option value="super-strength" label="Super strength"></mdc-option>
              <mdc-option value="tactics" label="Tactics"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  args: {
    name: 'super-power',
    label: 'Super Power',
    placeholder: 'Type super power',
    required: true,
    'help-text': '',
    'help-text-type': VALIDATION.DEFAULT,
    'data-aria-label': 'Select a super power',
  },
};
