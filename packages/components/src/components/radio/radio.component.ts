import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { NameMixin } from '../../utils/mixins/NameMixin';
import { ValueMixin } from '../../utils/mixins/ValueMixin';
import styles from './radio.styles';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';

/**
 * Radio allow users to select single options from a list or turn an item/feature on or off.
 * These are often used in forms, settings, and selection in lists.
 *
 * A radio component contains an optional label, optional info icon and an optional helper text.
 * @dependency mdc-formfieldwrapper
 *
 * @tagname mdc-radio
 */

class Radio extends NameMixin(ValueMixin(DisabledMixin(FormfieldWrapper))) {
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

  /**
   * Specifies the aria-label attribute for accessibility purposes.
   */
  @property({ type: String, reflect: true, attribute: 'data-aria-label' }) dataAriaLabel: string = '';

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
      const radioHostElement = radio;
      const radioElement = radio.shadowRoot?.querySelector('input');
      if (radioElement) {
        radioHostElement.checked = false;
        radioElement.checked = false;
      }
    });
    this.checked = true;
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
    if (!enabledRadios[index].readonly) {
      enabledRadios[index].handleChange(event);
    }
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

  public override render() {
    return html`
      <div class="mdc-radio__container">
        <div class="mdc-radio__icon-container mdc-focus-ring">
          <input
            id="${this.id}"
            type="radio"
            name="${ifDefined(this.name)}"
            value="${ifDefined(this.value)}"
            @change=${this.handleChange}
            @keydown=${this.handleKeyDown}
            ?checked="${this.checked}"
            ?readonly="${this.readonly}"
            ?disabled="${this.disabled}"
            class="mdc-radio__input"
            aria-checked="${this.checked}"
            aria-disabled="${this.disabled}"
            aria-label="${ifDefined(this.dataAriaLabel)}"
          />
          <span class="mdc-radio__icon"></span>
        </div>
        <div class="mdc-radio__label-container">
          ${this.renderLabel()}
          ${this.renderHelperText()}
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Radio;
