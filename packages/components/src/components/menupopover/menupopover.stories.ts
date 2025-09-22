import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { action } from 'storybook/actions';
import { html, TemplateResult } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { DEFAULTS, POPOVER_PLACEMENT } from '../popover/popover.constants';
import '../button';
import '../buttongroup';
import '../divider';
import '../icon';
import '../menuitem';
import '../menuitemcheckbox';
import '../menuitemradio';
import '../listitem';
import '../list';
import { KEYS } from '../../utils/keys';

const createPopover = (args: Args, content: TemplateResult = html``) => html`
  <mdc-menupopover
    id="${args.id}"
    triggerID="${args.triggerID}"
    placement="${args.placement}"
    ?visible="${args.visible}"
    .offset="${args.offset ?? 0}"
    ?flip="${args.flip}"
    ?size="${args.size}"
    z-index="${args['z-index']}"
    delay="${args.delay}"
    ?prevent-scroll="${args['prevent-scroll']}"
    append-to="${args['append-to']}"
    aria-label="${args['aria-label']}"
    aria-labelledby="${args['aria-labelledby']}"
    aria-describedby="${args['aria-describedby']}"
    @shown="${action('onshown')}"
    @hidden="${action('onhidden')}"
    @created="${action('oncreated')}"
    @destroyed="${action('ondestroyed')}"
    @action="${action('onaction')}"
    @change="${action('onchange')}"
  >
    ${content}
  </mdc-menupopover>
`;

const meta: Meta = {
  title: 'Components/menupopover/menupopover',
  tags: ['autodocs'],
  component: 'mdc-menupopover',

  argTypes: {
    id: {
      control: 'text',
    },
    triggerID: {
      control: 'text',
    },
    trigger: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    offset: {
      if: {
        arg: 'offset',
      },
      control: 'number',
    },
    visible: {
      control: 'boolean',
    },
    delay: {
      control: 'text',
    },
    flip: {
      control: 'boolean',
    },
    size: {
      control: 'boolean',
    },
    'z-index': {
      if: {
        arg: 'z-index',
      },
      control: 'number',
    },
    'prevent-scroll': {
      control: 'boolean',
    },
    'append-to': {
      control: 'text',
    },
    'aria-label': {
      control: 'text',
    },
    'aria-labelledby': {
      control: 'text',
    },
    'aria-describedby': {
      control: 'text',
    },
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
      '--mdc-popover-width',
      '--mdc-popover-max-width',
      '--mdc-popover-max-height',
    ]),
    ...hideControls([
      'arrowElement',
      'backdrop',
      'cancelCloseDelay',
      'close-button-aria-label',
      'color',
      'should-focus-trap-wrap',
      'disableAriaHasPopup',
      'disable-aria-expanded',
      'focus-back-to-trigger',
      'focus-trap',
      'show-arrow',
      'close-button',
      'interactive',
      'hide',
      'hide-on-outside-click',
      'hide-on-blur',
      'hide-on-escape',
      'onEscapeKeydown',
      'onOutsidePopoverClick',
      'onPopoverFocusOut',
      'role',
      'show',
      'startCloseDelay',
      'togglePopoverVisible',
      'triggerElement',
      'utils',
    ]),
  },
};

export default meta;

const defaultMenuContent = html`
  <mdc-menuitem label="New"></mdc-menuitem>
  <mdc-menuitem label="Open"></mdc-menuitem>
  <mdc-menuitem label="Save"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menuitem label="Share" id="share-id" arrow-position="trailing"></mdc-menuitem>
  <mdc-menupopover triggerID="share-id" placement="right-start">
    <mdc-menuitem label="AirDrop"></mdc-menuitem>
    <mdc-menuitem label="Messages"></mdc-menuitem>
    <mdc-menuitem label="Notes"></mdc-menuitem>
    <mdc-menuitem label="Freeform"></mdc-menuitem>
    <mdc-menuitem label="Reminders"></mdc-menuitem>
  </mdc-menupopover>
`;

