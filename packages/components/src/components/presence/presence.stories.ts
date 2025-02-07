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
    ...disableControls([
      'icon',
      'iconSize',
      '--mdc-presence-active-background-color',
      '--mdc-presence-away-background-color',
      '--mdc-presence-away-calling-background-color',
      '--mdc-presence-busy-background-color',
      '--mdc-presence-dnd-background-color',
      '--mdc-presence-meeting-background-color',
      '--mdc-presence-on-call-background-color',
      '--mdc-presence-on-device-background-color',
      '--mdc-presence-on-mobile-background-color',
      '--mdc-presence-pause-background-color',
      '--mdc-presence-pto-background-color',
      '--mdc-presence-presenting-background-color',
      '--mdc-presence-quiet-background-color',
      '--mdc-presence-scheduled-background-color',
      '--mdc-presence-overlay-background-color',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    size: DEFAULTS.SIZE,
  },
};
