import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { INPUT_MODE } from '../input/input.constants';

import { CLAMP } from './numberinput.constants';

const render = (args: Args) =>
  html` <mdc-numberinput
    @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    label="${args.label}"
    help-text="${args['help-text']}"
    help-text-type="${args['help-text-type']}"
    name="${args.name}"
    value="${args.value}"
    id="${args.id}"
    class="${args.class}"
    style="${args.style}"
    ?required="${args.required}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    placeholder="${args.placeholder}"
    validation-message="${args['validation-message']}"
    toggletip-text="${ifDefined(args['toggletip-text'])}"
    toggletip-placement="${ifDefined(args['toggletip-placement'])}"
    toggletip-strategy="${ifDefined(args['toggletip-strategy'])}"
    info-icon-aria-label="${ifDefined(args['info-icon-aria-label'])}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    inputmode="${ifDefined(args.inputmode)}"
    min="${ifDefined(args.min)}"
    max="${ifDefined(args.max)}"
    step="${ifDefined(args.step)}"
    clamp="${ifDefined(args.clamp)}"
    ?hide-spinner-buttons="${args['hide-spinner-buttons']}"
    increment-aria-label="${ifDefined(args['increment-aria-label'])}"
    decrement-aria-label="${ifDefined(args['decrement-aria-label'])}"
  ></mdc-numberinput>`;

const meta: Meta = {
  title: 'Components/numberinput',
  tags: ['autodocs'],
  component: 'mdc-numberinput',
  render,

  args: {
    name: 'number',
    'increment-aria-label': 'Increment',
    'decrement-aria-label': 'Decrement',
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'The unique id of the number field. It is used to link the number field with the label.',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text that is displayed when the number field is empty.',
    },
    name: {
      control: 'text',
      description: 'The name of the number field. It is used to identify the number field in a form.',
    },
    value: {
      control: 'text',
    },
    inputmode: {
      control: 'select',
      options: Object.values(INPUT_MODE),
    },
    label: {
      control: 'text',
      description: 'The label of the number field. It is linked to the number field using the for attribute.',
    },
    'help-text': {
      control: 'text',
      description: 'Helper text for the number field',
    },
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    'validation-message': {
      control: 'text',
      description:
        'Custom validation message that will override the default message and displayed when the number field is invalid.',
    },
    'toggletip-text': {
      control: 'text',
      description:
        'The toggletip text that is displayed when the info icon next to the label is clicked or pressed. ' +
        'When set, an info icon button and toggletip are rendered next to the label.',
    },
    'toggletip-placement': {
      control: 'text',
      description: 'The placement of the toggletip that is displayed when the info icon is clicked or pressed.',
    },
    'toggletip-strategy': {
      control: 'text',
      description: 'The positioning strategy for the toggletip.',
    },
    'info-icon-aria-label': {
      control: 'text',
      description: 'Aria label for the info icon that is displayed next to the label when toggletip-text is set.',
    },
    readonly: {
      control: 'boolean',
      description: 'readonly attribute of the number field. If true, the number field is read-only.',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
      description:
        'The required attribute to indicate that the number field is required. ' +
        'It is used to append a required indicator (*) to the label.',
    },
    min: {
      control: 'number',
      description: 'The minimum value that the number field will accept.',
    },
    max: {
      control: 'number',
      description: 'The maximum value that the number field will accept.',
    },
    step: {
      control: 'text',
      description:
        'The amount that the value changes for each increment/decrement. Set to "any" to allow any ' +
        'decimal value with no step-mismatch validation.',
    },
    clamp: {
      control: 'select',
      options: Object.values(CLAMP),
      description:
        'Controls whether a value typed into the field is clamped to the min/max range. ' +
        'The spinner buttons and arrow keys always clamp; "auto" also clamps manual keyboard ' +
        'entry on change, while "none" leaves it as entered.',
    },
    'hide-spinner-buttons': {
      control: 'boolean',
      description:
        'Increment and decrement spinner buttons are shown alongside the input field by default. ' +
        'Set this to true to hide them.',
    },
    'increment-aria-label': {
      control: 'text',
    },
    'decrement-aria-label': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls([
      'autocapitalize',
      'clear-aria-label',
      'trailing-button',
      'prefix-text',
      'leading-icon',
      'maxlength',
      'minlength',
      'max-character-limit',
      'character-limit-announcement',
      'pattern',
      'dirname',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    label: 'Number',
    name: 'number',
    placeholder: 'Placeholder',
    readonly: false,
    disabled: false,
    required: true,
    'help-text': 'Helper text',
    'help-text-type': 'default',
    'validation-message': '',
    'toggletip-text': 'Enter a whole number.',
    'info-icon-aria-label': 'More information',
  },
};

export const WithoutSpinnerButtons: StoryObj = {
  args: {
    class: 'custom-classname',
    label: 'Quantity',
    name: 'quantity',
    value: '1',
    min: 0,
    max: 10,
    step: 1,
    'hide-spinner-buttons': true,
    'help-text': 'Enter a value between 0 and 10',
    'help-text-type': 'default',
  },
};

export const AnyStep: StoryObj = {
  args: {
    class: 'custom-classname',
    label: 'Price',
    name: 'price',
    value: '9.99',
    step: 'any',
    'increment-aria-label': 'Increment',
    'decrement-aria-label': 'Decrement',
    'help-text': 'Any decimal value is accepted',
    'help-text-type': 'default',
  },
};

export const AllVariants: StoryObj = {
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type']),
  },
  render: () =>
    html` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(VALIDATION).map(
        validation =>
          html`<mdc-numberinput
            help-text-type="${validation}"
            label="Label"
            help-text="Helper text"
            placeholder="Placeholder"
            value="${validation}_value"
            increment-aria-label="Increment"
            decrement-aria-label="Decrement"
          ></mdc-numberinput>`,
      )}
      <mdc-numberinput
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Number is required"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        readonly
        placeholder="Placeholder"
        value="42"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        disabled
        placeholder="Placeholder"
        value="42"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Enter a value between 0 and 10"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="10"
        step="1"
        value="5"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Enter a value between 0 and 10"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="10"
        step="1"
        disabled
        value="5"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Values step by 5"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="100"
        step="5"
        value="10"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-numberinput>
      <mdc-numberinput
        label="Label"
        help-text="Spinner buttons hidden"
        help-text-type="default"
        placeholder="Placeholder"
        value="5"
        hide-spinner-buttons
      ></mdc-numberinput>
    </div>`,
};

