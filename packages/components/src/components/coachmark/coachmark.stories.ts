import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import Coachmark from '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import popoverMeta from '../popover/popover.stories';
import { DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import { DEFAULTS } from './coachmark.constants';

const render = (args: Args) => html`
  <div style="height: 50vh; display: inline-block">
    <mdc-button @click="${() => (document.getElementById(args.id) as Coachmark | undefined)?.showPopover()}">
      open
    </mdc-button>
    <mdc-button @click="${() => (document.getElementById(args.id) as Coachmark | undefined)?.hidePopover()}">
      close
    </mdc-button>
    <mdc-text id="${args.triggerID}">Anchor</mdc-text>
    <mdc-coachmark id="${args.id}"
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
      data-aria-label="${args['data-aria-label']}"
      data-aria-labelledby="${args['data-aria-labelledby']}"
      data-aria-describedby="${args['data-aria-describedby']}"
      data-role="${args['data-role']}"
      @popover-on-show="${action('onshow')}"
      @popover-on-hide="${action('onhide')}"
      @popover-on-created="${action('oncreated')}"
      @popover-on-destroyed="${action('ondestroyed')}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`;

const popoverArgTypes = { ...popoverMeta.argTypes };
delete popoverArgTypes.color;

const meta: Meta = {
  title: 'Work In Progress/coachmark',
  tags: ['autodocs'],
  component: 'mdc-coachmark',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    ...popoverArgTypes,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    id: 'coachmark',
    triggerID: 'coachmark-trigger',
    trigger: DEFAULTS.TRIGGER,
    placement: POPOVER_DEFAULTS.PLACEMENT,
    color: POPOVER_DEFAULTS.COLOR,
    visible: POPOVER_DEFAULTS.VISIBLE,
    offset: POPOVER_DEFAULTS.OFFSET,
    'focus-trap': POPOVER_DEFAULTS.FOCUS_TRAP,
    'prevent-scroll': POPOVER_DEFAULTS.PREVENT_SCROLL,
    showArrow: DEFAULTS.ARROW,
    'close-button': DEFAULTS.CLOSE_BUTTON,
    interactive: POPOVER_DEFAULTS.INTERACTIVE,
    delay: POPOVER_DEFAULTS.DELAY,
    'hide-on-escape': POPOVER_DEFAULTS.HIDE_ON_ESCAPE,
    'hide-on-blur': POPOVER_DEFAULTS.HIDE_ON_BLUR,
    'hide-on-outside-click': POPOVER_DEFAULTS.HIDE_ON_CLICK_OUTSIDE,
    'focus-back-to-trigger': POPOVER_DEFAULTS.FOCUS_BACK,
    backdrop: POPOVER_DEFAULTS.BACKDROP,
    flip: POPOVER_DEFAULTS.FLIP,
    size: POPOVER_DEFAULTS.SIZE,
    'z-index': POPOVER_DEFAULTS.Z_INDEX,
    'data-role': POPOVER_DEFAULTS.ROLE,
  },
};
