import { CSSResult, html } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { v4 as uuidv4 } from 'uuid';
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
 *
 * @dependency mdc-icon
 * @dependency mdc-labelandhelper
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

  /**
  * The unique id of the input field. It is used to link the input field with the label.
  * @default `mdc-input-${uuidv4()}`
  */
  @property({ type: String }) override id = `mdc-input-${uuidv4()}`;

  /**
   * Triggers a change event on the radio element.
   * This is used to dispatch the change event.
   */
  private triggerChangeEvent(): void {
    const changeEvent = new CustomEvent('change', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        checked: this.checked,
      },
    });
    this.dispatchEvent(changeEvent);
  }

  /**
   * Toggles the state of the radio element.
   * If the radio element is not disabled,
   * then we will toggle its checked state
   * and also trigger a change event.
   */
  private toggleState(): void {
    if (!this.disabled && !this.readonly) {
      this.checked = !this.checked;
      this.triggerChangeEvent();
    }
  }

  /**
   * Handles the keydown event on the radio.
   * If the key is 'Enter' or 'Space', the radio is toggled.
   *
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (this.disabled && this.readonly) {
      return;
    }
    if (['Enter', ' '].includes(event.key)) {
      this.toggleState();
    }
  }

  public override render() {
    return html`
      <div class="mdc-radio__container">
        <div class="mdc-radio__icon-container ${classMap({ 'mdc-focus-ring': !this.disabled && !this.readonly })}">
          <input
            id="${this.id}"
            type="radio"
            name="${ifDefined(this.name)}"
            value="${ifDefined(this.value)}"
            @click=${this.toggleState}
            @keydown=${this.handleKeyDown}
            ?checked="${this.checked}"
            ?readonly="${this.readonly}"
            ?disabled="${this.disabled}"
            class="mdc-radio__input"
            aria-checked="${this.checked}"
            aria-disabled="${this.disabled}"
            aria-label="${ifDefined(this.label || this.name)}"
            tabindex="${this.disabled ? -1 : 0}"
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
