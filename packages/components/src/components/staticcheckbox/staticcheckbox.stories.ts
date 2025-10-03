import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) =>
  html` <mdc-staticcheckbox
    ?checked="${args.checked}"
    ?indeterminate="${args.indeterminate}"
    ?disabled="${args.disabled}"
    class="${args.class}"
    style="${args.style}"
  ></mdc-staticcheckbox>`;

const meta: Meta = {
  title: 'Components/decorator/staticcheckbox',
  tags: ['autodocs'],
  component: 'mdc-staticcheckbox',
  render,

  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
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
    indeterminate: false,
    disabled: false,
  },
};
