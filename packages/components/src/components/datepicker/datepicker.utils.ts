import { createDate, daysInMonth, getLocaleDateParts, parseISO, toISODate } from '../../utils/date-utils';

interface DateParts {
  month: string;
  day: string;
  year: string;
}

/**
 * Determines the field order for date spinbuttons based on locale.
 */
function getFieldOrder(locale: string): Array<'month' | 'day' | 'year'> {
  return getLocaleDateParts(locale).order;
}

/**
 * Gets the date separator character for a locale.
 */
function getDateSeparator(locale: string): string {
  return getLocaleDateParts(locale).separator;
}

/**
 * Parses an ISO date string into month, day, year parts.
 */
function parseISODate(isoDate: string): DateParts | null {
  if (!isoDate) return null;
  const dt = parseISO(isoDate);
  if (!dt) return null;
  return {
    month: String(dt.getMonth() + 1).padStart(2, '0'),
    day: String(dt.getDate()).padStart(2, '0'),
    year: String(dt.getFullYear()).padStart(4, '0'),
  };
}

/**
 * Builds an ISO date string from month, day, year parts.
 */
function buildISODate(month: string, day: string, year: string): string {
  const m = parseInt(month, 10);
  const d = parseInt(day, 10);
  const y = parseInt(year, 10);
  if (Number.isNaN(m) || Number.isNaN(d) || Number.isNaN(y)) return '';
  if (m < 1 || m > 12 || d < 1 || d > 31 || y < 1) return '';

  const maxDay = daysInMonth(y, m);
  if (d > maxDay) return '';

  const dt = createDate(y, m, d);
  return toISODate(dt);
}

/**
 * Gets the placeholder text for a date field based on locale order.
 */
function getPlaceholder(locale: string): string {
  const { order, separator } = getLocaleDateParts(locale);
  const labels: Record<string, string> = { month: 'mm', day: 'dd', year: 'yyyy' };
  return order.map(field => labels[field]).join(` ${separator} `);
}

/**
 * Gets the max value for a spinbutton field.
 */
function getFieldMax(field: 'month' | 'day' | 'year', month?: number, year?: number): number {
  switch (field) {
    case 'month':
      return 12;
    case 'day': {
      if (month && year) {
        return daysInMonth(year, month);
      }
      if (month) {
        return daysInMonth(2000, month);
      }
      return 31;
    }
    case 'year':
      return 9999;
    default:
      return 0;
  }
}

/**
 * Gets the min value for a spinbutton field.
 */
function getFieldMin(field: 'month' | 'day' | 'year'): number {
  switch (field) {
    case 'month':
      return 1;
    case 'day':
      return 1;
    case 'year':
      return 1;
    default:
      return 0;
  }
}

export { buildISODate, getDateSeparator, getFieldMax, getFieldMin, getFieldOrder, getPlaceholder, parseISODate };

export type { DateParts };
