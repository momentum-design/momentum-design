import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../checkbox';
import { POPOVER_PLACEMENT, STRATEGY } from '../popover/popover.constants';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import '../toggle';

const render = (args: Args) =>
  html` <mdc-formfieldgroup
    label="${args.label}"
    help-text="${args['help-text']}"
    data-aria-label="${args['data-aria-label']}"
    toggletip-text="${args['toggletip-text']}"
    toggletip-placement="${args['toggletip-placement']}"
    toggletip-strategy="${args['toggletip-strategy']}"
    info-icon-aria-label="${args['info-icon-aria-label']}"
    ?required=${args.required}
    help-text-type="${args['help-text-type']}"
  >
    ${args.children}
  </mdc-formfieldgroup>`;

const meta: Meta = {
  title: 'Components/formfieldgroup',
  tags: ['autodocs'],
  component: 'mdc-formfieldgroup',
  render,

  argTypes: {
    label: {
      control: 'text',
    },
    'help-text': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    'toggletip-text': {
      control: 'text',
    },
    'toggletip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'toggletip-strategy': {
      control: 'select',
      options: Object.values(STRATEGY),
    },
    'info-icon-aria-label': {
      control: 'text',
    },
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    children: {
      description: 'The html content which can be placed inside the formfieldgroup component.',
      control: 'object',
    },
    ...hideControls(['disabled']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Group label',
    'help-text': 'This is an example help text.',
    'data-aria-label': 'Label text aria label',
    'help-text-type': 'default',
    children: html`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    `,
  },
};

export const GroupWithoutHelpText: StoryObj = {
  args: {
    label: 'Group label',
    'data-aria-label': 'Label text aria label',
    children: html`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    `,
  },
};

export const CheckboxGroup: StoryObj = {
  args: {
    label: 'Select your Avengers team',
    'help-text': 'The team captain should have previous challenging situations.',
    'data-aria-label': 'Select one of the Avengers',
    children: html`
      <mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>
    `,
  },
};

export const ToggleGroup: StoryObj = {
  args: {
    label: 'Engine thrusters',
    'help-text': 'Select all the thrusters you would like to turn on.',
    'data-aria-label': 'Select one of the engine thrusters',
    children: html`
      <mdc-toggle label="Left Thruster 1"></mdc-toggle>
      <mdc-toggle label="Left Thruster 2"></mdc-toggle>
      <mdc-toggle label="Left Thruster 3"></mdc-toggle>
      <mdc-toggle label="Right Thruster 1"></mdc-toggle>
      <mdc-toggle label="Right Thruster 2"></mdc-toggle>
      <mdc-toggle label="Right Thruster 3"></mdc-toggle>
    `,
  },
};
