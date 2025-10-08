import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { TOGGLE_SIZE } from '../toggle/toggle.constants';

const render = (args: Args) =>
  html` <mdc-statictoggle
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    ?soft-disabled="${args['soft-disabled']}"
    size="${args.size}"
  ></mdc-statictoggle>`;

const meta: Meta = {
  title: 'Components/decorator/statictoggle',
  tags: ['autodocs'],
  component: 'mdc-statictoggle',
  render,

  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    size: {
      control: 'inline-radio',
      options: Object.values(TOGGLE_SIZE),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    checked: false,
    disabled: false,
    readonly: false,
    'soft-disabled': false,
    size: TOGGLE_SIZE.DEFAULT,
  },
};
