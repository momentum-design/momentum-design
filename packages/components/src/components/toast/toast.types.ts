
import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type Toast from './toast.component';
import { TOAST_VARIANT } from './toast.constants';

interface Events {
  onCloseEvent: TypedCustomEvent<Toast>;
}

type ToastVariant = ValueOf<typeof TOAST_VARIANT>;

export type { ToastVariant, Events };