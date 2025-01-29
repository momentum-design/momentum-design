import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import '.'; // Ensure the component is imported
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-virtualizedlist
    className=${args.className}
    .onScroll=${args.onScroll}
    .count=${args.count}
  ></mdc-virtualizedlist>
`;

const meta: Meta = {
  title: 'Components/virtualizedlist',
  tags: ['autodocs'],
  component: 'mdc-virtualizedlist',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    // virtualizerProps: {
    //   control: { type: 'object' },
    // },
    onScroll: {
      action: 'scrolled',
    },
    count: {
      control: { type: 'number' },
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    className: 'my-custom-class',
    // virtualizerProps: {
    //   // Provide any default props for the virtualizer here
    // },
    onScroll: (e) => console.log('Scrolled!', e),
    count: 200,
  },
};
