import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-radio
    @click="${action('onClick')}"
    @keydown="${action('onKeyDown')}"
    @keyup="${action('onKeyUp')}"
    @focus="${action('onFocus')}"
    label="${args.label}"
    name="option1"
    value="option1"
    help-text="${args['help-text']}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
  ></mdc-radio>
`;

const meta: Meta = {
  title: 'Work In Progress/radio',
  tags: ['autodocs'],
  component: 'mdc-radio',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Select your plan',
    checked: false,
    disabled: false,
    readonly: false,
  },
};

export const WithoutLabel: StoryObj = {
  args: {
    label: '',
    checked: false,
    disabled: false,
    readonly: false,
  },
};

export const Disabled: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio label="Unselected" disabled></mdc-radio>
      <mdc-radio label="Selected" disabled checked></mdc-radio>
    </div>`,
};

export const ReadOnly: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
      <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
    </div>`,
};

export const WithHelpText: StoryObj = {
  args: {
    label: 'Select your plan',
    'help-text': 'Standard plan',
    checked: false,
    disabled: false,
    readonly: false,
  },
};

export const WithInfoIcon: StoryObj = {
  render: () => html`
    <mdc-radio
    label="Select your plan"
    checked
    >
      <mdc-icon slot="label-info" name="info-circle-filled"></mdc-icon>
    </mdc-radio>`,
};
