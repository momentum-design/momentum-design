import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import './virtualizedlist.helper.test';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-virtualizedwrapper
    .virtualizerProps=${args.virtualizerProps}
    .onscroll=${args.onscroll}
  ></mdc-virtualizedwrapper>`;

const meta: Meta = {
  title: 'Components/virtualizedlist',
  tags: ['autodocs'],
  component: 'mdc-virtualizedlist',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    ...disableControls(['scrollElementRef', 'virtualizer', 'virtualizerController']),
    virtualizerProps: {
      description: `Props to send to Tanstack virtual. Please reference 
      [Tanstack Virtualizer API](https://tanstack.com/virtual/latest/docs/api/virtualizer) docs for more 
      about all possible props.`,
      control: 'object',
    },
    onscroll: {
      description: `Function that gets called when user scrolls in list. 
      Can be used to access the scroll container in order to 
      handle scrolling logic such as user scrolls to top or bottom.`,
      type: 'function',
      table: { defaultValue: { summary: 'undefined' } },
    },
    setlistdata: {
      description: `A function that is passed in that when called, will udpate the state of the parent component.
      This is necessary so that updates inside of virtualizedlist also 
      rerender the parent with any appropriate updates.`,
      type: 'function',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    virtualizerProps: { count: 200, estimateSize: () => 100, overscan: 30 },
  },
};
