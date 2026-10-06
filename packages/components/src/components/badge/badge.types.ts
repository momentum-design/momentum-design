import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type Badge from './badge.component';
import { ICON_VARIANT, MOTION_PHASE, PULSE_STEP, TYPE } from './badge.constants';

type IconVariant = ValueOf<typeof ICON_VARIANT>;
type BadgeType = ValueOf<typeof TYPE>;
type MotionPhase = ValueOf<typeof MOTION_PHASE>;
type PulseStep = ValueOf<typeof PULSE_STEP>;

type BadgeHiddenEvent = TypedCustomEvent<Badge, void>;

interface BadgeEventHandlers {
  onHiddenEvent: BadgeHiddenEvent;
}

interface Events {
  onHiddenEvent: BadgeHiddenEvent;
}

export type { BadgeEventHandlers, BadgeHiddenEvent, BadgeType, Events, IconVariant, MotionPhase, PulseStep };
