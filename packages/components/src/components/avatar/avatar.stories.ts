import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { repeat } from 'lit/directives/repeat.js';
import '.';
import iconsManifest from '@momentum-design/icons/dist/manifest.json';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { PRESENCE_TYPE } from '../presence/presence.constants';
import { describeStory, disableControls, hideAllControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { ROLE } from '../../utils/roles';

import { AVATAR_SIZE, DEFAULTS } from './avatar.constants';

const render = (args: Args) => html`
  <mdc-avatar
    counter="${ifDefined(args.counter)}"
    icon-name="${ifDefined(args['icon-name'])}"
    initials="${ifDefined(args.initials)}"
    presence="${args.presence === 'none' ? undefined : ifDefined(args.presence)}"
    size="${ifDefined(args.size)}"
    src="${ifDefined(args.src)}"
    ?is-typing="${args['is-typing']}"
  ></mdc-avatar>
`;

const meta: Meta = {
  title: 'Components/avatar/avatar',
  tags: ['autodocs'],
  component: 'mdc-avatar',
  render,
  argTypes: {
    src: {
      control: 'text',
    },
    initials: {
      control: 'text',
    },
    presence: {
      control: 'select',
      options: ['none', ...Object.values(PRESENCE_TYPE)],
    },
    size: {
      control: 'select',
      options: Object.values(AVATAR_SIZE),
    },
    'is-typing': {
      control: 'boolean',
    },
    'icon-name': {
      control: 'select',
      options: Object.keys(iconsManifest),
    },
    counter: {
      control: 'number',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
  },
};

export const Fallback: StoryObj = {
  args: {
    size: DEFAULTS.SIZE,
  },
};

export const TypingState: StoryObj = {
  args: {
    'is-typing': true,
    src: imageFixtures.avatar,
    size: 88,
    presence: PRESENCE_TYPE.BUSY,
  },
  ...describeStory(
    html`<ul>
      <li>When the is-typing is true, then presence will not be displayed.</li>
    </ul>`,
  ),
};

export const Counter: StoryObj = {
  args: {
    counter: 999,
    size: 88,
  },
  ...describeStory(
    html`<ul>
      <li>Displays a counter text on the avatar component.</li>
      <li>
        The maximum number is 99 and if the given number is greater than 99, <br />
        then the avatar will be displayed as 99+.
      </li>
      <li>If the given number is a negative number, then the avatar will be displayed as 0.</li>
      <li>When the counter variable is provided, then presence will not be displayed.</li>
    </ul>`,
  ),
};

export const AllPresenceTypes: StoryObj = {
  render: () => html`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="${ROLE.MAIN}">
      ${repeat(
        Object.values(PRESENCE_TYPE),
        presence => html`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-avatar src="${imageFixtures.avatar}" presence="${presence}" size="64"></mdc-avatar>
            <span>${presence}</span>
          </div>
        `,
      )}
    </div>
  `,
  ...hideAllControls(),
  ...describeStory(
    html`<ul>
      <li>
        This story demonstrates how presence statuses are displayed when integrated into the avatar component, as
        opposed to the standalone presence component story.
      </li>
    </ul>`,
  ),
};

export const AllSizes: StoryObj = {
  render: () => html`
    <div style="display: flex; justify-content: space-evenly; align-items: center" role="${ROLE.MAIN}">
      ${repeat(
        Object.values(AVATAR_SIZE),
        size => html`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-avatar size="${size}"></mdc-avatar>
            <span>Size: ${size}</span>
          </div>
        `,
      )}
    </div>
  `,
  ...hideAllControls(),
};

export const AllSizesWithPresence: StoryObj = {
  render: (args: Args) => html`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${repeat(
        Object.values(AVATAR_SIZE),
        size => html`
          <mdc-avatar
            src="${ifDefined(args.src)}"
            presence="${ifDefined(args.presence)}"
            ?is-typing="${args['is-typing']}"
            size="${size}"
          ></mdc-avatar>
        `,
      )}
    </div>
  `,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'size']),
  },
  args: {
    src: imageFixtures.avatar,
    presence: 'active',
    'is-typing': false,
  },
};
