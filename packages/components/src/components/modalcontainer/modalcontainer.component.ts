import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './modalcontainer.styles';
import { Component } from '../../models';
import { DEFAULTS } from './modalcontainer.constants';
import type { ModalContainerColor, ModalContainerElevation } from './modalcontainer.types';

/**
 * The `mdc-modalcontainer` component is a versatile UI element used to
 * display a modal container that can further be used in popover.
 *
 * @tagname mdc-modalcontainer
 *
 * @cssproperty --mdc-modalcontainer-primary-background-color - primary background color of the modalcontainer
 * @cssproperty --mdc-modalcontainer-border-color - border color of the modalcontainer
 * @cssproperty --mdc-modalcontainer-inverted-background-color - inverted background color of the modalcontainer
 * @cssproperty --mdc-modalcontainer-inverted-border-color - inverted border color of the modalcontainer
 * @cssproperty --mdc-modalcontainer-inverted-text-color - inverted text color of the modalcontainer
 *
 */
class Modalcontainer extends Component {
  /**
   * Color of the modalcontainer
   * @default tonal
   */
  @property({ type: String, reflect: true })
  color: ModalContainerColor = DEFAULTS.COLOR;

  /**
   * Elevation of the modalcontainer
   * @default 0
   */
  @property({ type: Number, reflect: true })
  elevation: ModalContainerElevation = DEFAULTS.ELEVATION;

  /**
   * Role of the modalcontainer
   * @default dialog
   */
  @property({ type: String })
  override role: string = DEFAULTS.ROLE;

  /**
   * Aria modal of the modalcontainer
   * @default true
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
