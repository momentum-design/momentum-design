import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { PLACEMENT } from './popover.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
<div
  style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150vh;
  "
>
  <mdc-button id="popover-trigger">
    Click me!
  </mdc-button>
</div>
<mdc-popover
  id="popover"
  triggerID="popover-trigger"
  trigger="${args.trigger}"
  placement="${args.placement}"
  set-index="${args['set-index']}"
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
>
  <mdc-text>Lorem ipsum dolor site ate aetns ctetuer</mdc-text>
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
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: PLACEMENT.BOTTOM,
    offset: 4,
    'show-arrow': false,
    'inverted-color': false,
  },
};
