import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { BUTTON_SIZES, BUTTON_TYPE, DEFAULTS } from './buttonsimple.constants';

const render = (args: Args) => html`
  <mdc-buttonsimple 
  @click="${action('onclick')}"
  @keydown="${action('onkeydown')}"
  @keyup="${action('onkeyup')}"
  @focus="${action('onfocus')}"
  ?active="${args.active}"
  ?disabled="${args.disabled}"
  ?soft-disabled="${args['soft-disabled']}"
  size="${args.size}"
  type="${args.type}"
  role="${args.role}"
  tabIndex="${args.tabIndex}"
  >${args.children}</mdc-buttonsimple>`;

const meta: Meta = {
  title: 'Internal/buttonsimple',
  tags: ['autodocs'],
  component: 'mdc-buttonsimple',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    children: {
      description: 'Text label for the button.',
      control: 'text',
    },
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: Object.values(BUTTON_SIZES),
    },
    type: {
      control: 'select',
      options: Object.values(BUTTON_TYPE),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    size: BUTTON_SIZES[32],
    type: BUTTON_TYPE.BUTTON,
    role: DEFAULTS.ROLE,
    tabIndex: 0,
  },
};
