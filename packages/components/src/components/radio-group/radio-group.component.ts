import { CSSResult, html } from 'lit';
import styles from './radio-group.styles';
import { Component } from '../../models';

/**
 * radio-group component, which ...
 *
 * @tagname mdc-radio-group
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class RadioGroup extends Component {
  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default RadioGroup;
