import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { PRESENCE_SIZE } from '../presence/presence.constants';

const render = (args: Args) => html`
  <mdc-avatar
    src="${args.src}"
    size="${args.size}"
    icon-name="${args['icon-name']}"
    alt="${args.alt}"
    initials="${args.initials}"
    counter="${args.counter}"
    presence="${args.presence}"
    ?is-clickable="${args['is-clickable']}"
  ></mdc-avatar>
`;

const meta: Meta = {
  title: 'Work In Progress/avatar',
  component: 'mdc-avatar',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(PRESENCE_SIZE),
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    src: 'https://picsum.photos/256',
    presence: 'active',
    initials: 'ma',
    counter: '1',
    size: 'xx_large',
    'is-clickable': true,
  },
};
