import { CSSResult, html, nothing, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';
import { ControlTypeMixin } from '../../utils/mixins/ControlTypeMixin';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { ROLE } from '../../utils/roles';
import FormfieldWrapper from '../formfieldwrapper';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { ACTIONS, KeyToActionMixin } from '../../utils/mixins/KeyToActionMixin';

import { DEFAULTS, TOGGLE_SIZE } from './toggle.constants';
import styles from './toggle.styles';
import type { ToggleSize } from './toggle.types';

/**
 * The Toggle component is an interactive control used to switch between two mutually exclusive states,
 * such as On/Off or Active/Inactive. It is commonly used in settings panels, forms, and preference selections
 * where users need to enable or disable a feature.
 *
 * To create a group of toggles, use the `mdc-formfieldgroup` component.
 *
 * **Note:** This component internally renders a native checkbox input element with the `switch` role, styled as a toggle switch.
 *
 * ## When to use
 * Use toggles for binary choices where the change takes effect immediately, such as enabling/disabling settings or features.
 *
 * ## Accessibility
 * - Provide clear labels that describe what the toggle controls
 * - Use `data-aria-label` when a visual label is not present
 * - Keyboard navigation: Space to toggle, Tab to navigate, Enter to submit form
 *
 * ## Styling
 * Use the `static-toggle` part to apply custom styles to the toggle switch visual element.
 * This part exposes the underlying [StaticToggle](?path=/docs/components-decorator-statictoggle--docs) component for advanced styling.
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
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 * @csspart text-container - The container for the label and helper text elements.
 * @csspart static-toggle - The statictoggle that provides the visual toggle switch appearance.
 * @csspart toggle-input - The native input element with switch role that provides the interactive functionality.
 */
class Toggle
  extends KeyToActionMixin(
    ControlTypeMixin(AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)))),
  )
  implements AssociatedFormControl
{
  /**
   * Controls the state of the toggle switch.
   * When true, the toggle is in the "on" or "active" state.
   * When false, the toggle is in the "off" or "inactive" state.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /**
   * Specifies the size of the toggle component.
   * - **default**: Standard size with 1.5rem height - suitable for most use cases
   * - **compact**: Smaller size with 1rem height - ideal for space-constrained layouts
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
   * Resets the toggle switch to its initial state.
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
   * Manages the required state of the toggle switch.
   * If the toggle switch is not checked and the required property is set, then the toggle switch is invalid.
   * If the validationMessage is set, it will be used as the custom validity message.
   * If the validationMessage is not set, it will clear the custom validity message.
   * @internal
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
   * @internal
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
   * If the element is not disabled, soft-disabled, or readonly, then the checked property is toggled if uncontrolled.
   * @internal
   */
  private toggleState(): void {
    if (!this.disabled && !this.softDisabled && !this.readonly) {
      if (this.controlType !== 'controlled') {
        this.checked = !this.checked;
      }
    }
  }

  /**
   * Handles the keydown event on the toggle element.
   * When the user presses Enter, the form is submitted.
   * @param event - The keyboard event.
   * @internal
   */
  private handleKeyDown(event: KeyboardEvent): void {
    const action = this.getActionForKeyEvent(event);

    if ((this.readonly || this.softDisabled) && action === ACTIONS.SPACE) {
      event.preventDefault();
    }

    if (action === ACTIONS.ENTER) {
      this.form?.requestSubmit();
    }
  }

  /**
   * Toggles the state of the toggle element.
   * and dispatch the new change event.
   * @internal
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
   * @internal
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

  /** @internal */
  private renderLabelAndHelperText = () => {
    if (!this.label) return nothing;
    return html`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`;
  };

  public override render() {
    return html`
      <mdc-statictoggle
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?soft-disabled="${this.softDisabled}"
        size="${this.size}"
        class="mdc-focus-ring"
        part="static-toggle"
      >
        <input
          id="${this.inputId}"
          type="checkbox"
          part="toggle-input"
          role="${ROLE.SWITCH}"
          ?required="${this.required}"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
          aria-label="${this.dataAriaLabel ?? ''}"
          tabindex="${this.disabled ? -1 : 0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabelAndHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];

  static override shadowRootOptions = { ...FormfieldWrapper.shadowRootOptions, delegatesFocus: true };
}

export default Toggle;
