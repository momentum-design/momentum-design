import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../divider';
import '../menuitem';
import '../menupopover';
import { ORIENTATION } from './menubar.constants';

const render = (args: Args) => html`
  <mdc-menubar
    aria-orientation="${args['aria-orientation']}"
    style="width: 50rem; background: linear-gradient(to right, red, orange);"
  >
    <mdc-menuitem label="Home"></mdc-menuitem>
    <mdc-menuitem id="file-id" label="File"></mdc-menuitem>
    <mdc-menupopover triggerid="file-id">
      <mdc-menuitem label="New File"></mdc-menuitem>
      <mdc-menuitem label="New Window"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Open"></mdc-menuitem>
      <mdc-menuitem label="Open Folder"></mdc-menuitem>
      <mdc-menuitem id="open-recent" label="Open Recent">
        <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
      </mdc-menuitem>
      <mdc-menupopover triggerID="open-recent">
        <mdc-menuitem label="~/Documents/menu.ts"></mdc-menuitem>
        <mdc-menuitem label="~/Documents/popover.ts"></mdc-menuitem>
        <mdc-menuitem id="button-file" label="~/Documents/button">
          <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
        </mdc-menuitem>
        <mdc-menupopover triggerid="button-file">
          <mdc-menuitem label="~/Documents/button/button.ts"></mdc-menuitem>
          <mdc-menuitem label="~/Documents/button/button.html"></mdc-menuitem>
          <mdc-menuitem label="~/Documents/button/button.css"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem label="~/Documents/popover.css"></mdc-menuitem>
      </mdc-menupopover>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Save"></mdc-menuitem>
      <mdc-menuitem label="Save As..."></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem id="share-id" label="Share">
        <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
      </mdc-menuitem>
      <mdc-menupopover triggerID="share-id">
        <mdc-menuitem label="AirDrop"></mdc-menuitem>
        <mdc-menuitem label="Messages"></mdc-menuitem>
        <mdc-menuitem label="Notes"></mdc-menuitem>
        <mdc-menuitem label="Freeform"></mdc-menuitem>
        <mdc-menuitem label="Reminders"></mdc-menuitem>
      </mdc-menupopover>
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
  </mdc-menubar>
  <div style="height: 250px; width: 100%; background: linear-gradient(to right, red, orange);">
    <h1>This is the home page </h1>
  </div>
  `;

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
  render: (args: Args) => html`
    <mdc-menubar
      aria-orientation="${args['aria-orientation']}"
      style="width: 10rem; background: linear-gradient(to right, red, orange);"
    >
      <mdc-menuitem label="Home"></mdc-menuitem>
      <mdc-menuitem id="file-id" label="File"></mdc-menuitem>
      <mdc-menupopover triggerid="file-id">
        <mdc-menuitem label="New File"></mdc-menuitem>
        <mdc-menuitem label="New Window"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Open"></mdc-menuitem>
        <mdc-menuitem label="Open Folder"></mdc-menuitem>
        <mdc-menuitem id="open-recent" label="Open Recent">
          <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
        </mdc-menuitem>
        <mdc-menupopover triggerID="open-recent">
          <mdc-menuitem label="~/Documents/menu.ts"></mdc-menuitem>
          <mdc-menuitem label="~/Documents/popover.ts"></mdc-menuitem>
          <mdc-menuitem id="button-file" label="~/Documents/button">
            <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
          </mdc-menuitem>
          <mdc-menupopover triggerid="button-file">
            <mdc-menuitem label="~/Documents/button/button.ts"></mdc-menuitem>
            <mdc-menuitem label="~/Documents/button/button.html"></mdc-menuitem>
           <mdc-menuitem label="~/Documents/button/button.css"></mdc-menuitem>
          </mdc-menupopover>
          <mdc-menuitem label="~/Documents/popover.css"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Save"></mdc-menuitem>
        <mdc-menuitem label="Save As..."></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem id="share-id" label="Share">
          <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
      </mdc-menuitem>
      <mdc-menupopover triggerID="share-id">
        <mdc-menuitem label="AirDrop"></mdc-menuitem>
        <mdc-menuitem label="Messages"></mdc-menuitem>
        <mdc-menuitem label="Notes"></mdc-menuitem>
        <mdc-menuitem label="Freeform"></mdc-menuitem>
        <mdc-menuitem label="Reminders"></mdc-menuitem>
      </mdc-menupopover>
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
    <mdc-menuitem label="Terminal"></mdc-menuitem>
    <mdc-menuitem label="Window"></mdc-menuitem>
    <mdc-menuitem label="Help"></mdc-menuitem>
  </mdc-menubar>
  <div style="height: 250px; width: 100%; background: linear-gradient(to right, red, orange);">
    <h1>This is the home page </h1>
  </div>
  `,
  args: {
    'aria-orientation': ORIENTATION.VERTICAL,
  },
};
