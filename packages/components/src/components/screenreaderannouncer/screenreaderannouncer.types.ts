import { ValueOf } from '../../utils/types';

import { ARIA_LIVE_VALUES } from './screenreaderannouncer.constants';

type AriaLive = ValueOf<typeof ARIA_LIVE_VALUES>;

export type { AriaLive };
