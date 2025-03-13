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
  ?disabled="${args.disabled}"></mdc-chip>`;

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
    disabled: false,
  },
};

export const WithIcon: StoryObj = {
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: false,
  },
};

export const Disabled: StoryObj = {
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: true,
  },
};

export const AllColors: StoryObj = {
  render: () => html`
  <div style="display: flex; gap: 0.5rem;">
    ${Object.values(COLOR).map((color) => html`
      <mdc-chip color="${color}" label="${color}"></mdc-chip>
    `)}
  </div>`,
};
