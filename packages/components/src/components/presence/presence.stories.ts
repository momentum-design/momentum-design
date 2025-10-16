import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { disableControls } from '../../../config/storybook/utils';

import { PRESENCE_TYPE, PRESENCE_SIZE, DEFAULTS } from './presence.constants';

const render = (args: Args) => html` <mdc-presence type="${args.type}" size="${args.size}"></mdc-presence> `;

const meta: Meta = {
  title: 'Components/presence',
  tags: ['autodocs'],
  component: 'mdc-presence',
  render,
  argTypes: {
    type: {
      options: Object.values(PRESENCE_TYPE),
      control: { type: 'select' },
    },
    size: {
      options: Object.values(PRESENCE_SIZE),
      control: { type: 'select' },
    },
    ...disableControls(['icon']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    size: DEFAULTS.SIZE,
  },
};
