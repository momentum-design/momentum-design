import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import './subcomponent-focusring.stories.utils';
import { DEFAULTS, SHAPES } from './subcomponent-focusring.constants';
import './subcomponent-focusring.stories.docs.mdx';

const render = (args: Args) => html` <mdc-subcomponent-focusring shape="${args.shape}"></mdc-subcomponent-focusring> `;

const meta: Meta = {
  title: 'Styling/Focus Ring',
  component: 'mdc-subcomponent-focusring',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    shape: {
      options: SHAPES,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    shape: DEFAULTS.SHAPE,
  },
};