const groupedMenuContent = html` <mdc-menuitem label="Profile"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menusection headerText="Preferences">
    <mdc-menuitemcheckbox label="Enable feature"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox label="Beta mode" checked></mdc-menuitemcheckbox>
    <mdc-divider></mdc-divider>
    <mdc-menusection header-text="Theme">
      <mdc-menuitemradio name="theme" value="light" label="Light" checked></mdc-menuitemradio>
      <mdc-menuitemradio name="theme" value="dark" label="Dark"></mdc-menuitemradio>
      <mdc-menuitemradio name="theme" value="system" label="System"></mdc-menuitemradio>
    </mdc-menusection>
  </mdc-menusection>
  <mdc-menuitem label="Notifications"></mdc-menuitem>`;

const nestedSubmenuContent = html` <mdc-menuitem label="Profile"></mdc-menuitem>
  <mdc-menuitem id="submenu-trigger" label="Settings" arrow-position="trailing"></mdc-menuitem>
  <mdc-menuitem label="Notifications"></mdc-menuitem>
  <mdc-menuitem label="Logout" disabled></mdc-menuitem>
  <mdc-menupopover triggerID="submenu-trigger" placement="right">
    <mdc-menupopover triggerID="security-id" placement="right-start">
      <mdc-menuitem label="Change Password"></mdc-menuitem>
      <mdc-menuitem label="Two-Factor Authentication"></mdc-menuitem>
      <mdc-menuitem label="Security Questions"></mdc-menuitem>
    </mdc-menupopover>
    <mdc-menuitem label="Account"></mdc-menuitem>
    <mdc-menuitem label="Privacy" disabled></mdc-menuitem>
    <mdc-menuitem label="Security" id="security-id" arrow-position="trailing"></mdc-menuitem>
    <mdc-menuitem label="Advanced"></mdc-menuitem>
  </mdc-menupopover>`;

const nestedSubmenuContentAndSelectMenuItems = html` <mdc-menuitem label="Profile"></mdc-menuitem>
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
  </mdc-menupopover>`;

export const Example: StoryObj = {
  args: {
    id: 'popover',
    triggerID: 'popover-trigger',
    placement: POPOVER_PLACEMENT.BOTTOM_START,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'disable-aria-expanded': false,
  },
  render: args => html`
    <mdc-menuitem id="popover-trigger" label="File"></mdc-menuitem>
    ${createPopover(args, defaultMenuContent)}
  `,
};

export const ButtonTrigger: StoryObj = {
  args: { ...Example.args, triggerID: 'button-trigger' },
  render: args => html`
    <mdc-button id="button-trigger">Menu</mdc-button>
    ${createPopover(args, defaultMenuContent)}
  `,
};

export const IconTrigger: StoryObj = {
  args: { ...Example.args, triggerID: 'icon-trigger' },
  render: args => html`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger" aria-label="Icon Button"></mdc-button>
    ${createPopover(args, defaultMenuContent)}
  `,
};

export const ButtonGroupTrigger: StoryObj = {
  args: { ...Example.args, triggerID: 'button-group-trigger' },
  render: args => html`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1" aria-label="open menu">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger" aria-label="Icon Button"></mdc-button>
    </mdc-buttongroup>
    ${createPopover(args, defaultMenuContent)}
  `,
};

export const WithGroups: StoryObj = {
  args: { ...Example.args, placement: POPOVER_PLACEMENT.RIGHT_START, triggerID: 'trigger-btn' },
  render: (args: Args) => html`
    <div id="menupopover-test-wrapper">
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${createPopover(args, groupedMenuContent)}
    </div>
  `,
};

export const WithNestedSubmenus: StoryObj = {
  args: { ...Example.args, placement: POPOVER_PLACEMENT.RIGHT_END, triggerID: 'trigger-btn' },
  render: (args: Args) => html`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${createPopover(args, nestedSubmenuContent)}
    </div>
  `,
};
export const WithNestedSubmenuContentAndSelectMenuItems: StoryObj = {
  args: { ...Example.args, placement: POPOVER_PLACEMENT.RIGHT_END, triggerID: 'trigger-btn' },
  render: (args: Args) => html`
    <div
      id="menupopover-test-wrapper"
      style="display: flex; justify-content: flex-start; align-items: center; height: 100vh;"
    >
      <mdc-button id="trigger-btn">Options</mdc-button>
      ${createPopover(args, nestedSubmenuContentAndSelectMenuItems)}
    </div>
  `,
};

