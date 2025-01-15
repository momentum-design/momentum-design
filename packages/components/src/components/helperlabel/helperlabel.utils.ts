import { VALIDATION } from './helperlabel.constants';
import { ValidationType } from './helperlabel.types';

const getHelperIcon = (type: ValidationType) => {
  switch (type) {
    case VALIDATION.ERROR:
      return 'error-legacy-filled';
    case VALIDATION.WARNING:
      return 'warning-filled';
    case VALIDATION.SUCCESS:
      return 'check-circle-filled';
    case VALIDATION.PRIORITY:
      return 'priority-circle-filled';
    default:
      return '';
  }
};

export { getHelperIcon };
