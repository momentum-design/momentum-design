import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { TYPE as PRESENCE_TYPE, SIZE as PRESENCE_SIZE } from '../presence/presence.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-avatarbutton
    counter="${ifDefined(args.counter)}"
    icon-name="${ifDefined(args['icon-name'])}"
    initials="${ifDefined(args.initials)}"
    presence="${ifDefined(args.presence)}"
    size="${ifDefined(args.size)}"
    src="${ifDefined(args.src)}"
    ?is-typing="${args['is-typing']}"
  ></mdc-avatarbutton>
`;

const meta: Meta = {
  title: 'Work In Progress/avatarbutton',
  tags: ['autodocs'],
  component: 'mdc-avatarbutton',
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
    ...hideControls([
      'active',
      'color',
      'disabled',
      'soft-disabled',
      'postfix-icon',
      'prefix-icon',
      'role',
      'softDisabled',
      'tabIndex',
      'type',
      'variant',
      'avatarSize',
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
    size: 'x_large',
    'icon-name': '',
    'is-typing': '',
  },
};
