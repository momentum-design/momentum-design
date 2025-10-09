import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { AUTO_CAPITALIZE } from '../input/input.constants';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { POPOVER_PLACEMENT, STRATEGY } from '../popover/popover.constants';

import type Textarea from './textarea.component';
import { AUTO_COMPLETE, DEFAULTS, WRAP } from './textarea.constants';

const render = (args: Args) =>
  html`<mdc-textarea
    @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    @limitexceeded="${action('limitexceeded')}"
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
    ?required="${args.required}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
    autocapitalize="${args.autocapitalize}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    autocomplete="${args.autocomplete}"
    dirname="${ifDefined(args.dirname)}"
    validation-message="${args['validation-message']}"
    toggletip-text="${args['toggletip-text']}"
    toggletip-placement="${args['toggletip-placement']}"
    toggletip-strategy="${args['toggletip-strategy']}"
    info-icon-aria-label="${args['info-icon-aria-label']}"
    max-character-limit="${ifDefined(args['max-character-limit'])}"
  ></mdc-textarea>`;

const meta: Meta = {
  title: 'Components/textarea',
  tags: ['autodocs'],
  component: 'mdc-textarea',
  render,

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
    rows: {
      control: 'number',
    },
    cols: {
      control: 'number',
    },
    wrap: {
      control: 'select',
      options: Object.values(WRAP),
    },
    minlength: {
      control: 'number',
    },
    maxlength: {
      control: 'number',
    },
    'max-character-limit': {
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
      control: 'select',
      options: Object.values(AUTO_COMPLETE),
    },
    dirname: {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    'validation-message': {
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
    'info-icon-aria-label': {
      control: 'text',
    },
    ...hideControls(['characterLimitExceedingFired', 'textarea', 'validity', 'willValidate']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    name: 'textarea',
    label: 'Label',
    rows: DEFAULTS.ROWS,
    cols: DEFAULTS.COLS,
    wrap: DEFAULTS.WRAP,
    required: true,
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Help text',
    'help-text-type': VALIDATION.DEFAULT,
    readonly: false,
    disabled: false,
    autocapitalize: AUTO_CAPITALIZE.OFF,
    autocomplete: AUTO_COMPLETE.OFF,
    'data-aria-label': '',
  },
};

const commonArgs = {
  name: 'textarea',
  label: 'Label',
  rows: DEFAULTS.ROWS,
  cols: DEFAULTS.COLS,
  wrap: DEFAULTS.WRAP,
};

export const DisabledTextarea: StoryObj = {
  args: {
    ...commonArgs,
    value: 'Disabled & typed textarea',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story displays a disabled textarea component. The textarea will be displayed as disabled' +
          'when the `disabled` attribute is set to true. The user will not be able to interact with the textarea.',
      },
    },
  },
};

export const ReadonlyTextarea: StoryObj = {
  args: {
    ...commonArgs,
    readonly: true,
    value: 'Readonly textarea',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story displays a readonly textarea component. The textarea will be displayed as readonly' +
          'when the `readonly` attribute is set to true. The user will not be able to edit the content' +
          ' of the textarea.',
      },
    },
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
          html`<mdc-textarea
            help-text-type="${validation}"
            label="Label"
            help-text="${validation} helper text"
            placeholder="Placeholder"
            value="${validation}_value"
          ></mdc-textarea>`,
      )}
      <mdc-textarea
        label="Required Textarea"
        help-text="Helper text"
        help-text-type="default"
        required
        placeholder="Textarea is required"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea within character limit"
        help-text="Helper text"
        help-text-type="default"
        value="Momentum is how webex design the future of work."
        readonly
        placeholder="Placeholder"
        max-character-limit="75"
      ></mdc-textarea>
      <mdc-textarea
        label="Textarea exceeding character limit"
        readonly
        help-text="Input must not exceed 100 characters."
        help-text-type="error"
        placeholder="Placeholder"
        max-character-limit="75"
        >Momentum is how webex design the future of work. This design system exist to create a shared design language.
      </mdc-textarea>
    </div>`,
  parameters: {
    docs: {
      description: {
        story:
          'This story displays all the variants of the textarea component.' +
          'The textarea component supports all the validation types. ' +
          'User can set the `help-text-type` attribute to any of the validation types to display' +
          'the help text in that style.' +
          'The textarea can also be set as required by passing the `required` attribute.' +
          'User can also set the `max-character-limit` attribute to display a character counter below the textarea.' +
          'The textarea can also be set as readonly by passing the `readonly` attribute.',
      },
    },
  },
};

export const TextareaWithCharacterCounter: StoryObj = {
  render: () => {
    let helpText = '';
    let helpTextType: ValidationType = VALIDATION.DEFAULT;

    const handleCharacterLimitCheck = (event: CustomEvent) => {
      action('limitexceeded')(event);
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
            name="tweet"
            label="Tweet"
            @limitexceeded=${handleCharacterLimitCheck}
            help-text="${helpText}"
            help-text-type="${helpTextType}"
            required
            max-character-limit="75"
            placeholder="Write what's on your mind"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  parameters: {
    docs: {
      description: {
        story:
          'To add a character counter to the textarea, use the `max-character-limit` attribute. ' +
          'The character counter will be displayed below the textarea with the max character limit.' +
          'User needs to listen to the `limitexceeded` event to handle the character limit check.' +
          'The event will contain the current character count, the max character limit & current value of the textarea.' +
          'Based on which the user can update the help text and help text type dynamically.',
      },
    },
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
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            validation-message="Tweet is required"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
};

export const TextareaInsideFormWithHelpTextValidation: StoryObj = {
  render: args => {
    const MAX_CHAR_LIMIT = args['max-character-limit'];
    const validateTextarea = (form: HTMLFormElement, args: any): boolean => {
      const textareaEl = form.querySelector('mdc-textarea[name="tweet"]') as Textarea;
      const { value } = textareaEl;
      if (args.required && (!value || value.trim() === '')) {
        textareaEl.setAttribute('help-text', 'Please enter your tweet');
        textareaEl.setAttribute('help-text-type', 'error');
        return false;
      }
      if (value && value.length > MAX_CHAR_LIMIT) {
        textareaEl.setAttribute('help-text', `Input must not exceed ${MAX_CHAR_LIMIT} characters.`);
        textareaEl.setAttribute('help-text-type', 'error');
        return false;
      }
      textareaEl.setAttribute('help-text', 'Looks good!');
      textareaEl.setAttribute('help-text-type', 'success');
      return true;
    };

    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateTextarea(form, args)) {
        return;
      }
      const formData = new FormData(form);
      const selectedValue = formData.get('tweet');
      action('Form Submitted')({ value: selectedValue });
    };

    const handleReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const textareaEl = form.querySelector('mdc-textarea[name="tweet"]') as Textarea;
      textareaEl.setAttribute('help-text', args['help-text'] || '');
      textareaEl.setAttribute('help-text-type', args['help-text-type'] || 'default');
    };

    return html`
      <form @submit=${handleSubmit} @reset=${handleReset} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-textarea
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            max-character-limit="${MAX_CHAR_LIMIT}"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  args: {
    required: true,
    'help-text': '',
    'help-text-type': 'default',
    'max-character-limit': 75,
  },
};
