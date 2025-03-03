import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import '../button';

const render = (args: Args) => html`
  <mdc-checkbox
    label="${args.label}"
    help-text="${args['help-text']}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
    ?indeterminate="${args.indeterminate}"
    data-aria-label="${args['data-aria-label']}"
    @change="${action('onchange')}"
  ></mdc-checkbox>
`;

const meta: Meta = {
  title: 'Components/checkbox',
  tags: ['autodocs'],
  component: 'mdc-checkbox',
  render,
  parameters: {
    badges: ['stable'],
  },
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
    ...hideControls(['help-text-type', 'label-info', 'id', 'internals']),
    ...disableControls([
      '--mdc-checkbox-background-color-hover',
      '--mdc-checkbox-border-color',
      '--mdc-checkbox-checked-background-color',
      '--mdc-checkbox-checked-background-color-hover',
      '--mdc-checkbox-checked-pressed-icon-color',
      '--mdc-checkbox-disabled-background-color',
      '--mdc-checkbox-disabled-border-color',
      '--mdc-checkbox-disabled-checked-icon-color',
      '--mdc-checkbox-disabled-icon-color',
      '--mdc-checkbox-icon-background-color',
      '--mdc-checkbox-icon-border-color',
      '--mdc-checkbox-icon-color',
      '--mdc-checkbox-pressed-icon-color',
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
  render: () => html`
    <div style="display: flex; flex-direction: column;">
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
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <mdc-button type="submit">Submit</mdc-button>
        </fieldset>
      </form>
    `;
  },
};
