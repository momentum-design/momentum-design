import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../checkbox';
import '../toggle';

const render = (args: Args) => html`
  <mdc-formfieldgroup
    header-text="${args['header-text']}"
    description-text="${args['description-text']}"
    data-aria-label="${args['data-aria-label']}"
  >
    ${args.children}
  </mdc-formfieldgroup>`;

const meta: Meta = {
  title: 'Components/formfieldgroup',
  tags: ['autodocs'],
  component: 'mdc-formfieldgroup',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    'header-text': {
      control: 'text',
    },
    'description-text': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    children: {
      description: 'The html content which can be placed inside the formfieldgroup component.',
      control: 'object',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Header text',
    'description-text': 'This is an example description text.',
    'data-aria-label': 'Header text aria label',
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
    'header-text': 'Select your Avengers team',
    'description-text': 'The team captain should have previous challenging situations.',
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
    'header-text': 'Engine thrusters',
    'description-text': 'Select all the thrusters you would like to turn on.',
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
