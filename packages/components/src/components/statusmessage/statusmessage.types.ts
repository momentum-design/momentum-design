// AI-Assisted
import type { ValueOf } from '../../utils/types';
import type { IconNames } from '../icon/icon.types';

import { STATUSMESSAGE_SEVERITY } from './statusmessage.constants';

type StatusMessageSeverity = ValueOf<typeof STATUSMESSAGE_SEVERITY>;

type StatusMessageIcon =
  | Extract<
      IconNames,
      'error-legacy-badge-filled' | 'warning-badge-filled' | 'check-circle-badge-filled' | 'priority-badge-filled'
    >
  | '';

export type { StatusMessageIcon, StatusMessageSeverity };
// End AI-Assisted
