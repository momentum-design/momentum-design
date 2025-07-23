import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import '../stepperitem';
import '../connector';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VARIANT } from '../stepperitem/stepperitem.constants';
import { ORIENTATION } from '../connector/connector.constants';

const render = (args: Args) =>
  html` <mdc-stepper orientation="${args.orientation}" variant="${args.variant}">
    <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
    <mdc-connector status="complete"></mdc-connector>
    <mdc-stepperitem
      variant="${args.variant}"
      label="Step 2"
      status="completed"
      help-text="Help text"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem label="Step 3" status="current" help-text="Help text"></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem
      variant="${args.variant}"
      label="Step 4"
      status="error-incomplete"
      step-number="4"
      help-text="Error"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem label="Step 5" status="not-started" step-number="5"></mdc-stepperitem>
  </mdc-stepper>`;

const renderWithErrorCurrent = (args: Args) =>
  html` <mdc-stepper orientation="${args.orientation}" variant="${args.variant}">
    <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
    <mdc-connector status="complete"></mdc-connector>
    <mdc-stepperitem
      variant="${args.variant}"
      label="Step 2"
      status="completed"
      help-text="Help text"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem
      variant="${args.variant}"
      label="Step 3"
      status="error-current"
      help-text="Help text"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem
      variant="${args.variant}"
      label="Step 4"
      status="error-incomplete"
      step-number="4"
      help-text="Error"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem label="Step 5" status="not-started" step-number="5"></mdc-stepperitem>
  </mdc-stepper>`;

const renderWithLargeLabel = (args: Args) =>
  html` <mdc-stepper orientation="${args.orientation}" variant="${args.variant}">
    <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem
      label="This is a very long label for step 3 that might not fit"
      status="current"
      help-text="Help text is also very long"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem
      variant="${args.variant}"
      label="Step 4"
      status="error-incomplete"
      step-number="4"
      help-text="Error"
    ></mdc-stepperitem>
    <mdc-connector status="incomplete"></mdc-connector>
    <mdc-stepperitem label="Step 5" status="not-started" step-number="5"></mdc-stepperitem>
  </mdc-stepper>`;

const meta: Meta = {
  title: 'Work In Progress/stepper/stepper',
  tags: ['autodocs'],
  component: 'mdc-stepperitemper',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: Object.values(ORIENTATION),
    },
    variant: {
      control: 'radio',
      options: Object.values(VARIANT),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE,
  },
};

export const WithErrorCurrent: StoryObj = {
  render: renderWithErrorCurrent,
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE,
  },
};

export const WithLargeLabel: StoryObj = {
  render: renderWithLargeLabel,
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE,
  },
};
