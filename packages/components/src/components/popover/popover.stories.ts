import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html, TemplateResult } from 'lit';
import { PLACEMENT } from './popover.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const createPopover = (
  id: string,
  triggerID: string,
  args: Args,
  content: TemplateResult,
) => html`
  <mdc-popover
    id="${id}"
    triggerID="${triggerID}"
    trigger="${args.trigger}"
    placement="${args.placement}"
    delay="${args.delay}"
    ?set-index="${args['set-index']}"
    ?visible="${args.visible}"
    .offset="${args.offset}"
    ?interactive=${args.interactive}
    ?focus-trap=${args['focus-trap']}
    ?show-arrow=${args['show-arrow']}
    ?inverted-color=${args['inverted-color']}
    ?close-button=${args['close-button']}
    ?prevent-scroll=${args['prevent-scroll']}
    ?hide-on-blur=${args['hide-on-blur']}
    ?hide-on-escape=${args['hide-on-escape']}
    ?hide-on-outside-click=${args['hide-on-outside-click']}
    ?focus-back-to-trigger=${args['focus-back-to-trigger']}
    aria-label="${args['aria-label']}"
    aria-labelledby="${args['aria-labelledby']}"
    aria-describeby="${args['aria-describeby']}"
    role="${args.role}"
  >
    ${content}
  </mdc-popover>
`;

const createTrigger = () => html`
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150vh;
    "
  >
    <mdc-button id="popover-trigger">Click me!</mdc-button>
  </div>
`;

const render = (args: Args) => html`
  ${createTrigger()}
  ${createPopover(
    'popover',
    'popover-trigger',
    args,
    html`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`,
  )}
`;

const renderInteractive = (args: Args) => html`
  ${createTrigger()}
  ${createPopover(
    'popover',
    'popover-trigger',
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

const renderMultiple = (args: Args) => html`
  ${createTrigger()}
  ${createPopover(
    'popover',
    'popover-trigger',
    args,
    html`<mdc-text>Interactive content on click</mdc-text>`,
  )}
<mdc-popover
  id="popover2"
  triggerID="popover-trigger"
  trigger="hover"
  placement="bottom"
  set-index="2"
  show-arrow
>
  <mdc-text>Description tooltip on hover</mdc-text>
</mdc-popover>
`;

const renderNested = (args: Args) => html`
  ${createTrigger()}
  ${createPopover(
    'popover',
    'popover-trigger',
    args,
    html`<mdc-text>Popover Level 1</mdc-text>
      <mdc-button id="popover-trigger-2">Click me!</mdc-button>`,
  )}
<mdc-popover
  id="popover2"
  triggerID="popover-trigger-2"
  trigger="click"
  placement="bottom"
  interactive
  set-index="2"
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
  trigger="hover"
  placement="bottom"
  set-index="3"
  show-arrow
>
  <mdc-text>Description tooltip on hover</mdc-text>
</mdc-popover>
`;

const meta: Meta = {
  title: 'Work In Progress/popover',
  tags: ['autodocs'],
  component: 'mdc-popover',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    placement: {
      control: 'select',
      options: Object.values(PLACEMENT),
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
    'set-index': {
      if: {
        arg: 'set-index',
      },
      control: 'number',
    },
    'show-arrow': {
      control: 'boolean',
    },
    'inverted-color': {
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
    'aria-label': {
      control: 'text',
    },
    'aria-labelledby': {
      control: 'text',
    },
    'aria-describeby': {
      control: 'text',
    },
    role: {
      control: 'text',
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: PLACEMENT.BOTTOM,
    offset: 4,
    delay: '0,0',
    'show-arrow': true,
    'inverted-color': false,
  },
};

export const interactiveContent: StoryObj = {
  render: renderInteractive,
  args: {
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: PLACEMENT.BOTTOM,
    offset: 4,
    delay: '0,0',
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'inverted-color': false,
  },
};

export const interactiveHover: StoryObj = {
  render: renderInteractive,
  args: {
    triggerID: 'popover-trigger',
    trigger: 'hover',
    placement: PLACEMENT.BOTTOM,
    offset: 4,
    delay: '0,100',
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'inverted-color': false,
  },
};

export const interactiveMultiple: StoryObj = {
  render: renderMultiple,
  args: {
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: PLACEMENT.TOP,
    offset: 4,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'close-button': true,
    'inverted-color': false,
  },
};
export const nestedPopover: StoryObj = {
  render: renderNested,
  args: {
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: PLACEMENT.TOP,
    offset: 4,
    'set-index': 1,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'inverted-color': false,
    'hide-on-escape': true,
  },
};
export const hideOnBlur: StoryObj = {
  render: renderInteractive,
  args: {
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: PLACEMENT.RIGHT,
    offset: 4,
    delay: '0,0',
    interactive: true,
    'show-arrow': true,
    'hide-on-blur': true,
    'inverted-color': false,
  },
};
