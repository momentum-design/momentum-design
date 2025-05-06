import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../divider';
import '../menuitem';
import '../menupopover';
import { ORIENTATION } from './menubar.constants';

const render = (args: Args) => html`
  <mdc-menubar aria-orientation="${args['aria-orientation']}" style="width: 50rem;">
    <mdc-menuitem id="file-id" label="File"></mdc-menuitem>
    <mdc-menupopover triggerid="file-id">
      <mdc-menuitem label="New File"></mdc-menuitem>
      <mdc-menuitem label="New Window"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Open"></mdc-menuitem>
      <mdc-menuitem label="Open Folder"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Save"></mdc-menuitem>
      <mdc-menuitem label="Save As..."></mdc-menuitem>
    </mdc-menupopover>
    <mdc-menuitem id="edit-id" label="Edit"></mdc-menuitem>
    <mdc-menupopover triggerid="edit-id">
      <mdc-menuitem label="Undo"></mdc-menuitem>
      <mdc-menuitem label="Redo"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Cut"></mdc-menuitem>
      <mdc-menuitem label="Copy"></mdc-menuitem>
      <mdc-menuitem label="Paste"></mdc-menuitem>
    </mdc-menupopover>
    <mdc-menuitem id="view-id" label="View"></mdc-menuitem>
    <mdc-menupopover triggerid="view-id">
      <mdc-menuitem label="Zoom In"></mdc-menuitem>
      <mdc-menuitem label="Zoom Out"></mdc-menuitem>
    </mdc-menupopover>
    <mdc-menuitem label="Tools"></mdc-menuitem>
    <mdc-menuitem id="terminal-id" label="Terminal"></mdc-menuitem>
    <mdc-menupopover triggerid="terminal-id">
      <mdc-menuitem label="New Terminal"></mdc-menuitem>
      <mdc-menuitem label="Open Terminal"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Run Task"></mdc-menuitem>
      <mdc-menuitem label="Build Task"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Configure Task"></mdc-menuitem>
    </mdc-menupopover>
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

export const VerticalMenuBar: StoryObj = {
  args: {
    'aria-orientation': ORIENTATION.VERTICAL,
  },
};
