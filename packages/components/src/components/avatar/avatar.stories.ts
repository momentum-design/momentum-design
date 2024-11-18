import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

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
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {
    src: 'https://picsum.photos/256',
    presence: 'active',
    alt: 'test',
    'icon-name': 'user-regular',
    'is-clickable': false,
  },
};
