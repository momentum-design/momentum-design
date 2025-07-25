import { LINKBUTTON_SIZES } from "./linkbutton.constants";
import type { LinkButtonSize } from "./linkbutton.types";

 const getIconSize = (size: LinkButtonSize): number => {
    switch (size) {
      case LINKBUTTON_SIZES[12]:
        return 0.75;
      case LINKBUTTON_SIZES[14]:
        return 0.875;
      default:
        return 1;
    }
  }

export { getIconSize };