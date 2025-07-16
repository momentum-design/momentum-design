// AI-Assisted
import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';

import '.';
import { textControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import '../button';
import '../option';
import '../select';
import '../menupopover';
import '../menuitem';
import { COLOR, DEFAULTS, POPOVER_PLACEMENT } from '../popover/popover.constants';

const createAnchorPopover = (args: Args, content: TemplateResult, triggerText: string) => html`
  <mdc-anchorpopover
    id="${args.id}"
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
    ?disable-aria-haspopup="${args['disable-aria-haspopup']}"
    @shown="${action('onshown')}"
    @hidden="${action('onhidden')}"
    @created="${action('oncreated')}"
    @destroyed="${action('ondestroyed')}"
  >
    <mdc-button slot="anchor">${triggerText}</mdc-button>
    ${content}
  </mdc-anchorpopover>
`;

const createCenteredContainer = (content: TemplateResult) => html`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    ${content}
  </div>
`;

const render = (args: Args) =>
  createCenteredContainer(
    createAnchorPopover(args, html`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`, 'Click me!'),
  );

const renderInteractive = (args: Args) =>
  createCenteredContainer(
    createAnchorPopover(
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
      'Click me!',
    ),
  );

const renderInteractiveHover = (args: Args) =>
  createCenteredContainer(
    createAnchorPopover(
      args,
      html`
        <mdc-button>Button 1</mdc-button>
        <mdc-button>Button 2</mdc-button>
        <mdc-button>Button 3</mdc-button>
        <mdc-button>Button 4</mdc-button>
        <mdc-button>Button 5</mdc-button>
      `,
      'Hover me!',
    ),
  );

const renderHideOnBlur = (args: Args) => html`
  <div style="display: flex; justify-content: center; align-items: center; height: 50vh; gap: 20px;">
    ${createAnchorPopover(
      args,
      html`
        <mdc-button>Button 1</mdc-button>
        <mdc-button>Button 2</mdc-button>
        <mdc-button>Button 3</mdc-button>
        <mdc-button>Button 4</mdc-button>
        <mdc-button>Button 5</mdc-button>
      `,
      'Click me!',
    )}
    <mdc-button>External Button</mdc-button>
  </div>
`;

const renderMultiple = (args: Args) => html`
  <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
    ${createAnchorPopover(args, html`<mdc-text>Interactive content on click</mdc-text>`, 'Click/ Hover me!')}
    <mdc-anchorpopover id="popover2" trigger="mouseenter" placement="bottom" z-index="20" show-arrow hide-on-escape>
      <mdc-button slot="anchor">Click/ Hover me!</mdc-button>
      <mdc-text>Description tooltip on mouseenter</mdc-text>
    </mdc-anchorpopover>
  </div>
`;

const renderNested = (args: Args) => html`
  <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
    ${createAnchorPopover(
      args,
      html`
        <mdc-text>Popover Level 1</mdc-text>
        <mdc-anchorpopover
          id="popover2"
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
          <mdc-button slot="anchor">Click me!</mdc-button>
          <mdc-text>Popover Level 2</mdc-text>
          <mdc-anchorpopover
            id="popover3"
            trigger="mouseenter"
            placement="bottom"
            z-index="30"
            show-arrow
            hide-on-escape
            hide-on-outside-click
          >
            <mdc-button slot="anchor">Hover me!</mdc-button>
            <mdc-text>Description tooltip on mouseenter</mdc-text>
          </mdc-anchorpopover>
        </mdc-anchorpopover>
      `,
      'Click me!',
    )}
  </div>
`;

const renderBackdrop = (args: Args) => html`
  <div style="display: flex; justify-content: center; align-items: center; height: 50vh; gap: 20px;">
    ${createAnchorPopover(
      args,
      html`
        <mdc-button>Button 1</mdc-button>
        <mdc-button>Button 2</mdc-button>
        <mdc-button>Button 3</mdc-button>
        <mdc-button>Button 4</mdc-button>
        <mdc-button>Button 5</mdc-button>
      `,
      'Click me!',
    )}
    <mdc-anchorpopover
      id="popover2"
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
      <mdc-button slot="anchor">Button 1</mdc-button>
      <mdc-text>Popover 2</mdc-text>
    </mdc-anchorpopover>
  </div>
`;

const meta: Meta = {
  title: 'Internal/anchorpopover',
  tags: ['autodocs'],
  component: 'mdc-anchorpopover',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    id: {
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
    'disable-aria-haspopup': {
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
    id: 'anchorpopover',
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
    'disable-aria-haspopup': false,
    interactive: DEFAULTS.INTERACTIVE,
  },
};

export const interactiveContent: StoryObj = {
  render: renderInteractive,
  args: {
    id: 'anchorpopover-interactive',
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
    id: 'anchorpopover-interactive-hover',
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
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
  },
};

export const interactiveMultiple: StoryObj = {
  render: renderMultiple,
  args: {
    id: 'anchorpopover-multiple',
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
    id: 'anchorpopover-nested',
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
    'hide-on-outside-click': true,
  },
};

export const hideOnBlur: StoryObj = {
  render: renderHideOnBlur,
  args: {
    id: 'anchorpopover-hide-on-blur',
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
    id: 'anchorpopover-backdrop',
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
      <mdc-anchorpopover interactive hide-on-escape hide-on-outside-click>
        <mdc-button slot="anchor">Click me!</mdc-button>
        <div style="width: 15rem;">
          <mdc-select>
            <mdc-option>Option 1</mdc-option>
            <mdc-option>Option 2</mdc-option>
            <mdc-option>Option 3</mdc-option>
          </mdc-select>
          <mdc-select>
            <mdc-option>Option 4</mdc-option>
            <mdc-option>Option 5</mdc-option>
            <mdc-option>Option 6</mdc-option>
          </mdc-select>
          <mdc-select>
            <mdc-option>Option 7</mdc-option>
            <mdc-option>Option 8</mdc-option>
            <mdc-option>Option 9</mdc-option>
          </mdc-select>
        </div>
      </mdc-anchorpopover>
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
        <mdc-anchorpopover hide-on-outside-click>
          <mdc-button slot="anchor">Click me!</mdc-button>
          <mdc-text>Popover Level 1 Trigger 1</mdc-text>
        </mdc-anchorpopover>
      </div>
      <div class="child">
        <mdc-anchorpopover hide-on-outside-click>
          <mdc-button slot="anchor">Click me!</mdc-button>
          <mdc-text>Popover Level 1 Trigger 2</mdc-text>
        </mdc-anchorpopover>
      </div>
      <div class="child">
        <mdc-anchorpopover hide-on-outside-click>
          <mdc-button slot="anchor">Click me!</mdc-button>
          <mdc-text>Popover Level 1 Trigger 3</mdc-text>
        </mdc-anchorpopover>
      </div>
    </div>
  `,
};

export const NestedMenu: StoryObj = {
  args: { ...Example.args, placement: POPOVER_PLACEMENT.RIGHT_START },
  render: () => html`
    <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
      <mdc-anchorpopover
        id="anchorpopover"
        trigger="click"
        placement="bottom"
        interactive
        focus-back-to-trigger
        focus-trap
        show-arrow
        hide-on-escape
        hide-on-outside-click
      >
        <mdc-button slot="anchor">Click me!</mdc-button>
        <div id="menupopover-test-wrapper">
          <h2>Hello world</h2>
          <mdc-menupopover triggerID="menu-trigger-btn" show-arrow>
            <mdc-button id="menu-trigger-btn">Menu</mdc-button>
            <mdc-menuitem label="Profile"></mdc-menuitem>
            <mdc-menuitem label="Notifications"></mdc-menuitem>
          </mdc-menupopover>
        </div>
      </mdc-anchorpopover>
    </div>
  `,
};
// End AI-Assisted
