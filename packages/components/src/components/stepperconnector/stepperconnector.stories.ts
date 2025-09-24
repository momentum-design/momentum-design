import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { ORIENTATION, STATUS } from './stepperconnector.constants';

const render = (args: Args) => html`
  <div style="width: 200px; height: 200px; display: flex; align-items: center;">
    <mdc-stepperconnector
      status="${args.status}"
      orientation="${args.orientation}"
      style="${args.style}"
      class="${args.class}"
    ></mdc-stepperconnector>
  </div>
`;

const meta: Meta = {
  title: 'Components/stepper/stepperconnector',
  tags: ['autodocs'],
  component: 'mdc-stepperconnector',
  render,

  argTypes: {
    status: {
      control: 'radio',
      options: Object.values(STATUS),
    },
    orientation: {
      control: 'radio',
      options: Object.values(ORIENTATION),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.HORIZONTAL,
  },
};

export const IncompleteHorizontal: StoryObj = {
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.HORIZONTAL,
  },
};

export const CompleteHorizontal: StoryObj = {
  args: {
    status: STATUS.COMPLETE,
    orientation: ORIENTATION.HORIZONTAL,
  },
};

export const IncompleteVertical: StoryObj = {
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.VERTICAL,
  },
};

export const CompleteVertical: StoryObj = {
  args: {
    status: STATUS.COMPLETE,
    orientation: ORIENTATION.VERTICAL,
  },
};
