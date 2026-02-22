import {
  addDays,
  createDate,
  formatDateMed,
  formatDateRange,
  getMonthYearLabel as getMonthYearLabelUtil,
  getWeekdayNames as getWeekdayNamesUtil,
  getWeekStartDay,
  isAfter,
  isBefore,
  isBeforeOrEqual,
  isSameDay,
  isoWeekday,
  parseISO,
  today,
  toISODate,
} from '../../utils/date-utils';

import { GRID_ROWS, GRID_COLS } from './calendar.constants';
import type { CalendarDayInfo, CalendarGridWeek } from './calendar.types';

/**
 * Returns abbreviated weekday names for the given locale, ordered by locale week start.
 * E.g. for 'en-US': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
 */
function getWeekdayNames(locale: string): string[] {
  const names = getWeekdayNamesUtil(locale, 'narrow');
  const startDay = getWeekStartDay(locale);
  if (startDay === 7) {
    return [names[6], ...names.slice(0, 6)];
  }
  return names;
}

/**
 * Generates the 6-row calendar grid for a given month/year.
 */
function generateCalendarGrid(
  year: number,
  month: number,
  locale: string,
  selectedDates: string[],
  rangeStart: string | undefined,
  rangeEnd: string | undefined,
  minDate: string | undefined,
  maxDate: string | undefined,
): CalendarGridWeek[] {
  const firstOfMonth = createDate(year, month, 1);
  const todayDate = today();
  const weekStart = getWeekStartDay(locale);

  const firstDayIso = isoWeekday(firstOfMonth);
  let offset: number;
  if (weekStart === 7) {
    offset = firstDayIso === 7 ? 0 : firstDayIso;
  } else {
    offset = firstDayIso - weekStart;
    if (offset < 0) offset += 7;
  }

  const gridStartDate = addDays(firstOfMonth, -offset);

  const minDt = minDate ? parseISO(minDate) : undefined;
  const maxDt = maxDate ? parseISO(maxDate) : undefined;
  const rangeSt = rangeStart ? parseISO(rangeStart) : undefined;
  const rangeEn = rangeEnd ? parseISO(rangeEnd) : undefined;

  const selectedSet = new Set(selectedDates);

  const weeks: CalendarGridWeek[] = [];

  for (let row = 0; row < GRID_ROWS; row += 1) {
    const days: CalendarDayInfo[] = [];
    for (let col = 0; col < GRID_COLS; col += 1) {
      const dt = addDays(gridStartDate, row * GRID_COLS + col);
      const isoDate = toISODate(dt);
      const isCurrentMonth = dt.getMonth() + 1 === month && dt.getFullYear() === year;
      const isToday = isSameDay(dt, todayDate);
      const isSelected = selectedSet.has(isoDate);

      let isDisabled = false;
      if (minDt && isBefore(dt, minDt)) isDisabled = true;
      if (maxDt && isAfter(dt, maxDt)) isDisabled = true;

      let isInRange = false;
      let isRangeStart = false;
      let isRangeEnd = false;

      if (rangeSt && rangeEn) {
        isRangeStart = isSameDay(dt, rangeSt);
        isRangeEnd = isSameDay(dt, rangeEn);
        isInRange = isBeforeOrEqual(rangeSt, dt) && isBeforeOrEqual(dt, rangeEn);
      }

      days.push({
        date: isoDate,
        day: dt.getDate(),
        isCurrentMonth,
        isToday,
        isSelected,
        isInRange,
        isRangeStart,
        isRangeEnd,
        isDisabled,
      });
    }
    weeks.push({ days });
  }

  return weeks;
}

/**
 * Returns the ISO dates for the week containing the given date.
 */
function getWeekRange(dateIso: string, locale: string): { start: string; end: string } {
  const dt = parseISO(dateIso);
  if (!dt) return { start: '', end: '' };

  const weekStartDay = getWeekStartDay(locale);

  let startOfWeek: Date;
  if (weekStartDay === 7) {
    const dayOfWeek = isoWeekday(dt);
    const daysBack = dayOfWeek === 7 ? 0 : dayOfWeek;
    startOfWeek = addDays(dt, -daysBack);
  } else {
    const dayOfWeek = isoWeekday(dt);
    const daysBack = (dayOfWeek - weekStartDay + 7) % 7;
    startOfWeek = addDays(dt, -daysBack);
  }

  const endOfWeek = addDays(startOfWeek, 6);

  return {
    start: toISODate(startOfWeek),
    end: toISODate(endOfWeek),
  };
}

/**
 * Returns the localized month and year string.
 */
function getMonthYearLabel(year: number, month: number, locale: string): string {
  return getMonthYearLabelUtil(year, month, locale);
}

/**
 * Returns all ISO date strings between start and end (inclusive).
 */
function getDatesInRange(startIso: string, endIso: string): string[] {
  const start = parseISO(startIso);
  const end = parseISO(endIso);
  if (!start || !end) return [];

  const dates: string[] = [];
  let current = start;
  while (isBeforeOrEqual(current, end)) {
    dates.push(toISODate(current));
    current = addDays(current, 1);
  }
  return dates;
}

/**
 * Format a date for display.
 */
function formatDateForDisplay(dateIso: string, locale: string): string {
  return formatDateMed(dateIso, locale);
}

/**
 * Format a date range for display.
 */
function formatDateRangeForDisplay(startIso: string, endIso: string, locale: string): string {
  return formatDateRange(startIso, endIso, locale);
}

export {
  formatDateForDisplay,
  formatDateRangeForDisplay,
  generateCalendarGrid,
  getDatesInRange,
  getMonthYearLabel,
  getWeekdayNames,
  getWeekRange,
  getWeekStartDay,
};
