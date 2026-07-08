import { STATUSMESSAGE_ICON_NAME_BY_SEVERITY } from '../statusmessage/statusmessage.constants';

import type { HelperIconsList, ValidationType } from './formfieldwrapper.types';

const getHelperIcon = (type: ValidationType): HelperIconsList | '' => STATUSMESSAGE_ICON_NAME_BY_SEVERITY[type] || '';

export { getHelperIcon };
