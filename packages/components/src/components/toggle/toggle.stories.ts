import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { DEFAULTS, TOGGLE_SIZE } from './toggle.constants';
import '../button';

const render = (args: Args) => html`
  <mdc-toggle
      name="toggleName"
      value="toggleValue"
      @focus="${action('onfocus')}"
      @change="${action('onchange')}"
      size="${args.size}"
      label="${args.label}"
      help-text="${args['help-text']}"
      data-aria-label="${args['data-aria-label']}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}">
    </mdc-toggle>
`;

const meta: Meta = {
  title: 'Components/toggle',
  tags: ['autodocs'],
  component: 'mdc-toggle',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: Object.values(TOGGLE_SIZE),
    },
    'data-aria-label': {
      control: 'text',
      description: 'Aria label for the toggle component. Required for accessibility.',
    },
    ...hideControls(['help-text-type', 'label-info', 'id']),
    ...disableControls([
      '--mdc-toggle-width',
      '--mdc-toggle-height',
      '--mdc-toggle-width-compact',
      '--mdc-toggle-height-compact',
      '--mdc-toggle-border-radius',
      '--mdc-toggle-border-radius-compact',
      '--mdc-toggle-border',
      '--mdc-toggle-inactive-rest-color',
      '--mdc-toggle-inactive-hover-color',
      '--mdc-toggle-inactive-pressed-color',
      '--mdc-toggle-inactive-disabled-color',
      '--mdc-toggle-active-rest-color',
      '--mdc-toggle-active-hover-color',
      '--mdc-toggle-active-pressed-color',
      '--mdc-toggle-active-disabled-color',
      '--mdc-toggle-help-text-color',
      '--mdc-toggle-label-color-disabled',
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
    disabled: false,
    size: DEFAULTS.SIZE,
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
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${args.size}"></mdc-toggle>
    </div>`,
};

export const WithoutLabel: StoryObj = {
  args: {
    ...Example.args,
    label: '',
    'data-aria-label': 'This is a toggle with no label',
  },
};

export const ToggleInsideForm: StoryObj = {
  render: (args) => {
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
        <mdc-toggle name="toggleName" value="toggleValue" label="Agree to Terms" size="${args.size}" 
          required-label='required' validation-message='Toggle this switch to continue'></mdc-toggle>
          <div style='display: flex; gap: 0.25rem;'>
            <mdc-button type="submit" size='24' style='margin-top: 0.5rem'>Submit</mdc-button>
            <mdc-button type="reset" size='24' style='margin-top: 0.5rem' variant='secondary'>Reset</mdc-button>
          </div>
      </fieldset>
    </form>
  `;
  },
};
