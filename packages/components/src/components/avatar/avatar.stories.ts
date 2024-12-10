import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { repeat } from 'lit/directives/repeat.js';
import '.';
import { html } from 'lit';
import { TYPE as PRESENCE_TYPE, SIZE as PRESENCE_SIZE } from '../presence/presence.constants';
import { DEFAULTS } from './avatar.constants';
import { disableControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-avatar
    alt="${args.alt}"
    counter="${args.counter}"
    icon-name="${args['icon-name']}"
    initials="${args.initials}"
    presence="${args.presence}"
    size="${args.size}"
    src="${args.src}"
    ?is-typing="${args['is-typing']}"
  ></mdc-avatar>
`;

const meta: Meta = {
  title: 'Work In Progress/avatar',
  tags: ['autodocs'],
  component: 'mdc-avatar',
  render,
  parameters: {
    badges: ['wip'],
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
      options: Object.values(PRESENCE_SIZE),
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
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Image: StoryObj = {
  argTypes: {
    ...disableControls([
      'counter',
      'icon-name',
    ]),
  },
  args: {
    size: PRESENCE_SIZE.X_LARGE,
    src: 'https://picsum.photos/id/63/256',
    initials: 'AK',
    'icon-name': 'placeholder-bold',
  },
};

export const Example: StoryObj = {
  args: {
    src: '',
    initials: 'MD',
    counter: '',
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
    ${repeat(Object.values(PRESENCE_SIZE), (size) => html`
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
    ]),
  },
};

export const SizeWithPresence: StoryObj = {
  render: (args: Args) => html`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${repeat(Object.values(PRESENCE_SIZE), (size) => html`
        <mdc-avatar
          src="${args.src}"
          presence="${args.presence}"
          ?is-typing="${args['is-typing']}"
          size="${size}"
        ></mdc-avatar>
      `)}
    </div>
  `,
  args: {
    src: 'https://picsum.photos/id/63/256',
    presence: 'active',
    'is-typing': false,
  },
};
