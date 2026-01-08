import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import popoverMeta from '../popover/popover.stories';
import { DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import { hideControls } from '../../../config/storybook/utils';
import { ROLE } from '../../utils/roles';

import { DEFAULTS } from './coachmark.constants';
import type Coachmark from './coachmark.component';

import '../button';
import '../avatar';
import '../appheader';
import '../brandvisual';
import '../searchfield';
import '../divider';
import '../tablist';
import '../tab';
import '../link';
import '../badge';
import '../card';
import '../tooltip';
import '../list';
import '../listitem';
import '../progressbar';

const render = (args: Args) => html`
  <div style="height: 50vh; display: inline-block" role="${ROLE.MAIN}">
    <div style="display: flex; gap: 0.5rem;">
      <mdc-button @click="${() => (document.getElementById(args.id) as Coachmark | undefined)?.show()}">
        open
      </mdc-button>
      <mdc-button @click="${() => (document.getElementById(args.id) as Coachmark | undefined)?.hide()}">
        close
      </mdc-button>
    </div>
    <mdc-list>
      <mdc-listitem id="${args.triggerID}" label="Anchor Content"></mdc-listitem>
    </mdc-list>
    <mdc-coachmark
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
      ?disable-flip=${args['disable-flip']}
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
      @shown="${action('onshown')}"
      @hidden="${action('onhidden')}"
      @created="${action('oncreated')}"
      @destroyed="${action('ondestroyed')}"
      style="${args.style}"
      class="${args.class}"
    >
      <mdc-text type="body-midsize-bold" tagname="div">Coachmark</mdc-text>
      <mdc-text type="body-midsize-regular" tagname="div"
        >This is a sample coach mark. Follow me to walk you through different ways that I can be used.</mdc-text
      >
      <div style="display: flex; flex-direction: row-reverse; gap: .5rem; margin-top: 0.75rem;">
        <mdc-button variant="primary" inverted>Next</mdc-button>
        <mdc-button style="--mdc-button-border-color: var(--mds-color-theme-inverted-outline-button-normal);"
          >Back</mdc-button
        >
      </div>
    </mdc-coachmark>
  </div>
`;

const meta: Meta = {
  title: 'Components/coachmark',
  tags: ['autodocs'],
  component: 'mdc-coachmark',
  render,

  argTypes: {
    ...classArgType,
    ...styleArgType,
    ...popoverMeta.argTypes,
    ...hideControls(['color', 'aria-label', 'show-arrow']),
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
    'show-arrow': DEFAULTS.ARROW,
    'close-button': DEFAULTS.CLOSE_BUTTON,
    interactive: POPOVER_DEFAULTS.INTERACTIVE,
    delay: POPOVER_DEFAULTS.DELAY,
    'hide-on-escape': POPOVER_DEFAULTS.HIDE_ON_ESCAPE,
    'hide-on-blur': POPOVER_DEFAULTS.HIDE_ON_BLUR,
    'hide-on-outside-click': POPOVER_DEFAULTS.HIDE_ON_CLICK_OUTSIDE,
    'focus-back-to-trigger': POPOVER_DEFAULTS.FOCUS_BACK,
    backdrop: POPOVER_DEFAULTS.BACKDROP,
    'disable-flip': POPOVER_DEFAULTS.DISABLE_FLIP,
    size: POPOVER_DEFAULTS.SIZE,
    'z-index': POPOVER_DEFAULTS.Z_INDEX,
    role: POPOVER_DEFAULTS.ROLE,
    style: 'width: 17.5rem; height: 9rem;',
  },
};
