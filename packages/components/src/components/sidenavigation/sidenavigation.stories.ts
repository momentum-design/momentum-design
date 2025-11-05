import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

import { VARIANTS, DEFAULTS } from './sidenavigation.constants';
import '../menuitem';
import '../menupopover';
import '../navmenuitem';
import '../icon';
import '../menusection';
import '../banner';

const render = (args: Args) => html`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation
      ?expanded="${args.expanded}"
      variant="${args.variant}"
      footer-text=${args['footer-text']}
      grabber-btn-aria-label="${args['grabber-btn-aria-label']}"
      ?hide-fixed-section-divider="${args['hide-fixed-section-divider']}"
      @activechange="${action('onactivechange')}"
      @toggle="${action('ontoggle')}"
    >
      <!-- Upper Nav (scrollable section) -->
      <mdc-menusection slot="scrollable-menubar" show-divider>
        <mdc-navmenuitem
          badge-type="counter"
          counter="2"
          max-counter="66"
          icon-name="chat-bold"
          nav-id="1"
          label="Messaging"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="2" label="Meetings" disabled></mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="3" label="Calling"></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 1">
        <mdc-navmenuitem icon-name="chat-bold" nav-id="4" label="Messaging"></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="meetings-bold"
          nav-id="5"
          label="Meetings"
          badge-type="counter"
          counter="2"
          max-counter="66"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="audio-call-bold" nav-id="6" label="Calling"></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 2">
        <mdc-navmenuitem
          badge-type="counter"
          counter="2"
          max-counter="66"
          icon-name="chat-bold"
          nav-id="8"
          label="Messaging"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="9" label="Meetings"> </mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="10" label="Calling"> </mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 3">
        <mdc-navmenuitem icon-name="chat-bold" nav-id="11" label="Messaging"></mdc-navmenuitem>
        <mdc-navmenuitem
          badge-type="counter"
          counter="3"
          max-counter="66"
          icon-name="meetings-bold"
          nav-id="12"
          label="Meetings"
        ></mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="13" label="Calling"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="placeholder-bold" nav-id="14" label="Teams"></mdc-navmenuitem>
        <mdc-navmenuitem
          badge-type="counter"
          counter="3"
          max-counter="66"
          icon-name="placeholder-bold"
          nav-id="15"
          label="Contacts"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="placeholder-bold" nav-id="16" label="Whiteboards"></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" header-text="Section 4">
        <mdc-navmenuitem
          badge-type="counter"
          counter="2"
          max-counter="66"
          icon-name="chat-bold"
          nav-id="17"
          label="Messaging"
        ></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="18" label="Meetings"></mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="19" label="Calling"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="chat-bold" nav-id="20" label="Messaging"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="21" label="Meetings"></mdc-navmenuitem>
        <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="22" label="Calling"></mdc-navmenuitem>
      </mdc-menusection>

      <!-- Lower Nav (Fixed section) -->
      <mdc-menusection slot="fixed-menubar">
        <mdc-navmenuitem icon-name="settings-bold" nav-id="23" label="Settings"></mdc-navmenuitem>
        <mdc-navmenuitem
          badge-type="counter"
          counter="3"
          max-counter="66"
          icon-name="help-circle-bold"
          nav-id="24"
          label="Help"
        ></mdc-navmenuitem>
      </mdc-menusection>

      <!-- Brand Logo (Fixed section) -->
      <mdc-icon slot="brand-logo" aria-label="This is a brandlogo." name="apple-bold"></mdc-icon>
    </mdc-sidenavigation>
  </div>
`;

