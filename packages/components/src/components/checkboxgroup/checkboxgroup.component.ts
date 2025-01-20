import { CSSResult, html } from 'lit';
import styles from './checkboxgroup.styles';
import { Component } from '../../models';

/**
 * checkboxgroup component, which ...
 *
 * @tagname mdc-checkboxgroup
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Checkboxgroup extends Component {
  public override render() {
    return html`<p>This is a dummy checkboxgroup component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkboxgroup;
