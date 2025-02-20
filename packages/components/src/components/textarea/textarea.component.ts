import { CSSResult, html } from 'lit';
import styles from './textarea.styles';
import { Component } from '../../models';

/**
 * textarea component, which ...
 *
 * @tagname mdc-textarea
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Textarea extends Component {
  public override render() {
    return html`<textarea></textarea><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Textarea;
