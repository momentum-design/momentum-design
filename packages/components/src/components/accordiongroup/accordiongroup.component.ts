import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';

import { DEFAULTS } from './accordiongroup.constants';
import styles from './accordiongroup.styles';
import { Size, Variant } from './accordiongroup.types';

/**
 * accordiongroup component, which ...
 *
 * @tagname mdc-accordiongroup
 *
 * @slot default - This is a default/unnamed slot
 *
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Accordiongroup extends Component {
  /**
   * The size of the accordion item.
   * @default 'small'
   */
  @property({ type: String, reflect: true }) size: Size = DEFAULTS.SIZE;

  /**
   * The variant of the accordion item. Based on the variant, the styling of the accordion gets changed.
   * @default 'stacked'
   */
  @property({ type: String, reflect: true }) variant: Variant = DEFAULTS.VARIANT;

  public override render() {
    return html`<p>This is a dummy accordiongroup component!</p>
      <slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Accordiongroup;
