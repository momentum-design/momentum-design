import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

import { VARIANTS } from './alertchip.constants';

const render = (args: Args) =>
  html` <mdc-alertchip
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    variant="${args.variant}"
    label="${args.label}"
    icon-name="${args['icon-name']}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
  ></mdc-alertchip>`;

const meta: Meta = {
  title: 'Components/chip/alertchip',
  tags: ['autodocs'],
  component: 'mdc-alertchip',
  render,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS),
    },
    label: {
      control: 'text',
    },
    'icon-name': {
      control: 'text',
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['soft-disabled', 'size', 'role', 'type', 'active', 'disabled']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert',
  },
};

export const WithIcon: StoryObj = {
  args: {
    variant: VARIANTS.INFORMATIONAL,
    label: 'Announcement',
    'icon-name': 'announcement-regular',
  },
};

export const AllVariants: StoryObj = {
  render: () =>
    html` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(VARIANTS).map(
        variant => html` <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip> `,
      )}
    </div>`,
};
