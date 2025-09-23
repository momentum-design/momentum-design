import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type Dialog from './dialog.component';
import { DIALOG_ROLE, DIALOG_SIZE, DIALOG_VARIANT } from './dialog.constants';

type DialogRole = (typeof DIALOG_ROLE)[number];

type DialogSize = (typeof DIALOG_SIZE)[number];

type DialogVariant = ValueOf<typeof DIALOG_VARIANT>;

interface Events {
  onShownEvent: TypedCustomEvent<Dialog, { show: boolean }>;
  onHiddenEvent: TypedCustomEvent<Dialog, { show: boolean }>;
  onCreatedEvent: TypedCustomEvent<Dialog, { show: boolean }>;
  onDestroyedEvent: TypedCustomEvent<Dialog, { show: boolean }>;
  onCloseEvent: TypedCustomEvent<Dialog, { show: boolean }>;
}

export type { DialogSize, DialogRole, DialogVariant, Events };
