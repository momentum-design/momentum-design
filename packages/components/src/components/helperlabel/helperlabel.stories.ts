import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from './helperlabel.constants';
import { ValidationType } from './helperlabel.types';

const render = (args: Args) => html`
   <mdc-helperlabel
    label="${args.label}"
    labelInfoText="${args.labelInfoText}"
    helpTextType="${args.helpTextType}"
    helpText="${args.helpText}"
    class="${args.class}"
    style="${args.style}"
    prefixText="${args.prefixText}"
    leadingIcon="${args.leadingIcon}"
    >${args.children}</mdc-helperlabel>`;

const meta: Meta = {
  title: 'Internal/helperlabel',
  tags: ['autodocs'],
  component: 'mdc-helperlabel',
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
    label: {
      control: 'text',
    },
    labelInfoText: {
      control: 'text',
    },
    helpText: {
      control: 'text',
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
    label: 'Label (required)',
    labelInfoText: 'Label info text',
    helpText: 'Helper text',
    helpTextType: 'default',
    children: '[Add your input component here]',
  },
};

export const HelperTextTypes: StoryObj = {
  render: () => html`
  <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${repeat(Object.values(VALIDATION), (validation: ValidationType) => html`
        <mdc-helperlabel
          helpTextType="${validation}"
          label="Label"
          helpText="Helper text"
        >[Child component]</mdc-helperlabel>
      `)}
    </div>`,
};
