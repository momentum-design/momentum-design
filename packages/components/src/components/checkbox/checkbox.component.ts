import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import styles from './checkbox.styles';
import Helperlabel from '../helperlabel';

/**
 * checkbox component, which ...
 *
 * @tagname mdc-checkbox
 */
class Checkbox extends DisabledMixin(Helperlabel) {
  /**
   * checked
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * name
   */
  @property({ type: String }) name?: string;

  /**
   * value
   */
  @property({ type: String }) value?: string;

  /**
   * indeterminate
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /**
   * input
   */
  // @query('#input')
  // private checkbox!: HTMLInputElement;

  private handleChange(): void {
    const changeEvent = new Event('change', {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(changeEvent);
  }

  public override render() {
    return html`
      <label class="container">
        <input
          id="${this.id}"
          type="checkbox"
          class="mdc-checkbox__input"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          @change="${this.handleChange}"
          aria-label="${ifDefined(this.label)}"
          aria-checked="${this.checked}"
          aria-disabled="${this.disabled}"
          role="checkbox"
          tabindex="0"
        />
        <mdc-icon
          class="check-icon"
          name="check-regular"
          size="1"
          length-unit="rem"
        ></mdc-icon>
        <div class="label-text">
          ${this.label}
        </div>
      </label>
    `;
  }

  public static override styles: Array<CSSResult> = [...Helperlabel.styles, ...styles];
}

export default Checkbox;
