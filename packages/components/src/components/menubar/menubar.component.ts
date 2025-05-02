import { CSSResult, html } from 'lit';
import styles from './menubar.styles';
import { Component } from '../../models';

/**
 * menubar component, which ...
 *
 * @tagname mdc-menubar
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class MenuBar extends Component {
  public override render() {
    return html`<p>This is a dummy menubar component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuBar;
