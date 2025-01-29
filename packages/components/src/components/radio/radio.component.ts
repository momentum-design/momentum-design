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
  * Determines whether the radio is selected or unselected.
  *
  * @default false
  */
  @property({ type: Boolean, reflect: true }) readonly = false;

  override firstUpdated() {
    this.updateTabIndex();
  }

  /**
   * Returns all radios within the same group (name).
   */
  private getAllRadiosWithinSameGroup(): Radio[] {
    return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`));
  }

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
   * Handles the keydown event(Arrow Up/Down/Left/Right) on the radio element.
   * This will move focus to the next or previous radio element in the group.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.readonly) return;

    const radios = this.getAllRadiosWithinSameGroup();
    const enabledRadios = radios.filter((radio) => !radio.disabled && !radio.readonly);
    const currentIndex = enabledRadios.indexOf(this);

    if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
      // Move focus to the next radio
      const nextIndex = (currentIndex + 1) % enabledRadios.length;
      enabledRadios[nextIndex].shadowRoot?.querySelector('input')?.focus();
      enabledRadios[nextIndex].handleChange(event);
    } else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
      // Move focus to the previous radio
      const prevIndex = (currentIndex - 1 + enabledRadios.length) % enabledRadios.length;
      enabledRadios[prevIndex].shadowRoot?.querySelector('input')?.focus();
      enabledRadios[prevIndex].handleChange(event);
    }
    this.updateTabIndex();
    this.dispatchChangeEvent(event);
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
            aria-label="${ifDefined(this.label || this.name)}"
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
