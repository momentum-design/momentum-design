import { CSSResult, html } from 'lit';

import { Component } from '../../models';

import styles from './accordiongroup.styles';

/**
 * accordiongroup component, which ...
 *
 * @tagname mdc-accordiongroup
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Accordiongroup extends Component {
  public override render() {
    return html`<p>This is a dummy accordiongroup component!</p>
      <slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Accordiongroup;
