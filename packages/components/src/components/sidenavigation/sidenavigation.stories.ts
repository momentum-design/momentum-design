import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { VARIANTS, DEFAULTS } from './sidenavigation.constants';
import '../menuitem';
import '../menupopover';
import '../navitemlist';
import '../navitem';
import '../icon';

const render = (args: Args) => html`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation variant="${args.variant}" customer-name=${args['customer-name']} 
        grabber-btn-aria-label="${args['grabber-btn-aria-label']}"
        parent-nav-tooltip-text="${args['parent-nav-tooltip-text']}"
        @activechange="${action('onactivechange')}">
        <!-- Upper Nav (scrollable section) -->
        <mdc-navitemlist slot="scrollable-section" aria-label="This is a 1st navitemlist.">
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="1"
            label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="2" label='Meetings' disabled></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="3" label='Calling'></mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 1</mdc-text>

          <mdc-navitem icon-name="chat-bold" nav-id="4" label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="5" label='Meetings' badge-type="counter" 
          counter="2" max-counter="66"></mdc-navitem>
          <mdc-navitem icon-name="audio-call-bold" nav-id="6" label='Calling'></mdc-navitem>

          <mdc-divider variant="gradient" nav-id="7"></mdc-divider>
          <mdc-text>Section 2</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="8"
            label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="9" label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="10" label='Calling'> </mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 3</mdc-text>

          <mdc-navitem icon-name="chat-bold" nav-id="11" label='Messaging'> </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="meetings-bold" nav-id="12"
            label='Meetings'></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="13" label='Calling'></mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="14"
            label='Teams'></mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="15"
            label='Contacts'></mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="16" label='Whiteboards'></mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 4</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="17"
            label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="18" label='Meetings'></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="19" label='Calling'></mdc-navitem>
          <mdc-navitem icon-name="chat-bold" nav-id="20" label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="21" label='Meetings'></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="22" label='Calling'></mdc-navitem>
        </mdc-navitemlist>

        <!-- Lower Nav (Fixed section) -->
        <mdc-navitemlist slot="fixed-section" aria-label="This is a 2nd navitemlist.">
          <mdc-navitem icon-name="settings-bold" nav-id="23"
            label='Settings'></mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="help-circle-bold" nav-id="24"
            label='Help'></mdc-navitem>
        </mdc-navitemlist>

        <!-- Brand Logo (Fixed section) -->
        <mdc-icon 
          slot="brand-logo"
          aria-label="This is a brandlogo." 
          name="apple-bold">
        </mdc-icon>
    </mdc-sidenavigation>
  </div>
`;

