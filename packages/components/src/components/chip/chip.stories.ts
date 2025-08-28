import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, textControls } from '../../../config/storybook/utils';

import { COLOR } from './chip.constants';

const render = (args: Args) =>
  html` <mdc-chip
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    color="${args.color}"
    label="${args.label}"
    icon-name="${args['icon-name']}"
    ?disabled="${args.disabled}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
  ></mdc-chip>`;

const meta: Meta = {
  title: 'Components/chip/label',
  tags: ['autodocs'],
  component: 'mdc-chip',
  render,
  parameters: {
    badges: ['stable'],
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
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
    ...textControls(['--mdc-chip-color', '--mdc-chip-border-color', '--mdc-chip-background-color']),
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
  render: () =>
    html` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(COLOR).map(color => html` <mdc-chip color="${color}" label="${color}"></mdc-chip> `)}
    </div>`,
};
