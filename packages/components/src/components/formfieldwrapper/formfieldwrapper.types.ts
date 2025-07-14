import type { ValueOf } from '../../utils/types';
import type { IconNames } from '../icon/icon.types';

import { VALIDATION } from './formfieldwrapper.constants';

type ValidationType = ValueOf<typeof VALIDATION>;

type HelperIconsList =
  | Extract<
      IconNames,
      'error-legacy-badge-filled' | 'warning-badge-filled' | 'check-circle-badge-filled' | 'priority-badge-filled'
    >
  | '';

export type { HelperIconsList, ValidationType };
