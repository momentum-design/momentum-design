import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { KEYS } from '../../utils/keys';
import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { ROLE } from '../../utils/roles';
import FormfieldWrapper from '../formfieldwrapper';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';

import { DEFAULTS, TOGGLE_SIZE } from './toggle.constants';
import styles from './toggle.styles';
import type { ToggleSize } from './toggle.types';

/**
 * Toggle Component is an interactive control used to switch between two mutually exclusive options,
 * such as On/Off, Active/Inactive. These are commonly used in settings panels, forms, and preference selections
 * where users need to enable or disable a feature.
 * It contains an optional label and an optional helper text.
 *
 * To create a group of toggles, use the FormFieldGroup component.
 *
 * Note: It internally renders a checkbox styled as a toggle switch.
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-statictoggle
 * @dependency mdc-text
 * @dependency mdc-toggletip
 *
 * @tagname mdc-toggle
 *
 * @event change - (React: onChange) Event that gets dispatched when the toggle state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the toggle receives focus.
 *
 * @cssproperty --mdc-toggle-width - Width of the toggle
 * @cssproperty --mdc-toggle-height - Height of the toggle
 * @cssproperty --mdc-toggle-width-compact - Width of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-height-compact - Height of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-label-lineheight - Line height of the toggle label
 * @cssproperty --mdc-toggle-label-fontsize - Font size of the toggle label
 * @cssproperty --mdc-toggle-label-fontweight - Font weight of the toggle label
 * @cssproperty --mdc-toggle-label-color-disabled - Color of the toggle label and help text in disabled state
 * @cssproperty --mdc-toggle-help-text-color - Color of the help text label
 * @cssproperty --mdc-toggle-active-hover-color - Background color of the active toggle in hover state
 * @cssproperty --mdc-toggle-active-pressed-color - Background color of the active toggle in pressed state
 * @cssproperty --mdc-toggle-inactive-hover-color - Background color of the inactive toggle in hover state
 * @cssproperty --mdc-toggle-inactive-pressed-color - Background color of the inactive toggle in pressed state
 */
class Toggle
  extends AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)))
  implements AssociatedFormControl
{
  /**
   * Determines whether the toggle is active or inactive.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /**
   * Determines toggle size in rem (height is specified here).
   * - **Default**: 1.5
   * - **Compact**: 1
   * @default default
   */
  @property({ type: String, reflect: true })
  size: ToggleSize = DEFAULTS.SIZE;

  override connectedCallback(): void {
    super.connectedCallback();
    // Toggle does not contain helpTextType property.
    this.helpTextType = undefined as unknown as ValidationType;
  }

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    // set the element to auto focus if autoFocusOnMount is set to true
    // before running the super method, so that the AutoFocusOnMountMixin can use it
    // to focus the correct element
    if (this.inputElement && this.autoFocusOnMount) {
      this.elementToAutoFocus = this.inputElement;
    }
    super.firstUpdated(_changedProperties);
  }

  /** @internal
   * Resets the checkbox to its initial state.
   * The checked property is set to false.
   */
  formResetCallback(): void {
    this.checked = false;
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    if (state) {
      this.checked = true;
    }
  }

  /**
   * Manages the required state of the checkbox.
   * If the checkbox is not checked and the required property is set, then the checkbox is invalid.
   * If the validationMessage is set, it will be used as the custom validity message.
   * If the validationMessage is not set, it will clear the custom validity message.
   */
  private manageRequired() {
    if (!this.checked && this.required) {
      if (this.validationMessage) {
        this.inputElement.setCustomValidity(this.validationMessage);
      } else {
        this.inputElement.setCustomValidity('');
      }
      this.setValidity();
    } else {
      this.internals.setValidity({});
    }
  }

  /**
   * Updates the form value to reflect the current state of the toggle.
   * If toggle is switched on, the value is set to either the user-provided value or 'isActive' if no value is provided.
   * If toggle is switched off, the value is set to null.
   */
  private setFormValue() {
    let actualValue: string | null = null;

    if (this.checked) {
      actualValue = !this.value ? 'isActive' : this.value;
    } else {
      actualValue = null;
    }

    this.manageRequired();

    this.internals.setFormValue(actualValue);
  }

  /**
   * Toggles the state of the toggle element.
   * If the element is not disabled, then the checked property is toggled.
   */
  private toggleState(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  /**
   * Handles the keydown event on the toggle element.
   * When the user presses Enter, the form is submitted.
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === KEYS.ENTER) {
      this.form?.requestSubmit();
    }
  }

  /**
   * Toggles the state of the toggle element.
   * and dispatch the new change event.
   */
  private handleChange(event: Event) {
    this.toggleState();
    const EventConstructor = event.constructor as typeof Event;
    this.dispatchEvent(new EventConstructor(event.type, event));
  }

  /**
   * Sets the size attribute for the toggle component.
   * If the provided size is not included in the TOGGLE_SIZE,
   * it defaults to the value specified in DEFAULTS.SIZE.
   *
   * @param size - The size to set.
   */
  private setToggleSize(size: ToggleSize) {
    this.setAttribute('size', Object.values(TOGGLE_SIZE).includes(size) ? size : DEFAULTS.SIZE);
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('checked')) {
      this.setFormValue();
    }

    if (changedProperties.has('size')) {
      this.setToggleSize(this.size);
    }
  }

  public override render() {
    return html`
      <mdc-statictoggle
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        size="${this.size}"
        class="mdc-focus-ring"
        part="container"
      >
        <input
          id="${this.inputId}"
          type="checkbox"
          part="toggle-input"
          role="${ROLE.CHECKBOX}"
          ?required="${this.required}"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
          aria-label="${this.dataAriaLabel ?? ''}"
          tabindex="${this.disabled ? -1 : 0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabel()} ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Toggle;
