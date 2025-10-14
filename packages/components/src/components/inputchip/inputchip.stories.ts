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
  },
};

export const WithIcon: StoryObj = {
  args: {
    label: 'Input Chip',
    'icon-name': 'placeholder-bold',
    'clear-aria-label': 'Clear',
  },
};

export const Error: StoryObj = {
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: true,
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
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

export const WithAvatarVariants: StoryObj = {
  render: () =>
    html` <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <mdc-inputchip label="Avatar Img" clear-aria-label="Clear" @remove="${action('remove')}">
        <mdc-avatar slot="prefix" src="${imageFixtures.avatar}" initials="AP"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Avatar Error Img" clear-aria-label="Clear" error @remove="${action('remove')}">
        <mdc-avatar slot="prefix" src="${imageFixtures.avatar}" initials="AE"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Avatar Disabled Img" clear-aria-label="Clear" disabled @remove="${action('remove')}">
        <mdc-avatar slot="prefix" src="${imageFixtures.avatar}" initials="AD"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Avatar Error Disabled Img" clear-aria-label="Clear" error disabled @remove="${action('remove')}">
        <mdc-avatar slot="prefix" src="${imageFixtures.avatar}" initials="ED"></mdc-avatar>
      </mdc-inputchip>
    </div>`,
};
