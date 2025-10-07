import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { SPINNER_SIZES, SPINNER_VARIANT } from './spinner.constants';

const render = (args: Args) =>
  html` <mdc-spinner
    aria-label="${ifDefined(args['aria-label'])}"
    ?inverted="${args.inverted}"
    size="${args.size}"
    variant="${args.variant}"
  ></mdc-spinner>`;

const meta: Meta = {
  title: 'Components/spinner',
  tags: ['autodocs'],
  component: 'mdc-spinner',
  render,

  argTypes: {
    ...classArgType,
    ...styleArgType,
    inverted: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: [...Object.values(SPINNER_SIZES), undefined],
    },
    variant: {
      control: 'select',
      options: Object.values(SPINNER_VARIANT),
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
    inverted: false,
    size: 'midsize',
    variant: 'standalone',
  },
};
