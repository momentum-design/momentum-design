import { TOAST_VARIANT, VARIANT_ICON_NAMES } from './toast.constants';
import type { ToastVariant } from './toast.types';

const getIconNameForVariant = (variant: ToastVariant): string | null => {
  switch (variant) {
    case TOAST_VARIANT.SUCCESS:
      return VARIANT_ICON_NAMES.SUCCESS_ICON_NAME;
    case TOAST_VARIANT.WARNING:
      return VARIANT_ICON_NAMES.WARNING_ICON_NAME;
    case TOAST_VARIANT.ERROR:
      return VARIANT_ICON_NAMES.ERROR_ICON_NAME;
    default:
      return null;
  }
}

export { getIconNameForVariant };
