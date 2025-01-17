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

  private handleChange(e: Event): void {
    this.checked = !(e.target as HTMLInputElement).checked;
    const changeEvent = new Event('change', {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(changeEvent);
  }

  public override render() {
    return html`
      <input
        id="${this.id}"
        type="checkbox"
        class="mdc-focus-ring mdc-checkbox__native-control"
        ?checked="${this.checked}"
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
      <div>${this.renderHeaderLabel()} ${this.renderFooterHelperText()}</div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Helperlabel.styles, ...styles];
}

export default Checkbox;
