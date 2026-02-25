import type { CSSResult, PropertyValueMap } from 'lit';
import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Component } from '../../models';
import { KeyDownHandledMixin } from '../../utils/mixins/KeyDownHandledMixin';
import { ACTIONS, KeyToActionMixin } from '../../utils/mixins/KeyToActionMixin';
import {
  addDays,
  addMonths,
  addYears,
  createDate,
  endOfMonth,
  formatDateFull,
  isAfter,
  isBefore,
  parseISO,
  startOfMonth,
  startOfWeek,
  getWeekStartDay,
  today,
  toISODate,
} from '../../utils/date-utils';
import { KEYS } from '../../utils/keys';
import { BUTTON_VARIANTS } from '../button/button.constants';

import { CALENDAR_ICONS, DEFAULTS, SELECTION_MODE } from './calendar.constants';
import styles from './calendar.styles';
import type { CalendarDayInfo, CalendarGridWeek, SelectionMode } from './calendar.types';
import {
  formatDateRangeForDisplay,
  generateCalendarGrid,
  getDatesInRange,
  getMonthYearLabel,
  getWeekdayNames,
  getWeekRange,
} from './calendar.utils';

/**
 * mdc-calendar is a component that displays a monthly calendar grid
 * allowing users to select dates, weeks, or date ranges.
 *
 * The component supports three selection modes:
 * - `single`: Select a single date
 * - `week`: Select an entire week
 * - `range`: Select a date range (start and end)
 *
 * @tagname mdc-calendar
 *
 * @dependency mdc-button
 *
 * @event date-selected - Fires when a date or date range is selected.
 * @event month-changed - Fires when the displayed month changes.
 *
 * @cssproperty --mdc-calendar-background-color - Background color of the calendar.
 * @cssproperty --mdc-calendar-text-color - Text color of the calendar.
 * @cssproperty --mdc-calendar-day-selected-bg - Background color of selected days.
 * @cssproperty --mdc-calendar-day-selected-text-color - Text color of selected days.
 * @cssproperty --mdc-calendar-day-today-border-color - Border color for today's date.
 * @cssproperty --mdc-calendar-day-hover-bg - Background color on hover.
 * @cssproperty --mdc-calendar-range-bg - Background color for days within a range.
 * @cssproperty --mdc-calendar-day-outside-month-text-color - Text color for days outside the current month.
 * @cssproperty --mdc-calendar-day-disabled-text-color - Text color for disabled days.
 */
class Calendar extends KeyDownHandledMixin(KeyToActionMixin(Component)) {
  /**
   * The selected date as an ISO string (yyyy-mm-dd).
   * For range mode, this represents the start date.
   */
  @property({ type: String, reflect: true })
  value = '';

  /**
   * The end date for range selection mode (ISO string).
   */
  @property({ type: String, reflect: true, attribute: 'end-value' })
  endValue = '';

  /**
   * The selection mode of the calendar.
   * @default 'single'
   */
  @property({ type: String, reflect: true, attribute: 'selection-mode' })
  selectionMode: SelectionMode = DEFAULTS.SELECTION_MODE;

  /**
   * BCP 47 locale string for date formatting and week start day.
   * @default 'en-US'
   */
  @property({ type: String, reflect: true })
  locale: string = DEFAULTS.LOCALE;

  /**
   * Minimum selectable date (ISO string).
   */
  @property({ type: String, reflect: true })
  min?: string;

  /**
   * Maximum selectable date (ISO string).
   */
  @property({ type: String, reflect: true })
  max?: string;

  /**
   * Whether to show a "Today" button below the calendar grid.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-today-button' })
  showTodayButton = false;

  /**
   * Localized label for the "Today" button.
   */
  @property({ type: String, attribute: 'locale-today-label' })
  localeTodayLabel = '';

  /**
   * Localized aria-label for the previous month navigation button.
   */
  @property({ type: String, attribute: 'locale-prev-month-label' })
  localePrevMonthLabel = '';

  /**
   * Localized aria-label for the next month navigation button.
   */
  @property({ type: String, attribute: 'locale-next-month-label' })
  localeNextMonthLabel = '';

  @state() private displayMonth: number = new Date().getMonth() + 1;

  @state() private displayYear: number = new Date().getFullYear();

  @state() private focusedDate: string = '';

  @state() private gridHasFocus: boolean = false;

  @state() private rangeSelectionPhase: 'start' | 'end' = 'start';

  override connectedCallback(): void {
    super.connectedCallback();
    this.initializeDisplay();
  }

