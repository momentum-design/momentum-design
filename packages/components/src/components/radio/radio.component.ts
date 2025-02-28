import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { v4 as uuidv4 } from 'uuid';
import { NameMixin } from '../../utils/mixins/NameMixin';
import { ValueMixin } from '../../utils/mixins/ValueMixin';
import styles from './radio.styles';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';

/**
 * Radio allow users to select single options from a list or turn an item/feature on or off.
 * These are often used in forms, settings, and selection in lists.
 *
 * A radio component contains an optional label, optional info icon and an optional helper text.
 * @dependency mdc-formfieldwrapper
 *
 * @tagname mdc-radio
 *
 * @event change - (React: onChange) Event that gets dispatched when the radio state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the radio receives focus.
 *
 * @cssproperty --mdc-radio-inner-circle-size - size of the inner circle
 * @cssproperty --mdc-radio-text-disabled-color - color of the label when disabled
 * @cssproperty --mdc-radio-disabled-border-color - color of the radio button border when disabled
 * @cssproperty --mdc-radio-normal-border-color - color of the radio button border when normal
 * @cssproperty --mdc-radio-inner-circle-normal-background - background color of the inner circle when normal
 * @cssproperty --mdc-radio-inner-circle-disabled-background - background color of the inner circle when disabled
 * @cssproperty --mdc-radio-control-inactive-color - color of the radio button when inactive
 * @cssproperty --mdc-radio-control-inactive-hover - color of the radio button when inactive and hovered
 * @cssproperty --mdc-radio-control-inactive-pressed-color - color of the radio button when inactive and pressed
 * @cssproperty --mdc-radio-control-inactive-disabled-background - background color of the radio button when
 *  inactive and disabled
 * @cssproperty --mdc-radio-control-active-color - color of the radio button when active
 * @cssproperty --mdc-radio-control-active-hover-color - color of the radio button when active and hovered
 * @cssproperty --mdc-radio-control-active-pressed-color - color of the radio button when active and pressed
 * @cssproperty --mdc-radio-control-active-disabled-background - background color of the radio button
 *  when active and disabled
 *
 */

class Radio extends NameMixin(ValueMixin(DataAriaLabelMixin(FormfieldWrapper))) {
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

  /** @internal */
  private internals: ElementInternals;

  /** @internal */
  static formAssociated = true;

  /** @internal */
  get form(): HTMLFormElement | null {
    return this.internals.form;
  }

  constructor() {
    super();
    /** @internal */
    this.internals = this.attachInternals();
    this.id = `mdc-input-${uuidv4()}`;
  }

  /**
   * Updates the form value to reflect the current state of the radio.
   * If checked, the value is set to the user-provided value.
   * If unchecked, the value is set to null.
   */
  private setFormValue() {
    this.internals.setFormValue(this.checked ? this.value : null);
  }

  override firstUpdated() {
    this.updateTabIndex();
  }

  /**
   * Returns all radios within the same group (name).
   */
  private getAllRadiosWithinSameGroup(): Radio[] {
    return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`));
  }

  /**
   * The 'change' event does not bubble up through the shadow DOM as it was not composed.
   * Therefore, we need to re-dispatch the same event to ensure it is propagated correctly.
   * Read more: https://developer.mozilla.org/en-US/docs/Web/API/Event/composed
   */
  private dispatchChangeEvent(event: Event): void {
    const EventConstructor = event.constructor as typeof Event;
    this.dispatchEvent(new EventConstructor(event.type, event));
  }

  /**
   * Handles the change event on the radio element.
   * This will toggle the state of the radio element.
   * Dispatches the change event.
   */
  private handleChange(event: Event): void {
    if (this.disabled || this.readonly) return;

    const radios = this.getAllRadiosWithinSameGroup();
    radios.forEach((radio) => {
      /**
        *  Uncheck all radios in the same group (name)
      */
      const radioElement = radio.shadowRoot?.querySelector('input');
      if (radioElement) {
        // eslint-disable-next-line no-param-reassign
        radio.checked = false;
        radioElement.checked = false;
      }
    });
    this.checked = true;
    const inputElement = this.shadowRoot?.querySelector('input');
    if (inputElement) {
      inputElement.checked = true;
    }
    this.updateTabIndex();
    this.dispatchChangeEvent(event);
  }

  /**
   * Updates the state of the radio button at the specified index within the enabled radios.
   * Focuses the radio button and triggers the change event if the radio button is not read-only.
   *
   * @param enabledRadios - An array of enabled radio buttons within the same group.
   * @param index - The index of the radio button to be updated within the enabled radios array.
   * @param event - The event that triggered the update.
   */
  private updateRadio(enabledRadios: Radio[], index: number, event: Event) {
    enabledRadios[index].shadowRoot?.querySelector('input')?.focus();
    enabledRadios[index].handleChange(event);
  }

  /**
   * Handles the keydown event (Arrow Up/Down/Left/Right) on the radio element.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (this.disabled) return;

    const radios = this.getAllRadiosWithinSameGroup();
    const enabledRadios = radios.filter((radio) => !radio.disabled);
    const currentIndex = enabledRadios.indexOf(this);

    if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
      // Move focus to the next radio
      const nextIndex = (currentIndex + 1) % enabledRadios.length;
      this.updateRadio(enabledRadios, nextIndex, event);
    } else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
      // Move focus to the previous radio
      const prevIndex = (currentIndex - 1 + enabledRadios.length) % enabledRadios.length;
      this.updateRadio(enabledRadios, prevIndex, event);
    }
    this.updateTabIndex();
  }

  /**
   * Update tab index for all radios in the same group (name)
   * If any radio group is checked, it will have a tab index of 0
   * If no radio group is checked, the first enabled radio will have a tab index of 0
   */
  private updateTabIndex(): void {
    const radios = this.getAllRadiosWithinSameGroup();
    const checked = radios.find((radio) => radio.checked);
    const firstEnabledRadio = radios.find((radio) => !radio.disabled);
    radios.forEach((radio) => {
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
      this.setFormValue();
    }
  }

  public override render() {
    const helpTextContent = this.helpText ? this.renderHelperText() : nothing;
    return html`
      <div class="mdc-radio__container">
        <div class="mdc-radio__icon-container mdc-focus-ring">
          <input
            id="${this.id}"
            type="radio"
            role="radio"
            name="${ifDefined(this.name)}"
            value="${ifDefined(this.value)}"
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
          <span class="mdc-radio__icon"></span>
        </div>
        <div class="mdc-radio__label-container">
          ${this.renderLabel()}
          ${helpTextContent}
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Radio;
