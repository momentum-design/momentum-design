import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../toggle';

const render = (args: Args) => html`
  <mdc-togglegroup
    header-text="${args['header-text']}"
    description-text="${args['description-text']}"
  >
    <mdc-toggle label="Left Thruster 1"></mdc-toggle>
    <mdc-toggle label="Left Thruster 2" checked></mdc-toggle>
    <mdc-toggle label="Left Thruster 3"></mdc-toggle>
    <mdc-toggle label="Right Thruster 1" checked></mdc-toggle>
    <mdc-toggle label="Right Thruster 2"></mdc-toggle>
    <mdc-toggle label="Right Thruster 3"></mdc-toggle>
  </mdc-togglegroup>`;

const meta: Meta = {
  title: 'Work In Progress/togglegroup',
  tags: ['autodocs'],
  component: 'mdc-togglegroup',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Engine thrusters',
    'description-text': 'Select all the thrusters you would like to turn on.',
  },
};
