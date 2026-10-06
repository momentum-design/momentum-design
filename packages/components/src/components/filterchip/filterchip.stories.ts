import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-filterchip
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    label="${args.label}"
    ?selected="${args.selected}"
    ?disabled="${args.disabled}"
  ></mdc-filterchip>`;

const meta: Meta = {
  title: 'Components/chip/filterchip',
  tags: ['autodocs'],
  component: 'mdc-filterchip',
  render,

  argTypes: {
    label: {
      control: 'text',
    },
    selected: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['soft-disabled', 'size', 'role', 'type', 'active', 'icon-name', 'color']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: false,
  },
};

export const Selected: StoryObj = {
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: false,
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: true,
  },
};

export const SelectedAndDisabled: StoryObj = {
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: true,
  },
};

export const StatesAndVariants: StoryObj = {
  render: () =>
    html` <div style="display: flex; gap: 0.5rem;">
      <mdc-filterchip label="Filterchip"></mdc-filterchip>
      <mdc-filterchip label="Selected" selected></mdc-filterchip>
      <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
    </div>`,
};

export const Motion: StoryObj = {
  render: () => html`
    <div role="main" style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Click each filter chip to observe selected/unselected motion on the background, border color, and checkmark
        icon. Wrap with <code>mdc-motionprovider</code> or enable OS reduced motion to verify instant updates.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mdc-filterchip label="In stock"></mdc-filterchip>
        <mdc-filterchip label="On sale"></mdc-filterchip>
        <mdc-filterchip label="Free shipping"></mdc-filterchip>
      </div>
    </div>
  `,
  ...hideAllControls(),
};
