import { VALIDATION } from './formfieldwrapper.constants';
import type { HelperIconsList, ValidationType } from './formfieldwrapper.types';

const getHelperIcon = (type: ValidationType): HelperIconsList | '' => {
  const helperIconSizeMap: Record<ValidationType, HelperIconsList> = {
    [VALIDATION.ERROR]: 'error-legacy-badge-filled',
    [VALIDATION.WARNING]: 'warning-badge-filled',
    [VALIDATION.SUCCESS]: 'check-circle-badge-filled',
    [VALIDATION.PRIORITY]: 'priority-badge-filled',
    [VALIDATION.DEFAULT]: '',
  };
  return helperIconSizeMap[type] || '';
};

export { getHelperIcon };
