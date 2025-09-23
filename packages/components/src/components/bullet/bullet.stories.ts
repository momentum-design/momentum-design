import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls } from '../../../config/storybook/utils';

import { SIZE } from './bullet.constants';

const render = (args: Args) => html` <mdc-bullet size="${ifDefined(args.size)}"></mdc-bullet>`;

const meta: Meta = {
  title: 'Components/decorator/bullet',
  tags: ['autodocs'],
  component: 'mdc-bullet',
  render,
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(SIZE),
    },
    ...textControls([
      '--mdc-bullet-background-color',
      '--mdc-bullet-size-small',
      '--mdc-bullet-size-medium',
      '--mdc-bullet-size-large',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    size: SIZE.SMALL,
  },
};
