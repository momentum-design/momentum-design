/**
 * Lightweight date utilities using native Date and Intl APIs.
 * Replaces Luxon for calendar/datepicker components.
 *
 * All dates are handled as local dates (no timezone conversion).
 * ISO strings are in yyyy-mm-dd format.
 */

interface DateTimeFormatWithRange extends Intl.DateTimeFormat {
  formatRange(startDate: Date, endDate: Date): string;
}

interface LocaleWithWeekInfo extends Intl.Locale {
  weekInfo?: { firstDay: number };
  getWeekInfo?: () => { firstDay: number };
}

function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseISO(iso: string): Date | null {
  if (!iso) return null;
  const parts = iso.split('-');
  if (parts.length !== 3) return null;
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const d = parseInt(parts[2], 10);
  if (Number.isNaN(y) || Number.isNaN(m) || Number.isNaN(d)) return null;
  const date = new Date(y, m - 1, d);
  if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) return null;
  return date;
}

function createDate(year: number, month: number, day: number = 1): Date {
  return new Date(year, month - 1, day);
}

function today(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function addDays(d: Date, days: number): Date {
  const result = new Date(d);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Add months, clamping the day to the last day of the target month
 * to match Luxon behavior (e.g. March 31 - 1 month → Feb 28, not March 3).
 */
function addMonths(d: Date, months: number): Date {
  const targetMonth = d.getMonth() + months;
  const result = new Date(d.getFullYear(), targetMonth, 1);
  const maxDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
  result.setDate(Math.min(d.getDate(), maxDay));
  return result;
}

/**
 * Add years, clamping the day to the last day of the target month
 * (handles Feb 29 in leap years → Feb 28 in non-leap years).
 */
function addYears(d: Date, years: number): Date {
  const targetYear = d.getFullYear() + years;
  const result = new Date(targetYear, d.getMonth(), 1);
  const maxDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
  result.setDate(Math.min(d.getDate(), maxDay));
  return result;
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isBefore(a: Date, b: Date): boolean {
  return a.getTime() < b.getTime();
}

function isAfter(a: Date, b: Date): boolean {
  return a.getTime() > b.getTime();
}

function isBeforeOrEqual(a: Date, b: Date): boolean {
  return a.getTime() <= b.getTime();
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

/**
 * Returns the ISO weekday: 1=Monday .. 7=Sunday
 */
function isoWeekday(d: Date): number {
  const day = d.getDay();
  return day === 0 ? 7 : day;
}

function startOfWeek(d: Date): Date {
  const day = d.getDay();
  const diff = (day + 6) % 7;
  return addDays(d, -diff);
}

function endOfWeek(d: Date): Date {
  return addDays(startOfWeek(d), 6);
}

/**
 * Locale-aware weekday names using Intl.DateTimeFormat.
 */
function getWeekdayNames(locale: string, style: 'narrow' | 'short' | 'long' = 'narrow'): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: style });
  // Jan 5 2026 is a Monday
  const monday = new Date(2026, 0, 5);
  const names: string[] = [];
  for (let i = 0; i < 7; i += 1) {
    names.push(formatter.format(addDays(monday, i)));
  }
  return names;
}

/**
 * Returns the starting day of the week for a locale.
 * 1 = Monday (ISO), 7 = Sunday.
 */
function getWeekStartDay(locale: string): number {
  try {
    const loc = new Intl.Locale(locale) as LocaleWithWeekInfo;
    const weekInfo = loc.weekInfo ?? loc.getWeekInfo?.();
    if (weekInfo?.firstDay) {
      return weekInfo.firstDay;
    }
  } catch {
    // fallback
  }

  const sundayLocales = ['en', 'ja', 'ko', 'zh', 'pt-BR'];
  const lang = locale.split('-')[0].toLowerCase();
  const full = locale.toLowerCase();
  if (sundayLocales.includes(lang) || sundayLocales.includes(full)) {
    return 7;
  }
  return 1;
}

/**
 * Locale-aware month + year label (e.g. "July 2025").
 */
function getMonthYearLabel(year: number, month: number, locale: string): string {
  const d = createDate(year, month, 1);
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(d);
}

/**
 * Locale-aware full date label for aria (e.g. "July 15, 2025").
 */
function formatDateFull(iso: string, locale: string): string {
  const d = parseISO(iso);
  if (!d) return '';
  return new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(d);
}

/**
 * Locale-aware medium date format (e.g. "Jul 15, 2025").
 */
function formatDateMed(iso: string, locale: string): string {
  const d = parseISO(iso);
  if (!d) return '';
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(d);
}

/**
 * Format a date range for display using the native Intl.DateTimeFormat.formatRange API.
 * Produces locale-correct output for all cases: same month, cross-month, and cross-year ranges.
 * e.g. en-US: "July 13 – 19, 2025", de-DE: "13.–19. Juli 2025", ja-JP: "2025年7月13日～19日"
 */
function formatDateRange(startIso: string, endIso: string, locale: string): string {
  const start = parseISO(startIso);
  const end = parseISO(endIso);
  if (!start || !end) return '';

  try {
    const formatter = new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return (formatter as DateTimeFormatWithRange).formatRange(start, end);
  } catch {
    return `${formatDateMed(startIso, locale)} \u2013 ${formatDateMed(endIso, locale)}`;
  }
}

/**
 * Get the locale-specific date parts order and separator.
 */
function getLocaleDateParts(locale: string): {
  order: Array<'month' | 'day' | 'year'>;
  separator: string;
} {
  const formatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const parts = formatter.formatToParts(new Date(2000, 11, 31));

  const order: Array<'month' | 'day' | 'year'> = [];
  let separator = '/';

  for (const part of parts) {
    if (part.type === 'month' && !order.includes('month')) order.push('month');
    if (part.type === 'day' && !order.includes('day')) order.push('day');
    if (part.type === 'year' && !order.includes('year')) order.push('year');
    if (part.type === 'literal' && part.value.trim()) {
      separator = part.value.trim();
    }
  }

  if (order.length !== 3) {
    return { order: ['month', 'day', 'year'], separator };
  }
  return { order, separator };
}

export {
  addDays,
  addMonths,
  addYears,
  createDate,
  daysInMonth,
  endOfMonth,
  endOfWeek,
  formatDateFull,
  formatDateMed,
  formatDateRange,
  getLocaleDateParts,
  getMonthYearLabel,
  getWeekdayNames,
  getWeekStartDay,
  isAfter,
  isBefore,
  isBeforeOrEqual,
  isSameDay,
  isoWeekday,
  parseISO,
  startOfMonth,
  startOfWeek,
  today,
  toISODate,
};
