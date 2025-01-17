import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { TYPE } from './input.constants';
import { VALIDATION } from '../labelandhelper/labelandhelper.constants';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-input
    id="${args.id}"
    label="${args.label}"
    type="${args.type}"
    label-info-text="${args['label-info-text']}"
    help-text-type="${args['help-text-type']}"
    help-text="${args['help-text']}"
    placeholder="${args.placeholder}"
    value="${args.value}"
    class="${args.class}"
    style="${args.style}"
    ?required="${args.required}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    prefixText="${args.prefixText}"
    leadingIcon="${args.leadingIcon}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
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
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    id: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: Object.values(TYPE),
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
    'label-info-text': {
      control: 'text',
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
    prefixText: {
      control: 'text',
    },
    leadingIcon: {
      control: 'text',
    },
    minlength: {
      control: 'number',
    },
    maxlength: {
      control: 'number',
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    id: '1',
    label: 'Label (required)',
    type: 'text',
    'label-info-text': 'Label info text',
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    required: false,
    readonly: false,
    disabled: false,
    prefixText: '',
    leadingIcon: '',
  },
};

export const AllVariants: StoryObj = {
  argTypes: {
    ...disableControls(['label', 'label-info-text', 'help-text', 'required', 'placeholder', 'value', 'help-text-type']),
  },
  render: () => html`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values(VALIDATION).map((validation, idx) => html`<mdc-input
      help-text-type="${validation}"
      id="${idx}"
      label="Label"
      help-text="Helper text"
      placeholder="Placeholder"
      value="${validation}_value"
      label-info-text="Label info text"
      ></mdc-input>`)}
      <mdc-input 
      id="6"
      label="Label (required)"
      label-info-text="Label info text"
      help-text="Helper text"
      help-text-type="default"
      required placeholder="Input is required"
      ></mdc-input>
      <mdc-input 
      id="7"
      label="Label"
      label-info-text="Label info text"
      help-text="Helper text"
      help-text-type="default"
      readonly placeholder="Placeholder"
      value="This is readonly"
      ></mdc-input>
      <mdc-input 
      id="8"
      label="Label"
      label-info-text="Label info text"
      help-text="Helper text"
      help-text-type="default"
      disabled placeholder="Placeholder"
      value="Text disabled"
      ></mdc-input>
      <mdc-input 
      id="9"
      label="Label"
      label-info-text="Label info text"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      prefixText="https://"
      ></mdc-input>
      <mdc-input 
      id="10"
      label="Label"
      label-info-text="Label info text"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      leadingIcon="placeholder-bold"
      ></mdc-input>
      </div>`,
};
