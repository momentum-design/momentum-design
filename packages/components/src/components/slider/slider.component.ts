import type { CSSResult, PropertyValueMap } from 'lit';
import { html, nothing } from 'lit';
import { property, queryAll, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { Component } from '../../models';
import { KEYS } from '../../utils/keys';
import type { IconName } from '../accordionbutton/accordionbutton.types';

import { DEFAULTS } from './slider.constants';
import styles from './slider.styles';
import type { ThumbStateType } from './slider.types';

/**
 * Slider component is used to select a value or range of values from within a defined range.
 * It provides a visual representation of the current value(s) and allows users to adjust the value(s) by dragging the thumb(s) along the track.
 * It can be used as a single slider or a range slider. This is set by the boolean attribute `range`
 * If the step value is more than 1, tick marks are shown to represent the steps between the min and max values. The slider thumb will snap to the nearest tick mark.
 *
 * @tagname mdc-slider
 *
 * @dependency mdc-icon
 *
 * @csspart slider-tooltip - The tooltip of the slider
 * @csspart slider-track - The track of the slider
 * @csspart slider-wrapper - The wrapper around the slider input(s)
 * @csspart slider-ticks - The container for the tick marks
 * @csspart slider-tick - The individual tick marks
 * @csspart slider-input - The input element of the slider
 * @csspart slider-label - The label of the slider
 *
 * @event input - Fired when the slider value changes
 * @event change - Fired when the slider value is committed
 *
 * @cssproperty --mdc-slider-thumb-color - The color of the slider thumb
 * @cssproperty --mdc-slider-thumb-border-color - The color of the slider thumb border
 * @cssproperty --mdc-slider-thumb-size - The size of the slider thumb
 * @cssproperty --mdc-slider-input-size - The height of the slider input
 * @cssproperty --mdc-slider-tick-size - The size of the slider tick marks
 * @cssproperty --mdc-slider-track-height - The height of the slider track
 * @cssproperty --mdc-slider-tick-color - The color of the slider tick marks
 * @cssproperty --mdc-slider-progress-color - The color of the slider progress
 * @cssproperty --mdc-slider-track-color - The color of the slider track
 * @cssproperty --mdc-slider-tooltip-left - The left position of the slider tooltip
 * @cssproperty --mdc-slider-tick-left - The left position of the slider tick marks
 */
class Slider extends Component {
  /**
   * Internal state to track if the slider thumb is focused (single value)
   * @internal
   */
  @state() private thumbFocused: ThumbStateType = DEFAULTS.STATE;

  /**
   * @internal
   */
  @state() private thumbHovered: ThumbStateType = DEFAULTS.STATE;

  /**
   * Indicates whether it is a range slider. When true, the slider displays two handles for selecting a range of values.
   * When false, the slider displays a single handle for selecting a single value.
   * @default false
   */
  @property({ reflect: true, type: Boolean }) range = false;

  /**
   * The slider minimum value.
   * @default 0
   */
  @property({ reflect: true, type: Number }) min: number = DEFAULTS.MIN;

  /**
   * The slider maximum value.
   * @default 100
   */
  @property({ reflect: true, type: Number }) max: number = DEFAULTS.MAX;

  /**
   * Whether the slider is disabled. When true, the slider cannot be interacted with.
   */
  @property({ reflect: true, type: Boolean }) disabled?: boolean;

  /**
   * Acts similar to disabled, but component is focusable and tooltip is shown on focus.
   */
  @property({ reflect: true, type: Boolean, attribute: 'soft-disabled' }) softDisabled?: boolean;

  /**
   * Icon that represents the minimum value; ex: muted speaker.
   */
  @property({ reflect: true, type: String, attribute: 'leading-icon' }) leadingIcon?: string;

  /**
   * Icon that represents the maximum value; ex: speaker with full volume.
   */
  @property({ reflect: true, type: String, attribute: 'trailing-icon' }) trailingIcon?: string;

  /**
   * The slider value displayed when range is false.
   */
  @property({ reflect: true, type: Number }) value?: number;

  /**
   * The slider start value displayed when range is true.
   */
  @property({ reflect: true, type: Number, attribute: 'value-start' }) valueStart?: number;

  /**
   * The slider end value displayed when range is true.
   */
  @property({ reflect: true, type: Number, attribute: 'value-end' }) valueEnd?: number;

  /**
   * The step between values. If defined and greater than 1, we will show tick marks and the stepper will snap to the nearest tick mark.
   * @default 1
   */
  @property({ reflect: true, type: Number }) step: number = DEFAULTS.STEP;

  /**
   * It represents the label for slider component.
   */
  @property({ reflect: true, type: String }) label?: string;

  /**
   * The label text is shown below the slider (on leading side) representing the minimum starting value of the slider.
   */
  @property({ reflect: true, type: String, attribute: 'label-start' }) labelStart?: string;

  /**
   * The label text is shown below the slider (on trailing side) representing the maximum starting value of the slider.
   */
  @property({ reflect: true, type: String, attribute: 'label-end' }) labelEnd?: string;

  /**
   * An optional label for the slider's value displayed when range is false; if not set, the label is the 'value' itself.
   */
  @property({ reflect: true, type: String, attribute: 'value-label' }) valueLabel?: string;

  /**
   * An optional label for the slider's start value displayed when range is true; if not set, the label is the 'valueStart' itself.
   */
  @property({ reflect: true, type: String, attribute: 'value-label-start' }) valueLabelStart?: string;

  /**
   * An optional label for the slider's end value displayed when range is true; if not set, the label is the 'valueEnd' itself.
   */
  @property({ reflect: true, type: String, attribute: 'value-label-end' }) valueLabelEnd?: string;

  /**
   * Name attribute for the slider (single value).
   */
  @property({ reflect: true, type: String }) name?: string;

  /**
   * Name attribute for the slider's start handle when range is true.
   */
  @property({ reflect: true, type: String, attribute: 'name-start' }) nameStart?: string;

  /**
   * Name attribute for the slider's end handle when range is true.
   */
  @property({ reflect: true, type: String, attribute: 'name-end' }) nameEnd?: string;

  /**
   * Aria label for the slider's handle displayed when range is false.
   */
  @property({ reflect: true, type: String, attribute: 'data-aria-label' }) dataAriaLabel?: string;

  /**
   * Aria label for the slider's start handle displayed when range is true.
   */
  @property({ reflect: true, type: String, attribute: 'start-aria-label' }) startAriaLabel?: string;

  /**
   * Aria label for the slider's end handle displayed when range is true.
   */
  @property({ reflect: true, type: String, attribute: 'end-aria-label' }) endAriaLabel?: string;

  /**
   * Aria value text for the slider's value displayed when range is false.
   */
  @property({ reflect: true, type: String, attribute: 'data-aria-valuetext' }) dataAriaValuetext?: string;

  /**
   * Aria value text for the slider's start value displayed when range is true.
   */
  @property({ reflect: true, type: String, attribute: 'start-aria-valuetext' }) startAriaValuetext?: string;

  /**
   * Aria value text for the slider's end value displayed when range is true.
   */
  @property({ reflect: true, type: String, attribute: 'end-aria-valuetext' }) endAriaValueText?: string;

  /**
   * Targets all the input components with type='range'
   * @internal
   */
  @queryAll('input[type="range"]')
  protected inputElements!: HTMLInputElement[];

  constructor() {
    super();
    this.addEventListener('keydown', this.preventChange.bind(this));
  }

  protected override updated(changedProperties: PropertyValueMap<Slider>): void {
    super.updated(changedProperties);
    if (
      changedProperties.has('value') ||
      changedProperties.has('step') ||
      changedProperties.has('min') ||
      changedProperties.has('max') ||
      changedProperties.has('disabled') ||
      changedProperties.has('softDisabled') ||
      changedProperties.has('range') ||
      changedProperties.has('valueStart') ||
      changedProperties.has('valueEnd')
    ) {
      this.updateTrackStyling();
    }

    if (changedProperties.has('softDisabled')) {
      this.setSoftDisabled();
    }

    if (changedProperties.has('range') || changedProperties.has('valueStart') || changedProperties.has('valueEnd')) {
      this.initializeRangeSlider();
    }
  }

  /**
   * Prevents default behavior for mouse and keyboard events.
   * This prevents user interaction with the slider when it is soft-disabled.
   * @param e - The event to prevent.
   */
  private preventChange(e: Event) {
    if (this.softDisabled && ((e instanceof KeyboardEvent && e.key !== KEYS.TAB) || !(e instanceof KeyboardEvent))) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  /**
   * Sets the soft-disabled state for the slider.
   * Applies the appropriate ARIA attributes.
   */
  private setSoftDisabled() {
    this.inputElements.forEach(input => {
      const inputElement = input as HTMLInputElement;
      if (this.softDisabled) {
        inputElement.setAttribute('aria-disabled', 'true');
      } else {
        inputElement.removeAttribute('aria-disabled');
      }
    });
  }

  /**
   * Initializes the range slider by setting default values for the start and end handles.
   * Updates the slider's input elements to reflect the current values.
   */
  private initializeRangeSlider() {
    if (this.valueStart === undefined) {
      this.valueStart = this.min;
    }
    if (this.valueEnd === undefined) {
      this.valueEnd = this.max;
    }
    this.handleInput(0);
    this.handleInput(1);
  }

  /**
   * Handles input changes for either the start or end thumb of the range slider.
   * Ensures thumbs do not cross over each other.
   * @param thumbIndex - 0 for start thumb, 1 for end thumb.
   */
  private handleInput(thumbIndex: 0 | 1) {
    const input = this.inputElements[thumbIndex];

    if (!input) return;

    if (thumbIndex === 0) {
      if (!this.valueEnd) return; // Ensure valueEnd is available

      const inputValue = Number(input.value);

      if (inputValue > this.valueEnd) {
        input.value = String(this.valueEnd);
        this.valueStart = this.valueEnd;
      } else if (inputValue >= this.min && inputValue < this.valueEnd) {
        this.valueStart = inputValue;
      } else if (inputValue < this.min) {
        // Handle case where input goes below min
        input.value = String(this.min);
        this.valueStart = this.min;
      }
    } else {
      // Handling the end thumb
      if (!this.valueStart) return; // Ensure valueStart is available

      const inputValue = Number(input.value);

      if (inputValue < this.valueStart) {
        input.value = String(this.valueStart);
        this.valueEnd = this.valueStart;
      } else if (inputValue <= this.max && inputValue > this.valueStart) {
        this.valueEnd = inputValue;
      } else if (inputValue > this.max) {
        // Handle case where input goes above max
        input.value = String(this.max);
        this.valueEnd = this.max;
      }
    }
  }

  /**
   * Renders an icon element.
   * @param icon - The name of the icon to render.
   * @param part - The part attribute for the icon element.
   * @returns The icon element or null.
   */
  private iconTemplate(icon: string | undefined, part: string) {
    return typeof icon === 'string' && icon.length > 0
      ? html`<mdc-icon
          name="${icon as IconName}"
          part="${part}"
          length-unit="${DEFAULTS.ICON_LENGTH_UNIT}"
          size="${DEFAULTS.ICON_SIZE}"
        ></mdc-icon>`
      : null;
  }

  /**
   * Renders a visual representation of tooltip element and places it exactly above the slider thumb.
   * @param label - The label to display in the tooltip.
   * @param source - The source of the tooltip (e.g., 'start' or 'end').
   * @returns The tooltip element.
   */

  private tooltipTemplate(label: string | undefined, source?: string) {
    const [inputStart, inputEnd] = this.inputElements;
    const input = source === 'end' ? inputEnd : inputStart;
    const value = Number(input?.value);

    if (typeof value !== 'number' || Number.isNaN(value) || this.max === this.min) {
      return nothing;
    }
    const normalizedValue = (value - this.min) / (this.max - this.min);
    return html`<div part="slider-tooltip" aria-hidden="true" style="--mdc-slider-tooltip-left: ${normalizedValue}">
      ${label || value}
    </div> `;
  }

  /**
   * Updates the styling of the slider track.
   * The progress value is calculated and updated using appropriate tokens
   * In a range slider, both thumbs are considered.
   * The track is filled between the two thumbs.
   */
  updateTrackStyling() {
    let progressColor = `var(--mdc-slider-progress-color)`;
    let trackColor = `var(--mdc-slider-track-color)`;
    if (this.disabled || this.softDisabled) {
      progressColor = `var(--mds-color-theme-control-active-disabled)`;
      trackColor = `var(--mds-color-theme-control-inactive-disabled)`;
    }

    if (this.range) {
      if (!this.inputElements[1]) return;
      const valueStart = Number(this.inputElements[0].value);
      const valueEnd = Number(this.inputElements[1].value);
      const max = Number(this.inputElements[0].max) || 1;
      const progressStart = Math.max(0, Math.min(100, ((valueStart - this.min) / (max - this.min)) * 100));
      const progressEnd = Math.max(0, Math.min(100, ((valueEnd - this.min) / (max - this.min)) * 100));
      this.inputElements[1].style.background = `linear-gradient(
        to right,
        ${trackColor} 0%,
        ${trackColor} ${progressStart}%,
        ${progressColor} ${progressStart}%,
        ${progressColor} ${progressEnd}%,
        ${trackColor} ${progressEnd}%,
        ${trackColor} 100%
      )`;
    } else {
      if (!this.inputElements[0]) return;
      const value = Number(this.inputElements[0].value);
      const max = Number(this.inputElements[0].max) || 1;
      const progress = Math.max(0, Math.min(100, ((value - this.min) / (max - this.min)) * 100));
      this.inputElements[0].style.background = `linear-gradient(to right, ${progressColor} ${progress}%, ${trackColor} ${progress}%)`;
    }
  }

  /**
   * Handles the input event for the single value slider.
   * @param e - The input event.
   */
  onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = Number(input.value);
  }

  /**
   * Handles the change event for the single value slider.
   * @param e - The change event.
   */
  onChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = Number(input.value);
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
  }

  /**
   * Handles the change event for the start thumb of the range slider.
   * @param e - The change event.
   */
  onChangeStart(e: Event) {
    const input = e.target as HTMLInputElement;
    this.valueStart = Number(input.value);
    this.dispatchEvent(new CustomEvent('change', { detail: { valueStart: this.valueStart, valueEnd: this.valueEnd } }));
  }

  /**
   * Handles the change event for the end thumb of the range slider.
   * @param e - The change event.
   */
  onChangeEnd(e: Event) {
    const input = e.target as HTMLInputElement;
    this.valueEnd = Number(input.value);
    this.dispatchEvent(new CustomEvent('change', { detail: { valueEnd: this.valueEnd, valueStart: this.valueStart } }));
  }

  /**
   * Get the styles for the tick marks.
   * Since the ticks are placed above the slider, we need to hide the tick that is placed exactly where the slider thumb is.
   * Based on this condition, it renders the styles appropriately.
   * @param tick - The tick value.
   * @returns The styles for the tick mark.
   */
  getTickStyles(tick: number) {
    if (this.max === this.min) return '';
    const normalizedTick = (tick - this.min) / (this.max - this.min);

    const normalizedValues: number[] = [];
    if (this.inputElements[0]) {
      const value = Number(this.inputElements[0].value);
      const normalizedValue = (value - this.min) / (this.max - this.min);
      normalizedValues.push(normalizedValue);
    }
    if (this.range && this.inputElements[1]) {
      const valueEnd = Number(this.inputElements[1].value);
      const normalizedValueEnd = (valueEnd - this.min) / (this.max - this.min);
      normalizedValues.push(normalizedValueEnd);
    }
    // Hide tick if it is at the same pixel as any thumb (allowing for 1px tolerance)
    if (normalizedValues.includes(normalizedTick)) {
      return 'display:none;';
    }
    return `--mdc-slider-tick-left:${normalizedTick};`;
  }

  private renderTicks() {
    // Tick marks
    const ticks = [];
    if (this.step && this.step > 1) {
      for (let i = this.min; i <= this.max; i += this.step) {
        ticks.push(i);
      }
    }
    if (this.step > 1) {
      return html` <div part="slider-ticks">
        ${repeat(
          ticks,
          tick => tick,
          tick => html`<span part="slider-tick" style=${this.getTickStyles(tick)}></span>`,
        )}
      </div>`;
    }
    return nothing;
  }

  public override render() {
    return html`
      ${this.label ? html`<label part="slider-label" for="single-slider">${this.label}</label>` : null}
      <div part="slider-track">
        ${this.iconTemplate(this.leadingIcon, 'leading-icon')}
        <div part="slider-wrapper">
          ${this.renderTicks()}
          ${this.range
            ? html`
                <input
                  id="start-slider"
                  part="start-slider"
                  type="range"
                  min="${this.min}"
                  max="${this.max}"
                  step="${this.step ?? 1}"
                  .value="${String(this.valueStart ?? this.min)}"
                  ?disabled="${this.disabled}"
                  name="${this.nameStart ?? ''}"
                  aria-valuemin="${this.min}"
                  aria-valuemax="${this.max}"
                  aria-valuenow="${this.valueStart ?? this.min}"
                  aria-label="${this.startAriaLabel || this.label || ''}"
                  aria-valuetext="${this.startAriaValuetext || this.valueLabelStart || this.valueStart || ''}"
                  tabindex="${this.disabled ? -1 : 0}"
                  @input=${() => this.handleInput(0)}
                  @change=${this.onChangeStart}
                  @focus=${() => {
                    this.thumbFocused = 'start';
                  }}
                  @blur=${() => {
                    this.thumbFocused = undefined;
                  }}
                  @mouseenter=${() => {
                    if (!this.disabled) this.thumbHovered = 'start';
                  }}
                  @mouseleave=${() => {
                    this.thumbHovered = undefined;
                  }}
                />
                ${this.thumbFocused === 'start' || this.thumbHovered === 'start'
                  ? this.tooltipTemplate(this.valueLabelStart)
                  : nothing}
                <input
                  id="end-slider"
                  part="end-slider"
                  type="range"
                  min="${this.min}"
                  max="${this.max}"
                  step="${this.step ?? 1}"
                  .value="${String(this.valueEnd ?? this.max)}"
                  ?disabled="${this.disabled}"
                  name="${this.nameEnd ?? ''}"
                  aria-valuemin="${this.min}"
                  aria-valuemax="${this.max}"
                  aria-valuenow="${this.valueEnd ?? this.max}"
                  aria-label="${this.endAriaLabel || this.label || ''}"
                  aria-valuetext="${this.endAriaValueText || this.valueLabelEnd || this.valueEnd || ''}"
                  tabindex="${this.disabled ? -1 : 0}"
                  @input=${() => this.handleInput(1)}
                  @change=${this.onChangeEnd}
                  @focus=${() => {
                    this.thumbFocused = 'end';
                  }}
                  @blur=${() => {
                    this.thumbFocused = undefined;
                  }}
                  @mouseenter=${() => {
                    if (!this.disabled) this.thumbHovered = 'end';
                  }}
                  @mouseleave=${() => {
                    this.thumbHovered = undefined;
                  }}
                />
                ${this.thumbFocused === 'end' || this.thumbHovered === 'end'
                  ? this.tooltipTemplate(this.valueLabelEnd, this.thumbFocused || this.thumbHovered)
                  : nothing}
              `
            : html`
                <input
                  id="single-slider"
                  part="single-slider"
                  type="range"
                  min="${this.min}"
                  max="${this.max}"
                  step="${this.step ?? 1}"
                  .value="${String(this.value ?? this.min)}"
                  ?disabled="${this.disabled}"
                  name="${this.name ?? ''}"
                  aria-valuemin="${this.min}"
                  aria-valuemax="${this.max}"
                  aria-valuenow="${this.value ?? this.min}"
                  aria-label="${this.dataAriaLabel ?? this.label ?? ''}"
                  aria-valuetext="${this.dataAriaValuetext ?? this.valueLabel ?? String(this.value ?? '')}"
                  tabindex="${this.disabled ? -1 : 0}"
                  @input=${this.onInput}
                  @change=${this.onChange}
                  @focus=${() => {
                    this.thumbFocused = 'start';
                  }}
                  @blur=${() => {
                    this.thumbFocused = undefined;
                  }}
                  @mouseenter=${() => {
                    if (!this.disabled) this.thumbHovered = 'start';
                  }}
                  @mouseleave=${() => {
                    this.thumbHovered = undefined;
                  }}
                />
                ${this.thumbFocused === 'start' || this.thumbHovered === 'start'
                  ? this.tooltipTemplate(this.valueLabel)
                  : nothing}
              `}
        </div>
        ${this.iconTemplate(this.trailingIcon, 'trailing-icon')}
      </div>
      <div part="slider-labels">
        ${this.labelStart ? html`<span part="slider-label-start">${this.labelStart}</span>` : null}
        ${this.labelEnd ? html`<span part="slider-label-end">${this.labelEnd}</span>` : null}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Slider;
