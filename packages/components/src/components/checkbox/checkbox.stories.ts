import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, textControls } from '../../../config/storybook/utils';
import '../button';
import { POPOVER_PLACEMENT, STRATEGY } from '../popover/popover.constants';

import type Checkbox from './checkbox.component';

const render = (args: Args) => html`
  <mdc-checkbox
    label="${args.label}"
    help-text="${args['help-text']}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
    name="${args.name}"
    value="${args.value}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    class="${args.class}"
    style="${args.style}"
    ?required="${args.required}"
    id="${args.id}"
    ?indeterminate="${args.indeterminate}"
    data-aria-label="${args['data-aria-label']}"
    info-icon-aria-label="${args['info-icon-aria-label']}"
    toggletip-text="${args['toggletip-text']}"
    toggletip-placement="${args['toggletip-placement']}"
    toggletip-strategy="${args['toggletip-strategy']}"
    @change="${action('onchange')}"
  ></mdc-checkbox>
`;

const meta: Meta = {
  title: 'Components/checkbox',
  tags: ['autodocs'],
  component: 'mdc-checkbox',
  render,

  argTypes: {
    label: {
      control: 'text',
    },
    'help-text': {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'data-aria-label': {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    'auto-focus-on-mount': {
      control: 'boolean',
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
    ...hideControls(['help-text-type', 'id', 'internals']),
    ...textControls([
      '--mdc-checkbox-background-color-hover',
      '--mdc-checkbox-checked-background-color-hover',
      '--mdc-checkbox-checked-pressed-icon-color',
      '--mdc-checkbox-pressed-icon-color',
      '--mdc-checkbox-disabled-checked-icon-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
    'data-aria-label': 'Agree to all terms and conditions',
  },
};

export const WithoutLabel: StoryObj = {
  args: {
    'data-aria-label': 'This is a checkbox with no label',
  },
};

export const HelperText: StoryObj = {
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.',
  },
};

export const Indeterminate: StoryObj = {
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true,
  },
};

export const DisabledVariants: StoryObj = {
  parameters: {
    a11y: {
      element: 'mdc-checkbox',
    },
  },
  render: () =>
    html` <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`,
};

export const FormField: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({ value: selectedValues });
    };

    return html`
      <form @submit=${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox
            label="Mind Control"
            value="mind-control"
            name="super-power"
            required
            validation-message="This selection is necessary"
          ></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
};

export const FormFieldCheckboxWithHelpTextValidation: StoryObj = {
  render: args => {
    const validateCheckboxGroup = (form: HTMLFormElement): boolean => {
      const checkboxes = Array.from(form.querySelectorAll('mdc-checkbox[name="super-power"]')) as Checkbox[];

      const requiredBox = checkboxes.find(cb => cb.hasAttribute('required'));
      if (!requiredBox) return true;

      if (!requiredBox.checked) {
        requiredBox.setAttribute('help-text', 'Please select this required option');
        requiredBox.setAttribute('help-text-type', 'error');
        return false;
      }

      requiredBox.setAttribute('help-text', 'Looks good!');
      requiredBox.setAttribute('help-text-type', 'success');
      return true;
    };

    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateCheckboxGroup(form)) {
        return;
      }
      const formData = new FormData(form);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({ value: selectedValues });
    };

    const handleReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const requiredBox = form.querySelector('mdc-checkbox[name="super-power"][required]') as Checkbox;
      if (requiredBox) {
        requiredBox.setAttribute('help-text', args['help-text'] || '');
        requiredBox.setAttribute('help-text-type', args['help-text-type'] || 'default');
      }
    };

    return html`
      <form @submit=${handleSubmit} @reset=${handleReset} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power (with validation)</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power" required></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  args: {
    'help-text': '',
    'help-text-type': 'default',
  },
};
