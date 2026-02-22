import type { CSSResult, PropertyValueMap } from 'lit';
import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { FormInternalsMixin, AssociatedFormControl } from '../../utils/mixins/FormInternalsMixin';
import { KEYS } from '../../utils/keys';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { POPOVER_PLACEMENT, TRIGGER, DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import type { PopoverStrategy } from '../popover/popover.types';
import { SELECTION_MODE } from '../calendar/calendar.constants';
import type { SelectionMode } from '../calendar/calendar.types';
import { formatDateForDisplay, formatDateRangeForDisplay, getWeekRange } from '../calendar/calendar.utils';

import { CALENDAR_ICON, DEFAULTS, TRIGGER_ID, VARIANT } from './datepicker.constants';
import styles from './datepicker.styles';
import type { DatePickerVariant, Placement } from './datepicker.types';
import {
  buildISODate,
  getDateSeparator,
  getFieldMax,
  getFieldMin,
  getFieldOrder,
  getPlaceholder,
  parseISODate,
} from './datepicker.utils';

/**
 * mdc-datepicker is a component that allows users to select a date
 * or enter a date manually. It supports two variants:
 *
 * - `input`: Manual date entry with spinbutton inputs for month, day, and year
 * - `default`: A select-like trigger that opens a calendar for date range selection
 *
 * The component uses `mdc-calendar` inside a popover for date selection
 * and supports localization via a BCP 47 locale string.
 *
 * @tagname mdc-datepicker
 *
 * @dependency mdc-button
 * @dependency mdc-calendar
 * @dependency mdc-icon
 * @dependency mdc-popover
 * @dependency mdc-text
 * @dependency mdc-toggletip
 *
 * @event input - (React: onInput) This event is dispatched when the date value changes.
 * @event change - (React: onChange) This event is dispatched when the date value is committed.
 * @event focus - (React: onFocus) This event is dispatched when the datepicker receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the datepicker loses focus.
 *
 * @slot label - Slot for the label element.
 * @slot toggletip - Slot for the toggletip info icon button.
 * @slot help-icon - Slot for the helper/validation icon.
 * @slot help-text - Slot for the helper/validation text.
 *
 * @cssproperty --mdc-datepicker-background-color - Background color of the datepicker input.
 * @cssproperty --mdc-datepicker-border-color - Border color of the datepicker input.
 * @cssproperty --mdc-datepicker-text-color - Text color of the datepicker input.
 * @cssproperty --mdc-datepicker-width - Width of the datepicker component.
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element.
 * @csspart info-icon-btn - The info icon button element.
 * @csspart label-toggletip - The toggletip element.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element.
 * @csspart help-text-container - The container for helper/validation elements.
 * @csspart container - The outer container for the input and popover.
 * @csspart base-container - The input container with border and background.
 * @csspart spinbutton-group - The container for spinbutton elements.
 * @csspart spinbutton - A spinbutton input element.
 * @csspart separator - The separator between spinbuttons.
 * @csspart icon-container - The calendar/dropdown button container.
 * @csspart native-input - The hidden native input for form participation.
 * @csspart select-text - The selected value display text (default variant).
 */
class DatePicker extends FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)) implements AssociatedFormControl {
  /**
   * The variant of the date picker.
   * - `'input'`: Manual date entry with spinbutton inputs
   * - `'default'`: Select-like trigger for week selection
   * @default 'input'
   */
  @property({ type: String, reflect: true })
  variant: DatePickerVariant = DEFAULTS.VARIANT;

  /**
   * The selected date value as an ISO string (yyyy-mm-dd).
   */
  @property({ type: String, reflect: true })
  override value = '';

  /**
   * The selection mode for the calendar.
   * @default 'single'
   */
  @property({ type: String, reflect: true, attribute: 'selection-mode' })
  selectionMode: SelectionMode = SELECTION_MODE.SINGLE;

  /**
   * BCP 47 locale string for date formatting.
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
   * Placeholder text for the default (select) variant.
   */
  @property({ type: String, reflect: true })
  placeholder?: string;

  /**
   * The placement of the popover dropdown.
   * @default 'bottom-start'
   */
  @property({ type: String, reflect: true })
  placement: Placement = POPOVER_PLACEMENT.BOTTOM_START;

  /**
   * The strategy for positioning the popover.
   * @default 'absolute'
   */
  @property({ type: String, reflect: true })
  strategy: PopoverStrategy = POPOVER_DEFAULTS.STRATEGY;

