import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from './formfieldwrapper.constants';
import { ValidationType } from './formfieldwrapper.types';
import './formfieldwrapper.subcomponent';

const render = (args: Args) =>
  html` <mdc-subcomponent-formfieldwrapper
    label="${args.label}"
    ?disabled="${args.disabled}"
    help-text-type="${args['help-text-type']}"
    help-text="${args['help-text']}"
    >
    ${args.children}
    </mdc-subcomponent-formfieldwrapper>`;

const meta: Meta = {
  title: 'Internal/formfieldwrapper',
  tags: ['autodocs'],
  component: 'mdc-formfieldwrapper',
  render,
  parameters: {
    badges: ['internal'],
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
    disabled: {
      control: 'boolean',
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
    disabled: false,
  },
};

export const HelperTextTypes: StoryObj = {
  render: () =>
    html` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${repeat(
    Object.values(VALIDATION),
    (validation: ValidationType) => html`
          <mdc-subcomponent-formfieldwrapper help-text-type="${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        `,
  )}
    </div>`,
};
