import type { PropertyValueMap } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { FormInternalsMixin, AssociatedFormControl } from '../../utils/mixins/FormInternalsMixin';
import { KEYS } from '../../utils/keys';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import '../button';
import { POPOVER_PLACEMENT, TRIGGER, DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import type { PopoverStrategy } from '../popover/popover.types';

import { ARROW_ICON, DEFAULTS, TIME_FORMAT, TRIGGER_ID, LISTBOX_ID } from './timepicker.constants';
import styles from './timepicker.styles';
import type { Placement, TimeFormat } from './timepicker.types';

/**
 * mdc-timepicker is a component that allows users to select a specific time
 * or enter a time manually. It supports both 12-hour and 24-hour formats.
 *
 * The component consists of:
 * - label - describes the time picker field
 * - input field - made up of 2-3 spinbuttons (hours, minutes, optional AM/PM period)
 * - dropdown arrow button - opens a flyout menu with predefined time intervals
 * - helper text - displayed below the input field
 *
 * Users can input values by:
 * - Manually entering numbers/characters in spinbuttons
 * - Navigating using arrow keys to increment/decrement values
 * - Selecting a predefined time from the dropdown menu
 *
 * @tagname mdc-timepicker
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-popover
 * @dependency mdc-text
 * @dependency mdc-toggletip
 *
 * @event input - (React: onInput) This event is dispatched when the time value changes.
 * @event change - (React: onChange) This event is dispatched when the time value is committed.
 * @event focus - (React: onFocus) This event is dispatched when the timepicker receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the timepicker loses focus.
 *
 * @slot label - Slot for the label element.
 * @slot toggletip - Slot for the toggletip info icon button.
 * @slot help-icon - Slot for the helper/validation icon.
 * @slot help-text - Slot for the helper/validation text.
 *
 * @cssproperty --mdc-timepicker-background-color - Background color of the timepicker input.
 * @cssproperty --mdc-timepicker-border-color - Border color of the timepicker input.
 * @cssproperty --mdc-timepicker-text-color - Text color of the timepicker input.
 * @cssproperty --mdc-timepicker-width - Width of the timepicker component.
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
 * @csspart separator - The colon separator between spinbuttons.
 * @csspart period - The AM/PM period spinbutton.
 * @csspart icon-container - The dropdown arrow button container.
 * @csspart native-input - The hidden native input for form participation.
 * @csspart listbox - The dropdown list container.
 * @csspart time-option - A time option in the dropdown.
 * @csspart time-option-selected - The selected time option in the dropdown.
 */
class TimePicker extends FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)) implements AssociatedFormControl {
  /**
   * The time format to use for display.
   * - `'12h'`: 12-hour format with AM/PM period
   * - `'24h'`: 24-hour format without period
   * @default '12h'
   */
  @property({ type: String, reflect: true, attribute: 'time-format' })
  timeFormat: TimeFormat = DEFAULTS.TIME_FORMAT;

  /**
   * The interval in minutes between time options in the dropdown menu.
   * @default 30
   */
  @property({ type: Number, reflect: true })
  interval: number = DEFAULTS.INTERVAL;

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
   * Determines whether the dropdown should flip its position when it hits the boundary.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-flip' })
  disableFlip: boolean = DEFAULTS.DISABLE_FLIP;

  /**
   * The minimum allowed time value in 24-hour format (HH:MM).
   */
  @property({ type: String, reflect: true })
  min?: string;

  /**
   * The maximum allowed time value in 24-hour format (HH:MM).
   */
  @property({ type: String, reflect: true })
  max?: string;

  /**
   * Accessible label for the hours spinbutton.
   * @default 'hours'
   */
  @property({ type: String, attribute: 'locale-hours-label' })
  localeHoursLabel: string = DEFAULTS.LOCALE_HOURS_LABEL;

  /**
   * Accessible label for the minutes spinbutton.
   * @default 'minutes'
   */
  @property({ type: String, attribute: 'locale-minutes-label' })
  localeMinutesLabel: string = DEFAULTS.LOCALE_MINUTES_LABEL;

