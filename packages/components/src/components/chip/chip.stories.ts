import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';
import iconsManifest from '@momentum-design/icons/dist/manifest.json';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls } from '../../../config/storybook/utils';
import { ROLE } from '../../utils/roles';

import { COLOR } from './chip.constants';

const render = (args: Args) =>
  html` <mdc-chip
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    color="${ifDefined(args.color)}"
    label="${ifDefined(args.label)}"
    icon-name="${ifDefined(args['icon-name'])}"
    ?disabled="${args.disabled}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    ariaStateKey="${ifDefined(args.ariaStateKey)}"
  ></mdc-chip>`;

const meta: Meta = {
  title: 'Components/chip/chip',
  tags: ['autodocs'],
  component: 'mdc-chip',
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
      control: 'select',
      options: Object.keys(iconsManifest),
    },
    disabled: {
      control: 'boolean',
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    ariaStateKey: {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls([
      'soft-disabled',
      'size',
      'role',
      'type',
      'active',
      'name',
      'value',
      '--mdc-button-background',
      '--mdc-button-border-color',
      '--mdc-button-height',
      '--mdc-button-text-color',
      'Slot Name: ""',
    ]),
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
    html` <div style="display: flex; gap: 0.5rem;" role="${ROLE.MAIN}">
      ${Object.values(COLOR).map(color => html` <mdc-chip color="${color}" label="${color}"></mdc-chip> `)}
    </div>`,
  ...hideAllControls(),
};
