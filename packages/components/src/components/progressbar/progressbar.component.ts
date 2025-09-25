import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';

import FormfieldWrapper from '../formfieldwrapper';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import type { PopoverPlacement } from '../popover/popover.types';
import { ROLE } from '../../utils/roles';

import type { Variant } from './progressbar.types';
import { DEFAULTS, VARIANT } from './progressbar.constants';
import styles from './progressbar.styles';

/**
 * mdc-progressbar component visually represents a progress indicator, typically used to show
 * the completion state of an ongoing process (e.g., loading, file upload, etc.).
 * It contains an optional label and an optional helper text.
 *
 * - It supports mainly two types: Default and Inline
 * - It supports three validation variants: Default, Success and Error.
 *
 * This component is created by extending FormfieldWrapper.
 *
 * @tagname mdc-progressbar
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot label - Slot for the label element. If not provided, the `label` property will be used to render the label.
 * @slot help-icon - Slot for the helper/validation icon. If not provided, the icon will be rendered based on the `helpTextType` property.
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 *
 * @cssproperty --mdc-label-font-size - Font size for the label text.
 * @cssproperty --mdc-label-font-weight - Font weight for the label text.
 * @cssproperty --mdc-label-line-height - Line height for the label text.
 * @cssproperty --mdc-label-color - Color for the label text.
 * @cssproperty --mdc-help-text-font-size - Font size for the help text.
 * @cssproperty --mdc-help-text-font-weight - Font weight for the help text.
 * @cssproperty --mdc-help-text-line-height - Line height for the help text.
 * @cssproperty --mdc-help-text-color - Color for the help text.
 *
 * @cssproperty --mdc-progressbar-background-color - Background color of the remaining progressbar portion.
 * @cssproperty --mdc-progressbar-active-background-color - Background color of the elapsed progressbar portion.
 * @cssproperty --mdc-progressbar-success-color - Background color of the progressbar when in success state.
 * @cssproperty --mdc-progressbar-error-color - Background color of the progressbar when in error state.
 * @cssproperty --mdc-progressbar-height - The height of the progressbar.
 * @cssproperty --mdc-progressbar-border-radius - The border radius of the progressbar.
 * @cssproperty --mdc-progressbar-help-text-color - Color of the help text.
 */
class Progressbar extends DataAriaLabelMixin(FormfieldWrapper) {
  /**
   * Types of the progressbar
   * - **Default**
   * - **Inline**
   *
   * @default default
   */
  @property({ type: String, reflect: true })
  variant: Variant = DEFAULTS.VARIANT;

  /**
   * The current progress as a percentage, 0 to 100.
   * The value will be clamped between 0 and 100.
   * @default 0
   */
  @property({ type: String, reflect: true })
  value: string = '0';

  /**
   * Define error state of the progressbar
   * - **true**
   * - **false**
   * @default false
   */
  @property({ type: Boolean, attribute: 'error' }) error = false;

  override connectedCallback() {
    super.connectedCallback();
    this.id = `mdc-progressbar-${uuidv4()}`;
    this.disabled = undefined as unknown as boolean;
    this.toggletipText = undefined as unknown as string;
    this.toggletipPlacement = undefined as unknown as PopoverPlacement;
  }

  /**
   * Ensures that the value is clamped between 0 and 100
   * @returns The clamped value
   * @internal
   */
  protected get clampedValue() {
    const value = Number(this.value);
    const clampedValue = Number.isNaN(value) ? 0 : Math.max(0, Math.min(100, value));
    return clampedValue;
  }

  /**
   * Determines the validation state (success, error, or default) based on progress value and error state.
   * @returns The appropriate validation state for the progressbar.
   */
  private getValidationVariant() {
    if (this.error) {
      this.helpTextType = VALIDATION.ERROR;
    } else if (this.clampedValue === 100) {
      this.helpTextType = VALIDATION.SUCCESS;
    } else {
      this.helpTextType = VALIDATION.DEFAULT;
    }
    return this.helpTextType;
  }

  /**
   * Renders the progress bar with dynamic width and variant styles.
   * @returns The rendered HTML for the progress bar.
   * @internal
   */
  private renderProgressbar = () => {
    const variant = this.getValidationVariant();
    const isGap = this.clampedValue > 0 && this.clampedValue < 100;
    const progressWidth = this.error ? '100' : `${this.clampedValue}`;
    return html`
      <div
        part="progress-container ${isGap ? 'gap' : ''}"
        role="${ROLE.PROGRESSBAR}"
        aria-valuenow="${this.clampedValue}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="${this.dataAriaLabel ?? ''}"
      >
        <div part="progress-bar ${variant}" style="width: ${progressWidth}%"></div>
        <div part="remaining"></div>
      </div>
    `;
  };

  /**
   * Renders the component based on the variant (inline or default).
   * @returns The rendered HTML for the component.
   */
  public override render() {
    const isInline = this.variant === VARIANT.INLINE;
    return html`
      ${isInline
        ? html`<div part="inline-label-container">${this.renderLabelElement()} ${this.renderProgressbar()}</div>`
        : html`
            <div part="label-container">
              ${this.renderLabelElement()}
              ${this.variant === VARIANT.DEFAULT && this.label
                ? html`<span part="percentage">${this.clampedValue}%</span>`
                : ''}
            </div>
            ${this.renderProgressbar()} ${this.renderHelperText()}
          `}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Progressbar;
