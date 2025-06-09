import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { SKELETON_TYPES, DEFAULTS } from './skeleton.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
<mdc-skeleton
  type="${args.type}"
  width="${args.width}"
  height="${args.height}"
  class="${args.class}"
  style="${args.style}"
></mdc-skeleton>
`;

const meta: Meta = {
  title: 'Components/skeleton',
  tags: ['autodocs'],
  component: 'mdc-skeleton',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(SKELETON_TYPES),
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    ...disableControls([
      '--skeleton-width',
      '--skeleton-height',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    width: '200px',
    height: '100px',
  },
};

export const Rectangular: StoryObj = {
  args: {
    type: SKELETON_TYPES.RECTANGULAR,
    width: '200px',
    height: '100px',
  },
};

export const Rounded: StoryObj = {
  args: {
    type: SKELETON_TYPES.ROUNDED,
    width: '200px',
    height: '100px',
  },
};

export const Circular: StoryObj = {
  args: {
    type: SKELETON_TYPES.CIRCULAR,
    width: '80px',
    height: '80px',
  },
};

export const Text: StoryObj = {
  args: {
    type: SKELETON_TYPES.TEXT,
    width: '200px',
  },
};
