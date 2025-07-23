
import type { ValueOf } from '../../utils/types';

import { TOAST_VARIANT } from './toast.constants';

interface Events {
  onCloseEvent: Event;
}

type ToastVariant = ValueOf<typeof TOAST_VARIANT>;

export type { ToastVariant, Events };