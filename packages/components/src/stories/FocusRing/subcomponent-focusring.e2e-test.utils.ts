import { html, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS, TAG_NAME } from './subcomponent-focusring.constants';
import styles from './subcomponent-focusring.styles';

class SubComponentFocusRing extends Component {
  @property({ type: String })
  shape: string = DEFAULTS.SHAPE;

  override render() {
    switch (this.shape) {
      case 'mds-button':
        return html`<button class="mds-button" aria-label="Subcomponent Focus Ring">ClickMe</button>`;
      case 'mds-radio':
        return html`<input type="radio" aria-label="Subcomponent Focus Ring" id="radio" name="group" class="mds-radio" /><label for="radio">SelectMe</label>`;
      case 'mds-checkbox':
        return html`<input type="checkbox" aria-label="Accept Terms" id="checkbox" name="terms" class="mds-checkbox" /><label for="checkbox">Accept Terms</label>`;
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
