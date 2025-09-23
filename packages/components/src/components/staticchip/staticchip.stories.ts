import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls } from '../../../config/storybook/utils';

import { COLOR } from './staticchip.constants';

const render = (args: Args) =>
  html` <mdc-staticchip color="${args.color}" label="${args.label}" icon-name="${args['icon-name']}"></mdc-staticchip>`;

const meta: Meta = {
  title: 'Components/chip/staticchip',
  tags: ['autodocs'],
  component: 'mdc-staticchip',
  render,

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
    ...classArgType,
    ...styleArgType,
    ...textControls(['--mdc-chip-color', '--mdc-chip-border-color', '--mdc-chip-background-color']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
  },
};

export const WithIcon: StoryObj = {
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
  },
};

export const AllColors: StoryObj = {
  render: () =>
    html` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(COLOR).map(color => html` <mdc-staticchip color="${color}" label="${color}"></mdc-staticchip> `)}
    </div>`,
};
