import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from './input.constants';

const render = (args: Args) =>
  html` <mdc-input
    label="${args.label}"
    labelInfoText="${args.labelInfoText}"
    helpTextType="${args.helpTextType}"
    helpText="${args.helpText}"
    placeholder="${args.placeholder}"
    value="${args.value}"
    class="${args.class}"
    style="${args.style}"
    ?required="${args.required}"
    
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
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label',
    labelInfoText: 'Label info text',
    helpText: 'Helper text',
    helpTextType: 'default',
    required: false,
  },
};

export const AllVariants: StoryObj = {
  render: () => html`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
  <mdc-input 
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="default"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="error"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="warning"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="success"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="priority"
  placeholder="Placeholder"
  value="Value"
  ></mdc-input>
  <mdc-input 
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="default"
  required placeholder="Placeholder"
  ></mdc-input>
  <mdc-input 
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="default"
  readonly placeholder="Placeholder"
  value="This is readonly"
  ></mdc-input>
  <mdc-input 
  label="Label"
  labelInfoText="Label info text"
  helpText="Helper text"
  helpTextType="default"
  disabled placeholder="Placeholder"
  value="disabled input"
  ></mdc-input>
  </div>
  `,
};
