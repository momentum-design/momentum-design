import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { COLOR, POPOVER_PLACEMENT, DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import { DEFAULTS, TOOLTIP_TYPES } from './tooltip.constants';
import '../button';
import { disableControls, hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <div style="margin: 100px;">
    <mdc-button id="${args.triggerID}">Hover here</mdc-button>
    <mdc-tooltip
      color="${args.color}"
      delay="${args.delay}"
      id="${args.id}"
      offset="${args.offset}"
      placement="${args.placement}"
      ?show-arrow="${args['show-arrow']}"
      tooltip-type="${args['tooltip-type']}"
      triggerid="${args.triggerID}"
      @shown="${action('onshown')}"
      @hidden="${action('onhidden')}"
      @created="${action('oncreated')}"
      @destroyed="${action('ondestroyed')}"
      ?visible="${args.visible}"
      >${args.children}</mdc-tooltip>
  </div>
`;

const meta: Meta = {
  title: 'Components/tooltip',
  tags: ['autodocs'],
  component: 'mdc-tooltip',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: Object.values(COLOR),
    },
    delay: {
      control: 'text',
    },
    id: {
      description: 'The id of the tooltip(optional, if not set, a random id will be generated)',
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
    'tooltip-type': {
      control: 'select',
      options: Object.values(TOOLTIP_TYPES),
    },
    triggerID: {
      control: 'text',
    },
    ...disableControls([
      '--mdc-tooltip-max-width',
      '--mdc-tooltip-padding',
      '--mdc-tooltip-text-color',
      '--mdc-tooltip-text-color-contrast',
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
      'trigger',
      'z-index',
      'flip',
      'role',
      'focus-trap',
      'prevent-scroll',
      'close-button',
      'interactive',
      'hide-on-escape',
      'hide-on-blur',
      'hide-on-outside-click',
      'focus-back-to-trigger',
      'backdrop',
      'size',
      'append-to',
      'close-button-aria-label',
      'aria-labelledby',
      'aria-describedby',
      'showPopover',
      'hidePopover',
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
    children: 'This is a tooltip',
    color: POPOVER_DEFAULTS.COLOR,
    delay: DEFAULTS.DELAY,
    id: 'tooltip',
    offset: DEFAULTS.OFFSET,
    placement: DEFAULTS.PLACEMENT,
    'show-arrow': DEFAULTS.SHOW_ARROW,
    triggerID: 'tooltip-trigger',
    'tooltip-type': DEFAULTS.TOOLTIP_TYPE,
    visible: false,
  },
};
