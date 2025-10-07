import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) =>
  html` <mdc-staticradio
    ?checked="${args.checked}"
    ?readonly="${args.readonly}"
    ?disabled="${args.disabled}"
    ?soft-disabled="${args['soft-disabled']}"
    class="${args.class}"
    style="${args.style}"
  ></mdc-staticradio>`;

const meta: Meta = {
  title: 'Components/decorator/staticradio',
  tags: ['autodocs'],
  component: 'mdc-staticradio',
  render,

  argTypes: {
    checked: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    checked: false,
    readonly: false,
    disabled: false,
    'soft-disabled': false,
  },
};