  /**
   * Accessible label for the period (AM/PM) spinbutton.
   * @default 'period'
   */
  @property({ type: String, attribute: 'locale-period-label' })
  localePeriodLabel: string = DEFAULTS.LOCALE_PERIOD_LABEL;

  /**
   * Placeholder text for the hours spinbutton.
   * @default 'hh'
   */
  @property({ type: String, attribute: 'locale-hours-placeholder' })
  localeHoursPlaceholder: string = DEFAULTS.LOCALE_HOURS_PLACEHOLDER;

  /**
   * Placeholder text for the minutes spinbutton.
   * @default 'mm'
   */
  @property({ type: String, attribute: 'locale-minutes-placeholder' })
  localeMinutesPlaceholder: string = DEFAULTS.LOCALE_MINUTES_PLACEHOLDER;

  /**
   * Placeholder text for the period spinbutton.
   * @default '--'
   */
  @property({ type: String, attribute: 'locale-period-placeholder' })
  localePeriodPlaceholder: string = DEFAULTS.LOCALE_PERIOD_PLACEHOLDER;

  /**
   * Label for the AM period.
   * @default 'AM'
   */
  @property({ type: String, attribute: 'locale-am-label' })
  localeAmLabel: string = DEFAULTS.LOCALE_AM_LABEL;

  /**
   * Label for the PM period.
   * @default 'PM'
   */
  @property({ type: String, attribute: 'locale-pm-label' })
  localePmLabel: string = DEFAULTS.LOCALE_PM_LABEL;

  /**
   * Accessible label for the dropdown toggle button.
   * @default 'Show time picker'
   */
  @property({ type: String, attribute: 'locale-show-time-picker-label' })
  localeShowTimePickerLabel: string = DEFAULTS.LOCALE_SHOW_TIME_PICKER_LABEL;

  /**
   * Accessible label for the time options listbox.
   * @default 'Time options'
   */
  @property({ type: String, attribute: 'locale-time-options-label' })
  localeTimeOptionsLabel: string = DEFAULTS.LOCALE_TIME_OPTIONS_LABEL;

  /**
   * Accessible description for spinbutton inputs (instruction text).
   * @default 'To set value, use the up/down arrow keys or type a value'
   */
  @property({ type: String, attribute: 'locale-spinbutton-description' })
  localeSpinbuttonDescription: string = DEFAULTS.LOCALE_SPINBUTTON_DESCRIPTION;

  /** @internal */
  @query('mdc-button[part="icon-container"]') private dropdownButton!: HTMLElement;

  /** @internal */
  @query('#hours-spinbutton') private hoursInput!: HTMLInputElement;

  /** @internal */
  @query('#minutes-spinbutton') private minutesInput!: HTMLInputElement;

  /** @internal */
  @query('#period-spinbutton') private periodInput!: HTMLInputElement;

  /** @internal */
  @state() private displayPopover = false;

  /** @internal */
  @state() private internalHours = '';

  /** @internal */
  @state() private internalMinutes = '';

  /** @internal */
  @state() private internalPeriod: 'AM' | 'PM' = 'AM';

  /** @internal */
  @state() private focusedOptionIndex = -1;

  /** @internal */
  private pendingDigits = '';

  /** @internal */
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

