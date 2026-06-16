import { getStatusMessageIcon } from '../statusmessage/statusmessage.utils';

import type { HelperIconsList, ValidationType } from './formfieldwrapper.types';

const getHelperIcon = (type: ValidationType): HelperIconsList | '' => getStatusMessageIcon(type);

export { getHelperIcon };
