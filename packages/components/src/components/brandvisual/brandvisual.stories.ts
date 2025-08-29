import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-brandvisual
    class="${args.class}"
    name="${args.name}"
    style="${args.style}"
    altText="${args.altText}"
  ></mdc-brandvisual>`;

const meta: Meta = {
  title: 'Components/brandvisual',
  tags: ['autodocs'],
  component: 'mdc-brandvisual',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    name: {
      control: 'text',
    },
    altText: {
      control: 'text',
    },
    ...hideControls(['brandVisualData']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    name: 'momentum-design-logo-dark-color-vertical',
    style: 'display: block; height: 100px; width: 100px;',
  },
};
