import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, textControls } from '../../../config/storybook/utils';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

const render = (args: Args) => {
  const value = args.maxlength && args.value ? args.value.substring(0, args.maxlength) : args.value;
  return html` <mdc-password
    @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    label="${args.label}"
    help-text="${args['help-text']}"
    help-text-type="${args['help-text-type']}"
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
    placeholder="${args.placeholder}"
    validation-message="${args['validation-message']}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    autocomplete="${ifDefined(args.autocomplete)}"
    dirname="${ifDefined(args.dirname)}"
    pattern="${ifDefined(args.pattern)}"
    list="${ifDefined(args.list)}"
    size="${ifDefined(args.size)}"
    show-hide-button-aria-label="${args['show-hide-button-aria-label']}"
  ></mdc-password>`;
};
const meta: Meta = {
  title: 'Components/password',
  tags: ['autodocs'],
  component: 'mdc-password',
  render,
  parameters: {
    badges: ['stable'],
  },
  args: {
    name: 'password',
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'The unique id of the password field. It is used to link the password field with the label.',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text that is displayed when the password field is empty.',
    },
    name: {
      control: 'text',
      description: 'The name of the password field. It is used to identify the password field in a form.',
    },
    'show-hide-button-aria-label': {
      control: 'text',
    },
    label: {
      control: 'text',
      description: 'The label of the password field. It is linked to the password field using the for attribute.',
    },
    'help-text': {
      control: 'text',
      description: 'Helper text for the password',
    },
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    'validation-message': {
      control: 'text',
      description:
        'Custom validation message that will override the default message and displayed when the password is invalid.',
    },
    readonly: {
      control: 'boolean',
      description: 'readonly attribute of the password field. If true, the password field is read-only.',
    },
    disabled: {
      control: 'boolean',
    },
    minlength: {
      control: 'number',
      description: 'The minimum number of characters that the password field can accept.',
    },
    maxlength: {
      control: 'number',
      description: 'The maximum number of characters that the password field can accept.',
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    dirname: {
      control: 'text',
    },
    pattern: {
      control: 'text',
      description:
        'The pattern attribute of the password field. Specifies a regular expression that the password ' +
        'value must match for validation purposes.',
    },
    required: {
      control: 'boolean',
      description:
        'The required attribute to indicate that the password field is required. ' +
        'It is used to append a required indicator (*) to the label.',
    },
    size: {
      control: 'number',
      description: 'The size attribute of the password field. Specifies the width of the password field.',
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
    ...hideControls([
      'autocapitalize',
      'clear-aria-label',
      'showPassword',
      'trailing-button',
      'prefix-text',
      'leading-icon',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    label: 'Password',
    name: 'password',
    placeholder: 'Placeholder',
    readonly: false,
    disabled: false,
    required: true,
    'show-hide-button-aria-label': 'Show or hide password',
    'validation-message': '',
  },
};

export const FormFieldPassword: StoryObj = {
  render: (args: any) => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const selectedValue = formData.get('password');
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
    label: 'Password',
    name: 'password',
    placeholder: 'Placeholder',
    readonly: false,
    disabled: false,
    required: true,
    'help-text': 'Enter a strong password',
    'help-text-type': 'default',
    'show-hide-button-aria-label': 'Show or hide password',
    'validation-message': 'Password must be between 5 and 10 characters.',
    minlength: 5,
    maxlength: 10,
  },
};

export const DefaultValidation: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Enter a strong password',
    'help-text-type': 'default',
    placeholder: 'Enter password',
    value: 'default_password123',
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const ErrorValidation: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Password is too weak',
    'help-text-type': 'error',
    placeholder: 'Enter password',
    value: 'error_password123',
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const SuccessValidation: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Strong password!',
    'help-text-type': 'success',
    placeholder: 'Enter password',
    value: 'success_password123',
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};
