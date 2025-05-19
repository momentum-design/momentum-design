import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { BUTTON_VARIANTS } from '../button/button.constants';
import { BUTTON_GROUP_ORIENTATION, BUTTON_GROUP_SIZE } from './buttongroup.constants';
import '../button';
import '../divider';

const render = (args: Args) => html`
  <mdc-buttongroup
    variant="${args.variant}"
    orientation="${args.orientation}"
    size="${args.size}">
    ${args.children}
    </mdc-buttongroup>`;

const meta: Meta = {
  title: 'Work In Progress/buttongroup',
  tags: ['autodocs'],
  component: 'mdc-buttongroup',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(BUTTON_VARIANTS),
    },
    orientation: {
      control: 'select',
      options: Object.values(BUTTON_GROUP_ORIENTATION),
    },
    size: {
      control: 'select',
      options: Object.values(BUTTON_GROUP_SIZE),
    },
    children: {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: BUTTON_VARIANTS.PRIMARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28],
    children: html`
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
    `,
  },
};
