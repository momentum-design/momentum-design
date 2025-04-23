import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import '.';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import '../button';
import '../option';
import '../select';
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
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-multiple"
    trigger="mouseenter"
    placement="bottom"
    z-index="20"
    show-arrow
  >
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-popover>
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
  <mdc-button>Button 1</mdc-button>
  <mdc-button>Button 2</mdc-button>
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

export const Default: StoryObj = {
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
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
  },
};

export const popoverWithSelect: StoryObj = {
  render: () => html`
    <div style="width: 10rem; height: 8rem; margin: 5rem;">
      <mdc-button id="select-button">Click me!</mdc-button>
      <mdc-popover triggerID="select-button" interactive hide-on-escape hide-on-outside-click>
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
      </mdc-popover>
    </div>
  `,
  ...hideAllControls(),
};
