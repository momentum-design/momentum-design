import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from './input.constants';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-input
    id="${args.id}"
    label="${args.label}"
    labelInfoText="${args.labelInfoText}"
    helpTextType="${args.helpTextType}"
    helpText="${args.helpText}"
    placeholder="${args.placeholder}"
    value="${args.value}"
    class="${args.class}"
    style="${args.style}"
    ?required="${args.required}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    prefixText="${args.prefixText}"
    leadingIcon="${args.leadingIcon}"
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
    helpTextType: {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    id: {
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
    labelInfoText: {
      control: 'text',
    },
    helpText: {
      control: 'text',
    },
    readonly: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    prefixText: {
      control: 'text',
    },
    leadingIcon: {
      control: 'text',
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    id: '1',
    label: 'Label (required)',
    labelInfoText: 'Label info text',
    helpText: 'Helper text',
    helpTextType: 'default',
    required: false,
    placeholder: 'Placeholder',
    value: '',
    readonly: false,
    disabled: false,
    prefixText: '',
    leadingIcon: '',
  },
};

export const AllVariants: StoryObj = {
  argTypes: {
    ...disableControls(['label', 'labelInfoText', 'helpText', 'required', 'placeholder', 'value', 'helpTextType']),
  },
  render: () => html`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
  <mdc-input 
  id="1"
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="default"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  id="2"
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="error"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  id="3"
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="warning"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  id="4"
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="success"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  id="5"
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="priority"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  id="6"
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="default"
  required placeholder="Input is required"
  ></mdc-input>
  <mdc-input 
  id="7"
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="default"
  readonly placeholder="Placeholder"
  value="This is readonly"
  ></mdc-input>
  <mdc-input 
  id="8"
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="default"
  disabled placeholder="Placeholder"
  value="Text disabled"
  ></mdc-input>
  <mdc-input 
  id="9"
  label="Label"
  labelInfoText="Label info text"
  helpText="Help text"
  helpTextType="default"
  placeholder="Placeholder"
  prefixText="https://"
  ></mdc-input>
  <mdc-input 
  id="10"
  label="Label"
  labelInfoText="Label info text"
  helpText="Help text"
  helpTextType="default"
  placeholder="Placeholder"
  leadingIcon="placeholder-bold"
  ></mdc-input>
  </div>
  `,
};
