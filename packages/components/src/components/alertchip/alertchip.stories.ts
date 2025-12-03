import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import iconsManifest from '@momentum-design/icons/dist/manifest.json';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls } from '../../../config/storybook/utils';

import { VARIANTS } from './alertchip.constants';

const render = (args: Args) =>
  html` <mdc-alertchip
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    variant="${ifDefined(args.variant)}"
    label="${ifDefined(args.label)}"
    icon-name="${ifDefined(args['icon-name'])}"
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
      control: 'select',
      options: Object.keys(iconsManifest),
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls([
      'soft-disabled',
      'size',
      'role',
      'type',
      'active',
      'disabled',
      'name',
      'value',
      'tabIndex',
      'ariaStateKey',
    ]),
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
  ...hideAllControls(),
};
