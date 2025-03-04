import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './toggle.styles';
import FormfieldWrapper from '../formfieldwrapper';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import { DEFAULTS, ICON_NAME, ICON_SIZE_IN_REM, TOGGLE_SIZE } from './toggle.constants';
import { ToggleSize } from './toggle.types';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';

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
 * @dependency mdc-icon
 *
 * @tagname mdc-toggle
 *
 * @event change - (React: onChange) Event that gets dispatched when the toggle state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the toggle receives focus.
 *
 * @cssproperty --mdc-toggle-width - width of the toggle
 * @cssproperty --mdc-toggle-height - height of the toggle
 * @cssproperty --mdc-toggle-width-compact - width of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-height-compact - height of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-border-radius - border radius of the toggle
 * @cssproperty --mdc-toggle-border-radius-compact - border radius of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-border - border of the toggle
 * @cssproperty --mdc-toggle-inactive-rest-color - background color of the inactive toggle in rest state
 * @cssproperty --mdc-toggle-inactive-hover-color - background color of the inactive toggle in hover state
 * @cssproperty --mdc-toggle-inactive-pressed-color - background color of the inactive toggle in pressed state
 * @cssproperty --mdc-toggle-inactive-disabled-color - background color of the inactive toggle in disabled state
 * @cssproperty --mdc-toggle-active-rest-color - background color of the active toggle in rest state
 * @cssproperty --mdc-toggle-active-hover-color - background color of the active toggle in hover state
 * @cssproperty --mdc-toggle-active-pressed-color - background color of the active toggle in pressed state
 * @cssproperty --mdc-toggle-active-disabled-color - background color of the active toggle in disabled state
 * @cssproperty --mdc-toggle-help-text-color -  color of the help text label
 * @cssproperty --mdc-toggle-label-color-disabled - color of the toggle label and help text in disabled state
 *
 */
class Toggle extends FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)) implements AssociatedFormControl {
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

    /**
   * Automatically focus on the element when the page loads.
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)
   * @default false
   */
    @property({ type: Boolean, reflect: true }) override autofocus = false;

    constructor() {
      super();
      // Toggle does not contain helpTextType property.
      this.helpTextType = undefined as unknown as ValidationType;
    }

    /** @internal
   * Resets the checkbox to its initial state.
   * The checked property is set to false.
   */
    formResetCallback(): void {
      this.checked = false;
    }

    /** @internal */
    formStateRestoreCallback(
      state: string,
    ): void {
      if (state) {
        this.checked = true;
      }
    }

    /**
   * Manages the required state of the checkbox.
   * If the checkbox is not checked and the requiredLabel property is set, then the checkbox is invalid.
   */
    private manageRequired() {
      if (!this.checked && this.requiredLabel) {
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
      if (event.key === 'Enter') {
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
        <div class="mdc-toggle__container mdc-focus-ring">
          <input
            id="${this.id}"
            type="checkbox"
            class="mdc-toggle__input"
            role="switch"
            ?autofocus="${this.autofocus}"
            ?required="${!!this.requiredLabel}"
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
          <div class="mdc-toggle__slider">
            <mdc-icon
              name="${this.checked ? ICON_NAME.CHECKED : ICON_NAME.UNCHECKED}"
              class="mdc-toggle__icon"
              length-unit="rem"
              size="${ICON_SIZE_IN_REM[this.size]}"
            ></mdc-icon>
          </div>
        </div>
        ${this.renderLabel()}
        ${this.renderHelperText()}
    `;
    }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Toggle;
