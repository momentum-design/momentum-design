import { action } from 'storybook/actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls, hideControls } from '../../../config/storybook/utils';
import '../button';
import { POPOVER_PLACEMENT, STRATEGY } from '../popover/popover.constants';

import type Toggle from './toggle.component';
import { DEFAULTS, TOGGLE_SIZE } from './toggle.constants';

const render = (args: Args) => html`
  <mdc-toggle
    name="toggleName"
    value="toggleValue"
    @focus="${action('onfocus')}"
    @change="${action('onchange')}"
    @keydown="${action('onkeydown')}"
    @click="${action('onclick')}"
    size="${args.size}"
    toggletip-text="${args['toggletip-text']}"
    toggletip-placement="${args['toggletip-placement']}"
    toggletip-strategy="${args['toggletip-strategy']}"
    info-icon-aria-label="${args['info-icon-aria-label']}"
    label="${ifDefined(args.label)}"
    help-text="${ifDefined(args['help-text'])}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    ?checked="${args.checked}"
    ?required="${args.required}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    ?soft-disabled="${args['soft-disabled']}"
  >
  </mdc-toggle>
`;

const meta: Meta = {
  title: 'Components/toggle',
  tags: ['autodocs'],
  component: 'mdc-toggle',
  render,

  argTypes: {
    size: {
      control: 'inline-radio',
      options: Object.values(TOGGLE_SIZE),
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    'help-text': {
      control: 'text',
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
      description: 'Aria label for the toggle component. Required for accessibility.',
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
    ...hideControls(['help-text-type', 'id']),
    ...textControls([
      '--mdc-toggle-width',
      '--mdc-toggle-height',
      '--mdc-toggle-width-compact',
      '--mdc-toggle-height-compact',
      '--mdc-toggle-label-lineheight',
      '--mdc-toggle-label-fontsize',
      '--mdc-toggle-label-fontweight',
      '--mdc-toggle-label-color-disabled',
      '--mdc-toggle-help-text-color',
      '--mdc-toggle-active-hover-color',
      '--mdc-toggle-active-pressed-color',
      '--mdc-toggle-inactive-hover-color',
      '--mdc-toggle-inactive-pressed-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Toggle label',
    checked: false,
    size: DEFAULTS.SIZE,
    disabled: false,
    readonly: false,
    'soft-disabled': false,
    'help-text': '',
  },
};

export const DefaultSize: StoryObj = {
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT,
  },
};

export const CompactSize: StoryObj = {
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT,
  },
};

export const WithHelperText: StoryObj = {
  args: {
    ...Example.args,
    'help-text': 'helper text',
  },
};

export const Disabled: StoryObj = {
  render: args =>
    html` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${args.size}"></mdc-toggle>
    </div>`,
};

export const WithoutLabel: StoryObj = {
  args: {
    'data-aria-label': 'This is a toggle with no label',
  },
};

export const ToggleInsideForm: StoryObj = {
  render: args => {
    const onSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.get('toggleName');
      action('Form Submitted')({ value: selectedValues });
    };
    return html`
      <form @submit="${onSubmit}">
        <fieldset>
          <legend>Form Example</legend>
          <mdc-toggle
            name="toggleName"
            value="toggleValue"
            label="Agree to Terms"
            size="${args.size}"
            required
            validation-message="Toggle this switch to continue"
          ></mdc-toggle>
          <div style="display: flex; gap: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
};

export const ToggleInsideFormWithHelpTextValidation: StoryObj = {
  render: args => {
    const validateToggle = (form: HTMLFormElement, args: any): boolean => {
      const toggleEl = form.querySelector('mdc-toggle[name="toggleName"]') as Toggle;
      const { checked } = toggleEl;
      if (args.required && !checked) {
        toggleEl.setAttribute('help-text', 'Please agree to the terms to continue');
        toggleEl.setAttribute('help-text-type', 'error');
        return false;
      }
      toggleEl.setAttribute('help-text', 'Looks good!');
      toggleEl.setAttribute('help-text-type', 'success');
      return true;
    };

    const onSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateToggle(form, args)) {
        return;
      }
      const formData = new FormData(form);
      const selectedValues = formData.get('toggleName');
      action('Form Submitted')({ value: selectedValues });
    };

    const onReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const toggleEl = form.querySelector('mdc-toggle[name="toggleName"]') as Toggle;
      toggleEl.setAttribute('help-text', args['help-text'] || '');
      toggleEl.setAttribute('help-text-type', args['help-text-type'] || 'default');
    };

    return html`
      <form @submit="${onSubmit}" @reset="${onReset}" novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-toggle
            name="toggleName"
            value="toggleValue"
            label="Agree to Terms"
            size="${args.size}"
            required
          ></mdc-toggle>
          <div style="display: flex; gap: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  args: {
    size: DEFAULTS.SIZE,
    required: true,
    'help-text': '',
    'help-text-type': 'default',
  },
};