    if (
      changedProperties.has('disabled') ||
      changedProperties.has('softDisabled') ||
      changedProperties.has('readonly')
    ) {
      if (this.disabled || this.softDisabled || this.readonly) {
        this.displayPopover = false;
      }
    }
  }

  protected override updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('displayPopover') && this.displayPopover) {
      this.focusMenuItemOnOpen();
    }
  }

  /**
   * When the menu opens, focus the selected item or the first item.
   * @internal
   */
  private focusMenuItemOnOpen(): void {
    const options = this.getTimeOptions();
    const currentValue = this.internalToValue();
    const selectedIndex = options.findIndex(opt => opt.value === currentValue);
    this.focusedOptionIndex = selectedIndex >= 0 ? selectedIndex : 0;

    this.updateComplete
      .then(() => {
        this.focusCurrentMenuItem();
      })
      .catch(() => {});
  }

  /**
   * Focuses the menu item at the current focusedOptionIndex.
   * @internal
   */
  private focusCurrentMenuItem(): void {
    const listbox = this.shadowRoot?.querySelector(`#${LISTBOX_ID}`);
    if (!listbox) return;
    const items = listbox.querySelectorAll('[role="option"]');
    if (items[this.focusedOptionIndex]) {
      (items[this.focusedOptionIndex] as HTMLElement).focus();
    }
  }

  /** @internal */
  formResetCallback(): void {
    this.value = '';
    this.internalHours = '';
    this.internalMinutes = '';
    this.internalPeriod = 'AM';
    this.syncFormValue();
    this.requestUpdate();
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    this.value = state;
    this.parseValueToInternal();
  }

  /**
   * Parses the value (24h HH:MM) into internal hours, minutes, and period.
   * @internal
   */
  private parseValueToInternal(): void {
    if (!this.value) {
      this.internalHours = '';
      this.internalMinutes = '';
      this.internalPeriod = 'AM';
      return;
    }

    const match = this.value.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return;

    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return;

    this.internalMinutes = String(minutes).padStart(2, '0');

    if (this.timeFormat === TIME_FORMAT.TWELVE_HOUR) {
      if (hours === 0) {
        this.internalPeriod = 'AM';
        this.internalHours = '12';
      } else if (hours < 12) {
        this.internalPeriod = 'AM';
        this.internalHours = String(hours).padStart(2, '0');
      } else if (hours === 12) {
        this.internalPeriod = 'PM';
        this.internalHours = '12';
      } else {
        this.internalPeriod = 'PM';
        this.internalHours = String(hours - 12).padStart(2, '0');
      }
    } else {
      this.internalHours = String(hours).padStart(2, '0');
    }
  }

  /**
   * Converts internal hours, minutes, and period to 24h HH:MM value.
   * @internal
   */
  private internalToValue(): string {
    if (!this.internalHours || !this.internalMinutes) return '';

    let hours = parseInt(this.internalHours, 10);

    if (this.timeFormat === TIME_FORMAT.TWELVE_HOUR) {
      if (this.internalPeriod === 'AM') {
        hours = hours === 12 ? 0 : hours;
      } else {
        hours = hours === 12 ? 12 : hours + 12;
      }
    }

    return `${String(hours).padStart(2, '0')}:${this.internalMinutes}`;
  }

  /**
   * Syncs the form value with the current internal state.
   * @internal
   */
  private syncFormValue(): void {
    const val = this.internalToValue();
    this.internals.setFormValue(val || this.value);
  }

  /**
   * Updates the value from internal state and fires events.
   * @internal
   */
  private commitValue(): void {
    const newValue = this.internalToValue();
    if (newValue && newValue !== this.value) {
      this.value = newValue;
      this.syncFormValue();
      this.dispatchEvent(
        new CustomEvent('input', {
          detail: { value: this.value },
          composed: true,
          bubbles: true,
        }),
      );
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value },
          composed: true,
          bubbles: true,
        }),
      );
    }
  }

  /**
   * Generates time interval options for the dropdown.
   * @internal
   */
  private getTimeOptions(): Array<{ label: string; value: string }> {
    const options: Array<{ label: string; value: string }> = [];
    const interval = Math.max(1, Math.min(this.interval, 60));

    for (let totalMinutes = 0; totalMinutes < 24 * 60; totalMinutes += interval) {
      const h = Math.floor(totalMinutes / 60);
      const m = totalMinutes % 60;
      const value24 = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

      let label: string;
      if (this.timeFormat === TIME_FORMAT.TWELVE_HOUR) {
        const period = h < 12 ? this.localeAmLabel : this.localePmLabel;
        let displayHour = h % 12;
        if (displayHour === 0) displayHour = 12;
        const displayMin = m === 0 ? '00' : String(m);
        label = `${displayHour}:${displayMin} ${period}`;
      } else {
        label = `${h}:${String(m).padStart(2, '0')}`;
      }

      // Filter by min/max if provided
      const withinMin = !this.min || value24 >= this.min;
      const withinMax = !this.max || value24 <= this.max;
      if (withinMin && withinMax) {
        options.push({ label, value: value24 });
      }
    }

    return options;
  }

  /**
   * Handles clicking on a time option in the dropdown.
   * @internal
   */
  private handleOptionClick(optionValue: string): void {
    this.value = optionValue;
    this.parseValueToInternal();
    this.displayPopover = false;
    this.syncFormValue();
    this.dispatchEvent(
      new CustomEvent('input', {
        detail: { value: this.value },
        composed: true,
        bubbles: true,
      }),
    );
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        composed: true,
        bubbles: true,
      }),
    );
    // Return focus to the dropdown button
    this.dropdownButton?.focus();
  }

  /**
   * Handles clicking the dropdown arrow button.
   * @internal
   */
  private handleDropdownClick(event: MouseEvent): void {
    if (this.disabled || this.softDisabled || this.readonly) return;
    this.displayPopover = !this.displayPopover;
    event.stopPropagation();
  }

  /**
   * Handles clicking on the spinbutton area (not the dropdown button).
   * Focuses the nearest spinbutton.
   * @internal
   */
  private handleSpinbuttonAreaClick(event: MouseEvent): void {
    if (this.disabled || this.softDisabled || this.readonly) return;
    const target = event.target as HTMLElement;
    // If clicking on a spinbutton itself, let it handle focus
    if (target.getAttribute('role') === 'spinbutton') return;
    // Otherwise focus the hours spinbutton
    this.hoursInput?.focus();
    this.hoursInput?.select();
  }

  /**
   * Handles keydown on the base container (when popover is closed).
   * @internal
   */
  private handleBaseKeydown(event: KeyboardEvent): void {
    if (this.disabled || this.softDisabled || this.readonly) return;

    if (event.key === KEYS.ESCAPE && this.displayPopover) {
      this.displayPopover = false;
      this.dropdownButton?.focus();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /**
   * Handles keydown on the popover/listbox (when open).
   * Supports ArrowDown/ArrowUp to navigate, Enter to select, Escape to close.
   * @internal
   */
  private handleListboxKeydown(event: KeyboardEvent): void {
    const options = this.getTimeOptions();
    const optionCount = options.length;
    if (optionCount === 0) return;

    switch (event.key) {
      case KEYS.ARROW_DOWN: {
        event.preventDefault();
        event.stopPropagation();
        this.focusedOptionIndex = (this.focusedOptionIndex + 1) % optionCount;
        this.focusCurrentMenuItem();
        break;
      }
      case KEYS.ARROW_UP: {
        event.preventDefault();
        event.stopPropagation();
        this.focusedOptionIndex = (this.focusedOptionIndex - 1 + optionCount) % optionCount;
        this.focusCurrentMenuItem();
        break;
      }
      case KEYS.ENTER: {
        event.preventDefault();
        event.stopPropagation();
        if (this.focusedOptionIndex >= 0 && this.focusedOptionIndex < optionCount) {
          this.handleOptionClick(options[this.focusedOptionIndex].value);
        }
        break;
      }
      case KEYS.ESCAPE: {
        event.preventDefault();
        event.stopPropagation();
        this.displayPopover = false;
        this.dropdownButton?.focus();
        break;
      }
      case KEYS.TAB: {
        // Close menu on tab and let focus move naturally
        this.displayPopover = false;
        break;
      }
      default:
        break;
    }
  }

  /**
   * Handles keydown on the hours spinbutton.
   * @internal
   */
  private handleHoursKeydown(event: KeyboardEvent): void {
    this.handleSpinbuttonKeydown(event, 'hours');
  }

  /**
   * Handles keydown on the minutes spinbutton.
   * @internal
   */
  private handleMinutesKeydown(event: KeyboardEvent): void {
    this.handleSpinbuttonKeydown(event, 'minutes');
  }

  /**
   * Handles keydown on the period spinbutton.
   * @internal
   */
  private handlePeriodKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case KEYS.ARROW_UP:
      case KEYS.ARROW_DOWN:
        event.preventDefault();
        this.internalPeriod = this.internalPeriod === 'AM' ? 'PM' : 'AM';
        this.commitValue();
        this.requestUpdate();
        break;
      case KEYS.TAB:
        // Allow default tab behavior
        break;
      case KEYS.ARROW_LEFT:
        event.preventDefault();
        this.minutesInput?.focus();
        this.minutesInput?.select();
        break;
      default: {
        event.preventDefault();
        const amChar = this.localeAmLabel.charAt(0).toLowerCase();
        const pmChar = this.localePmLabel.charAt(0).toLowerCase();
        const pressed = event.key.toLowerCase();
        if (pressed === amChar) {
          this.internalPeriod = 'AM';
          this.commitValue();
          this.requestUpdate();
        } else if (pressed === pmChar) {
          this.internalPeriod = 'PM';
          this.commitValue();
          this.requestUpdate();
        }
        break;
      }
    }
  }

  /**
   * Generic spinbutton keydown handler for hours and minutes.
   * @internal
   */
  private handleSpinbuttonKeydown(event: KeyboardEvent, field: 'hours' | 'minutes'): void {
    const is12h = this.timeFormat === TIME_FORMAT.TWELVE_HOUR;
    let minVal: number;
    let maxVal: number;

    if (field === 'hours') {
      minVal = is12h ? DEFAULTS.MIN_HOUR_12 : DEFAULTS.MIN_HOUR_24;
      maxVal = is12h ? DEFAULTS.MAX_HOUR_12 : DEFAULTS.MAX_HOUR_24;
    } else {
      minVal = DEFAULTS.MIN_MINUTE;
      maxVal = DEFAULTS.MAX_MINUTE;
    }

    const currentStr = field === 'hours' ? this.internalHours : this.internalMinutes;
    let current = currentStr ? parseInt(currentStr, 10) : minVal;

    switch (event.key) {
      case KEYS.ARROW_UP: {
        event.preventDefault();
        current = current >= maxVal ? minVal : current + 1;
        this.setSpinbuttonValue(field, current);
        this.commitValue();
        break;
      }
      case KEYS.ARROW_DOWN: {
        event.preventDefault();
        current = current <= minVal ? maxVal : current - 1;
        this.setSpinbuttonValue(field, current);
        this.commitValue();
        break;
      }
      case KEYS.ARROW_RIGHT: {
        event.preventDefault();
        if (field === 'hours') {
          this.minutesInput?.focus();
          this.minutesInput?.select();
        } else if (is12h) {
          this.periodInput?.focus();
          this.periodInput?.select();
        }
        break;
      }
      case KEYS.ARROW_LEFT: {
        event.preventDefault();
        if (field === 'minutes') {
          this.hoursInput?.focus();
          this.hoursInput?.select();
        }
        break;
      }
      case KEYS.TAB: {
        // Allow default tab behavior for navigation
        break;
      }
      default: {
        // Handle digit input
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

  /**
   * Handles digit input for spinbuttons with auto-advance logic.
   * @internal
   */
  private handleDigitInput(digit: string, field: 'hours' | 'minutes', minVal: number, maxVal: number): void {
    if (this.pendingDigitTimeout) {
      clearTimeout(this.pendingDigitTimeout);
    }

    this.pendingDigits += digit;

    if (this.pendingDigits.length >= 2) {
      // Two digits entered - commit and advance
      let val = parseInt(this.pendingDigits, 10);
      if (val > maxVal) val = maxVal;
      if (val < minVal) val = minVal;
      this.setSpinbuttonValue(field, val);
      this.pendingDigits = '';
      this.commitValue();
      this.advanceToNextField(field);
    } else {
      // Single digit - check if we can determine the value needs a second digit
      const firstDigit = parseInt(this.pendingDigits, 10);
      const maxFirstDigit = Math.floor(maxVal / 10);

      if (firstDigit > maxFirstDigit) {
        // Single digit already exceeds max first digit - auto-pad and advance
        let val = firstDigit;
        if (val > maxVal) val = maxVal;
        if (val < minVal) val = minVal;
        this.setSpinbuttonValue(field, val);
        this.pendingDigits = '';
        this.commitValue();
        this.advanceToNextField(field);
      } else {
        // Wait for second digit with timeout
        this.setSpinbuttonValue(field, firstDigit);
        this.pendingDigitTimeout = setTimeout(() => {
          // Auto-pad with leading zero
          let val = firstDigit;
          if (val < minVal) val = minVal;
          this.setSpinbuttonValue(field, val);
          this.pendingDigits = '';
          this.commitValue();
          this.advanceToNextField(field);
        }, 1000);
      }
    }
  }

  /**
   * Sets the value of a spinbutton field.
   * @internal
   */
  private setSpinbuttonValue(field: 'hours' | 'minutes', val: number): void {
    const padded = String(val).padStart(2, '0');
    if (field === 'hours') {
      this.internalHours = padded;
    } else {
      this.internalMinutes = padded;
    }
    this.requestUpdate();
  }

  /**
   * Advances focus to the next spinbutton field.
   * @internal
   */
  private advanceToNextField(currentField: 'hours' | 'minutes'): void {
    if (currentField === 'hours') {
      this.updateComplete
        .then(() => {
          this.minutesInput?.focus();
          this.minutesInput?.select();
        })
        .catch(() => {});
    } else if (this.timeFormat === TIME_FORMAT.TWELVE_HOUR) {
      this.updateComplete
        .then(() => {
          this.periodInput?.focus();
          this.periodInput?.select();
        })
        .catch(() => {});
    }
  }

  /**
   * Handles focus on a spinbutton - selects all text.
   * @internal
   */
  private handleSpinbuttonFocus(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    target.select();
    // Clear pending digits when switching fields
    this.pendingDigits = '';
    if (this.pendingDigitTimeout) {
      clearTimeout(this.pendingDigitTimeout);
    }
  }

  /**
   * Gets the display text for the current period using locale labels.
   * @internal
   */
  private get displayPeriod(): string {
    return this.internalPeriod === 'AM' ? this.localeAmLabel : this.localePmLabel;
  }

  /**
   * Gets the placeholder text for the hours spinbutton.
   * @internal
   */
  private get hoursPlaceholder(): string {
    return this.localeHoursPlaceholder;
  }

  /**
   * Gets the placeholder text for the minutes spinbutton.
   * @internal
   */
  private get minutesPlaceholder(): string {
    return this.localeMinutesPlaceholder;
  }

  /**
   * Gets the placeholder text for the period spinbutton.
   * @internal
   */
  private get periodPlaceholder(): string {
    return this.localePeriodPlaceholder;
  }

  /**
   * Renders the dropdown time options list.
   * @internal
   */
  private renderTimeOptions() {
    const options = this.getTimeOptions();
    const currentValue = this.internalToValue();
    const totalOptions = options.length;

    return options.map(
      (option, index) => html`
        <div
          part="${option.value === currentValue ? 'time-option-selected' : 'time-option'}"
          role="option"
          aria-selected="${option.value === currentValue ? 'true' : 'false'}"
          aria-posinset="${index + 1}"
          aria-setsize="${totalOptions}"
          tabindex="0"
          @click="${() => this.handleOptionClick(option.value)}"
        >
          <span>${option.label}</span>
          ${option.value === currentValue
            ? html`<mdc-icon name="check-bold" size="1" length-unit="rem" style="flex-shrink: 0"></mdc-icon>`
            : nothing}
        </div>
      `,
    );
  }

  public override render() {
    const is12h = this.timeFormat === TIME_FORMAT.TWELVE_HOUR;
    const hoursMin = is12h ? DEFAULTS.MIN_HOUR_12 : DEFAULTS.MIN_HOUR_24;
    const hoursMax = is12h ? DEFAULTS.MAX_HOUR_12 : DEFAULTS.MAX_HOUR_24;

    return html`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${TRIGGER_ID}"
          part="base-container"
          class="mdc-focus-ring"
          @click="${this.handleSpinbuttonAreaClick}"
          @keydown="${this.handleBaseKeydown}"
        >
          <div part="spinbutton-group">
            <input
              id="hours-spinbutton"
              part="spinbutton"
              role="spinbutton"
              aria-label="${this.localeHoursLabel}"
              aria-valuemin="${hoursMin}"
              aria-valuemax="${hoursMax}"
              aria-valuenow="${this.internalHours ? parseInt(this.internalHours, 10) : ''}"
              aria-description="${this.localeSpinbuttonDescription}"
              .value="${this.internalHours}"
              placeholder="${this.hoursPlaceholder}"
              ?disabled="${this.disabled}"
              ?readonly="${this.readonly}"
              tabindex="${this.disabled ? '-1' : '0'}"
              @keydown="${this.handleHoursKeydown}"
              @focus="${this.handleSpinbuttonFocus}"
            />
            <span part="separator">:</span>
            <input
              id="minutes-spinbutton"
              part="spinbutton"
              role="spinbutton"
              aria-label="${this.localeMinutesLabel}"
              aria-valuemin="${DEFAULTS.MIN_MINUTE}"
              aria-valuemax="${DEFAULTS.MAX_MINUTE}"
              aria-valuenow="${this.internalMinutes ? parseInt(this.internalMinutes, 10) : ''}"
              aria-description="${this.localeSpinbuttonDescription}"
              .value="${this.internalMinutes}"
              placeholder="${this.minutesPlaceholder}"
              ?disabled="${this.disabled}"
              ?readonly="${this.readonly}"
              tabindex="${this.disabled ? '-1' : '0'}"
              @keydown="${this.handleMinutesKeydown}"
              @focus="${this.handleSpinbuttonFocus}"
            />
            ${is12h
              ? html`
                  <input
                    id="period-spinbutton"
                    part="period"
                    role="spinbutton"
                    aria-label="${this.localePeriodLabel}"
                    aria-valuetext="${this.displayPeriod}"
                    aria-description="${this.localeSpinbuttonDescription}"
                    .value="${this.displayPeriod || ''}"
                    placeholder="${this.periodPlaceholder}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    tabindex="${this.disabled ? '-1' : '0'}"
                    @keydown="${this.handlePeriodKeydown}"
                    @focus="${this.handleSpinbuttonFocus}"
                  />
                `
              : nothing}
          </div>
          <mdc-button
            part="icon-container"
            class="own-focus-ring"
            variant="tertiary"
            prefix-icon="${this.displayPopover ? ARROW_ICON.ARROW_UP : ARROW_ICON.ARROW_DOWN}"
            aria-label="${this.localeShowTimePickerLabel}"
            aria-expanded="${this.displayPopover ? 'true' : 'false'}"
            aria-haspopup="true"
            ?disabled="${this.disabled}"
            size="20"
            @click="${this.handleDropdownClick}"
          ></mdc-button>
        </div>
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
        <mdc-popover
          trigger="${TRIGGER.MANUAL}"
          triggerid="${TRIGGER_ID}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          backdrop
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          disable-aria-expanded
          size
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
          <div
            id="${LISTBOX_ID}"
            part="listbox"
            role="listbox"
            aria-label="${this.localeTimeOptionsLabel}"
            @keydown="${this.handleListboxKeydown}"
          >
            ${this.renderTimeOptions()}
          </div>
        </mdc-popover>
      </div>
      ${this.helpText ? this.renderHelperText() : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default TimePicker;
