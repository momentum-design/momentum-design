// AI-Assisted
import type { ValueOf } from '../../utils/types';

import { STATUSMESSAGE_ICON_NAME_BY_SEVERITY, STATUSMESSAGE_SEVERITY } from './statusmessage.constants';

type StatusMessageSeverity = ValueOf<typeof STATUSMESSAGE_SEVERITY>;

type StatusMessageIcon = ValueOf<typeof STATUSMESSAGE_ICON_NAME_BY_SEVERITY>;

export type { StatusMessageIcon, StatusMessageSeverity };
// End AI-Assisted
