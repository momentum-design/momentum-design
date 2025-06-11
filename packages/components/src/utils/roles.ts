import type { ValueOf } from './types';

// When adding a new role in this list, please sort this list.
const ROLE = {
  BUTTON: 'button',
  CHECKBOX: 'checkbox',
  GROUP: 'group',
  LIST: 'list',
  LISTITEM: 'listitem',
  MENU: 'menu',
  MENUBAR: 'menubar',
  MENUITEM: 'menuitem',
  MENUITEMCHECKBOX: 'menuitemcheckbox',
  MENUITEMRADIO: 'menuitemradio',
  NAVIGATION: 'navigation',
  RADIO: 'radio',
  RADIOGROUP: 'radiogroup',
  TOOLTIP: 'tooltip',
} as const;

type RoleType = ValueOf<typeof ROLE>;

export { ROLE, RoleType };
