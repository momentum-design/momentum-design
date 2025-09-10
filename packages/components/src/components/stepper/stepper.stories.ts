import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import '../stepperitem';
import '../stepperconnector';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VARIANT } from '../stepperitem/stepperitem.constants';
import { ORIENTATION } from '../stepperconnector/stepperconnector.constants';

const render = (args: Args) =>
  html`<div style="height: 400px;">
    <mdc-stepper orientation="${args.orientation}" variant="${args.variant}">
      <mdc-stepperitem label="Step 1" status="completed" aria-label="Step 1, completed"></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 2"
        status="completed"
        help-text="Help text"
        aria-label="Step 2, completed"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 3"
        status="current"
        help-text="Help text"
        aria-label="Step 3, current"
        aria-current="step"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 4"
        status="error-incomplete"
        step-number="4"
        help-text="Error"
        aria-label="Step 4, error-incomplete"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 5"
        status="not-started"
        step-number="5"
        aria-label="Step 5, not-started"
      ></mdc-stepperitem>
    </mdc-stepper>
  </div>`;

const renderWithErrorCurrent = (args: Args) =>
  html`<div style="height: 400px;">
    <mdc-stepper orientation="${args.orientation}" variant="${args.variant}">
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 2" status="completed" help-text="Help text"></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 3" status="error-current" help-text="Error message"></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 4" status="error-incomplete" step-number="4" help-text="Error"></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 5" status="not-started" step-number="5"></mdc-stepperitem>
    </mdc-stepper>
  </div>`;

const renderWithLargeLabel = (args: Args) =>
  html`<div style="height: 400px;">
    <mdc-stepper orientation="${args.orientation}" variant="${args.variant}">
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="This is a very long label for step 2 that might not fit"
        status="current"
        help-text="Help text is also very long"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 3 with error"
        status="error-incomplete"
        step-number="3"
        help-text="Error message that is too long"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 4" status="not-started" step-number="4"></mdc-stepperitem>
    </mdc-stepper>
  </div>`;

const meta: Meta = {
  title: 'Components/stepper/stepper',
  tags: ['autodocs'],
  component: 'mdc-stepper',
  render,

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
