import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import '../divider';
import '../icon';
import '../menubar';
import '../menuitem';

const render = () => html`
  <div style="width: 50rem; height: 25rem;">
    <mdc-menubar>
      <mdc-menuitem id="menu-button-trigger" label="File"></mdc-menuitem>
      <mdc-menupopover triggerid="menu-button-trigger">
        <mdc-menuitem label="New"></mdc-menuitem>
        <mdc-menuitem label="Open"></mdc-menuitem>
        <mdc-menuitem label="Save"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Share" id="share-id" arrow-position='trailing'></mdc-menuitem>
        <mdc-menupopover triggerid="share-id">
          <mdc-menuitem label="AirDrop"></mdc-menuitem>
          <mdc-menuitem label="Messages"></mdc-menuitem>
          <mdc-menuitem label="Notes"></mdc-menuitem>
          <mdc-menuitem label="Freeform"></mdc-menuitem>
          <mdc-menuitem label="Reminders"></mdc-menuitem>
        </mdc-menupopover>
      </mdc-menupopover>
    </mdc-menubar>
  </div>
`;

const meta: Meta = {
  title: 'Work In Progress/menu/menupopover',
  tags: ['autodocs'],
  component: 'mdc-menupopover',
  render,
  parameters: {
    badges: ['wip'],
    docs: {
      source: {
        format: 'html',
        code: `
          <mdc-menubar>
            <mdc-menuitem id="menu-id" label="..."></mdc-menuitem>
            <mdc-menupopover triggerid="menu-id">
              <mdc-menuitem label="..."></mdc-menuitem>
              <mdc-menuitem id="sub-menu-id" label="..."></mdc-menuitem>
              <mdc-menupopover triggerid="sub-menu-id">
                <mdc-menuitem label="..."></mdc-menuitem>
                <mdc-menuitem label="..."></mdc-menuitem>
              </mdc-menupopover>
              <mdc-menuitem label="..."></mdc-menuitem>
            </mdc-menupopover>
          <mdc-menubar>
        `,
      },
    },
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
