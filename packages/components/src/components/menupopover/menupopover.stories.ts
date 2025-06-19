import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import '../button';
import '../buttongroup';
import '../divider';
import '../icon';
import '../menuitem';

const createPopover = (triggerId: string) => html`
  <mdc-menupopover triggerid="${triggerId}">
    <mdc-menuitem label="New"></mdc-menuitem>
    <mdc-menuitem label="Open"></mdc-menuitem>
    <mdc-menuitem label="Save"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Share" id="share-id" arrow-position='trailing'></mdc-menuitem>
    <mdc-menupopover triggerid="share-id">
      <mdc-menuitem label="AirDrop"></mdc-menuitem>
      <mdc-menuitem label="Messages" id="message-id" arrow-position='trailing'></mdc-menuitem>
      <mdc-menupopover triggerid="message-id">
        <mdc-menuitem label="Send Message"></mdc-menuitem>
        <mdc-menuitem label="Send Email" disabled></mdc-menuitem>
      </mdc-menupopover>
      <mdc-menuitem label="Notes"></mdc-menuitem>
      <mdc-menuitem label="Freeform"></mdc-menuitem>
      <mdc-menuitem label="Reminders"></mdc-menuitem>
    </mdc-menupopover>
  </mdc-menupopover>
`;

const render = () => html`
    <mdc-menuitem id="menu-button-trigger" label="File menu item"></mdc-menuitem>
    ${createPopover('menu-button-trigger')}
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
    ...disableControls([
      '--mdc-popover-arrow-border-radius',
      '--mdc-popover-arrow-border',
      '--mdc-popover-primary-background-color',
      '--mdc-popover-border-color',
      '--mdc-popover-inverted-background-color',
      '--mdc-popover-inverted-border-color',
      '--mdc-popover-inverted-text-color',
      '--mdc-popover-elevation-3',
    ]),
    ...hideControls([
      'aria-orientation',
      'arrowElement',
      'cancelCloseDelay',
      'enabledFocusTrap',
      'enabledPreventScroll',
      'hidePopover',
      'onEscapeKeydown',
      'onOutsidePopoverClick',
      'onPopoverFocusOut',
      'shouldWrapFocus',
      'showPopover',
      'startCloseDelay',
      'togglePopoverVisible',
      'triggerElement',
      'utils',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  ...hideAllControls(),
};

export const ButtonTrigger: StoryObj = {
  render: () => html`
    <mdc-button id="button-trigger">Menu</mdc-button>
    ${createPopover('button-trigger')}
  `,
  ...hideAllControls(),
};

export const IconTrigger: StoryObj = {
  render: () => html`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger"></mdc-button>
    ${createPopover('icon-trigger')}
  `,
  ...hideAllControls(),
};

export const ButtonGroupTrigger: StoryObj = {
  render: () => html`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger"></mdc-button>
    </mdc-buttongroup>
    ${createPopover('button-group-trigger')}
  `,
  ...hideAllControls(),
};

export const WithGroups: StoryObj = {
  render: () => html` <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      <mdc-menupopover triggerid="trigger-btn">
        <mdc-menuitem label="Profile"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menusection label="Preferences">
          <mdc-menuitemcheckbox label="Enable feature" aria-checked="false"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Beta mode" aria-checked="true"></mdc-menuitemcheckbox>
          <mdc-menuitemradio name="theme" label="Light" aria-checked="true"></mdc-menuitemradio>
          <mdc-menuitemradio name="theme" label="Dark" aria-checked="false"></mdc-menuitemradio>
          <mdc-menuitemradio name="theme" label="System" aria-checked="false"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-menuitem label="Notifications"></mdc-menuitem>
      </mdc-menupopover>
    </div>`,
};
