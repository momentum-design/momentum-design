import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-virtualizedwrapper .count="${args.count}" .onScroll="${args.onScroll}"></mdc-virtualizedwrapper>`;

const meta: Meta = {
  title: 'Work In Progress/virtualizedwrapper',
  tags: ['autodocs'],
  component: 'mdc-virtualizedwrapper',
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
    count: 200,
  },
};

// classenames
// more virtualizer props
// understanding of how this works in react land
