import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) =>
  html` <mdc-textoverflowobserverprovider args.property="${args.property}"></mdc-textoverflowobserverprovider>`;

const meta: Meta = {
  title: 'Work In Progress/textoverflowobserverprovider',
  tags: ['autodocs'],
  component: 'mdc-textoverflowobserverprovider',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};
