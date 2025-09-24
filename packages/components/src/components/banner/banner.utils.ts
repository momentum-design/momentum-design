import { BANNER_VARIANT, VARIANT_ICON_NAMES} from './banner.constants';
import type { BannerVariant } from './banner.types';

const getIconNameForVariant = (variant: BannerVariant): string | null => {
  switch (variant) {
    case BANNER_VARIANT.INFORMATIONAL:
      return VARIANT_ICON_NAMES.INFORMATIONAL_ICON_NAME;
    case BANNER_VARIANT.SUCCESS:
      return VARIANT_ICON_NAMES.SUCCESS_ICON_NAME;
    case BANNER_VARIANT.WARNING:
      return VARIANT_ICON_NAMES.WARNING_ICON_NAME;
    case BANNER_VARIANT.ERROR:
      return VARIANT_ICON_NAMES.ERROR_ICON_NAME;
    default:
      return null;
  }
}

export { getIconNameForVariant };
