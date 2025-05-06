import type { Meta, StoryObj } from '@storybook/web-components';
import '.';
import '../menuitem';
import '../button';
import '../divider';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = () => html`
  <mdc-button id="menu-button-trigger">Open menu in a lengthy button</mdc-button>
  <mdc-menupopover triggerid="menu-button-trigger">
    <mdc-menuitem label="Test 1"></mdc-menuitem>
    <mdc-menuitem label="Test 2"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Test 3"></mdc-menuitem>
  </mdc-menupopover>
  `;

const meta: Meta = {
  title: 'Work In Progress/menu/menupopover',
  tags: ['autodocs'],
  component: 'mdc-menupopover',
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
  args: {},
};
