import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type Banner from './banner.component';
import type { BANNER_VARIANT, MOTION_PHASE } from './banner.constants';

type BannerVariant = ValueOf<typeof BANNER_VARIANT>;
type MotionPhase = ValueOf<typeof MOTION_PHASE>;

interface Events {
  onHiddenEvent: TypedCustomEvent<Banner, void>;
}

export type { BannerVariant, Events, MotionPhase };
