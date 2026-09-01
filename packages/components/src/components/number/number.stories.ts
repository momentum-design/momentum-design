import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

const render = (args: Args) => html` <mdc-number
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
  data-aria-label="${ifDefined(args['data-aria-label'])}"
  min="${ifDefined(args.min)}"
  max="${ifDefined(args.max)}"
  step="${ifDefined(args.step)}"
  ?show-steppers="${args['show-steppers']}"
  increment-aria-label="${ifDefined(args['increment-aria-label'])}"
  decrement-aria-label="${ifDefined(args['decrement-aria-label'])}"
></mdc-number>`;

const meta: Meta = {
  title: 'Components/number',
  tags: ['autodocs'],
  component: 'mdc-number',
  render,

  args: {
    name: 'number',
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
      control: 'number',
      description: 'The amount that the value changes for each increment/decrement.',
    },
    'show-steppers': {
      control: 'boolean',
      description: 'When set to true, renders increment and decrement stepper buttons alongside the input field.',
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
    ...hideControls(['autocapitalize', 'clear-aria-label', 'trailing-button', 'prefix-text', 'leading-icon']),
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
  },
};

export const WithSteppers: StoryObj = {
  args: {
    class: 'custom-classname',
    label: 'Quantity',
    name: 'quantity',
    value: '1',
    min: 0,
    max: 10,
    step: 1,
    'show-steppers': true,
    'increment-aria-label': 'Increment',
    'decrement-aria-label': 'Decrement',
    'help-text': 'Enter a value between 0 and 10',
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
          html`<mdc-number
            help-text-type="${validation}"
            label="Label"
            help-text="Helper text"
            placeholder="Placeholder"
            value="${validation}_value"
          ></mdc-number>`,
      )}
      <mdc-number
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Number is required"
      ></mdc-number>
      <mdc-number
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        readonly
        placeholder="Placeholder"
        value="42"
      ></mdc-number>
      <mdc-number
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        disabled
        placeholder="Placeholder"
        value="42"
      ></mdc-number>
      <mdc-number
        label="Label"
        help-text="Enter a value between 0 and 10"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="10"
        step="1"
        show-steppers
        value="5"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-number>
      <mdc-number
        label="Label"
        help-text="Enter a value between 0 and 10"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="10"
        step="1"
        show-steppers
        disabled
        value="5"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-number>
      <mdc-number
        label="Label"
        help-text="Values step by 5"
        help-text-type="default"
        placeholder="Placeholder"
        min="0"
        max="100"
        step="5"
        show-steppers
        value="10"
        increment-aria-label="Increment"
        decrement-aria-label="Decrement"
      ></mdc-number>
    </div>`,
};

export const FormFieldNumber: StoryObj = {
  render: (args: any) => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const selectedValue = formData.get('number');
      action('Form Submitted')({ value: selectedValue });
    };

    return html`
      <form @submit=${handleSubmit}>
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
    'show-steppers': true,
    required: true,
    'help-text': 'Enter a value between 0 and 10',
    'help-text-type': 'default',
    'increment-aria-label': 'Increment',
    'decrement-aria-label': 'Decrement',
  },
};
