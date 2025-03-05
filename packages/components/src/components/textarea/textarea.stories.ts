import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { AUTO_CAPITALIZE } from '../input/input.constants';
import '../button';
import '../icon';
import { AUTO_COMPLETE } from './textarea.constants';

const render = (args: Args) => html`<mdc-textarea
    @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    label="${args.label}"
    help-text-type="${args['help-text-type']}"
    help-text="${args['help-text']}"
    placeholder="${args.placeholder}"
    name="${args.name}"
    class="${args.class}"
    style="${args.style}"
    required-label="${args['required-label']}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    ?clear-button="${args['clear-button']}"
    ?resize-button="${args['resize-button']}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
    autocapitalize="${args.autocapitalize}"
    ?autofocus="${args.autofocus}"
    autocomplete="${args.autocomplete}"
    dirname="${ifDefined(args.dirname)}"
    clear-aria-label="${ifDefined(args['clear-aria-label'])}" 
    max-character-limit="${ifDefined(args['max-character-limit'])}"
  ></mdc-textarea>`;

const meta: Meta = {
  title: 'Work In Progress/textarea',
  tags: ['autodocs'],
  component: 'mdc-textarea',
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
    name: {
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
      description: 'The label for the textarea, It is linked to the textarea using the id attribute',
    },
    'required-label': {
      control: 'text',
    },
    'help-text': {
      control: 'text',
      description: 'The help text that is displayed below the textarea',
    },
    readonly: {
      control: 'boolean',
      description: 'When true, the textarea will be readonly',
    },
    disabled: {
      control: 'boolean',
    },
    'clear-button': {
      control: 'boolean',
      description: 'When true, a clear button will be displayed on the textarea',
    },
    rows: {
      control: 'number',
      description: 'The number of lines to display',
    },
    cols: {
      control: 'number',
      description: 'The number of characters per line',
    },
    minlength: {
      control: 'number',
    },
    maxlength: {
      control: 'number',
    },
    'max-character-limit': {
      control: 'number',
      description: 'If set, a character counter will be displayed below the textarea with the max character limit',
    },
    autocapitalize: {
      control: 'select',
      options: Object.values(AUTO_CAPITALIZE),
      description: 'If set, the textarea will automatically capitalize the input based on the selected option',
    },
    autofocus: {
      control: 'boolean',
    },
    autocomplete: {
      control: 'text',
      description: 'If set, the browser will automatically complete the values based on which the user entered before.',
    },
    dirname: {
      control: 'text',
    },
    'clear-aria-label': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...disableControls([
      '--mdc-textarea-disabled-border-color',
      '--mdc-textarea-disabled-text-color',
      '--mdc-textarea-disabled-background-color',
      '--mdc-textarea-border-color',
      '--mdc-textarea-text-color',
      '--mdc-textarea-background-color',
      '--mdc-textarea-hover-background-color',
      '--mdc-textarea-focused-background-color',
      '--mdc-textarea-focused-border-color',
      '--mdc-textarea-error-border-color',
      '--mdc-textarea-warning-border-color',
      '--mdc-textarea-success-border-color',
      '--mdc-textarea-primary-border-color',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    name: 'textarea',
    label: 'Label',
    rows: 5,
    cols: 40,
    wrap: 'soft',
    'required-label': 'required',
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Help text',
    'help-text-type': VALIDATION.ERROR,
    readonly: false,
    disabled: false,
    'clear-button': true,
    autocapitalize: AUTO_CAPITALIZE.OFF,
    autocomplete: AUTO_COMPLETE.OFF,
    maxlength: 1000,
    minlength: 0,
    autofocus: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': '',
    'max-character-limit': 75,
  },
};

export const AllVariants: StoryObj = {
  argTypes: {
    ...disableControls(['label', 'help-text', 'required-label', 'placeholder', 'value', 'help-text-type']),
  },
  render: () => html`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values(VALIDATION).map((validation) => html`<mdc-textarea
      help-text-type="${validation}"
      label="Label"
      cols="40"
      help-text="${validation} helper text"
      placeholder="Placeholder"
      value="${validation}_value"
      ></mdc-textarea>`)}
      <mdc-textarea 
      label="Label"
      cols="40"
      help-text="Helper text"
      help-text-type="default"
      required-label='required' 
      placeholder="Textarea is required"
      ></mdc-textarea>
      <mdc-textarea 
      label="Label"
      cols="40"
      help-text="Helper text"
      help-text-type="default"
      readonly 
      placeholder="Placeholder"
      leading-icon="placeholder-bold"
      value="This is readonly"
      ></mdc-textarea>
      <mdc-textarea 
      label="Label"
      cols="40"
      help-text="Helper text"
      help-text-type="default"
      disabled placeholder="Placeholder"
      value="Textarea disabled"
      ></mdc-textarea>
      <mdc-textarea 
      label="Label"
      cols="40"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      ></mdc-textarea>
      <mdc-textarea 
      label="Label"
      cols="40"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      max-character-limit="75"
      ></mdc-textarea>
      <mdc-textarea 
      label="Label"
      cols="40"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      max-character-limit="100"
      >Momentum is how webex design the future of work. This design system exist to create a shared design language
      and set of building blocks for all Webex products.
      </mdc-textarea>
      </div>`,
};
