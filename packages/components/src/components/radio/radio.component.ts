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
import { KEYS } from '../../utils/keys';
import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';

import styles from './radio.styles';

/**
 * Radio allow users to select single options from a list or turn an item/feature on or off.
 * These are often used in forms, settings, and selection in lists.
 *
 * A radio component contains an optional label, optional info icon and an optional helper text.
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
 * @cssproperty --mdc-radio-text-disabled-color - color of the label when disabled
 * @cssproperty --mdc-radio-control-inactive-hover - color of the radio button when inactive and hovered
 * @cssproperty --mdc-radio-control-inactive-pressed-color - color of the radio button when inactive and pressed
 * @cssproperty --mdc-radio-control-active-hover-color - color of the radio button when active and hovered
 * @cssproperty --mdc-radio-control-active-pressed-color - color of the radio button when active and pressed
 * @cssproperty --mdc-radio-disabled-border-color - color of the radio button when disabled
 * @cssproperty --mdc-radio-control-active-disabled-background - color of the radio button when active and disabled
 * @cssproperty --mdc-radio-control-inactive-disabled-background - color of the radio button when inactive and disabled
 *
 */

class Radio
  extends AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)))
  implements AssociatedFormControl
{
  /**
   * Determines whether the radio is selected or unselected.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Determines whether the radio is read-only.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) readonly = false;

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
   * If checked, the value is set to the user-provided value.
   * If unchecked, the value is set to null.
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
   * This will toggle the state of the radio element.
   * Dispatches the change event.
   */
  private handleChange(): void {
    if (this.disabled || this.readonly) return;

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
   * Focuses the radio button and triggers the change event if the radio button is not read-only.
   *
   * @param enabledRadios - An array of enabled radio buttons within the same group.
   * @param index - The index of the radio button to be updated within the enabled radios array.
   */
  private updateRadio(enabledRadios: Radio[], index: number) {
    enabledRadios[index].shadowRoot?.querySelector('input')?.focus();
    enabledRadios[index].handleChange();
  }

  /**
   * Handles the keydown event (Arrow Up/Down/Left/Right) on the radio element.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (this.disabled) return;

    const radios = this.getAllRadiosWithinSameGroup();
    const enabledRadios = radios.filter(radio => !radio.disabled);
    const currentIndex = enabledRadios.indexOf(this);

    if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
      // Move focus to the next radio
      const nextIndex = (currentIndex + 1) % enabledRadios.length;
      this.updateRadio(enabledRadios, nextIndex);
    } else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
      // Move focus to the previous radio
      const prevIndex = (currentIndex - 1 + enabledRadios.length) % enabledRadios.length;
      this.updateRadio(enabledRadios, prevIndex);
    } else if (event.key === KEYS.SPACE) {
      this.updateRadio(enabledRadios, currentIndex);
    }
    this.updateTabIndex();

    if (event.key === KEYS.ENTER) {
      this.form?.requestSubmit();
    }
  }

  /**
   * Update tab index for all radios in the same group (name)
   * If any radio group is checked, it will have a tab index of 0
   * If no radio group is checked, the first enabled radio will have a tab index of 0
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

  private renderLabelAndHelperText = () => {
    if (!this.label) return nothing;
    return html`<div class="mdc-radio__label-container">${this.renderLabel()} ${this.renderHelperText()}</div>`;
  };

  public override render() {
    return html`
      <mdc-staticradio
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
      >
        <input
          id="${this.inputId}"
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
          class="mdc-radio__input"
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