export const MixedUsage: StoryObj = {
  render: () => html`
    <div style="display: flex; justify-content: space-between; width: 10rem;">
      <mdc-button id="file-menu-trigger">File</mdc-button>
      <mdc-menupopover triggerid="file-menu-trigger" backdrop>
        <mdc-menuitem label="New" id="new-menu-trigger" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="new-menu-trigger" placement="right-start">
          <mdc-menuitem label="New Document"></mdc-menuitem>
          <mdc-menuitem label="New Folder"></mdc-menuitem>
          <mdc-menuitem label="New Window"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem label="Open"></mdc-menuitem>
        <mdc-menuitem label="Save"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Save At" id="save-as-menu-trigger" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="save-as-menu-trigger" placement="right-start">
          <mdc-menuitem label="Multiple Folders" id="folder-menu-trigger" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="folder-menu-trigger" placement="right-start">
            <mdc-menuitemcheckbox label="Desktop"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Documents"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Downloads"></mdc-menuitemcheckbox>
            <mdc-divider></mdc-divider>
            <mdc-menuitem label="Save somewhere else"></mdc-menuitem>
          </mdc-menupopover>
          <mdc-menuitem id="location-menu-trigger" label="Location" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="location-menu-trigger" placement="right-start">
            <mdc-menuitemradio label="Apple Maps Location"></mdc-menuitemradio>
            <mdc-menuitemradio label="Google Maps Location"></mdc-menuitemradio>
            <mdc-divider></mdc-divider>
            <mdc-menuitem label="Save somewhere else"></mdc-menuitem>
          </mdc-menupopover>
          <mdc-menuitem label="Auto Save"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-menuitem label="Save All"></mdc-menuitem>
      </mdc-menupopover>
      <mdc-button id="view-menu-trigger">View</mdc-button>
      <mdc-menupopover triggerid="view-menu-trigger">
        <mdc-menuitem label="Zoom In"></mdc-menuitem>
        <mdc-menuitem label="Zoom Out"></mdc-menuitem>
        <mdc-menuitem label="Reset Zoom"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitemradio indicator="checkmark" name="length" checked label="Short"></mdc-menuitemradio>
        <mdc-menuitemradio indicator="checkmark" name="length" label="Medium"></mdc-menuitemradio>
        <mdc-menuitemradio indicator="checkmark" name="length" label="Looooooooooong"></mdc-menuitemradio>
      </mdc-menupopover>
    </div>
  `,
};

export const CustomMenu: StoryObj = {
  args: { ...Example.args, triggerID: 'button-trigger' },
  render: args => html`
    <mdc-button id="button-trigger">Menu</mdc-button>

    <style>
      .layout-section {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        width: 21rem;
      }

      .layout-section::part(header-text) {
        width: 100%;
      }

      .layout-section mdc-menuitemradio {
        flex-basis: 1rem;
        flex-grow: 1;
        margin-block-end: 0.5rem;
        padding-inline: 0;
        padding-block: 0.65rem;
      }

      .layout-section mdc-menuitemradio::part(leading) {
        flex-direction: column;
        text-align: center;
      }

      .layout-section mdc-menuitemradio::part(trailing) {
        display: none;
      }

      .layout-section mdc-menuitemradio[checked] {
        color: var(--mds-color-theme-text-accent-normal);
        background-color: var(--mds-color-theme-button-secondary-active-normal);
      }

      .layout-section mdc-menuitemradio[checked]::part(leading-text-primary-label) {
        color: inherit;
      }
    </style>
    ${createPopover(
      args,
      html` <mdc-menusection headerText="Layout" class="layout-section">
          <mdc-menuitemradio name="layout" label="Grid" checked indicator="none">
            <mdc-icon name="video-layout-equal-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="layout" label="Stack" indicator="none">
            <mdc-icon name="video-layout-stack-light" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="layout" label="Side by side" indicator="none">
            <mdc-icon
              name="layout-side-by-side-vertical-light"
              size="2"
              slot="leading-controls"
              length-unit="rem"
            ></mdc-icon>
          </mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Preferences">
          <mdc-menuitemcheckbox label="Enable feature"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Beta mode" checked></mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Notifications"></mdc-menuitem>`,
    )}
  `,
};

