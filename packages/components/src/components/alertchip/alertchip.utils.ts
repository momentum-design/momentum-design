import { VARIANTS } from './alertchip.constants';
import type { VariantType, IconListType } from './alertchip.types';

const getAlertIcon = (type: VariantType): IconListType => {
  const alertIcon: Record<VariantType, IconListType> = {
    [VARIANTS.ERROR]: 'error-legacy-badge-filled',
    [VARIANTS.INFORMATIONAL]: 'info-badge-filled',
    [VARIANTS.NEUTRAL]: 'dnd-presence-badge-filled',
    [VARIANTS.SUCCESS]: 'check-circle-badge-filled',
    [VARIANTS.WARNING]: 'warning-badge-filled',
  };
  return alertIcon[type];
};

export { getAlertIcon };
