import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { disableControls } from '../../../config/storybook/utils';
import { AUTO_CAPITALIZE } from './input.constants';

const render = (args: Args) =>
  html` <mdc-input
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    label="${args.label}"
    help-text-type="${args['help-text-type']}"
    help-text="${args['help-text']}"
    placeholder="${args.placeholder}"
    value="${args.value}"
    class="${args.class}"
    style="${args.style}"
    ?required="${args.required}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    ?trailing-button="${args['trailing-button']}"
    prefix-text="${args['prefix-text']}"
    leading-icon="${args['leading-icon']}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
    autocapitalize="${args.autocapitalize}"
    ?autofocus="${args.autofocus}"
    autocomplete="${args.autocomplete}"
    dirname="${ifDefined(args.dirname)}"
    pattern="${ifDefined(args.pattern)}"
    list="${ifDefined(args.list)}"
    size="${ifDefined(args.size)}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    ></mdc-input>`;

const meta: Meta = {
  title: 'Work In Progress/input',
  tags: ['autodocs'],
  component: 'mdc-input',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
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
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label (required)',
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    required: true,
    readonly: false,
    disabled: false,
    'prefix-text': '',
    'leading-icon': '',
    'trailing-button': false,
    autocapitalize: 'off',
    autofocus: false,
    'data-aria-label': 'clear input',
  },
};

export const AllVariants: StoryObj = {
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type']),
  },
  render: () => html`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values(VALIDATION).map((validation) => html`<mdc-input
      help-text-type="${validation}"
      label="Label"
      help-text="Helper text"
      placeholder="Placeholder"
      value="${validation}_value"
      ></mdc-input>`)}
      <mdc-input 
      label="Label (required)"
      help-text="Helper text"
      help-text-type="default"
      required placeholder="Input is required"
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
      disabled placeholder="Placeholder"
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
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('user-name');
      action('Form Submitted')({ value: selectedValue });
    };

    return html`
    <form @submit=${handleSubmit}>
      <mdc-input
       name='user-name'
        label="First Name (required)"
        placeholder="Enter your name"
        required
      ></mdc-input>
      <mdc-button type="submit" size='24' >Submit</mdc-button>
    </form>
    `;
  },
};
