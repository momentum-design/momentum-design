import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import { COLOR } from './chip.constants';

const render = (args: Args) => html`
  <mdc-chip 
  @click="${action('onclick')}"
  @keydown="${action('onkeydown')}"
  @keyup="${action('onkeyup')}"
  @focus="${action('onfocus')}"
  color="${args.color}" 
  label="${args.label}"
  icon-name="${args['icon-name']}"
  ?disabled="${args.disabled}"
  avatar-initials="${args['avatar-initials']}"
  avatar-src="${args['avatar-src']}"></mdc-chip>`;

const meta: Meta = {
  title: 'Work In Progress/chip/label',
  tags: ['autodocs'],
  component: 'mdc-chip',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(COLOR),
    },
    label: {
      control: 'text',
    },
    'icon-name': {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'avatar-initials': {
      control: 'text',
    },
    'avatar-src': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['soft-disabled', 'size', 'role', 'type', 'active']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    'avatar-initials': 'AV',
    'avatar-src': 'https://picsum.photos/id/63/200',
    disabled: false,
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};
