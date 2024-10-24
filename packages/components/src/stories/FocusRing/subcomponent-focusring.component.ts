import { html, CSSResult } from 'lit';
import { Component } from '../../models';
import { property } from 'lit/decorators.js';
import { DEFAULTS } from './subcomponent-focusring.constants';
import styles from './subcomponent-focusring.styles';

/**
 * The Focus Ring provides a visual indication of focus for users navigating via keyboard or mouse. 
 * It is comprised of three distinct borders: black, blue, and light blue.
 * 
 * When the shared styles of the Focus Ring are applied to a component, that component in its focus state will automatically have the focus ring wrapped around every form (like rounded corners, edges, etc) without increasing its overall size.
 * 
 * Note:
 * Currently, the Focus Ring is not exported as part of our global web library. 
 * However, once there is an accessible component that requires the Focus Ring in its focus state (triggered by tab or click), the focus ring will wrap around that web component.
 * 
 * For now, there is a temporary component that consumes the shared styles. As you select any shape from the options below, you will see the focus ring wrap around the component.
 * 
 * @tagname mdc-subcomponent-focusring
 */
class SubComponentFocusRing extends Component {
  /**
   * Current shape class
   *
   * Default: 'mds-div'
   */
  @property({ type: String})
  shape: string = DEFAULTS.SHAPE;
 
  override render() {
    switch (this.shape) {
      case 'mds-div':
        return html`<div tabindex="0" class="mds-div">Focusable Div</div>`;
      case 'mds-anchor':
        return html`<a href="#" class="mds-anchor">LinkText</a>`;
      case 'mds-button':
        return html`<button class="mds-button">ClickMe</button>`;
      case 'mds-radio':
        return html`<input type="radio" id="radio" name="group" class="mds-radio"><label for="radio">SelectMe</label>`;
      default:
        return null; // In case of an invalid shape
    }
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default SubComponentFocusRing;