  protected override willUpdate(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.willUpdate(changedProperties);

    if (changedProperties.has('selectionMode')) {
      this.rangeSelectionPhase = 'start';
    }

    if (changedProperties.has('value') && this.value) {
      const dt = parseISO(this.value);
      if (dt) {
        this.displayMonth = dt.getMonth() + 1;
        this.displayYear = dt.getFullYear();
      }
    }
  }

  private initializeDisplay(): void {
    if (this.value) {
      const dt = parseISO(this.value);
      if (dt) {
        this.displayMonth = dt.getMonth() + 1;
        this.displayYear = dt.getFullYear();
        this.focusedDate = this.value;
        return;
      }
    }
    const t = today();
    const minDt = this.min ? parseISO(this.min) : undefined;
    const maxDt = this.max ? parseISO(this.max) : undefined;
    let focusDt = t;
    if (minDt && isBefore(t, minDt)) {
      focusDt = minDt;
    } else if (maxDt && isAfter(t, maxDt)) {
      focusDt = maxDt;
    }
    this.displayMonth = focusDt.getMonth() + 1;
    this.displayYear = focusDt.getFullYear();
    this.focusedDate = toISODate(focusDt);
  }

  private get calendarGrid(): CalendarGridWeek[] {
    const selectedDates = this.getSelectedDates();
    const rangeStart = this.getRangeStart();
    const rangeEnd = this.getRangeEnd();

    return generateCalendarGrid(
      this.displayYear,
      this.displayMonth,
      this.locale,
      selectedDates,
      rangeStart,
      rangeEnd,
      this.min,
      this.max,
    );
  }

  private getSelectedDates(): string[] {
    if (!this.value) return [];

    if (
      (this.selectionMode === SELECTION_MODE.WEEK || this.selectionMode === SELECTION_MODE.RANGE) &&
      this.value &&
      this.endValue
    ) {
      return getDatesInRange(this.value, this.endValue);
    }

    return [this.value];
  }

  private getRangeStart(): string | undefined {
    if ((this.selectionMode === SELECTION_MODE.WEEK || this.selectionMode === SELECTION_MODE.RANGE) && this.value) {
      return this.value;
    }
    return undefined;
  }

  private getRangeEnd(): string | undefined {
    if ((this.selectionMode === SELECTION_MODE.WEEK || this.selectionMode === SELECTION_MODE.RANGE) && this.endValue) {
      return this.endValue;
    }
    return undefined;
  }

  private canNavigatePrev(): boolean {
    if (!this.min) return true;
    const firstOfMonth = createDate(this.displayYear, this.displayMonth, 1);
    const minDt = parseISO(this.min);
    if (!minDt) return true;
    return isAfter(firstOfMonth, startOfMonth(minDt));
  }

  private canNavigateNext(): boolean {
    if (!this.max) return true;
    const lastOfMonth = endOfMonth(createDate(this.displayYear, this.displayMonth, 1));
    const maxDt = parseISO(this.max);
    if (!maxDt) return true;
    return isBefore(lastOfMonth, endOfMonth(maxDt));
  }

