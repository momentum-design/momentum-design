import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { PRESENCE_TYPE, PRESENCE_SIZE, DEFAULTS } from './presence.constants';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-presence type="${args.type}" size="${args.size}"></mdc-presence>
`;

const meta: Meta = {
  title: 'Work In Progress/presence',
  tags: ['autodocs'],
  component: 'mdc-presence',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    type: {
      options: Object.values(PRESENCE_TYPE),
      control: { type: 'select' },
    },
    size: {
      options: Object.values(PRESENCE_SIZE),
      control: { type: 'select' },
    },
    ...disableControls(['iconSize', 'icon']),
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    size: DEFAULTS.SIZE,
  },
};
