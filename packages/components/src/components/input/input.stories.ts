import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { disableControls, textControls } from '../../../config/storybook/utils';
import { POPOVER_PLACEMENT, STRATEGY } from '../popover/popover.constants';

import type Input from './input.component';
import { AUTO_CAPITALIZE } from './input.constants';

const render = (args: Args) => {
  const value = args.maxlength && args.value ? args.value.substring(0, args.maxlength) : args.value;
  return html`<mdc-input
    @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    @clear="${action('onclear')}"
    label="${args.label}"
    help-text-type="${args['help-text-type']}"
    help-text="${args['help-text']}"
    validation-message="${args['validation-message']}"
    placeholder="${args.placeholder}"
    toggletip-text="${args['toggletip-text']}"
    toggletip-placement="${args['toggletip-placement']}"
    toggletip-strategy="${args['toggletip-strategy']}"
    info-icon-aria-label="${args['info-icon-aria-label']}"
    name="${args.name}"
    value="${value}"
    id="${args.id}"
    class="${args.class}"
    style="${args.style}"
    ?required="${args.required}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    ?trailing-button="${args['trailing-button']}"
    prefix-text="${args['prefix-text']}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    leading-icon="${args['leading-icon']}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
    autocapitalize="${args.autocapitalize}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    autocomplete="${ifDefined(args.autocomplete)}"
    dirname="${ifDefined(args.dirname)}"
    pattern="${ifDefined(args.pattern)}"
    list="${ifDefined(args.list)}"
    size="${ifDefined(args.size)}"
    clear-aria-label="${ifDefined(args['clear-aria-label'])}"
  ></mdc-input>`;
};

