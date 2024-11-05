import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-buttonbase 
  ?active=${args.active} 
  ?disabled=${args.disabled} 
  ?soft-disabled=${args['soft-disabled']}
  .onClick=${args.onClick}
  >${args.children}</mdc-buttonbase>`;

const meta: Meta = {
  title: 'Work In Progress/buttonbase',
  tags: ['autodocs'],
  component: 'mdc-buttonbase',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    children: {
      description: 'Button content',
      control: {
        type: 'text',
      },
    },
    active: {
      description: 'Indicates whether the button is active.',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Indicates whether the button is disabled.',
      control: {
        type: 'boolean',
      },
    },
    'soft-disabled': {
      description: 'Indicates whether the button is soft disabled.',
      control: {
        type: 'boolean',
      },
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    onClick: (event: MouseEvent) => {
      console.log('Button clicked with customHandler', event);
    },
  },
};
