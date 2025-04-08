import { CSSResult, html } from 'lit';
import styles from './progressspinner.styles';
import { Component } from '../../models';
import Progressbar from '../progressbar';
import { DEFAULTS } from './progressspinner.constants';
import { getProgressArc, getProgressOffset, getRemainingArc, getRemainingOffset } from './progressspiner.utils';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { Variant } from '../progressbar/progressbar.types';

/**
 * `mdc-progressspinner` is a customizable, circular progress indicator component.
 * It visually represents the current completion state of a process, such as loading,
 * syncing, uploading, or any ongoing task that has a measurable percentage.
 *
 * The spinner is built using SVG with two concentric `<circle>` elements:
 * - The `progress` arc represents the portion of work completed.
 * - The `track` arc represents the remaining part.
 *
 * A visual gap is maintained between the progress and track arcs to clearly
 * distinguish the two segments. The component smoothly animates arc lengths
 * and respects accessibility best practices with ARIA attributes.
 *
 * The component supports different states:
 * - **Default**: Circular spinner shows the progress.
 * - **Success**: Displays a checkmark icon when progress reaches 100%.
 * - **Error**: Displays an error icon when in an error state.
 *
 * @tagname mdc-progressspinner
 *
 * @cssproperty --mdc-spinner-size - The size of the spinner.
 * @cssproperty --mdc-track-color - The color of the spinner track.
 * @cssproperty --mdc-progress-color - The color of the spinner progress.
 * @cssproperty --mdc-progress-success-color - The color of the spinner when in success state.
 * @cssproperty --mdc-progress-error-color - The color of the spinner when in error state.
 *
 */
class Progressspinner extends Progressbar {
  override connectedCallback() {
    super.connectedCallback();
    this.id = '';
    this.disabled = undefined as unknown as boolean;
    this.helpTextType = undefined as unknown as ValidationType;
    this.helpText = undefined as unknown as string;
    this.requiredLabel = undefined as unknown as string;
    this.variant = undefined as unknown as Variant;
    this.label = undefined as unknown as string;
  }

  private renderProgressSpinner() {
    const progressArc = getProgressArc(this.clampedValue);
    const remainingArc = getRemainingArc(this.clampedValue);
    const progressOffset = getProgressOffset(this.clampedValue);
    const remainingOffset = getRemainingOffset(this.clampedValue, progressArc);

    return html`
      <div
        part="spinner-container ${this.variant}"
        role="progressbar"
        aria-valuenow="${this.clampedValue}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="${this.dataAriaLabel ?? ''}"
      >
      <svg part="spinner-base">
        <circle
          part="spinner-track"
          cx="24"
          cy="24"
          r="${DEFAULTS.RADIUS}"
          stroke-width="${remainingArc === 0 ? 0 : DEFAULTS.STROKE_WIDTH}"
          stroke-dasharray="${remainingArc} ${DEFAULTS.CIRCUMFERENCE}"
          stroke-dashoffset="-${remainingOffset}"
        />
        <circle
          part="spinner-progress"
          cx="24"
          cy="24"
          r="${DEFAULTS.RADIUS}"
          stroke-width="${progressArc === 0 ? 0 : DEFAULTS.STROKE_WIDTH}"
          stroke-dasharray="${progressArc} ${DEFAULTS.CIRCUMFERENCE}"
          stroke-dashoffset="-${progressOffset}"
        />
      </svg>
      </div>
    `;
  }

  /**
   * Renders the error state of the progress spinner.
   * @returns The rendered HTML for the error state.
   */
  private renderErrorState() {
    return html`
      <mdc-icon 
      part="error-icon"
      aria-label="${this.dataAriaLabel ?? ''}" 
      name="error-legacy-filled" 
      size="2"  
      length-unit="em" ></mdc-icon>
    `;
  }

  /**
   * Renders the success state of the progress spinner.
   * @returns The rendered HTML for the success state.
   */
  private renderSuccessState() {
    return html`
      <mdc-icon 
      part="success-icon"
      aria-label="${this.dataAriaLabel ?? ''}" 
      name="check-circle-bold" 
      size="3"  
      length-unit="em" ></mdc-icon>
    `;
  }

  public override render() {
    if (this.error) {
      return this.renderErrorState();
    }
    if (this.clampedValue === 100) {
      return this.renderSuccessState();
    }
    return html`
      ${this.renderProgressSpinner()}`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Progressspinner;
