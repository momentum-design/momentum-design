import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-progressspinner value="${args.value}" ?error="${args.error}" data-aria-label="${args['data-aria-label']}">
  </mdc-progressspinner>`;

const meta: Meta = {
  title: 'Components/progressspinner',
  tags: ['autodocs'],
  component: 'mdc-progressspinner',
  render,

  argTypes: {
    value: {
      control: 'number',
    },
    error: {
      control: 'boolean',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls([
      'help-text-type',
      'required',
      'label',
      'disabled',
      'help-text',
      'toggletip-text',
      'toggletip-placement',
      'toggletip-strategy',
      'info-icon-aria-label',
      'variant',
      'id',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    value: 0,
    'data-aria-label': 'progress spinner',
  },
};

export const Error: StoryObj = {
  args: {
    value: 25,
    error: true,
    'data-aria-label': 'Error progress spinner',
  },
};

export const Success: StoryObj = {
  args: {
    value: 100,
    error: false,
    'data-aria-label': 'Success progress spinner',
  },
};
