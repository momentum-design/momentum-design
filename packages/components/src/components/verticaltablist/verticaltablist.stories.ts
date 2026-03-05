// AI-Assisted
import { action } from 'storybook/actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import '.';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

import '../tab';
import '../icon';
import '../badge';
import '../text';

const tabItems = [
  { tabId: 'messages', text: 'Messages', iconName: 'chat-regular' },
  { tabId: 'favorites', text: 'Favorites', iconName: 'favorite-regular' },
  { tabId: 'contacts', text: 'Contacts', iconName: 'contact-card-regular' },
  { tabId: 'meetings', text: 'Meetings', iconName: 'meetings-regular' },
  { tabId: 'calls', text: 'Calls', iconName: 'handset-regular' },
  { tabId: 'voicemail', text: 'Voicemail', iconName: 'voicemail-regular' },
  { tabId: 'settings', text: 'Settings', iconName: 'settings-regular' },
] as const;

const render = (args: Args) =>
  html`<mdc-verticaltablist
    data-aria-label="${args['data-aria-label']}"
    active-tab-id="${args['active-tab-id'] || ''}"
    @change="${action('change')}"
  >
    ${repeat(
      tabItems,
      tab => tab.tabId,
      tab =>
        html`<mdc-tab
          tab-id="${tab.tabId}"
          text="${tab.text}"
          icon-name="${tab.iconName}"
          @click="${action('onclick')}"
        ></mdc-tab>`,
    )}
  </mdc-verticaltablist>`;

const meta: Meta = {
  title: 'Components/verticaltablist',
  tags: ['autodocs'],
  component: 'mdc-verticaltablist',
  render,
  argTypes: {
    'aria-label': {
      control: 'text',
    },
    'active-tab-id': {
      control: 'text',
      description: 'ID of the active tab. Defaults to the first tab if not provided.',
    },
    ...hideControls(['itemsStore']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'aria-label': 'Navigation tabs',
    'active-tab-id': 'messages',
  },
};

export const TabsWithBadges: StoryObj = {
  render: args => html`
    <mdc-verticaltablist
      data-aria-label="${args['data-aria-label']}"
      active-tab-id="${args['active-tab-id'] || ''}"
      @change="${action('change')}"
    >
      <mdc-tab tab-id="messages" text="Messages" icon-name="chat-regular" @click="${action('onclick')}">
        <mdc-badge slot="badge" type="counter" counter="5"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="favorites" text="Favorites" icon-name="favorite-regular" @click="${action('onclick')}">
      </mdc-tab>
      <mdc-tab tab-id="contacts" text="Contacts" icon-name="contact-card-regular" @click="${action('onclick')}">
        <mdc-badge slot="badge" type="dot"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="meetings" text="Meetings" icon-name="meetings-regular" @click="${action('onclick')}"> </mdc-tab>
      <mdc-tab tab-id="calls" text="Calls" icon-name="handset-regular" @click="${action('onclick')}">
        <mdc-badge slot="badge" type="counter" counter="3"></mdc-badge>
      </mdc-tab>
    </mdc-verticaltablist>
  `,
  args: {
    'data-aria-label': 'Navigation tabs with badges',
    'active-tab-id': 'messages',
  },
};

export const TextOnlyTabs: StoryObj = {
  render: args => html`
    <mdc-verticaltablist
      data-aria-label="${args['data-aria-label']}"
      active-tab-id="${args['active-tab-id'] || ''}"
      @change="${action('change')}"
    >
      <mdc-tab tab-id="tab-1" text="Overview" @click="${action('onclick')}"></mdc-tab>
      <mdc-tab tab-id="tab-2" text="Details" @click="${action('onclick')}"></mdc-tab>
      <mdc-tab tab-id="tab-3" text="History" @click="${action('onclick')}"></mdc-tab>
      <mdc-tab tab-id="tab-4" text="Analytics" @click="${action('onclick')}"></mdc-tab>
      <mdc-tab tab-id="tab-5" text="Settings" @click="${action('onclick')}"></mdc-tab>
    </mdc-verticaltablist>
  `,
  args: {
    'data-aria-label': 'Text only navigation tabs',
    'active-tab-id': 'tab-1',
  },
};

export const TabsWithPanels: StoryObj = {
  render: args => html`
    <div style="display: flex; gap: 16px;">
      <mdc-verticaltablist
        data-aria-label="${args['data-aria-label']}"
        active-tab-id="${args['active-tab-id'] || ''}"
        @change="${(e: CustomEvent) => {
          action('change')(e);
          const panels = document.querySelectorAll('[role="tabpanel"]');
          panels.forEach(panel => {
            const el = panel as HTMLElement;
            el.hidden = el.id !== `panel-${e.detail.tabId}`;
          });
        }}"
        style="width: 200px"
      >
        <mdc-tab tab-id="general" text="General" icon-name="settings-regular" aria-controls="panel-general"></mdc-tab>
        <mdc-tab
          tab-id="appearance"
          text="Appearance"
          icon-name="adjust-regular"
          aria-controls="panel-appearance"
        ></mdc-tab>
        <mdc-tab
          tab-id="notifications"
          text="Notifications"
          icon-name="alert-regular"
          aria-controls="panel-notifications"
        ></mdc-tab>
        <mdc-tab
          tab-id="privacy"
          text="Privacy"
          icon-name="privacy-circle-regular"
          aria-controls="panel-privacy"
        ></mdc-tab>
      </mdc-verticaltablist>
      <div style="flex: 1; padding: 12px;">
        <div role="tabpanel" id="panel-general" aria-labelledby="general">
          <mdc-text type="heading-midsize-bold" tagname="h3">General Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Configure your general application settings here.</mdc-text>
        </div>
        <div role="tabpanel" id="panel-appearance" aria-labelledby="appearance" hidden>
          <mdc-text type="heading-midsize-bold" tagname="h3">Appearance Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Customize the look and feel of the application.</mdc-text>
        </div>
        <div role="tabpanel" id="panel-notifications" aria-labelledby="notifications" hidden>
          <mdc-text type="heading-midsize-bold" tagname="h3">Notification Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Manage your notification preferences.</mdc-text>
        </div>
        <div role="tabpanel" id="panel-privacy" aria-labelledby="privacy" hidden>
          <mdc-text type="heading-midsize-bold" tagname="h3">Privacy Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Control your privacy and security settings.</mdc-text>
        </div>
      </div>
    </div>
  `,
  args: {
    'data-aria-label': 'Settings navigation',
    'active-tab-id': 'general',
  },
};

// End AI-Assisted
