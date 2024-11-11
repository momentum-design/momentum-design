import { CSSResult, html } from 'lit';
import styles from './button.styles';
import { Component } from '../../models';

/**
 * button component, which ...
 *
 * @tagname mdc-button
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Button extends Component {
  public override render() {
    return html`<p>This is a dummy button component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Button;