const renderMixedSideNavigation = (args: Args) => html`
  <div style="height: calc(100vh - 320px); margin: 1rem">
    <mdc-sidenavigation
      ?expanded="${args.expanded}"
      variant="${args.variant}"
      grabber-btn-aria-label="${args['grabber-btn-aria-label']}"
      ?hide-fixed-section-divider="${args['hide-fixed-section-divider']}"
      @activechange="${action('onactivechange')}"
      @toggle="${action('ontoggle')}"
    >
      <!-- Upper Nav (scrollable section) -->
      <mdc-menusection slot="scrollable-menubar" show-divider>
        <mdc-navmenuitem
          badge-type="counter"
          counter="2"
          max-counter="66"
          icon-name="chat-bold"
          nav-id="1"
          label="Messaging"
          tooltip-text="Messaging"
        ></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="meetings-bold"
          nav-id="2"
          label="Meetings"
          tooltip-text="Meetings"
        ></mdc-navmenuitem>
      </mdc-menusection>

      <mdc-menusection slot="scrollable-menubar" header-text="Section 1">
        <mdc-navmenuitem icon-name="chat-bold" nav-id="4" label="Messaging" tooltip-text="Messaging"></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="meetings-bold"
          nav-id="5"
          label="Meetings"
          tooltip-text="Meetings"
          badge-type="counter"
          counter="2"
          max-counter="66"
        ></mdc-navmenuitem>
      </mdc-menusection>

      <!-- Lower Nav (Fixed section) -->
      <mdc-menusection slot="fixed-menubar" show-divider>
        <mdc-navmenuitem
          icon-name="settings-bold"
          nav-id="13"
          label="Settings"
          tooltip-text="Settings"
          cannot-activate
        ></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="help-circle-bold"
          nav-id="14"
          label="Help"
          tooltip-text="Help, opens a new tab"
          cannot-activate
          tooltip-appearance="always"
          @click="${() => window.open('https://momentum.design', '_blank')}"
        ></mdc-navmenuitem>
      </mdc-menusection>
      <mdc-menusection slot="fixed-menubar">
        <mdc-navmenuitem
          icon-name="settings-bold"
          nav-id="23"
          label="Settings"
          tooltip-text="Settings"
          cannot-activate
        ></mdc-navmenuitem>
        <mdc-navmenuitem
          icon-name="help-circle-bold"
          nav-id="24"
          label="Help"
          tooltip-text="Help, opens a new tab"
          cannot-activate
          tooltip-appearance="always"
          @click="${() => window.open('https://momentum.design', '_blank')}"
        ></mdc-navmenuitem>
      </mdc-menusection>
    </mdc-sidenavigation>
  </div>
`;

const renderNestedSideNavigation = (args: Args) => {
  const showAlert = () => {
    // eslint-disable-next-line no-alert
    window.confirm('Are you sure you want to cancel?');
  };
  return html` <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation
      variant="${args.variant}"
      footer-text=${args['footer-text']}
      grabber-btn-aria-label="${args['grabber-btn-aria-label']}"
      ?hide-fixed-section-divider="${args['hide-fixed-section-divider']}"
      @activechange="${action('onactivechange')}"
    >
      <!-- Upper Nav (scrollable section) -->
        <mdc-navmenuitem icon-name="meetings-bold" nav-id="verify1" label="Main Meetings" slot="scrollable-menubar" tooltip-text="Meetings"></mdc-navmenuitem>
        <mdc-navmenuitem icon-name="audio-call-bold" nav-id="verify2" label="Main Calling" slot="scrollable-menubar" id="temp" tooltip-text="Calling" is-active-parent-tooltip-text="Calling, contains active navmenuitem"></mdc-navmenuitem>
        <mdc-menupopover triggerid="temp" slot="scrollable-menubar">
          <mdc-navmenuitem label="Webex App Hub" nav-id="verify3" badge-type="dot" icon-name="placeholder-bold"></mdc-navmenuitem>
          <mdc-navmenuitem label="Team Insights" nav-id="verify4" icon-name="placeholder-bold"></mdc-navmenuitem>
          <mdc-navmenuitem label="Release Notes" nav-id="verify5" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"></mdc-navmenuitem>
          <mdc-navmenuitem label="Cisco Spaces" nav-id="verify6" icon-name="placeholder-bold"></mdc-navmenuitem>
        </mdc-menupopover>
        <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 1">
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="chat-bold"
            nav-id="1"
            label="Messaging"
            tooltip-text="Messaging"
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="2" label="Meetings" soft-disabled 
            tooltip-text="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="audio-call-bold"
            nav-id="3"
            label="Callings"
            tooltip-text="Callings"
          ></mdc-navmenuitem>
          <mdc-navmenuitem
            icon-name="more-circle-bold"
            nav-id="4"
            label="More"
            id="menu-button-trigger"
            tooltip-text="More"
            is-active-parent-tooltip-text="More, contains active navmenuitem"
            >
          </mdc-navmenuitem>
          <mdc-menupopover triggerid="menu-button-trigger">
            <mdc-navmenuitem label="App Hub" nav-id="5" badge-type="dot" icon-name="placeholder-bold"></mdc-navmenuitem>
            <mdc-navmenuitem label="Personal Insights" nav-id="6" icon-name="placeholder-bold"></mdc-navmenuitem>
            <mdc-navmenuitem
              label="What's new?"
              nav-id="7"
              badge-type="counter"
              counter="2"
              max-counter="66"
              icon-name="placeholder-bold"
            ></mdc-navmenuitem>
            <mdc-navmenuitem label="Collaboration Tools" nav-id="8" icon-name="placeholder-bold" id="share-id" is-active-parent-tooltip-text="Contains active navmenuitem"></mdc-navmenuitem>
            <mdc-menupopover triggerid="share-id">
              <mdc-navmenuitem
                label="Webex App Hub"
                nav-id="temp1"
                badge-type="dot"
                icon-name="placeholder-bold"
              ></mdc-navmenuitem>
                <mdc-menusection>
                  <mdc-navmenuitem label="Team Insights" nav-id="temp2" icon-name="placeholder-bold"></mdc-navmenuitem>
                  <mdc-navmenuitem
                    label="Release Notes"
                    nav-id="temp3"
                    badge-type="counter"
                    counter="2"
                    max-counter="66"
                    icon-name="placeholder-bold"
                  ></mdc-navmenuitem>
                </mdc-menusection>
                <mdc-navmenuitem label="Cisco Spaces" nav-id="temp4" icon-name="placeholder-bold"></mdc-navmenuitem>
              </mdc-menusection>
            </mdc-menupopover>
          </mdc-menupopover>
        </mdc-menusection>

        <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 2">
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="chat-bold"
            nav-id="9"
            label="Messaging"
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="10" label="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="11" label="Calling"></mdc-navmenuitem>
        </mdc-menusection>

        <mdc-menusection slot="scrollable-menubar" show-divider header-text="Section 3">
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="chat-bold"
            nav-id="12"
            label="Messaging"
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="13" label="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="14" label="Calling"></mdc-navmenuitem>
        </mdc-menusection>

        <mdc-menusection slot="scrollable-menubar" header-text="Section 4">
          <mdc-navmenuitem
            badge-type="counter"
            counter="2"
            max-counter="66"
            icon-name="chat-bold"
            nav-id="15"
            label="Messaging"
          ></mdc-navmenuitem>
          <mdc-navmenuitem icon-name="meetings-bold" nav-id="16" label="Meetings"></mdc-navmenuitem>
          <mdc-navmenuitem badge-type="dot" icon-name="audio-call-bold" nav-id="17" label="Calling"></mdc-navmenuitem>
        </mdc-menusection>

      <!-- Lower Nav (Fixed section) -->
       <mdc-menusection slot="fixed-menubar">
          <mdc-navmenuitem
            badge-type="counter"
            counter="3"
            max-counter="66"
            icon-name="settings-bold"
            nav-id="18"
            label="Settings"
          ></mdc-navmenuitem>
          <mdc-navmenuitem
            @click="${showAlert}"
            icon-name="help-circle-bold"
            nav-id="19"
            label="Help"
            disable-aria-current
          ></mdc-navmenuitem>
        </mdc-menusection>

      <!-- Brand Logo (Fixed section) -->
      <mdc-icon slot="brand-logo" aria-label="This is the brand logo icon" name="apple-bold"> </mdc-icon>
    </mdc-sidenavigation>
  </div>`;
};

