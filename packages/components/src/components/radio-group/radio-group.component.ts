import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import styles from './radio-group.styles';

/**
 * Radio Group Component - This is the wrapper component for radio buttons which are grouped together.
 *
 * @tagname mdc-radio-group
 *
 * @slot default - This is a default/unnamed slot
 *
 */
class RadioGroup extends Component {
  /**
   * The label of the radio group.
   * @default ''
   */
  @property({ type: String }) label = '';

  /**
   * The description of the radio group.
   * @default ''
   */
  @property({ type: String }) description = '';

  public override render() {
    return html`
        ${this.label ? html`<span id="mdc-radio-group__label">${this.label}</span>` : ''}
        ${this.description ? html`<span id="mdc-radio-group__label">${this.description}</span>` : ''}
        <div class="mdc-radio-group" role="radiogroup" aria-labelledby="${this.label ? 'radio-group-label' : ''}">
          <slot></slot>
        </div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default RadioGroup;
