import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import styles from './checkbox.styles';

/**
 * checkbox component, which ...
 *
 * @tagname mdc-checkbox
 */
class Checkbox extends DisabledMixin(Component) {
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
   * label
   */
  @property({ type: String }) label?: string;

  /**
   * helper-text
   */
  @property({ type: String, attribute: 'help-text' }) helpText?: string;

  /**
   * indeterminate
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  private handleChange(): void {
    const changeEvent = new Event('change', {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(changeEvent);
  }

  public override render() {
    return html`
      <label class="mdc-checkbox__container">
        <input
          id="${this.id}"
          type="checkbox"
          class="mdc-checkbox__input"
          ?checked="${this.indeterminate ? true : this.checked}"
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
        <span class="mdc-checkbox__label-text">
          <mdc-icon
            class="mdc-checkbox__icon"
            name="${this.indeterminate ? 'minus-regular' : 'check-regular'}"
            size="1"
            length-unit="rem"
          ></mdc-icon>
        ${this.label}</span>
      </label>
      ${this.helpText ? html`
        <mdc-text
          class="mdc-checkbox__help-text"
          tagname="${VALID_TEXT_TAGS.SPAN}"
          type="${TYPE.BODY_MIDSIZE_REGULAR}"
        >${this.helpText}</mdc-text>` : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkbox;
