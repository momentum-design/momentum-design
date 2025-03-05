import { VARIANTS } from './alertchip.constants';
import type { IconNames } from '../icon/icon.types';
import type { VariantType } from './alertchip.types';

const getAlertIcon = (type: VariantType): IconNames => {
  const alertIcon: Record<
    VariantType,
    IconNames
  > = {
    [VARIANTS.ERROR]: 'error-legacy-badge-filled',
    [VARIANTS.WARNING]: 'warning-badge-filled',
    [VARIANTS.SUCCESS]: 'check-circle-badge-filled',
    [VARIANTS.INFORMATIONAL]: 'info-badge-filled',
    [VARIANTS.NEUTRAL]: 'dnd-presence-badge-filled',
  };
  return alertIcon[type];
};

export { getAlertIcon };
