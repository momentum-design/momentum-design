import { html, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS, TAG_NAME } from './subcomponent-focusring.constants';
import styles from './subcomponent-focusring.styles';

/**
 * The Focus Ring provides a visual indication of focus for users navigating via keyboard or mouse.
 * @tagname mdc-subcomponent-focusring
 */
class SubComponentFocusRing extends Component {
  /**
   * Current shape class
   *
   * Default: 'mds-button'
   */
  @property({ type: String })
  shape: string = DEFAULTS.SHAPE;

  override render() {
    switch (this.shape) {
      case 'mds-button':
        return html`<button class="mds-button">ClickMe</button>`;
      case 'mds-radio':
        return html`<input type="radio" id="radio" name="group" class="mds-radio" /><label for="radio"
            >SelectMe</label
          >`;
      case 'mds-checkbox':
        return html`
          <input type="checkbox" id="checkbox" name="terms" class="mds-checkbox" />
          <label for="checkbox">Accept Terms</label>
        `;
      default:
        return null;
    }
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

SubComponentFocusRing.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent-focusring']: SubComponentFocusRing;
  }
}
