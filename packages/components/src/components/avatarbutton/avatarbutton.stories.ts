import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { TYPE as PRESENCE_TYPE } from '../presence/presence.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import { AVATAR_SIZE } from '../avatar/avatar.constants';

const render = (args: Args) => html`
  <mdc-avatarbutton
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    counter="${ifDefined(args.counter)}"
    icon-name="${ifDefined(args['icon-name'])}"
    initials="${ifDefined(args.initials)}"
    presence="${ifDefined(args.presence)}"
    size="${ifDefined(args.size)}"
    src="${ifDefined(args.src)}"
    ?is-typing="${args['is-typing']}"
    aria-label=${args['aria-label']}
  ></mdc-avatarbutton>
`;

const meta: Meta = {
  title: 'Components/avatarbutton',
  tags: ['autodocs'],
  component: 'mdc-avatarbutton',
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
    'aria-label': {
      control: 'text',
    },
    ...hideControls([
      'active',
      'disabled',
      'soft-disabled',
      'tabIndex',
      'role',
      'type',
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
    'aria-label': 'Avatar Button',
  },
};