  /**
   * Determines whether the dropdown should flip its position at the boundary.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-flip' })
  disableFlip: boolean = DEFAULTS.DISABLE_FLIP;

  /**
   * Element ID that the popover will be appended to.
   */
  @property({ type: String, reflect: true, attribute: 'append-to' })
  appendTo?: string;

  /**
   * Element ID the backdrop will be appended to.
   */
  @property({ type: String, reflect: true, attribute: 'backdrop-append-to' })
  backdropAppendTo?: string;

  /**
   * Accessible label for the month spinbutton.
   */
  @property({ type: String, attribute: 'locale-month-label' })
  localeMonthLabel = 'Month';

  /**
   * Accessible label for the day spinbutton.
   */
  @property({ type: String, attribute: 'locale-day-label' })
  localeDayLabel = 'Day';

  /**
   * Accessible label for the year spinbutton.
   */
  @property({ type: String, attribute: 'locale-year-label' })
  localeYearLabel = 'Year';

  /**
   * Accessible label for the calendar toggle button.
   */
  @property({ type: String, attribute: 'locale-calendar-label' })
  localeCalendarLabel = 'Open calendar';

  /**
   * Accessible description for spinbutton inputs.
   */
  @property({ type: String, attribute: 'locale-spinbutton-description' })
  localeSpinbuttonDescription = '';

  /**
   * Localized label for the today button on the calendar.
   */
  @property({ type: String, attribute: 'locale-today-label' })
  localeTodayLabel = 'Today';

  /**
   * Localized aria-label for the previous month button.
   */
  @property({ type: String, attribute: 'locale-prev-month-label' })
  localePrevMonthLabel = 'Go to previous month';

  /**
   * Localized aria-label for the next month button.
   */
  @property({ type: String, attribute: 'locale-next-month-label' })
  localeNextMonthLabel = 'Go to next month';

  @query('#month-spinbutton') private monthInput!: HTMLInputElement;

  @query('#day-spinbutton') private dayInput!: HTMLInputElement;

  @query('#year-spinbutton') private yearInput!: HTMLInputElement;

  @state() private displayPopover = false;

  @state() private internalMonth = '';

  @state() private internalDay = '';

  @state() private internalYear = '';

  @state() private internalEndValue = '';

  private pendingDigits = '';