const meta: Meta = {
  title: 'Components/sidenavigation/sidenavigation',
  tags: ['autodocs'],
  component: 'mdc-sidenavigation',
  render,
  argTypes: {
    expanded: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: Object.values(VARIANTS),
    },
    'grabber-btn-aria-label': {
      control: 'text',
    },
    'hide-fixed-section-divider': {
      control: 'boolean',
    },
    ...hideControls(['Context']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    expanded: true,
    variant: DEFAULTS.VARIANT,
    'footer-text': '%Customer Name%',
    'grabber-btn-aria-label': 'Toggle Side navigation',
  },
};

export const Mixed: StoryObj = {
  render: renderMixedSideNavigation,
  parameters: {
    docs: {
      description: {
        story: html`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Mixed Side Navigation example demonstrates the use of NavMenuItems which either can be activated (when
            changing content on the screen like "Messaging") or cannot be activated (when opening external links or
            opening dialogs like "Help"). NavMenuItems that cannot be activated need to have the 'cannot-activate'
            attribute set to true.
            <br />
          </mdc-text>
          <mdc-banner
            variant="informational"
            label="As a A11y recommendation, NavMenuItems that cannot be activated must have a tooltip-text provided (including
            information like 'Opens a new tab') and tooltip-appearance set to 'always' to indicate to users that clicking on
            the NavMenuItem will redirect to a new tab."
          ></mdc-banner> `,
      },
    },
  },
  args: {
    expanded: true,
    variant: DEFAULTS.VARIANT,
    'footer-text': '%Customer Name%',
    'grabber-btn-aria-label': 'Toggle Side navigation',
    'hide-fixed-section-divider': true,
  },
};

export const NestedSideNavigation: StoryObj = {
  render: renderNestedSideNavigation,
  args: {
    ...Example.args,
  },
};
