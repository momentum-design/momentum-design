import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../avatarbutton';
import '../link';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import { COLOR, POPOVER_PLACEMENT, DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import { hideControls, textControls } from '../../../config/storybook/utils';

import { DEFAULTS } from './toggletip.constants';

const render = (args: Args) =>
  html` <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
    <mdc-avatarbutton aria-label="Trigger button" icon-name="placeholder-bold" id="${args.triggerID}" initials="MD">
    </mdc-avatarbutton>
    <mdc-toggletip
      color="${args.color}"
      ?close-button="${args['close-button']}"
      close-button-aria-label="${args['close-button-aria-label']}"
      offset="${args.offset}"
      placement="${args.placement}"
      ?show-arrow="${args['show-arrow']}"
      triggerid="${args.triggerID}"
      @shown="${action('onshown')}"
      @hidden="${action('onhidden')}"
      @created="${action('oncreated')}"
      @destroyed="${action('ondestroyed')}"
      ><div>
        The toggletip with a
        <mdc-link
          inline
          icon-name="placeholder-bold"
          href="https://www.webex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </mdc-link>
      </div>
    </mdc-toggletip>
  </div>`;

const meta: Meta = {
  title: 'Components/toggletip',
  tags: ['autodocs'],
  component: 'mdc-toggletip',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(COLOR),
    },
    'close-button': {
      control: 'boolean',
    },
    'close-button-aria-label': {
      control: 'text',
    },
    offset: {
      control: 'number',
    },
    placement: {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'show-arrow': {
      control: 'boolean',
    },
    triggerID: {
      control: 'text',
    },
    ...textControls([
      '--mdc-toggletip-max-width',
      '--mdc-toggletip-text-color',
      '--mdc-toggletip-text-color-contrast',
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
      'id',
      'delay',
      'disable-aria-expanded',
      'triggerElement',
      'trigger',
      'z-index',
      'flip',
      'role',
      'visible',
      'focus-trap',
      'prevent-scroll',
      'interactive',
      'hide-on-escape',
      'hide-on-blur',
      'hide-on-outside-click',
      'focus-back-to-trigger',
      'backdrop',
      'size',
      'append-to',
      'aria-labelledby',
      'aria-describedby',
      'show',
      'hide',
      'togglePopoverVisible',
      'arrowElement',
      'onOutsidePopoverClick',
      'onEscapeKeydown',
      'onPopoverFocusOut',
      'startCloseDelay',
      'cancelCloseDelay',
      'enabledPreventScroll',
      'enabledFocusTrap',
      'shouldWrapFocus',
      'utils',
      'defaultSlotNodes',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  render,
  args: {
    color: POPOVER_DEFAULTS.COLOR,
    'close-button': DEFAULTS.CLOSE_BUTTON,
    'close-button-aria-label': DEFAULTS.CLOSE_BUTTON_ARIA_LABEL,
    offset: DEFAULTS.OFFSET,
    placement: DEFAULTS.PLACEMENT,
    'show-arrow': DEFAULTS.SHOW_ARROW,
    triggerID: 'toggletip-trigger',
  },
};

export const MultipleToggletips: StoryObj = {
  render: () =>
    html` <div style="display: flex; justify-content: center; align-items: center; height: 50vh; gap: 1rem;">
      <mdc-avatarbutton aria-label="Trigger button" icon-name="placeholder-bold" id="trigger-1" initials="MD">
      </mdc-avatarbutton>
      <mdc-avatarbutton aria-label="Trigger button" id="trigger-2" initials="MD"> </mdc-avatarbutton>
      <mdc-toggletip triggerid="trigger-1">
        <div>
          First toggletip with a
          <mdc-link
            inline
            icon-name="placeholder-bold"
            href="https://www.webex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </mdc-link>
        </div>
      </mdc-toggletip>
      <mdc-toggletip triggerid="trigger-2" close-button close-button-aria-label="Close toggletip">
        <div>Second toggletip with close button</div>
      </mdc-toggletip>
    </div>`,
};