export const FormFieldNumber: StoryObj = {
  render: (args: any) => {
    const restoreHelpText = (form: HTMLFormElement) => {
      const numberInput = form.querySelector('mdc-numberinput');
      numberInput?.setAttribute('help-text-type', args['help-text-type'] || VALIDATION.DEFAULT);
      numberInput?.setAttribute('help-text', args['help-text']);
    };

    // Map the failing validity flag to a message that explains the specific reason (range vs step vs
    // required), instead of always showing the generic helper text.
    const getValidationMessage = (numberInput: HTMLInputElement) => {
      const { validity } = numberInput;
      if (validity.valueMissing) return 'Enter a number';
      if (validity.rangeUnderflow) return `Enter a value of ${args.min} or more`;
      if (validity.rangeOverflow) return `Enter a value of ${args.max} or less`;
      if (validity.stepMismatch) {
        return Number(args.step) === 1 ? 'Enter a whole number' : `Enter a value in steps of ${args.step}`;
      }
      if (validity.badInput) return 'Enter a valid number';
      return args['help-text'];
    };

    const handleInvalid = (event: Event) => {
      const numberInput = event.target as HTMLInputElement;
      numberInput.setAttribute('help-text-type', VALIDATION.ERROR);
      numberInput.setAttribute('help-text', getValidationMessage(numberInput));
    };

    const handleInput = (event: Event) => {
      const form = event.currentTarget as HTMLFormElement;
      const numberInput = form.querySelector('mdc-numberinput');
      if (numberInput?.validity.valid) {
        restoreHelpText(form);
      }
    };

    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const selectedValue = formData.get('number');
      action('Form Submitted')({ value: selectedValue });
    };

    const invalidListener = { handleEvent: handleInvalid, capture: true };

    return html`
      <form
        @submit=${handleSubmit}
        @invalid=${invalidListener}
        @input=${handleInput}
        @reset=${(event: Event) => restoreHelpText(event.currentTarget as HTMLFormElement)}
      >
        <fieldset>
          <legend>Form Example</legend>
          ${render(args)}
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  args: {
    class: 'custom-classname',
    label: 'Quantity',
    name: 'number',
    value: '1',
    min: 0,
    max: 10,
    step: 1,
    required: true,
    'help-text': 'Enter a value between 0 and 10',
    'help-text-type': 'default',
    'increment-aria-label': 'Increment',
    'decrement-aria-label': 'Decrement',
  },
};
