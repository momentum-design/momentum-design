import { CSSResult, html } from 'lit';
import styles from './buttonavatar.styles';
import { Component } from '../../models';

/**
 * buttonavatar component, which ...
 *
 * @tagname mdc-buttonavatar
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class ButtonAvatar extends Component {
  public override render() {
    return html`<p>This is a dummy button avatar component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default ButtonAvatar;
