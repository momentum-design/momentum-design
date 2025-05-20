import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';
import '../divider';
import '../menuitem';
import '../menupopover';
import '../textarea';
import { ORIENTATION } from './menubar.constants';

const render = (args: Args) => html`
  <mdc-menubar
    aria-orientation="${args['aria-orientation']}"
    @click="${action('onclick')}"
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
  <div style="height: 25rem; width: 100%; background: linear-gradient(to right, red, orange);">
    <div id="container">
      <h1>Select a menu item</h1>
    </div>
  </div>
  <script>
    var handleClick = (event) => {
      const activePage = event.target.getAttribute('label');
      const container = document.getElementById('container');
      if (activePage) {
        container.innerHTML = '<h1>You have clicked ' + activePage + '</h1>';
      }
    }
    document.addEventListener('click', handleClick);
  </script>
  <style>
    mdc-menubar {
      background: linear-gradient(to right, red, orange);
    }
    mdc-menubar[aria-orientation='horizontal'] {  
      width: 100%;
      height: 3rem;
    }
    mdc-menubar[aria-orientation='vertical'] {
      width: 10rem;
    }
  </style>
`;

const meta: Meta = {
  title: 'Work In Progress/menu/menubar',
  tags: ['autodocs'],
  component: 'mdc-menubar',
  render,
  parameters: {
    badges: ['wip'],
    docs: {
      source: {
        format: 'html',
        code: `
          <mdc-menubar aria-orientation="horizontal">
            <mdc-menuitem label="..."></mdc-menuitem>
            <mdc-menupopover triggerid="menu-id">
              <mdc-menuitem label="..."></mdc-menuitem>
              <mdc-menuitem id="sub-menu-id" label="..."></mdc-menuitem>
              <mdc-menupopover triggerid="sub-menu-id">
                <mdc-menuitem label="..."></mdc-menuitem>
                <mdc-menuitem label="..."></mdc-menuitem>
              </mdc-menupopover>
              <mdc-menuitem label="..."></mdc-menuitem>
            </mdc-menupopover>
            <mdc-menuitem label="..."></mdc-menuitem>
          </mdc-menubar>
        `,
      },
    },
  },
  argTypes: {
    'aria-orientation': {
      control: 'select',
      options: Object.values(ORIENTATION),
    },
    ...classArgType,
    ...styleArgType,
    ...disableControls([
      'slot',
    ]),
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

export const EditorMenuBar: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; width: 100%;">
      <mdc-menubar style="width: 10rem;">
        <mdc-menuitem id="file-id" label="File"></mdc-menuitem>
        <mdc-menupopover triggerid="file-id">
          <mdc-menuitem label="Open"></mdc-menuitem>
          <mdc-menuitem label="Save"></mdc-menuitem>
          <mdc-menuitem label="Save As"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem id="edit-id" label="Edit"></mdc-menuitem>
        <mdc-menupopover triggerid="edit-id">
          <mdc-menuitem label="Edit 1"></mdc-menuitem>
          <mdc-menuitem label="Edit 2"></mdc-menuitem>
          <mdc-menuitem label="Edit 3"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem id="view-id" label="View"></mdc-menuitem>
        <mdc-menupopover triggerid="view-id">
          <mdc-menuitem label="View 1"></mdc-menuitem>
          <mdc-menuitem label="View 2"></mdc-menuitem>
          <mdc-menuitem label="View 3"></mdc-menuitem>
        </mdc-menupopover>
      </mdc-menubar>
      <mdc-textarea cols="100" rows="15" value="This is a text area editor" style="width: 100%;"></mdc-textarea>
    </div>
  `,
};

export const SingleMenu: StoryObj = {
  render: () => html`
    <mdc-menubar style="width: 5rem;">
      <mdc-menuitem id="home-id" label="Single Menu"></mdc-menuitem>
      <mdc-menupopover triggerid="home-id">
        <mdc-menuitem label="Menu Item 1"></mdc-menuitem>
        <mdc-menuitem label="Menu Item 2"></mdc-menuitem>
        <mdc-menuitem label="Menu Item 3"></mdc-menuitem>
      </mdc-menupopover>
    </mdc-menubar>
  `,
};
