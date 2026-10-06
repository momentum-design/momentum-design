import type { ValueOf, TypedCustomEvent } from '../../utils/types';

import type Calendar from './calendar.component';
import { GRID_LAYER_PHASE, SELECTION_MODE } from './calendar.constants';

type SelectionMode = ValueOf<typeof SELECTION_MODE>;

interface DateSelectionDetail {
  date: string;
  startDate?: string;
  endDate?: string;
}

type CalendarDateSelectedEvent = TypedCustomEvent<Calendar, DateSelectionDetail>;
type CalendarMonthChangedEvent = TypedCustomEvent<Calendar, { month: number; year: number }>;

interface Events {
  onDateSelectedEvent: CalendarDateSelectedEvent;
  onMonthChangedEvent: CalendarMonthChangedEvent;
}

interface CalendarDayInfo {
  date: string;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isDisabled: boolean;
}

interface CalendarGridWeek {
  days: CalendarDayInfo[];
}

interface DisplaySnapshot {
  month: number;
  year: number;
}

type GridLayerPhase = ValueOf<typeof GRID_LAYER_PHASE>;

export type {
  CalendarDateSelectedEvent,
  CalendarDayInfo,
  CalendarGridWeek,
  CalendarMonthChangedEvent,
  DateSelectionDetail,
  DisplaySnapshot,
  Events,
  GridLayerPhase,
  SelectionMode,
};
