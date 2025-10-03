import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { STATUS, VARIANT } from './stepperitem.constants';

const render = (args: Args) =>
  html` <mdc-stepperitem
    @click=${action('onClick')}
    @keydown=${action('onKeyDown')}
    @keyup=${action('onKeyUp')}
    variant=${args.variant}
    status=${args.status}
    help-text=${args['help-text']}
    label=${args.label}
    step-number=${args['step-number']}
    aria-label=${args['aria-label']}
    class=${args.class}
    style=${args.style}
  ></mdc-stepperitem>`;

const meta: Meta = {
  title: 'Components/stepper/stepperitem',
  tags: ['autodocs'],
  component: 'mdc-stepperitem',
  render,

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(VARIANT),
    },
    status: {
      control: { type: 'select' },
      options: Object.values(STATUS),
    },
    'help-text': {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    'step-number': {
      control: { type: 'number' },
    },
    'aria-label': {
      control: { type: 'text' },
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.COMPLETED,
    'help-text': 'Help text',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, completed',
  },
};

export const Inline: StoryObj = {
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current',
  },
};

export const Stacked: StoryObj = {
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current',
  },
};

export const Error: StoryObj = {
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.ERROR_CURRENT,
    'help-text': 'Error message',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, error, Error message',
  },
};

export const LongText: StoryObj = {
  args: {
    variant: VARIANT.STACKED,
    label:
      'This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container',
    'help-text':
      'This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container',
    status: STATUS.CURRENT,
    'step-number': '1',
    'aria-label': 'Step 1: long label, current',
  },
};
