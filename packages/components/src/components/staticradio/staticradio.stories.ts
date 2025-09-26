import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-staticradio
    ?checked="${args.checked}"
    ?readonly="${args.readonly}"
    ?disabled="${args.disabled}"
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
    ...classArgType,
    ...styleArgType,
    ...textControls([
      '--mdc-radio-inner-circle-size',
      '--mdc-radio-text-disabled-color',
      '--mdc-radio-inner-circle-background-color',
      '--mdc-radio-control-border-color',
      '--mdc-radio-control-background-color',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    checked: false,
    readonly: false,
    disabled: false,
  },
};
