import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { BUTTON_VARIANTS } from '../button/button.constants';
import { BUTTON_GROUP_ORIENTATION, BUTTON_GROUP_SIZE } from './buttongroup.constants';
import { disableControls } from '../../../config/storybook/utils';
import '../button';
import '../popover';

const render = (args: Args) => html`
  <mdc-buttongroup
    variant="${args.variant}"
    orientation="${args.orientation}"
    size="${args.size}"
    ?compact="${args.compact}">
    ${args.children}
    </mdc-buttongroup>`;

const meta: Meta = {
  title: 'Components/buttongroup',
  tags: ['autodocs'],
  component: 'mdc-buttongroup',
  render,
  parameters: {
    badges: ['stable'],
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
    compact: {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
    ...disableControls(['children']),
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
      <mdc-button prefix-icon="placeholder-bold" aria-label='icon button'></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label='icon button'></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label='icon button'></mdc-button>
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
      <mdc-button prefix-icon="arrow-up-bold" aria-label='arrow up button'></mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label='arrow down button'></mdc-button>
    `,
  },
};

export const CompactGroup: StoryObj = {
  args: {
    variant: BUTTON_VARIANTS.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[32],
    compact: true,
    children: html`
      <mdc-button prefix-icon="reply-bold" aria-label='reply button'></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label='reactions button'></mdc-button>
      <mdc-button prefix-icon="alert-active-bold" aria-label='alert active button'></mdc-button>
      <mdc-button prefix-icon="forward-message-bold" aria-label='forward message button'></mdc-button>
      <mdc-button prefix-icon="more-bold" aria-label='more button'></mdc-button>
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
      <mdc-button prefix-icon="microphone-muted-bold">Unmute</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label='arrow down button'></mdc-button>
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
      <mdc-button prefix-icon="raise-hand-bold" aria-label='raise hand button'></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label='reactions button'></mdc-button>
    `,
  },
};

export const ReactionGroup: StoryObj = {
  args: {
    variant: BUTTON_VARIANTS.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28],
    compact: false,
    children: html`
      <mdc-button>👍</mdc-button>
      <mdc-button>1</mdc-button>
    `,
  },
};

export const GroupWithPopover: StoryObj = {
  render: () => html`
  <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
  <mdc-button prefix-icon="camera-on-bold">Start Video</mdc-button>
  <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-1"></mdc-button>
  </mdc-buttongroup>
  <mdc-popover
    id="popover1"
    triggerID="popover-trigger-1"
    trigger="click"
    placement="bottom"
    show-arrow
    hide-on-escape>
    <mdc-text>Settings related to video options</mdc-text>
  </mdc-popover>
  `,
};
