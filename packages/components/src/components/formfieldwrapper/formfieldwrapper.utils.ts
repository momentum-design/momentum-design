import type { IconNames } from '../icon/icon.types';
import { VALIDATION } from './formfieldwrapper.constants';
import type { ValidationType } from './formfieldwrapper.types';

const getHelperIcon = (type: ValidationType): IconNames | '' => {
  const helperIconSizeMap: Record<ValidationType, IconNames | ''> = {
    [VALIDATION.ERROR]: 'error-legacy-badge-filled',
    [VALIDATION.WARNING]: 'warning-badge-filled',
    [VALIDATION.SUCCESS]: 'check-circle-badge-filled',
    [VALIDATION.PRIORITY]: 'priority-badge-filled',
    [VALIDATION.DEFAULT]: '',
  };
  return helperIconSizeMap[type] || '';
};

export { getHelperIcon };
