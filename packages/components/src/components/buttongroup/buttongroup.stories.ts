import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { BUTTON_VARIANTS } from '../button/button.constants';
import { BUTTON_GROUP_ORIENTATION, BUTTON_GROUP_SIZE } from './buttongroup.constants';
import '../button';

const render = (args: Args) => html`
  <mdc-buttongroup
    variant="${args.variant}"
    orientation="${args.orientation}"
    size="${args.size}"
    ?compact="${args.compact}">
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
    compact: {
      control: 'boolean',
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
    compact: false,
    children: html`
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
    `,
  },
};

export const VerticalGroup: StoryObj = {
  args: {
    variant: BUTTON_VARIANTS.TERTIARY,
    orientation: BUTTON_GROUP_ORIENTATION.VERTICAL,
    size: BUTTON_GROUP_SIZE[28],
    compact: false,
    children: html`
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
    `,
  },
};

export const CompactGroup: StoryObj = {
  args: {
    variant: BUTTON_VARIANTS.PRIMARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28],
    compact: true,
    children: html`
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold"></mdc-button>
    `,
  },
};

export const SpiltPillButton: StoryObj = {
  args: {
    variant: BUTTON_VARIANTS.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28],
    compact: false,
    children: html`
      <mdc-button prefix-icon="microphone-muted">Unmute</mdc-button>
      <mdc-button prefix-icon="arrow-down"></mdc-button>
    `,
  },
};

export const SpiltIconButton: StoryObj = {
  args: {
    variant: BUTTON_VARIANTS.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28],
    compact: false,
    children: html`
      <mdc-button prefix-icon="camera-on"></mdc-button>
      <mdc-button prefix-icon="arrow-down"></mdc-button>
    `,
  },
};
