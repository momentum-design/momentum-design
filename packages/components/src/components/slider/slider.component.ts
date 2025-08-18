import type { CSSResult, PropertyValueMap } from 'lit';
import { html, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';

import { Component } from '../../models';
import type { IconName } from '../accordionbutton/accordionbutton.types';

import { DEFAULTS } from './slider.constants';
import styles from './slider.styles';

/**
 * slider component, which ...
 *
 * @tagname mdc-slider
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Slider extends Component {
  /**
   * Indicates whether it is a range slider. When true, the slider displays two handles for selecting a range of values.
   * When false, the slider displays a single handle for selecting a single value.
   * @default false
   */
  @property({ type: Boolean }) range = false;

  /**
   * Whether the slider is disabled. When true, the slider cannot be interacted with.
   */
  @property({ type: Boolean }) disabled?: boolean;

  /**
   * Acts similar to disabled, but component is focusable and tooltip is shown on focus.
   */
  @property({ type: Boolean, attribute: 'soft-disabled' }) softDisabled?: boolean;

  /**
   * Icon that represents the minimum value; ex: muted speaker.
   */
  @property({ type: String, attribute: 'leading-icon' }) leadingIcon?: string;

  /**
   * Icon that represents the maximum value; ex: speaker with full volume.
   */
  @property({ type: String, attribute: 'trailing-icon' }) trailingIcon?: string;

  /**
   * The slider minimum value.
   * @default 0
   */
  @property({ type: Number }) min: number = DEFAULTS.MIN;

  /**
   * The slider maximum value.
   * @default 100
   */
  @property({ type: Number }) max: number = DEFAULTS.MAX;

  /**
   * The slider value displayed when range is false.
   */
  @property({ type: Number }) value?: number;

  /**
   * The slider start value displayed when range is true.
   */
  @property({ type: Number, attribute: 'value-start' }) valueStart?: number;

  /**
   * The slider end value displayed when range is true.
   */
  @property({ type: Number, attribute: 'value-end' }) valueEnd?: number;

  /**
   * The step between values. If defined and greater than 1, we will show tick marks and the stepper will snap to the nearest tick mark.
   * @default 1
   */
  @property({ type: Number }) step: number = DEFAULTS.STEP;

  /**
   * It represents the label for slider component.
   */
  @property({ type: String }) label?: string;

  /**
   * The label text is shown below the slider (on leading side) representing the minimum starting value of the slider.
   */
  @property({ type: String, attribute: 'label-start' }) labelStart?: string;

  /**
   * The label text is shown below the slider (on trailing side) representing the maximum starting value of the slider.
   */
  @property({ type: String, attribute: 'label-end' }) labelEnd?: string;

  /**
   * An optional label for the slider's value displayed when range is false; if not set, the label is the 'value' itself.
   */
  @property({ type: String, attribute: 'value-label' }) valueLabel?: string;

  /**
   * An optional label for the slider's start value displayed when range is true; if not set, the label is the 'valueStart' itself.
   */
  @property({ type: String, attribute: 'value-label-start' }) valueLabelStart?: string;

  /**
   * An optional label for the slider's end value displayed when range is true; if not set, the label is the 'valueEnd' itself.
   */
  @property({ type: String, attribute: 'value-label-end' }) valueLabelEnd?: string;

  /**
   * Name attribute for the slider (single value).
   */
  @property({ type: String }) name?: string;

  /**
   * Name attribute for the slider's start handle when range is true.
   */
  @property({ type: String, attribute: 'name-start' }) nameStart?: string;

  /**
   * Name attribute for the slider's end handle when range is true.
   */
  @property({ type: String, attribute: 'name-end' }) nameEnd?: string;

  /**
   * Aria label for the slider's handle displayed when range is false.
   */
  @property({ type: String, attribute: 'data-aria-label' }) dataAriaLabel?: string;

  /**
   * Aria label for the slider's start handle displayed when range is true.
   */
  @property({ type: String, attribute: 'aria-label-start' }) ariaLabelStart?: string;

  /**
   * Aria label for the slider's end handle displayed when range is true.
   */
  @property({ type: String, attribute: 'aria-label-end' }) ariaLabelEnd?: string;

  /**
   * Aria value text for the slider's value displayed when range is false.
   */
  @property({ type: String, attribute: 'data-aria-valuetext' }) dataAriaValuetext?: string;

  /**
   * Aria value text for the slider's start value displayed when range is true.
   */
  @property({ type: String, attribute: 'aria-valuetext-start' }) ariaValuetextStart?: string;

  /**
   * Aria value text for the slider's end value displayed when range is true.
   */
  @property({ type: String, attribute: 'aria-valuetext-end' }) ariaValuetextEnd?: string;

  @query('input[type="range"]')
  protected inputElement!: HTMLInputElement;

  protected override updated(changedProperties: PropertyValueMap<Slider>): void {
    super.updated(changedProperties);
    if (changedProperties.has('value') || changedProperties.has('disabled') || changedProperties.has('softDisabled')) {
      this.updateTrackStyling();
    }
  }

  iconTemplate(icon: string | undefined, part: string) {
    return typeof icon === 'string' && icon.length > 0
      ? html`<mdc-icon name="${icon as IconName}" part="${part}" length-unit="rem" size="1.25"></mdc-icon>`
      : null;
  }

  tooltipTemplate(val: number | string | undefined, label: string | undefined) {
    return html` <div part="slider-tooltip">${label || val}</div> `;
  }

  updateTrackStyling() {
    if (!this.inputElement) return;

    const value = Number(this.value ?? this.inputElement.value);
    const max = Number(this.inputElement.max) || 1;
    const progress = Math.max(0, Math.min(100, (value / max) * 100));
    let progressColor = `var(--mds-color-theme-control-active-normal)`;
    let trackColor = `var(--mds-color-theme-control-indicator-inactive-normal)`;
    if (this.disabled || this.softDisabled) {
      progressColor = `var(--mds-color-theme-control-active-disabled)`;
      trackColor = `var(--mds-color-theme-control-inactive-disabled)`;
    }
    this.inputElement.style.background = `linear-gradient(to right, ${progressColor} ${progress}%, ${trackColor} ${progress}%)`;
  }

  public override render() {
    // Tick marks
    const ticks = [];
    if (this.step && this.step > 1) {
      for (let i = this.min; i <= this.max; i += this.step) {
        ticks.push(i);
      }
    }
    return html`
      ${this.label ? html`<label part="slider-label">${this.label}</label>` : null}
      <div part="slider-track">
        ${this.iconTemplate(this.leadingIcon, 'leading-icon')}
        ${this.step > 1
          ? html`
              <div part="slider-ticks">
                ${ticks.map(
                  tick =>
                    html`<span
                      part="slider-tick"
                      style="left:${((tick - this.min) / (this.max - this.min)) * 100}%"
                    ></span>`,
                )}
              </div>
            `
          : nothing}
        ${this.range
          ? html`
              <input
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
                aria-label="${this.ariaLabelStart || this.label || ''}"
                aria-valuetext="${this.ariaValuetextStart || this.valueLabelStart || this.valueStart || ''}"
                tabindex="${this.disabled ? -1 : 0}"
                @input=${this.onInputStart}
                @change=${this.onChangeStart}
              />
              ${this.tooltipTemplate(this.valueStart, this.valueLabelStart)}
              <input
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
                aria-label="${this.ariaLabelEnd || this.label || ''}"
                aria-valuetext="${this.ariaValuetextEnd || this.valueLabelEnd || this.valueEnd || ''}"
                tabindex="${this.disabled ? -1 : 0}"
                @input=${this.onInputEnd}
                @change=${this.onChangeEnd}
              />
              ${this.tooltipTemplate(this.valueEnd, this.valueLabelEnd)}
            `
          : html`
              <input
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
                aria-label="${this.dataAriaLabel || this.label || ''}"
                aria-valuetext="${this.dataAriaValuetext || this.valueLabel || this.value || ''}"
                tabindex="${this.disabled ? -1 : 0}"
                @input=${this.onInput}
                @change=${this.onChange}
              />
              ${this.tooltipTemplate(this.value, this.valueLabel)}
            `}
        ${this.iconTemplate(this.trailingIcon, 'trailing-icon')}
      </div>
      <div part="slider-labels">
        ${this.labelStart ? html`<span part="slider-label-start">${this.labelStart}</span>` : null}
        ${this.labelEnd ? html`<span part="slider-label-end">${this.labelEnd}</span>` : null}
      </div>
    `;
  }

  onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = Number(input.value);
    this.dispatchEvent(new CustomEvent('input', { detail: { value: this.value } }));
  }

  onChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = Number(input.value);
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
  }

  onInputStart(e: Event) {
    const input = e.target as HTMLInputElement;
    this.valueStart = Number(input.value);
    this.dispatchEvent(new CustomEvent('input', { detail: { valueStart: this.valueStart } }));
  }

  onChangeStart(e: Event) {
    const input = e.target as HTMLInputElement;
    this.valueStart = Number(input.value);
    this.dispatchEvent(new CustomEvent('change', { detail: { valueStart: this.valueStart } }));
  }

  onInputEnd(e: Event) {
    const input = e.target as HTMLInputElement;
    this.valueEnd = Number(input.value);
    this.dispatchEvent(new CustomEvent('input', { detail: { valueEnd: this.valueEnd } }));
  }

  onChangeEnd(e: Event) {
    const input = e.target as HTMLInputElement;
    this.valueEnd = Number(input.value);
    this.dispatchEvent(new CustomEvent('change', { detail: { valueEnd: this.valueEnd } }));
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Slider;
