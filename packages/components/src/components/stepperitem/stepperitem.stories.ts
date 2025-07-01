import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { STATUS, VARIANT } from './stepperitem.constants';

const render = (args: Args) =>
  html` <mdc-stepperitem
    @focus=${action('onFocus')}
    variant=${args.variant}
    status=${args.status}
    optional-label=${args['optional-label']}
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
    'optional-label': {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    'step-number': {
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
    'optional-label': 'Optional',
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
    'optional-label': 'Error message',
    label: 'Label',
    stepNumber: '1',
  },
};

export const Test: StoryObj = {
  render: () => html`
    <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
    <mdc-stepperitem label="Step 2" status="future-disabled" step-number="2"></mdc-stepperitem>
    <mdc-stepperitem label="Step 3" status="error" optional-label="Error"></mdc-stepperitem>
  `,
};