const meta: Meta = {
  title: 'Components/input',
  tags: ['autodocs'],
  component: 'mdc-input',
  render,

  argTypes: {
    ...classArgType,
    ...styleArgType,
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    name: {
      control: 'text',
    },
    id: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    'help-text': {
      control: 'text',
    },
    readonly: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'prefix-text': {
      control: 'text',
    },
    'leading-icon': {
      control: 'text',
    },
    'trailing-button': {
      control: 'boolean',
    },
    minlength: {
      control: 'number',
    },
    maxlength: {
      control: 'number',
    },
    autocapitalize: {
      control: 'select',
      options: Object.values(AUTO_CAPITALIZE),
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    autocomplete: {
      control: 'text',
    },
    dirname: {
      control: 'text',
    },
    pattern: {
      control: 'text',
    },
    list: {
      control: 'text',
    },
    size: {
      control: 'number',
    },
    'clear-aria-label': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    'toggletip-text': {
      control: 'text',
    },
    'toggletip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'toggletip-strategy': {
      control: 'select',
      options: Object.values(STRATEGY),
    },
    'validation-message': {
      control: 'text',
    },
    'info-icon-aria-label': {
      control: 'text',
    },
    ...textControls([
      '--mdc-label-font-size',
      '--mdc-label-font-weight',
      '--mdc-label-line-height',
      '--mdc-label-color',
      '--mdc-help-text-font-size',
      '--mdc-help-text-font-weight',
      '--mdc-help-text-line-height',
      '--mdc-help-text-color',
      '--mdc-input-text-color',
      '--mdc-input-border-color',
      '--mdc-input-background-color',
      '--mdc-input-support-text-color',
      '--mdc-input-selection-text-color',
      '--mdc-input-selection-background-color',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    name: 'input',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    readonly: false,
    disabled: false,
    'prefix-text': '',
    'leading-icon': '',
    'trailing-button': false,
    autocapitalize: 'off',
    'clear-aria-label': 'clear input',
    'data-aria-label': '',
  },
};

export const InputInSmallContainer: StoryObj = {
  render: () => html`
    <div style="width: 200px;">
      <mdc-input
        label="This is a large label text which is truncated into an ellipsis"
        required
        placeholder="placeholder"
      >
      </mdc-input>
    </div>
  `,
};

export const AllVariants: StoryObj = {
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type']),
  },
  render: () =>
    html` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(VALIDATION).map(
        validation =>
          html`<mdc-input
            help-text-type="${validation}"
            label="Label"
            help-text="Helper text"
            placeholder="Placeholder"
            value="${validation}_value"
          ></mdc-input>`,
      )}
      <mdc-input
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Input is required"
      ></mdc-input>
      <mdc-input
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        readonly
        placeholder="Placeholder"
        leading-icon="placeholder-bold"
        value="This is readonly"
      ></mdc-input>
      <mdc-input
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        disabled
        placeholder="Placeholder"
        value="Text disabled"
      ></mdc-input>
      <mdc-input
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        placeholder="Placeholder"
        prefix-text="https://"
      ></mdc-input>
      <mdc-input
        label="Label"
        help-text="Helper text"
        help-text-type="default"
        placeholder="Placeholder"
        leading-icon="placeholder-bold"
      ></mdc-input>
    </div>`,
};

export const FormFieldInputWithHelpTextValidation: StoryObj = {
  render: args => {
    const validateInput = (input: Input, args: any): boolean => {
      const { value } = input;
      if (!value) {
        input.setAttribute('help-text-type', 'error');
        input.setAttribute('help-text', 'Name is required');
        return false;
      }
      if (args.minlength && value.length < args.minlength) {
        input.setAttribute('help-text-type', 'error');
        input.setAttribute('help-text', `Name must be at least ${args.minlength} characters`);
        return false;
      }
      if (args.maxlength && value.length > args.maxlength) {
        input.setAttribute('help-text-type', 'error');
        input.setAttribute('help-text', `Name must be at most ${args.maxlength} characters`);
        return false;
      }
      input.setAttribute('help-text-type', 'success');
      input.setAttribute('help-text', 'Looks good!');
      return true;
    };

    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const input = form.querySelector('mdc-input') as Input;

      if (input && !validateInput(input, args)) {
        return; // prevent submit if invalid
      }

      const formData = new FormData(form);
      const selectedValue = formData.get('user-name');
      action('Form Submitted')({ value: selectedValue });
    };

    const handleReset = () => {
      const input = document.querySelector('mdc-input');
      if (input) {
        input.setAttribute('help-text-type', args['help-text-type'] || 'default');
        input.setAttribute('help-text', args['help-text'] || 'Please provide a valid name');
      }
    };

    return html`
      <form @submit=${handleSubmit} @reset=${handleReset} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-input
            placeholder=${args.placeholder}
            label=${args.label}
            name=${args.name}
            ?required=${args.required}
            minlength=${ifDefined(args.minlength)}
            maxlength=${ifDefined(args.maxlength)}
            help-text=${args['help-text']}
            help-text-type=${args['help-text-type']}
          ></mdc-input>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  args: {
    label: 'First Name',
    name: 'user-name',
    placeholder: 'Enter your name',
    required: true,
    minlength: 5,
    maxlength: 10,
    'help-text': 'Please provide a valid name',
    'help-text-type': 'default',
  },
};

export const FormFieldInputWithCustomValidationMessage: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('user-name');
      action('Form Submitted')({ value: selectedValue });
    };
    const handleInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.validity.valueMissing) {
        input.setAttribute('validation-message', 'Please enter a name');
      }
      if (input.validity.tooShort) {
        input.setAttribute('validation-message', 'Please enter a name with at least 5 characters');
      }
    };
    return html`
      <form @submit=${handleSubmit}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-input
            placeholder="Enter your name"
            label="First Name"
            name="user-name"
            required
            minlength="5"
            maxlength="10"
            show-hide-button-aria-label="Show or hide password"
            validation-message="Please enter a valid name"
            @input=${handleInput}
          ></mdc-input>
          <div style="display: flex; gap: 0.25rem;; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
};
