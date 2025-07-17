import type { ValueOf } from './types';

// When adding a new role in this list, please sort this list.
const ROLE = {
  ALERTDIALOG: 'alertdialog',
  BUTTON: 'button',
  CHECKBOX: 'checkbox',
  COMBOBOX: 'combobox',
  DIALOG: 'dialog',
  GROUP: 'group',
  IMG: 'img',
  LIST: 'list',
  LISTBOX: 'listbox',
  LISTITEM: 'listitem',
  MENU: 'menu',
  MENUBAR: 'menubar',
  MENUITEM: 'menuitem',
  MENUITEMCHECKBOX: 'menuitemcheckbox',
  MENUITEMRADIO: 'menuitemradio',
  NAVIGATION: 'navigation',
  PRESENTATION: 'presentation',
  PROGRESSBAR: 'progressbar',
  RADIO: 'radio',
  RADIOGROUP: 'radiogroup',
  TAB: 'tab',
  TABLIST: 'tablist',
  TOOLTIP: 'tooltip',
  HEADING: 'heading',
  REGION: 'region',
} as const;

type RoleType = ValueOf<typeof ROLE>;

export { ROLE, RoleType };
