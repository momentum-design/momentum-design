import type { ValueOf } from '../../utils/types';
import type { StatusMessageIcon } from '../statusmessage/statusmessage.types';

import { VALIDATION } from './formfieldwrapper.constants';

type ValidationType = ValueOf<typeof VALIDATION>;

type HelperIconsList = StatusMessageIcon;

export type { HelperIconsList, ValidationType };
