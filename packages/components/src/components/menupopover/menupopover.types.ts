import type MenuItem from '../menuitem';

export type MenuPopoverChangeEvent = Event & {
  target: MenuItem;
};
export type MenuPopoverActionEvent = Event & {
  target: MenuItem;
};

export interface Events {
  onChangeEvent: MenuPopoverChangeEvent;
  onActionEvent: MenuPopoverActionEvent;
}
