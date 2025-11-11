import { html } from 'lit';
import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../popover';
import '../menupopover';
import '../menuitem';
import '../menuitemradio';
import '../menuitemcheckbox';
import '../dialog';
import '../announcementdialog';
import '../select';
import '../selectlistbox';
import '../option';
import '../combobox';
import '../button';
import '../tooltip';
import '../toggletip';
import '../coachmark';

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

    const showCoachmark = () => document.getElementById('coachmark-trigger')?.setAttribute('visible', 'true');
    const hideCoachmark = () => document.getElementById('coachmark-trigger')?.removeAttribute('visible');

    const hideAnnouncement = () => document.getElementById('announcement-id')!.removeAttribute('visible');
    const showAnnouncement = () => document.getElementById('announcement-id')!.toggleAttribute('visible');

    return html`
      <style>
        .group {
          display: flex; 
          margin-block-end: 2rem;
          gap: 1rem;
        }
      </style>
      <mdc-responsivesettingsprovider
        ?force-fullscreen-dialog="${args['force-fullscreen-dialog']}"
        popover-positioning="${args['popover-positioning']}"
        media="${args.media}">
        <div id="menupopover-test-wrapper">
          <h1>Popovers</h1>
          <div class="group">
            <mdc-button id="popover-trigger">Popover trigger</mdc-button>
            <mdc-button id="menu-trigger">Menu trigger</mdc-button>
            <mdc-button id="tooltip-trigger">Tooltip trigger</mdc-button>
            <mdc-button id="toggletip-trigger">Toggletip trigger</mdc-button>
            <mdc-button id="coachmark-trigger" @click="${showCoachmark}">Coachmark trigger</mdc-button>
          </div>
          <h1>Components with popover</h1>
          <div class="group">
            <mdc-select label="Select">
              <mdc-selectlistbox>
                <mdc-option value="london" label="London, UK"></mdc-option>
                <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
                <mdc-option value="newyork" label="New York, NY"></mdc-option>
                <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
                <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
              </mdc-selectlistbox>
            </mdc-select>
            <mdc-combobox label="Combobox">
              <mdc-selectlistbox>
                <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
                <mdc-option value="123-456-7890" label="123-456-7890"></mdc-option>
                <mdc-option value="987-654-3210" label="987-654-3210"></mdc-option>
                <mdc-option value="555-555-5555" label="555-555-5555"></mdc-option>
                <mdc-option value="111-222-3333" label="111-222-3333"></mdc-option>
              </mdc-selectlistbox>
            </mdc-combobox>
          </div>
        </div>
          <h1>Dialogs</h1>
          <div class="group">
            <mdc-button @click="${showDialog}">Dialog trigger</mdc-button>
            <mdc-button @click="${showAnnouncement}">Announcement trigger</mdc-button>
          </div>
      >
        <div
          id="menupopover-test-wrapper"
          style="display: flex; justify-content: space-around; align-items: flex-start;"
        >
          <mdc-button id="popover-trigger">Popover trigger</mdc-button>
          <mdc-button id="menu-trigger">Menu trigger</mdc-button>
          <mdc-button @click="${showDialog}">Dialog trigger</mdc-button>
          <mdc-button @click="${showAnnouncement}">Announcement trigger</mdc-button>
        </div>
        <mdc-popover triggerID="popover-trigger" placement="bottom" show-arrow interactive>
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

        <mdc-tooltip triggerID="tooltip-trigger" placement="bottom" show-arrow>
            <mdc-text>Tooltip</mdc-text>
        </mdc-tooltip>
        
        <mdc-toggletip triggerID="toggletip-trigger" placement="bottom" show-arrow>
            <mdc-text>Toggletip</mdc-text>
        </mdc-toggletip>
        
        <mdc-coachmark triggerID="coachmark-trigger" placement="bottom" show-arrow @click="${hideCoachmark}">
            <mdc-text>Coachmark</mdc-text>
        </mdc-coachmark>
        
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
            <mdc-button id="inner-popover-trigger">Popover trigger</mdc-button>

            <mdc-popover triggerID="inner-popover-trigger" placement="bottom" show-arrow interactive>
              <div style="padding: 1rem;">
                <div class="group">
                  <mdc-button id="menu-trigger">Menu trigger</mdc-button>
                  <mdc-select label="Select">
                    <mdc-selectlistbox>
                      <mdc-option value="london" label="London, UK"></mdc-option>
                      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
                      <mdc-option value="newyork" label="New York, NY"></mdc-option>
                      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
                      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
                    </mdc-selectlistbox>
                  </mdc-select>
                  <mdc-combobox label="Combobox">
                    <mdc-selectlistbox>
                      <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
                      <mdc-option value="123-456-7890" label="123-456-7890"></mdc-option>
                      <mdc-option value="987-654-3210" label="987-654-3210"></mdc-option>
                      <mdc-option value="555-555-5555" label="555-555-5555"></mdc-option>
                      <mdc-option value="111-222-3333" label="111-222-3333"></mdc-option>
                    </mdc-selectlistbox>
                  </mdc-combobox>
                </div>
              </div>
            </mdc-popover>
          </div>
        </mdc-dialog>
        
        <mdc-announcementdialog id="announcement-id" @close="${hideAnnouncement}">
          <h2 id="dialog-title" slot="dialog-header">Responsive Announcement Dialog</h2>
          <mdc-text slot="description-container" type="body-large-regular">
            Introduction sentence.
            <br />
            Feature description.
            <br />
            Promote the feature, add some delight 🎉 and let the user know any top level information but don't be
            instructional or technical.
            <br />
            Max 8 lines of copy with or without breaks.
          </mdc-text>
        </mdc-announcementdialog>
      </mdc-responsivesettingsprovider>
    `;
  },
};
