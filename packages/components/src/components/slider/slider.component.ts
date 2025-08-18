import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';

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
   * Whether or not to show a value range. When false, the slider displays a slide-able handle for the value property; when true, it displays slide-able handles for the valueStart and valueEnd properties.
   */
  @property({ type: Boolean }) range = false;

  /**
   * Whether the slider is disabled.
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
   */
  @property({ type: Number }) min = 0;

  /**
   * The slider maximum value.
   */
  @property({ type: Number }) max = 100;

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
   * The step between values. This will show tick marks and the stepper will snap to the nearest tick mark.
   */
  @property({ type: Number }) step = 1;

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
   * An optional label for the slider's value displayed when range is false; if not set, the label is the value itself.
   */
  @property({ type: String, attribute: 'value-label' }) valueLabel: string = '';

  /**
   * An optional label for the slider's start value displayed when range is true; if not set, the label is the valueStart itself.
   */
  @property({ type: String, attribute: 'value-label-start' }) valueLabelStart: string = '';

  /**
   * An optional label for the slider's end value displayed when range is true; if not set, the label is the valueEnd itself.
   */
  @property({ type: String, attribute: 'value-label-end' }) valueLabelEnd: string = '';

  /**
   * Aria label for the slider's start handle displayed when range is true.
   */
  @property({ type: String, attribute: 'aria-label-start' }) ariaLabelStart: string = '';

  /**
   * Aria value text for the slider's start value displayed when range is true.
   */
  @property({ type: String, attribute: 'aria-valuetext-start' }) ariaValuetextStart: string = '';

  /**
   * Aria label for the slider's end handle displayed when range is true.
   */
  @property({ type: String, attribute: 'aria-label-end' }) ariaLabelEnd: string = '';

  /**
   * Aria value text for the slider's end value displayed when range is true.
   */
  @property({ type: String, attribute: 'aria-valuetext-end' }) ariaValuetextEnd: string = '';

  /**
   * Name attribute for the slider (single value).
   */
  @property({ type: String }) name?: string;

  /**
   * Name attribute for the slider's start handle (range).
   */
  @property({ type: String, attribute: 'name-start' }) nameStart?: string;

  /**
   * Name attribute for the slider's end handle (range).
   */
  @property({ type: String, attribute: 'name-end' }) nameEnd?: string;

  /**
   * Aria value text for the slider's value displayed when range is false.
   */
  @property({ type: String, attribute: 'data-aria-valuetext' }) dataAriaValuetext: string = '';

  /**
   * Aria label for the slider's handle displayed when range is false.
   */
  @property({ type: String, attribute: 'data-aria-label' }) dataAriaLabel: string = '';

  public override render() {
    return html`<p>This is a dummy slider component!</p>
      <slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Slider;
