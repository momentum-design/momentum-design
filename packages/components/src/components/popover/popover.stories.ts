/* eslint-disable import/order */
import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';

import { textControls, hideAllControls, hideControls } from '../../../config/storybook/utils';

import '../button';
import '../option';
import '../select';
import '../menupopover';
import '../menuitem';
import '../dialog';
import '../list';
import '../listitem';
import '../tooltip';

import type Popover from '.';
import type Dialog from '../dialog';

import { COLOR, DEFAULTS, POPOVER_PLACEMENT } from './popover.constants';

const createPopover = (args: Args, content: TemplateResult) => html`
  <mdc-popover
    id="${args.id}"
    triggerID="${args.triggerID}"
    trigger="${args.trigger}"
    placement="${args.placement}"
    delay="${args.delay}"
    z-index="${args['z-index']}"
    ?visible="${args.visible}"
    .offset="${args.offset ?? 0}"
    ?interactive=${args.interactive}
    ?focus-trap=${args['focus-trap']}
    ?should-focus-trap-wrap=${args['should-focus-trap-wrap']}
    ?show-arrow=${args['show-arrow']}
    color=${args.color}
    ?flip=${args.flip}
    ?size=${args.size}
    ?backdrop=${args.backdrop}
    ?close-button=${args['close-button']}
    ?prevent-scroll=${args['prevent-scroll']}
    ?hide-on-blur=${args['hide-on-blur']}
    ?hide-on-escape=${args['hide-on-escape']}
    ?hide-on-outside-click=${args['hide-on-outside-click']}
    ?focus-back-to-trigger=${args['focus-back-to-trigger']}
    append-to=${args['append-to']}
    close-button-aria-label="${args['close-button-aria-label']}"
    aria-label="${args['aria-label']}"
    aria-labelledby="${args['aria-labelledby']}"
    aria-describedby="${args['aria-describedby']}"
    role="${args.role}"
    ?disable-aria-expanded="${args['disable-aria-expanded']}"
    ?keep-connected-tooltip-closed="${args['keep-connected-tooltip-closed']}"
    @shown="${action('onshown')}"
    @hidden="${action('onhidden')}"
    @created="${action('oncreated')}"
    @destroyed="${action('ondestroyed')}"
  >
    ${content}
  </mdc-popover>
`;

const createTrigger = (triggerID: string, text: String) => html`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button id="${triggerID}">${text}</mdc-button>
  </div>
`;

const render = (args: Args) => html`
  ${createTrigger(args.triggerID, 'Click me!')}
  ${createPopover(args, html`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`)}
`;

const renderInteractive = (args: Args) => html`
  ${createTrigger('popover-trigger-interactive', 'Click me!')}
  ${createPopover(
    args,
    html`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `,
  )}
`;

const renderInteractiveHover = (args: Args) => html`
  ${createTrigger('popover-trigger-interactive-hover', 'Hover me!')}
  ${createPopover(
    args,
    html`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `,
  )}
`;

const renderHideOnBlur = (args: Args) => html`
  ${createTrigger('popover-trigger-hide-on-blur', 'Click me!')}
  ${createPopover(
    args,
    html`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `,
  )}
  <mdc-button>Button 1</mdc-button>
`;

const renderMultiple = (args: Args) => html`
  ${createTrigger('popover-trigger-multiple', 'Click/ Hover me!')}
  ${createPopover(args, html`<mdc-text>Interactive content on click</mdc-text>`)}
  <mdc-tooltip id="popover2" triggerID="popover-trigger-multiple" show-arrow hide-on-escape>
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-tooltip>
`;

const renderNested = (args: Args) => html`
  ${createTrigger('popover-trigger-nested', 'Click me!')}
  ${createPopover(
    args,
    html`<mdc-text>Popover Level 1</mdc-text> <mdc-button id="popover-trigger-2">Click me!</mdc-button>`,
  )}
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-2"
    trigger="click"
    placement="bottom"
    interactive
    z-index="20"
    focus-back-to-trigger
    focus-trap
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Popover Level 2</mdc-text>
    <mdc-button id="popover-trigger-3">Hover me!</mdc-button>
  </mdc-popover>

  <mdc-popover
    id="popover3"
    triggerID="popover-trigger-3"
    trigger="mouseenter"
    placement="bottom"
    z-index="30"
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-popover>
`;

const renderBackdrop = (args: Args) => html`
  ${createTrigger('popover-trigger-backdrop', 'Click me!')}
  ${createPopover(
    args,
    html`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `,
  )}
  <mdc-button id="popover-trigger-2">Button 1</mdc-button>
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-2"
    trigger="click"
    placement="bottom"
    interactive
    z-index="20"
    focus-back-to-trigger
    focus-trap
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Popover 2</mdc-text>
  </mdc-popover>
`;

