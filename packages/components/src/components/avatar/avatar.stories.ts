import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { repeat } from 'lit/directives/repeat.js';
import '.';
import { html } from 'lit';
import { TYPE as PRESENCE_TYPE, SIZE as PRESENCE_SIZE } from '../presence/presence.constants';
import { DEFAULTS } from './avatar.constants';

const render = (args: Args) => html`
  <mdc-avatar
    alt="${args.alt}"
    aria-label="${args['aria-label']}"
    counter="${args.counter}"
    icon-name="${args['icon-name']}"
    initials="${args.initials}"
    presence="${args.presence}"
    size="${args.size}"
    src="${args.src}"
    ?is-clickable="${args['is-clickable']}"
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
      if: {
        arg: 'counter',
        exists: false,
      },
      control: 'select',
      options: Object.values(PRESENCE_TYPE),
    },
    size: {
      control: 'select',
      options: Object.values(PRESENCE_SIZE),
    },
    'icon-name': {
      control: 'text',
    },
    counter: {
      control: 'number',
    },
    'is-typing': {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
    },
  },
};

export default meta;

export const Image: StoryObj = {
  args: {
    size: 'xx_large',
    src: 'https://picsum.photos/id/63/256',
    initials: 'AK',
    'icon-name': 'placeholder-bold',
    'aria-label': 'An Avatar with Photo',
  },
};

export const Default: StoryObj = {
  args: {
    size: DEFAULTS.SIZE,
  },
};

export const Initials: StoryObj = {
  args: {
    initials: 'MD',
    size: 'xx_large',
  },
};

export const Counter: StoryObj = {
  args: {
    counter: 99,
    'is-clickable': true,
    size: 'x_large',
  },
};

export const Icon: StoryObj = {
  args: {
    'icon-name': 'placeholder-bold',
    size: 'x_small',
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
