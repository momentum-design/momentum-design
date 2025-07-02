import type MenuItem from '../menuitem';

export type MenuSectionChangeEvent = Event & {
  target: MenuItem;
};

export interface Events {
  onChangeEvent: MenuSectionChangeEvent;
}
