import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import './focusring.component';

const SHAPES = ['mds-div', 'mds-anchor', 'mds-button', 'mds-radio'];

const render = (args: Args) => html`
    <mdc-subcomponent-focusring shapeclass="${args.shapeclass}"></mdc-subcomponent-focusring>
`;

const meta: Meta = {
  title: 'Utils/focusring',
  tags: ['autodocs'],
  component: 'mdc-focusring',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    shapeclass: {
      options: SHAPES,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    shapeclass: SHAPES[0]
  },
};
