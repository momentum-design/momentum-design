import { DIALOG_ROLE, DIALOG_SIZE } from './dialog.constants';

type DialogSize = (typeof DIALOG_SIZE)[number];

type DialogRole = (typeof DIALOG_ROLE)[number];

interface Events {
  onShownEvent: Event;
  onHiddenEvent: Event;
  onCreatedEvent: Event;
  onDestroyedEvent: Event;
}

export type { DialogSize, DialogRole, Events };
