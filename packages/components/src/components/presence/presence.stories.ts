import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { TYPE, SIZE, DEFAULTS } from './presence.constants';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-presence type="${args.type}" size="${args.size}"></mdc-presence>
`;

const meta: Meta = {
  title: 'Components/presence',
  tags: ['autodocs'],
  component: 'mdc-presence',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    type: {
      options: Object.values(TYPE),
      control: { type: 'select' },
    },
    size: {
      options: Object.values(SIZE),
      control: { type: 'select' },
    },
    ...disableControls(['iconSize', 'icon']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    size: DEFAULTS.SIZE,
  },
};
