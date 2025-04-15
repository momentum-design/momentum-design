import { ValueOf } from '../../utils/types';
import { TOOLTIP_TYPES } from './tooltip.constants';

type TooltipType = ValueOf<typeof TOOLTIP_TYPES>;

export type { TooltipType };