  private pendingDigitTimeout?: ReturnType<typeof setTimeout>;

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateComplete
      .then(() => {
        this.parseValueToInternal();
        this.syncFormValue();
      })
      .catch(error => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.pendingDigitTimeout) {
      clearTimeout(this.pendingDigitTimeout);
    }
  }

  protected override willUpdate(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.willUpdate(changedProperties);

    if (changedProperties.has('value') && !this.displayPopover) {
      this.parseValueToInternal();
      this.syncFormValue();
    }
  }

  private parseValueToInternal(): void {
    const parts = parseISODate(this.value);
    if (parts) {
      this.internalMonth = parts.month;
      this.internalDay = parts.day;
      this.internalYear = parts.year;
    } else {
      this.internalMonth = '';
      this.internalDay = '';
      this.internalYear = '';
    }
  }

  private internalToValue(): string {
    return buildISODate(this.internalMonth, this.internalDay, this.internalYear);
  }

  private syncFormValue(): void {
    const val = this.value || this.internalToValue();
    if (this.internals) {
      this.internals.setFormValue(val || null);
    }
  }

  private commitValue(): void {
    const newVal = this.internalToValue();
    if (newVal && newVal !== this.value) {
      this.value = newVal;
      this.syncFormValue();
      this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }
  }

  private flushPendingInput(): void {
    if (this.pendingDigitTimeout) {
      clearTimeout(this.pendingDigitTimeout);
      this.pendingDigitTimeout = undefined;
    }
    this.pendingDigits = '';
    this.commitValue();
  }

  formResetCallback(): void {
    this.value = '';
    this.internalEndValue = '';
    this.parseValueToInternal();
    this.syncFormValue();
  }

  formStateRestoreCallback(state: string): void {
    this.value = state;
    this.parseValueToInternal();
    this.syncFormValue();
  }

  // -- Popover handling --

  private handleCalendarButtonClick(): void {
    if (this.disabled || this.readonly) return;
    if (!this.displayPopover) {
      this.flushPendingInput();
    }
    this.displayPopover = !this.displayPopover;
  }

  private handleSelectTriggerClick(): void {
    if (this.disabled || this.readonly) return;
    this.displayPopover = !this.displayPopover;
  }

  private handleSelectKeydown(event: KeyboardEvent): void {
    if (this.disabled || this.readonly) return;
    if (event.key === KEYS.ENTER || event.key === KEYS.SPACE || event.key === KEYS.ARROW_DOWN) {
      event.preventDefault();
      this.displayPopover = true;
    }
  }

  private handleDateSelected(event: CustomEvent): void {
    const { detail } = event;
    const mode = this.effectiveSelectionMode;

    if (mode === SELECTION_MODE.WEEK || mode === SELECTION_MODE.RANGE) {
      if (detail.startDate && detail.endDate) {
        this.value = detail.startDate;
        this.internalEndValue = detail.endDate;
      } else {
        this.value = detail.date;
        this.internalEndValue = '';
      }
    } else {
      this.value = detail.date;
    }

    this.parseValueToInternal();
    this.syncFormValue();
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

    const rangeComplete = mode === SELECTION_MODE.RANGE && this.value && this.internalEndValue;
    if (mode !== SELECTION_MODE.RANGE || rangeComplete) {
      this.displayPopover = false;
    }
  }

  // -- Spinbutton handling (input variant) --

  private getSpinbuttonInput(field: 'month' | 'day' | 'year'): HTMLInputElement | null {
    switch (field) {
      case 'month':
        return this.monthInput;
      case 'day':
        return this.dayInput;
      case 'year':
        return this.yearInput;
      default:
        return null;
    }
  }

  private getFieldValue(field: 'month' | 'day' | 'year'): string {
    switch (field) {
      case 'month':
        return this.internalMonth;
      case 'day':
        return this.internalDay;
      case 'year':
        return this.internalYear;
      default:
        return '';
    }
  }

  private setFieldValue(field: 'month' | 'day' | 'year', val: number): void {
    const maxDigits = field === 'year' ? 4 : 2;
    const padded = String(val).padStart(maxDigits, '0');
    switch (field) {
      case 'month':
        this.internalMonth = padded;
        break;
      case 'day':
        this.internalDay = padded;
        break;
      case 'year':
        this.internalYear = padded;
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  private handleSpinbuttonKeydown(event: KeyboardEvent, field: 'month' | 'day' | 'year'): void {
    const currentMonth = parseInt(this.internalMonth, 10) || undefined;
    const currentYear = parseInt(this.internalYear, 10) || undefined;
    const minVal = getFieldMin(field);
    const maxVal = getFieldMax(field, currentMonth, currentYear);
    const currentVal = parseInt(this.getFieldValue(field), 10) || 0;

    switch (event.key) {
      case KEYS.ARROW_UP: {
        event.preventDefault();
        const newVal = currentVal >= maxVal ? minVal : currentVal + 1;
        this.setFieldValue(field, newVal);
        this.commitValue();
        break;
      }
      case KEYS.ARROW_DOWN: {
        event.preventDefault();
        const newVal = currentVal <= minVal ? maxVal : currentVal - 1;
        this.setFieldValue(field, newVal);
        this.commitValue();
        break;
      }
      case KEYS.ARROW_LEFT: {
        event.preventDefault();
        this.advanceToPrevField(field);
        break;
      }
      case KEYS.ARROW_RIGHT: {
        event.preventDefault();
        this.advanceToNextField(field);
        break;
      }
      case KEYS.TAB:
        break;
      default: {
        if (/^\d$/.test(event.key)) {
          event.preventDefault();
          this.handleDigitInput(event.key, field, minVal, maxVal);
        } else {
          event.preventDefault();
        }
        break;
      }
    }
  }

  private handleDigitInput(digit: string, field: 'month' | 'day' | 'year', minVal: number, maxVal: number): void {
    if (this.pendingDigitTimeout) {
      clearTimeout(this.pendingDigitTimeout);
    }

    this.pendingDigits += digit;
    const maxDigits = field === 'year' ? 4 : 2;

    if (this.pendingDigits.length >= maxDigits) {
      let val = parseInt(this.pendingDigits, 10);
      if (val > maxVal) val = maxVal;
      if (val < minVal) val = minVal;
      this.setFieldValue(field, val);
      this.pendingDigits = '';
      this.commitValue();
      this.advanceToNextField(field);
    } else if (field !== 'year') {
      const firstDigit = parseInt(this.pendingDigits, 10);
      const maxFirstDigit = Math.floor(maxVal / 10);

      if (firstDigit > maxFirstDigit) {
        let val = firstDigit;
        if (val > maxVal) val = maxVal;
        if (val < minVal) val = minVal;
        this.setFieldValue(field, val);
        this.pendingDigits = '';
        this.commitValue();
        this.advanceToNextField(field);
      } else {
        this.setFieldValue(field, firstDigit);
        this.pendingDigitTimeout = setTimeout(() => {
          let val = firstDigit;
          if (val < minVal) val = minVal;
          this.setFieldValue(field, val);
          this.pendingDigits = '';
          this.commitValue();
          this.advanceToNextField(field);
        }, 1000);
      }
    } else {
      const partialVal = parseInt(this.pendingDigits, 10);
      this.setFieldValue(field, partialVal);
      this.pendingDigitTimeout = setTimeout(() => {
        this.pendingDigits = '';
        this.commitValue();
      }, 1000);
    }
  }

  private advanceToNextField(currentField: 'month' | 'day' | 'year'): void {
    const order = getFieldOrder(this.locale);
    const idx = order.indexOf(currentField);
    if (idx < order.length - 1) {
      const nextField = order[idx + 1];
      this.updateComplete
        .then(() => {
          const input = this.getSpinbuttonInput(nextField);
          input?.focus();
          input?.select();
        })
        .catch(() => {});
    }
  }

  private advanceToPrevField(currentField: 'month' | 'day' | 'year'): void {
    const order = getFieldOrder(this.locale);
    const idx = order.indexOf(currentField);
    if (idx > 0) {
      const prevField = order[idx - 1];
      this.updateComplete
        .then(() => {
          const input = this.getSpinbuttonInput(prevField);
          input?.focus();
          input?.select();
        })
        .catch(() => {});
    }
  }

  private handleSpinbuttonFocus(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    target.select();
    this.pendingDigits = '';
    if (this.pendingDigitTimeout) {
      clearTimeout(this.pendingDigitTimeout);
    }
  }

  private handleSpinbuttonAreaClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.getAttribute('role') !== 'spinbutton') {
      const order = getFieldOrder(this.locale);
      const firstInput = this.getSpinbuttonInput(order[0]);
      firstInput?.focus();
      firstInput?.select();
    }
  }

  private handleBaseKeydown(event: KeyboardEvent): void {
    if (event.key === KEYS.ESCAPE && this.displayPopover) {
      this.displayPopover = false;
    }
  }

  // -- Display text --

  private get effectiveSelectionMode(): SelectionMode {
    return this.variant === VARIANT.DEFAULT ? SELECTION_MODE.RANGE : this.selectionMode;
  }

  private getDisplayText(): string {
    if (!this.value) return '';

    if (this.effectiveSelectionMode === SELECTION_MODE.WEEK) {
      const { start, end } = getWeekRange(this.value, this.locale);
      return formatDateRangeForDisplay(start, end, this.locale);
    }

    if (this.effectiveSelectionMode === SELECTION_MODE.RANGE && this.internalEndValue) {
      return formatDateRangeForDisplay(this.value, this.internalEndValue, this.locale);
    }

    return formatDateForDisplay(this.value, this.locale);
  }

  // -- Render methods --

  private renderSpinbutton(field: 'month' | 'day' | 'year') {
    const value = this.getFieldValue(field);
    const currentMonth = parseInt(this.internalMonth, 10) || undefined;
    const currentYear = parseInt(this.internalYear, 10) || undefined;
    const minVal = getFieldMin(field);
    const maxVal = getFieldMax(field, currentMonth, currentYear);

    const labelMap: Record<string, string> = {
      month: this.localeMonthLabel,
      day: this.localeDayLabel,
      year: this.localeYearLabel,
    };

    const placeholderMap: Record<string, string> = {
      month: 'mm',
      day: 'dd',
      year: 'yyyy',
    };

    return html`
      <input
        id="${field}-spinbutton"
        part="spinbutton spinbutton-${field}"
        role="spinbutton"
        aria-label="${labelMap[field]}"
        aria-valuemin="${minVal}"
        aria-valuemax="${maxVal}"
        aria-valuenow="${value ? parseInt(value, 10) : ''}"
        aria-description="${this.localeSpinbuttonDescription}"
        .value="${value}"
        placeholder="${placeholderMap[field]}"
        autocomplete="off"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        tabindex="${this.disabled ? '-1' : '0'}"
        @keydown="${(e: KeyboardEvent) => this.handleSpinbuttonKeydown(e, field)}"
        @focus="${this.handleSpinbuttonFocus}"
      />
    `;
  }

  private renderInputVariant() {
    const fieldOrder = getFieldOrder(this.locale);
    const separator = getDateSeparator(this.locale);

    return html`
      <div
        id="${TRIGGER_ID}"
        part="base-container"
        class="mdc-focus-ring"
        @click="${this.handleSpinbuttonAreaClick}"
        @keydown="${this.handleBaseKeydown}"
      >
        <div part="spinbutton-group">
          ${fieldOrder.map(
            (field, index) => html`
              ${this.renderSpinbutton(field)}
              ${index < fieldOrder.length - 1 ? html`<span part="separator">${separator}</span>` : nothing}
            `,
          )}
        </div>
        <mdc-button
          part="icon-container"
          class="own-focus-ring"
          variant="tertiary"
          prefix-icon="${CALENDAR_ICON}"
          aria-label="${this.localeCalendarLabel}"
          aria-expanded="${this.displayPopover ? 'true' : 'false'}"
          aria-haspopup="dialog"
          ?disabled="${this.disabled}"
          size="20"
          @click="${this.handleCalendarButtonClick}"
        ></mdc-button>
      </div>
    `;
  }

  private renderDefaultVariant() {
    const displayText = this.getDisplayText();
    const placeholderText = this.placeholder || getPlaceholder(this.locale);

    return html`
      <div
        id="${TRIGGER_ID}"
        part="base-container"
        class="mdc-focus-ring"
        role="combobox"
        aria-expanded="${this.displayPopover ? 'true' : 'false'}"
        aria-haspopup="dialog"
        aria-label="${this.localeCalendarLabel}"
        tabindex="${this.disabled ? '-1' : '0'}"
        @click="${this.handleSelectTriggerClick}"
        @keydown="${this.handleSelectKeydown}"
      >
        ${displayText
          ? html`<span part="select-text">${displayText}</span>`
          : html`<span part="select-text select-placeholder">${placeholderText}</span>`}
        <mdc-icon part="icon-container" name="${CALENDAR_ICON}" size="1" aria-hidden="true"></mdc-icon>
      </div>
    `;
  }

  private renderPopover() {
    const calendarSelectionMode = this.effectiveSelectionMode;

    return html`
      <mdc-popover
        trigger="${TRIGGER.MANUAL}"
        triggerid="${TRIGGER_ID}"
        interactive
        ?visible="${this.displayPopover}"
        role=""
        backdrop
        backdrop-append-to="${ifDefined(this.backdropAppendTo)}"
        append-to="${ifDefined(this.appendTo)}"
        hide-on-outside-click
        hide-on-escape
        focus-back-to-trigger
        focus-trap
        disable-aria-expanded
        ?disable-flip="${this.disableFlip}"
        placement="${this.placement}"
        strategy="${ifDefined(this.strategy)}"
        @closebyescape="${(event: Event) => {
          if (event.target === event.currentTarget) {
            this.displayPopover = false;
          }
        }}"
        @closebyoutsideclick="${() => {
          this.displayPopover = false;
        }}"
        exportparts="popover-content"
      >
        <mdc-calendar
          value="${ifDefined(this.value || undefined)}"
          end-value="${ifDefined(this.internalEndValue || undefined)}"
          selection-mode="${calendarSelectionMode}"
          locale="${this.locale}"
          min="${ifDefined(this.min)}"
          max="${ifDefined(this.max)}"
          locale-today-label="${this.localeTodayLabel}"
          locale-prev-month-label="${this.localePrevMonthLabel}"
          locale-next-month-label="${this.localeNextMonthLabel}"
          @date-selected="${this.handleDateSelected}"
        ></mdc-calendar>
      </mdc-popover>
    `;
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div part="container">
        ${this.variant === VARIANT.INPUT ? this.renderInputVariant() : this.renderDefaultVariant()}
        <input
          id="${this.inputId}"
          part="native-input"
          name="${this.name}"
          type="text"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          ?readonly="${this.readonly}"
          tabindex="-1"
          aria-hidden="true"
          aria-disabled="${ifDefined(this.disabled || this.softDisabled)}"
        />
        ${this.renderPopover()}
      </div>
      ${this.helpText ? this.renderHelperText() : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default DatePicker;
