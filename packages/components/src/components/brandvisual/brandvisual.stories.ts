import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-brandvisual 
    class="${args.class}"
    name="${args.name}"
    style="${args.style}"
  ></mdc-brandvisual>`;

const meta: Meta = {
  title: 'Work In Progress/brandvisual',
  tags: ['autodocs'],
  component: 'mdc-brandvisual',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    name: {
      control: 'text',
    },
    ...hideControls([
      'iconData',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    name: 'cisco-logo-dark-bw',
    style: 'display: block; height: 100px; width: 100px;',
  },
};
