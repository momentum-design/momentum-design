import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { PRESENCE_TYPE, PRESENCE_SIZE } from '../presence/presence.constants';

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
    presence: {
      control: 'select',
      options: Object.values(PRESENCE_TYPE),
    },
    size: {
      control: 'select',
      options: Object.values(PRESENCE_SIZE),
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    src: 'https://picsum.photos/256',
    alt: 'Lorem ipsum',
    initials: 'AK',
    counter: 100,
    'icon-name': 'placeholder-bold',
    'aria-label': 'An Avatar with Photo',
  },
};

export const Default: StoryObj = {
  args: {},
};

export const Image: StoryObj = {
  args: {
    src: 'https://picsum.photos/256',
    alt: 'Lorem ipsum',
  },
};
