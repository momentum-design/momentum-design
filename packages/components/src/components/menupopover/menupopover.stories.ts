import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../divider';
import '../menubar';
import '../menuitem';

const render = () => html`
  <div style="width: 50rem; height: 25rem;">
    <mdc-menubar>
      <mdc-menuitem id="menu-button-trigger" label="Open menu in a lengthy button"></mdc-menuitem>
      <mdc-menupopover triggerid="menu-button-trigger">
        <mdc-menuitem label="Test 1"></mdc-menuitem>
        <mdc-menuitem label="Test 2"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Test 3"></mdc-menuitem>
      </mdc-menupopover>
    </mdc-menubar>
  </div>
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
