import { CSSResult, html } from 'lit';
import styles from './menupopover.styles';
import { Component } from '../../models';

/**
 * menupopover component, which ...
 *
 * @tagname mdc-menupopover
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class MenuPopover extends Component {
  public override render() {
    return html`<p>This is a dummy menupopover component!</p><slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuPopover;
