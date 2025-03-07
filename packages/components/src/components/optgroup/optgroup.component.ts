import { CSSResult, html } from 'lit';
import styles from './optgroup.styles';
import { Component } from '../../models';

/**
 * optgroup component, which ...
 *
 * @tagname mdc-optgroup
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Optgroup extends Component {
  public override render() {
    return html`<p>This is a dummy optgroup component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Optgroup;
