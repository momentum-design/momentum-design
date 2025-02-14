import { CSSResult, html } from 'lit';
import styles from './formfieldgroup.styles';
import { Component } from '../../models';

/**
 * formfieldgroup component, which ...
 *
 * @tagname mdc-formfieldgroup
 *
 * @slot default - This is a default/unnamed slot
 */
class FormfieldGroup extends Component {
  public override render() {
    return html`<p>This is a dummy formfieldgroup component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default FormfieldGroup;
