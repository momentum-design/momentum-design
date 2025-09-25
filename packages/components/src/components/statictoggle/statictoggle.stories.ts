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
      '--mdc-toggle-width',
      '--mdc-toggle-height',
      '--mdc-toggle-width-compact',
      '--mdc-toggle-height-compact',
      '--mdc-toggle-border-radius',
      '--mdc-toggle-border-radius-compact',
      '--mdc-toggle-border',
      '--mdc-toggle-inactive-rest-color',
      '--mdc-toggle-inactive-disabled-color',
      '--mdc-toggle-active-rest-color',
      '--mdc-toggle-active-disabled-color',
      '--mdc-toggle-icon-color-normal',
      '--mdc-toggle-icon-color-disabled',
      '--mdc-toggle-icon-background-color-normal',
      '--mdc-toggle-icon-background-color-disabled',
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