export const MenuInList: StoryObj = {
  args: { ...Example.args, triggerID: 'button-trigger' },
  render: args =>
    html` <mdc-list>
        <mdc-listitem @click=${action('onclick')} label="List Item 1">
          <mdc-button
            variant="tertiary"
            id="button-trigger"
            slot="trailing-controls"
            aria-label="Open Menu"
            prefix-icon="more-bold"
          >
          </mdc-button>
        </mdc-listitem>
        <mdc-listitem @click=${action('onclick')} label="List Item 2"></mdc-listitem>
        <mdc-listitem @click=${action('onclick')} label="List Item 3"></mdc-listitem>
        <mdc-divider></mdc-divider>
        <mdc-listitem @click=${action('onclick')} label="List Item 4"></mdc-listitem>
        <mdc-listitem @click=${action('onclick')} label="List Item 5"></mdc-listitem>
        <mdc-listitem @click=${action('onclick')} label="List Item 6"></mdc-listitem>
      </mdc-list>
      ${createPopover(args, defaultMenuContent)}`,
};

export const DynamicMenu: StoryObj = {
  args: { ...Example.args, triggerID: 'button-trigger' },
  render: () => {
    let counter = 1;

    const stopEnterAndSpace = (event: any) =>
      event.key === KEYS.ENTER || event.key === KEYS.SPACE ? event.stopPropagation() : undefined;

    const addNewMenu = (event: any) => {
      event.stopImmediatePropagation();

      const withDelay = event.target?.getAttribute('name') === 'delay';
      const parent = event.target?.closest('mdc-menupopover');

      const menuItem = document.createElement('mdc-menuitem');
      menuItem.setAttribute('label', `#${counter} Remove itself ${withDelay ? 'with delay' : ''}`);
      menuItem.addEventListener('click', (e: any) => {
        e.stopPropagation();
        if (withDelay) {
          setTimeout(() => e.target?.remove?.(), 500);
        } else {
          e.target?.remove?.();
        }
      });
      menuItem.addEventListener('keydown', stopEnterAndSpace);

      if (withDelay) {
        setTimeout(() => parent?.append(menuItem), 500);
      } else {
        parent?.append(menuItem);
      }
      counter += 1;
    };

    return html`<mdc-button id="trigger-btn">Dynamic menu</mdc-button>
      <mdc-menupopover triggerID="trigger-btn" placement="bottom-start">
        <mdc-menuitem label="Add menu item..." name="instant" @click=${addNewMenu} @keydown=${stopEnterAndSpace}>
          <mdc-icon name="plus-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
        </mdc-menuitem>
        <mdc-menuitem label="Add with delay..." name="delay" @click=${addNewMenu} @keydown=${stopEnterAndSpace}>
          <mdc-icon name="completed-by-time-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
        </mdc-menuitem>
        <mdc-menuitem label="Nested" id="sub-trigger" arrow-position="trailing"> </mdc-menuitem>
        <mdc-menupopover triggerID="sub-trigger" placement="right-start">
          <mdc-menuitem label="Add menu item..." name="instant" @click=${addNewMenu} @keydown=${stopEnterAndSpace}>
            <mdc-icon name="plus-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitem>
          <mdc-menuitem label="Add with delay..." name="delay" @click=${addNewMenu} @keydown=${stopEnterAndSpace}>
            <mdc-icon name="completed-by-time-bold" size="2" slot="leading-controls" length-unit="rem"></mdc-icon>
          </mdc-menuitem>
          <mdc-divider></mdc-divider>
        </mdc-menupopover>
        <mdc-divider></mdc-divider>
      </mdc-menupopover>`;
  },
};