const meta: Meta = {
  title: 'Components/popover',
  tags: ['autodocs'],
  component: 'mdc-popover',
  render,
  parameters: {
    badges: ['stable'],
  },
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
    color: {
      control: 'select',
      options: Object.values(COLOR),
    },
    flip: {
      control: 'boolean',
    },
    size: {
      control: 'boolean',
    },
    backdrop: {
      control: 'boolean',
    },
    'z-index': {
      if: {
        arg: 'z-index',
      },
      control: 'number',
    },
    'show-arrow': {
      control: 'boolean',
    },
    'close-button': {
      control: 'boolean',
    },
    interactive: {
      control: 'boolean',
    },
    'focus-trap': {
      control: 'boolean',
    },
    'should-focus-trap-wrap': {
      control: 'boolean',
    },
    'prevent-scroll': {
      control: 'boolean',
    },
    'hide-on-blur': {
      control: 'boolean',
    },
    'hide-on-escape': {
      control: 'boolean',
    },
    'hide-on-outside-click': {
      control: 'boolean',
    },
    'focus-back-to-trigger': {
      control: 'boolean',
    },
    'append-to': {
      control: 'text',
    },
    'close-button-aria-label': {
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
    role: {
      control: 'text',
    },
    'disable-aria-expanded': {
      control: 'boolean',
    },
    ...textControls([
      '--mdc-popover-arrow-border-radius',
      '--mdc-popover-arrow-border',
      '--mdc-popover-primary-background-color',
      '--mdc-popover-border-color',
      '--mdc-popover-inverted-background-color',
      '--mdc-popover-inverted-border-color',
      '--mdc-popover-inverted-text-color',
      '--mdc-popover-elevation-3',
      '--mdc-popover-max-width',
      '--mdc-popover-max-height',
      '--mdc-popover-width',
    ]),
    ...hideControls([
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
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    id: 'popover',
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'show-arrow': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'disable-aria-expanded': true,
    interactive: DEFAULTS.INTERACTIVE,
  },
};

export const interactiveContent: StoryObj = {
  render: renderInteractive,
  args: {
    id: 'popover-interactive',
    triggerID: 'popover-trigger-interactive',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    flip: DEFAULTS.FLIP,
    size: true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'disable-aria-expanded': false,
  },
};

export const interactiveHover: StoryObj = {
  render: renderInteractiveHover,
  args: {
    id: 'popover-interactive-hover',
    triggerID: 'popover-trigger-interactive-hover',
    trigger: 'mouseenter',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    'focus-back-to-trigger': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
  },
};

export const interactiveMultiple: StoryObj = {
  render: renderMultiple,
  args: {
    id: 'popover-multiple',
    triggerID: 'popover-trigger-multiple',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'focus-back-to-trigger': true,
    'hide-on-escape': true,
    'hide-on-outside-click': true,
    'show-arrow': true,
    'close-button': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
  },
};

export const nestedPopover: StoryObj = {
  render: renderNested,
  args: {
    id: 'popover-nested',
    triggerID: 'popover-trigger-nested',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': 10,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'focus-back-to-trigger': true,
    'hide-on-outside-click': true,
  },
};

export const hideOnBlur: StoryObj = {
  render: renderHideOnBlur,
  args: {
    id: 'popover-hide-on-blur',
    triggerID: 'popover-trigger-hide-on-blur',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.RIGHT,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    interactive: true,
    'show-arrow': true,
    'hide-on-blur': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
  },
};

export const popoverWithBackdrop: StoryObj = {
  render: renderBackdrop,
  args: {
    id: 'popover-backdrop',
    triggerID: 'popover-trigger-backdrop',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    interactive: true,
    'show-arrow': true,
    backdrop: true,
    'hide-on-outside-click': true,
    'focus-trap': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
  },
};

export const popoverWithSelect: StoryObj = {
  render: () => html`
    <div style="width: 10rem; height: 8rem; margin: 5rem;">
      <mdc-button id="select-button">Click me!</mdc-button>
      <mdc-popover
        triggerID="select-button"
        interactive
        hide-on-escape
        hide-on-outside-click
        focus-trap
        focus-back-to-trigger
      >
        <div style="width: 15rem;">
          <mdc-select>
            <mdc-selectlistbox>
              <mdc-option label="Option 1" value="option-1"></mdc-option>
              <mdc-option label="Option 2" value="option-2"></mdc-option>
              <mdc-option label="Option 3" value="option-3"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select>
            <mdc-selectlistbox>
              <mdc-option label="Option 4" value="option-4"></mdc-option>
              <mdc-option label="Option 5" value="option-5"></mdc-option>
              <mdc-option label="Option 6" value="option-6"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select>
            <mdc-selectlistbox>
              <mdc-option label="Option 7" value="option-7"></mdc-option>
              <mdc-option label="Option 8" value="option-8"></mdc-option>
              <mdc-option label="Option 9" value="option-9"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
        </div>
      </mdc-popover>
    </div>
  `,
  ...hideAllControls(),
};

export const MultipleSingleLevelPopovers: StoryObj = {
  render: () => html`
    <style>
      .container {
        display: flex;
        width: 150rem;
        height: 15rem;
        align-items: center;
      }
      .child {
        display: flex;
        width: 10rem;
        height: 2rem;
        justify-content: center;
      }
    </style>
    <div class="container">
      <div class="child">
        <mdc-button id="popover-trigger-1">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-1" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 1</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-2">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-2" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 2</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-3">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-3" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 3</mdc-text>
        </mdc-popover>
      </div>
    </div>
  `,
};

export const NestedMenu: StoryObj = {
  args: { ...Example.args, placement: POPOVER_PLACEMENT.RIGHT_START, triggerID: 'trigger-btn' },
  render: () => html`
    ${createTrigger('popover-trigger-interactive', 'Click me!')}
    <mdc-popover
      id="popover"
      triggerID="popover-trigger-interactive"
      trigger="click"
      placement="bottom"
      interactive
      focus-back-to-trigger
      focus-trap
      show-arrow
      hide-on-escape
      hide-on-outside-click
    >
      <div id="menupopover-test-wrapper">
        <h2>Hello world</h2>
        <mdc-button id="menu-trigger-btn">Menu</mdc-button>
        <mdc-menupopover triggerID="menu-trigger-btn" show-arrow>
          <mdc-menuitem label="Profile"></mdc-menuitem>
          <mdc-menuitem label="Notifications"></mdc-menuitem>
        </mdc-menupopover>
      </div>
    </mdc-popover>
  `,
};

export const PopoverWithTooltipAndDialog: StoryObj = {
  args: {
    ...Example.args,
    id: 'popover',
    placement: POPOVER_PLACEMENT.RIGHT_START,
    triggerID: 'trigger-btn',
    interactive: true,
    'focus-trap': true,
    'focus-back-to-trigger': true,
    'show-arrow': true,
    'hide-on-escape': true,
    'hide-on-outside-click': true,
    'keep-connected-tooltip-closed': true,
  },
  render: args => html`
    ${createTrigger(args.triggerID, 'Click me!')}
    ${createPopover(
      args,
      html`
        <mdc-button
          @click=${() => {
            const popover = document.getElementById('popover') as Popover;
            popover.hide();

            const dialog = document.getElementById('popover-dialog') as Dialog;
            dialog.visible = true;
          }}
        >
          Open dialog
        </mdc-button>
      `,
    )}
    <mdc-tooltip id="tooltip" triggerID="${args.triggerID}" placement="top"> Tooltip text </mdc-tooltip>
    <mdc-dialog
      id="popover-dialog"
      header-text="Dialog Title"
      @close=${() => {
        const dialog = document.getElementById('popover-dialog') as Dialog;
        dialog.visible = false;
      }}
    >
      <mdc-text slot="dialog-body">Dialog content goes here.</mdc-text>
      <mdc-button slot="footer">Close</mdc-button>
    </mdc-dialog>
  `,
};

export const PopoverScrollOverflow: StoryObj = {
  args: {
    ...Example.args,
    id: 'popover-scroll-overflow',
    triggerID: 'trigger-scroll-btn',
    interactive: true,
    'focus-trap': true,
    'focus-back-to-trigger': true,
    'show-arrow': true,
    'hide-on-escape': true,
    'hide-on-outside-click': true,
    size: true,
  },
  render: args => html`
    <mdc-list style="height: 200px; width: 100%; overflow-y: auto;">
      <mdc-listitem label="Item 1"></mdc-listitem>
      <mdc-listitem label="Item 2"></mdc-listitem>
      <mdc-listitem label="Item 3">
        <div style="height: fit-content" slot="content">
          <mdc-button id="${args.triggerID}">Trigger</mdc-button>
          ${createPopover(
            args,
            html`
              <div style="height: 300px; overflow-y: auto;">
                <mdc-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.</mdc-text
                >
                <mdc-text>More content...</mdc-text>
                <mdc-text>Even more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
              </div>
            `,
          )}
        </div>
      </mdc-listitem>
      <mdc-listitem label="Item 4"></mdc-listitem>
      <mdc-listitem label="Item 5"></mdc-listitem>
      <mdc-listitem label="Item 6"></mdc-listitem>
      <mdc-listitem label="Item 7"></mdc-listitem>
      <mdc-listitem label="Item 8"></mdc-listitem>
      <mdc-listitem label="Item 9"></mdc-listitem>
      <mdc-listitem label="Item 10"></mdc-listitem>
      <mdc-listitem label="Item 11"></mdc-listitem>
      <mdc-listitem label="Item 12"></mdc-listitem>
    </mdc-list>
  `,
};
