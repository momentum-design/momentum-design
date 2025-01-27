import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from './formfieldwrapper.constants';
import { ValidationType } from './formfieldwrapper.types';

const render = (args: Args) =>
  html` <mdc-formfieldwrapper
    label="${args.label}"
    help-text-type="${args['help-text-type']}"
    help-text="${args['help-text']}"
    >
    ${args.children}
    </mdc-formfieldwrapper>`;

const meta: Meta = {
  title: 'Internal/formfieldwrapper',
  tags: ['autodocs'],
  component: 'mdc-formfieldwrapper',
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
    label: {
      control: 'text',
    },
    'help-text': {
      control: 'text',
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label (required)',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    children: '[Child Component]',
  },
};

export const HelperTextTypes: StoryObj = {
  render: () =>
    html` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${repeat(
    Object.values(VALIDATION),
    (validation: ValidationType) => html`
          <mdc-formfieldwrapper help-text-type="${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-formfieldwrapper>
        `,
  )}
    </div>`,
};
