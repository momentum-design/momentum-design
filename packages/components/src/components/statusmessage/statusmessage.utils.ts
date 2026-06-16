// AI-Assisted
import { STATUSMESSAGE_ICON_NAMES, STATUSMESSAGE_SEVERITY } from './statusmessage.constants';
import type { StatusMessageIcon, StatusMessageSeverity } from './statusmessage.types';

const getStatusMessageIcon = (severity: StatusMessageSeverity): StatusMessageIcon => {
  const iconMap: Record<StatusMessageSeverity, StatusMessageIcon> = {
    [STATUSMESSAGE_SEVERITY.ERROR]: STATUSMESSAGE_ICON_NAMES.ERROR,
    [STATUSMESSAGE_SEVERITY.WARNING]: STATUSMESSAGE_ICON_NAMES.WARNING,
    [STATUSMESSAGE_SEVERITY.SUCCESS]: STATUSMESSAGE_ICON_NAMES.SUCCESS,
    [STATUSMESSAGE_SEVERITY.PRIORITY]: STATUSMESSAGE_ICON_NAMES.PRIORITY,
    [STATUSMESSAGE_SEVERITY.DEFAULT]: '',
  };

  return iconMap[severity] || '';
};

export { getStatusMessageIcon };
// End AI-Assisted
