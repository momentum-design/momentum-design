import { html } from 'lit';
import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../popover';
import '../menupopover';
import '../menuitem';
import '../menuitemradio';
import '../menuitemcheckbox';
import '../dialog';

import { hideControls } from '../../../config/storybook/utils';

import { VALID_MEDIA_VALUES, VALID_POPOVER_POSITIONING_VALUES } from './responsivesettingsprovider.constants';

const render = (args: Args) => html`
  <mdc-responsivesettingsprovider
    ?force-fullscreen-dialog="${args['force-fullscreen-dialog']}"
    popover-positioning="${args['popover-positioning']}"
    media="${args.media}"
  >
  </mdc-responsivesettingsprovider>
`;

const meta: Meta = {
  title: 'WIP/responsivesettingsprovider',
  tags: ['autodocs'],
  component: 'mdc-responsivesettingsprovider',
  render,
  argTypes: {
    'force-fullscreen-dialog': {
      control: 'boolean',
    },
    'popover-positioning': {
      control: 'select',
      options: VALID_POPOVER_POSITIONING_VALUES,
    },
    media: {
      control: 'select',
      options: VALID_MEDIA_VALUES,
    },
    ...hideControls(['Context']),
  },
};

export default meta;

export const Example: StoryObj = {
  render: args => {
    const hideDialog = () => document.getElementById('dialog-id')!.removeAttribute('visible');
    const showDialog = () => document.getElementById('dialog-id')!.toggleAttribute('visible');

    return html`
      <mdc-responsivesettingsprovider
        ?force-fullscreen-dialog="${args['force-fullscreen-dialog']}"
        popover-positioning="${args['popover-positioning']}"
        media="${args.media}"
      >
        <div
          id="menupopover-test-wrapper"
          style="display: flex; justify-content: space-around; align-items: flex-start;"
        >
          <mdc-button id="popover-trigger">Popover trigger</mdc-button>
          <mdc-button id="menu-trigger">Menu trigger</mdc-button>
          <mdc-button @click="${showDialog}">Dialog trigger</mdc-button>
        </div>
        <mdc-popover triggerID="popover-trigger" placement="bottom" show-arrow>
          <div style="padding: 1rem; max-width: 200px;">
            This is a popover content. It should adjust its behavior based on the ResponsiveSettingsProvider settings.
          </div>
        </mdc-popover>

        <mdc-menupopover triggerID="menu-trigger" placement="bottom">
          <mdc-menuitem label="Profile"></mdc-menuitem>
          <mdc-menuitem id="submenu-trigger" label="Settings" arrow-position="trailing"></mdc-menuitem>
          <mdc-menuitem label="Notifications"></mdc-menuitem>
          <mdc-menuitem label="Logout" disabled></mdc-menuitem>
          <mdc-menusection headerText="Preferences">
            <mdc-menuitemcheckbox label="Enable feature" name="enableFeature"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Beta mode" checked name="betaMode"></mdc-menuitemcheckbox>
            <mdc-menuitemradio name="theme" value="light" label="Light" checked></mdc-menuitemradio>
            <mdc-menuitemradio name="theme" value="dark" label="Dark"></mdc-menuitemradio>
            <mdc-menuitemradio name="theme" value="system" label="System"></mdc-menuitemradio>
          </mdc-menusection>
          <mdc-menupopover triggerID="submenu-trigger" placement="right">
            <mdc-menupopover triggerID="security-id" placement="right-start">
              <mdc-menuitem label="Change Password"></mdc-menuitem>
              <mdc-menuitem label="Two-Factor Authentication"></mdc-menuitem>
              <mdc-menuitem label="Security Questions"></mdc-menuitem>
              <mdc-menusection headerText="Virtual background">
                <mdc-menuitemradio name="virtualbg" value="none" label="Off" checked></mdc-menuitemradio>
                <mdc-menuitemradio name="virtualbg" value="office" label="Office"></mdc-menuitemradio>
                <mdc-menuitemradio name="virtualbg" value="custom" label="Custom"></mdc-menuitemradio>
              </mdc-menusection>
            </mdc-menupopover>
            <mdc-menuitem label="Account"></mdc-menuitem>
            <mdc-menuitem label="Privacy" disabled></mdc-menuitem>
            <mdc-menuitem label="Security" id="security-id" arrow-position="trailing"></mdc-menuitem>
            <mdc-menuitem label="Advanced"></mdc-menuitem>
          </mdc-menupopover>
        </mdc-menupopover>

        <mdc-dialog
          id="dialog-id"
          triggerID="dialog-trigger"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-desc"
          @close="${hideDialog}"
        >
          <h2 id="dialog-title" slot="dialog-header">Responsive Dialog</h2>
          <div id="dialog-desc" slot="dialog-body">
            This dialog should open in fullscreen mode on smaller screens if the ResponsiveSettingsProvider is
            configured to do so.
          </div>
        </mdc-dialog>
      </mdc-responsivesettingsprovider>
    `;
  },
};
