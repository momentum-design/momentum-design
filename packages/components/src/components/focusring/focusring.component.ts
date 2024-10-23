import { html, CSSResult } from 'lit';
import { Component } from '../../models';
import { property } from 'lit/decorators.js';
import { DEFAULTS } from './focusring.constants';
import styles from './focusring.styles';

// Subcomponent to be rendered in storybook, to showcase that the
// shape can be consumed as a subcomponent
class SubComponentFocusRing extends Component {
  /**
   * Current shape class
   *
   * Default: 'mds-div'
   */
  @property({ type: String})
  shapeclass: string = DEFAULTS.SHAPE_CLASS;
 
  override render() {
    switch (this.shapeclass) {
      case 'mds-div':
        return html`<div tabindex="0" class="mds-div">Focusable Div</div>`;
      case 'mds-anchor':
        return html`<a href="#" class="mds-anchor">LinkText</a>`;
      case 'mds-button':
        return html`<button class="mds-button">ClickMe</button>`;
      case 'mds-radio':
        return html`<input type="radio" id="radio" name="group" class="mds-radio"><label for="radio">SelectMe</label>`;
      default:
        return null; // In case of an invalid shapeclass
    }
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default SubComponentFocusRing;
