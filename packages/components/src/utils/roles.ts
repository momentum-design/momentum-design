import type { ValueOf } from './types';

// When adding a new role in this list, please sort this list.
const ROLE = {
  ALERTDIALOG: 'alertdialog',
  BUTTON: 'button',
  CHECKBOX: 'checkbox',
  COMBOBOX: 'combobox',
  DIALOG: 'dialog',
  GROUP: 'group',
  HEADING: 'heading',
  IMG: 'img',
  LIST: 'list',
  LISTBOX: 'listbox',
  LISTITEM: 'listitem',
  MAIN: 'main',
  MENU: 'menu',
  MENUBAR: 'menubar',
  MENUITEM: 'menuitem',
  MENUITEMCHECKBOX: 'menuitemcheckbox',
  MENUITEMRADIO: 'menuitemradio',
  NAVIGATION: 'navigation',
  OPTION: 'option',
  PRESENTATION: 'presentation',
  PROGRESSBAR: 'progressbar',
  RADIO: 'radio',
  RADIOGROUP: 'radiogroup',
  REGION: 'region',
  TAB: 'tab',
  TABLIST: 'tablist',
  TOOLTIP: 'tooltip',
} as const;

type RoleType = ValueOf<typeof ROLE>;

export { ROLE, RoleType };
