import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import './subcomponent-focusring.stories.utils';
import { FOCUS_RING_DESCRIPTION, SHAPES } from './subcomponent-focusring.constants';

const render = (args: Args) => html` <mdc-subcomponent-focusring shape="${args.shape}"></mdc-subcomponent-focusring> `;

const meta: Meta = {
  title: 'Styling/Focus Ring',
  tags: ['autodocs'],
  component: 'mdc-subcomponent-focusring',
  render,
  parameters: {
    badges: ['wip'],
    docs: {
      description: {
        component: FOCUS_RING_DESCRIPTION,
      },
    },
  },
  argTypes: {
    shape: {
      options: SHAPES,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    shape: SHAPES[0],
  },
};
