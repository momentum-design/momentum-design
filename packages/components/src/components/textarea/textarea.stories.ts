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
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';

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
    value="${args.value}"
    rows="${args.rows}"
    cols="${args.cols}"
    wrap="${args.wrap}"
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
    validation-message="${args['validation-message']}"
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
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
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
    'help-text-type': VALIDATION.DEFAULT,
    readonly: false,
    disabled: false,
    'clear-button': true,
    autocapitalize: AUTO_CAPITALIZE.OFF,
    autocomplete: AUTO_COMPLETE.OFF,
    autofocus: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': '',
  },
};

export const TextareaWithClearButton: StoryObj = {
  args: {
    name: 'textarea',
    label: 'Label',
    rows: 5,
    cols: 40,
    wrap: 'soft',
    placeholder: 'Placeholder',
    'clear-button': true,
    'clear-aria-label': 'Clear',
    value: 'Textarea with clear button, click on the clear button to clear the textarea',
  },
};

export const DisabledTextarea: StoryObj = {
  args: {
    name: 'textarea',
    label: 'Label',
    rows: 5,
    cols: 40,
    wrap: 'soft',
    value: 'Disabled & typed textarea',
    'clear-button': true,
    disabled: true,
  },
};

export const ReadonlyTextarea: StoryObj = {
  args: {
    name: 'textarea',
    label: 'Label',
    rows: 5,
    cols: 40,
    readonly: true,
    value: 'Readonly textarea',
    'clear-button': true,
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
      label="Required Textarea"
      cols="40"
      help-text="Helper text"
      help-text-type="default"
      required-label='required' 
      placeholder="Textarea is required"
      ></mdc-textarea>
      <mdc-textarea 
      label="Textarea within character limit"
      cols="40"
      help-text="Helper text"
      help-text-type="default"
      value="Momentum is how webex design the future of work."
      readonly
      placeholder="Placeholder"
      max-character-limit="75"
      ></mdc-textarea>
      <mdc-textarea 
      label="Textarea exceeding character limit"
      cols="40"
      readonly
      help-text="Input must not exceed 100 characters."
      help-text-type="error"
      placeholder="Placeholder"
      max-character-limit="75"
      >Momentum is how webex design the future of work. This design system exist to create a shared design language.
      </mdc-textarea>
      </div>`,
};

export const TextareaWithCharacterCounter: StoryObj = {
  render: () => {
    let helpText = '';
    let helpTextType: ValidationType = VALIDATION.DEFAULT;

    const handleCharacterLimitCheck = (event: CustomEvent) => {
      action('character-limit-check')(event);
      const { detail } = event;

      if (detail.currentCharacterCount > detail.maxCharacterLimit) {
        helpText = `Input must not exceed ${detail.maxCharacterLimit} characters.`;
        helpTextType = VALIDATION.ERROR;
      } else {
        helpText = '';
        helpTextType = VALIDATION.DEFAULT;
      }

      // Update the storybook UI dynamically
      document.getElementById('textarea')?.setAttribute('help-text', helpText);
      document.getElementById('textarea')?.setAttribute('help-text-type', helpTextType);
    };

    return html`
      <div style="width: 400px">
      <mdc-textarea
        id="textarea"
        name="tweet"
        label="Tweet"
        @character-limit-check=${handleCharacterLimitCheck}
        help-text="${helpText}"
        help-text-type="${helpTextType}"
        required-label="required"
        max-character-limit="75"
        placeholder="Write what's on your mind"
      ></mdc-textarea>
      </div>
    `;
  },
};

export const TextareaInsideForm: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('tweet');
      action('Form Submitted')({ value: selectedValue });
    };

    return html`
    <form @submit=${handleSubmit}>
      <fieldset>
      <legend>Form Example</legend>
      <mdc-textarea
        id="textarea"
        name='tweet'
        label="Tweet"
        required-label="required"
        placeholder="Write what's on your mind"
        validation-message="Tweet is required"
        max-character-limit="75"
      ></mdc-textarea>
      <div style='display: flex; gap: 0.25rem;; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    `;
  },
};
