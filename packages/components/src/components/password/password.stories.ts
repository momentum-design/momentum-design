import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
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
    ?trailing-button="${args['trailing-button']}"
    validation-message="${args['validation-message']}"
    prefix-text="${args['prefix-text']}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    leading-icon="${args['leading-icon']}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
    ?autofocus="${args.autofocus}"
    autocomplete="${args.autocomplete}"
    dirname="${ifDefined(args.dirname)}"
    pattern="${ifDefined(args.pattern)}"
    list="${ifDefined(args.list)}"
    size="${ifDefined(args.size)}"
    show-hide-button-aria-label="${args['show-hide-button-aria-label']}"
  ></mdc-password>`;
};

const meta: Meta = {
  title: 'Work In Progress/password',
  tags: ['autodocs'],
  component: 'mdc-password',
  render,
  parameters: {
    badges: ['wip'],
  },
  args: {
    name: 'password',
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    id: {
      control: 'text',
      description: 'The unique id of the password field. It is used to link the password field with the label.',
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
    readonly: {
      control: 'boolean',
      description: 'readonly attribute of the password field. If true, the password field is read-only.',
    },
    disabled: {
      control: 'boolean',
    },
    'prefix-text': {
      control: 'text',
      description:
        'The prefix text that is displayed before the password field. It has a max length of 10 characters.' +
        'When the prefix text is set, make sure to set the "data-aria-label" attribute' +
        'with the appropriate value for accessibility.',
    },
    'leading-icon': {
      control: 'text',
      description: 'The leading icon that is displayed before the password field.',
    },
    'trailing-button': {
      control: 'boolean',
      description: 'The trailing button when set to true, shows a clear button that clears the password field.',
    },
    minlength: {
      control: 'number',
      description: 'The minimum number of characters that the password field can accept.',
    },
    maxlength: {
      control: 'number',
      description: 'The maximum number of characters that the password field can accept.',
    },
    autofocus: {
      control: 'boolean',
      description: 'If true, the password field is focused when the component is rendered.',
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
    ...disableControls([
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
    ...hideControls(['autocapitalize', 'autocomplete', 'clear-aria-label', 'list', 'showPassword']),
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
    'help-text': 'Enter a strong password',
    'help-text-type': 'default',
    'prefix-text': '',
    'leading-icon': '',
    'show-hide-button-aria-label': 'Show or hide password',
    'trailing-button': true,
  },
};

export const FormFieldPassword: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('password');
      action('Form Submitted')({ value: selectedValue });
    };

    return html`
      <form @submit=${handleSubmit}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-password
            name="password"
            label="Password"
            required
            placeholder="Enter your password"
            trailing-button
            validation-message="Password is required"
          ></mdc-password>
          <div style="display: flex; gap: 0.25rem;; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
};

export const DefaultValidation: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Enter a strong password',
    'help-text-type': 'default',
    placeholder: 'Enter password',
    value: 'default_password123',
    'trailing-button': true,
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
    'trailing-button': true,
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const WarningValidation: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Password should contain special characters',
    'help-text-type': 'warning',
    placeholder: 'Enter password',
    value: 'warning_password123',
    'trailing-button': true,
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
    'trailing-button': true,
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const PriorityValidation: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Password expires soon',
    'help-text-type': 'priority',
    placeholder: 'Enter password',
    value: 'priority_password123',
    'trailing-button': true,
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const RequiredPassword: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Password is required',
    'help-text-type': 'default',
    required: true,
    placeholder: 'Password is required',
    'trailing-button': true,
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const ReadonlyPassword: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'This password field is readonly',
    'help-text-type': 'default',
    readonly: true,
    placeholder: 'Enter password',
    'leading-icon': 'secure-lock-bold',
    value: 'ReadonlyPassword123',
    'trailing-button': true,
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const DisabledPassword: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'This password field is disabled',
    'help-text-type': 'default',
    disabled: true,
    placeholder: 'Enter password',
    value: 'DisabledPassword123',
    'trailing-button': true,
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const WithPrefixText: StoryObj = {
  args: {
    label: 'Secure Password',
    'help-text': 'Enter your secure password',
    'help-text-type': 'default',
    placeholder: 'Enter password',
    'prefix-text': '🔒',
    'trailing-button': true,
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const WithLeadingIcon: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Password with security icon',
    'help-text-type': 'default',
    placeholder: 'Enter password',
    'leading-icon': 'secure-lock-bold',
    'trailing-button': true,
    'show-hide-button-aria-label': 'Toggle password visibility',
  },
};

export const PasswordInSmallContainer: StoryObj = {
  render: () => html`
    <div style="width: 200px;">
      <mdc-password
        label="This is a large label text which is truncated into an ellipsis"
        required
        placeholder="Enter password"
        trailing-button
        show-hide-button-aria-label="Toggle password visibility"
      >
      </mdc-password>
    </div>
  `,
};
