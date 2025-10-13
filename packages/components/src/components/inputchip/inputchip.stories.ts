import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../avatar';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';

const render = (args: Args) =>
  html` <mdc-inputchip
    @remove="${action('remove')}"
    label="${args.label}"
    icon-name="${args['icon-name']}"
    ?error="${args.error}"
    ?disabled="${args.disabled}"
    clear-aria-label="${args['clear-aria-label']}"
  ></mdc-inputchip>`;

const meta: Meta = {
  title: 'Components/chip/input',
  tags: ['autodocs'],
  component: 'mdc-inputchip',
  render,

  argTypes: {
    label: {
      control: 'text',
    },
    'icon-name': {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'clear-aria-label': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false,
  },
};

export const WithIcon: StoryObj = {
  args: {
    label: 'Input Chip',
    'icon-name': 'placeholder-bold',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false,
  },
};

export const Error: StoryObj = {
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: true,
    disabled: false,
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: true,
  },
};

export const StatesAndVariants: StoryObj = {
  render: () =>
    html` <div style="display: flex; gap: 0.5rem;">
      <mdc-inputchip
        label="Input"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        @click="${action('click')}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Error"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        error
        @click="${action('click')}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Disabled"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        disabled
        @click="${action('click')}"
      ></mdc-inputchip>
    </div>`,
};

export const WithRemove: StoryObj = {
  render: () => {
    const removeChip = (e: Event) => {
      (e.target as HTMLElement)?.remove();
    };
    return html` <mdc-inputchip
      @remove="${removeChip}"
      label="Value"
      icon-name="placeholder-bold"
      clear-aria-label="Clear"
    ></mdc-inputchip>`;
  },
};

export const WithAvatar: StoryObj = {
  render: () =>
    html` <mdc-inputchip label="John Doe" clear-aria-label="Remove John Doe" @remove="${action('remove')}">
      <mdc-avatar slot="prefix" size="20" initials="JD"></mdc-avatar>
    </mdc-inputchip>`,
};

export const WithAvatarPhoto: StoryObj = {
  render: () =>
    html` <mdc-inputchip label="Jane Smith" clear-aria-label="Remove Jane Smith" @remove="${action('remove')}">
      <mdc-avatar slot="prefix" size="20" src="${imageFixtures.avatar}" initials="JS"></mdc-avatar>
    </mdc-inputchip>`,
};

export const AvatarVariants: StoryObj = {
  render: () =>
    html` <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <mdc-inputchip label="John Doe" clear-aria-label="Clear" @remove="${action('remove')}">
        <mdc-avatar slot="prefix" size="20" initials="JD"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Jane Smith" clear-aria-label="Clear" @remove="${action('remove')}">
        <mdc-avatar slot="prefix" size="20" src="${imageFixtures.avatar}" initials="JS"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Team Lead" clear-aria-label="Clear" error @remove="${action('remove')}">
        <mdc-avatar slot="prefix" size="20" icon-name="user-regular"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Alex Johnson" clear-aria-label="Clear" disabled @remove="${action('remove')}">
        <mdc-avatar slot="prefix" size="20" initials="AJ"></mdc-avatar>
      </mdc-inputchip>
    </div>`,
};
