import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

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
      options: ['complete', 'incomplete'],
      description: 'Status of the connector',
      defaultValue: 'incomplete',
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the connector',
      defaultValue: 'horizontal',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    status: 'incomplete',
    orientation: 'horizontal',
  },
};

export const IncompleteHorizontal: StoryObj = {
  args: {
    status: 'incomplete',
    orientation: 'horizontal',
  },
};

export const CompleteHorizontal: StoryObj = {
  args: {
    status: 'complete',
    orientation: 'horizontal',
  },
};

export const IncompleteVertical: StoryObj = {
  args: {
    status: 'incomplete',
    orientation: 'vertical',
  },
};

export const CompleteVertical: StoryObj = {
  args: {
    status: 'complete',
    orientation: 'vertical',
  },
};