  private navigateMonth(delta: number): void {
    if (delta < 0 && !this.canNavigatePrev()) return;
    if (delta > 0 && !this.canNavigateNext()) return;

    const dt = addMonths(createDate(this.displayYear, this.displayMonth, 1), delta);
    this.displayMonth = dt.getMonth() + 1;
    this.displayYear = dt.getFullYear();

    this.dispatchEvent(
      new CustomEvent('month-changed', {
        detail: { month: this.displayMonth, year: this.displayYear },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleDayClick(dayInfo: CalendarDayInfo): void {
    if (dayInfo.isDisabled) return;
    this.selectDate(dayInfo.date);
  }

  private selectDate(dateIso: string): void {
    switch (this.selectionMode) {
      case SELECTION_MODE.SINGLE: {
        this.value = dateIso;
        this.focusedDate = dateIso;
        this.dispatchDateSelected(dateIso);
        break;
      }
      case SELECTION_MODE.WEEK: {
        const { start, end } = getWeekRange(dateIso, this.locale);
        this.value = start;
        this.endValue = end;
        this.focusedDate = dateIso;
        this.dispatchEvent(
          new CustomEvent('date-selected', {
            detail: { date: dateIso, startDate: start, endDate: end },
            bubbles: true,
            composed: true,
          }),
        );
        break;
      }
      case SELECTION_MODE.RANGE: {
        if (this.rangeSelectionPhase === 'start') {
          this.value = dateIso;
          this.endValue = '';
          this.rangeSelectionPhase = 'end';
          this.focusedDate = dateIso;
        } else {
          const startDt = parseISO(this.value);
          const endDt = parseISO(dateIso);
          if (startDt && endDt && isBefore(endDt, startDt)) {
            this.endValue = this.value;
            this.value = dateIso;
          } else {
            this.endValue = dateIso;
          }
          this.rangeSelectionPhase = 'start';
          this.focusedDate = dateIso;
          this.dispatchEvent(
            new CustomEvent('date-selected', {
              detail: { date: dateIso, startDate: this.value, endDate: this.endValue },
              bubbles: true,
              composed: true,
            }),
          );
        }
        break;
      }
      default:
        break;
    }
  }

  private dispatchDateSelected(dateIso: string): void {
    this.dispatchEvent(
      new CustomEvent('date-selected', {
        detail: { date: dateIso },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleGridKeydown(event: KeyboardEvent): void {
    const focusDt = this.focusedDate ? parseISO(this.focusedDate) : today();
    if (!focusDt) return;

    const action = this.getActionForKeyEvent(event);
    let newDt: Date | undefined;

    switch (action) {
      case ACTIONS.LEFT:
        event.preventDefault();
        newDt = addDays(focusDt, -1);
        break;
      case ACTIONS.RIGHT:
        event.preventDefault();
        newDt = addDays(focusDt, 1);
        break;
      case ACTIONS.UP:
        event.preventDefault();
        newDt = addDays(focusDt, -7);
        break;
      case ACTIONS.DOWN:
        event.preventDefault();
        newDt = addDays(focusDt, 7);
        break;
      case ACTIONS.HOME: {
        event.preventDefault();
        const weekStart = getWeekStartDay(this.locale);
        newDt = startOfWeek(focusDt, weekStart);
        break;
      }
      case ACTIONS.END: {
        event.preventDefault();
        const weekStartEnd = getWeekStartDay(this.locale);
        newDt = addDays(startOfWeek(focusDt, weekStartEnd), 6);
        break;
      }
      case ACTIONS.ENTER:
      case ACTIONS.SPACE:
        event.preventDefault();
        this.keyDownEventHandled();
        if (this.focusedDate && !this.isDateDisabled(this.focusedDate)) {
          this.selectDate(this.focusedDate);
        }
        return;
      default:
        // Handle PageUp/PageDown which aren't in ACTIONS
        if (event.key === KEYS.PAGE_UP) {
          event.preventDefault();
          newDt = event.shiftKey ? addYears(focusDt, -1) : addMonths(focusDt, -1);
          break;
        }
        if (event.key === KEYS.PAGE_DOWN) {
          event.preventDefault();
          newDt = event.shiftKey ? addYears(focusDt, 1) : addMonths(focusDt, 1);
          break;
        }
        return;
    }

    this.keyDownEventHandled();

    if (newDt) {
      const newIso = toISODate(newDt);
      if (this.isDateDisabled(newIso)) return;

      this.focusedDate = newIso;

      if (newDt.getMonth() + 1 !== this.displayMonth || newDt.getFullYear() !== this.displayYear) {
        this.displayMonth = newDt.getMonth() + 1;
        this.displayYear = newDt.getFullYear();
      }

      this.updateComplete
        .then(() => {
          const cell = this.shadowRoot?.querySelector(`[data-date="${newIso}"]`) as HTMLElement | null;
          cell?.focus();
        })
        .catch(() => {});
    }
  }

  private getGridAriaLabel(): string {
    if (this.selectionMode === SELECTION_MODE.WEEK && this.value && this.endValue) {
      return `Calendar, ${formatDateRangeForDisplay(this.value, this.endValue, this.locale)}`;
    }
    const monthYear = getMonthYearLabel(this.displayYear, this.displayMonth, this.locale);
    return `Calendar, ${monthYear}`;
  }

  private renderHeader() {
    const title = getMonthYearLabel(this.displayYear, this.displayMonth, this.locale);
    const prevDisabled = !this.canNavigatePrev();
    const nextDisabled = !this.canNavigateNext();

    return html`
      <div class="calendar-header">
        <mdc-text type="body-midsize-bold" tagname="span">${title}</mdc-text>
        <div class="calendar-header-nav">
          <mdc-button
            variant="${BUTTON_VARIANTS.TERTIARY}"
            prefix-icon="${CALENDAR_ICONS.CHEVRON_LEFT}"
            aria-label="${this.localePrevMonthLabel}"
            size="24"
            ?disabled="${prevDisabled}"
            @click="${() => this.navigateMonth(-1)}"
          ></mdc-button>
          <mdc-button
            variant="${BUTTON_VARIANTS.TERTIARY}"
            prefix-icon="${CALENDAR_ICONS.CHEVRON_RIGHT}"
            aria-label="${this.localeNextMonthLabel}"
            size="24"
            ?disabled="${nextDisabled}"
            @click="${() => this.navigateMonth(1)}"
          ></mdc-button>
        </div>
      </div>
    `;
  }

  private renderDay(dayInfo: CalendarDayInfo) {
    const isFocused = dayInfo.date === this.focusedDate;

    const dayClasses = {
      'calendar-day': true,
      'outside-month': !dayInfo.isCurrentMonth,
      today: dayInfo.isToday,
      selected: dayInfo.isSelected && !dayInfo.isInRange,
      disabled: dayInfo.isDisabled,
      focused: isFocused && this.gridHasFocus,
    };

    const wrapperClasses = {
      'calendar-day-wrapper': true,
      'in-range': dayInfo.isInRange,
      'range-start': dayInfo.isRangeStart,
      'range-end': dayInfo.isRangeEnd,
    };

    const tabIndex = isFocused ? 0 : -1;
    const isPartOfSelection = dayInfo.isSelected || dayInfo.isInRange;

    return html`
      <div class="${classMap(wrapperClasses)}">
        <button
          class="${classMap(dayClasses)}"
          role="gridcell"
          tabindex="${tabIndex}"
          data-date="${dayInfo.date}"
          aria-selected="${isPartOfSelection ? 'true' : 'false'}"
          aria-disabled="${dayInfo.isDisabled ? 'true' : nothing}"
          aria-current="${dayInfo.isToday ? 'date' : nothing}"
          aria-label="${formatDateFull(dayInfo.date, this.locale)}"
          @click="${() => this.handleDayClick(dayInfo)}"
        >
          ${dayInfo.day}
        </button>
      </div>
    `;
  }

  private handleGridFocusIn(): void {
    this.gridHasFocus = true;
  }

  private handleGridFocusOut(): void {
    this.gridHasFocus = false;
  }

  private renderGrid() {
    const grid = this.calendarGrid;
    const weekdays = getWeekdayNames(this.locale);

    return html`
      <div
        class="calendar-grid"
        role="grid"
        aria-label="${this.getGridAriaLabel()}"
        @keydown="${this.handleGridKeydown}"
        @focusin="${this.handleGridFocusIn}"
        @focusout="${this.handleGridFocusOut}"
      >
        <div class="calendar-row calendar-weekdays" role="row">
          ${weekdays.map(day => html`<span class="calendar-weekday" role="columnheader">${day}</span>`)}
        </div>
        ${grid.map(
          week => html` <div class="calendar-row" role="row">${week.days.map(day => this.renderDay(day))}</div> `,
        )}
      </div>
    `;
  }

  private isDateDisabled(dateIso: string): boolean {
    const dt = parseISO(dateIso);
    if (!dt) return true;
    const minDt = this.min ? parseISO(this.min) : undefined;
    const maxDt = this.max ? parseISO(this.max) : undefined;
    if (minDt && isBefore(dt, minDt)) return true;
    if (maxDt && isAfter(dt, maxDt)) return true;
    return false;
  }

  private isTodayDisabled(): boolean {
    return this.isDateDisabled(toISODate(today()));
  }

  private handleTodayClick(): void {
    const t = today();
    const todayIso = toISODate(t);
    this.displayMonth = t.getMonth() + 1;
    this.displayYear = t.getFullYear();
    this.selectDate(todayIso);
  }

  private renderTodayButton() {
    if (!this.showTodayButton) return nothing;

    const todayDisabled = this.isTodayDisabled();
    return html`
      <div class="calendar-today-button">
        <mdc-button
          variant="${BUTTON_VARIANTS.TERTIARY}"
          aria-label="${this.localeTodayLabel}"
          size="24"
          ?disabled="${todayDisabled}"
          @click="${this.handleTodayClick}"
          >${this.localeTodayLabel}</mdc-button
        >
      </div>
    `;
  }

  public override render() {
    return html` ${this.renderHeader()} ${this.renderGrid()} ${this.renderTodayButton()} `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Calendar;
