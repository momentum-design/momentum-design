import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { disableControls, textControls } from '../../../config/storybook/utils';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

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
    toggletip-placement="${args['toggletip-placement']}"
    toggletip-text="${args['toggletip-text']}"
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
    ?autofocus="${args.autofocus}"
    autocomplete="${ifDefined(args.autocomplete)}"
    dirname="${ifDefined(args.dirname)}"
    pattern="${ifDefined(args.pattern)}"
    list="${ifDefined(args.list)}"
    size="${ifDefined(args.size)}"
    clear-aria-label="${ifDefined(args['clear-aria-label'])}"
  ></mdc-input>`;
};

const meta: Meta = {
  title: 'Components/input/input',
  tags: ['autodocs'],
  component: 'mdc-input',
  render,
  parameters: {
    badges: ['stable'],
  },
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
    autofocus: {
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
    'validation-message': {
      control: 'text',
    },
    'info-icon-aria-label': {
      control: 'text',
    },
    ...textControls([
      '--mdc-input-disabled-border-color',
      '--mdc-input-disabled-text-color',
      '--mdc-input-disabled-background-color',
      '--mdc-input-border-color',
      '--mdc-input-text-color',
      '--mdc-input-background-color',
      '--mdc-input-selection-background-color',
      '--mdc-input-selection-text-color',
      '--mdc-input-support-text-color',
      '--mdc-input-hover-background-color',
      '--mdc-input-focused-background-color',
      '--mdc-input-focused-border-color',
      '--mdc-input-error-border-color',
      '--mdc-input-warning-border-color',
      '--mdc-input-success-border-color',
      '--mdc-input-primary-border-color',
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
    autofocus: false,
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

export const FormFieldInput: StoryObj = {
  render: args => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('user-name');
      action('Form Submitted')({ value: selectedValue });
    };

    const handleInput = (event: Event) => {
      const input = event.target as HTMLElement;
      const {value} = input as HTMLInputElement;

      if (!value) {
        input.setAttribute('help-text-type', 'error');
        input.setAttribute('help-text', 'Name is required');
      } else if (value.length < (args.minlength || 5)) {
        input.setAttribute('help-text-type', 'warning');
        input.setAttribute('help-text', 'Name is too short');
      } else {
        input.setAttribute('help-text-type', 'success');
        input.setAttribute('help-text', 'Looks good!');
      }
    };

    const handleReset = () => {
      const input = document.querySelector('mdc-input');
      if (input) {
        input.setAttribute('help-text-type', args['help-text-type'] || 'default');
        input.setAttribute('help-text', args['help-text'] || 'Please provide a valid name');
      }
    };

    return html`
      <form @submit=${handleSubmit} @reset=${handleReset}>
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
            @input=${handleInput}
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
  render: args => {
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
        input.setAttribute('help-text-type', 'error');
        input.setAttribute('help-text', 'Name is required');
      } else if (input.validity.tooShort) {
        input.setAttribute('validation-message', 'Please enter a name with at least 5 characters');
        input.setAttribute('help-text-type', 'warning');
        input.setAttribute('help-text', 'Name is too short');
      } else {
        input.setAttribute('validation-message', 'Looks good!');
        input.setAttribute('help-text-type', 'success');
        input.setAttribute('help-text', 'Looks good!');
      }
    };

    const handleReset = () => {
      const input = document.querySelector('mdc-input');
      if (input) {
        input.setAttribute('validation-message', args['validation-message'] || 'Please enter a valid name');
        input.setAttribute('help-text-type', args['help-text-type'] || 'default');
        input.setAttribute('help-text', args['help-text'] || 'Please provide a valid name');
      }
    };

    return html`
      <form @submit=${handleSubmit} @reset=${handleReset}>
        <fieldset>
          <legend>Form Example With Custom Validation and Dynamic Help Text</legend>
          <mdc-input
            placeholder=${args.placeholder}
            label=${args.label}
            name=${args.name}
            ?required=${args.required}
            minlength=${ifDefined(args.minlength)}
            maxlength=${ifDefined(args.maxlength)}
            validation-message=${args['validation-message']}
            help-text=${args['help-text']}
            help-text-type=${args['help-text-type']}
            @input=${handleInput}
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
    'validation-message': 'Please enter a valid name',
  },
};