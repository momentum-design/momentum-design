import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './modalcontainer.styles';
import { Component } from '../../models';
import { DEFAULTS } from './modalcontainer.constants';
import type { ModalContainerColor, ModalContainerElevation, ModalContainerRole } from './modalcontainer.types';

/**
 * The `mdc-modalcontainer` component is an element used to
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
 * @slot - Default slot for modal container
 */
class Modalcontainer extends Component {
  /**
   * Color of the modalcontainer
   * - **tonal**
   * - **contrast**
   * @default tonal
   */
  @property({ type: String, reflect: true })
  color: ModalContainerColor = DEFAULTS.COLOR;

  /**
   * Elevation of the modalcontainer where each value corresponds to a different drop shadow.
   * - **0**
   * - **1**
   * - **2**
   * - **3**
   * - **4**
   * @default 0
   */
  @property({ type: Number, reflect: true })
  elevation: ModalContainerElevation = DEFAULTS.ELEVATION;

  /**
   * Role of the modalcontainer
   * @default dialog
   */
  @property({ type: String })
  override role: ModalContainerRole = DEFAULTS.ROLE;

  public override render() {
    return html`
      <div 
        id='mdc-modal-container' 
        class='mdc-modal-container'  
        ?contrast="${this.color === 'contrast'}"
        role="${this.role}"
        aria-modal='true'
        aria-label=${ifDefined(this.ariaLabel) as string}
        data-elevation="${this.elevation}"
        >
        <slot></slot>
      </div>
      `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Modalcontainer;
