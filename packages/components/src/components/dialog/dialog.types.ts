import type { ValueOf } from '../../utils/types';
import { DIALOG_ROLE, DIALOG_SIZE, DIALOG_VARIANT } from './dialog.constants';

type DialogRole = (typeof DIALOG_ROLE)[number];

type DialogSize = ValueOf<typeof DIALOG_SIZE>;

type DialogVariant = ValueOf<typeof DIALOG_VARIANT>;

interface Events {
  onShownEvent: Event;
  onHiddenEvent: Event;
  onCreatedEvent: Event;
  onDestroyedEvent: Event;
  onCloseEvent: Event;
}

export type { DialogSize, DialogRole, DialogVariant, Events };
