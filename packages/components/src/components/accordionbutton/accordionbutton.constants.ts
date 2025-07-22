import { html } from 'lit';

import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { SIZE } from '../accordiongroup/accordiongroup.constants';

const TAG_NAME = utils.constructTagName('accordionbutton');

const ICON_NAME = {
  ARROW_UP: 'arrow-up-bold' as Extract<IconNames, 'arrow-up-bold'>,
  ARROW_DOWN: 'arrow-down-bold' as Extract<IconNames, 'arrow-down-bold'>,
} as const;

const VARIANT = {
  DEFAULT: 'default',
  BORDERLESS: 'borderless',
} as const;

const DEFAULTS = {
  EXPANDED: false,
  SIZE: SIZE.SMALL,
  DATA_ARIA_LEVEL: 3,
  VARIANT: VARIANT.DEFAULT,
  ICON_NAME: ICON_NAME.ARROW_UP,
} as const;

const defaultChildren = html`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`;

export { TAG_NAME, ICON_NAME, DEFAULTS, VARIANT, defaultChildren };
