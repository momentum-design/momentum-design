/* eslint-disable no-param-reassign */
import { CSSResult, html, nothing, PropertyValueMap, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import { ROLE } from '../../utils/roles';
import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';
import { ACTIONS, KeyToActionMixin } from '../../utils/mixins/KeyToActionMixin';

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
 * **Note:** This component internally renders a native radio input element with custom styling.
 *
 * ## When to use
 * Use radio buttons when users must select exactly one option from a list of 2-5 choices. For longer lists,
 * consider using a dropdown menu instead.
 *
 * ## Accessibility
 * - Provide clear labels that describe each option
 * - Use `data-aria-label` when a visual label is not present
 * - Keyboard navigation: Arrow keys to move between options, Space to select, Tab to navigate groups, Enter to submit form
 * - Group related radio buttons using the same `name` attribute or `mdc-radiogroup` component
 *
 * ## Styling
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
 * @event change - (React: onChange) Event that gets dispatched when the radio state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the radio receives focus.
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 * @csspart radio-input - The native radio input element that provides the interactive functionality.
 * @csspart text-container - The container for the label and helper text elements.
 * @csspart static-radio - The staticradio that provides the visual radio appearance.
 */

class Radio
  extends KeyToActionMixin(AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper))))
  implements AssociatedFormControl
{
  /**
   * Determines whether the radio is checked (selected) or unchecked.
   * Within a radio group, only one radio can be checked at a time.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  override connectedCallback(): void {
    super.connectedCallback();
    // Radio does not contain helpTextType property.
    this.helpTextType = undefined as unknown as ValidationType;
  }

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.updateTabIndex();

    // set the element to auto focus if autoFocusOnMount is set to true
    // before running the super method, so that the AutoFocusOnMountMixin can use it
    // to focus the correct element
    if (this.inputElement && this.autoFocusOnMount) {
      this.elementToAutoFocus = this.inputElement;
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
      if (this.validationMessage) {
        this.inputElement.setCustomValidity(this.validationMessage);
      } else {
        this.inputElement.setCustomValidity('');
      }
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
        radios.forEach(radio => {
          radio.setComponentValidity(isValid);
        });
      })
      .catch(error => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
  }

  /**
   * Updates the form value to reflect the current state of the radio.
   * If checked, the value is set to the user-provided value or 'on' if no value is provided.
   * If unchecked, the value is set to null.
   * @internal
   */
  private setActualFormValue() {
    let actualValue: string | null = '';

    if (this.checked) {
      actualValue = !this.value ? 'on' : this.value;
    } else {
      actualValue = null;
    }

    const radios = this.getAllRadiosWithinSameGroup();
    if (this.checked) {
      this.setGroupValidity(radios, true);
    } else {
      const anyRequired = radios.some(r => r.required);
      const anyChecked = !!radios.find(r => r.checked);
      const isInvalid = anyRequired && !anyChecked;
      this.setGroupValidity(radios, !isInvalid);
    }

    this.internals.setFormValue(actualValue);
  }

  /**
   * Handles the change event on the radio element.
   * Unchecks all other radios in the same group and checks this radio.
   * Dispatches the change event.
   * @internal
   */
  private handleChange(): void {
    if (this.disabled || this.readonly || this.softDisabled) return;

    const radios = this.getAllRadiosWithinSameGroup();
    radios.forEach(radio => {
      /**
       *  Uncheck all radios in the same group (name)
       */
      const radioElement = radio.shadowRoot?.querySelector('input');
      if (radioElement) {
        radio.checked = false;
        radioElement.checked = false;
      }
    });
    this.checked = true;
    const inputElement = this.shadowRoot?.querySelector('input');
    if (inputElement) {
      inputElement.checked = true;
    }

    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  /**
   * Updates the state of the radio button at the specified index within the enabled radios.
   * Focuses the radio button and triggers the change event.
   * @param enabledRadios - An array of enabled radio buttons within the same group.
   * @param index - The index of the radio button to be updated within the enabled radios array.
   * @internal
   */
  private updateRadio(enabledRadios: Radio[], index: number) {
    enabledRadios[index].shadowRoot?.querySelector('input')?.focus();
    enabledRadios[index].handleChange();
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
    const radios = this.getAllRadiosWithinSameGroup();
    const checked = radios.find(radio => radio.checked);
    const firstEnabledRadio = radios.find(radio => !radio.disabled);
    radios.forEach(radio => {
      const inputElement = radio.shadowRoot?.querySelector('input');
      if (inputElement) {
        inputElement.tabIndex = -1;
        if (radio === checked) {
          inputElement.tabIndex = 0;
        } else if (!checked && radio === firstEnabledRadio) {
          inputElement.tabIndex = 0;
        }
      }
    });
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('checked')) {
      this.setActualFormValue();
    }
  }

  /** @internal */
  private renderLabelAndHelperText = () => {
    if (!this.label) return nothing;
    return html`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`;
  };

  public override render() {
    return html`
      <mdc-staticradio
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?soft-disabled="${this.softDisabled}"
        part="static-radio"
      >
        <input
          id="${this.inputId}"
          part="radio-input"
          type="radio"
          role="${ROLE.RADIO}"
          ?autofocus="${this.autofocus}"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          ?required="${this.required}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
          ?checked=${this.checked}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          aria-checked="${this.checked}"
          aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
          aria-label="${this.dataAriaLabel ?? ''}"
        />
      </mdc-staticradio>
      ${this.renderLabelAndHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Radio;
