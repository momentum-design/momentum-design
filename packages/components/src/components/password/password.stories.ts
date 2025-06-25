import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-password
    show-hide-button-aria-label="${args['show-hide-button-aria-label']}"
    class="${args.class}"
    style="${args.style}"
    label="${args.label}"
    help-text="${args['help-text']}"
    help-text-type="${args['help-text-type']}"
    placeholder="${args.placeholder}"
    ?trailing-button="${args['trailing-button']}"
    validation-message="${args['validation-message']}"
    @click="${action('click')}"
  ></mdc-password>
`;

const meta: Meta = {
  title: 'Work In Progress/password',
  tags: ['autodocs'],
  component: 'mdc-password',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    'show-hide-button-aria-label': {
      control: 'text',
      description: 'Aria label for the show/hide button',
      table: { category: 'Attributes' },
    },
    label: {
      control: 'text',
      description: 'Label for the password input',
      table: { category: 'Attributes' },
    },
    'help-text': {
      control: 'text',
      description: 'Helper text for the password input',
      table: { category: 'Attributes' },
    },
    'help-text-type': {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Type of helper text (controls prefix icon)',
      table: { category: 'Attributes' },
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    label: 'Password',
    'help-text': 'Enter a strong password.',
    'help-text-type': 'default',
    placeholder: 'Placeholder',
    'show-hide-button-aria-label': 'Show or hide password',
  },
};

export const FormFieldInput: StoryObj = {
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
        name='password'
        label="Password"
        required
        placeholder="Enter your password"
        validation-message="Password is required"
      ></mdc-password>
      <div style='display: flex; gap: 0.25rem;; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    `;
  },
};

export const DefaultHelperText: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Enter a strong password.',
    'help-text-type': 'default',
    placeholder: 'Enter your password',
    'show-hide-button-aria-label': 'Show or hide password',
  },
};

export const ErrorHelperText: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Password is required.',
    'help-text-type': 'error',
    placeholder: 'Enter your password',
    'show-hide-button-aria-label': 'Show or hide password',
  },
};

export const SuccessHelperText: StoryObj = {
  args: {
    label: 'Password',
    'help-text': 'Password is strong!',
    'help-text-type': 'success',
    placeholder: 'Enter your password',
    'show-hide-button-aria-label': 'Show or hide password',
  },
};
