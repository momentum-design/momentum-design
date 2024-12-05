import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { MARKER_VARIANTS } from './marker.constants';

const render = (args: Args) => html`
  <div style="height: 50px">
    <mdc-marker variant="${args.variant}" class="${args.class}" style="${args.style}"></mdc-marker>
  </div> 
`;

const meta: Meta = {
  title: 'Work In Progress/marker',
  tags: ['autodocs'],
  component: 'mdc-marker',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(MARKER_VARIANTS),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: MARKER_VARIANTS.SOLID,
  },
};
