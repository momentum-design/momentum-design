import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './modalcontainer.styles';
import { Component } from '../../models';
import { DEFAULTS } from './modalcontainer.constants';
import type { ModalContainerColor, ModalContainerElevation } from './modalcontainer.types';

/**
 * The `mdc-modalcontainer` component is a versatile UI element used to
 * display a modal container that use in popover.
 *  *
 * @tagname mdc-modalcontainer
 *
 * @slot default - This is a default/unnamed slot
 *
 */
class Modalcontainer extends Component {
  /**
   * Color of the modalcontainer
   */
  @property({ type: String, reflect: true })
  color: ModalContainerColor = DEFAULTS.COLOR;

  /**
   * Elevation of the modalcontainer
   */
  @property({ type: Number, reflect: true })
  elevation: ModalContainerElevation = DEFAULTS.ELEVATION;

  /**
   * Role of the modalcontainer
   */
  @property({ type: String })
  override role: string = DEFAULTS.ROLE;

  /**
   * Aria modal of the modalcontainer
   */
  @property({ type: String, attribute: 'aria-modal' })
  override ariaModal: string = 'true';

  public override render() {
    return html`
      <div 
        id='modal-container' 
        class='modal-container'  
        ?contrast="${this.color === 'contrast'}"
        role="${this.role}"
        aria-modal=${this.ariaModal}
        data-elevation="${this.elevation}"
        >
        <slot></slot>
      </div>
      `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Modalcontainer;
