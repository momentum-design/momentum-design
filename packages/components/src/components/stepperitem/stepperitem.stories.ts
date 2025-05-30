import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { STATUS, VARIANT } from './stepperitem.constants';

const render = (args: Args) => html`
  <mdc-stepperitem 
  variant=${args.variant}
  status=${args.status}
  optional-label=${args.optionalLabel}
  label=${args.label}
  step-number=${args.stepNumber}
  class=${args.class}
  style=${args.style}
  ></mdc-stepperitem>`;

const meta: Meta = {
  title: 'Work In Progress/stepperitem',
  tags: ['autodocs'],
  component: 'mdc-stepperitem',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(VARIANT),
    },
    status: {
      control: { type: 'select' },
      options: Object.values(STATUS),
    },
    optionalLabel: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    stepNumber: {
      control: { type: 'number' },
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
    optionalLabel: 'Optional',
    label: 'Label',
    stepNumber: '1',
  },
};

export const Inline: StoryObj = {
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.CURRENT,
    label: 'Label',
    stepNumber: '1',
  },
};

export const Stacked: StoryObj = {
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.CURRENT,
    label: 'Label',
    stepNumber: '1',
  },
};

export const Error: StoryObj = {
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.ERROR,
    optionalLabel: 'Error message',
    label: 'Label',
    stepNumber: '1',
  },
};
