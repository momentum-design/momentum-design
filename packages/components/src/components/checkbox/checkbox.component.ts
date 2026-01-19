import { CSSResult, html, nothing, PropertyValueMap, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import { KeyToActionMixin, ACTIONS } from '../../utils/mixins/KeyToActionMixin';

import styles from './checkbox.styles';
import type { CheckboxValidationType } from './checkbox.types';
import { CHECKBOX_VALIDATION } from './checkbox.constants';

/**
 * The Checkbox component allows users to select one or multiple options from a list, toggle features on/off,
 * or indicate agreement in forms and settings. These are commonly used in forms, lists, and settings panels
 * where users need to make selections or express preferences.
 *
 * To create a group of checkboxes, use the `mdc-formfieldgroup` component.
 *
 * **Note:** This component internally renders a native checkbox input element with custom styling.
 *
 * ## When to use
 *
 * Use checkboxes when users can select multiple options from a list, or when a single checkbox represents a binary choice (e.g., agreeing to terms).
 *
 * ## Accessibility
 * - Provide clear labels that describe what the checkbox controls
 * - Use `data-aria-label` when a visual label is not present
 * - Keyboard navigation: Space to toggle, Tab to navigate, Enter to submit form
 *
 * ## Styling
 * Use the `static-checkbox` part to apply custom styles to the checkbox visual element.
 * This part exposes the underlying [StaticCheckbox](?path=/docs/components-decorator-staticcheckbox--docs) component for advanced styling.
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
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 * @csspart checkbox-input - The native checkbox input element that provides the interactive functionality.
 * @csspart text-container - The container for the label and helper text elements.
 * @csspart static-checkbox - The staticcheckbox that provides the visual checkbox appearance.
 */
class Checkbox
  extends KeyToActionMixin(
    KeyToActionMixin(AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)))),
  )
  implements AssociatedFormControl
{
  /**
   * Determines whether the checkbox is checked (selected) or unchecked.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Determines whether the checkbox is in an indeterminate (mixed) state.
   * Typically used in nested checkbox groups where the parent checkbox represents partial selection.
   * - If any child is unchecked, the parent appears indeterminate.
   * - If all children share the same state (all checked or all unchecked), the parent is not indeterminate.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /**
   * Automatically focuses the checkbox when the page loads.
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)
   * @default false
   */
  @property({ type: Boolean, reflect: true }) override autofocus = false;

  /**
   * Determines the visual style of the helper text.
   * - **default**: Standard helper text appearance
   * - **error**: Error state with validation styling
   * @default 'default'
   */
  @property({ type: String, reflect: true, attribute: 'help-text-type' })
  override helpTextType: CheckboxValidationType = CHECKBOX_VALIDATION.DEFAULT;

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
   * @internal
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
   * Resets the checkbox to its initial unchecked state.
   * @internal
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
   * If the element is not disabled, soft-disabled, or readonly, then
   * the checked property is toggled and the indeterminate property is set to false.
   * @internal
   */
  private toggleState(): void {
    if (!this.disabled && !this.softDisabled && !this.readonly) {
      this.checked = !this.checked;
      this.indeterminate = false;
    }
  }

  /**
   * Handles the keydown event on the checkbox.
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
      event.preventDefault();
    }
  }

  /**
   * Toggles the state of the checkbox element and dispatches the change event.
   * @param event - The change event.
   * @internal
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

  /** @internal */
  private renderLabelAndHelperText = () => {
    if (!this.label) return nothing;
    return html`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`;
  };

  public override render() {
    return html`
      <mdc-staticcheckbox
        part="static-checkbox"
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?indeterminate="${this.indeterminate}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?soft-disabled="${this.softDisabled}"
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
          ?readonly="${this.readonly}"
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
