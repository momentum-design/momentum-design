import { CSSResult, html, nothing, PropertyValueMap, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { KEYS } from '../../utils/keys';
import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';

import styles from './checkbox.styles';

/**
 * Checkboxes allow users to select multiple options from a list or turn an item/feature on or off.
 * These are often used in forms, settings, and selections in lists.
 *
 * A checkbox component contains an optional label and an optional helper text.
 *
 * To create a group of checkboxes, use the FormFieldGroup component.
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-staticcheckbox
 * @dependency mdc-text
 * @dependency mdc-toggletip
 *
 * @tagname mdc-checkbox
 *
 * @event change - (React: onChange) Event that gets dispatched when the checkbox state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the checkbox receives focus.
 *
 * @cssproperty --mdc-checkbox-background-color-hover - Allows customization of the background color on hover.
 * @cssproperty --mdc-checkbox-checked-background-color-hover - Background color for a selected checkbox when hovered.
 * @cssproperty --mdc-checkbox-checked-pressed-icon-color - Background color for a selected checkbox when pressed.
 * @cssproperty --mdc-checkbox-pressed-icon-color - Background color for a selected checkbox when pressed.
 * @cssproperty --mdc-checkbox-disabled-checked-icon-color - Background color for a selected checkbox when disabled.
 *
 * @slot label - Slot for the label element. If not provided, the `label` property will be used to render the label.
 * @slot toggletip - Slot for the toggletip info icon button. If not provided, the `toggletip-text` property will be used to render the info icon button and toggletip.
 * @slot help-icon - Slot for the helper/validation icon. If not provided, the icon will be rendered based on the `helpTextType` property.
 * @slot help-text - Slot for the helper/validation text. If not provided, the `helpText` property will be used to render the helper/validation text.
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 * @csspart checkbox-input - The native checkbox input element.
 * @csspart text-container - The container for the label and helper text elements.
 */
class Checkbox
  extends AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)))
  implements AssociatedFormControl
{
  /**
   * Determines whether the checkbox is selected or unselected.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * This property is used to determine the parent checkbox in a nested checkbox group.
   * If any one of the children is unselected, then the parent checkbox will be indeterminate.
   * If all children are either selected or unselected, then the parent checkbox will not be indeterminate.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /**
   * Automatically focus on the element when the page loads.
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)
   * @default false
   */
  @property({ type: Boolean, reflect: true }) override autofocus = false;

  override connectedCallback(): void {
    super.connectedCallback();
    // Checkbox does not contain helpTextType property.
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

  /**
   * Updates the form value to reflect the current state of the checkbox.
   * If checked, the value is set to either the user-provided value or 'on' if no value is provided.
   * If unchecked, the value is set to null.
   */
  private setFormValue() {
    let actualValue: string | null = null;

    if (this.checked) {
      actualValue = !this.value ? 'on' : this.value;
    } else {
      actualValue = null;
    }

    this.manageRequired();
    this.internals.setFormValue(actualValue);
  }

  /**
   * Manages the required state of the checkbox.
   * If the checkbox is not checked and the required property is set, then the checkbox is invalid.
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

  /** @internal
   * Resets the checkbox to its initial state.
   * The checked property is set to false.
   */
  formResetCallback(): void {
    this.checked = false;
    this.indeterminate = false;
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    if (state) {
      this.checked = true;
    }
  }

  /**
   * Toggles the state of the checkbox element.
   * If the element is not disabled, then
   * the checked property is toggled and the indeterminate property is set to false.
   */
  private toggleState(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.indeterminate = false;
    }
  }

  /**
   * Handles the keydown event on the checkbox.
   * When the user presses Enter, the form is submitted.
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === KEYS.ENTER) {
      this.form?.requestSubmit();
    }
  }

  /**
   * Toggles the state of the checkbox element.
   * and dispatch the new change event.
   */
  public handleChange(event: Event): void {
    this.toggleState();
    const EventConstructor = event.constructor as typeof Event;
    this.dispatchEvent(new EventConstructor(event.type, event));
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('checked')) {
      this.setFormValue();
    }
  }

  private renderLabelAndHelperText = () => {
    if (!this.label) return nothing;
    return html`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`;
  };

  public override render() {
    return html`
      <mdc-staticcheckbox
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?indeterminate="${this.indeterminate}"
        ?disabled="${this.disabled}"
      >
        <input
          id="${this.inputId}"
          type="checkbox"
          part="checkbox-input"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          ?required="${this.required}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate ? 'mixed' : this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          aria-label="${this.dataAriaLabel ?? ''}"
          tabindex="${this.disabled ? -1 : 0}"
          aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Checkbox;
