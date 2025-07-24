import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { ORIENTATION, STATUS } from './connector.constants';

const render = (args: Args) => html`
  <div style="width: 200px; height: 200px; display: flex; align-items: center;">
    <mdc-connector
      status="${args.status}"
      orientation="${args.orientation}"
      style="${args.style}"
      class="${args.class}"
    ></mdc-connector>
  </div>
`;

const meta: Meta = {
  title: 'Work In Progress/stepper/connector',
  tags: ['autodocs'],
  component: 'mdc-connector',
  render,
  parameters: {
    badges: ['wip'],
  },
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
