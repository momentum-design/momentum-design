import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { repeat } from 'lit/directives/repeat.js';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { TYPE as PRESENCE_TYPE } from '../presence/presence.constants';
import { AVATAR_SIZE, DEFAULTS } from './avatar.constants';
import { disableControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-avatar
    counter="${ifDefined(args.counter)}"
    icon-name="${ifDefined(args['icon-name'])}"
    initials="${ifDefined(args.initials)}"
    presence="${ifDefined(args.presence)}"
    size="${ifDefined(args.size)}"
    src="${ifDefined(args.src)}"
    ?is-typing="${args['is-typing']}"
  ></mdc-avatar>
`;

const meta: Meta = {
  title: 'Components/avatar',
  tags: ['autodocs'],
  component: 'mdc-avatar',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    src: {
      control: 'text',
    },
    initials: {
      control: 'text',
    },
    presence: {
      control: 'select',
      options: Object.values(PRESENCE_TYPE),
    },
    size: {
      control: 'select',
      options: Object.values(AVATAR_SIZE),
    },
    'is-typing': {
      control: 'boolean',
    },
    'icon-name': {
      control: 'text',
    },
    counter: {
      control: 'number',
    },
    ...disableControls([
      '--mdc-avatar-default-background-color',
      '--mdc-avatar-default-foreground-color',
      '--mdc-avatar-loading-indicator-background-color',
      '--mdc-avatar-loading-indicator-foreground-color',
      '--mdc-avatar-loading-overlay-background-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    src: 'https://picsum.photos/id/63/256',
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

export const Size: StoryObj = {
  render: () => html`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
    ${repeat(Object.values(AVATAR_SIZE), (size) => html`
        <mdc-avatar size="${size}"></mdc-avatar>
      `)}
    </div>
  `,
  argTypes: {
    ...disableControls([
      'counter',
      'icon-name',
      'initials',
      'presence',
      'size',
      'src',
      'is-typing',
    ]),
  },
};

export const SizeWithPresence: StoryObj = {
  render: (args: Args) => html`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${repeat(Object.values(AVATAR_SIZE), (size) => html`
        <mdc-avatar
          src="${ifDefined(args.src)}"
          presence="${ifDefined(args.presence)}"
          ?is-typing="${args['is-typing']}"
          size="${size}"
        ></mdc-avatar>
      `)}
    </div>
  `,
  argTypes: {
    ...disableControls([
      'counter',
      'icon-name',
      'initials',
      'size',
    ]),
  },
  args: {
    src: 'https://picsum.photos/id/63/256',
    presence: 'active',
    'is-typing': false,
  },
};
