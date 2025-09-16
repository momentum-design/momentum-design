import type { ValueOf } from '../../utils/types';

import type { BANNER_VARIANT } from './banner.constants';

type BannerVariant = ValueOf<typeof BANNER_VARIANT>;

export type { BannerVariant };