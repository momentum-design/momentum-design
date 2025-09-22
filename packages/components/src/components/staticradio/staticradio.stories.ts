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
      '--mdc-staticradio-inner-circle-size',
      '--mdc-staticradio-text-disabled-color',
      '--mdc-staticradio-normal-border-color',
      '--mdc-staticradio-disabled-border-color',
      '--mdc-staticradio-inner-circle-normal-background',
      '--mdc-staticradio-inner-circle-disabled-background',
      '--mdc-staticradio-control-inactive-color',
      '--mdc-staticradio-control-inactive-disabled-background',
      '--mdc-staticradio-control-active-color',
      '--mdc-staticradio-control-active-disabled-background',
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
