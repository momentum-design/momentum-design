/* eslint-disable no-param-reassign */
import { CSSResult, html, PropertyValueMap, PropertyValues, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { ROLE } from '../../utils/roles';
import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';
import { ACTIONS, KeyToActionMixin, NAV_MODES } from '../../utils/mixins/KeyToActionMixin';
import { KeyDownHandledMixin } from '../../utils/mixins/KeyDownHandledMixin';

import styles from './radio.styles';

/**
 * The Radio component allows users to select a single option from a group of mutually exclusive choices.
 * Unlike checkboxes which allow multiple selections, radio buttons ensure only one option can be selected
 * at a time within the same group. These are commonly used in forms, surveys, and settings where users
 * need to make a single selection from multiple options.
 *
 * To create a group of radio buttons, use the `mdc-radiogroup` component or ensure all radio buttons
 * share the same `name` attribute.
 *
 * ## Validation
 *
 * Radio component support native form validation. But it does not have default validation message.
 *
 * The recommended way to show validation message for radio groups is to wrap the `mdc-radio` with `mdc-radiogroup`
 * and set the `help-text` of the `mdc-radiogroup` based on its validation state.
 *
 * Alternatively you can also set the `validation-message` attribute of the `mdc-radio`. This message will appear
 * in a native tooltip when the radio is checked and invalid.
 *
 * ## Accessibility
 *
 * - Provide clear labels that describe each option
 * - Use `data-aria-label` when a visual label is not present
 * - Keyboard navigation: Arrow keys to move between options, Space to select, Tab to navigate groups, Enter to submit form
 * - Group related radio buttons using the same `name` attribute or `mdc-radiogroup` component
 *
 * ## Styling
 *
 * Use the `static-radio` part to apply custom styles to the radio visual element.
 * This part exposes the underlying [StaticRadio](?path=/docs/components-decorator-staticradio--docs) component for advanced styling.
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-staticradio
 * @dependency mdc-toggletip
 *
 * @tagname mdc-radio
 *
 * @event input - (React: onInput) Event that gets dispatched when the radio state changes (before the change event).
 * @event change - (React: onChange) Event that gets dispatched when the radio state changes (after the input event).
 * @event focus - (React: onFocus) Event that gets dispatched when the radio receives focus.
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart static-radio - The staticradio that provides the visual radio appearance.
 *
 * @slot indicator - Slot for the radio indicator element. If not provided, a default styled radio will be rendered.
 * @slot label - Slot for the label of the radio.
 */
class Radio
  extends KeyDownHandledMixin(KeyToActionMixin(AutoFocusOnMountMixin(FormInternalsMixin(FormfieldWrapper))))
  implements AssociatedFormControl
{
  /**
   * Determines whether the radio is checked (selected) or unchecked.
   * Within a radio group, only one radio can be checked at a time.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeyDown);
    this.shouldRenderLabel = false;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    // Radio does not contain helpTextType property.
    this.helpTextType = undefined as unknown as ValidationType;
    this.role = ROLE.RADIO;
    this.updateAriaLabel();
  }

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.updateTabIndex();

    // set the element to auto focus if autoFocusOnMount is set to true
    // before running the super method, so that the AutoFocusOnMountMixin can use it
    // to focus the correct element
    if (this.autoFocusOnMount) {
      this.elementToAutoFocus = this;
    }
    super.firstUpdated(_changedProperties);
  }

  /**
   * Returns all radios within the same group (name).
   * @internal
   */
  private getAllRadiosWithinSameGroup(): Radio[] {
    return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`));
  }

  /** @internal */
  formResetCallback(): void {
    const radios = this.getAllRadiosWithinSameGroup();

    radios.forEach(radio => {
      radio.checked = false;
    });

    this.updateComplete
      .then(() => {
        this.setActualFormValue();
      })
      .catch(error => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    if (this.value === state && state !== '') {
      this.checked = true;
    }
  }

  /**
   * Sets the validity state of the radio component.
   * @param isValid - Boolean value to set the validity
   * @internal
   */
  setComponentValidity(isValid: boolean) {
    if (isValid) {
      this.internals.setValidity({});
    } else if (this.required && !this.checked) {
      this.setValidity();
    }
    this.updateTabIndex();
  }

  /**
   * Sets the validity of the group of radios.
   * @param radios - Array of radios of the same group
   * @param isValid - Boolean value to set the validity of the group
   * @internal
   */
  private setGroupValidity(radios: Radio[], isValid: boolean) {
    this.updateComplete
      .then(() => {
        radios.forEach(radio => radio.setComponentValidity(isValid));
      })
      .catch(error => this.onerror?.(error));
  }

  /**
   * Updates the form value to reflect the current state of the radio.
   * If checked, the value is set to the user-provided value or 'on' if no value is provided.
   * If unchecked, the value is set to null.
   * @internal
   */
  private setActualFormValue() {
    const radios = this.getAllRadiosWithinSameGroup();

    if (this.checked) {
      this.setGroupValidity(radios, true);
      this.internals.setFormValue(this.value || 'on');
    } else {
      const anyRequired = radios.some(r => r.required);
      const anyChecked = radios.some(r => r.checked);
      const isInvalid = anyRequired && !anyChecked;

      this.setGroupValidity(radios, !isInvalid);
      this.internals.setFormValue(null);
    }
  }

  /**
   * Handles the change event on the radio element.
   * Unchecks all other radios in the same group and checks this radio.
   * Dispatches the change event.
   * @param emitClick - A boolean when click event must be emitted before other events
   * @internal
   */
  private handleChange(emitClick = false): void {
    if (this.checked || this.disabled || this.readonly || this.softDisabled) return;

    const radios = this.getAllRadiosWithinSameGroup();
    //  Uncheck all radios in the same group (name)
    radios.forEach(radio => {
      radio.checked = false;
    });
    this.checked = true;

    // Native radio input emits click, input and change event in this order when
    if (emitClick) {
      super.click();
    }
    this.emitCheckedChangeEvent();
  }

  override click() {
    this.handleChange(true);
  }

  /**
   * Updates the state of the radio button at the specified index within the enabled radios.
   * Focuses the radio button and triggers the change event.
   * @param enabledRadios - An array of enabled radio buttons within the same group.
   * @param index - The index of the radio button to be updated within the enabled radios array.
   * @internal
   */
  private updateRadio(enabledRadios: Radio[], index: number) {
    const radio = enabledRadios[index] as Radio;
    radio.focus();
    radio.handleChange();
  }

  private handleClick(): void {
    this.handleChange();
  }

  private emitCheckedChangeEvent(): void {
    if (this.checked) {
      this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }
  }

  /**
   * Handles the keydown event on the radio element.
   * Supports Arrow keys for navigation between radios in the same group, Space for selection, and Enter for form submission.
   * @param event - The keyboard event.
   * @internal
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (this.disabled) return;

    const action = this.getActionForKeyEvent(event);

    if ((this.readonly || this.softDisabled) && action === ACTIONS.SPACE) {
      event.preventDefault();
    }

    const radios = this.getAllRadiosWithinSameGroup();
    const enabledRadios = radios.filter(radio => !radio.disabled);
    const currentIndex = enabledRadios.indexOf(this);

    // Leave navigation between radios to the spatial navigation context if it exists
    if (this.getKeyboardNavMode() === NAV_MODES.SPATIAL) {
      if (action === ACTIONS.ENTER) {
        this.updateRadio(enabledRadios, currentIndex);
        this.keyDownEventHandled();
      }
      this.updateTabIndex();

      return;
    }

    if (action === ACTIONS.DOWN || action === ACTIONS.RIGHT) {
      // Move focus to the next radio
      const nextIndex = (currentIndex + 1) % enabledRadios.length;
      this.updateRadio(enabledRadios, nextIndex);
    } else if (action === ACTIONS.UP || action === ACTIONS.LEFT) {
      // Move focus to the previous radio
      const prevIndex = (currentIndex - 1 + enabledRadios.length) % enabledRadios.length;
      this.updateRadio(enabledRadios, prevIndex);
    } else if (action === ACTIONS.SPACE) {
      this.updateRadio(enabledRadios, currentIndex);
    }
    this.updateTabIndex();

    if (action === ACTIONS.ENTER) {
      this.form?.requestSubmit();
    }
  }

  /**
   * Updates tab index for all radios in the same group (name).
   * If any radio in the group is checked, it will have a tab index of 0.
   * If no radio is checked, the first enabled radio will have a tab index of 0.
   * This ensures proper keyboard navigation within radio groups.
   * @internal
   */
  private updateTabIndex(): void {
    // Leave navigation between radios to the spatial navigation context if it exists
    const isSpatialNavMode = this.getKeyboardNavMode() === NAV_MODES.SPATIAL;
    const radios = this.getAllRadiosWithinSameGroup();
    const checked = radios.find(radio => radio.checked);
    const firstEnabledRadio = radios.find(radio => !radio.disabled);
    radios.forEach(radio => {
      radio.tabIndex = -1;

      if (isSpatialNavMode) {
        radio.tabIndex = 0;
      } else if (radio === checked) {
        radio.tabIndex = 0;
      } else if (!checked && radio === firstEnabledRadio) {
        radio.tabIndex = 0;
      }
    });
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('checked')) {
      this.ariaChecked = this.checked.toString();
      this.setActualFormValue();
    }
    if (changedProperties.has('label')) {
      this.updateAriaLabel();
    }
  }

  /**
   * Updates the aria-label of the radio element based on the label or data-aria-label attribute.
   * @internal
   */
  private updateAriaLabel() {
    if (!this.ariaLabel && this.ariaLabel !== this.label) {
      this.ariaLabel = this.label || '';
    }
  }

  override setValidity() {
    if (this.required && !this.checked && this.validationMessage) {
      this.internals.setValidity({ valueMissing: true, customError: true }, this.validationMessage, this);
    }
    this.internals.setValidity({});
  }

  public override render() {
    return html`
      <slot name="indicator">
        <mdc-staticradio
          part="radio-indicator"
          role="presentation"
          class="mdc-focus-ring"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?soft-disabled="${this.softDisabled}"
        >
        </mdc-staticradio>
      </slot>
      <div part="label-text">
        <slot name="label">${this.renderLabelElement()}</slot>
        ${this.required ? html`<span part="required-indicator">*</span>` : nothing}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Radio;
