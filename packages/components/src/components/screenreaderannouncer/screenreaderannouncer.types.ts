import { ValueOf } from '../../utils/types';
import { ARIA_LIVE_VALUES } from './screenreaderannouncer.constants';

export type AriaLive = ValueOf<typeof ARIA_LIVE_VALUES>;
