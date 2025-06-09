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

const renderWithContent = (args: Args) => html`
<div style="display: flex; gap: 20px;">
  <div>
    <p>Normal content:</p>
    <button style="padding: 10px 20px;">Click me</button>
  </div>
  <div>
    <p>Skeleton wrapping content:</p>
    <mdc-skeleton
      type="${args.type}"
      class="${args.class}"
      style="${args.style}"
    >
      <button style="padding: 10px 20px;">Click me</button>
    </mdc-skeleton>
  </div>
</div>
`;

const renderResponsive = (args: Args) => html`
<div style="width: 100%; max-width: 400px; height: 200px; border: 2px dashed #ccc; position: relative;">
  <p style="position: absolute; top: -20px; left: 0; margin: 0; font-size: 12px;">
    Container (400px max-width, 200px height)
  </p>
  <mdc-skeleton
    type="${args.type}"
    width="${args.width}"
    height="${args.height}"
    class="${args.class}"
    style="${args.style}"
  ></mdc-skeleton>
</div>
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

export const WithContent: StoryObj = {
  render: renderWithContent,
  args: {
    type: SKELETON_TYPES.RECTANGULAR,
  },
};

export const ResponsiveContainer: StoryObj = {
  render: renderResponsive,
  args: {
    type: SKELETON_TYPES.RECTANGULAR,
    width: '100%',
    height: '100%',
  },
};
