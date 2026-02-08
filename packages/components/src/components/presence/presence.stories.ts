import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import { disableControls, hideAllControls } from '../../../config/storybook/utils';
import { ROLE } from '../../utils/roles';

import { PRESENCE_TYPE, PRESENCE_SIZE, DEFAULTS } from './presence.constants';

const render = (args: Args) => html` <mdc-presence type="${args.type}" size="${args.size}"></mdc-presence> `;

const meta: Meta = {
  title: 'Components/avatar/presence',
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

export const AllPresenceTypes: StoryObj = {
  render: () => html`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="${ROLE.MAIN}">
      ${repeat(
        Object.values(PRESENCE_TYPE),
        presence => html`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-presence type="${presence}"></mdc-presence>
            <span>${presence}</span>
          </div>
        `,
      )}
    </div>
  `,
  ...hideAllControls(),
};

export const AllPresenceSizes: StoryObj = {
  render: () => html`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="${ROLE.MAIN}">
      ${repeat(
        Object.values(PRESENCE_SIZE),
        size => html`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-presence size="${size}"></mdc-presence>
            <span>size: ${size}</span>
          </div>
        `,
      )}
    </div>
  `,
  args: {
    type: DEFAULTS.TYPE,
  },
  ...hideAllControls(),
};
