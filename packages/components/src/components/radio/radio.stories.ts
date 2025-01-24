import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-radio
    label="${args.label}"
    name="option1"
    value="option1"
    help-text="${args['help-text']}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
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
    'help-text': 'Standard plan',
    checked: false,
    disabled: false,
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
      <mdc-radio label="Unselected" readOnly></mdc-radio>
      <mdc-radio label="Selected" readOnly checked></mdc-radio>
    </div>`,
};
