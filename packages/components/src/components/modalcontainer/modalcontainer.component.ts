import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './modalcontainer.styles';
import { Component } from '../../models';
import { DEFAULTS } from './modalcontainer.constants';
import type { ModalContainerColor, ModalContainerElevation } from './modalcontainer.types';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DataAriaDescribedbyMixin } from '../../utils/mixins/DataAriaDescribedbyMixin';
import { DataAriaLabelledbyMixin } from '../../utils/mixins/DataAriaLabelledbyMixin';

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
class Modalcontainer extends DataAriaLabelMixin(DataAriaLabelledbyMixin(DataAriaDescribedbyMixin(Component))) {
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
  @property({ type: String, reflect: true, attribute: 'data-role' })
  dataRole: HTMLElement['role'] = DEFAULTS.ROLE;

  /**
   * Aria modal of the modalcontainer
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'data-aria-modal' })
  dataAriaModal: boolean = DEFAULTS.ARIA_MODAL;

  public override render() {
    return html`
      <div
        role="${ifDefined(this.dataRole)}"
        aria-modal=${ifDefined(this.dataAriaModal === true ? 'true' : undefined)}
        aria-label="${ifDefined(this.dataAriaLabel)}"
        aria-labelledby="${ifDefined(this.dataAriaLabelledby)}"
        aria-describedby="${ifDefined(this.dataAriaDescribedby)}"
        part="container"
      >
        <slot></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Modalcontainer;
