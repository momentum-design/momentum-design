import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../menuitem';
import { ORIENTATION } from './menubar.constants';

const render = (args: Args) => html`
  <mdc-menubar aria-orientation="${args['aria-orientation']}">
    <mdc-menuitem label="File"></mdc-menuitem>
    <mdc-menuitem label="Edit"></mdc-menuitem>
    <mdc-menuitem label="View"></mdc-menuitem>
    <mdc-menuitem label="Tools"></mdc-menuitem>
    <mdc-menuitem label="Run"></mdc-menuitem>
    <mdc-menuitem label="Terminal"></mdc-menuitem>
    <mdc-menuitem label="Window"></mdc-menuitem>
    <mdc-menuitem label="Help"></mdc-menuitem>
  </mdc-menubar>`;

const meta: Meta = {
  title: 'Work In Progress/menu/menubar',
  tags: ['autodocs'],
  component: 'mdc-menubar',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    'aria-orientation': {
      control: 'select',
      options: Object.values(ORIENTATION),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'aria-orientation': ORIENTATION.HORIZONTAL,
  },
};
