import { CSSResult, html, nothing, PropertyValueMap, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import { KeyToActionMixin, ACTIONS, NAV_MODES } from '../../utils/mixins/KeyToActionMixin';
import { KeyDownHandledMixin } from '../../utils/mixins/KeyDownHandledMixin';

import styles from './checkbox.styles';
import type { CheckboxValidationType } from './checkbox.types';
import { CHECKBOX_VALIDATION } from './checkbox.constants';

/**
 * @tagname mdc-checkbox
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-staticcheckbox
 * @dependency mdc-text
 * @dependency mdc-toggletip
 *
 * @event change - (React: onChange) Event that gets dispatched when the checkbox state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the checkbox receives focus.
 *
 * @slot leading-visual - A decorative visual, such as an avatar or icon, displayed between the checkbox and label text.
 * @slot label - Rich primary label content. Slotted content replaces the `label` property and remains associated with the native checkbox.
 * @slot supporting-text - Supporting label content. Slotted content replaces the `supporting-text` property.
 * @slot toggletip - Custom toggletip trigger and content displayed separately from the checkbox label target.
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart label-content - The container for the primary label and supporting text.
 * @csspart supporting-text - The supporting label text element.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 * @csspart checkbox-input - The native checkbox input element that provides the interactive functionality.
 * @csspart text-container - The container for the label and helper text elements.
 * @csspart static-checkbox - The staticcheckbox that provides the visual checkbox appearance.
 *
 * @cssproperty --mdc-checkbox-gap - Gap between the checkbox control and its text container.
 * @cssproperty --mdc-checkbox-label-gap - Gap between the leading visual and label content.
 * @cssproperty --mdc-checkbox-label-content-gap - Gap between the primary label and supporting text.
 * @cssproperty --mdc-checkbox-supporting-text-font-size - Font size for supporting text.
 * @cssproperty --mdc-checkbox-supporting-text-font-weight - Font weight for supporting text.
 * @cssproperty --mdc-checkbox-supporting-text-line-height - Line height for supporting text.
 * @cssproperty --mdc-checkbox-supporting-text-color - Color for supporting text.
 *
 * @cssstate checked - Active when the checkbox is checked.
 * @cssstate rich-label - Active when the checkbox has a leading visual or supporting text.
 */
class Checkbox
  extends KeyDownHandledMixin(
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
   * Supporting text that identifies or qualifies the checkbox option. It is part of the checkbox label target.
   */
  @property({ type: String, reflect: true, attribute: 'supporting-text' }) supportingText?: string;

  /** @internal */
  @state() private hasSlottedLabelContent = false;

  /** @internal */
  @state() private hasSlottedRichLabelContent = false;

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

  override click() {
    super.click();
    this.toggleState();
  }

  /**
   * Handles the keydown event on the checkbox.
   * When the user presses Enter, the form is submitted.
   * @param event - The keyboard event.
   * @internal
   */
  private handleKeyDown(event: KeyboardEvent): void {
    const action = this.getActionForKeyEvent(event);
    if (this.getKeyboardNavMode() === NAV_MODES.DEFAULT) {
      if ((this.readonly || this.softDisabled) && action === ACTIONS.SPACE) {
        event.preventDefault();
      }

      if (action === ACTIONS.ENTER) {
        this.form?.requestSubmit();
        event.preventDefault();
        this.keyDownEventHandled();
      }
    }
    if (this.getKeyboardNavMode() === NAV_MODES.SPATIAL) {
      if (!(this.readonly || this.softDisabled) && action === ACTIONS.ENTER) {
        this.toggleState();
        this.keyDownEventHandled();
      }
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
      if (this.checked) {
        this.internals.states.add('checked');
      } else {
        this.internals.states.delete('checked');
      }
    }

    if (changedProperties.has('supportingText') || changedProperties.has('hasSlottedRichLabelContent')) {
      if (this.supportingText || this.hasSlottedRichLabelContent) {
        this.internals.states.add('rich-label');
      } else {
        this.internals.states.delete('rich-label');
      }
    }
  }

  /** @internal */
  private handleLabelContentSlotChange(): void {
    const slots = this.shadowRoot?.querySelectorAll<HTMLSlotElement>(
      'slot[name="leading-visual"], slot[name="label"], slot[name="supporting-text"]',
    );

    const assignedSlots = Array.from(slots ?? []).filter(slot => slot.assignedElements({ flatten: true }).length > 0);

    this.hasSlottedLabelContent = assignedSlots.length > 0;
    this.hasSlottedRichLabelContent = assignedSlots.some(slot => slot.name !== 'label');
  }

  /** @internal */
  private renderCheckboxLabel() {
    return html`<div part="label-text">
      <label for="${this.inputId}" id="${FORMFIELD_DEFAULTS.HEADING_ID}" part="label">
        <slot name="leading-visual" @slotchange=${this.handleLabelContentSlotChange}></slot>
        <span part="label-content">
          <slot name="label" @slotchange=${this.handleLabelContentSlotChange}>${this.label}</slot>
          <span part="supporting-text">
            <slot name="supporting-text" @slotchange=${this.handleLabelContentSlotChange}>${this.supportingText}</slot>
          </span>
        </span>
      </label>
      ${this.required ? html`<span part="required-indicator">*</span>` : nothing} ${this.renderToggletip()}
    </div>`;
  }

  /** @internal */
  private renderLabelAndHelperText = () => {
    const hasLabelContent = Boolean(this.label || this.supportingText || this.hasSlottedLabelContent);

    return html`<div part="text-container" ?hidden=${!hasLabelContent}>
      ${this.renderCheckboxLabel()} ${this.renderHelperText()}
    </div>`;
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
          aria-label=${ifDefined(this.dataAriaLabel)}
          tabindex="${this.disabled ? -1 : 0}"
          aria-describedby=${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : undefined)}
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];

  static override shadowRootOptions = { ...FormfieldWrapper.shadowRootOptions, delegatesFocus: true };
}

export default Checkbox;