const renderNestedSideNavigation = (args: Args) => html`
<div style="height: 90vh; margin: 1rem">
  <mdc-sidenavigation variant="${args.variant}" customer-name=${args['customer-name']} 
      grabber-btn-aria-label="${args['grabber-btn-aria-label']}"
      parent-nav-tooltip-text="${args['parent-nav-tooltip-text']}"
      @activechange="${action('onactivechange')}">
      <!-- Upper Nav (scrollable section) -->
      <mdc-navitemlist slot="scrollable-section" aria-label="This is a 1st navitemlist.">
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" 
        nav-id="1" label='Messaging'></mdc-navitem>
        <mdc-navitem icon-name="meetings-bold" nav-id="2" label='Meetings' disabled></mdc-navitem>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="audio-call-bold" nav-id="3"
        label='Callings'></mdc-navitem>
        <mdc-navitem icon-name="more-circle-bold" nav-id="4" label='More' id="menu-button-trigger"></mdc-navitem>
        <mdc-menupopover triggerid="menu-button-trigger">
            <mdc-navitem label="App Hub" nav-id="5" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
            <mdc-navitem label="Personal Insights" nav-id="6" icon-name="placeholder-bold"></mdc-navitem>
            <mdc-navitem label="What's new?" nav-id="7" badge-type="counter" counter="2" max-counter="66" 
            icon-name="placeholder-bold"></mdc-navitem>
            <mdc-navitem label="Collaboration Tools" nav-id="8" icon-name="placeholder-bold" 
            id="share-id"></mdc-navitem>
            <mdc-menupopover triggerid="share-id">
              <mdc-navitem label="Webex App Hub" nav-id="temp1" badge-type="dot" 
              icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Team Insights" nav-id="temp2" 
              icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Release Notes" nav-id="temp3" badge-type="counter" counter="2" max-counter="66" 
              icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Cisco Spaces" nav-id="temp4" icon-name="placeholder-bold"></mdc-navitem>
            </mdc-menupopover>
        </mdc-menupopover>

        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 1</mdc-text>

        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="9"
          label='Messaging'></mdc-navitem>
        <mdc-navitem icon-name="meetings-bold" nav-id="10" label='Meetings'></mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="11" label='Calling'></mdc-navitem>

        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 2</mdc-text>

        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="12"
          label='Messaging'></mdc-navitem>
        <mdc-navitem icon-name="meetings-bold" nav-id="13" label='Meetings'></mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="14" label='Calling'></mdc-navitem>

        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 3</mdc-text>

        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="15"
          label='Messaging'></mdc-navitem>
        <mdc-navitem icon-name="meetings-bold" nav-id="16" label='Meetings'></mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="17" label='Calling'></mdc-navitem>
      </mdc-navitemlist>

      <!-- Lower Nav (Fixed section) -->
      <mdc-navitemlist slot="fixed-section" aria-label="This is a 2nd navitemlist.">
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="settings-bold" nav-id="18"
          label='Settings' no-aria-current></mdc-navitem>
        <mdc-navitem icon-name="help-circle-bold" nav-id="19" label='Help'></mdc-navitem>
      </mdc-navitemlist>

      <!-- Brand Logo (Fixed section) -->
      <mdc-icon 
        slot="brand-logo"
        aria-label="This is the brand logo icon" 
        name="apple-bold">
      </mdc-icon>
  </mdc-sidenavigation>
</div>`;

const meta: Meta = {
  title: 'Work In Progress/sidenavigation',
  tags: ['autodocs'],
  component: 'mdc-sidenavigation',
  render,
  parameters: {
    badges: ['wip'],
    docs: {
      source: {
        format: 'html',
        code: `
        <mdc-sidenavigation customer-name="..." grabber-btn-aria-label="...">
          <mdc-navitemlist slot="scrollable-section" aria-label="...">
            <mdc-navitem label="..." nav-id="..."></mdc-navitem>
            <mdc-navitem label="..." nav-id="..."></mdc-navitem>
            <mdc-navitem id="menu-id" label="..." nav-id="..."></mdc-navitem>
            <mdc-menupopover triggerid="menu-id">
              <mdc-navitem label="..." nav-id="..."></mdc-navitem>
              <mdc-navitem label="..." nav-id="..."></mdc-navitem>
              <mdc-navitem label="..." nav-id="..."></mdc-navitem>
            </mdc-menupopover>
            <mdc-navitem label="..." nav-id="..."></mdc-navitem>
          </mdc-navitemlist>
          <mdc-navitemlist slot="fixed-section" aria-label="...">
            <mdc-navitem label="..." nav-id="..."></mdc-navitem>
            <mdc-navitem label="..." nav-id="..."></mdc-navitem>
            <mdc-navitem label="..." nav-id="..."></mdc-navitem>
          </mdc-navitemlist>
        </mdc-sidenavigation>
      `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS),
    },
    'grabber-btn-aria-label': {
      control: 'text',
    },
    'parent-nav-tooltip-text': {
      control: 'text',
    },
    ...disableControls([
      'scrollable-section',
      'fixed-section',
      'brand-logo',
      '--mdc-sidenavigation-expanded-width',
      '--mdc-sidenavigation-collapsed-width',
    ]),
    ...hideControls([
      'role',
      'Context',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: DEFAULTS.VARIANT,
    'customer-name': '%Customer Name%',
    'grabber-btn-aria-label': 'Toggle Side navigation',
    'parent-nav-tooltip-text': 'Contains active navitem',
  },
};

export const NestedSideNavigation: StoryObj = {
  render: renderNestedSideNavigation,
  args: {
    ...Example.args,
  },
};
