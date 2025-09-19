import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls } from '../../../config/storybook/utils';
import { TOGGLE_SIZE } from '../toggle/toggle.constants';

const render = (args: Args) =>
  html` <mdc-statictoggle
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
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
    size: {
      control: 'inline-radio',
      options: Object.values(TOGGLE_SIZE),
    },
    ...classArgType,
    ...styleArgType,
    ...textControls([
      '--mdc-statictoggle-width',
      '--mdc-statictoggle-height',
      '--mdc-statictoggle-width-compact',
      '--mdc-statictoggle-height-compact',
      '--mdc-statictoggle-border-radius',
      '--mdc-statictoggle-border-radius-compact',
      '--mdc-statictoggle-border',
      '--mdc-statictoggle-inactive-rest-color',
      '--mdc-statictoggle-inactive-disabled-color',
      '--mdc-statictoggle-active-rest-color',
      '--mdc-statictoggle-active-disabled-color',
      '--mdc-statictoggle-icon-color-normal',
      '--mdc-statictoggle-icon-color-disabled',
      '--mdc-statictoggle-icon-background-color-normal',
      '--mdc-statictoggle-icon-background-color-disabled',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    checked: false,
    disabled: false,
    size: TOGGLE_SIZE.DEFAULT,
  },
};
