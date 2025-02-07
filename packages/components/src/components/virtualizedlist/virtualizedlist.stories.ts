import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-virtualizedwrapper
    .virtualizerprops=${args.virtualizerprops}
    .handlescroll=${args.handlescroll}
  ></mdc-virtualizedwrapper>`;

const meta: Meta = {
  title: 'Work In Progress/virtualizedlist',
  tags: ['autodocs'],
  component: 'mdc-virtualizedlist',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    virtualizerprops: {
      description: `Props to send to Tanstack virtual. Please reference 
      [Tanstack Virtualizer API](https://tanstack.com/virtual/latest/docs/api/virtualizer) docs for more 
      about all possible props.`,
      control: 'object',
    },
    handlescroll: {
      description: `Callback that gets called when user scrolls in list. 
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
    virtualizerprops: { count: 200, estimateSize: () => 100 },
  },
};
